.. _Upgrade:

########
Upgrade
########


    eXo Platform aims at providing a transparent upgrade experience so that
    the upgrade to a newer version is seamless for an administrator.

    As eXo Platform makes changes between versions, it is sometimes required
    to run some routines that will alter data. For that purpose, eXo Platform
    provides a service dedicated to it, called the **Upgrade Service**.
    This generic framework can detect a version change and identify
    which upgrade routines to be executed.

    Since the framework leverages the eXo plugins mechanism, eXo Platform
    refers to these routines as **upgrade plugins**. At startup, eXo Platform
    will load and execute the upgrade plugins identified by the
    **Upgrade Service**.

    This chapter outlines requirements before the upgrade and helps you
    get familiar with the upgrade process between versions of eXo Platform 5
    via the following topics:

    -  :ref:`Breaking Changes <Upgrade.BreakingChanges>`
       Breaking changes you should be aware about before starting the
       upgrade to 5.1 version.

    -  :ref:`Prerequisites <Upgrade.Prerequisites>`
       A list of things you need to do before the upgrade.

    -  :ref:`Upgrade process <Upgrade.Process>`
       How to upgrade from eXo Platform 5.0 to eXo Platform 5.1.

    -  :ref:`Best practices <Upgrade.BestPractices>`
       Some tips that help you monitor the upgrade.

    -  :ref:`Upgrading add-ons <Upgrade.Addons>`
       Common steps for upgrading your add-ons along with the new
       Platform version.


.. _Upgrade.BreakingChanges:

================
Breaking Changes
================

In this section, we will present all the breaking changes you should
know before starting the upgrade to 5.1 version.


**JBoss EAP upgrade**

JBoss EAP 7.1 version is used in eXo Platform 5.1.

The main change coming with this version is that it uses new security 
framework WildFly Elytron and it provides support for HTTP/2.

You can find
`here <https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.1/html-single/migration_guide/index>`__,
a full documentation about the upgrade to JBoss EAP 7.1.


**Templates changes**

Some Groovy templates have been changed in eXo Platform 5.1, check
out the :ref:`complete list <Upgrade.BreakingChanges.Templates>`. If 
your custom extension overrides some Groovy templates, you must check 
if it has been changed, and update it if it is the case.


.. _Upgrade.BreakingChanges.Templates

Changed Templates
~~~~~~~~~~~~~~~~~~

This is the list of templates changed in eXo Platform 5.1.

**SOCIAL**

-  ``extension/notification/src/main/webapp/WEB-INF/intranet-notification/templates/PostActivitySpaceStreamPlugin.gtmpl``

-  ``extension/war/src/main/webapp/groovy/social/webui/activity/UIDefaultActivity.gtmpl``

-  ``extension/war/src/main/webapp/groovy/social/webui/activity/UISpaceActivity.gtmpl``

-  ``extension/war/src/main/webapp/groovy/social/webui/activity/UIUserActivitiesForRelationShip.gtmpl``

-  ``extension/war/src/main/webapp/groovy/social/webui/activity/UIUserActivitiesForSpace.gtmpl``

-  ``extension/war/src/main/webapp/groovy/social/webui/activity/UIUserProfileActivity.gtmpl``

-  ``extension/war/src/main/webapp/groovy/social/webui/activity/plugin/UIRelationshipActivity.gtmpl``

-  ``extension/war/src/main/webapp/groovy/social/webui/connections/UIAllPeople.gtmpl``

-  ``extension/war/src/main/webapp/groovy/social/webui/connections/UIInvitations.gtmpl``

-  ``extension/war/src/main/webapp/groovy/social/webui/connections/UIMyConnections.gtmpl``

-  ``extension/war/src/main/webapp/groovy/social/webui/connections/UIPendingRelation.gtmpl``

-  ``extension/war/src/main/webapp/groovy/social/webui/profile/UIDisplayProfileList.gtmpl``

-  ``extension/war/src/main/webapp/groovy/social/webui/space/UISpaceMember.gtmpl``

-  ``extension/war/src/main/webapp/groovy/social/webui/space/UISpaceMenu.gtmpl``

-  ``extension/war/src/main/webapp/groovy/social/webui/space/UISpacePermission.gtmpl``

-  ``webapp/portlet/src/main/webapp/groovy/social/portlet/UIMembersPortlet.gtmpl``

**ECMS**

-  ``apps/portlet-explorer/src/main/webapp/groovy/webui/component/explorer/control/UIActionBar.gtmpl``

