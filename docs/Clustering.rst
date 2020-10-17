.. _Clustering:

###########
Clustering
###########

    eXo Platform offers clustering solution to ensure high availability when needed.
    The cluster mode can be used as well to benefit from horizontal scalability
    in order to distribute the load into multiple servers especially
    when vertical scalability isn't efficient enough or isn't possible.

    The following diagram illustrates an abstract level of components architecture usually
    deployed for cluster based systems:

    |image0|

=====================================
How to install eXo Platform cluster ?
=====================================

1. Install each eXo Platform cluster node by following :ref:`Installation and Startup <Installation>`.

2. Configure on each eXo Platform cluster node the same RDBMS databases by following :ref:`Database configuration <Database>`.

3. Install an :ref:`Elasticsearch and configure each eXo Platform cluster node <Elasticsearch.ES_External>`

4. Install a :ref:`MongoDB <Configuration.MongoDBConfiguration>` and configure :ref:`each eXo Platform cluster node <Installation.ChatInstallation>`

5. Start each server using a command line using the following options:

       ::

           ./start_eXo.sh --cluster --cluster-current-host $NODE_NAME \
                   --cluster-host name=$NODE1_NAME,address=$NODE1_ADDRESS,http_protocol=$NODE1_HTTP_PROTOCOL,http_port=$NODE1_HTTP_PORT,tcp1_port=$NODE1_TCP1_PORT,tcp2_port=$NODE1_TCP2_PORT \
                   --cluster-host name=$NODE2_NAME,address=$NODE2_ADDRESS,http_protocol=$NODE2_HTTP_PROTOCOL,http_port=$NODE2_HTTP_PORT,tcp1_port=$NODE2_TCP1_PORT,tcp2_port=$NODE2_TCP2_PORT \
                   --cluster-host name=$NODE3_NAME,address=$NODE3_ADDRESS,http_protocol=$NODE3_HTTP_PROTOCOL,http_port=$NODE3_HTTP_PORT,tcp1_port=$NODE3_TCP1_PORT,tcp2_port=$NODE3_TCP2_PORT

with
       ::
          $NODE_NAME : current host name (a chosen unique alias, not related to DNS name)
          $NODE1_NAME, $NODE2_NAME... : each cluster host member name (you can pick any string, it has to be unique)
          $NODE1_ADDRESS,$NODE2_ADDRESS... : DNS name or IP address. (By default 127.0.0.1)
          $NODE1_HTTP_PROTOCOL, $NODE2_HTTP_PROTOCOL... : HTTP used protocol (http or https). (Default: http)
          $NODE1_HTTP_PORT, $NODE2_HTTP_PORT... : HTTP port of cluster host which is already configured in server.xml file. (Default 8080)
          $NODE1_TCP1_PORT, $NODE2_TCP1_PORT... : TCP (1) port that will be used for a first communication channel to synchronize caches.
                                                  (Default 7800. When starting server if the chosen port is not allowed the next port 7801 will be attempted)
          $NODE1_TCP2_PORT, $NODE2_TCP2_PORT... : TCP (2) port that will be used for a second communication channel to synchronize caches.
                                                  (Default 7900.  When starting server if the chosen port is not allowed the next port 7901 will be attempted)

By example for local tests, you can start local servers by using the following command lines :
      ::
          # First cluster host startup command line
          ./start_eXo.sh --cluster --cluster-current-host node1 --cluster-host name=node1 --cluster-host name=node2
          # Second cluster host startup command line
          ./start_eXo.sh --cluster --cluster-current-host node2 --cluster-host name=node1 --cluster-host name=node2

6. Install a Load balancer and configure it.

.. _Clustering.LoadBalancing:

==========================
Setting up a load balancer
==========================


.. _Clustering.LoadBalancing.Apache:

Setting up a basic load balancing with Apache
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following modules need to be activated in order to do load balancing
on several cluster nodes :

-  mod\_proxy\_balancer

-  mod\_slotmem\_shm (mandatory for mod\_proxy\_balancer)

-  mod\_lbmethod\_byrequests if you choose the by request balancing
   algorithm (can be also mod\_lbmethod\_bytraffic or
   mod\_lbmethod\_bybusyness)

Part of an apache configuration to enabled load balancing :

