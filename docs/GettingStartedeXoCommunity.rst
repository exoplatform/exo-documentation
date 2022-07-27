.. _GettingStarted:

################
Getting started
################

This chapter covers the following topics: 
 - The minimum system requirements needed to run the stack of tools used by eXo platform
 - The software prerequisites needed to be installed before running the eXo platform stack


.. _SystemRequirements:

====================
System requirements       
====================

.. warning:: The requirements cited below are provisional and may change according to quality tests findings.

To run the Docker compose of eXo Platform 6.4, your system is required to meet the following specifications or higher:

-  CPU: Multi-core recommended, 2GHz minimum.

-  Memory: The eXo Platform package is optimized with default settings: max
   heap size = 4GB and non-heap size = 256MB; so the available memory
   should be at least 4GB. It is recommended you have a memory of 8GB
   (4GB free for database, Elasticsearch, Jitsi and Onlyoffice services and file system caches).

-  Free disk space: 10GB minimum

-  Browser Compatibility: Check Browser compatibility section in Supported Environment https://www.exoplatform.com/supported-environments

.. note:: The eXo server will run on the port 80 by default, so make sure this port is not currently in use or configure eXo Platform to use another port.


.. _gettingstartedPrerequisites:


=============
Prerequisites       
=============

The full environment will be provided as Docker containers assembled together using a Docker Compose file.
To install and try eXo platform community edition, you need to install `Docker <https://docs.docker.com/engine/install/>`__ and `Docker Compose <https://docs.docker.com/compose/install/>`__


==================
Start eXo platform       
==================

 - Create a new folder EXO_HOME, this file will contain all files needed to run the eXo platform environment
 - Download the Docker Compose from `here <https://raw.githubusercontent.com/exo-docker/exo-community/master/docker-compose.yml>`__ and save it under EXO_HOME
 - Create the folder **conf** which will contain configuration files needed for the services deployed in docker images
 - Download the file configuration file of Nging server from `here <https://raw.githubusercontent.com/exo-docker/exo-community/master/conf/nginx.conf>`__ and save it under the folder **conf**
 - Using your preferred console, start the environment with the command:
     
   .. code-block:: console 

        docker-compose -f docker-compose.yml up

 - Open your browser and open the URL : http://localhost/