**CALENDAR**

-  ``calendar-webapp/src/main/webapp/templates/calendar/webui/UIPopup/UIGroupCalendarTab.gtmpl``

-  ``calendar-webapp/src/main/webapp/templates/calendar/webui/UIPopup/UIRemoteCalendar.gtmpl``

**INTEGRATION**

-  ``integ-calendar/integ-calendar-social/src/main/resources/groovy/cs/social-integration/plugin/space/CalendarUIActivity.gtmpl``

-  ``integ-ecms/integ-ecms-social/src/main/resources/groovy/ecm/social-integration/UISharedContent.gtmpl``

-  ``integ-ecms/integ-ecms-social/src/main/resources/groovy/ecm/social-integration/UISharedFile.gtmpl``

-  ``integ-ecms/integ-ecms-social/src/main/resources/groovy/ecm/social-integration/plugin/link/UILinkActivity.gtmpl``

-  ``integ-ecms/integ-ecms-social/src/main/resources/groovy/ecm/social-integration/plugin/space/ContentUIActivity.gtmpl``

-  ``integ-ecms/integ-ecms-social/src/main/resources/groovy/ecm/social-integration/plugin/space/FileUIActivity.gtmpl``

-  ``integ-forum/integ-forum-social/src/main/resources/groovy/forum/social-integration/plugin/space/ForumUIActivity.gtmpl``

-  ``integ-forum/integ-forum-social/src/main/resources/groovy/forum/social-integration/plugin/space/PollUIActivity.gtmpl``

-  ``integ-social/integ-social-ecms/src/main/resources/groovy/social/plugin/doc/UIDocActivity.gtmpl``

-  ``integ-wiki/integ-wiki-social/src/main/resources/groovy/wiki/social-integration/plugin/space/WikiUIActivity.gtmpl``

**PLATFORM**

-  ``extension/portlets/platformNavigation/src/main/webapp/groovy/platformNavigation/portlet/UINotificationPopoverToolbarPortlet/UINotificationPopoverToolbarPortlet.gtmpl``

-  ``extension/webapp/src/main/webapp/groovy/portal/webui/workspace/UIPortalApplication.gtmpl``

**ANSWERS**

-  ``integration/src/main/resources/groovy/forum/social-integration/plugin/space/AnswerUIActivity.gtmpl``

**CHAT-APPLICATION**

-  ``application/src/main/java/org/exoplatform/chat/portlet/chat/templates/index.gtmpl``

-  ``application/src/main/java/org/exoplatform/chat/portlet/notification/templates/index.gtmpl``

-  ``application/src/main/java/org/exoplatform/chat/portlet/statistics/templates/index.gtmpl``

**TASK**

-  ``integration/src/main/resources/groovy/TaskMenuItem.gtmpl``

-  ``integration/src/main/resources/groovy/TaskPopup.gtmpl``

-  ``task-management/src/main/java/org/exoplatform/task/management/templates/confirmCloneTask.gtmpl``

-  ``task-management/src/main/java/org/exoplatform/task/management/templates/detail.gtmpl``

-  ``task-management/src/main/java/org/exoplatform/task/management/templates/index.gtmpl``

-  ``task-management/src/main/java/org/exoplatform/task/management/templates/taskListView.gtmpl``

-  ``task-management/src/main/webapp/WEB-INF/notification/templates/push/TaskAssignPlugin.gtmpl``

-  ``task-management/src/main/webapp/WEB-INF/notification/templates/push/TaskCommentPlugin.gtmpl``

-  ``task-management/src/main/webapp/WEB-INF/notification/templates/push/TaskCompletedPlugin.gtmpl``

-  ``task-management/src/main/webapp/WEB-INF/notification/templates/push/TaskCoworkerPlugin.gtmpl``

-  ``task-management/src/main/webapp/WEB-INF/notification/templates/push/TaskDueDatePlugin.gtmpl``

-  ``task-management/src/main/webapp/WEB-INF/notification/templates/push/TaskMentionPlugin.gtmpl``

.. _Upgrade.Prerequisites:

=============
Prerequisites
=============

Before the upgrade, you need to:

-  Back up data, as described in :ref:`Backup and Restore <Backup>`, 
   before upgrading. In case anything turns badly, your data is safe and 
   you can start over.

-  Back up customizations (including configuration, deployed extensions
   and applications) that you plan to reuse in the new version.

-  Download eXo Platform 5.1 version.

