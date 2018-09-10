.. _Deployment:

###########
Deployment
###########

    This chapter covers the following topics:

    -  :ref:`Removing ready-made sites <Deployment.RemoveSampleApp>`
       Steps to remove the ready-made site Social Intranet.

    -  :ref:`Setting up an HTTP front-end <Deployment.SetupHttpFrontend>`
       Introduction to the base configuration for using eXo behind a
       reverse-proxy front-end.

    -  :ref:`Configuring HTTP session timeout <Deployment.ConfiguringHTTPSessionTimeout>`
       Instructions on how to configure the session timeout of the
       Tomcat and Jboss servers.

.. _Deployment.RemoveSampleApp:

=========================
Removing ready-made sites
=========================

Intranet is a ready-made site that you can access by the URL:
**/portal/intranet**. If you want to remove it from the eXo Platform package,
consider 2 cases below:

.. _RemoveSampleApp.First:

First case - Your package is fresh so data is empty
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. _First.Tomcat:

In Tomcat:
----------

Remove the following files:

-  ``$PLATFORM_TOMCAT_HOME/webapps/acme-intranet.war``

-  ``$PLATFORM_TOMCAT_HOME/webapps/acme-intranet-portlet.war``

-  ``$PLATFORM_TOMCAT_HOME/lib/platform-sample-acme-intranet-config-*.jar``

.. _First.Jboss:

In JBoss:
----------

1. Remove the following files:

   -  ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear/platform-sample-acme-intranet-webapp.war``

   -  ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear/platform-sample-acme-intranet-portlet.war``

   -  ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear/lib/platform-sample-acme-intranet-config.jar``

2. Open the
   ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear/META-INF/application.xml``
   file to comment out the following lines:

	.. code:: xml

		<module>
		<web>
		  <web-uri>platform-sample-acme-intranet-portlet.war</web-uri>
		  <context-root>acme-intranet-portlet</context-root>
		</web>
		</module>
		<module>
		<web>
		  <web-uri>platform-sample-acme-intranet-webapp.war</web-uri>
		  <context-root>acme-intranet</context-root>
		</web>
		</module>
		
.. _RemoveSampleApp.Second:

Second case - Data has been created
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. warning:: You need to be clear what you will delete, so review carefully
			 before deletion.

To clean the data entirely, do the following steps:

1. Stop the server if it is running.

2. Remove the files (and change the configuration file for JBoss) as
   described above.

3. Remove associated data. If you did not change the default data
   configuration, just need to remove:

-  ``$PLATFORM_TOMCAT_HOME/gatein/data/`` (in Tomcat).