::

        # Add a http header to explicitly identify the node and be sticky
        Header add Set-Cookie "ROUTEID=.%{BALANCER_WORKER_ROUTE}e; path=/" env=BALANCER_ROUTE_CHANGED

        # Declare the http server pool
        <Proxy "balancer://plf">
          BalancerMember "http://node1:8080" route=node1 acquire=2000 retry=5 keepalive=on ping=30 connectiontimeout=2
          BalancerMember "http://node2:8080" route=node2 acquire=2000 retry=5 keepalive=on ping=30 connectiontimeout=2
          ProxySet stickysession=ROUTEID
        </Proxy>

        # Declare the pool dedicated to the websocket tunnels
        <Proxy "balancer://plf_ws">
          BalancerMember "ws://node1:8080" route=node1 acquire=2000 retry=0 keepalive=on ping=30 connectiontimeout=2 disablereuse=on flushpackets=on
          BalancerMember "ws://node2:8080" route=node2 acquire=2000 retry=0 keepalive=on ping=30 connectiontimeout=2 disablereuse=on flushpackets=on
          ProxySet stickysession=ROUTEID
        </Proxy>

        # Common options
        ProxyRequests           Off
        ProxyPreserveHost       On

        # Declare the redirection for websocket urls, must be declared before the general ProxyPass definition
        ProxyPass /cometd "balancer://plf_ws/cometd"

        # Declare the redirection for the http requests
        ProxyPass               /       "balancer://plf/"
        ProxyPassReverse        /       "balancer://plf/"

            


.. note:: This configuration must be adapted to you specific needs before you go to production.

		  All the configuration detail can be found on the `Apache configuration page <https://httpd.apache.org/docs/current/mod/mod_proxy_balancer.html>`__

.. _Clustering.LoadBalancing.ImproveLogs:

Improving the logs
~~~~~~~~~~~~~~~~~~~

Diagnose a cluster problem can be difficult. The Apache logs can be
customized to help you to follow the load balancing behavior.

The ``BALANCER_WORKER_ROUTE`` will add in your logs the name of the node
that received the requests.

The ``BALANCER_ROUTE_CHANGED`` will set the field to ``1`` if the user
was redirected to different node compared his previous request. This
indicate the node was removed from the cluster pool or was not able to
received more requests. During normal processing, this flag should
always have the value ``-``.

Example of log format with cluster diagnosis enabled :

::

    LogFormat "%h %l %u %t \"%r\" %>s %b %{BALANCER_WORKER_ROUTE}e %{BALANCER_ROUTE_CHANGED}e" common_cluster

.. note:: More log options are detailed in the `Apache documentation <https://httpd.apache.org/docs/current/mod/mod_proxy_balancer.html>`__

.. _Clustering.LoadBalancing.Nginx:

Setting up basic load balancing with NGINX
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. note:: The load balancing support on the free version of NGINX is limited.
          The sticky algorithm is limited to ip hash and the nodes configuration can't be precisly tuned.

           If you have a NGINX plus license, the full load balancing  documentation can be found `here <https://www.nginx.com/resources/admin-guide/load-balancer/>`__


Basic NGINX load balancing configuration :

::


      upstream plf {
        ip_hash;
        server node1:8080;
        server node2:8080;
      }
    server {

      listen 80;
        location / {
          proxy_pass http://plf;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header Host $host;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;    }
        # Websocket for Cometd
        location /cometd/cometd {
          proxy_pass http://plf;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection "upgrade";
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header Host $host;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }      
            
.. _Clustering.ClusteringFAQ:

==================
FAQs of clustering
==================

**Q:** **How to migrate from local to the cluster mode?**

**A:** If you intend to migrate your production system from the local
(non-cluster) to the cluster mode, follow these steps:

Update the configuration to the cluster mode as explained above on your
main server.

Use the same configuration on other cluster nodes.

Move the index and value storage to the shared file system.

Start the cluster.

**Q:** **Why is startup failed with the "Port value out of range"
error?**

**A:** On Linux, your startup is failed if you encounter the following
error:

::

    [INFO] Caused by: java.lang.IllegalArgumentException: Port value out of range: 65536

This problem happens under specific circumstances when the JGroups
networking library behind the clustering attempts to detect the IP to
communicate with other nodes.

You need to verify:

-  The host name is a valid IP address, served by one of the network
   devices, such as **eth0**, and **eth1**.

-  The host name is NOT defined as **localhost** or 127.0.0.1.

**Q:** **How to solve the "failed sending message to null" error?**

**A:** If you encounter the following error when starting up in the
cluster mode on Linux:

::

    Dec 15, 2010 6:11:31 PM org.jgroups.protocols.TP down
            SEVERE: failed sending message to null (44 bytes)
            java.lang.Exception: dest=/228.10.10.10:45588 (47 bytes)

Be aware that clustering on Linux only works with IPv4. Therefore, when
using a cluster under Linux, add the following property to the JVM
parameters:

::

     -Djava.net.preferIPv4Stack=true 


.. |image0| image:: images/cluster_diagram.png