-  The configuration properties for caches have been changed for eXo 
   Platform 5.1 in order to harmonize them and use the same name in 
   standalone and cluster modes. You should then update cache properties
   in the new server. Please refer to this :ref:`documentation <Configuration.CacheConfiguration>`
   for get the list of cache names.

-  Perform one or more dry-run upgrade(s) to find out potential problems
   and estimate the upgrade time.

.. note:: The dry-run upgrade allows you to:

			-  Detect and handle issues to make sure they will not happen during the real upgrade.
			-  Estimate how long the upgrade will take in your production environment.
			-  Find out if you need to adjust anything to make your upgrade faster and more efficient.


.. tip:: JBoss EAP was upgraded to 7.1 version to benefit from its last updates and improvements.
		 You can check changelogs `for JBOSS <https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.1/html/7.1.0_release_notes/index>`__.


.. _Upgrade.Process:

===============
Upgrade process
===============

.. note:: When you upgrade to eXo Platform, notice that default password 
		  encryption algorithm has changed so you need to reconfigure it 
		  back to the one that you used before, otherwise old users will 
		  not be able to log in. See details in :ref:`Password Encryption <PasswordEncryption>`.

The upgrade procedure is only guaranteed and tested to be transparent
from the previous maintenance version (x.y.z from x.y.z-1). So, we
recommend to apply upgrade procedures for all versions between your
current one and the target one. In this case it is from the latest 
maitenance version of 5.0 to 5.1. 
If you are on 5.0.1 version, you  should move into the 5.0.2 then to 
5.0.3 then to 5.0.4 and then move to 5.1 version. However, if you still 
insist on skipping versions, we strongly advise to read all upgrade 
notes of the versions you are skipping to see if your project is 
impacted by any previous upgrade procedure.


**Upgrade to a new eXo Platform version**

**For Tomcat and JBoss packages**

1. Stop the old version of eXo Platform, in this case the 5.0 version.

2. Apply your customizations into eXo Platform 5.1.

   -  If you have changed the configuration properties via
      ``$PLATFORM_TOMCAT_HOME/gatein/conf/exo.properties`` (Tomcat) or
      ``$PLATFORM_JBOSS_HOME/standalone/configuration/gatein/exo.properties``
      (JBoss), you can update them to the same file in the new eXo 
      Platform version.

   -  If you use a populated organizational data source (such as LDAP),
      activate the Organization Integration Service so that the data is
      synchronized. See :ref:`Synchronization <LDAP.Synchronization>` 
      for more details.

3. Configure the JCR and IDM databases. Refer to :ref:`Database <Database>`
   for more details.

4. Configure the **EXO\_DATA\_DIR** variable. Refer to :ref:`Data directory configuration <Configuration.DataDirectory>`
   for more details.

5. Start the eXo Platform server. The upgrade will be run automatically. 
   The startup is successful when you see a message like **INFO \| Server startup in XXXX ms**.

6. Stop the server.

7. Remove or rename the ``upgrade.properties`` in Step 5. This is to 
   avoid running the upgrade again for next time.

8. Restart the server, then do some tests on the upgraded version. See
   :ref:`Best practices <Upgrade.BestPractices>` for more details.

.. note::-  eXo Platform 5.1 version requires the version 5.6.9 of
            Elasticsearch, you should `upgrade <https://www.elastic.co/guide/en/elasticsearch/reference/5.6/setup-upgrade.html>`__
            to this version.
		    eXo Platform is shipped with an embedded version of Elasticsearch which **automatically starts** when eXo Platform starts. 
		    You can deactivate it through `Elasticsearch Configuration <Configuration.ElasticSearch>`.
			This embedded Elasticsearch instance is recommended for development and test but not for production.

			For production it is recommended to run a standalone Elasticsearch cluster (please refer to :ref:`Elasticsearch documentation <#PLFAdminGuide.ElasticsearchElasticsearch>`
			for more details). In order to use a standalone Elasticsearch cluster, some properties must be defined in
			:ref:`exo.properties <Configuration.ConfigurationOverview>`. Please refer to :ref:`Elasticsearch Configuration <Configuration.ElasticSearch>`
			for more details.


.. _Upgrade.BestPractices:

==============
Best practices
==============

Here are good ways you can follow during and after upgrading:

