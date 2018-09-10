.. _Configuration:

#############
Configuration
#############

    This chapter covers the following topics:

    -  :ref:`Configuration overview <Configuration.ConfigurationOverview>`
       How to change default configurations via ``exo.properties``.

    -  :ref:`eXo Platform configuration <Configuration.eXoConfiguration>`
       Explanation of eXo Platform configuration, its directory and some
       parts of eXo Platform internals.

    -  :ref:`Properties reference <Configuration.PropertiesReference>`
       A reference to eXo configuration properties.

    -  :ref:`Configure username case sensitive <CaseSensitiveUsername>`
       How to make eXo Platform usernames case sensitive/insensitive.
       
    -  :ref:`User inactivity delay configuration <UserInactivityDelay>`
       How to define the user inactivity delay.

    -  :ref:`Data directory configuration <Configuration.DataDirectory>`
       Explanations of several paths in the local file system.

    -  :ref:`Assets version parameter <AssetsVersionConf>`
       eXo Platform assets version parameter.

    -  :ref:`Quartz Scheduler configuration <Configuration.QuartzScheduler>`
       Quartz Scheduler configuration.

    -  :ref:`Configure documents multiupload in the activity stream functionnality <Configuration.CustomizeMultiupload>`
       Parameters to configure the number of files and size per activity.

    -  :ref:`Transaction service <Configuration.JCRTransactionService>`
       Information about the default timeout value of JCR transaction,
       and the value when your application runs longer transactions.

    -  :ref:`Server base URL <Configuration.ServerBaseURL>`
       The server base URL is used to generate links (in emails for
       example). It is necessary to configure it to make the links
       right.

    -  :ref:`Wiki application base URI <Configuration.WikiBaseURI>`
       The base URI for the wiki application.

    -  :ref:`Account setup <Configuration.AccountSetup>`
       How to skip the Account Setup and Greetings! screens in eXo Platform.

    -  :ref:`Custom data validators configuration <Configuration.ValidatorsConfiguration>`
       How to configure custom data validators.

    -  :ref:`Outgoing mail service <OutgoingMailService>`
       The SMTP configurations required for sending emails.

    -  :ref:`Changing sender information of email notification <Configuration.ChangingSenderInformationOfEmailNotifications>`
       Configuration about sender from which all email notifications are
       sent.

    -  :ref:`Subscribing to notifications of document changes <EmailNotificationOfDocumentChanges>`
       The email configuration for watching a document.

    -  :ref:`WebDAV configuration <Configuration.WebDAV>`
       Configuration of the WebDAV service.

    -  :ref:`Open in Office configuration <Configuration.OpenInOfficeConfiguration>`
       How to configure the file types associated with the application
       and to set a new label.

    -  :ref:`JODConverter configuration <JODConverterConf>`
       How to enable and configure document preview feature that allows
       users to read online many document types like MS Word.

    -  :ref:`Limiting the size of uploaded files <Configuration.FileSizeLimit>`
       Instructions to configure the maximum allowed size of uploaded
       files.

    -  :ref:`Limiting public access to the upload service <Configuration.UploadHandler>`
       How to configure the upload handler for preventing
       unauthenticated users to use the upload service.

    -  :ref:`Customizing site data <Configuration.CustomizeSiteData>`
       Instructions to configure the import mode for ACME and Intranet
       sites.

    -  :ref:`Enabling/Disabling auto-creating a taxonomy tree <Configuration.AutocreatingTaxonomyTree>`
       Instructions on how to enable/disable auto-creating a taxonomy
       tree during a new site creation.

    -  :ref:`Enabling/Disabling Activity type <Configuration.ActivityType>`
       Instructions on how to enable/disable an activity type from
       posting on streams.

    -  :ref:`Configure spaces administration group <SpacesAdministration>`
       How to define spaces administrators groups.

    -  :ref:`Logs <Configuration.Logs>`
       Introduction to the logs of eXo Platform, and where to configure this
       function.

    -  :ref:`JCR Configuration <Configuration.JCR>`
       Details of the set of properties which control the JCR behavior.

    -  :ref:`Cache configuration <Configuration.CacheConfiguration>`
       Overall introduction to the Cache configuration of eXo Platform,
       including: **Portal**, **Social**, and **ECMS**.
       
    -  :ref:`End-date suggestion <Configuration.EndDateSuggestion>`
       End-date suggestion feature in Calendar: how to configure. 
        
    -  :ref:`Predefined users, groups and memberships <PredefinedUserGroupMembership>`
       The configurations for users, groups and memberships
       initialization.

    -  :ref:`Gadget configuration <Configuration.GadgetConfiguration>`
       Information about the OAuth key that will be used in case the
       OAuth gadgets do not indicate a key, and how to disable the
       Shindig default online features.

    -  :ref:`Groovy templates statistics <statisticsParameter>`
       Parameter for enabling/disabling Groovy Templates statistics.

    -  :ref:`Search connector configuration <SearchConnector>`
       Configuration for activating/de-activating a Search connector.

    -  :ref:`Unified Search configuration <Configuration.UnifiedSearch>`
       Configuration for enabling/disabling Fuzzy search and adjusting
       the similarity criterion.

    -  :ref:`Elasticsearch Configuration <Configuration.ElasticSearch>`
       Configuration of Elasticsearch parameters.

    -  :ref:`CometD <Configuration.CometDConfig>`
       CometD introduction and how to configure it.

    -  :ref:`Youtube integration <Configuration.YoutubeIntegration>`
       Instruction to enable the Youtube integration using a YouTube V3
       API Key.

    -  :ref:`Notification <Configuration.Notification>`
       Configuration related to the Email/On-site Notification feature.

    -  :ref:`Document Versioning <Configuration.DocumentVersioning>`
       Instruction to enable the Document versioning and control the
       generated versions.

    -  :ref:`Document Viewer <Configuration.DocumentViewer>`
       Configuration related to the Document Viewer component.

    -  :ref:`Forgot Password <Configuration.ForgotPassword>`
       Configuration related to the Forgot Password feature.

    -  :ref:`Password Encryption <PasswordEncryption>`
       Users who upgrade from a previous version older than 4.3 will
       need to beware of the new default encryption algorithm.

    -  :ref:`Task Management <Configuration.TaskManagement>`
       Configuration related to the project workflow in the Task
       Management application.
       
    -  :ref:`File storage configuration <Configuration.FileStorage>`
       Configuration related to File Storage system in eXo Platform.

    -  :ref:`Chat Configuration <Configuration.ChatConfiguration>`
       Configuration needed for eXo Chat.

    -  :ref:`Update of last login time <Configuration.lastlogintime>`
       Parameter for enabling/disabling the update of user's last login
       time.

.. _Configuration.ConfigurationOverview:

======================
Configuration overview
======================

In eXo Platform, a lot of configuration options are customizable via
properties. If you want to change the default configurations of eXo Platform,
simply do as follows:

1. Create your own ``.properties`` file that must be named
   ``exo.properties``. This file contains all configurations to be
   customized.

   -  ``$PLATFORM_TOMCAT_HOME/gatein/conf/exo.properties`` (Tomcat).

   -  ``$PLATFORM_JBOSS_HOME/standalone/configuration/gatein/exo.properties``
   (JBoss).

