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
    get familiar with the upgrade process between versions of eXo Platform 
    via the following topics:

    -  :ref:`Breaking Changes <Upgrade.BreakingChanges>`
       Breaking changes you should be aware about before starting the
       upgrade to 6.0 version.

    -  :ref:`Prerequisites <Upgrade.Prerequisites>`
       A list of things you need to do before the upgrade.

    -  :ref:`Upgrade process <Upgrade.Process>`
       How to upgrade from eXo Platform 5.3 to eXo Platform 6.0.

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
know before starting the upgrade to 6.0 version.


**Architecture changes**

The components architecture has changed in 6.0 version:

- ECMS, JCR, Forum and Calendar components are considered now as addons and are no more pre-installed in community edition.
- Forum addon has been deprecated and its support will be removed in future versions.
- JCR is not considered anymore as a basic component of the platform, and thus must be installed to be used.
- Chromattic library has been deleted from pre-packaged bundle.
- intranet site has been deprecated and moved to `exo-legacy-intranet <https://github.com/exoplatform/legacy-intranet>` addon 
- `integration <https://github.com/exoplatform/integration>` is not used since 6.0 anymore
- `platform <https://github.com/exoplatform/platform>` is not used since 6.0 anymore
- `doc-style <https://github.com/exoplatform/doc-style>` is not used since 6.0 anymore
- Layout management features has been moved to `exo-layout-management <https://github.com/exoplatform/layout-management>` addon
- Usage and development using `Juzu <http://juzuweb.org/>` framework has been deprecated


- Redefinition of ``sharedlayout.xml`` is no more applicable. To shared layout file is suffixed by site name: ``sharedlayout-<site-name>.xml`` (``sharedlayout-intranet.xml`` for example)

**Templates changes**



Some Groovy templates have been changed in eXo Platform 6.0, check
out the :ref:`complete list <Upgrade.BreakingChanges.Templates>`. If 
your custom extension overrides some Groovy templates, you must check 
if it has been changed, and update it if it is the case.


.. _Upgrade.BreakingChanges.Templates

Changed Templates
~~~~~~~~~~~~~~~~~~

This is the list of templates changed in eXo Platform 6.0.

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

-  Upgrade your data to eXo Platform 5.3 before proceeding to upgrade to 6.0.

-  Download eXo Platform 6.0 version.

-  Make sure that all required addons are installed (especially for: exo-jcr, exo-ecms, exo-wiki, exo-calendar and exo-forum).

-  Install ``exo-data-upgrade`` addon on eXo Platform 6.0 by using command line:

   .. code::
  
      ./addon install exo-data-upgrade

-  Perform one or more dry-run upgrade(s) to find out potential problems
   and estimate the upgrade time.

.. note:: The dry-run upgrade allows you to:

			-  Detect and handle issues to make sure they will not happen during the real upgrade.
			-  Estimate how long the upgrade will take in your production environment.
			-  Find out if you need to adjust anything to make your upgrade faster and more efficient.


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
maitenance version of 5.3 to 6.0. 
If you are on 5.1.1 version, you  should move into the 5.1.2 and then 
move to 6.0 version. However, if you still  insist on skipping versions, 
we strongly advise to read all upgrade notes of the versions you are 
skipping to see if your project is  impacted by any previous upgrade 
procedure.


**Upgrade to a new eXo Platform version**


1. Stop the old version of eXo Platform, in this case the 5.3 version.

2. Apply your customizations into eXo Platform 6.0.

   -  If you have changed the configuration properties via
      ``$PLATFORM_TOMCAT_HOME/gatein/conf/exo.properties`` you can update them to the same file in the new eXo 
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

6. Once the upgrade is done successfully, you can delete ``exo-data-upgrade`` addon:

   .. code::
  
      ./addon uninstall exo-data-upgrade


.. _Upgrade.BestPractices:

==============
Best practices
==============

Here are good ways you can follow during and after upgrading:

-  Monitor the server console/log file to be aware of the upgrade status
   or any issues during the upgrade. By default, eXo Platform records all
   information in ``$PLATFORM_TOMCAT_HOME/logs/platform.log``.

   A successful upgrade typically logs the followings:

   -  The first important message like:

      ::

          | INFO  | Start transparent upgrade framework [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>] 

   -  The list of activated plugins: 

      ::

          | INFO  | Proceed upgrade the plugin (async = true): name = PushNotificationSettingsUpgradePlugin from version 5.0.3 to 5.1.0 [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>] 

      ::

          | INFO  | Proceed upgrade the plugin (async = false): name = NodeTypeTemplateUpgradePlugin from version 5.0.3 to 5.1.0 [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>] 

      ::

          | INFO  | Proceed upgrade the plugin (async = false): name = MetadataTemplateUpgradePlugin from version 5.0.3 to 5.1.0 [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>] 

      ::

          | INFO  | Proceed upgrade the plugin (async = false): name = QueryUpgradePlugin from version 5.0.3 to 5.1.0 [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>] 

      ::

          | INFO  | Proceed upgrade the plugin (async = false): name = ScriptUpgradePlugin from version 5.0.3 to 5.1.0 [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>] 
      
      ::

          | INFO  | Proceed upgrade the plugin (async = false): name = WCMTemplateUpgradePlugin from version 5.0.3 to 5.1.0 [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>] 

      
      ::

          | INFO  | Proceed upgrade the plugin (async = false): name = UpgradeSecureJCRFoldersPlugin from version 5.0.3 to 5.1.0 [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>] 

   -  The message informing that the upgrade plugin execution is
      completed for each executed plugin:

      ::

          | INFO  | Upgrade of plugin PushNotificationSettingsUpgradePlugin completed. [o.e.c.upgrade.UpgradeProductService<pool-6-thread-1>] 
      ::

          | INFO  | Upgrade of plugin NodeTypeTemplateUpgradePlugin completed. [o.e.c.upgrade.UpgradeProductService<Catalina-startStop-1>] 
      

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