-  Monitor the server console/log file to be aware of the upgrade status
   or any issues during the upgrade. By default, PRODUCT records all
   information in ``$PLATFORM_TOMCAT_HOME/logs/platform.log`` (in
   Tomcat), ``$PLATFORM_JBOSS_HOME/standalone/log/server.log`` (in
   JBoss).

   A successful upgrade typically logs the followings:

   -  The first important message like:

      ::

          | INFO  | Start transparent upgrade framework [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>] 

   -  The list of activated plugins: five upgrade plugins exist between
      5.0.2 version to 5.1.

      ::

          | INFO  | Proceed upgrade the plugin (async = false): name = FavoriteActionUpgradePlugin from version 5.0.2 to 5.1.0 [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>] 

      ::

          | INFO  | Proceed upgrade the plugin (async = false): name = SpaceMemberAnyMembershipUpgradePlugin from version 5.0.2 to 5.1.0 [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>] ]

      ::

          | INFO  | Proceed upgrade the plugin (async = false): name = EnableUserUpgradePlugin from version 5.0.2 to 5.1.0 [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>] ]

      ::

          | INFO  | Proceed upgrade the plugin (async = true): name = FileESMigration from version 5.0.2 to 5.1.0 [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>]  ]

      ::

          | INFO  | Proceed upgrade the plugin (async = false): name = UpgradeDefaultSkin from version 5.0.2 to 5.1.0 [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>] ]

   -  The message informing that the upgrade plugin execution is
      completed:

      ::

          | INFO  | Upgrade of plugin FavoriteActionUpgradePlugin completed. [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>] ]

      ::

          | INFO  | Upgrade of plugin SpaceMemberAnyMembershipUpgradePlugin completed. [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>]]]

      ::

          | INFO  | Upgrade of plugin EnableUserUpgradePlugin completed. [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>] ]]

      ::

          | INFO  | Upgrade of plugin FileESMigration completed. [o.e.c.upgrade.UpgradeProductService<pool-6-thread-1>]]]

      ::

          | INFO  | Upgrade of plugin UpgradeDefaultSkin completed. [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>] ]]

   -  Logs related to notifications migration from JCR to JPA:

      -  Notifications data migration (Web and mail notications):

         ::

             | INFO  | === Start migration of Web Notifications data from JCR [o.e.c.m.WebNotificationsMigration<COMMONS-RDBMS-MIGRATION>]  ] 

         ::

             | INFO  | === Start migration of Mail Notifications data from JCR [o.e.c.m.MailNotificationsMigration<COMMONS-RDBMS-MIGRATION>] ] ] 

      -  Notifications data migration end:

         ::

             | INFO  | === Migration of Web Notification data done in 11139 ms [o.e.c.m.WebNotificationsMigration<COMMONS-RDBMS-MIGRATION>] ] 

         ::

             | INFO  | === Migration of Mail Notification data done in 4507 ms [o.e.c.m.MailNotificationsMigration<COMMONS-RDBMS-MIGRATION>]  ] ] 

      -  Notifications JCR data cleaning start:

         ::

             | INFO  | === Start Cleaning Web Notifications data from JCR [o.e.c.m.WebNotificationsMigration<COMMONS-RDBMS-MIGRATION>]  ] ] 

         ::

             | INFO  | === Start cleaning Mail notifications data from JCR [o.e.c.m.MailNotificationsMigration<COMMONS-RDBMS-MIGRATION>]  ] ] 

      -  Notifications JCR data cleaning end:

         ::

             | INFO  | === Web notifications JCR data cleaning due to RDBMS migration done in 590 ms [o.e.c.m.WebNotificationsMigration<COMMONS-RDBMS-MIGRATION>] ] ] 

         ::

             | INFO  | === Mail notifications JCR data cleaning due to RDBMS migration done in 1815 ms [o.e.c.m.MailNotificationsMigration<COMMONS-RDBMS-MIGRATION>] ] ] 

   -  Logs related to settings migration from JCR to JPA:

      -  Settings data migration start:

         ::

             | INFO  | === Start migration of Global Settings data from JCR to RDBMS [o.e.commons.migration.SettingsMigration<Catalina-startStop-1>] ] ] 

         ::

             | INFO  | === Start migration of User Settings data from JCR [o.e.commons.migration.SettingsMigration<Catalina-startStop-1>] ] ] 

      -  Settings data migration end:

         ::

             | INFO  | Global Settings data migrated in 4137 ms [o.e.commons.migration.SettingsMigration<Catalina-startStop-1>]] ] 

         ::

             | INFO  | User Settings data migrated in 4574 ms [o.e.commons.migration.SettingsMigration<Catalina-startStop-1>] ] ] 

      -  Settings JCR data cleaning start:

         ::

             | INFO  | === Start cleaning Global Settings data from JCR [o.e.commons.migration.SettingsMigration<COMMONS-RDBMS-MIGRATION>]  ] ] 

         ::

             | INFO  | === Start cleaning User Settings data from JCR [o.e.commons.migration.SettingsMigration<COMMONS-RDBMS-MIGRATION>] ] ] 

      -  Settings JCR data cleaning end:

         ::

             | INFO  | === Global Settings JCR data cleaning due to RDBMS migration done in 351 ms [o.e.commons.migration.SettingsMigration<COMMONS-RDBMS-MIGRATION>] ] ] 

         ::

             | INFO  | === User Settings JCR data cleaning due to RDBMS migration done in 182 ms [o.e.commons.migration.SettingsMigration<COMMONS-RDBMS-MIGRATION>] ] ] 

   -  The progression of the execution of the upgrade plugin
      **SpaceMemberAnyMembershipUpgradePlugin**:

      -  Membership migration:

         ::

             | INFO  | === Start IDM Membership '*'  to Space Entity migration [o.e.s.c.j.u.SpaceMemberAnyMembershipUpgradePlugin<Catalina-startStop-1>] ] ] 

      -  Consistency check for spaces:

         ::

             | INFO  | === End of consistency check of space members in 412ms. No inconsistency detected. Total scanned spaces count = 1 [o.e.s.c.j.u.SpaceMemberAnyMembershipUpgradePlugin<Catalina-startStop-1>] ] ] 

   -  The progression of the execution of the upgrade plugin
      **FileESMigration**:

      -  Information about the number of files to index:

         ::

             | INFO  | == Files ES migration - Number of files to index : 19 [o.e.services.wcm.search.FileESMigration<pool-6-thread-1>] ] ] 

      -  Start pushing files:

         ::

              | INFO  | == Files ES migration - Starting pushing all files in indexation queue [o.e.services.wcm.search.FileESMigration<pool-6-thread-1>]  ] ] 

      -  End pushing files:

         ::

              | INFO  | == Files ES migration - Push of all files in indexation queue done [o.e.services.wcm.search.FileESMigration<pool-6-thread-1>]   ] ] 

      -  Start JCR reindexation (by repository):

         ::

             | INFO  | == Files ES migration - Reindexation of JCR collaboration workspace done [o.e.services.wcm.search.FileESMigration<HotReindexing-repository-collaboration>]  ] ] 

         ::

             | INFO  | == Files ES migration - Reindexation of JCR system workspace done [o.e.services.wcm.search.FileESMigration<HotReindexing-repository-system>]  ] ] 

      -  End of JCR reindexation (by repository):

         ::

             | INFO  | == Files ES migration - Starting reindexation of JCR collaboration workspace [o.e.services.wcm.search.FileESMigration<pool-6-thread-1>] ] ] 

         ::

             | INFO  | == Files ES migration - Starting reindexation of JCR system workspace [o.e.services.wcm.search.FileESMigration<pool-6-thread-1>] ] ] 

   -  A message informing the successful startup:

      ::

          | INFO  | Server startup in 102839 ms [org.apache.catalina.startup.Catalina<main>] 

-  Check the PRODUCT version via the REST service
   (`http://[your\_server]:[your\_port]/rest/platform/info <http://[your_server]:[your_port]/rest/platform/info>`__),
   for example: **"platformVersion":"5.1.0"**.

   Or, you can see the new version in the footer of Login page as
   follows:

   |image0|

-  Log in and check some functions, components and customizations to see
   if they are working correctly.

.. _Upgrade.Addons:

=================
Upgrading add-ons
=================

After upgrading Platform, you have to re-install your add-ons and
re-configure them.

**Check the version.**

The old add-on version might be compatible with the new Platform
version, or not, so it is recommended you always install newer
compatible version if any.

Before installing an add-on, you can use ``describe`` command to check
its versions. The command usage is documented
:ref:`here <AddonsManagement.Describing>`.

You can also find the compatibility information at `this
page <https://www.exoplatform.com/supported-environments>`__.

**Check the configuration.**

If the add-on version does not change, typically you just need to copy
the old configuration. Otherwise you are recommended to check :ref:`Add-ons Guide <eXoAddonsGuide>` 
for configuration changes.

**Check if any extra upgrade step required.**


.. |image0| image:: images/login_page_version.png