A ``.properties`` file has no header, so you do not need to preserve the
header. You can refer to ``exo-sample.properties`` that is provided by
default but has no effect on the eXo Platform configuration. This default
file exposes all properties you can override or extend, but in comments
(#). Instead of creating new, you can rename ``exo-sample.properties``
into ``exo.properties``, then make changes on your needed properties and
remove their comments.

2. Add configurations to be customized in ``exo.properties``. Pay attention
   to the followings:

   -  Each property is defined on one line that conforms to the syntax:
      *property\_name=property\_value*.

   -  Order of the property lines does not take any effect, but it is
      important that you use the exact key of each property in
      ``exo.properties`` that is already exposed in
      ``exo-sample.properties`` or listed in this chapter. The usage of
      properties and their keys are detailed in the later sections.

   -  The text before the equal sign is the key that you should not change
      and the text after the equal sign is the property's value that you
      can edit.

3. Save and restart the eXo Platform server for your changes to take 
   effect.

Besides the capability of customizing configurations in
``exo.properties``, you can follow in another way by adding a system
property, either in ``bin/setenv-customize.sample.(sh|bat)`` or
``bin/standalone-customize.sample.conf(.bat)``, or in any your custom
scripts. See :ref:`Customizing environment variables <CustomizingEnvironmentVariables>`
for detailed instructions.

.. note:: There are some configuration properties that will not be
		  configurable by the system property but in ``exo.properties`` only,
		  including:

			-  ``exo.jcr.cluster.jgroups.config``

			-  ``exo.idm.cluster.jgroups.config``

			-  ``exo.jcr.cache.config``

			-  ``exo.jcr.cache.config.workspace.portal-system``

			-  ``exo.jcr.lock.cache.config``

			-  ``exo.jcr.index.cache.config``

			-  ``exo.cache.config.template``

			-  ``exo.idm.api.store.config``

.. _Configuration.eXoConfiguration:

============================
eXo Platform configuration
============================

In eXo Platform, almost all configurations are performed in a folder that is
controlled by a system property named **exo.conf.dir**. This property is
set by ``setenv.*`` scripts (Tomcat) or ``standalone-exo-*.xml`` files
(JBoss).

The default value of **exo.conf.dir** is:

-  ``$PLATFORM_TOMCAT_HOME/gatein/conf`` (Tomcat).

-  ``$PLATFORM_JBOSS_HOME/standalone/configuration/gatein`` (JBoss).

That folder contains the following main files that you need to take
care: ``exo.properties`` (if you need to override the eXo Platform
configurations); ``configuration.xml`` and
``portal/${PORTAL_NAME}/configuration.xml`` (if having the
${PORTAL\_NAME} portal container).

.. note:: The xml configuration is mainly done during the development phase,
		  whereas the configuration in ``exo.properties`` targets the
		  deployment phase. So configurations that you want to customize
		  should be done in the ``exo.properties`` file.

To understand more clearly the role of those files, let's begin with the
portal container concept.

The eXo Platform Kernel collects runtime components in the portal containers.
A portal container holds all components to run a portal instance. It
serves pages under the servlet context for its name.

The default portal container in eXo Platform is called "portal". This
explains why the default URL of the samples is
*http://localhost:8080/portal*. The default portal container can be
configured directly inside **exo.conf.dir**.

eXo Platform is capable of running several portal instances simultaneously on
the same server. Each instance can be configured and customized
independently via files located at: ``portal/${PORTAL_NAME}`` (under
**exo.conf.dir**), where **${PORTAL\_NAME}** is the name of the portal
container.

.. note:: The name of the configuration file can be altered. Please refer to
		  the `PortalContainer <#PortalContainer>`__ section in the Kernel
		  reference for more details on portal containers and other options to
		  modify the location of the properties.

Services that run inside a portal container are declared via the xml
configuration files like ``configuration.xml``. Such files exist in
jars, wars and below **exo.conf.dir**.

The ``.xml`` configuration files also serve as the main way to customize
the portal via the multiple plugins offered by the eXo Platform components.

Additionally, the ``.xml`` files may contain variables that are
populated via properties defined in ``exo.properties``. Hence, the
``exo.properties`` file serves as exposing some selected variables that
are necessary to configure eXo Platform in a server environment.

exo.properties
~~~~~~~~~~~~~~~

This file can be added to easily override or extend configurations of
eXo Platform. The important variables that can be overridden are exposed in a
sample properties file named ``exo-sample.properties``, but in comments.
See :ref:`Configuration overview <Configuration.ConfigurationOverview>`
for more details.

configuration.xml
~~~~~~~~~~~~~~~~~~

This file contains the built-in configuration for the "portal" portal
container.

-  In most cases, you should not change this file.

-  In case you do not want to use "portal" as the default portal for
   your project, this file can be used to import another
   PortalContainerDefinition into the root container.

.. note:: To learn more about how to configure a new portal container, please
		  refer to `eXo Kernel <../../reference/html/chapter-Kernel.html>`__.

portal/${PORTAL\_NAME}/configuration.xml
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The extra configuration for the ${PORTAL\_NAME} portal container if any.
This is where further customizations (for ${PORTAL\_NAME} portal
container) can be placed. Generally, custom configurations are provided
by extension wars. However, this file is the last loaded by Kernel. It
has a higher priority over any other configuration files, including
extensions. So, you can override any internal component configuration.

This may turn handy services or configurations that are not exposed in
``exo.properties``.

.. _Configuration.PropertiesReference:

====================
Properties reference
====================

This page is a reference to configurations exposed via
``exo.properties``.

 .. note:: This is not an exhaustive list. Some properties are not documented
		   in this chapter, because they are extremely rarely used by
		   administrators. If the property you are searching for is not here,
		   search it in the whole documentation and raise a question in
		   `Community Forum <http://community.exoplatform.com/portal/intranet/forum>`__,
		   if necessary.
		   
.. _PlatformProperties:

Platform
~~~~~~~~~ 

+---------------------------------+------------------+-------------------------+
| Name                            | Description      | Default                 |
+=================================+==================+=========================+
| :ref:`exo.base.url              | Generates links  | http://localhost:8080   |
| <Configuration.ServerBaseURL>`  |                  |                         |
+---------------------------------+------------------+-------------------------+
| :ref:`exo.accountsetup.skip     | Skips "account   | false                   |
| <Configuration.AccountSetup>`   | setup" screen or |                         |
|            		          | not?             |                         |
+---------------------------------+------------------+-------------------------+
| :ref:`exo.super.user            | The predefined   | root		       |
| <PredefinedUserGroupMembership>`| super user's     |			       |
|	                          |  name.           |			       |
+---------------------------------+------------------+-------------------------+               
| :ref:`exo.portal.resetpassword  | The expiration   | 24 (hours)              |
| .expiretime                     | time of a reset  |                         |
| <Configuration.ForgotPassword>` | password link.   |                         |
+---------------------------------+------------------+-------------------------+                                         

.. _SMTP:

SMTP
~~~~~

+----------------------------+------------------+-------------------------+
| Name                       | Description      | Default                 |
+============================+==================+=========================+
| :ref:`exo.email.smtp.from  | The "From" field | noreply@exoplatform.com |
| <OutgoingMailService>`     | in outgoing      |                         |
|       		     | emails.          |                         |
+----------------------------+------------------+-------------------------+
| :ref:`exo.email.smtp.host  | The external     | localhost               |
| <OutgoingMailService>`     | mail server.     |                         |
|       		     | emails.          |                         |
+----------------------------+------------------+-------------------------+
| :ref:`exo.email.smtp.port  | The external     | 25                      |
| <OutgoingMailService>`     | mail server      |                         |
|                            | port.            |                         |
+----------------------------+------------------+-------------------------+
| :ref:`exo.email.smtp.start | Enable TLS or    | false                   |
| tls.enable 		     | not?             |                         |
| <OutgoingMailService>`     |			|			  |
+----------------------------+------------------+-------------------------+
| :ref:`exo.email.smtp.auth  | Enable SMTP      | false                   |
| <OutgoingMailService>`     | authentication   |                         |
|                            | or not?          |                         |
+----------------------------+------------------+-------------------------+
| :ref:`exo.email.smtp.usern | Username to get  |                         |
| ame <OutgoingMailService>` | authenticated    |                         |
|			     | with the mail    |                         |
|                            | server.          |                         |
+----------------------------+------------------+-------------------------+
| :ref:`exo.email.smtp.pass  | Password to get  |                         |
| word <OutgoingMailService>`| authenticated    |                         |
| 			     | with the mail    |                         |
|                            | server.          |                         |
+----------------------------+------------------+-------------------------+
| :ref:`exo.email.smtp.sock  | Port to connect  |                         |
| etFactory.port             | to if a socket   |                         |
| <OutgoingMailService>`     | factory is       |                         |
|                            | specified.       |                         |
+----------------------------+------------------+-------------------------+
| :ref:`exo.email.smtp.sock  | A class to       |                         |
| etFactory.class            | create SMTP      |                         |
| <OutgoingMailService>`     | sockets.         |                         |
+----------------------------+------------------+-------------------------+                
                                                                                                                                                                                                                   
.. _JODConverter:                                                                                                   

JODConverter
~~~~~~~~~~~~~

+-------------------------------+------------------+-------------------------+
| Name                          | Description      | Default                 |
+===============================+==================+=========================+
| :ref:`exo.jodconverter.enable | Enable           | true                    |
| <JODConverterConf>`           | JODConverter or  |                         |
|                               | not?             |                         |
+-------------------------------+------------------+-------------------------+
| :ref:`exo.jodconverter.port   | List of ports    | 2002                    |
| numbers <JODConverterConf>`   | used to create   |                         |
|                               | *soffice*        |                         |
|                               | processes.       |                         |
+-------------------------------+------------------+-------------------------+
| :ref:`exo.jodconverter.office | The home folder  | Blank (auto-detected)   |
| home <JODConverterConf>`      | of the Office    |                         |
| 			        | installation.    |                         |
+-------------------------------+------------------+-------------------------+
| :ref:`exo.jodconverter.taskqu | The maximum      | 30000                   |
| euetimeout <JODConverterConf>`| living time in   |                         |
| 			        | milliseconds of  |                         |
|                               | a task in the    |                         |
|                               | conversation     |                         |
|                               | queue.           |                         |
+-------------------------------+------------------+-------------------------+
| :ref:`exo.jodconverter.taskex | The maximum time | 120000                  |
| ecutiontimeout 	        | in milliseconds  |                         |
| <JODConverterConf>`           | to process a     |                         |
|                               | task.            |                         |
+-------------------------------+------------------+-------------------------+
| :ref:`exo.jodconverter.maxtas | The maximum      | 200                     |
| ksperprocess                  | number of tasks  |                         |
| <JODConverterConf>`           | to process by an |                         |
|                               | office server.   |                         |
+-------------------------------+------------------+-------------------------+
| :ref:`exo.jodconverter.retryt | The interval     | 120000                  |
| imeout <JODConverterConf>`    | time in          |                         |
|                               | milliseconds to  |                         |
|                               | try to restart   |                         |
|                               | an office server |                         |
|                               | in case it       |                         |
|                               | unexpectedly     |                         |
|                               | stops.           |                         |
+-------------------------------+------------------+-------------------------+


.. _SearchConnector:

:ref:`Search connector <SearchConnector>`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

+----------------------------------+------------------+-------------------------+
| Name                             | Description      | Default                 |
+==================================+==================+=========================+
| :ref:`exo.[searchConnectorName]. | Turn on/off a    | true                    |
| connector.[informationType]      | specific Search  |                         |
| .enable <SearchConnector>`       | connector for a  |                         |
|   				   | certain          |                         |
|                             	   | information      |                         |
|                                  | type.            |                         |
+----------------------------------+------------------+-------------------------+        

.. _UnifiedSearch:

Unified Search
~~~~~~~~~~~~~~~   

+--------------------------------+------------------+-------------------------+
| Name                           | Description      | Default                 |
+================================+==================+=========================+
| :ref:`exo.unified-search.      | Enable fuzzy     | true                    |
| engine.fuzzy.enable            | search or not?   |                         |
| <Configuration.UnifiedSearch>` |                  |                         |
+--------------------------------+------------------+-------------------------+
| :ref:`exo.unified-search.engine| A float number   | 0.5                     |
| .fuzzy.similarity              | between 0 and 1  |                         |
| <Configuration.UnifiedSearch>` | expressing how   |                         |
|                                | much a returned  |                         |
|                                | word matches the |                         |
|                                | keyword. 1 is    |                         |
|                                | exact search.    |                         |
+--------------------------------+------------------+-------------------------+
| :ref:`exo.unified-search.exclud| List of          | ``.-``                  |
| ed-characters			 | characters that  |                         |
| <Configuration.UnifiedSearch>` | will not be      |                         |
|                                | indexed (so      |                         |
|                                | could not be     |                         |
|                                | searched).       |                         |
+--------------------------------+------------------+-------------------------+

.. _Notification:
                                
Notification
~~~~~~~~~~~~~ 

+------------------------------+------------------+-------------------------+
| Name                         | Description      | Default                 |
+==============================+==================+=========================+
| :ref:`exo.notification.      | Cron expression  | 0 0 23 ? \* \* (11:00pm |
| NotificationDailyJob.        | to schedule      | every day)              |
| expression                   | daily emails.    |                         |
| <Configuration.Notification>`|                  |                         |
+------------------------------+------------------+-------------------------+
| :ref:`exo.notification.Notif | Cron expression  | 0 0 11 ? \* SUN (11:00am|
| icationWeeklyJob.expression  | to schedule      | every Sunday)           |
| <Configuration.Notification>`| weekly emails.   |                         |
+------------------------------+------------------+-------------------------+
| :ref:`exo.notification.servic| The delay time   | 60                      |
| e.QueueMessage.period        | (in seconds)     |                         |
| <Configuration.Notification>`| between two      |                         |
|                              | batches of sent  |                         |
|                              | mails.           |                         |
+------------------------------+------------------+-------------------------+
| :ref:`exo.notification.servic| The maximum      | 30                      |
| e.QueueMessage.numberOfMailPe| number of emails |                         |
| rBatch                       | sent each batch. |                         |
| <Configuration.Notification>`|                  |                         |
+------------------------------+------------------+-------------------------+
| :ref:`exo.notification.portal| The "from" field | eXo                     |
| name                         | in notification  |                         |
| <Configuration.Notification>`| emails.          |                         |
+------------------------------+------------------+-------------------------+
| :ref:`exo.notification.maxite| Maximum number   | 8                       |
| ms                           | of notifications |                         |
| <Configuration.Notification>`| displayed in the |                         |
|                              | popup list.      |                         |
+------------------------------+------------------+-------------------------+
| :ref:`exo.notification.viewal| Living days of   | 30                      |
| l                            | items displayed  |                         |
| <Configuration.Notification>`| in the View All  |                         |
|                              | page.            |                         |
+------------------------------+------------------+-------------------------+
| :ref:`exo.notification.WebNot| Cron expression  | 0 0 23 ? \* \* (11:00pm |
| ificationCleanJob.expression | to schedule the  | every day)              |
| <Configuration.Notification>`| job that cleans  |                         |
| 			       | web notification |                         |
|                              | old items.       |                         |
+------------------------------+------------------+-------------------------+ 

.. _JCR:                                                                                           

JCR
~~~~   

+---------------------------------+------------------+-------------------------+
| Name                            | Description      | Default                 |
+=================================+==================+=========================+
| :ref:`exo.jcr.datasource.dialect| In most cases    | auto                    |
| <Database.ConfiguringPLF>`      | the dialect is   |                         |
|  				  | auto-detected.   |                         |
|                                 | Follow the link  |                         |
|                                 | to know          |                         |
|                                 | exceptions.      |                         |
+---------------------------------+------------------+-------------------------+
| :ref:`exo.jcr.storage.enabled   | Enable file      | true                    |
| <Configuration.DataDirectory>`  | system storage   |                         |
|                                 | for JCR values?  |                         |
+---------------------------------+------------------+-------------------------+               
                                                                
.. _Webdav:

WebDav
~~~~~~~
+-----------------------------+------------------+-------------------------+
| Name                        | Description      | Default                 |
+=============================+==================+=========================+
| :ref:`exo.webdav.def-folder | Matching node    | nt:folder               |
| -node-type                  | type of folders. |                         |
| <Configuration.WebDAV>`     |                  |                         |
+-----------------------------+------------------+-------------------------+
| :ref:`exo.webdav.def-file-  | Matching node    | nt:file                 |
| node-type                   | type of files.   |                         |
| <Configuration.WebDAV>`     |                  |                         |
+-----------------------------+------------------+-------------------------+
| :ref:`exo.webdav.def-file-  | The mimetype to  | application/octet-stream|
| mimetype                    | exchange file    |                         |
| <Configuration.WebDAV>`     | data.            |                         |
+-----------------------------+------------------+-------------------------+
| :ref:`exo.webdav.update-    | The policy       | create-version          |
| policy                      | applied when     |                         |
| <Configuration.WebDAV>`     | there is an      |                         |
|                             | update via       |                         |
|                             | WebDav.          |                         |
+-----------------------------+------------------+-------------------------+
| :ref:`exo.webdav.folder-icon| The display icon | /eXoWCMResources/skin/  |
| -path			      | of a folder.     | images/file/nt-folder.  |
| <Configuration.WebDAV>`     |                  | png                     |
+-----------------------------+------------------+-------------------------+
| :ref:`exo.webdav.cache-     | The              | text/\*:max-age=3600;   |
| control                     | cache-control    | image/\*:max-age=1800;  |
| <Configuration.WebDAV>`     | header that      | application/\*:max-age= |
|                             | defines cache    | 1800;\*/\*:no-cache     |
|                             | and cache live   |                         |
|                             | time.            |                         |
+-----------------------------+------------------+-------------------------+                  

.. _ECMS:                                  

ECMS                    
~~~~~~

+---------------------------------+------------------+-------------------------+
| Name                            | Description      | Default                 |
+=================================+==================+=========================+
| :ref:`exo.ecms.connector.drives.| Maximum size (in | 200                     |
| uploadLimit                     | MB) allowed of   |                         |
| <Configuration.FileSizeLimit>`  | an uploaded      |                         |
|                                 | file.            |                         |
+---------------------------------+------------------+-------------------------+
| :ref:`exo.portal.uploadhandler.p| Turn on/off      | true                    |
| ublic-restriction               | public access to |                         |
| <Configuration.UploadHandler>`  | the upload       |                         |
|                                 | service.         |                         |
+---------------------------------+------------------+-------------------------+
| :ref:`exo.ecms.connector.drives.| The maximum      | 3                       |
| clientLimit                     | number of        |                         |
| <Uploading-files>`              | concurrent       |                         |
|                                 | uploaded files   |                         |
|                                 | in client side.  |                         |
+---------------------------------+------------------+-------------------------+
| :ref:`exo.ecms.connector.drives.| The maximum      | 20                      |
| serverLimit                     | number of        |                         |
| <Uploading-files>`              | concurrent       |                         |
|                                 | uploaded files   |                         |
|                                 | in server side.  |                         |
+---------------------------------+------------------+-------------------------+
| :ref:`exo.ecms.search.excluded-m| Content of these | text/css,text/javascript|
| imetypes                        | mimetypes will   | ,application/x-         |
| <SearchingForContent>`          | not be searched. | javascript,             |
| 				  |                  | text /ecmascript        |
+---------------------------------+------------------+-------------------------+
| :ref:`exo.ecms.search.enableFuzz| Enable fuzzy     | true                    |
| ySearch                         | search or not?   |                         |
| <SearchingForContent>`          |                  |                         |
+---------------------------------+------------------+-------------------------+
| :ref:`exo.ecms.search.fuzzySearc| A float number   | 0.8                     |
| hIndex                          | between 0 and 1  |                         |
| <SearchingForContent>`          | expressing how   |                         |
|                                 | much a returned  |                         |
|                                 | word matches the |                         |
|                                 | keyword. 1 is    |                         |
|                                 | exact search.    |                         |
+---------------------------------+------------------+-------------------------+
| :ref:`exo.ecms.lock.admin       | Users or groups  | \*:/platform/s          |        
| <WorkingWithRepository.Locks>`  | who can manage   |  administrator          |
|                                 | locks.           |                         |
+---------------------------------+------------------+-------------------------+
| :ref:`exo.ecms.friendly.enabled | Enable friendly  | true                    |
| <#PLFRefGuide.Configuration     | URL maker or     |                         |
| s.ExternalComponentPlugins.     | not?             |                         |
| Content.FriendlyPlugin>`        |                  |                         |
+---------------------------------+------------------+-------------------------+
| :ref:`exo.ecms.friendly.servletN| The friendly     | content                 |
| ame <#PLFRefGuide.Configura     | name used when   |                         |
| tions.ExternalComponentPlug     | making friendly  |                         |
| ins.Content.FriendlyPlugin>`    | URLs.            |                         |
+---------------------------------+------------------+-------------------------+                                         


.. _ECMSWatchDocument:

ECMS Watch Document
~~~~~~~~~~~~~~~~~~~~

+---------------------------------------+------------------+-----------------------------+
| Name                                  | Description      | Default                     |
+=======================================+==================+=============================+
| :ref:`exo.ecms.watchdocument.sender   | The "from" field | support@exoplatform.com     |
| <EmailNotificationOfDocumentChanges>` | notification     |                             |
|   				        | in the emails.   |                             |
+---------------------------------------+------------------+-----------------------------+
| :ref:`exo.ecms.watchdocument.subject  | The subject of   | "Your watching document is  |
| <EmailNotificationOfDocumentChanges>` | the notification | changed"                    |
| 					| emails.          |                             |
+---------------------------------------+------------------+-----------------------------+
| :ref:`exo.ecms.watchdocument.mimetype | Mimetype of the  | text/html                   |
| <EmailNotificationOfDocumentChanges>` | message body.    |                             |
+---------------------------------------+------------------+-----------------------------+
| :ref:`exo.ecms.watchdocument.content  | The message      | Check it yourself in        |
| <EmailNotificationOfDocumentChanges>` | body.            | ``exo-sample.properties``   |
+---------------------------------------+------------------+-----------------------------+ 


.. _ECMSDocumentversioning:

ECMS Document versioning
~~~~~~~~~~~~~~~~~~~~~~~~~~                 

+--------------------------------------+------------------+-----------------------------+
| Name                                 | Description      | Default                     |
+======================================+==================+=============================+
| :ref:`exo.ecms.documents.versioning  | The drives that  | Managed                     |
| .drives			       | are enabled for  | Sites,Groups,Personal       |
| <Configuration.DocumentVersioning>`  | Document         | Documents                   |
|                                      | versioning.      |                             |
+--------------------------------------+------------------+-----------------------------+
| :ref:`exo.ecms.documents.versions.max| The max number   | 0 (no limit)                |
| <Configuration.DocumentVersioning>`  | of versions that |                             |
| 				       | a document can   |                             |
|                                      | have.            |                             |
+--------------------------------------+------------------+-----------------------------+
| :ref:`exo.ecms.documents.versions.exp| The expiration   | 0 (no limit)                |
| iration                              | time (in days)   |                             |
| <Configuration.DocumentVersioning>`  | of a document    |                             |
|                                      | version.         |                             |
+--------------------------------------+------------------+-----------------------------+    

.. _ECMSDocumentviewer:

ECMS Document viewer
~~~~~~~~~~~~~~~~~~~~~ 

+---------------------------------+------------------+-----------------------------+
| Name                            | Description      | Default                     |
+=================================+==================+=============================+
| :ref:`exo.ecms.documents.pdfview| Max file size of | 10                          |
| er.max-file-size                | documents for    |                             |
| <Configuration.DocumentViewer>` | preview, in MB   |                             |
|                                 |                  |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.ecms.documents.pdfview| Max number of    | 99                          |
| er.max-pages                    | pages of         |                             |
| <Configuration.DocumentViewer>` | documents for    |                             |
|                                 | preview          |                             |
+---------------------------------+------------------+-----------------------------+       

.. _CalendarProperties:

Calendar
~~~~~~~~~ 

+-----------------------------------+------------------+-----------------------------+
| Name                              | Description      | Default                     |
+===================================+==================+=============================+ 
| :ref:`exo.calendar.default.event  | An integer       | 2 (equivalent to 1 hour)    |
| .suggest 			    | number n, used   |                             |
| <Configuration.EndDateSuggestion>`| to               |                             |
|                     		    | auto-calculate   |                             |
|                             	    | and suggest the  |                             |
|                                   | end time when    |                             |
|                                   | users            |                             |
|                                   | create/edit an   |                             |
|                                   | event.           |                             |
+-----------------------------------+------------------+-----------------------------+
| :ref:`exo.calendar.default.task.  | An integer       | 1 (equivalent to 30 mins)   |
| suggest  			    | number n, used   |                             |
| <Configuration.EndDateSuggestion>`| to               |                             |
|                                   | auto-calculate   |                             |
|                                   | and suggest the  |                             |
|                                   | end time when    |                             |
|                                   | users            |                             |
|                                   | create/edit a    |                             |
|                                   | task.            |                             |
+-----------------------------------+------------------+-----------------------------+

.. _SiteMetadataProperties:

Site metadata
~~~~~~~~~~~~~~           

+-----------------------------+------------------+-----------------------------+
| Name                        | Description      | Default                     |
+=============================+==================+=============================+
| `exo.intranet.portalConfig. | Don't change     | false                       |
| metadata.override <#PLFDevG | this unless you  |                             |
| uide.Site.CreateNew.Redeplo | customize the    |                             |
| ySiteExtension>`__          | Intranet site.   |                             |
+-----------------------------+------------------+-----------------------------+
| `exo.intranet.portalConfig. | Don't change     | insert                      |
| metadata.importmode <#PLFDe | this unless you  |                             |
| vGuide.Site.CreateNew.Redep | customize the    |                             |
| loySiteExtension>`__        | Intranet site.   |                             |
+-----------------------------+------------------+-----------------------------+
| `exo.acme.portalConfig.meta | Only affect when | false                       |
| data.override <#eXoAddonsGu | you install the  |                             |
| ide.ACME.Installation>`__   | ACME addon.      |                             |
+-----------------------------+------------------+-----------------------------+
| `exo.ide.portalConfig.metad | Only affect when | true                        |
| ata.override <#eXoAddonsGui | you install the  |                             |
| de.IDE>`__                  | IDE addon.       |                             |
+-----------------------------+------------------+-----------------------------+

.. _DatasourceProperties:

Datasource              
~~~~~~~~~~~~

+-----------------------------+------------------+-----------------------------+
| Name                        | Description      | Default                     |
+=============================+==================+=============================+
| :ref:`exo.jcr.datasource.   | JCR datasource   | java:/comp/env/exo-jcr      |
| name <Database.JNDI>`       | name.            |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`exo.idm.datasource.   | IDM datasource   | java:/comp/env/exo-idm      |
| name <Database.JNDI>`       | name.            |                             |
+-----------------------------+------------------+-----------------------------+                                                                      
.. _ClusteringProperties:

Clustering
~~~~~~~~~~~

+------------------------------+------------------+-----------------------------+
| Name                         | Description      | Default                     |
+==============================+==================+=============================+
| exo.cluster.partition.name   | Give a string to | DefaultPartition            |
|                              | identify your    |                             |
|                              | cluster, to      |                             |
|                              | avoid conflict   |                             |
|                              | with other       |                             |
|                              | clusters in the  |                             |
|                              | network.         |                             |
+------------------------------+------------------+-----------------------------+
| :ref:`exo.jcr.cluster.jgroups| JGroups          |                             |
| .tcp.\*                      | configuration    |                             |
| <Clustering.JGroups.JCR.TCP>`| for JCR using    |                             |
|                              | TCP.             |                             |
+------------------------------+------------------+-----------------------------+
| :ref:`exo.jcr.cluster.jgroups| JGroups          |                             |
| .udp.\*                      | configuration    |                             |
| <Clustering.JGroups.JCR.UDP>`| for JCR using    |                             |
|                              | UDP.             |                             |
+------------------------------+------------------+-----------------------------+
| :ref:`exo.idm.cluster.jgroups| JGroups          |                             |
| .tcp\*                       | configuration    |                             |
| <Clustering.JGroups.IDM.TCP>`| for IDM using    |                             |
|                              | TCP.             |                             |
+------------------------------+------------------+-----------------------------+
| :ref:`exo.idm.cluster.jgroups| JGroups          |                             |
| .udp.\*                      | configuration    |                             |
| <Clustering.JGroups.IDM.TCP>`| for IDM using    |                             |
|                              | UDP.             |                             |
+------------------------------+------------------+-----------------------------+
| :ref:`exo.jcr.cluster.jgroups| Path to your     |                             |
| .config                      | customized       |                             |
| <Clustering.JGroupsXml>`     | JGroups          |                             |
|                              | configuration    |                             |
|                              | file, applied to |                             |
|                              | JCR.             |                             |
+------------------------------+------------------+-----------------------------+
| :ref:`exo.jcr.cluster.jgroups| URL to your      |                             |
| .config-url                  | customized       |                             |
| <Clustering.JGroupsXml>`     | JGroups          |                             |
|                              | configuration    |                             |
|                              | file, applied to |                             |
|                              | JCR.             |                             |
+------------------------------+------------------+-----------------------------+
| :ref:`exo.idm.cluster.jgroups| Path to your     |                             |
| .config                      | customized       |                             |
| <Clustering.JGroupsXml>`     | JGroups          |                             |
|                              | configuration    |                             |
|                              | file, applied to |                             |
|                              | IDM.             |                             |
+------------------------------+------------------+-----------------------------+                           

.. _QuartzSchedulerProperties:

Quartz Scheduler
~~~~~~~~~~~~~~~~~

 **Main Scheduler Properties**   
 
+---------------------------------+------------------+-----------------------------+
| Name                            | Description      | Default                     |
+=================================+==================+=============================+ 
| :ref:`exo.quartz.scheduler.insta| The name of the  | ExoScheduler                |
| nceName                         | scheduler        |                             |
| <Configuration.QuartzScheduler>`| instance.        |                             |
|                                 |                  |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.quartz.scheduler.insta| The type of the  | AUTO                        |
| nceId                           | scheduler        |                             |
| <Configuration.QuartzScheduler>`| instance.        |                             |
|                                 |                  |                             |
+---------------------------------+------------------+-----------------------------+                                                                        

 **ThreadPool configuration Properties**                  

+---------------------------------+------------------+-----------------------------+
| Name                            | Description      | Default                     |
+=================================+==================+=============================+
| :ref:`exo.quartz.threadPool.clas| Is the name of   | org.quartz.simpl.SimpleThre |
| s                               | the ThreadPool   | adPool                      |
| <Configuration.QuartzScheduler>`| implementation   |                             |
|                                 | used.            |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.quartz.threadPool.thre| It an integer    | 5 (which is the value of    |
| adPriority                      | value between    | Thread.NORM\_PRIORITY)      |
| <Configuration.QuartzScheduler>`| Thread.MIN\_PRIO |                             |
|                                 | RITY             |                             |
|                                 | (which is 1) and |                             |
|                                 | Thread.MAX\_PRIO |                             |
|                                 | RITY             |                             |
|                                 | (which is 10).   |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.quartz.threadPool.thre| It is the number | 25                          |
| adCount                         | of threads that  |                             |
| <Configuration.QuartzScheduler>`| are available    |                             |
|                                 | for concurrent   |                             |
|                                 | execution of     |                             |
|                                 | jobs.            |                             |
+---------------------------------+------------------+-----------------------------+                                         

 **JobStore configuration Properties**                  

+---------------------------------+------------------+-----------------------------+
| Name                            | Description      | Default                     |
+=================================+==================+=============================+
| :ref:`exo.quartz.jobStore.misfir| The number of    | 6000                        |
| eThreshold                      | milliseconds the |                             |
| <Configuration.QuartzScheduler>`| scheduler will   |                             |
|                                 | tolerate a       |                             |
|                                 | trigger to pass  |                             |
|                                 | its              |                             |
|                                 | next-fire-time   |                             |
|                                 | by, before being |                             |
|                                 | considered       |                             |
|                                 | misfired.        |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.quartz.jobStore.class | The Scheduler’s  | org.quartz.impl.jdbcjobstor |
| <Configuration.QuartzScheduler>`| JobStore class   | e.JobStoreTX                |
|                                 | name.            |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.quartz.jobStore.driver| The Driver       | org.quartz.impl.jdbcjobstor |
| DelegateClass                   | delegate which   | e.StdJDBCDelegate           |
| <Configuration.QuartzScheduler>`| will understand  |                             |
|                                 | the database     |                             |
|                                 | system dialect.  |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.quartz.jobStore.usePro| The flag which   | false                       |
| perties                         | instructs        |                             |
| <Configuration.QuartzScheduler>`| JDBCJobStore     |                             |
|                                 | that all values  |                             |
|                                 | in JobDataMaps   |                             |
|                                 | will be Strings. |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.quartz.jobStore.dataSo| The name of the  | quartzDS                    |
| urce                            | DataSources      |                             |
| <Configuration.QuartzScheduler>`| defined in the   |                             |
|                                 | configuration    |                             |
|                                 | properties file  |                             |
|                                 | for quartz.      |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.quartz.jobStore.tableP| The prefix used  | QRTZ\_                      |
| refix                           | for to Quartz’s  |                             |
| <Configuration.QuartzScheduler>`| tables in the    |                             |
|                                 | database.        |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.quartz.jobStore.isClus| Set to "true" in | false                       |
| tered                           | order to turn on |                             |
| <Configuration.QuartzScheduler>`| clustering       |                             |
|                                 | features.        |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.quartz.jobStore.cluste| Set the          | 20000                       |
| rCheckinInterval                | frequency (in    |                             |
| <Configuration.QuartzScheduler>`| milliseconds) at |                             |
|                                 | which this       |                             |
|                                 | instance         |                             |
|                                 | "checks-in" with |                             |
|                                 | other instances  |                             |
|                                 | of the cluster.  |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.quartz.jobStore.maxMis| The maximum      | 20                          |
| firesToHandleAtATime            | number of        |                             |
| <Configuration.QuartzScheduler>`| misfired         |                             |
|                                 | triggers the     |                             |
|                                 | jobstore will    |                             |
|                                 | handle in a      |                             |
|                                 | given pass.      |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.quartz.jobStore.dontSe| Setting this     | false                       |
| tAutoCommitFalse                | parameter to     |                             |
| <Configuration.QuartzScheduler>`| "true" tells     |                             |
|                                 | Quartz not to    |                             |
|                                 | call             |                             |
|                                 | setAutoCommit(fa |                             |
|                                 | lse)             |                             |
|                                 | on connections   |                             |
|                                 | obtained from    |                             |
|                                 | the              |                             |
|                                 | DataSource(s).   |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.quartz.jobStore.acquir| Whether or not   | false                       |
| eTriggersWithinLock             | the acquisition  |                             |
| <Configuration.QuartzScheduler>`| of next triggers |                             |
|                                 | to fire should   |                             |
|                                 | occur within an  |                             |
|                                 | explicit         |                             |
|                                 | database lock.   |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.quartz.jobStore.lockHa| The class name   |                             |
| ndler.class                     | to be used to    |                             |
| <Configuration.QuartzScheduler>`| produce an       |                             |
|                                 | instance of a    |                             |
|                                 | "org.quartz.impl |                             |
|                                 | .jdbcjobstore".  |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.quartz.jobStore.driver| A pipe-delimited |                             |
| DelegateInitString              | list of          |                             |
| <Configuration.QuartzScheduler>`| properties (and  |                             |
|                                 | their values)    |                             |
|                                 | that can be      |                             |
|                                 | passed to the    |                             |
|                                 | DriverDelegate   |                             |
|                                 | during           |                             |
|                                 | initialization   |                             |
|                                 | time.            |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.quartz.jobStore.txIsol| A value of       | false                       |
| ationLevelSerializable          | "true" tells     |                             |
| <Configuration.QuartzScheduler>`| Quartz (when     |                             |
|                                 | using JobStoreTX |                             |
|                                 | or CMT) to call  |                             |
|                                 | setTransactionIs |                             |
|                            	  | olation(Connecti |                             |
|                             	  | on.TRANSACTION\_ |                             |
|                             	  | SERIALIZABLE)    |                             |
|                                 | on JDBC          |                             |
|                                 | connections.     |                             |
|                                 | This can be      |                             |
|                                 | helpful to       |                             |
|                                 | prevent lock     |                             |
|                                 | timeouts with    |                             |
|                                 | some databases   |                             |
|                                 | under high load, |                             |
|                                 | and long-lasting |                             |
|                                 | transactions.    |                             |
+---------------------------------+------------------+-----------------------------+
| :ref:`exo.quartz.jobStore.select| Must be a SQL    | SELECT \* FROM {0}LOCKS     |
| WithLockSQL                     | string that      | WHERE SCHED\_NAME = {1} AND |
| <Configuration.QuartzScheduler>`| selects a row in | LOCK\_NAME = ? FOR UPDATE   |
|                                 | the "LOCKS"      |                             |
|                                 | table and places |                             |
|                                 | a lock on the    |                             |
|                                 | row.             |                             |
+---------------------------------+------------------+-----------------------------+

 **Datasources configuration**  
 
+---------------------------------+------------------+-----------------------------+
| Name                            | Description      | Default                     |
+=================================+==================+=============================+
| :ref:`exo.quartz.dataSource.quar| The JNDI URL for | java:/comp/env/exo-jpa\_por |
| tzDS.jndiURL                    | a DataSource     | tal                         |
| <Configuration.QuartzScheduler>`| that is managed  |                             |
|                                 | by eXo Platform. |                             |
+---------------------------------+------------------+-----------------------------+                             


.. _PasswordEncryptionProperties:

Password Encryption
~~~~~~~~~~~~~~~~~~~~

+-------------------------------+------------------+-----------------------------+
| Name                          | Description      | Default                     |
+===============================+==================+=============================+
| :ref:`exo.plidm.password.class| The class that   | DatabaseReadingSaltEncoder  |
| <PasswordEncryption>`         | encrypts the     |                             |
|                               | user password    |                             |
|                               | before it is     |                             |
|                               | stored in the    |                             |
|                               | database.        |                             |
+-------------------------------+------------------+-----------------------------+
| :ref:`exo.plidm.password.hash | The encrypt      | SHA-256                     |
| <PasswordEncryption>`         | algorithm.       |                             |
+-------------------------------+------------------+-----------------------------+                                             

.. _ElasticsearchProperties:

Elasticsearch Properties
~~~~~~~~~~~~~~~~~~~~~~~~~~

+-------------------------------+------------------+-----------------------------+
| Name                          | Description      | Default                     |
+===============================+==================+=============================+
| :ref:`exo.es.version.minor    | The expected     | 5.6                         |
| <Configuration.ElasticSearch>`| minor            |                             |
|                               | Elastisearch     |                             |
|                               | version          |                             |
|                               | compatible with  |                             |
|                               | eXo Platform.    |                             |
+-------------------------------+------------------+-----------------------------+
| :ref:`exo.es.embedded.enabled | Allows to run an | true                        |
| <Configuration.ElasticSearch>`| Elasticsearch    |                             |
|                               | server embedded  |                             |
|                               | in eXo Platform  |                             |
|                               | (not recommended |                             |
|                               | for production). |                             |
+-------------------------------+------------------+-----------------------------+
| :ref:`es.cluster.name         | Cluster name     | exoplatform-es              |
| <ESEmbeddedMode>`             | identifies your  |                             |
|                               | Elasticsearch    |                             |
|                               | cluster for      |                             |
|                               | auto-discovery.  |                             |
|                               | If you’re        |                             |
|                               | running multiple |                             |
|                               | clusters on the  |                             |
|                               | same network,    |                             |
|                               | make sure you’re |                             |
|                               | using unique     |                             |
|                               | names.           |                             |
+-------------------------------+------------------+-----------------------------+
| :ref:`es.node.name            | Name of the mode | exoplatform-es-embedded     |
| <ESEmbeddedMode>`             | for the embedded |                             |
|                               | mode. If not     |                             |
|                               | specified, a     |                             |
|                               | name is          |                             |
|                               | generated        |                             |
|                               | dynamically at   |                             |
|                               | startup.         |                             |
+-------------------------------+------------------+-----------------------------+
| :ref:`es.network.host         | Sets both        | "127.0.0.1"                 |
| <ESEmbeddedMode>`             | 'bind\_host' and |                             |
|                               | 'publish\_host'  |                             |
|                               | params. More     |                             |
|                               | details          |                             |
|                               | `here <https://w |                             |
|                               | ww.elastic.co/gu |                             |
|                               | ide/en/elasticse |                             |
|                               | arch/reference/c |                             |
|                               | urrent/modules-n |                             |
|                               | etwork.html#adva |                             |
|                               | nced-network-set |                             |
|                               | tings>`__        |                             |
+-------------------------------+------------------+-----------------------------+
| :ref:`es.discovery.zen.ping.  | In Unicast       | ["127.0.0.1"]               |
| unicast.hosts                 | dicovery mode,   |                             |
| <ESEmbeddedMode>`             | this parameter   |                             |
|                               | lets you set a   |                             |
|                               | list of master   |                             |
|                               | nodes in the     |                             |
|                               | cluster to       |                             |
|                               | perform          |                             |
|                               | discovery when   |                             |
|                               | new nodes        |                             |
|                               | (master or data) |                             |
|                               | are started.     |                             |
+-------------------------------+------------------+-----------------------------+
| :ref:`es.http.port            | TCP Port of the  | 9200                        |
| <ESEmbeddedMode>`             | embedded ES      |                             |
|                               | node.            |                             |
+-------------------------------+------------------+-----------------------------+
| :ref:`es.path.data            | Local path to    | gatein/data                 |
| <ESEmbeddedMode>`             | the directory    |                             |
|                               | where to         |                             |
|                               | Elasticsearch    |                             |
|                               | will store index |                             |
|                               | data allocated   |                             |
|                               | for this node.   |                             |
+-------------------------------+------------------+-----------------------------+

 **Elasticsearch Client**    

+-----------------------------+------------------+-----------------------------+
| Name                        | Description      | Default                     |
+=============================+==================+=============================+
| :ref:`exo.es.search.server  | URL of the node  | "http://127.0.0.1:9200"     |
| .url <ESClient>`            | used for         |                             |
|                             | searching.       |                             |
|                             | Required and     |                             |
|                             | exo.es.embedded. |                             |
|                             | enabled=false    |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`exo.es.search.server  | Username used    |                             |
| .username <ESClient>`       | for the BASIC    |                             |
|                             | authentication   |                             |
|                             | on the           |                             |
|                             | Elasticsearch    |                             |
|                             | node used for    |                             |
|                             | searching.       |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`exo.es.search.server  | Password used    |                             |
| .password <ESClient>`       | for the BASIC    |                             |
|                             | authentication   |                             |
|                             | on the           |                             |
|                             | Elasticsearch    |                             |
|                             | node used for    |                             |
|                             | searching.       |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`exo.es.index.server   | URL of the node  | "http://127.0.0.1:9200"     |
| .url <ESClient>`            | used for         |                             |
|                             | indexing.        |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`exo.es.index.server   | Username used    |                             |
| .username <ESClient>`       | for the BASIC    |                             |
|                             | authentication   |                             |
|                             | on the           |                             |
|                             | Elasticsearch    |                             |
|                             | node used for    |                             |
|                             | indexing.        |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`exo.es.index.server   | Password used    |                             |
| .password <ESClient>`       | for the BASIC    |                             |
|                             | authentication   |                             |
|                             | on the           |                             |
|                             | Elasticsearch    |                             |
|                             | node used for    |                             |
|                             | indexing.        |                             |
+-----------------------------+------------------+-----------------------------+                                     

 **Elasticsearch Indexing properties**                

+-----------------------------+------------------+-----------------------------+
| Name                        | Description      | Default                     |
+=============================+==================+=============================+
| :ref:`exo.es.indexing.batch | Maximum number   | 1000                        |
| .number <ESIndexing>`       | of documents     |                             |
|                             | that can be sent |                             |
|                             | to Elasticsearch |                             |
|                             | in one bulk      |                             |
|                             | request.         |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`exo.es.indexing.requ  | Maximum size (in | 10485760 (= 10Mb)           |
| est.size.limit <ESIndexing>`| bytes) of an     |                             |
|                             | Elasticsearch    |                             |
|                             | bulk request.    |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`exo.es.reindex.batch. | Size of the      | 100                         |
| size <ESIndexing>`          | chunks of the    |                             |
|                             | reindexing       |                             |
|                             | batch.           |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`exo.es.indexing.repli | Number of        | 1                           |
| ca.number.default           | replicas of the  |                             |
| <ESIndexing>`               | index.           |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`exo.es.indexing.shard | Number of shards | 5                           |
| .number.default             | of the index.    |                             |
| <ESIndexing>`               |                  |                             |
+-----------------------------+------------------+-----------------------------+

.. _EnableDisaleActType:

Enable/Disable activity type
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
+------------------------------+------------------+-----------------------------+
| Name                         | Description      | Default                     |
+==============================+==================+=============================+
| :ref:`exo.activity-type.acti | The property     | true                        |
| vity-type-key.enabled        | that allows to   |                             |
| <Configuration.ActivityType>`| enable or        |                             |
|                              | disable an       |                             |
|                              | activity having  |                             |
|                              | the type key     |                             |
|                              | `` activity-type |                             |
|                              | -key ``          |                             |
|                              | from posting in  |                             |
|                              | the streams.     |                             |
+------------------------------+------------------+-----------------------------+                              

.. _FSProperties:

File storage configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
+-----------------------------+------------------+-----------------------------+
| Name                        | Description      | Default                     |
+=============================+==================+=============================+
| :ref:`exo.files.binaries.   | Allows to define | fs                          |
| storage.type                | the file storage |                             |
| <Configuration.FileStorage>`| way: File system |                             |
|                             | (type=fs) or     |                             |
|                             | RDBMS            |                             |
|                             | (type=rdbms).    |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`exo.commons.FileStorag| Enables/disables | true                        |
| eCleanJob.enabled           | the job that     |                             |
| <Configuration.FileStorage>`| cleans unused    |                             |
|                             | files.           |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`exo.commons.FileStorag| The retention    | 30 days                     |
| eCleanJob.retention-time    | time of unused   |                             |
| <Configuration.FileStorage>`| files            |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`exo.commons.FileStorag| The cron job     | 0 0 11 ? \* SUN             |
| eCleanJob.expression        | expression for   |                             |
| <Configuration.FileStorage>`| scheduling the   |                             |
|                             | file cleaner job |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`exo.files.storage.dir | The location     | {exo.data.dir}/files        |
| <Configuration.FileStorage>`| where to store   |                             |
|                             | binary files in  |                             |
|                             | case of file     |                             |
|                             | system storage.  |                             |
|                             | In cluster mode, |                             |
|                             | this location    |                             |
|                             | (folder) should  |                             |
|                             | be shared.       |                             |
+-----------------------------+------------------+-----------------------------+                                   

.. _MongoDBConfiguration:

MongoDB configuration
~~~~~~~~~~~~~~~~~~~~~~~
 
 MongoDB is the database for eXo Chat: all the below parameters could be configured in :ref:`chat.properties file <Configuration.ChatConfiguration>`       

+-----------------------------+------------------+-----------------------------+
| Name                        | Description      | Default                     |
+=============================+==================+=============================+
| :ref:`dbServerType          | Allows to define | mongo                       |
| <Database.ChatDatabase>`    | MongoDB type:    |                             |
|                             | either Mongo or  |                             |
|                             | embed. Embed     |                             |
|                             | value is used    |                             |
|                             | for unit tests.  |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`dbServerHost          | The host name or | localhost                   |
| <Database.ChatDatabase>`    | IP of MongoDB.   |                             |
|                             | (deprecated)     |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`dbServerPort          | The port number  | 27017                       |
| <Database.ChatDatabase>`    | to connect to    |                             |
|                             | MongoDB host.    |                             |
|                             |(deprecated)      |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`dbServerHosts         | The MongoDB      | localhost:27017             |
| <Database.ChatDatabase>`    | nodes to connect |                             |
|                             | to, as a         |                             |
|                             | comma-separated  |                             |
|                             | list of          |                             |
|                             | <host:port>      |                             |
|                             | values.          |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`dbName                | Name of the      | chat                        |
| <Database.ChatDatabase>`    | Mongo database   |                             |
|                             | name.            |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`dbAuthentication      | Enables or       | false                       |
| <Database.ChatDatabase>`    | disables         |                             |
|                             | authentication   |                             |
|                             | to access        |                             |
|                             | MongoDB. When    |                             |
|                             | set to true this |                             |
|                             | means that       |                             |
|                             | authentication   |                             |
|                             | is required.     |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`dbUser                | Provide the      | EMPTY                       |
| <Database.ChatDatabase>`    | username to      |                             |
|                             | access the       |                             |
|                             | database if      |                             |
|                             | authentication   |                             |
|                             | needed.          |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`dbPassword            | Provide the      | EMPTY                       |
| <Database.ChatDatabase>`    | password to      |                             |
|                             | access the       |                             |
|                             | database if      |                             |
|                             | authentication   |                             |
|                             | needed.          |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`chatPassPhrase        | The password to  | chat                        |
| <ChatServerConf>`           | access REST      |                             |
|                             | service on the   |                             |
|                             | eXo Chat         |                             |
|                             | server.          |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`chatCronNotifCleanup  | The frequency of | 0 0/60 \* \* \* ?           |
| <ChatServerConf>`           | cleaning eXo     |                             |
|                             | Chat             |                             |
|                             | notifications.Th |                             |
|                             | ey               |                             |
|                             | are cleaned up   |                             |
|                             | every one hour   |                             |
|                             | by default.      |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`chatReadTotalJson     | The number of    | 200                         |
| <ChatServerConf>`           | messages that    |                             |
|                             | you can get in   |                             |
|                             | the Chat room.   |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`chatIntervalChat      | Time interval to | 5000                        |
| <ChatClientUpdates>`        | refresh messages |                             |
|                             | in a chat.       |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`chatIntervalSession   | Time interval to | 60000                       |
| <ChatClientUpdates>`        | keep a chat      |                             |
|                             | session alive in |                             |
|                             | milliseconds.    |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`chatIntervalNotif     | Time interval to | 5000                        |
| <ChatClientUpdates>`        | refresh          |                             |
|                             | Notifications in |                             |
|                             | the main menu in |                             |
|                             | milliseconds.    |                             |
+-----------------------------+------------------+-----------------------------+
| :ref:`chatTokenValidity     | Time after which | 60000                       |
| <ChatClientUpdates>`        | a token will be  |                             |
|                             | invalid. The use |                             |
|                             | will then be     |                             |
|                             | considered       |                             |
|                             | offline.         |                             |
+-----------------------------+------------------+-----------------------------+

.. _Groovystatistics:

Groovy templates statistics
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

+-----------------------------+------------------+-----------------------------+
| Name                        | Description      | Default                     |
+=============================+==================+=============================+
| :ref:`exo.statistics.groovy | Enables/disables | true                        |
| .template.enabled           | Groovy Templates |                             |
| <statisticsParameter>`      | statistics that  |                             |
|                             | is collected     |                             |
|                             | asynchronously.  |                             |
+-----------------------------+------------------+-----------------------------+                              

.. _CometDConfiguration:

CometD configuration
~~~~~~~~~~~~~~~~~~~~~

+-------------------------------+------------------+-----------------------------+
| Name                          | Description      | Default                     |
+===============================+==================+=============================+
| :ref:`exo.cometd.oort.url     | The CometD Oort  | "http://localhost:8080/come |
| <Clustering.SettingUpCluster>`| URL used in      | td/cometd",                 |
|                               | clustering mode. | localhost should be         |
|                               |                  | replaced by the hostname or |
|                               |                  | the IP of the cluster node. |
+-------------------------------+------------------+-----------------------------+
| :ref:`exo.cometd.oort.        | The CometD       | multicast                   |
| configType                    | configuration    |                             |
| <Clustering.SettingUpCluster>`| type which could |                             |
|                               | be either        |                             |
|                               | "static" or      |                             |
|                               | "multicast".     |                             |
+-------------------------------+------------------+-----------------------------+
| :ref:`exo.cometd.oort.cloud   | A                |                             |
| <Clustering.SettingUpCluster>`| comma-separated  |                             |
|                               | list of URLs of  |                             |
|                               | other Oort       |                             |
|                               | comets to        |                             |
|                               | connect to at    |                             |
|                               | startup.         |                             |
+-------------------------------+------------------+-----------------------------+                                      

.. _LastLoginTimeProperty:
 
Update of last login time                      
~~~~~~~~~~~~~~~~~~~~~~~~~~

+--------------------------------+------------------+-----------------------------+
| Name                           | Description      | Default                     |
+================================+==================+=============================+
| :ref:`exo.idm.user.updateLast  | Enables/disables | true                        |
| LoginTime                      | the update of    |                             |
| <Configuration.lastlogintime>` | last login time  |                             |
|                                | each time the    |                             |
|                                | user login.      |                             |
+--------------------------------+------------------+-----------------------------+                                 

.. _SpaceAdministratorsGroup:

Define spaces administrators group
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
+-----------------------------+------------------+-----------------------------+
| Name                        | Description      | Default                     |
+=============================+==================+=============================+
| :ref:`exo.social.spaces.    | Defines the list |                             |
| administrators              | of spaces        |                             |
| <SpacesAdministration>`     | administrators   |                             |
|                             | groups.          |                             |
+-----------------------------+------------------+-----------------------------+                                    

.. _AssetsVersion:

Assets versions used in static resources URLs
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

+--------------------------+------------------+-----------------------------+
| Name                     | Description      | Default                     |
+==========================+==================+=============================+
| :ref:`exo.assets.version | Defines the      | It is set to eXo Platform   |
| <AssetsVersionConf>`     | assets version.  | binary version.             |
+--------------------------+------------------+-----------------------------+                                             

.. _UsernameCaseSensitive:

Username case sensitive
~~~~~~~~~~~~~~~~~~~~~~~~~
 
+--------------------------------+------------------+-----------------------------+
| Name                           | Description      | Default                     |
+================================+==================+=============================+ 
| :ref:`exo.auth.case.insensitive| Defines if       | false.                      |
| <CaseSensitiveUsername>`       | usernames in     |                             |
|                                | eXo Platform are |                             |
|                                | case sensitive or|                             |
|                                | not.             |                             |
+--------------------------------+------------------+-----------------------------+

.. _UserInactivityDelayProperty:                                        

User inactivity delay
~~~~~~~~~~~~~~~~~~~~~~

+------------------------+------------------+-----------------------------+
| Name                   | Description      | Default                     |
+========================+==================+=============================+ 
| :ref:`exo.user.status. | Defines the time | 240000                      |
| offline.delay          | laps which makes |                             |
| <UserInactivityDelay>` | the user in      |                             |
|                        | offline status.  |                             |
|                        | Its value is     |                             |
|                        | expressed in     |                             |
|                        | milliseconds.    |                             |
+------------------------+------------------+-----------------------------+                              

.. _NotificationsChannels:

Notifications channels  
~~~~~~~~~~~~~~~~~~~~~~~

+--------------------------------+------------------+-----------------------------+
| Name                           | Description      | Default                     |
+================================+==================+=============================+
| :ref:`exo.notification.channels| Defines the      | WEB\_CHANNEL, MAIL\_CHANNEL |
| <NotificationChannels>`        | activated        |                             |
|                                | notification     |                             |
|                                | channels.        |                             |
+--------------------------------+------------------+-----------------------------+                                  

.. _WikiBaseURI:

Wiki application base URI 
~~~~~~~~~~~~~~~~~~~~~~~~~~
 
+-----------------------------+------------------+-----------------------------+
| Name                        | Description      | Default                     |
+=============================+==================+=============================+
| :ref:`wiki.permalink.appuri | Defines the base | wiki                        |
| <Configuration.WikiBaseURI>`| URI for the wiki |                             |
|                             | application      |                             |
|                             | permalinks.      |                             |
+-----------------------------+------------------+-----------------------------+                                

.. _FilesUploadLimit:

Files upload limit
~~~~~~~~~~~~~~~~~~~
 
+-------------------------------+------------------+-----------------------------+
| Name                          | Description      | Default                     |
+===============================+==================+=============================+
| :ref:`exo.ecms.connector.dr   | Maximum size (in | 200                         |
| ives.uploadLimit              | MB) allowed of   |                             |
| <Configuration.FileSizeLimit>`| an uploaded      |                             |
|                               | file.            |                             |
+-------------------------------+------------------+-----------------------------+
| :ref:`exo.social.activity.upl | Maximum size (in | 200                         |
| oadLimit                      | MB) allowed of   |                             |
| <Configuration.FileSizeLimit>`| an uploaded      |                             |
|                               | image through    |                             |
|                               | the CKEditor.    |                             |
+-------------------------------+------------------+-----------------------------+
| :ref:`exo.wiki.attachment.    | Maximum size (in | 200                         |
| uploadLimit                   | MB) allowed of   |                             |
| <Configuration.FileSizeLimit>`| an uploaded file |                             |
|                               | in Wiki          |                             |
|                               | application.     |                             |
+-------------------------------+------------------+-----------------------------+                                 


.. _CaseSensitiveUsername:

===================================
Configure username case sensitive
===================================

By default, eXo Platform is case insensitive. You can configure it to become
case sensitive through a parameter in :ref:`exo.properties <Configuration.ConfigurationOverview>`
file:

-  ``exo.auth.case.insensitive``, default value set to true.

If you set the ``exo.auth.case.insensitive`` to true this means that the
username "user" is the same as "User" or "uSEr". If it is set to false,
this means that the user should take care of capital and minimal letters
when typing the username.


.. _UserInactivityDelay:

====================================
User inactivity delay configuration
====================================

When a user does not make any action on the platform i.e he is inactive
for a time lapse, he is considered as offline.

The time lapse is configurable in :ref:`exo.properties <Configuration.ConfigurationOverview>`
file using this parameter ``exo.user.status.offline.delay``.

The parameter is expressed in millisecond and the value default is
240000 milliseconds.

.. code:: java

     # The delay when we consider a user as offline. Default value is 240000 milliseconds
    exo.user.status.offline.delay=240000
    
.. _Configuration.DataDirectory:

=============================
Data directory configuration
=============================

JCR data is stored in both SQL databases and File System. JCR Database
configuration is explained in :ref:`Database <Database>`.
The JCR File System configuration is explained in this section.

Typically, the JCR File System data consists of four folders:

-  JCR indexes.

-  JCR values storage.

   To store JCR value, SQL database is used as primary storage and
   another directory can be used as a secondary, dedicated storage for
   BLOB data. It is optional and you can configure to not store BLOB
   data in File System, by changing the default configuration in the
   :ref:`exo.properties <Configuration.ConfigurationOverview>` file.

   ::

       exo.jcr.storage.enabled=true

-  JTA (Transaction information).

-  Swap data (temporary memory space).

By default, these four folders are located under a common directory that
is ``$PLATFORM_TOMCAT_HOME/gatein/data`` (Tomcat),
``$PLATFORM_JBOSS_HOME/standalone/data/gatein`` (JBoss).

In production, it is recommended to configure it to use a directory
separated from the package. Especially in cluster mode, it should be a
network shared folder.

**Configuration in Platform Tomcat**

In Tomcat, the directory is configured by the environment variable
``EXO_DATA_DIR``. Edit the ``bin/setenv-customize.(sh|bat)`` script:

::

    EXO_DATA_DIR=/mnt/nfs/shared/exo/data

You need to create the script file by copying/renaming the sample
``bin/setenv-customize.sample.(sh|bat)``. See :ref:`Customizing environment variables <CustomizingEnvironmentVariables>`
for more information.

**Configuration in Platform JBoss**

In JBoss, the directory is configured by the system property
``exo.data.dir``. Edit ``standalone/configuration/standalone-exo.xml``
like below:

.. code:: xml

    <system-properties>
        ...
        <property name="exo.data.dir" value="/mnt/nfs/shared/exo/data"/>
        ...
    </system-properties>

Note that if you are configuring the cluster mode, the configuration
might be different. The file should be ``standalone-exo-cluster.xml``
and the property should be ``exo.shared.dir``. See :ref:`Setting up eXo Platform cluster <Clustering.SettingUpCluster>`.

.. _AssetsVersionConf:    

=============================
Assets version configuration
=============================

Between versions, eXo Platform makes various changes on various layers. To
avoid that browsers use cached assets and display old behavior, a
parameter ``exo.assets.version`` is added in
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

When eXo Platform is updated, his parameter allows to:

-  Enforce browsers to reload javascript and css.

-  Build eXo Platform urls for resources serving.

-  Avoid asking users to clear their browser's cache.

By default, this parameter is set to eXo Platform package version, i.e for
the version 5.0.x it is set to 5.0.x.

.. code:: java

     # Assets versions used in static resources URLs. Useful to manage caches.
     exo.assets.version=5.0.x

.. _Configuration.QuartzScheduler:

==============================
Quartz Scheduler configuration
==============================

eXo Platform uses `Quartz Scheduler <http://www.quartz-scheduler.org/>`__,
the Java Framework for scheduling jobs, in a wide range of features.
When eXo Platform runs in cluster mode, it is important to prevent jobs to
execute concurrently. Quartz has its own cluster mode, with each
instance of eXo Platform server as a node of Quartz load balancing and
failover group.

Since the version 4.4 of eXo Platform, Quatrz is used in persisted mode. So
it is automatically configured in eXo Platform. As an administrator, you can
change default Quartz settings in eXo Platform through
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

By default, here are Quartz properties:

::

    #Configure Main Scheduler Properties
    #exo.quartz.scheduler.instanceName=ExoScheduler
    #exo.quartz.scheduler.instanceId=AUTO

    #Configure ThreadPool
    #exo.quartz.threadPool.class=org.quartz.simpl.SimpleThreadPool
    #exo.quartz.threadPool.threadPriority=5
    #exo.quartz.threadPool.threadCount=25

    #Configure JobStore
    #exo.quartz.jobStore.misfireThreshold=6000
    #exo.quartz.jobStore.class=org.quartz.impl.jdbcjobstore.JobStoreTX
    #For SQL server set exo.quartz.jobStore.driverDelegateClass=org.quartz.impl.jdbcjobstore.MSSQLDelegate
    #For postgres set exo.quartz.jobStore.driverDelegateClass=org.quartz.impl.jdbcjobstore.PostgreSQLDelegate
    #exo.quartz.jobStore.driverDelegateClass=org.quartz.impl.jdbcjobstore.StdJDBCDelegate
    #exo.quartz.jobStore.useProperties=false
    #exo.quartz.jobStore.dataSource=quartzDS
    #exo.quartz.jobStore.tablePrefix=QRTZ_
    #exo.quartz.jobStore.isClustered=false
    #exo.quartz.jobStore.clusterCheckinInterval=20000
    #exo.quartz.jobStore.maxMisfiresToHandleAtATime=20
    #exo.quartz.jobStore.dontSetAutoCommitFalse=false
    #exo.quartz.jobStore.acquireTriggersWithinLock=false
    #exo.quartz.jobStore.lockHandler.class=
    #exo.quartz.jobStore.driverDelegateInitString=
    #exo.quartz.jobStore.txIsolationLevelSerializable=false
    #exo.quartz.jobStore.selectWithLockSQL=SELECT * FROM {0}LOCKS WHERE SCHED_NAME = {1} AND LOCK_NAME = ? FOR UPDATE
    #exo.quartz.dataSource.quartzDS.jndiURL=java:/comp/env/exo-jpa_portal   
        

More details about the definition and default values of the above
properties could be found in the table :ref:`Properties reference <Configuration.PropertiesReference>`. 
You can also refer to `Quartz Configuration Reference <http://www.quartz-scheduler.org/documentation/quartz-2.x/configuration/>`__
documentation for more details about quartz parameters.

.. _Configuration.CustomizeMultiupload:

======================================================
Configure documents multiupload in the activity stream
======================================================

Through the :ref:`MultiUpload <MultiUpload>` feature, you are able to 
upload up to 20 files per activity having each one 200 MB as max size.

You can change the default behavior through
:ref:`exo.properties <Configuration.ConfigurationOverview>` file by 
configuring these two parameters:

-  ``exo.social.composer.maxToUpload=20``, default value set to 20.

-  ``exo.social.composer.maxFileSizeInMB=200``, default value set to 200
   MB.

.. _Configuration.JCRTransactionService:

===================
Transaction service
===================

The JCR transaction timeout is 420 seconds by default. If your
application runs longer transactions, you might need a bigger timeout.

Configure the timeout by adding the ``exo.jcr.transaction.timeout``
property in :ref:`exo.properties <Configuration.ConfigurationOverview>`
file.

::

    exo.jcr.transaction.timeout=3600

The value is in seconds.


.. _Configuration.ServerBaseURL:

===============
Server base URL
===============

The property ``exo.base.url`` is used to generate links in some cases,
like a topic link in an email notification.

Generally you need to configure it to the base URL that users use to
access eXo Platform. For example, if you use a reverse proxy, the URL
should be the proxy's host.

The following is the default configuration. To change it, edit
:ref:`exo.properties <Configuration.ConfigurationOverview>`
file.

::

    # The Server Base URL is the URL via which users access eXo platform. All links created (for emails etc) will be prefixed by this URL.
    # The base URL must be set to the same URL by which browsers will be viewing your eXo platform instance.
    # Sample: exo.base.url=https://intranet.mycompany.com
    exo.base.url=http://localhost:8080

.. _Configuration.WikiBaseURI:

=========================
Wiki application base URI
=========================

The property ``wiki.permalink.appuri`` allows you to define the base URI
for the wiki application permalinks.

It is configurable through
:ref:`exo.properties <Configuration.ConfigurationOverview>` file. 
Its default value is wiki.

The parameter ``wiki.permalink.appuri`` utility is to well redirect wiki
pages when moving wiki application to different location than the
default one.

::

    wiki.permalink.appuri=wiki
    
    
.. _Configuration.AccountSetup:

=============
Account setup
=============

At the first startup of eXo Platform, the Account Setup and Greetings!
screens will appear by default. However, in some scenarios, these
screens are not necessary, for example:

-  When you have an extension that declares sample users.

-  When you want to connect to an existing user directory.

To skip these screens, simply change the default value from "false" into
"true" in the :ref:`exo.properties <Configuration.ConfigurationOverview>`
file.

::

    exo.accountsetup.skip=true

.. _Configuration.ValidatorsConfiguration:

====================================
Custom data validators configuration
====================================

Custom data validator, or user-configurable validator is the mechanism
allowing users to define their own validation rules. For example, the
username must be lowercase, or shorter than 20 characters. In eXo Platform,
there are 6 validators that administrators can configure to use and the
architecture allows developers to add more validators as they wish.

The validators can be configured via properties in
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

A configuration is created by adding an entry with the
``gatein.validators.`` prefix in
:ref:`exo.properties <Configuration.ConfigurationOverview>`
file. This prefix is followed by a validator name, a period '.' and a
validator aspect. Currently, there are the following validators and
validator aspects:

-  Validators:

   -  **username**: Validates the 'Username' field in the Create or Edit
      user form.

   -  **groupmembership**: There is a built-in regex that is currently
      not used to validate any field:

      ::

          GROUP_MEMBERSHIP_VALIDATION_REGEX = "^(\\p{Lower}[\\p{Lower}\\d\\._]+)(\\s*,\\s*(\\p{Lower}[\\p{Lower}\\d\\._]+))*$";

   -  **email**: Validates the Email Address field in the Create or Edit
      user form.

   -  **displayname**: Validates the Display Name field in the Create or
      Edit user form.

   -  **jobtitle**: Validates the Job Title field in the User Profile
      form.

   -  **grouplabel**: Validates the Label field in Add or Edit group
      form.

   -  **pagename**: Validates the page name field in the **Add new
      page** form. Its label is Page Name if you create a page from the
      Page ManagementAdd New Page menu. In the **Page Creation Wizard**,
      the label is Node Name.

-  Validator aspects:

   -  ``gatein.validators.{validatorName}.length.min``: The minimum
      length of the validated field.

   -  ``gatein.validators.{validatorName}.length.max``: The maximum
      length of the validated field.

   -  ``gatein.validators.{validatorName}.regexp``: The regular
      expression to which the validated field must conform.

   -  ``gatein.validators.{validatorName}.format.message``: The
      information message that is displayed when the field does not
      conform to the specified regular expression.

See details about the "*username*\ " validator as below. For
instructions on how to add a new validator (not in the above list), see
:ref:`Developing your own validator <#PLFDevGuide.AuthenticationAndIdentity.DevelopingValidators>`.

**Configuration of username validator**

By default, the username will be validated as follows:

-  The length must be between 3 and 30 characters.

-  Only lowercase letters, numbers, underscores (\_) and period (.) can
   be used.

-  No consecutive underscores (\_) or periods (.) can be used.

-  Must start with a lowercase letter.

-  Must end with a lowercase letter or number.

.. note:: Some components that leverage GateIn depend on usernames being all
          lowercase. Therefore, you are strongly recommended to use a
          lowercase username only.

If you want to validate that username format is email-like, you could
use the following configuration:

::

    # validators
    gatein.validators.username.regexp=^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$
    gatein.validators.username.format.message=Username must be a valid email address

When the username field does not conform to this rule, the account is
not created and there will be a warning message:

::

    The field "User Name" must match the format "Username must be a valid email address".

In case you do not define ``gatein.validators.username.format.message``,
the value of ``gatein.validators.username.regexp`` will be used in the
warning message:

::

    The field "User Name" must match the format "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$".

.. _OutgoingMailService:

=====================
Outgoing mail service
=====================

eXo Platform includes an email sending service that needs to be configured
before it can function properly. This service, for instance, is used to
send notifications of connection requests.

The service requires an external SMTP server that allows accounts to
send email from applications. A suggestion is to use Google SMTP, as
detailed below.

In configuration, you need to provide your account and password, and
other information so that eXo Platform can connect to the SMTP server.

The configuration file
:ref:`exo.properties <Configuration.ConfigurationOverview>` is as 
follows:

Here is the default configuration (it will not work of course, you will
need to edit it):

::

    # Email display in "from" field of emails sent by eXo platform.
    exo.email.smtp.from=noreply@exoplatform.com
    # SMTP Server hostname.
    exo.email.smtp.host=localhost
    # SMTP Server port.
    exo.email.smtp.port=25
    # True to enable the secure (TLS) SMTP. See RFC 3207.
    exo.email.smtp.starttls.enable=false
    # True to enable the SMTP authentication.
    exo.email.smtp.auth=false
    # Username to send for authentication. Sample: exo.email.smtp.username=account@gmail.com
    exo.email.smtp.username=
    # Password to send for authentication.
    exo.email.smtp.password=
    # Specify the port to connect to when using the specified socket factory. Sample: exo.email.smtp.socketFactory.port=465
    exo.email.smtp.socketFactory.port=
    # This class will be used to create SMTP sockets. Sample: exo.email.smtp.socketFactory.class=javax.net.ssl.SSLSocketFactory
    exo.email.smtp.socketFactory.class=

Read the inline comments to understand each property. Here are some
remarks:

-  You need to provide SMTP server host/port, a username/password to be
   authenticated by that server. Others are optional.

-  Typically, administrators want to mask the *From* field in the system
   emails with something like *no-reply@exoplatform.com* so that the
   receivers recognize it is robotic. Many SMTP services allow you to
   set *From* field in outgoing emails to another email address than the
   authenticated account. That's why here you see the property
   ``exo.email.smtp.from``.

   If this parameter is not valid, the value of
   ``exo.email.smtp.username`` will be used instead.

-  If you want to use SMTP gateway over SSL, configure a certificate
   truststore containing your SMTP server's public certificate.
   Depending on the key sizes, you may then also need to install Java
   Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy
   Files for your Java Runtime Environment.

**Using Gmail as your SMTP server**

Here is the sample using *smtp.gmail.com* server:

::

    exo.email.smtp.from=noreply@exoplatform.com
    exo.email.smtp.host=smtp.gmail.com
    exo.email.smtp.port=465
    exo.email.smtp.starttls.enable=true
    exo.email.smtp.auth=true
    exo.email.smtp.username=exo.test100@gmail.com
    exo.email.smtp.password=***
    exo.email.smtp.socketFactory.port=465
    exo.email.smtp.socketFactory.class=javax.net.ssl.SSLSocketFactory

To make the configuration work, you need to:

-  Register a Google account that is *exo.test100@gmail.com* in the
   sample.

-  Enable POP and IMAP for that account. This can be done simply in your
   Gmail settings, see the screenshot below.

   |image0|

`Here <https://support.google.com/mail/answer/78775?hl=en>`__ is a
checklist provided by Google to help you solve problem if any.

Besides, for securing your account, Google may block access from an app
and send you an email to review the access. So in case the mail service
does not work, check your inbox and get the link to allow the app
access.

.. note:: In case of Gmail, ``exo.email.smtp.from`` must be a real account
          that you own. It does not need to be a Gmail account, as you can
          guess by the sample. You will configure your main account (that is
          ``exo.email.smtp.username``) to add this *from* email as another
          "send as".

To do so, follow `this guide of
Google <https://support.google.com/mail/answer/22370?hl=en>`__.

In case the *from* parameter is not valid, it does not fail the email
sending and the main account will be displayed instead.

.. _Configuration.ChangingSenderInformationOfEmailNotifications:

=================================================
Changing sender information of email notification
=================================================

In eXo Platform, email notifications are sent to users when significant
actions involving them occur (for example, new users, connection
request, space invitation, and more). These emails help them to track of
activities taking place in their Social Intranet.

As an administrator, you can configure information (name and email
address) of the sender, from which all notifications are sent, via two
ways:

-  In UI, click AdministrationPortalNotifications. Then edit Email
   Notification Sender section.

-  Via ``exo.properties`` file. See :ref:`Configuration overview <Configuration.ConfigurationOverview>`
   if you have not created this file yet.

   ::

       exo.notification.portalname=eXo
       exo.email.smtp.from=noreply@exoplatform.com

   In which:

   -  ``exo.notification.portalname``: Name of the sender. The default
      value is ``eXo``.

   -  ``exo.email.smtp.from``: Email address of the sender. The default
      value is *noreply@exoplatform.com*.
      
.. _EmailNotificationOfDocumentChanges:

=================================================
Subscribing to notifications of document changes
=================================================

The function Watch document in Sites Explorer allows users to receive
notification by email when a document is updated. The email address of
receivers is the email they declare in their profile. Administrators can
customize the sender, subject, mimetype and content of the notification.

.. note:: To get the email notification feature work, you first need to
          configure :ref:`Outgoing mail service <OutgoingMailService>` first.

To customize the email notification, simply add the following properties
in :ref:`exo.properties <Configuration.ConfigurationOverview>` file.

.. code:: java

    # Email content for WatchDocumentService
    exo.ecms.watchdocument.subject=Your watching document is changed
    exo.ecms.watchdocument.mimetype=text/html
    exo.ecms.watchdocument.content=Dear $user_name,<br><br>The document $doc_name ($doc_title) has changed.<br><br>Please go to <a href="$doc_url">$doc_title</a> to see this change.<br><br>

In which:

+-------------------------------+----------------------+----------------------+
| Property                      | Default value        | Description          |
+===============================+======================+======================+
| **exo.ecms.watchdocument.subj | Your watching        | The subject of the   |
| ect**                         | document is changed  | email notification.  |
+-------------------------------+----------------------+----------------------+
| **exo.ecms.watchdocument.mime | text/html            | The format of the    |
| type**                        |                      | email content. There |
|                               |                      | are two types:       |
|                               |                      | text/html and        |
|                               |                      | text/plain.          |
+-------------------------------+----------------------+----------------------+
| **exo.ecms.watchdocument.cont | Dear                 | The content of the   |
| ent**                         | $user\_name,<br><br> | email notification.  |
|                               | The                  |                      |
|                               | document $doc\_name  |                      |
|                               | ($doc\_title) has    |                      |
|                               | changed.<br><br>Plea |                      |
|                               | se                   |                      |
|                               | go to <a             |                      |
|                               | href="$doc\_url">$do |                      |
|                               | c\_title</a>         |                      |
|                               | to see this          |                      |
|                               | change.<br><br>      |                      |
+-------------------------------+----------------------+----------------------+

You can use four parameters below in the
``exo.ecms.watchdocument.content`` property:

-  **$user\_name**: The full name of the receiver.

-  **$doc\_name**: The name of the document.

-  **$doc\_title**: The title of the document.

-  **$doc\_url**: The link to view the document in Sites Explorer.

.. _Configuration.WebDAV:

=====================
WebDAV configuration
=====================

The embedded WebDAV server lets you configure some parameter via :ref:`exo.properties file <Configuration.ConfigurationOverview>`.

.. code:: java

    # JCR Webdav configuration
    exo.webdav.def-folder-node-type=nt:folder
	exo.webdav.def-file-node-type=nt:file
	exo.webdav.def-file-mimetype=application/octet-stream
	exo.webdav.update-policy=update
	exo.webdav.folder-icon-path=/eXoWCMResources/skin/images/file/nt-folder.png
	exo.webdav.cache-control=text/*:max-age=3600;image/*:max-age=1800;application/*:max-age=1800;*/*:no-cache

+-------------------------------------+--------------------------------------+
| ``exo.webdav.def-folder-node-type`` |Default (JCR) node type which is used |
|									  |for the creation of collections.      |
+-------------------------------------+--------------------------------------+
| ``exo.webdav.def-file-node-type``   |Default (JCR) node type which is used |
|									  |for the creation of files. 			 |
+-------------------------------------+--------------------------------------+
| ``exo.webdav.def-file-mimetype``    |A mime-type is detected by file 		 |
|									  |extension or HTTP request header. If  |
|									  |those are not found, this parameter   |
|									  |is used.								 |
+-------------------------------------+--------------------------------------+
| ``exo.webdav.update-policy``        | This defines the behavior when a PUT |
|									  |	command is executed against an       |
|									  |	existing resource:                   |
|									  |   - add: It tries to add new resource| 
|									  |	    with the same name.				 |
|									  |	  - create-version: It creates a new |
|									  |		version of the resource.         |
|									  |	  - Otherwise, the PUT command       |
|									  |     updates the resource and its last| 
|									  |     modification date.               |	 
+-------------------------------------+--------------------------------------+
| ``exo.webdav.folder-icon-path``     |The default path is an icon in        |
|                                     |eXoWCMResources webapp.               |
+-------------------------------------+--------------------------------------+
| ``exo.webdav.cache-control``        |This determines the live time of the  |
|                                     |caches for each type of responses. Use| 
|                                     |no-cache if you want a type to be not |
|                                     |cached.                               |
+-------------------------------------+--------------------------------------+

.. _Configuration.OpenInOfficeConfiguration:

============================
Open in Office configuration
============================

With the Open in Office feature, you are able to easily edit documents,
spreadsheets and presentations in the native applications installed on
your client, without keeping a local copy.

By default, there are 4 labels displayed for corresponding file types as
below:

+------------------------+---------------------------------------------------+
| Label                  | File types                                        |
+========================+===================================================+
| Open in Word           | docx, doc, docm, dot, dotm, dotx.                 |
+------------------------+---------------------------------------------------+
| Open in Excel          | xltx, xltm, xlt, xlsx, xlsm, xlsb, xls, xll,      |
|                        | xlam, xla.                                        |
+------------------------+---------------------------------------------------+
| Open in Powerpoint     | pptx, pptm, ppt, ppsx, ppsm, pps, ppam, ppa,      |
|                        | potx, potm, pot                                   |
+------------------------+---------------------------------------------------+
| Open on Desktop        | Non-MS Office files, such as Open Document text   |
|                        | files (odp, ods, odt, and more) or archive files  |
|                        | (zip, rar, war, and more).                        |
+------------------------+---------------------------------------------------+

As an administrator, you can easily configure the file types associated
with the application named as in "Open in Word", and set a new label via
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

::

    exo.remote-edit.$CATEGORY=$SET_OF_FILETYPES
    exo.remove-edit.$CATEGORY.label=$LABEL

-  Replace *$CATEGORY* with any text as you want, but it should
   represent the application in correspondence to the file types defined
   in *$SET\_OF\_FILETYPES*.

-  Replace *$LABEL* with the application label that will be displayed in
   the UI, for example "Word" or "MS Word".

Here are some examples:

-  Changing the default labels from "Open in Word", "Open in Excel", and
   "Open in Powerpoint" into "Open in MS Word", "Open in MS Excel" and
   "Open in MS Powerpoint":

   ::

       #MS Word
       exo.remote-edit.word=docx,doc,docm,dot,dotm,dotx
       exo.remote-edit.word.label=MS Word

       #MS Excel
       exo.remote-edit.excel=xltx,xltm,xlt,xlsx,xlsm,xlsb,xls,xll,xlam,xla
       exo.remote-edit.excel.label=MS Excel

       #MS Powerpoint
       exo.remote-edit.powerpoint=pptx,pptm,ppt,ppsx,ppsm,pps,ppam,ppa,potx,potm,pot
       exo.remote-edit.powerpoint.label=MS Powerpoint

   |image1|

-  Adding a new label "Open in LibreOffice" for some Open Document Text
   file types:

   ::

       exo.remote-edit.libreoffice=odp,ods,odt
       exo.remote-edit.libreoffice.label=LibreOffice

   |image2|

-  Setting a new label "Open in Writer" for some both Word and Open
   Document Text file types:

   ::

       exo.remote-edit.writer=docx,doc,odm,odt
       exo.remote-edit.writer.label=Writer

   |image3|
   
.. _JODConverterConf:

===========================
JODConverter configuration
===========================

In Sites Explorer or Activity Stream, users can preview documents of
various types, without downloading it. To support this feature, eXo Platform
uses the JODConverter service that requires OpenOffice or LibreOffice to
be installed locally (in the same machine with the eXo Platform server).

**Installing OpenOffice/LibreOffice**

Follow `OpenOffice
guideline <http://www.openoffice.org/installation/>`__ or `LibreOffice
guideline <http://www.libreoffice.org/get-help/installation/>`__ to
install.

Note that those softwares might be installed in some Linux distributions
by the OS already.

.. note:: JODConverter is already built in eXo Platform, so you do not need to install it.

**Sigar Framework**

In Windows, `Sigar <http://www.hyperic.com/products/sigar>`__ is
recommended. JODConverter uses Sigar - if available - to manage Office
processes. Without Sigar, there is possibility that Office processes are
not stopped successfully when you shut down eXo Platform, and it causes
problem in your next start.

So `download <http://sourceforge.net/projects/sigar/files/>`__ the
following files and install them to the lib folder
(``$PLATFORM_TOMCAT_HOME/lib`` in Tomcat,
``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear/lib`` in
JBoss:

-  ``sigar.jar``

-  ``sigar-x86-winnt.dll`` for Windows 32.

-  ``sigar-amd64-winnt.dll`` for Windows 64.

**JODConverter version**

eXo Platform uses `JODConverter
v3.0 <https://code.google.com/p/jodconverter/wiki/WhatsNewInVersion3>`__
that enhances processing different file types much.

**Activating and deactivating**

JODConverter is activated by default. You can deactivate it (and
consequently not use the preview feature) by setting
``exo.jodconverter.enable=false`` in
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

**Configurations**

.. note:: In most cases, you do not need to configure JODConverter because it
          can work with default configurations. However, if you are using
		  OpenOffice 4 (or later), or have installed the Office server
		  untypically, you will need to specify
		  **exo.jodconverter.officehome** by yourself. See :ref:`Specifying exo.jodconverter.officehome <JODConverter.Customize_OfficeHome>`.

JODConverter configurations can be edited in the ``exo.properties``
file. See :ref:`Configuration overview <Configuration.ConfigurationOverview>` if the
file has not been created yet.

::

    # JOD Converter
    exo.jodconverter.enable=true
    exo.jodconverter.portnumbers=2002
    exo.jodconverter.officehome=
    exo.jodconverter.taskqueuetimeout=30000
    exo.jodconverter.taskexecutiontimeout=120000
    exo.jodconverter.maxtasksperprocess=200
    exo.jodconverter.retrytimeout=120000

+-----------------------------------+-------------+-----------------------------+
| Key                               | Default     | Description                 |
|                                   | value       |                             |
+===================================+=============+=============================+
| ``exo.jodconverter.portnumbers``  | 2002        | List of ports, separated by |
|                                   |             | commas - those used by each |
|                                   |             | JODConverter processing     |
|                                   |             | thread. The number of       |
|                                   |             | office instances is equal   |
|                                   |             | to the number of ports.     |
+-----------------------------------+-------------+-----------------------------+
| ``exo.jodconverter.officehome``   | See         | The absolute path to Office |
|                                   | `here <#Off | installed folder.           |
|                                   | iceHome>`__ |                             |
+-----------------------------------+-------------+-----------------------------+
| ``exo.jodconverter.taskqueuetimeo | 30000       | The maximum living time of  |
| ut``                              |             | a task in the conversation  |
|                                   |             | queue. The task will be     |
|                                   |             | removed from the queue if   |
|                                   |             | the waiting time is longer  |
|                                   |             | than **taskQueueTimeout**.  |
+-----------------------------------+-------------+-----------------------------+
| ``exo.jodconverter.taskexecutiont | 120000      | The maximum time to process |
| imeout``                          |             | a task. If the processing   |
|                                   |             | time of a task is longer    |
|                                   |             | than                        |
|                                   |             | **taskExecutionTimeout**,   |
|                                   |             | this task will be aborted   |
|                                   |             | and the next task is        |
|                                   |             | processed.                  |
+-----------------------------------+-------------+-----------------------------+
| ``exo.jodconverter.maxtasksperpro | 200         | The maximum number of tasks |
| cess``                            |             | are processed.              |
+-----------------------------------+-------------+-----------------------------+
| ``exo.jodconverter.retrytimeout`` | 120000      | The interval time to        |
|                                   |             | restart the Office services |
|                                   |             | after an unexpected crash.  |
+-----------------------------------+-------------+-----------------------------+

.. _JODConverter.Customize_OfficeHome:

**Specifying exo.jodconverter.officehome**

Again, the default configuration should work in many cases. Most likely
you need to change it for OpenOffice 4.

.. note:: Note that ``EXO_JODCONVERTER_OFFICEHOME`` variable is not used as of
          4.1.0. The customize script does not overlap JODConverter
          configuration anymore, so only use ``exo.properties`` for it.

Here are some examples of the property:

-  In Windows:
   ``exo.jodconverter.officehome=C:\\Program Files (x86)\\OpenOffice 4``


.. note:: Remember to use double slash (**\\\\**) for Windows.

-  In OS X:
   ``exo.jodconverter.officehome=/Applications/OpenOffice.app/Contents``
   (OpenOffice 4) or
   ``exo.jodconverter.officehome=/Applications/LibreOffice.app/Contents``
   (LibreOffice).

-  In Linux: ``exo.jodconverter.officehome=/opt/openoffice4``.

   In Linux, if you do not know the path, you might check the
   followings:

   -  ``/opt/openoffice.org3``

   -  ``/opt/libreoffice``

   -  ``/usr/lib/openoffice``

   -  ``/usr/lib/libreoffice``

**Services details**

To support as many as possible document types, it is recommended you
install all available services of Open Office. However, if you do not
want to do so, refer to the following table to know which packages are
needed for which services.

+-------------+---------------+-----------------------+-----------------------+
| File        | Service names | Open Office           | Libre Office          |
| extensions  |               | installation package  | installation package  |
+=============+===============+=======================+=======================+
| ``doc``     | writer        | openoffice.org-writer | libreoffice-writer    |
|             |               |                       |                       |
| ``docx``    |               |                       |                       |
|             |               |                       |                       |
| ``odt``     |               |                       |                       |
+-------------+---------------+-----------------------+-----------------------+
| ``odf``     | math          | openoffice.org-math   | libreoffice-math      |
+-------------+---------------+-----------------------+-----------------------+
| ``odg``     | draw          | openoffice.org-draw   | libreoffice-draw      |
+-------------+---------------+-----------------------+-----------------------+
| ``odp``     | impress       | openoffice.org-impres | libreoffice-impress   |
|             |               | s                     |                       |
| ``ppt``     |               |                       |                       |
|             |               |                       |                       |
| ``pptx``    |               |                       |                       |
+-------------+---------------+-----------------------+-----------------------+
| ``ods``     | calc          | openoffice.org-calc   | libreoffice-calc      |
|             |               |                       |                       |
| ``ots``     |               |                       |                       |
|             |               |                       |                       |
| ``xls``     |               |                       |                       |
|             |               |                       |                       |
| ``xlsx``    |               |                       |                       |
|             |               |                       |                       |
| ``xlt``     |               |                       |                       |
+-------------+---------------+-----------------------+-----------------------+

.. _Configuration.FileSizeLimit:

===============================
Limiting size of uploaded files
===============================

**In Documents application**

When you upload a file in Documents or Sites Explorer, its size is
limited to 200 MB by default.

To change this limit, edit the ``exo.ecms.connector.drives.uploadLimit``
property in
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

For example:

::

    exo.ecms.connector.drives.uploadLimit=300

.. note:: As of 4.1, this configuration also takes effect on files uploaded
          from Activity Stream (using the Share function).

**In activities posts and comments**

In a message post or a comment, it is possible to attach an image
through the CKEditor. By default the image size is limited to 200 MB.

You can change this limit by editing the value of the
``exo.social.activity.uploadLimit`` property in
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

For example:

::

    exo.social.activity.uploadLimit=200

**In Wiki application**

Same as for the previous applications, files upload size in Wiki is
limited, by default to 200 MB which could be redefined through the
property ``exo.wiki.attachment.uploadLimit`` in
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

For example:

::

    exo.wiki.attachment.uploadLimit=200

.. note:: The size is in MB for all the three properties.

.. warning:: If you are using eXo Platform in JBoss application server, note that in
			 addition to the parameters described above aiming to customize files
			 size, you should configure the value of the parameter
			 ``max-post-size`` in ``standalone/configuration/standalone-exo.xml``
			 which is set by default to 200 MB in eXo Platform package.

			 .. code:: xml

					<http-listener name="default" socket-binding="http" redirect-socket="https" max-post-size="209715200"/>

.. _Configuration.UploadHandler:

============================================
Limiting public access to the upload service
============================================

By default, unauthenticated users are not allowed to upload resources to
the server through the Upload component on UI or by accessing directly
the "/upload" handler, because this may cause some problems of server
disk space. However, you can definitely configure the UploadHandler to
allow this.

To change this restriction, edit the
``exo.portal.uploadhandler.public-restriction`` property in the
:ref:`exo.properties <Configuration.ConfigurationOverview>`file as follows:

::

    exo.portal.uploadhandler.public-restriction=false

.. _Configuration.CustomizeSiteData:

=====================
Customizing site data
=====================

eXo Platform provides 2 built-in sites: Intranet and ACME. In case you want
to customize data of these sites, for example, modifying or overwriting
the existing data, use the externalized parameters in
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

**Intranet**

-  ``exo.intranet.portalConfig.metadata.override``: Allow (*true*) or
   not allow (*false*) overriding the Intranet data. See :ref:`Overriding Portal Data <#sect-Reference_Guide-Data_Import_Strategy-Overriding_Portal_Data>`
   for more details.

-  ``exo.intranet.portalConfig.metadata.importmode``: Customize data
   import strategy (*CONSERVE*, *INSERT*, *MERGE*, or *OVERWRITE*). See
   :ref:`here <#sect-Reference_Guide-Data_Import_Strategy-Import_Strategy>`
   for more details about these modes.

.. _Configuration.AutocreatingTaxonomyTree:

================================================
Enabling/Disabling auto-creating a taxonomy tree
================================================

eXo Platform allows you to enable/disable auto-creating a taxonomy tree
during a new site creation by adding the
``ecms.taxonomy.autoCreateWithNewSite`` parameter to
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

.. code:: java

     # Configuration for a taxonomy tree
     ecms.taxonomy.autoCreateWithNewSite=false

By default, the parameter is set to ``false``, it means the creation of
a taxonomy tree is disabled when you create a new site.

To enable the function, simply set the parameter to ``true``.

.. _Configuration.ActivityType:

====================================
Enabling/Disabling any activity type
====================================

eXo Platform allows you to enable/disable any activity type. Disabling an
activity type means that this kind of activities will not be posted in
the streams.

To enable/disable an activity type, you need to add
``exo.activity-type.activity-type-key.enabled`` parameter to
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

.. code:: java

     # Configuration for activity type enabling/disabling
     exo.activity-type.activity-type-key=false

By default, the parameter is set to ``true``, it means the activity of
type `` activity-type-key`` is enabled i.e it posts in the streams.

To disable the activity type, simply set the parameter to ``false``.

.. note:: In the ``exo.activity-type.activity-type-key.enabled``,
		  activity-type-key could take many values depending on the activity
		  type:

			-  DEFAULT\_ACTIVITY
			-  SPACE\_ACTIVITY
			-  USER\_ACTIVITIES\_FOR\_SPACE
			-  exosocial\\:relationship
			-  LINK\_ACTIVITY
			-  sharecontents\\:spaces
			-  USER\_PROFILE\_ACTIVITY
			-  DOC\_ACTIVITY
			-  files\\:spaces
			-  sharefiles\\:spaces
			-  contents\\:spaces
			-  cs-calendar\\:spaces
			-  TaskAdded
			-  ks-forum\\:spaces
			-  ks-answer\\:spaces
			-  ks-poll\\:spaces
			-  ks-wiki\\:spaces
			-  USER\_ACTIVITIES\_FOR\_RELATIONSHIP

.. _SpacesAdministration:

=====================================
Configure spaces administration group
=====================================

By default, only the super user is able to manage all the spaces of the
platform:

-  Create pages on spaces.

-  Add/delete/promote members.

-  Add/modify/delete space data (Wiki pages, forum Posts, activities,
   tasks...).

With eXo Platform 5.0 it is possible to define a group of users to
manage spaces. This group of users is able to edit and delete all kind
of spaces: visible and hidden.

The group of spaces administrators could be defined by adding this
property to
:ref:`exo.properties <Configuration.ConfigurationOverview>` file:

-  ``exo.social.spaces.administrators``

.. note:: -  You should specify the membership type (\*, member, manager...)
              in the value of the property.

			 -  It is possible to specify a list of groups separated by commas **,**.

In this example, all users of the two groups /platform/administrators
and /developers are allowed to manage spaces:
exo.social.spaces.administrators=\*:/platform/administrators,\*:/developers

.. _Configuration.Logs:

=====
Logs
=====

The logs of eXo Platform are controlled by the `Java Logging
API <http://docs.oracle.com/javase/7/docs/technotes/guides/logging/index.html>`__.

By default, the logs are configured to:

-  log errors and warnings on the console.

-  log ``$PLATFORM_TOMCAT_HOME/logs/platform.log`` (Tomcat), or
   ``$PLATFORM_JBOSS_HOME/standalone/log/server.log`` (JBoss).

The logs are configured via the file:

-  ``$PLATFORM_TOMCAT_HOME/conf/logging.properties`` (Tomcat). Please
   refer to `Tomcat's Logging
   Documentation <http://tomcat.apache.org/tomcat-7.0-doc/logging.html>`__
   for more information on how to adjust this file to your needs.

-  ``$PLATFORM_JBOSS_HOME/standalone/configuration/logging.properties``
   (JBoss).

.. _Configuration.JCR:

=================
JCR Configuration
=================

Because JCR Configuration is a very advanced topic, it is recommended
you:

-  Learn about `eXo JCR
   configuration <../../reference/html/JCRReferenceGuide.html>`__.

-  Use default values, change them only if you know what you are doing.

-  Understand how to configure datasource in the
   :ref:`Database <Database>` chapter.

The configurations introduced here are a subset of JCR configurations.
There are many JCR configurations which are packed in ``.war`` files, so
you have to unpack to edit them. To avoid unpacking them, the subset is
externalized to be configured easily in
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

Here is the list of externalized configurations with their short
descriptions.

-  Repository:

   ::

       exo.jcr.repository.default=repository
       exo.jcr.workspace.default=collaboration
       exo.jcr.workspace.system=system

   In which, "repository", "collaboration" and "system" are names of
   default repository, default workspace and system workspace
   respectively. Refer to :ref:`Repository
   Configuration <#JCR.eXoJCRconfiguration.RepositoryConfiguration>`
   for details.

-  Datasource:

   ::

       exo.jcr.datasource.name=java:/comp/env/exo-jcr          
       exo.jcr.datasource.dialect=auto
       exo.jcr.db-structure-type=single

   These configurations are applied to all workspaces. Refer to
   :ref:`Workspace <#JCR.eXoJCRconfiguration.WorkspaceConfiguration>` for
   details.

-  Jgroups:

   ::

       exo.jcr.cluster.jgroups.config-url=file:${exo.jcr.cluster.jgroups.config}

   This externalizes the **jgroups-configuration** parameter of all
   workspace caches, query-handlers and lock-managers. Refer to
   :ref:`Workspace <#JCR.eXoJCRconfiguration.WorkspaceConfiguration>` for
   details.

-  Value Storage:

   ::

       exo.jcr.storage.enabled=true

   This externalizes the **enabled** property of file system
   value-storage (that is configured at workspace level). The **true**
   value (default) means all binary values are stored in file system.
   The **false** value means all binary values are stored in the
   database. Refer to :ref:`Value Storage plugin for data container <#JCR.ConfigurationPersister.ValueStoragePlugin>` 
   for details.
   
.. _Configuration.CacheConfiguration:

=====================
Cache configuration
=====================

To retrieve and display content faster, eXo Platform uses some cache
services. See `Basic concepts <#Kernel.Cache.Basic_concepts>`__ for
explanation of properties used for eXo Platform caches.

.. note:: More details about the eXo Platform caches can be found in:

		-  :ref:`eXo Cache <#Kernel.Cache>` in Foundation Reference Guide.

		-  :ref:`Cache Levels <MonitoringGadget.CacheLevels>` in User Guide.

		-  :ref:`Cache management view <Management.ManagementViews.CacheManagementView>`.

.. _PortalCaches:

Portal caches
~~~~~~~~~~~~~~~

eXo Platform provides a list of Portal caches, including:

-  :ref:`MOPCache <Portal.MOPCache>`

-  :ref:`NavigationCache <Portal.NavigationCache>`

-  :ref:`DescriptionCache <Portal.DescriptionCache>`

-  :ref:`PageCache <Portal.PageCache>`

-  :ref:`TemplateCache <Portal.TemplateCache>`

-  :ref:`ResourceBundleCache <Portal.ResourceBundleCache>`

These Portal caches can be overridden in
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

::

    # Portal Cache Configuration - MOP session Manager
    #  - Standalone (live time in seconds)
    exo.cache.portal.mop.maxsize=5000
    exo.cache.portal.mop.livetime=600
    #  - Cluster (expiration in milliseconds)
    exo.cache.portal.mop.maxnodes=5000
    exo.cache.portal.mop.expiration=600000

    # Portal Cache Configuration - Navigation Service
    #  - Standalone (live time in seconds)
    exo.cache.portal.navigation.maxsize=5000
    exo.cache.portal.navigation.livetime=600
    #  - Cluster (expiration in milliseconds)
    exo.cache.portal.navigation.maxnodes=5000
    exo.cache.portal.navigation.expiration=600000

    # Portal Cache Configuration - Description Service
    #  - Standalone (live time in seconds)
    exo.cache.portal.description.maxsize=5000
    exo.cache.portal.description.livetime=600
    #  - Cluster (expiration in milliseconds)
    exo.cache.portal.description.maxnodes=5000
    exo.cache.portal.description.expiration=600000

    # Portal Cache Configuration - Page Service
    #  - Standalone (live time in seconds)
    exo.cache.portal.page.maxsize=5000
    exo.cache.portal.page.livetime=600
    #  - Cluster (expiration in milliseconds)
    exo.cache.portal.page.maxnodes=5000
    exo.cache.portal.page.expiration=600000

    # Portal Cache Configuration - Template Service
    #  - Standalone (live time in seconds)
    exo.cache.portal.TemplateService.capacity=3000
    exo.cache.portal.TemplateService.liveTime=3600

    # Portal Cache Configuration - ResourceBundleData
    #  - Standalone (live time in seconds)
    exo.cache.portal.ResourceBundleData.capacity=3000
    exo.cache.portal.ResourceBundleData.liveTime=-1

The specific configuration of Portal caches can be found in the files:

**i.** For **MOPSessionManager**, **NavigationService**,
**DescriptionService**, **PageService**:

-  ``$PLATFORM_TOMCAT_HOME/webapps/portal.war!/WEB-INF/conf/portal/portal-configuration.xml``
   (Tomcat).

-  ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear!/exo.portal.web.portal.war!/WEB-INF/conf/portal/portal-configuration.xml``
   (JBoss).

**ii.** For **TemplateService** and **ResourceBundle**:

-  ``$PLATFORM_TOMCAT_HOME/webapps/platform-extension.war!/WEB-INF/conf/platform/cache-configuration.xml``
   (Tomcat).

-  ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear!/platform-extension-webapp.war!/WEB-INF/conf/platform/cache-configuration.xml``
   (JBoss).

.. _Portal.MOPCache:

MOPCache
----------

The **MOPCache** caches all model objects of the portal (MOP), such as
sites, pages and preferences. When the cached MOP objects are called,
they will be directly retrieved from cache rather than the database.

-  The cached MOP object is invalidated when it is modified or removed.

-  The **MOPCache** size equals to the number of MOP objects in cache.

-  The maximum heap size cannot be calculated exactly because the
   **MOPCache** caches many types of MOP objects that are different in
   size.

.. _Portal.NavigationCache:

NavigationCache
----------------

The **NavigationCache** caches data of navigation. When the cached
navigation is accessed, it will be retrieved from cache rather than the
database.

-  The cached navigation is invalidated when it is modified or
   destroyed.

-  The **NavigationCache** size equals to the number of navigations in
   cache.

-  The size of each cached navigation is dependent on length of its
   string field. The navigation size is often less than 250 bytes, so
   the maximum heap size equals to the cache size multiplied by 250
   bytes.
   
.. _Portal.DescriptionCache:   

DescriptionCache
-----------------

The **DescriptionCache** caches a pair of name-description. Accordingly,
the cached pair of name-description will be taken directly from cache
rather than the database.

-  The cached pair of name-description is invalidated when the data of
   this name-description pair is modified or destroyed.

-  The **DescriptionCache** size equals to the number of
   name-description pairs in cache.

-  The maximum heap size is dependent on length of name and description
   of each pair stored in cache. The size of a name-description pair is
   often less than 200 bytes, so the maximum heap size equals to the
   cache size multiplied by 200 bytes.

.. _Portal.PageCache:

PageCache
----------

The **PageCache** caches data of a page when one user visits it for the
first time. When the cached page is visited, it will be loaded from
cache rather than the database.

-  The cached page is invalidated when the page is destroyed. When the
   page is modified, its new data will be updated into cache.

-  The **PageCache** size equals to the number of pages in cache.

-  The maximum heap size is dependent on some dynamic attributes of a
   page, for example, site name that contains the page, length of
   access/edit permission, display name of page.

.. _Portal.TemplateCache:

TemplateCache
--------------

The **TemplateCache** caches all Groovy templates of the portal by its
template path and ResourceResolver. When the cached template is called,
it will be loaded from cache rather than the database or the file
system.

-  The cached Groovy template is invalidated when it is removed or
   modified.

-  The **TemplateCache** size equals to the number of Groovy templates
   in cache.

-  The maximum heap size is dependent on length of Groovy template. The
   size of a Groovy template is often less than 100KB, so the maximum
   heap size equals to the cache size multiplied by 100KB.

.. _Portal.ResourceBundleCache:

ResourceBundleCache
---------------------

The **ResourceBundleCache** caches all resource bundles by name and
locale. When the cached resource bundle is called, it will be directly
loaded from cache rather than the database or the file system.

-  The cached resource bundle is invalidated when it is removed or
   modified.

-  The **ResourceBundleCache** size equals to the number of resource
   bundles in cache.

-  The maximum heap size is dependent on the size of resource bundle.
   The size of a resource bundle is often less than 100KB, so the
   maximum heap size equals to the cache size multiplied by 100KB.

.. _CommonsCaches:

Commons caches
~~~~~~~~~~~~~~~~

Currently, eXo Platform provides 1 Common cache named **SettingCache** that
is used for all modules in eXo Platform.

This cache is handled by **SettingService** that can be overridden in
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

.. code:: xml

    #== COMMONS Caches Configuration == #

    # Commons Cache Configuration - Settings Service
    #  - Standalone (live time in seconds)
    exo.cache.commons.SettingService.Capacity=2000
    exo.cache.commons.SettingService.TimeToLive=60000
    #  - Cluster (expiration in milliseconds)
    exo.cache.commons.SettingService.MaxNodes=2000
    exo.cache.commons.SettingService.ExpirationTimeout=6000000

The specific configuration of **SettingCache** can be found in the file:

-  ``$PLATFORM_TOMCAT_HOME/lib/commons-component-common-X.Y.Z.jar!/conf/portal/configuration.xml``
   (Tomcat).

-  ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear!/lib/commons-component-common.jar!/conf/portal/configuration.xml``
   (JBoss).
   
.. _SettingCache:   

SettingCache
--------------

The **SettingCache** caches the setting value for all contexts and all
scopes. When any users ask for the cached setting value, it will be
retrieved from cache rather than the database.

-  The **SettingCache** is never invalidated.

-  The **SettingCache** size equals to the number of setting values in
   cache.

-  Each entry of cache is a pair and key is a composite key(Context
   context, Scope scope, String key). The value is String, Double, Long
   or Boolean. In reality, the size of these values should be less than
   100 bytes, so the maximum heap size equals to the cache size
   multiplied by 400 bytes.

.. _ECMSCaches:

ECMS caches
~~~~~~~~~~~~

eXo Platform provides a list of ECMS caches, including:

-  :ref:`Drive Cache <ECMS.WCMDriveCache>`

-  :ref:`Script Cache <ECMS.ScriptCache>`

-  :ref:`Fragment Cache <ECMS.FragmentCache>`

-  :ref:`Template Cache <ECMS.TemplateCache>`

-  :ref:`Initial Web Content Cache <ECMS.InitialWebContentCache>`

-  :ref:`PDF Viewer Cache <ECMS.PDFCache>`

-  :ref:`SEO Cache <ECMS.SeoCache>`

Here are the configurations in :ref:`exo.properties <Configuration.ConfigurationOverview>`
file:

.. code:: xml

    # == ECMS Caches Configuration == #

    # ECMS Cache Configuration - Query Service
    #  - Standalone (live time in seconds)
    #  - Cluster (expiration in milliseconds)
    #exo.cache.ecms.queryservice.maxnodes=5000
    #exo.cache.ecms.queryservice.expirationtimeout=600000

    # ECMS Cache Configuration - Drive Service
    #  - Standalone (live time in seconds)
    #exo.cache.ecms.managedrive.capacity=5000
    #exo.cache.ecms.managedrive.timetolive=600
    #  - Cluster (expiration in milliseconds)
    #exo.cache.ecms.managedrive.maxnodes=5000
    #exo.cache.ecms.managedrive.expirationtimeout=600000

    # ECMS Cache Configuration - Script Service
    #  - Standalone (live time in seconds)
    #exo.cache.ecms.scriptservice.capacity=300
    #exo.cache.ecms.scriptservice.timetolive=86400

    # ECMS Cache Configuration - Templates Service
    #  - Standalone (time to live in seconds)
    #exo.cache.ecms.templateservice.capacity=3000
    #exo.cache.ecms.templateservice.timetolive=86400
    #  - Cluster (expiration in milliseconds)
    #exo.cache.ecms.templateservice.maxnodes=300
    #exo.cache.ecms.templateservice.expirationtimeout=86400000

    # ECMS Cache Configuration - Initial Webcontent
    #  - Standalone (time to live in seconds)
    #exo.cache.ecms.webcontent.initialwebcontentplugin.capacity=300
    #exo.cache.ecms.webcontent.initialwebcontentplugin.timetolive=86400
    #  - Cluster (expiration in milliseconds)
    #exo.cache.ecms.webcontent.initialwebcontentplugin.maxnodes=300
    #exo.cache.ecms.webcontent.initialwebcontentplugin.expirationtimeout=86400000

    # ECMS Cache Configuration - Fragment Cache Service (Markup Cache)
    #  - Standalone (time to live in seconds)
    #exo.cache.ecms.fragmentcacheservice.capacity=10000
    #exo.cache.ecms.fragmentcacheservice.timetolive=30
    #  - Cluster (expiration in milliseconds)
    #exo.cache.ecms.fragmentcacheservice.maxnodes=10000
    #exo.cache.ecms.fragmentcacheservice.expirationtimeout=30000
    #
    # ECMS Cache Configuration - PDF Viewer Service
    #  - Standalone (time to live in seconds)
    #exo.cache.ecms.pdfviewer.capacity=1000
    #exo.cache.ecms.pdfviewer.timetolive=3600
    #  - Cluster (expiration in milliseconds)
    #exo.cache.ecms.pdfviewer.maxnodes=1000
    #exo.cache.ecms.pdfviewer.expirationtimeout=3600000

    # ECMS Cache Configuration - SEO Cache
    #  - Standalone (time to live in seconds)
    #exo.cache.ecms.seoservice.capacity=1000
    #exo.cache.ecms.seoservice.timetolive=3600
    #  - Cluster (expirationtimeout in milliseconds)
    # exo.cache.ecms.seoservice.maxnodes=1000
    # exo.cache.ecms.seoservice.expirationtimeout=3600000

    # ECMS Cache Configuration - Javascript Cache
    #  - Standalone (time to live in seconds)
    #exo.cache.ecms.javascript.maxSize=1000
    #exo.cache.ecms.javascript.liveTime=3600

.. note: The properties are different between Cluster mode and Standalone
		 (single server) mode. Please read the inline comments when you
		 configure them.

These properties are exposed via ``exo.properties`` for administrators.
The full configuration can be found in XML configuration files. For SEO
Cache, the file is:

-  ``$PLATFORM_TOMCAT_HOME/webapps/ecm-wcm-extension.war!/WEB-INF/conf/wcm-extension/wcm/seo-configuration.xml``
   (Tomcat).

-  ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear!/ecms-packaging-wcm-webapp.war!/WEB-INF/conf/wcm-extension/wcm/seo-configuration.xml`` (JBoss).

For the other caches, the file is:

-  ``$PLATFORM_TOMCAT_HOME/webapps/ecm-wcm-core.war!/WEB-INF/conf/wcm-core/core-services-configuration.xml``
   (Tomcat).

-  ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear!/ecms-core-webapp.war!/WEB-INF/conf/wcm-core/core-services-configuration.xml`` (JBoss).

.. _ECMS.WCMDriveCache

Drive Cache
------------

The **managedrive** caches visited drives of Sites Explorer by their
names. When any users visit the cached drives, these drives will be
directly retrieved from cache rather than the database.

-  The cache is invalidated when the drive is removed or added.

-  The cache size equals to the number of drives in cache.

-  The maximum heap size consumed by the cache are calculated as below:

   -  Each item of drive cache contains: name, workspace, homePath,
      permission, view, icon, allowcreatefolders, viewReferences,
      viewNondocument, viewSidebar, showHiddenNode.

   -  The first 7 elements are String and their length often should not
      be greater than 1000 bytes.

   -  The last 4 elements are Boolean and the size of each element is 1
      byte.

   -  Thus, the maximum heap size equals to the cache size multiplied by
      7004 bytes.

.. _ECMS.ScriptCache:

Script Cache
--------------

The **scriptservice** caches the ECMS Script objects. When there are any
requests for cached scripts, these scripts are retrieved from cache
rather than the database.

-  The **scriptservice** cache is never invalidated.

-  The cache size equals to the number of scripts in cache.

-  The maximum heap size equals to the cache size multiplied by size of
   the script object.

.. _ECMS.TemplateCache:

Template Cache
---------------

The **templateservice** caches the list of document nodetypes. When any
users call for the cached document nodetypes, data will be retrieved
from cache rather than the database.

-  The **templateservice** cache is invalidated when the document
   template is updated.

-  The cache size is 1.

-  The heap size consumed by the cache is unlimited. However the cache
   contains node names only, so it consumes less than 10KB.

.. _ECMS.InitialWebContentCache:

Initial Web Content Cache
---------------------------

The **webcontent.initialwebcontentplugin** caches the artifacts (nodes)
that are used to initialize a new portal. When a cached artifact is
called, it will be read and returned from cache rather than the
database.

-  The cache is never invalidated because the initial artifact is never
   changed.

-  The cache size equals to the number of the cached artifacts.

-  The maximum heap size equals to the total size of all artifacts.

.. _ECMS.FragmentCache:

Fragment Cache
----------------

The **fragmentcacheservice** caches content of SCVs and CLVs. When any
users call for these cached portlets, these portlets will be retrieved
from cache rather than the database.

-  The **fragmentcacheservice** is invalidated when SCVs and CLVs are
   switched from the edit to the live mode.

-  The cache size equals to the number of SCVs/CLVs in cache.

-  The maximum heap size consumed by the cache: total size of cached
   SCVs/CLVs (the SCVs/CLVs size is unlimited).

.. _ECMS.PDFCache:

PDF Viewer Cache
------------------

The **pdfviewer** caches the path to a specific page of a specific PDF
file. In eXo Platform, when a user views an Office document or PDF file, the
viewed page is extracted into a PDF file, and REST is used to return
that file content to client browser.

-  The **pdfviewer** cache is never invalidated.

-  The cache size equals to the number of pages viewed by users.

-  The maximum heap size equals to the cache size multiplied by 200
   bytes (supposing that the longest file path is 200 characters).

.. _ECMS.SeoCache:

SEO Cache
-----------

The **seoservice** caches the SEO metadata of all pages in all sites.
When the SEO metadata of these cached pages are called, the created
pages will be got based on the page path from cache rather than the
database.

-  The **seoservice** cache is never invalidated.

-  The cache size equals to the number of pages to which the SEO
   metadata is added.

-  The maximum heap size is calculated as follows:

   -  Each Metadata object contains 8 String objects: uri, rbcontent,
      keywords, description, title, frequency, fullStatus,
      pageReference. Each object is usually less than 100 characters.

   -  5 bytes (a float and a boolean) for priority and sitemap.

   -  Thus, the total heap size equals to the cache size multiplied by
      805 bytes.

.. _SocialCaches:

Social caches
~~~~~~~~~~~~~~

eXo Platform provides 4 Social caches, including:

-  :ref:`IdentityCache <Social.identityCache>`

-  :ref:`RelationshipCache <Social.relationshipCache>`

-  :ref:`SpaceCache <Social.spaceCache>`

-  :ref:`ActivityCache <Social.activityCache>`

You can change values of these Social caches in
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

In particular:

-  **IdentityCache** that is handled by CachedIdentityStorage.

   .. code:: xml

       # Social Cache Configuration - Identity
       #  - Standalone (time to live in seconds)
       exo.cache.social.IdentityCache.Capacity=500
       exo.cache.social.IdentityCache.TimeToLive=-1

       # Social Cache Configuration - Identity Index
       #  - Standalone (time to live in seconds)
       exo.cache.social.IdentityIndexCache.Capacity=500
       exo.cache.social.IdentityIndexCache.TimeToLive=-1

       # Social Cache Configuration - Profile
       #  - Standalone (time to live in seconds)
       exo.cache.social.ProfileCache.Capacity=500
       exo.cache.social.ProfileCache.TimeToLive=-1

       # Social Cache Configuration - Identities
       #  - Standalone (time to live in seconds)
       exo.cache.social.IdentitiesCache.Capacity=2000
       exo.cache.social.IdentitiesCache.TimeToLive=86400

       # Social Cache Configuration - Identities Count
       #  - Standalone (time to live in seconds)
       exo.cache.social.IdentitiesCountCache.Capacity=2000
       exo.cache.social.IdentitiesCountCache.TimeToLive=86400

-  **RelationshipCache** that is handled by CachedRelationshipStorage.

   .. code:: xml

       # Social Cache Configuration - Relationship
       #  - Standalone (time to live in seconds)
       exo.cache.social.RelationshipCache.Capacity=20000
       exo.cache.social.RelationshipCache.TimeToLive=-1

       # Social Cache Configuration - Relationship From Identity
       #  - Standalone (time to live in seconds)
       exo.cache.social.RelationshipFromIdentityCache.Capacity=20000
       exo.cache.social.RelationshipFromIdentityCache.TimeToLive=-1

       # Social Cache Configuration - Relationships Count
       #  - Standalone (time to live in seconds)
       exo.cache.social.RelationshipsCountCache.Capacity=800
       exo.cache.social.RelationshipsCountCache.TimeToLive=-1

       # Social Cache Configuration - Relationships
       #  - Standalone (time to live in seconds)
       exo.cache.social.RelationshipsCache.Capacity=800
       exo.cache.social.RelationshipsCache.TimeToLive=-1

-  **SpaceCache** that is handled by CachedSpaceStorage.

   .. code:: xml

       # Social Cache Configuration - Space
       #  - Standalone (time to live in seconds)
       exo.cache.social.SpaceCache.Capacity=1000
       exo.cache.social.SpaceCache.TimeToLive=-1

       # Social Cache Configuration - Space Ref
       #  - Standalone (time to live in seconds)
       exo.cache.social.SpaceRefCache.Capacity=10000
       exo.cache.social.SpaceRefCache.TimeToLive=-1

       # Social Cache Configuration - Spaces Count
       #  - Standalone (time to live in seconds)
       exo.cache.social.SpacesCountCache.Capacity=4000
       exo.cache.social.SpacesCountCache.TimeToLive=86400

       # Social Cache Configuration - Spaces
       #  - Standalone (time to live in seconds)
       exo.cache.social.SpacesCache.Capacity=1000
       exo.cache.social.SpacesCache.TimeToLive=86400

-  **ActivityCache** that is handled by CachedActivityStorage.

   .. code:: xml

       # Social Cache Configuration - Activity
       #  - Standalone (time to live in seconds)
       exo.cache.social.ActivityCache.Capacity=10000
       exo.cache.social.ActivityCache.TimeToLive=-1

       # Social Cache Configuration - Activities Count
       #  - Standalone (time to live in seconds)
       exo.cache.social.ActivitiesCountCache.Capacity=4000
       exo.cache.social.ActivitiesCountCache.TimeToLive=-1

       # Social Cache Configuration - Activities
       #  - Standalone (time to live in seconds)
       exo.cache.social.ActivitiesCache.Capacity=4000
       exo.cache.social.ActivitiesCache.TimeToLive=-1

The specific configuration of each Social cache can be found in:

-  ``$PLATFORM_TOMCAT_HOME/webapps/social-extension.war!/WEB-INF/conf/social-extension/social/cache-configuration.xml``
   (Tomcat).

-  ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear/social-extension-war.war!/WEB-INF/conf/social-extension/social/cache-configuration.xml``
   (JBoss).

.. _Social.identityCache:

IdentityCache
---------------

The **IdentityCache** caches information related to identities, such as
index, count or profile. When any users view or take actions on
users/spaces or activity page that contains the cached identity
information, information will be directly retrieved from cache rather
than the database.

-  The **IdentityCache** is invalidated when the user/space is deleted
   or updated.

-  The **IdentityCache** size equals to the number of identities in
   cache.

-  The maximum heap size is calculated as follows:

   -  Identity Data: 33Kb (Max size: 500)

   -  Identity Index: 24Kb (Max size: 500)

   -  Identities List: 3747Kb (Max size: 2000)

   -  Identities Count: 739Kb (Max size: 2000)

   -  Profile Data: 170Kb (Max size: 500)

.. _Social.relationshipCache:

RelationshipCache
------------------

The **RelationshipCache** caches relationship information of users in
the social networking. Any connection status (connection, pending,
invitation, suggestion and count of relationships) is cached. When any
users ask for these cached relationships, their information will be
retrieved from cache rather than the database.

-  The **RelationshipCache** is invalidated when the connection is
   changed/removed or when a new connection is added.

-  The **RelationshipCache** size equals to the number of relationships
   in cache.

-  The maximum heap size is calculated as follows:

   -  Relationship Data: 14610Kb (Max size: 20000)

   -  Relationships Count: 16Kb (Max size: 800)

   -  Relationships: 171Kb (Max size: 800)

   -  Suggestion: 400Kb (Max size: 500)

.. _Social.spaceCache:

SpaceCache
------------

The **SpaceCache** caches all information of spaces, including the count
and space references. When any users visit the cached spaces, their
information will be retrieved from cache rather than the database.

-  The **SpaceCache** is invalidated when the space is deleted or
   updated.

-  The **SpaceCache** size equals to the number of spaces in cache.

-  The maximum heap size is calculated as follows:

   -  Space Data: 1177Kb (Max size: 1000)

   -  Spaces List: 1126Kb (Max size: 1000)

   -  Spaces Count: 203Kb (Max size: 4000)

   -  Space Ref: (38Kb) (Max size: 10000)

.. _Social.activityCache:

ActivityCache
---------------

The **ActivityCache** caches information related to activities, such as
the count of activities. When any users visit the cached activities,
information of these activities will be retrieved from cache rather than
the database.

-  The **ActivityCache** is invalidated when the activity is deleted or
   updated (a new comment is added to the activity).

-  The **ActivityCache** size equals to the number of activities in
   cache.

-  The maximum heap size is calculated as follows:

   -  Activities Data: 3697Kb (Max size: 10000)

   -  Activities List: 2555Kb (Max size: 4000)

   -  Activities Count: 98Kb (Max size: 4000)

.. _ForumCaches:

Forum caches
~~~~~~~~~~~~~~

eXo Platform provides 9 Forum caches, including:

-  :ref:`UserProfilesCache <Forum.userProfileCache>`

-  :ref:`CategoriesCache <Forum.categoriesCache>`

-  :ref:`ForumsCache <Forum.forumsCache>`

-  :ref:`TopicsCache <Forum.topicsCache>`

-  :ref:`PostsCache <Forum.postsCache>`

-  :ref:`WatchesCache <Forum.watchesCache>`

-  :ref:`ObjectNameDataCache <Forum.objectNameDataCache>`

-  :ref:`MiscDataCache <Forum.miscDataCache>`

-  :ref:`BBCodeCache <Forum.BBCodeCache>`

You can override these Forum caches in :ref:`exo.properties <ConfigurationOverview>`
file.

In particular:

-  **UserProfilesCache** that is handled by CacheUserProfile.

   .. code:: xml

       # Forum Cache Configuration - User Profiles
       #  - Standalone (time to live in seconds)
       exo.cache.forum.UserProfiles.Capacity=500
       exo.cache.forum.UserProfiles.TimeToLive=-1

-  **CategoriesCache**, **ForumsCache**, **TopicsCache**,
   **PostsCache**, **WatchesCache**, **ObjectNameDataCache**,
   **MiscDataCache** that are handled by CachedDataStorage.

   .. code:: xml

       # Forum Cache Configuration - Category List
       #  - Standalone (time to live in seconds)
       exo.cache.forum.CategoryList.Capacity=50
       exo.cache.forum.CategoryList.TimeToLive=-1

       # Forum Cache Configuration - Category Data
       #  - Standalone (time to live in seconds)
       exo.cache.forum.CategoryData.Capacity=150
       exo.cache.forum.CategoryData.TimeToLive=-1

       # Forum Cache Configuration - Forum List
       #  - Standalone (time to live in seconds)
       exo.cache.forum.ForumList.Capacity=500
       exo.cache.forum.ForumList.TimeToLive=-1

       # Forum Cache Configuration - Forum Data
       #  - Standalone (time to live in seconds)
       exo.cache.forum.ForumData.Capacity=2500
       exo.cache.forum.ForumData.TimeToLive=-1

       # Forum Cache Configuration - Topic Data
       #  - Standalone (time to live in seconds)
       exo.cache.forum.TopicData.Capacity=500
       exo.cache.forum.TopicData.TimeToLive=-1

       # Forum Cache Configuration - Watch List Data
       #  - Standalone (time to live in seconds)
       exo.cache.forum.WatchListData.Capacity=500
       exo.cache.forum.WatchListData.TimeToLive=-1

       # Forum Cache Configuration - Link List Data
       #  - Standalone (time to live in seconds)
       exo.cache.forum.LinkListData.Capacity=250
       exo.cache.forum.LinkListData.TimeToLive=-1

       # Forum Cache Configuration - Object Name Data
       #  - Standalone (time to live in seconds)
       exo.cache.forum.ObjectNameData.Capacity=500
       exo.cache.forum.ObjectNameData.TimeToLive=-1

       # Forum Cache Configuration - Misc Data
       #  - Standalone (time to live in seconds)
       exo.cache.forum.MiscData.Capacity=600
       exo.cache.forum.MiscData.TimeToLive=-1

-  **BBCodeCache** that is handled by CachedBBCodeService.

   .. code:: xml

       # BBCode Cache Configuration - BBCode List
       #  - Standalone (time to live in seconds)
       exo.cache.forum.BBCodeListData.Capacity=10
       exo.cache.forum.BBCodeListData.TimeToLive=-1

       # BBCode Cache Configuration - BBCode Data
       #  - Standalone (time to live in seconds)
       exo.cache.forum.BBCodeData.Capacity=50
       exo.cache.forum.BBCodeData.TimeToLive=-1

The specific configuration of each Forum cache can be found in:

-  ``$PLATFORM_TOMCAT_HOME/webapps/forum-extension.war!/WEB-INF/ks-extension/ks/forum/cache-configuration.xml``
   (Tomcat).

-  ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear/forum-extension-webapp.war!/WEB-INF/ks-extension/ks/forum/cache-configuration.xml``
   (JBoss).

.. _Forum.userProfileCache:

UserProfilesCache
-------------------

The **UserProfilesCache** caches information of users, for example,
name, number of topics, number of posts, user settings information in
the forum system. These cached information will be used when the users
log in the forum for next times.

-  The **UserProfilesCache** is invalidated when the user is deleted or
   updated, or when the user creates a new topic/post or changes his/her
   user settings, logs in/out of the system.

-  The **UserProfilesCache** size equals to the number of user profiles
   in forum.

-  The maximum heap size of **UserProfilesCache** is 213Kb (Max size:
   500).
   
.. _Forum.categoriesCache:   

CategoriesCache
-----------------

The **CategoriesCache** caches information of categories, such as name,
order, description, permissions. Information of these cached categories
are used when the Forums application is opened not for the first time.

-  The **CategoriesCache** is invalidated when the category is modified
   (for example, when the user updates his/her profile, or watches a
   category, or adds/deletes a space).

-  The **CategoriesCache** size equals to the number of categories in
   cache.

-  The maximum heap size is calculated as follows:

   -  Categories List: 207Kb (Max size: 50)

   -  Categories Data: 54Kb (Max size: 150)

.. _Forum.forumsCache:

ForumsCache
-------------

The **ForumsCache** caches information related to forums, such as name,
order, description, permission. Information of these cached forums is
used when any users open the Forums application not for the first time.

-  The **ForumsCache** is invalidated when the forum is modified
   (updating user profile, users watch on Forum, spaces updated).

-  The **ForumsCache** size equals to the number of forums in cache.

-  The maximum heap size is calculated as follows:

   -  Forum List: 66Kb (Max size: 500)

   -  Forum Data: 982Kb (Max size: 2500)

.. _Forum.topicsCache:

TopicsCache
------------

The **TopicsCache** caches information related to topics, such as name,
description, owner, last updated time and permission. When any users go
to the cached topics, their information will be retrieved from cache
rather than the database.

-  The **TopicsCache** is invalidated when the topic is modified (for
   example, when the user watches a topic, or adds/deletes a post, or
   deletes a space).

-  The **TopicsCache** size equals to the number of topics in cache.

-  The maximum heap size is calculated as follows:

   -  Topic List: 194Kb (Max size: 150)

   -  Topic Data: 581Kb (Max size: 500)

.. _Forum.postsCache:

PostsCache
------------

The **PostsCache** caches information of posts, such as title, message,
owner. When any users do anything related to the cached posts,
information will be retrieved from cache rather than the database.

-  The **PostsCache** is invalidated when the post is modified (or
   updated).

-  The **PostsCache** size equals to the number of topics in cache.

-  The maximum heap size is calculated as follows:

   -  Post List: 228Kb (Max size: 150)

   -  Post Data: 720Kb (Max size: 500)
   
.. _Forum.watchesCache:   

WatchesCache
--------------

The **WatchesCache** caches information related to watches, such as
users and emails. These cached information will be used when the
forum/category/topic is loaded not for the first time.

-  The **WatchesCache** is invalidated when a post is modified
   (unwatched/watched).

-  The **WatchesCache** size equals to the number of watches in cache.

-  The maximum heap size of watched data is 257Kb (Max size: 500)

.. _Forum.objectNameDataCache:

ObjectNameDataCache
---------------------

The **ObjectNameDataCache** caches simple information of
categories/forums/topics, such as name and jcr-path. When any users ask
for these cached forums/categories/topics, the information will be
retrieved from cache rather than the database.

-  The **ObjectNameDataCache** is invalidated when a
   category/forum/topic is updated.

-  The **ObjectNameDataCache** size equals to the number of
   ObjectNameData in cache.

-  The maximum heap size of **ObjectNameDataCache** is 239Kb (Max size:
   500).

.. _Forum.miscDataCache:

MiscDataCache
---------------

The **MiscDataCache** caches simple information related to categories
list size, forums list size, topic list size, screen name of users.
These cached information is used when the Forums application is opened
not for the first time.

-  The **MiscDataCache** is invalidated when a
   category/forum/topic/post/user profile is modified.

-  The **MiscDataCache** size equals to the number of MiscData in cache.

-  The maximum heap size equals to 45Kb (Max size: 600).

.. _Forum.BBCodeCache:

BBCodeCache
--------------

The **BBCodeCache** caches information related to BBCodes, such as tag
name, replacement, description, isOption. When any users open the topic
containing the cached BBCodeCache or add/edit the BBCode, information
will be retrieved from cache rather than the database.

-  The **BBCodeCache** is invalidated when the BBCode is modified.

-  The **BBCodeCache** size equals to the number of BBCodes in cache.

-  The maximum heap size is calculated as follows:

   -  BBCode List: 9Kb (Size: 10).

   -  BBCode Data: 11,25Kb (Size: 50).
   
.. _WikiCaches:

Wiki caches
~~~~~~~~~~~~~

eXo Platform provides 3 Wiki caches, including:

-  :ref:`RenderingCache <Wiki.RenderingCache>`

-  :ref:`UuidCache <Wiki.UUIDCache>`

-  :ref:`AttachmentCountCache <Wiki.AttachmentCountCache>`

You can change these Social caches that are handled by
**PageRenderingCacheService** in
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

In particular:

.. code:: xml

    # == WIKI Caches Configuration == #

    # Wiki Cache Configuration - Spaces
    #  - Standalone (time to live in seconds)
    exo.cache.wiki.PageRenderingCache.Capacity=1000
    exo.cache.wiki.PageRenderingCache.TimeToLive=-1

The specific configuration of each Wiki cache can be found in:

-  ``$PLATFORM_TOMCAT_HOME/lib/wiki-service-xxx.jar!/conf/portal/cache-configuration.xml``
   (Tomcat).

-  ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear/lib/wiki-service.jar!/conf/portal/cache-configuration.xml``
   (JBoss).
   
.. _Wiki.RenderingCache:   

RenderingCache
----------------

The **RenderingCache** caches content of visited wiki pages. When any
users visit the cached wiki pages, their content will be retrieved from
cache rather than the database.

-  The **RenderingCache** is updated when a wiki page is removed or
   modified.

-  The **RenderingCache** size equals to the number of wiki pages in
   cache.

-  The size of a wiki page is unlimited, so the maximum heap size
   consumed by the cache is unlimited too. However, most of wiki pages
   are often less than 100KB. Therefore, the maximum heap size equals to
   the cache size multiplied by 100KB.

.. _Wiki.UUIDCache:

UuidCache
-----------

The **UuidCache** caches Uuid of nodes that stores the visited wiki
pages. When any users visit these wiki pages, Wiki gets the nodes by
**UUID** in cache that is much faster than query in the database.

-  The **UuidCache** is updated when the wiki page is removed.

-  The **UuidCache** size equals to the number of wiki pages in cache.

-  Every **Uuid** has the length of 32 bytes, so the maximum heap size
   equals to the cache size multiplied by 32 bytes.
   
.. _Wiki.AttachmentCountCache:   

AttachmentCountCache
----------------------

The **AttachmentCountCache** caches the number of attachments of the
visited wiki pages. When the visited wiki pages are called, the number
of page attachments will be retrieved from cache rather than the
database.

-  The **AttachmentCountCache** is updated when the wiki page is
   removed/modified or when its attachment is added/removed.

-  The **AttachmentCountCache** size equals to the number of wiki pages
   in cache.

-  The maximum heap size equals to the cache size multiplied by 4 bytes
   ("4" - size of Integer).
   
.. _CalendarCaches:

Calendar caches
~~~~~~~~~~~~~~~~~

eXo Platform provides 6 Calendar caches, including:

-  :ref:`GroupCalendarCache <Calendar.groupCalendarCache>`

-  :ref:`UserCalendarCache <Calendar.userCalendarCache>`

-  :ref:`GroupCalendarEventCache <Calendar.groupCalendarEventCache>`

-  :ref:`GroupCalendarRecurrentEventCache <Calendar.groupCalendarRecurrentEventCache>`

-  :ref:`UserCalendarSettingCache <Calendar.userCalendarSettingsCache>`

-  :ref:`Calendar Cache by ID <Calendar.calendarCacheID>`

-  :ref:`Calendar originating datasource by calendarId <Calendar.calendarOriginatingDatasourceID>`

-  :ref:`EventCategoriesCache <Calendar.eventCategoriesCache>`

You can change values of these Calendar caches in
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

::

    # == CALENDAR Caches Configuration == #

    # Calendar Cache Configuration - Group Calendar
    #  - Standalone (time to live in seconds)
    exo.cache.calendar.GroupCalendarCache.Capacity=1000
    exo.cache.calendar.GroupCalendarCache.TimeToLive=3600

    # Calendar Cache Configuration - Group Calendar Event
    exo.cache.calendar.GroupCalendarEventCache.Capacity=1000
    exo.cache.calendar.GroupCalendarEventCache.TimeToLive=3600

    # Calendar Cache Configuration - Group Calendar Recurrent Event
    exo.cache.calendar.GroupCalendarRecurrentEventCache.Capacity=1000
    exo.cache.calendar.GroupCalendarRecurrentEventCache.TimeToLive=3600

    # Calendar Cache Configuration - User Calendar
    exo.cache.calendar.UserCalendarCache.Capacity=1000
    exo.cache.calendar.UserCalendarCache.TimeToLive=3600

    # Calendar Cache Configuration - User Calendar Setting
    exo.cache.calendar.UserCalendarSettingCache.Capacity=1000
    exo.cache.calendar.UserCalendarSettingCache.TimeToLive=3600

    # Calendar Cache Configuration - Calendar Cache By Id
    exo.cache.calendar.Calendar.Capacity=1000
    exo.cache.calendar.Calendar.TimeToLive=3600

    # Calendar Cache Configuration - Calendar originating datasource by calendarId
    exo.cache.calendar.dsNameById.Capacity=1000
    exo.cache.calendar.dsNameById.TimeToLive=-1


    # Calendar Cache Configuration -Event Categories
    exo.cache.calendar.EventCategoriesCache.Capacity=1000
    exo.cache.calendar.EventCategoriesCache.TimeToLive=3600

The specific configuration of each Calendar cache can be found in:

-  ``$PLATFORM_TOMCAT_HOME/webapps/calendar-extension.war!/WEB-INF/cs-extension/cs/cs-configuration.xml``
   (Tomcat).

-  ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear!/calendar-extension-webapp.war!/WEB-INF/cs-extension/cs/cs-configuration.xml``
   (JBoss).
   
.. _Calendar.groupCalendarCache:   

GroupCalendarCache
--------------------

The **GroupCalendarCache** caches the Calendar objects. This object
contains metadata information of a calendar, such as calendar name, time
zone, permissions. When any users access the cached group calendar, the
metadata of this group calendar will be retrieved from cache rather than
the database.

-  The cached **GroupCalendarCache** is invalidated when the user
   updates calendar metadata, such as creating, deleting, updating
   calendars (changing time zone).

-  The **GroupCalendarCache** size equals to the number of Calendar
   objects in cache.

-  Each Calendar object is approximately 75 bytes, so the maximum heap
   size equals to the cache size multiplied by 75 bytes.

.. _Calendar.userCalendarCache:

UserCalendarCache
-------------------

The **UserCalendarCache** caches the Calendar object. When any users
access the cached user calendar, the metadata of this user calendar will
be retrieved from cache rather than the database.

-  The **UserCalendarCache** is invalidated when the user updates
   calendar metadata, such as creating, deleting, updating calendar
   (changing time zone).

-  The **UserCalendarCache** size equals to the number of Calendar
   objects in cache.

-  Each Calendar object is approximately 75 bytes, so the maximum heap
   size equals to the cache size multiplied by 75 bytes.

.. _Calendar.groupCalendarEventCache:

GroupCalendarEventCache
-------------------------

The **GroupCalendarEventCache** caches information about events, for
example, summary, datetime, invitations, attachments. When any users
show content of a group calendar (for example, its events, tasks) for
the first time, a query will be made, then put the result to the cache.
When another users access the cached content, its data will be retrieved
from cache rather than the database.

-  The **GroupCalendarEventCache** is invalidated when the users make
   changes on content of the group calendar, for example, creating,
   deleting tasks, updating summary of events.

-  The **GroupCalendarEventCache** size equals to the number of events
   in cache.

-  If the event does not contain the attachment file, each event object
   is approximately 200 bytes. Therefore, the maximum heap size equals
   to the cache size multiplied by 200 bytes.
   
.. _Calendar.groupCalendarRecurrentEventCache:   

GroupCalendarRecurrentEventCache
---------------------------------

The **GroupCalendarRecurrentEventCache** caches information about
recurring events, for example, summary, datetime, invitations, and
attachment. When any users show content of a group calendar that
contains the recurring event (for example, its events, tasks) for the
first time, a query will be made, then put the result to the cache. When
another users access the cached content, the data query will be
retrieved from cache rather than the database.

-  The **GroupCalendarRecurrentEventCache** is invalidated when the user
   makes changes on recurring events, for example, deleting, updating
   summary of recurring events.

-  The **GroupCalendarRecurrentEventCache** size equals to the number of
   recurring events in cache.

-  If the recurring event does not contain the attachment file, each
   object is approximately 200 bytes. Therefore, the maximum heap size
   equals to the cache size multiplied by 200 bytes.

.. _Calendar.userCalendarSettingsCache:

UserCalendarSettingsCache
---------------------------

The **UserCalendarSettingsCache** caches information about calendar
settings, such as datetime format, calendar filter, view types. When the
user needs calendar settings, such as access to calendar page and need
to render current view (month view, week view), a query is made and put
the setting information to the cache. If another users access the cached
calendar settings, the data will be directly retrieved from cache rather
than the database.

-  The **UserCalendarSettingsCache** is invalidated when the user
   changes his settings or the user is deleted.

-  The **UserCalendarSettingsCache** size equals to the number of
   calendar settings in cache.

-  Each Calendar setting object is approximately 80 bytes, so the
   maximum heap size equals to the cache size multiplied by 80 bytes.
   
.. _Calendar.calendarCacheID:   

Calendar Cache by ID
----------------------

This cache will manage:

-  User private calendars by id and username.

-  User shared calendar by id and username.

-  Group calendar by id.

.. _Calendar.calendarOriginatingDatasourceID:

Calendar originating datasource by calendarId
-----------------------------------------------

This cache will manage originating datasource name ("jcr" or "task") to
be able to search for the calendar information from the dedicated store.

.. _Calendar.eventCategoriesCache:

EventCategoriesCache
---------------------

The **EventCategoriesCache** caches event category names and Ids. When
an event category is called for the first time, a query is made and data
is put into the cache. For next time, when another users call the cached
event category, its data will be retrieved from cache rather than the
database.

-  The **EventCategoriesCache** is invalidated when the user creates,
   updates or deletes the event category.

-  The **EventCategoriesCache** size equals to the number of event
   categories in cache.

-  The **EventCategoriesCache** size is approximately 24 bytes, so the
   maximum heap size equals to the cache size multiplied by 24 bytes.
   
   
.. _Configuration.EndDateSuggestion:

===================
End-date suggestion
===================

eXo Platform offers the end-date suggestion feature in Calendar that you can
change in
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

.. code:: xml

    # auto suggest the end of event time to 1 hour (2 x 30 min)
    exo.calendar.default.event.suggest=2
    # auto suggest the end of task time to 30 minutes (1 x 30 min)
    exo.calendar.default.task.suggest=1

In which:

-  The numeric value of duration suggestion is complied with the
   following rules: **1** = 30 minutes, **2** = 1 hour, **3** = 1 hour
   30 minutes, **4** = 2 hours. This means **1** block equals to 30
   minutes.

-  ``exo.calendar.default.event.suggest``: Defines the duration of an
   event. That is, if the start-time is 7:00AM in the From field, the
   end-time will be auto-increased to 8:00AM in the To field. "2" is set
   by default for the duration of events.

-  ``exo.calendar.default.task.suggest``: Defines the duration of a
   task. That is, if the start-time is 7:00AM in the From field, the
   end-time will be auto-increased to 7:30AM in the To field. "1" is set
   by default for the duration of tasks.
   

.. _PredefinedUserGroupMembership:

========================================
Predefined users, groups and memberships
========================================

When eXo Platform starts for the first time, it initializes some users,
groups and memberships, such as user *root* and group */platform*. Some
user attributes are set also, including password, firstname, lastname
and email.

First you should get familiar with the expression of *group* and
*membership*. If a user has the *member:/platform/users* membership, it
means the user is a *member* of the */platform/users* group. The groups
are organized like a tree, in which */platform/users* is a sub-group of
*/platform* group.

A membership is formed by a *membership type* and a group. *Member,
editor and manager* are some of predefined membership types. So strictly
speaking, "membership type" and "membership" are different concepts.
However, the word "membership" is sometimes used with the meaning of
"membership type".

Next you will learn the configurations of predefined users, groups and
memberships which are written in:

-  ``$PLATFORM_TOMCAT_HOME/webapps/platform-extension.war!/WEB-INF/conf/organization/organization-configuration.xml``
   (Tomcat)

-  ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear!/platform-extension-webapp.war!/WEB-INF/conf/organization/organization-configuration.xml``
   (JBoss)

This section does not directly aim at changing those predefined
organizational data, but if it is the further step you want to go, you
can easily perform via the :ref:`extension mechanism <#PLFDevGuide.eXoAdd-ons.PortalExtension>` 
provided by eXo Platform.

**Organizational data initializer**

At top of the configuration file, you see the initializer declaration
that is supposed to create all the predefined data discussed here:

.. code:: xml

    <component-plugin>
        <name>init.service.listener</name>
        <set-method>addListenerPlugin</set-method>
        <type>org.exoplatform.services.organization.OrganizationDatabaseInitializer</type>
        <description>this listener populate organization data for the first launch</description>
        <init-params>
            <value-param>
                <name>checkDatabaseAlgorithm</name>
                <description>check database</description>
                <value>entry</value>
            </value-param>
            ...
        </init-params>
    </component-plugin>

Notice the value of *checkDatabaseAlgorithm*. If it is set to *entry*,
each user, group and membership listed in the configuration is checked
each time eXo Platform is started. If an entry does not exist in the database
yet, it will be created. If the value is set to *empty*, the data will
be updated to the database only if the database is empty.

**Predefined membership types**

All predefined membership types can be found under the *membershipType*
field. Here is an extract:

.. code:: xml

    <field name="membershipType">
        <collection type="java.util.ArrayList">
            <value>
                <object type="org.exoplatform.services.organization.OrganizationConfig$MembershipType">
                    <field name="type"><string>*</string></field>
                    <field name="description"><string>Any membership type</string>  </field>
                </object>
            </value>
            <value>
                <object type="org.exoplatform.services.organization.OrganizationConfig$MembershipType">
                    <field name="type"><string>manager</string></field>
                    <field name="description"><string>manager membership type</string></field>
                </object>
            </value>
            ...
        </collection>
    </field>

**Predefined groups**

All predefined groups can be found under the *group* field. Here is an
extract:

.. code:: xml

    <field name="group">
        <collection type="java.util.ArrayList">
            <value>
                <object type="org.exoplatform.services.organization.OrganizationConfig$Group">
                    <field name="name"><string>developers</string></field>
                    <field name="parentId"><string /></field>
                    <field name="description"><string>the /developers group</string></field>
                    <field name="label"><string>Development</string></field>
                </object>
            </value>
            ...
        </collection>
    </field>

**Predefined users**

All predefined users can be found under the *user* field. The
configurations are username, firstname, lastname, email, password and
the list of memberships granted to the user. Here is an extract:

.. code:: xml

    <field name="user">
        <collection type="java.util.ArrayList">
            <value>
                <object type="org.exoplatform.services.organization.OrganizationConfig$User">
                    <field name="userName"><string>${exo.super.user}</string></field>
                    <field name="password"><string>gtn</string></field>
                    <field name="firstName"><string>Root</string></field>
                    <field name="lastName"><string>Root</string></field>
                    <field name="email"><string>root@localhost</string></field>
                    <field name="groups">
                        <string>*:/platform/administrators,*:/platform/users,*:/platform/web-contributors,*:/organization/employees,member:/organization/management/executive-board</string>
                    </field>
                </object>
            </value>
            ...
        </collection>
    </field>

Note that the code above uses the *exo.super.user* property which is set
to *root* in
:ref:`exo.properties <Configuration.ConfigurationOverview>` file:


.. _Configuration.GadgetConfiguration:

====================
Gadget configuration
====================

Gadget configuration consists of OAuth key, Shindig properties, and
security token key. By default those configuration files are located at:

-  ``gatein/conf/gadgets`` for Tomcat.

-  ``standalone/configuration/gatein/gadgets`` for JBoss.

To use your customized configuration files, it is recommended that you
replace default files in that location with yours.

It is possible to change the location by pointing ``exo.conf.dir`` to
another folder. However, ``exo.conf.dir`` holds many configuration files
besides gadgets, so take care that you have those files in the new
folder. Also note that the folder of gadgets files will be
``${exo.conf.dir}/gadgets``.

To change ``exo.conf.dir``:

-  In Tomcat: customize the variable
   ``EXO_CONF_DIR=/path/to/your/folder`` (see :ref:`Customizing variables <CustomizingEnvironmentVariables>`
   for how-to).

-  In JBoss: edit the property ``exo.conf.dir`` in
   ``standalone/configuration/standalone-exo.xml``
   (``standalone-exo-cluster.xml`` in cluster mode).

   .. code:: xml

       <sytem-properties>
           <property name="exo.conf.dir" value="/path/to/your/folder"/>
       </system-properties>

The security token key (``key.txt``) is automatically generated by the
server so you just need to acknowledge its location. Next is more
information about OAuth key and Shindig properties.

**OAuth key configuration**

In eXo Platform, the OAuth gadgets use an OAuth key to authorize with
external service providers. There is always a default key defined in the
``oauthkey.pem`` file. This key will be used in case the OAuth gadgets
do not indicate a key. It is strongly recommended that you create your
own ``oauthkey.pem`` file by using the **openssl** tool and some
commands as follows:

::

    openssl req -newkey rsa:1024 -days 365 -nodes -x509 -keyout testkey.pem -out testkey.pem -subj '/CN=mytestkey'
    openssl pkcs8 -in testkey.pem -out oauthkey.pem -topk8 -nocrypt -outform PEM

Then, replace the default **oauthkey.pem** with yours.

**Disabling Shindig online features**

Some Shindig features require online access which may lead to
significant delay time at startup time. Administrators can disable those
features in the ``shindig.properties`` file. Once the online features,
for example analytics, are disabled, they will not be available in
gadgets.

Default (enabled):

::

    shindig.features.default=res://features/default-features.txt,res://features/online-features.txt

To disable:

::

    shindig.features.default=res://features/default-features.txt

.. _statisticsParameter:

==============================================
Enabling/Disabling groovy templates statistics
==============================================

:ref:`Management and Monitoring Gadgets <ManagingApplications.ManagementMonitoringGadgets>`
is a set of administrative gadgets that provide a global vision for the
system and they can provide performance statistics useful for
administrators.

With eXo Platform 4.4, a new parameter configurable through
:ref:`exo.properties <Configuration.ConfigurationOverview>` file, was introduced:

::

                exo.statistics.groovy.template.enabled=true
            

This parameter allows to enable/disable groovy templates statistics that
is collected asynchronously. Enabling it (i.e setting it to "True")
activates the statistics collection to be made in memory without logs.

.. note:: This parameter is not necessary for production environements. It
          could be activated for testing purposes.

.. _SearchConnector:

==============================
Search connector configuration
==============================

There are a number of built-in Search connectors which are activated by
default in eXo Platform. You can easily turn any of them off by setting its
corresponding property to *false* in the
:ref:`exo.properties <Configuration.ConfigurationOverview>` file, as 
referring the following table:

+----------------------------------+-----------------------------------------+
| Property                         | Description                             |
+==================================+=========================================+
| ``exo.unified-search.connector.f | Turn on/off Unified Search connector    |
| ile.enable``                     | for all files. The default is *true*,   |
|                                  | that is, all files are included in the  |
|                                  | search scope.                           |
+----------------------------------+-----------------------------------------+
| ``exo.unified-search.connector.w | Turn on/off Unified Search connector    |
| iki.enable``                     | for all Wiki pages. The default is      |
|                                  | *true*, that is, all Wiki pages are     |
|                                  | included in the search scope.           |
+----------------------------------+-----------------------------------------+
| ``exo.unified-search.connector.p | Turn on/off Unified Search connector    |
| age.enable``                     | for all portal pages. The default is    |
|                                  | *true*, that is, all portal pages are   |
|                                  | included in the search scope.           |
+----------------------------------+-----------------------------------------+
| ``exo.unified-search.connector.p | Turn on/off Unified Search connector    |
| ost.enable``                     | for all Forum posts. The default is     |
|                                  | *true*, that is, all Forum posts are    |
|                                  | included in the search scope.           |
+----------------------------------+-----------------------------------------+
| ``exo.unified-search.connector.t | Turn on/off Unified Search connector    |
| ask.enable``                     | for all Calendar tasks. The default is  |
|                                  | *true*, that is, all Calendar tasks are |
|                                  | included in the search scope.           |
+----------------------------------+-----------------------------------------+
| ``exo.unified-search.connector.s | Turn on/off Unified Search connector    |
| pace.enable``                    | for all spaces. The default is *true*,  |
|                                  | that is, all spaces are included in the |
|                                  | search scope.                           |
+----------------------------------+-----------------------------------------+
| ``exo.unified-search.connector.e | Turn on/off Unified Search connector    |
| vent.enable``                    | for all Calendar events. The default is |
|                                  | *true*, that is, all Calendar events    |
|                                  | are included in the search scope.       |
+----------------------------------+-----------------------------------------+
| ``exo.unified-search.connector.p | Turn on/off Unified Search connector    |
| eople.enable``                   | for all users. The default is *true*,   |
|                                  | that is, all users are included in the  |
|                                  | search scope.                           |
+----------------------------------+-----------------------------------------+
| ``exo.unified-search.connector.d | Turn on/off Unified Search connector    |
| ocument.enable``                 | for all documents. The default is       |
|                                  | *true*, that is, all documents are      |
|                                  | included in the search scope.           |
+----------------------------------+-----------------------------------------+


.. _Configuration.UnifiedSearch:

============================
Unified Search configuration
============================

eXo Platform exposes several parameters for effective use of Unified Search
Engine. You can change these parameters in
:ref:`exo.properties <Configuration.ConfigurationOverview>`file.

::

    # Enables Fuzzy search engine
    # Values: true/false
    exo.unified-search.engine.fuzzy.enable=true

    # Sets the required similarity between the query term and the matching terms
    # Values : Between 0 and 1
    exo.unified-search.engine.fuzzy.similarity=0.5

    # List characters will be ignored by indexer
    exo.unified-search.excluded-characters=.-

.. _FuzzyParameters:

Fuzzy parameters
~~~~~~~~~~~~~~~~~~

Since 4.0.4, there are two properties that allow you to enable/disable
Fuzzy search and adjust its effectiveness. You can read about Fuzzy
search
`here <http://lucene.apache.org/core/3_5_0/queryparsersyntax.html#Fuzzy%20Searches>`__.
Basically, the engine searches for not only exact keyword but also
similar words. It is likely a feature expected by end-users, but it is
also a deal with search speed. That is why you should have ability to
adjust degree of similarity and enable/disable Fuzzy search.

By default, Fuzzy search is enabled. Fuzzy search will be performed when
the user adds a tilde (~) after a **single** keyword. So the "Home~"
keyword triggers a Fuzzy search of which the result may include "Rome".
Also, the user can append a *similarity* to narrow or extend the search
result, for example "Home~0.8".

+----------------------------------+-----------------------------------------+
| Property                         | Description                             |
+==================================+=========================================+
| ``exo.unified-search.engine.fuzz | The value can be *true* or *false* that |
| y.enable``                       | means Fuzzy search is enabled or        |
|                                  | disabled respectively. The default is   |
|                                  | *true*.                                 |
+----------------------------------+-----------------------------------------+
| ``exo.unified-search.engine.fuzz | The default similarity that varies      |
| y.similarity``                   | between 0 and 1. The closer to 1 this   |
|                                  | value is set, the more found words are  |
|                                  | similar to the keyword. The value of    |
|                                  | this property is effective when the     |
|                                  | user does not add a similarity.         |
|                                  |                                         |
|                                  | Use the period (.) for floating point,  |
|                                  | for example "0.1", "0.2". The default   |
|                                  | is 0.5.                                 |
+----------------------------------+-----------------------------------------+

.. _ExcludedCharacters:

Excluded characters
~~~~~~~~~~~~~~~~~~~~~

By default only the whitespace is recognized as the word separator -
means if the data is "Lorem Ipsum", there are two indexes will be
created for "Lorem" and "Ipsum".

The built-in indexing service of eXo Platform allows more word
separators, like dot (.) or hyphen (-). To define those, edit the
property ``exo.unified-search.excluded-characters``.

When a user types a phrase to search, the word separator is used also.
For example if hyphen is configured, and the user types "Lorem-Ipsum",
then the query is sent as if it is two words.


.. _Configuration.ElasticSearch:
  
=========================================
Elasticsearch Embedded mode Configuration
=========================================

When deployed as embedded, the `Elasticsearch configuration
files <https://www.elastic.co/guide/en/elasticsearch/reference/2.3/setup-configuration.html>`__
(elasticsearch.yml and logging.yml) are embedded in the add-on. All the
properties can be set directly in
:ref:`exo.properties <Configuration.ConfigurationOverview>` and will 
override the default properties defined in ``elasticsearch.yml`` and 
``logging.yml``.

.. _ESEmbeddedMode:

Properties of the Elasticsearch embedded node
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

All the properties below are standard properties of Elasticsearch. When
a property ``es.xxx`` is defined in
:ref:`exo.properties <Configuration.ConfigurationOverview>`,
it is automatically picked by the embedded Elasticsearch node (without
the "es." prefix).

::

    ################################ Elasticsearch Embedded node ################################

    es.cluster.name=exoplatform-es
    es.node.name=exoplatform-es-embedded
    es.network.host=127.0.0.1
    es.discovery.zen.ping.unicast.hosts=["127.0.0.1"]
    es.http.port=9200
    es.path.data=gatein/data

More details about these properties can be found in the :ref:`Properties reference chapter <Configuration.Properties_reference>`.

.. _ESClient:

Properties of the Elasticsearch client
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

eXo Platform communicates with the Elasticsearch server via multiple
components through so-called client code. The client code differentiates
calls done to the server for indexing and for searching. It allows to
have different a deployment topology where different Elasticsearch
server have different roles. The following client paramters are
configurable in :ref:`exo.properties <Configuration.ConfigurationOverview>`

::

    ################################ Elasticsearch ################################
    exo.es.embedded.enabled=true
    exo.es.index.server.url=http://127.0.0.1:9200
    exo.es.index.server.username=root
    exo.es.index.server.password=xxxxx
    exo.es.indexing.batch.number=1000
    exo.es.indexing.replica.number.default=1
    exo.es.indexing.shard.number.default=5
    exo.es.indexing.request.size.limit=10485760
    exo.es.reindex.batch.size=100
    exo.es.search.server.url=http://127.0.0.1:9200
    exo.es.search.server.username=root
    exo.es.search.server.password=xxxxx

The parameter

::

    exo.es.embedded.enabled=true

allows to enable/disable Elasticsearch Embedded node startup. It is set
to True by default. More details about the parameters in :ref:`Properties reference <Configuration.Properties_reference>`.

.. _ESIndexing:

Properties of the indexing processor and connectors
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The properties below allow to configure indexing parameters such as the
number of shards, replicas, batch size...

For more details about indexing with Elasticseach, you can take a look
in this :ref:`documentation <Elasticsearch.ESIndexArchitecture>`.

::

    ################################ Properties of the indexing processor ################################
    exo.es.indexing.batch.number=1000
    exo.es.indexing.request.size.limit=10485760
    exo.es.reindex.batch.size=100
    ################################ Properties of the indexing connectors ################################
    exo.es.indexing.replica.number.default=1
    exo.es.indexing.shard.number.default=5

More details about the parameters in :ref:`Properties reference chapter <Configuration.Properties_reference>`.

.. _Configuration.CometDConfig:

======
CometD
======

.. _WhatIs:

What is CometD?
~~~~~~~~~~~~~~~

`CometD <https://docs.cometd.org/current/reference/>`__ is a set of
libraries that facilitates the writing of web applications that perform
messaging over the web such as web chat applications.

The role of CometD is to deliver messages over the wire using the best
available transport: Websocket or HTTP, independently of the APIs used
in the application. It also provides transparent fallback in case
WebSocket does not work.

.. _CometDClustering:

CometD clustering
~~~~~~~~~~~~~~~~~~

`CometD <https://docs.cometd.org/current/reference/>`__ provides a
clustering solution called Oort that allows you to scale horizontally
your web applications. With a CometD based system in cluster mode,
clients connect to multiple nodes instead of a single node.

`Oort <https://docs.cometd.org/current/reference/#_java_oort>`__
clustering is not a high-availability solution. In fact, when a node is
down, all the clients are disconnected and then connected to another
node by a new handshake. When this happens then if the application did
not implement a method to retrieve information, the data build on the
client side is lost.

.. _CometDConfiguration:

CometD configuration
~~~~~~~~~~~~~~~~~~~~~~

To configure CometD in either cluster or standalone mode, some
parameters are needed. A list of parameters is provided in `CometD's Official documentation <https://docs.cometd.org/>`__.

.. note:: All `CometD <https://docs.cometd.org/current/reference/>`__
		  parameters are configurable in eXo Platform in the
		  :ref:`exo.properties <Configuration.ConfigurationOverview>`
		  file by prefixing them with **exo.cometd.**. For example, to
		  override the maximum size of Websocket messages, a value must be set
		  for the parameter ``ws.maxMessageSize``. Thus, in eXo Platform this value
		  must be set in :ref:`exo.properties <Configuration.ConfigurationOverview>`
		  through the ``exo.cometd.ws.maxMessageSize``.
		  
		  
.. _Configuration.YoutubeIntegration:		  
		  
===================
Youtube integration
===================

eXo Platform uses YouTube Data API v3 that provides access to YouTube data,
such as videos, playlists, and channels. To enable this, you should
configure a Youtube V3 API Key property via
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

For instance:

::

    youtube.v3.api.key=AIzaSyDToZc6oTOpe7kZIJeSUMvxfyoS6hhKJuI

In which:

-  ``youtube.v3.api.key``: an API key which is generated by a specific
   google account. Refer to https://console.developers.google.com to
   create such a key.

.. _Configuration.Notification:

============
Notification
============

The feature related to configuration in this section is the
Email/On-site notification. Here are some aspects of the feature:

-  Users can receive daily/weekly emails that sum up the activities they
   are interested in. This is performed in the background by jobs called
   ``NotificationDailyJob`` and ``NotificationWeeklyJob``.

-  In the Web UI, the notifications pop up immediately when an activity
   happens. And there is a page called "View All" where users can see
   all the recent notifications.

   In the background, a job called ``WebNotificationJob`` takes care to
   remove notifications that are older than a configurable live time.

Here under is the list of related properties that you can configure via
:ref:`exo.properties <Configuration.ConfigurationOverview>`
file.

-  ``exo.notification.NotificationDailyJob.expression``

   This is the Cron expression to schedule the daily emails. By default
   it is *0 0 23 ? \* \** (11:00pm every day).

   Learn to write Cron expression string :ref:`here <ScheduledSynchronization>`.

-  ``exo.notification.NotificationWeeklyJob.expression``

   This is the Cron expression to schedule the weekly emails. By default
   it is *0 0 11 ? \* SUN* (11:00am every Sunday).

-  ``exo.notification.service.QueueMessage.period``

   When they run, the jobs divide emails into batches and send them
   sequentially for preventing overloads. This configuration is the
   delay time (**in seconds**) between two batches.

   The default is 60 (one minute).

-  ``exo.notification.service.QueueMessage.numberOfMailPerBatch``

   This is the (maximum) number of emails of each batch. The default is
   30.

-  ``exo.notification.portalname``

   This is the "from" field in the emails. The default is *eXo*.

-  ``exo.notification.maxitems``

   The maximum number of notifications displayed in the popover list.
   The default is *8*.

-  ``exo.notification.viewall``

   The number of days a notification takes place in the "View All" page.
   When it reaches its live time, it will be removed by the
   WebNotificationJob. The default is *30 (days)*.

-  ``exo.notification.WebNotificationCleanJob.expression``

   The Cron expression to schedule the WebNotificationJob. By default it
   runs at 11:00pm every day (*0 0 23 ? \* \**).

.. _NotificationChannels:

Notification channels configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In eXo Platform, two notification channels are available by default:

-  Web channel: notifications are sent on the web browser.

-  Email channel: notifications are sent via the email.

It is possible to define which channels to activate through the
parameter ``exo.notification.channels`` in
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

It is a comma separated property which could take these values:

-  MAIL\_CHANNEL

-  WEB\_CHANNEL

By default (when the property is not customized or empty), all the
available channels are activated. When a notification channel is added
through an extension, it is automatically activated.

.. _Configuration.DocumentVersioning:

===================
Document versioning
===================

By default, versioning is enabled for documents contained in the
**Managed Sites**, **Groups** and **Personal Documents** drives. To
change this configuration, edit the
``exo.ecms.documents.versioning.drives`` property in the
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

For example:

::

    exo.ecms.documents.versioning.drives=Managed Sites,Personal Documents

in which the drives are separated by commas.

Besides, to control the data arisen from this feature, eXo Platform provides
you with the two properties:

-  ``exo.ecms.documents.versions.max``: defines the maximum number of
   versions that a document can have. When the maximum number of
   versions is reached, only the X last versions are kept while the
   other ones are permanently deleted. A non-positive value means no
   limit - by default this property is set to 0 (no limit).

-  ``exo.ecms.documents.versions.expiration``: defines the expiration
   time (in days) of a document version. When the expiration time is
   reached, the version is permanently deleted. The last version of a
   document is never deleted. A non-positive value means no limit - by
   default this property is set to 0 (no limit).

.. note:: If the value of the property
		  ``exo.ecms.documents.versioning.drives`` is updated to add or remove
		  drives, the documents already existing in the old and new drives are
		  not impacted. Only the new documents are impacted by the updates.
		  All the previous rules apply, depending on whether the document is
		  versioned or not.
		  
.. _Configuration.DocumentViewer:

===============
Document Viewer
===============

The :ref:`Document Viewer <DocumentViewer>` relies on :ref:`document conversion on serverside <JODConverterConf>`
which can take significant resources on large files. In order to avoid 
excessive resource consumption, this component limits the size of files 
it can display. Limits are set both in file weight and in number of 
pages in the document:

-  ``exo.ecms.documents.pdfviewer.max-file-size``: defines the maximum
   size in Megabytes that a file can weight to be displayed in the
   document viewer. Beyond that size, the document viewer displays a
   warning message instead of the document content :

   |image4|

   Default limit is 10MB. Any non-positive or invalid value will
   fallback to default.

-  ``exo.ecms.documents.pdfviewer.max-pages``: defines the maximum
   number of pages that a document can contain to be displayed in the
   document viewer. Beyond that number of pages, the document viewer
   displays a warning message instead of the document content.

   |image5|

   Default limit is 99 pages. Any non-positive value or invalid value
   will fallback to default.

.. _Configuration.ForgotPassword:

===============
Forgot Password
===============

If you forget your password, you can request the system to send you a
link to reset it. The link will be sent to your email and will expire as
soon as you successfully reset the password or after an expiration time.

The expiration time is 24 hours by default. To change it, edit the
following in
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

::

    exo.portal.resetpassword.expiretime=24

The time unit is hour.

.. _PasswordEncryption:

===================
Password Encryption
===================

For security, the user passwords are encrypted before being stored into
the database. When a user logs in, he provides a password in clear text.
This given password is then encrypted **by the same algorithm and the
same encoder class** before being compared with the stored password. If
they match, the user gets authenticated.

As of eXo Platform 4.3, the encoder and the algorithm can be configured via
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

.. note:: It is not likely administrators will want to change the default
		  encoder and algorithm. However for users who upgrade from a previous
		  version older than 4.3, it is important to know that **the default
		  encoder and the default algorithm have changed**, so you will need
		  to re-configure it back to the old one which has been used,
		  otherwise old users will not be able to log in.

Before 4.3, the defaults are:

-  Encoder class: ``org.picketlink.idm.impl.credential.HashingEncoder``

-  Algorithm: ``MD5``

As of 4.3, the defaults are:

-  Encoder class:
   ``org.picketlink.idm.impl.credential.DatabaseReadingSaltEncoder``

-  Algorithm: ``SHA-256``

To change the defaults in 4.3 back to the old ones, edit
``exo.properties`` to have:

::

    exo.plidm.password.class=org.picketlink.idm.impl.credential.HashingEncoder
    exo.plidm.password.hash=MD5

.. _Configuration.TaskManagement:

===============
Task Management
===============

.. note:: The Task Management application is packaged as an add-on, so you
		  need to install it first. Refer to :ref:`this guide <ManageTasks>` for more details.

To define a default workflow for new projects in the Task Management
application, you can configure a property named
``exo.tasks.default.status`` via
:ref:`exo.properties <Configuration.ConfigurationOverview>` file.

For instance:

::

    exo.tasks.default.status=To Do, In Progress, Wait, Validate, Done

in which, each status in the workflow is separated by a comma.

.. _Configuration.FileStorage:

==========================
File storage configuration
==========================

With eXo Platform 4.4 version, a new file storage subsystem has been
introduced besides JCR. It's currently used for wiki attachments and
user and space profile pictures. Read more in :ref:`File Storage <Database.FileStorage>`. 
A property allows to indicate which file storage method should be used:

::

    exo.files.binaries.storage.type=fs

Setting ``exo.files.binaries.storage.type`` to **rdbms** means that
files will be stored as BLOBs in the database.

Setting ``exo.files.binaries.storage.type`` to **fs** means that files
will be stored on the server file system.

Other properties related to file storage can be configured in
:ref:`exo.properties <.Configuration.ConfigurationOverview>` file:

-  ``exo.commons.FileStorageCleanJob.expression=0 0 11 ? * SUN``:
   defines the scheduling (a cron expression) of the job responsible to
   clean unused files.

-  ``exo.commons.FileStorageCleanJob.retention-time=30``: defines how
   long unused files should be retained before deletion. It is set to 30
   days by default.

-  ``exo.commons.FileStorageCleanJob.enabled=true``: enables/disables
   the cron job. By default, the job is enabled i.e set to true.

-  In case you set ``exo.files.binaries.storage.type`` to **fs**, you
   can parameter the files storage location with this parameter:
   ``exo.files.storage.dir``. Its default value is set to
   **${exo.data.dir}/files**

   The directory ``exo.files.storage.dir`` **should be shared in cluster
   mode**.

.. _Configuration.ChatConfiguration:

==================
Chat Configuration
==================

Configuring the eXo Chat add-on can be done by creating a
``chat.properties`` file or using the ``exo.properties`` file (if you
have not created this file, see :ref:`Configuration Overview <Configuration.ConfigurationOverview>`).

These configuration files are located in:

-  ``$PLATFORM_TOMCAT_HOME/gatein/conf/`` for Tomcat.

-  ``$PLATFORM_JBOSS_HOME/standalone/configuration/gatein/`` for JBoss.

.. note:: You were asked to create the files for security during the setup. If
			you include any parameter below into the ``exo.properties``, you
			should add the prefix ``chat.`` to its name, such as
			``chat.dbServerHost``. Besides, in case both of these files are
			used, parameters in the ``exo.properties`` file will have higher
			priority than those in the ``chat.properties`` file.
			
.. _ChatDatabaseConf:			

Database
~~~~~~~~~~

+--------------------+--------------------+--------------------------------------+
| Parameter          | Default            | Description                          |
+====================+====================+======================================+
| ``dbServerType``   | *mongo*            | You should always use the default    |
|                    |                    | value. The other value, *embed*, is  |
|                    |                    | used for unit testing.               |
+--------------------+--------------------+--------------------------------------+
| ``dbServerHost``   | *localhost*        | The host name or IP of MongoDB.      |
+--------------------+--------------------+--------------------------------------+
| ``dbServerPort``   | *27017*            | The port number to connect to        |
|                    |                    | MongoDB host.                        |
+--------------------+--------------------+--------------------------------------+
| ``dbServerHosts``  |                    | The MongoDB nodes to connect to, as  |
|                    |                    | a comma-separated list of            |
|                    |                    | <host:port> values. For example      |
|                    |                    | "host1:27017,host2:27017,host3:27017 |
|                    |                    | ".                                   |
+--------------------+--------------------+--------------------------------------+
| ``dbName``         | *chat*             | Name of the Mongo database name.     |
+--------------------+--------------------+--------------------------------------+
| ``dbAuthentication | *false*            | Set it *true* if authentication is   |
| ``                 |                    | required to access MongoDB.          |
+--------------------+--------------------+--------------------------------------+
| ``dbUser``         | *EMPTY*            | Provide the username to access the   |
|                    |                    | database if authentication needed.   |
+--------------------+--------------------+--------------------------------------+
| ``dbPassword``     | *EMPTY*            | Provide the password to access the   |
|                    |                    | database if authentication needed.   |
+--------------------+--------------------+--------------------------------------+

.. warning:: It is highly recommended to define the parameter ``dbServerHosts``
			 instead of defining the two parameters ``dbServerHost`` and
			 ``dbServerPort`` as they are depracated starting from eXo Platform 5.0
			 version.

Generally, you do not need to configure those unless you have secured
your MongoDB. See details about connecting to secured MongoDB in
:ref:`Secured MongoDB <Security.MongoDBSecure>`.

.. _ChatMailServerConf:

Mail Server
~~~~~~~~~~~~

This server is used for *Sending meeting notes* (see :ref:`Recording a discussion <Recording>`). 
The parameters of mail configuration for the eXo Chat server are the 
same as those of :ref:`Outgoing Mail Service <OutgoingMailService>`, but
without the prefix ``exo.``. Notice that if you include these parameters
into the ``exo.properties`` file, you should add the prefix ``chat.`` to
their name.

.. _ChatServerConf:

Chat Server
~~~~~~~~~~~~

+--------------------+--------------------+--------------------------------------+
| Parameter          | Default            | Description                          |
+====================+====================+======================================+
| ````               | *false*            | The mode of the chat server:         |
|                    |                    |                                      |
|                    |                    | -  The parameter is set to true if   |
|                    |                    |    the chat is in a standalone mode. |
|                    |                    |                                      |
|                    |                    | -  The parameter is set to false if  |
|                    |                    |    the the chat is in embedded mode. |                              
+--------------------+--------------------+--------------------------------------+
| ``chatPassPhrase`` | *chat*             | The password to access REST service  |
|                    |                    | on the eXo Chat server.              |
+--------------------+--------------------+--------------------------------------+
| ``chatCronNotifCle | *0 0/60 \* \* \*   | The notifications are cleaned up     |
| anup``             | ?*                 | every one hour by default. To learn  |
|                    |                    | the syntax of Cron expression, see   |
|                    |                    | :ref:`Scheduled synchronization,     |
|                    |                    | Administrator                        |
|                    |                    | guide <ScheduledSynchronization>`    |
+--------------------+--------------------+--------------------------------------+
| ``teamAdminGroup`` | */platform/adminis | The eXo group who can create teams.  |
|                    | trators*           |                                      |
+--------------------+--------------------+--------------------------------------+
| ``chatReadDays``   | *30* (days)        | When a user reads a chat, the        |
|                    |                    | application displays messages of     |
|                    |                    | some days in the past.               |
+--------------------+--------------------+--------------------------------------+
| ``chatReadTotalJso | *200*              | The number of messages that you can  |
| n``                |                    | get in the Chat room.                |
+--------------------+--------------------+--------------------------------------+

.. _ChatClientUpdates:

Chat Client updates
~~~~~~~~~~~~~~~~~~~~

+--------------------+--------------------+--------------------------------------+
| Parameter          | Default            | Description                          |
+====================+====================+======================================+
| ``chatIntervalChat | *5000*             | Time interval to refresh messages in |
| ``                 | (milliseconds)     | a chat.                              |
+--------------------+--------------------+--------------------------------------+
| ``chatIntervalSess | *60000*            | Time interval to keep a chat session |
| ion``              | (milliseconds)     | alive in milliseconds.               |
+--------------------+--------------------+--------------------------------------+
| ``chatIntervalStat | *60000*            | Time interval to refresh user status |
| us``               | (milliseconds)     | in milliseconds.                     |
+--------------------+--------------------+--------------------------------------+
| ``chatIntervalNoti | *5000*             | Time interval to refresh             |
| f``                | (milliseconds)     | Notifications in the main menu in    |
|                    |                    | milliseconds.                        |
+--------------------+--------------------+--------------------------------------+
| ``chatIntervalUser | *60000*            | Time interval to refresh Users list  |
| s``                | (milliseconds)     | in milliseconds.                     |
+--------------------+--------------------+--------------------------------------+
| ``chatTokenValidit | *60000*            | Time after which a token will be     |
| y``                | (milliseconds)     | invalid. The use will then be        |
|                    |                    | considered *offline*.                |
+--------------------+--------------------+--------------------------------------+

.. _Configuration.lastlogintime:

=========================
Update of last login time
=========================

By default, eXo Platform persists the last login time information for each
user in an internal database. You may need to disable this parameter to
optimize login time especially when your system is highly solicited by a
lot of concurrent users. You can disable this feature by configuring the
parameter ``exo.idm.user.updateLastLoginTime`` in
:ref:`exo.properties <Configuration.ConfigurationOverview>`file.
The default value is set to true.

Setting ``exo.idm.user.updateLastLoginTime`` to true enables the update,
**in the IDM database**, of the last login time each time the user login
to eXo Platform.

Setting ``exo.idm.user.updateLastLoginTime`` to false disables the
update of the user's last login time and if the platform is connected to
an external system for users storage (such as LDAP or AD), the last
login time will be updated in this external system.



.. |image0| image:: images/gmail_settings_1.png
.. |image1| image:: images/openinoffice/openinmsoffice.png
.. |image2| image:: images/openinoffice/openinlibreoffice.png
.. |image3| image:: images/openinoffice/openinwriter.png
.. |image4| image:: images/docviewer/docviewer_maxsize.png
.. |image5| image:: images/docviewer/docviewer_maxpages.png
