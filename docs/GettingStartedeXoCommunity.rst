.. _GettingStarted:

################
Getting started
################

This chapter covers the following topics:   


.. _SystemRequirements:

====================
System requirements       
====================

.. warning:: The requirements cited below are provisional and may change according to quality tests findings.

To run the Docker compose of eXo Platform 6.4, your system is required to meet the following 
specifications or higher:

-  CPU: Multi-core recommended, 2GHz minimum.

-  Memory: The eXo Platform package is optimized with default settings: max
   heap size = 4GB and non-heap size = 256MB; so the available memory
   should be at least 4GB. It is recommended you have a memory of 8GB
   (4GB free for database services and file system caches).

-  Free disk space: 10GB minimum

-  Java 8+: JDK 811 is required for eXo Platform 6.0 version. Set the **JAVA\_HOME** environment variable to point to your JDK
   installation.

-  Java 7 and below is incompatible for eXo Platform 6.0 version.

-  Browser Compatibility: Check Browser compatibility section in Supported Environment https://www.exoplatform.com/supported-environments

.. note:: The eXo server will run on the port 8080 by default, so make sure this port is not currently in use or configure eXo Platform to use another port.


.. _gettingstartedPrerequisites:

=============
Prerequisites       
=============