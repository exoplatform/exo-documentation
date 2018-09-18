.. _whatsnew:

#################################
What's new in eXo Platform 5.1?
#################################


.. _FunctionalNovelties:

==================================
New features in eXo Platform 5.1?
==================================

Many great enhancements come up in eXo Platform 5.1. Thanks to eXo teams 
and Community members who participated by contributing ideas, discussing 
and voting for the new features.

**Chat UX and UI Improvement**

eXo Chat application was redesigned in order to:

- Make it easier to use 

- Facilitate the way to sort and filter discussions

A new Ux was also introduced for mobile users.

|image0|

**Leave Chat Room**


In addition to improving the Chat UI and UX, a new feature is added to
the 5.1 version: The possibility to the user to leave a chat room by 
himself.

|image1|

|image2|

**Mobile push notifications**

With the 5.1 version, you are instantly notified about news in your 
community through the mobile push notifications for Android and iOS 
mobile devives.

|image3|

|image4|

**Move "Connect" button to the profile banner**

The connect button has been moved in the profile banner same as for the 
Chat and Call buttons.
This move aims to facilitate user's connections from their profiles and 
also to facilitate the accept or deny request.

|image5|

|image6|

**Tasks permission**

Managing tasks permission is, henceforth, assigned to some roles such as:
The tasks project manager, the task's creator and the task's reporter.

**Share file improvement suggestion**

The "Add user" button is removed to make easier the file sharing. You 
just need to select users, the right to attribute and then share the 
file.

|image7|

**Welcome to my Wiki**

In the wiki application, no more generic message, you will have a 
welcome page having the location specification. For example, if you are 
in a personal wiki application, you will got this messge "Welcome to 
user's name wiki".

|image8|
 
If you are in a space's wiki, you will see the message "Welcome to 
space's name wiki".

|image9|


.. _TechnicalNovelties:

========================================
Technical novelties in eXo Platform 5.1
========================================

**Upgrades**

eXo Platform 5.1 now supports JBoss EAP 7.1. This new version comes with 
some `improvements <https://www.redhat.com/en/blog/red-hat-releases-jboss-eap-71>`__ 
and fixes some issues which impacted eXo Platform:

  -  "Remember me" token not recognized in Jboss EAP 7.0 (`PLF-7787 <https://jira.exoplatform.org/browse/PLF-7787>`__)
  
  -  Instance id of a cluster node is not added on the JSESSIONID cookie (`PLF-7854 <https://jira.exoplatform.org/browse/PLF-7854>`__)

**Performances and scalability**

In eXo Platform 5.1 we continued our effort on improving the performance 
and the scalability by changing some strategies, configurations and data 
storage:

-  Users/Groups/Roles import in database: a new job is implemented to 
   import IDM data  in IDM database asynchronously and periodically.
  
-  Smarter data user synchronization: only mandatory data are imported 
   in database during synchronization, other user's data are imported on 
   login or when it is required (lazy import).
  
**Migrations**

-  As cited in the previous section, eXo Chat has a new design. 
   Moreover, from a technical point of view, it has been implemented 
   using a new frontend framework (Vue.js).

-  Chat favorites data has also been changed. An upgrade plugin runs on 
   eXo Platform 5.1 startup to migrate existing data to the new format.

**Some others Improvements**

-  Harmonize cache configuration in cluster and local modes.

-  Improve Mbean cache naming: All caches are now named with the 
   following pattern: ``<project>.<cacheName>``

-  ``cluster.node.name`` parameter automatically generated when not set.

-  ``upgrade.properties file`` is not needed anymore, upgrade plugins 
   are automatically triggered.



.. |image0| image:: images/Chat-UI-UX.png
.. |image1| image:: images/Leave-room.png
.. |image2| image:: images/Leave-room-2.png
.. |image3| image:: images/mobile-push1.png
.. |image4| image:: images/mobile-push2.png
.. |image5| image:: images/Connect-button1.png
.. |image6| image:: images/Connect-button2.png
.. |image7| image:: images/Share-file.png
.. |image8| image:: images/usersWiki.png
.. |image9| image:: images/spaceWiki.png