-  ``$PLATFORM_JBOSS_HOME/standalone/data/gatein/*`` (in JBoss).

4. Restart your server.

.. _Deployment.SetUpHttpFrontend:

===========================
Setting up an HTTP frontend
===========================

It may be necessary to use an HTTP server as a front-end (aka a
reverse-proxy) for your eXo Platform application server to allow :

-  Accessing more than one application server on the same host;
-  Accessing these app servers with the separate DNS names, without
   adding a port to the URL;
-  Serving maintenance pages if the server is not available.
-  Instrumenting your http request (for Single Sign on authentication
   for example)
-  Caching and/or load-balancing
-  Improving security with server isolation

This diagram represents a standard deployment with a reverse proxy We
recommand to use **the http protocol** as communication protocol between
the HTTP proxy and the eXo Platform server as it's simpler to configure than
the AJP protocol for the same performances.

-  :ref:`Setting up Apache front-end <SetUpHttpFrontend.SetupApacheFrontend>`

-  :ref:`Setting up an Nginx front-end <SetUpHttpFrontend.SetupNginxFrontend>`

-  :ref:`Setting up tomcat behind a front-end <SetUpHttpFrontend.SetupTomcatForFrontend>`


.. _SetUpHttpFrontend.SetupApacheFrontend:

Setting up Apache front-end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. _BasicConfigApache:

Basic configuration for Apache
----------------------------------

To allow Apache to act as a reverse proxy, you first need to activate
some modules :

-  mod\_proxy
-  mod\_proxy\_http
-  Optional
   mod\_proxy\_wstunnel
   to use websocket for the notification websockets

This can be acheived with the following command : a2enmod proxy
proxy\_http proxy\_wstunnel

Next, declare a new virtual host to access you eXo Platform instance :

.. note:: You can find more information on how to configure apache vhosts on
		  `here <http://httpd.apache.org/docs/2.4/vhosts/>`__.
		  
:: 		  

	<VirtualHost *:80>

		ServerName my.server.name # <--- change here

		ServerAdmin my@server.name # <--- change here

		# don't loose time with IP address lookups
		HostnameLookups Off
		# needed for named virtual hosts
		UseCanonicalName Off
		# configures the footer on server-generated documents
		ServerSignature Off

		ProxyRequests           Off
		ProxyPreserveHost       On
		ProxyVia                On

		# Notifications via web socket, must be declared before the general ProxyPass definition
		<IfModule proxy_wstunnel_module>
			ProxyPass           /cometd    ws://127.0.0.1:8080/cometd max=100 acquire=5000 retry=5 disablereuse=on flushpackets=on # <--- change here and adapt the options to your load
		</IfModule>

		ProxyPass               /          http://127.0.0.1:8080/ acquire=1000 retry=30 max=100 # <--- change here and adapt the options to your load
		ProxyPassReverse        /          http://127.0.0.1:8080/  # <--- change here

		#####################
		# Log configuration
		#####################
		ErrorLog        ${APACHE_LOG_DIR}/my.server.name-error.log # <--- change here
		CustomLog       ${APACHE_LOG_DIR}/my.server.name-access.log log_with_durations # <--- change here

	</VirtualHost>



.. note:: We are assuming the eXo Platform server is reachable at the ip 127.0.0.1 on port 8080. You have to adapt the configuration according to your installation.

.. warning:: Due to a bug in Apache Server prior version 2.4.13, an incorrect
			 websocket configuration can impact the standard HTTP navigation. If
			 you randomly have blank pages or portlet errors, please check the
			 websocket tunnels are correctly working

This example use a log definition called ``log_with_durations``. This is
a customization of the default combined apache log format with the
request durations. It's totally optional, if you don't want to override
the log configuration, use the ``combined`` format You can add it to
your Apache installation by adding the following content in your
configuration : 

::

	LogFormat "%h %l %u %t \\"%r\\" %>s %O \\"%{Referer}i\\"\\"%{User-Agent}i\\" %T" log\_with\_durations

.. note:: It is also recommanded to enable the apache status page to be able
		  to monitor the apache behavior. More info are available
		  `here <https://httpd.apache.org/docs/current/mod/mod_status.html>`__
		  
.. _SetUpHttpFrontend.SetupNginxFrontend:

Setting up an Nginx front-end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. _BasicConfNginx:

Basic configuration for Nginx
------------------------------

.. note:: You can find the detailled documentation on the nginx configuration as reverse proxy
          `here <https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/>`__

Nginx supports reverse-proxy instructions without the need to add
modules.

This is an example of a nginx server configuration acting as a reverse
proxy of a eXo Platform back-end : 

::

	server {
	  listen 80 default_server;
	  server_name my.server.name;

	  # TODO Adapt this value to your needs
	  client_max_body_size 250m;  

	  location / {
		proxy_pass http://127.0.0.1:8080;
		# Pass the client informations the the backend
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header Host $host;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	  }
	  # Websocket for notifications
	  location /cometd/cometd {
		proxy_pass http://127.0.0.1:8080;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "upgrade";
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header Host $host;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	  }

	  access_log   /my/path/my.server.name-access.log log_with_durations;
	  error_log    /my/path/my.server.name-error.log;

	}

.. note:: We are assuming the eXo Platform server is reachable at the ip 127.0.0.1
          on port 8080. You have to adapt the configuration according to your
          installation.

This example uses a log definition called ``log_with_durations``. This
is a customization of the default combined log format with the request
durations. It's totaly optional, if you don't want to override the log
configuration, use the ``combined`` format You can add it to your nginx
configuration by adding the following line in your ``host`` section :

::

	log\_format combined\_duration '$remote\_addr - $remote\_user [$time\_local] ' 
		'"$request" $status $body\_bytes\_sent '
		'"$http\_referer" "$http\_user\_agent" $request\_time'; 



It's also good to add this option to limit the server exposition: 

::

	server\_tokens off;

.. note:: It is also recommanded to enable the apache status page to be able
		  to monitor the apache behavior. More info are available
		  `here <https://httpd.apache.org/docs/current/mod/mod_status.html>`__
		  

.. _SetUpHttpFrontend.SetupTomcatForFrontend:

Setting up a Tomcat for a front-end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. _BaseConfForTomcat:

Base configuration for Tomcat
-------------------------------

The tomcat configuration must be adapted to be used behind a http
frontend.

-  An HTTP Connectormust be declares and specifically configured to 
   reply to the reverse proxy. In the ``server.xml`` file, add or edit 
   a HTTP connecter :
   
.. code:: xml

       <Connector address="127.0.0.1" scheme="http" secure="false" proxyName="community-qa.exoplatform.com" port="8080" protocol="org.apache.coyote.http11.Http11NioProtocol"
         enableLookups="false" redirectPort="8443" bindOnInit="false"
         connectionTimeout="20000" disableUploadTimeout="true"
         URIEncoding="UTF-8"
         compression="off" compressionMinSize="2048"
         noCompressionUserAgents=".*MSIE 6.*" compressableMimeType="text/html,text/xml,text/plain,text/css,text/javascript" />

.. note:: The complete documentation of the Tomcat connector can be found `here <https://tomcat.apache.org/tomcat-7.0-doc/config/http.html>`__


This is a standard connector configuration with the important paramters 
for a reverse proxy context :

   ``scheme``
       If your reverse proxy acts as a ssl termination, specify *https*,
       specify *https* otherwise
       
   ``secure``
       If your reverse proxy acts as a ssl termination, specify *true*,
       specify *false* otherwise
       
   ``proxyName``
       The name of eXo Platform instance as viewed by the user
       
   ``bindOnInit``
       Must be set to *false* to avoid the connector to be started 
       before eXo Platform was completely deployed and ready to respond.

-  A valve must be added to retreive the original user information like
   ip, scheme instead of the reverse-proxy properties. In the section
   Engine/Host of the ``server.xml``, add this definition:
   
   .. code:: xml

       <Valve className="org.apache.catalina.valves.RemoteIpValve" internalProxies="127.0.0.1" remoteIpHeader="x-forwarded-for" proxiesHeader="x-forwarded-by" protocolHeader="x-forwarded-proto" />


**Parameters**

   ``internalProxies``
       Declare your reverse proxy ips. IP range accepted
       
   ``*Header``
       The name of the headers your reverse proxy will set. The values
       on the example are the default names used by most of the reverse
       proxies. It's true for `Apache <https://httpd.apache.org/docs/current/mod/mod_proxy.html#x-headers>`__
       , it must be explicitely specified for nginx.

.. note:: The complete documentation of the RemoteIpHeader is available
          `here <https://tomcat.apache.org/tomcat-7.0-doc/api/org/apache/catalina/valves/RemoteIpValve.html>`__

.. _Deployment.ConfiguringHTTPSessionTimeout:

================================
Configuring HTTP session timeout
================================

The session timeout defines the validation period of a session. In the
portal environment, such as eXo Platform, it is highly recommended that all
web applications have the same session timeout value.

The session timeout is configurable individually for each web
application in the ``web.xml`` file:

.. code:: xml

    <session-config> 
        <session-timeout>30</session-timeout> 
    </session-config>

The value is in minute.

In Tomcat, you can set session timeout globally by modifying the
``conf/web.xml`` file.



