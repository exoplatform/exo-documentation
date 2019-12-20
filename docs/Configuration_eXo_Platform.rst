.. _Configuration_eXo_Platform:

###############
Configurations
###############

    This chapter describes configurations used in eXo Platform via the
    following main sections:

    -  :ref:`Components <PLFRefGuide.Configurations.Components>`

       Information about configurations of eXo Platform's main
       components, including Social, Content, Wiki, Forum, Answer and
       Poll.

    -  :ref:`External Component  Plugins <PLFRefGuide.Configurations.ExternalComponentPlugins>`

       Information about configurations of eXo Platform's main external
       component plugins, such as what these plugins are for, and how to
       configure them.
       
.. _PLFRefGuide.Configurations.Components:

==========
Components
==========

This section consists of the following main topics:

-  :ref:`Social components <PLFRefGuide.Configurations.Components.Social>`

   Information about Social services configurations which provide
   low-level functionality for UI components.

-  :ref:`Wiki components <PLFRefGuide.Configurations.Components.Wiki>`

   Information about Wiki services configurations which provide
   low-level functionality for UI components.

-  :ref:`Content components <PLFRefGuide.Configurations.Components.Content>`

   Information about Content services which provide low-level
   functionality for UI components.

-  :ref:`Calendar service <PLFRefGuide.Configurations.Components.CalendarService>`

   Information about CalendarService which is used to configure
   Calendar.

-  :ref:`Forum components <PLFRefGuide.Configurations.Components.Forum>`

   Description of Forum components and their data type.

-  :ref:`Answers components <PLFRefGuide.Configurations.Components.Answers>`

   Description of Answers components and their data types.

-  :ref:`Profile contact provider <PLFRefGuide.Configurations.Components.ProfileContactProvider>`

   How to configure the profile contact provider which is used to
   retrieve user profile.

-  :ref:`Poll components <PLFRefGuide.Configurations.Components.Poll>`

   Details of Poll components and their data types.

.. _PLFRefGuide.Configurations.Components.Social:

Social components
~~~~~~~~~~~~~~~~~~

This section describes Social services which provide low-level
functionality for UI components. These services are:

-  :ref:`Space Service <PLFRefGuide.Configurations.Components.Social.SpaceService>`

   This service is used for spaces management, including creating spaces.

-  :ref:`Space Template Service <PLFRefGuide.Configurations.Components.Social.SpaceTemplateService>`

   This service is used for space templates management, including creating
   space templates, extending space templates, and installing applications.

-  :ref:`LifeCycle Completion Service <PLFRefGuide.Configurations.Components.Social.LifeCycleCompletionService>`

   This component is used to process the callable request out of the
   HTTP request.

-  :ref:`Rest Portal Container Name Config <PLFRefGuide.Configurations.Components.Social.RestPortalContainerNameConfig>`

   This plugin is used to set the portal container name used for REST
   service.

-  :ref:`Link Provider <PLFRefGuide.Configurations.Components.Social.LinkProvider>`

   This service is used to provide the utility to get the URLs of the
   activities, profiles, spaces, avatars and more.

-  :ref:`Activity Manager <PLFRefGuide.Configurations.Components.Social.ActivityManager>`

   This component provides Social activity APIs.

-  :ref:`Relationship Manager <PLFRefGuide.Configurations.Components.Social.RelationshipManager>`

   This component provides Social relationship APIs.

-  :ref:`Identity Manager <PLFRefGuide.Configurations.Components.Social.IdentityManager>`

   This component provides Social identity APIs.

-  :ref:`l18N Activity Processor <PLFRefGuide.Configurations.Components.Social.I18NActivityProcessor>`

   This component is used to process the localization of activity
   content.

-  :ref:`Router <PLFRefGuide.Configurations.Components.Social.Router>`

   This component is used to get a requested URL part.

.. _PLFRefGuide.Configurations.Components.Social.SpaceService:

Space Service
--------------


The service is used for spaces management, including creating spaces.

**Sample configuration**:

.. code:: xml

    <component>
      <key>org.exoplatform.social.core.space.spi.SpaceService</key>
      <type>org.exoplatform.social.core.space.impl.SpaceServiceImpl</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Social.SpaceTemplateService:

Space Template Service
--------------


The service is used for space templates management, including creating space templates, extending space templates
and installing applications. See
:ref:`Managing Space Templates <SpaceTemplates>`

**Sample configuration**:

.. code:: xml

    <component>
        <key>org.exoplatform.social.core.space.spi.SpaceTemplateService</key>
        <type>org.exoplatform.social.core.space.impl.SpaceTemplateServiceImpl</type>
        <init-params>
          <value-param>
            <name>defaultSpaceTemplate</name>
            <value>${exo.social.template.default:community}</value>
          </value-param>
        </init-params>
    </component>

+--------------------------+-------------------------------------------------------+
| Value-param              | Description                                           |
+==========================+=======================================================+
| **defaultSpaceTemplate** | Defines the default space template name.              |
+--------------------------+-------------------------------------------------------+


.. _PLFRefGuide.Configurations.Components.Social.LifeCycleCompletionService:

LifeCycle Completion Service
-----------------------------

This component is used to process the callable request out of the HTTP
request.

**Sample configuration**:

.. code:: xml

    <component>
        <key>org.exoplatform.social.common.lifecycle.LifeCycleCompletionService</key>
        <type>org.exoplatform.social.common.lifecycle.LifeCycleCompletionService</type>
        <init-params>
          <value-param>
            <name>thread-number</name>
            <value>10</value>
          </value-param>
          <value-param>
            <name>async-execution</name>
            <value>false</value>
          </value-param>
        </init-params>
    </component>

-  **Init-params**:

+-------------------+---------------+-------------+-------------------------------------------------------------------------+
| Name              | Type          | Value       | Description                                                             |
+===================+===============+=============+=========================================================================+
| thread-number     | ``integer``   | ``10``      | The maximum number of threads parallel executed.                        |
+-------------------+---------------+-------------+-------------------------------------------------------------------------+
| async-execution   | ``boolean``   | ``false``   | Specifies the running mode of service is synchronous or asynchronous.   |
+-------------------+---------------+-------------+-------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.Components.Social.RestPortalContainerNameConfig:
 
Rest Portal Container Name Config
-----------------------------------

This plugin is used to set the portal container name used for REST
service.

**Sample configuration**:

.. code:: xml

    <component>
        <key>org.exoplatform.social.opensocial.auth.RestPortalContainerNameConfig</key>
        <type>org.exoplatform.social.opensocial.auth.RestPortalContainerNameConfig</type>
        <init-params>
          <value-param>
            <name>rest-container-name</name>
            <value>portal</value>
          </value-param>
        </init-params>
    </component>

-  **Init-params**:

+---------------------------+--------------+--------------+------------------------------+
| Name                      | Type         | Value        | Description                  |
+===========================+==============+==============+==============================+
| **rest-container-name**   | ``String``   | ``portal``   | The portal container name.   |
+---------------------------+--------------+--------------+------------------------------+

.. _PLFRefGuide.Configurations.Components.Social.LinkProvider:
 
Link Provider
---------------

This service is used to provide the utility to get the URLs of the
activities, profiles, spaces, avatars and more.

**Sample configuration**:

.. code:: xml

    <component>
        <key>org.exoplatform.social.core.service.LinkProvider</key>
        <type>org.exoplatform.social.core.service.LinkProvider</type>
        <init-params>
            <value-param>
              <name>predefinedOwner</name>
              <description>this for generate profile link</description>
              <value>intranet</value>
            </value-param>
        </init-params>
    </component>

-  **Init-params**:

+-----------------------+--------------+----------------+----------------------------------+
| Name                  | Type         | Value          | Description                      |
+=======================+==============+================+==================================+
| **predefinedOwner**   | ``String``   | ``intranet``   | The default portal owner name.   |
+-----------------------+--------------+----------------+----------------------------------+

.. _PLFRefGuide.Configurations.Components.Social.ActivityManager:
 
Activity Manager
-----------------

This component provides Social activity APIs.

.. code:: xml

      <component>
        <key>org.exoplatform.social.core.manager.ActivityManager</key>
        <type>org.exoplatform.social.core.manager.ActivityManagerImpl</type>
      </component>

.. _PLFRefGuide.Configurations.Components.Social.RelationshipManager:
 
Relationship Manager
---------------------

This component provides Social relationship APIs.

.. code:: xml

      <component>
        <key>org.exoplatform.social.core.manager.RelationshipManager</key>
        <type>org.exoplatform.social.core.manager.RelationshipManagerImpl</type>
      </component>
 
.. _PLFRefGuide.Configurations.Components.Social.IdentityManager:

Identity Manager
------------------

This component provides Social identity APIs.

.. code:: xml

    <component>
        <key>org.exoplatform.social.core.manager.IdentityManager</key>
        <type>org.exoplatform.social.core.manager.IdentityManagerImpl</type>
      </component>
 
.. _PLFRefGuide.Configurations.Components.Social.I18NActivityProcessor:

I18N Activity Processor
------------------------

This component is used to process the localization of activity content.

.. code:: xml

    <component>
      <key>org.exoplatform.social.core.processor.I18NActivityProcessor</key>
      <type>org.exoplatform.social.core.processor.I18NActivityProcessor</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Social.Router:

Router
--------

This component is used to get a requested URL part.

.. code:: xml

    <component>
        <key>org.exoplatform.social.common.router.ExoRouter</key>
        <type>org.exoplatform.social.common.router.ExoRouter</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Wiki:

Wiki components
~~~~~~~~~~~~~~~~


This section describes services which provide low-level functionality
for the UI components. These services are:

-  :ref:`Diff Service <PLFRefGuide.Configurations.Components.Wiki.DiffService>`

   This service shows the differences between the page versions.

-  :ref:`Page Rendering Cache Service <PLFRefGuide.Configurations.Components.Wiki.PageRenderingCacheService>`

   This service is used to cache the Wiki page content.

-  :ref:`Resize Image Service <PLFRefGuide.Configurations.Components.Wiki.ResizeImageService>`

   This service is used to resize images added to a Wiki page.

-  :ref:`Rendering Service <PLFRefGuide.Configurations.Components.Wiki.RenderingService>`

   This service is used to render content from one syntax to another
   syntax.

-  :ref:`Wiki Rest Service <PLFRefGuide.Configurations.Components.Wiki.WikiRestService>`

   This service is used to provide Wiki data like Wiki tree data, list
   of Spaces, and more.

-  :ref:`Wiki Service <PLFRefGuide.Configurations.Components.Wiki.WikiService>`

   This service is used to configure the Wiki.

.. _PLFRefGuide.Configurations.Components.Wiki.DiffService:

Diff Service
-------------

The **DiffService** service is used to show the differences between the
page versions. The configuration of this service is found in
``wiki-service/src/main/resources/conf/portal/configuration.xml``:

**Sample configuration**:

.. code:: xml

    <component>
        <key>org.exoplatform.wiki.service.diff.DiffService</key>
        <type>org.exoplatform.wiki.service.diff.DiffService</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Wiki.PageRenderingCacheService:

Page Rendering Cache Service
------------------------------

The **PageRenderingCacheService** service is used to cache the Wiki page
content. The configuration of this component is found in
``wiki-service/src/main/resources/conf/portal/configuration.xml``:

**Sample configuration**:

.. code:: xml

    <component>
        <key>org.exoplatform.wiki.rendering.cache.PageRenderingCacheService</key>
        <type>org.exoplatform.wiki.rendering.cache.impl.PageRenderingCacheServiceImpl</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Wiki.ResizeImageService:

Resize Image Service
---------------------


The **ResizeImageService** service is used to resize images added to a
Wiki page. The configuration of this service is found in
``wiki-service/src/main/resources/conf/portal/configuration.xml``:

**Sample configuration**:

.. code:: xml

    <component>
        <key>org.exoplatform.wiki.service.image.ResizeImageService</key>
        <type>org.exoplatform.wiki.service.image.impl.ResizeImageServiceImpl</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Wiki.RenderingService:

Rendering Service
------------------

The **RenderingService** service is used to render content from one
syntax to another syntax. The configuration of this service is found in
``wiki-service/src/main/resources/conf/portal/configuration.xml``:

**Sample configuration**:

.. code:: xml

    <component>
        <key>org.exoplatform.wiki.rendering.RenderingService</key>
        <type>org.exoplatform.wiki.rendering.impl.RenderingServiceImpl</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Wiki.WikiRestService:

Wiki Rest Service
------------------

The **WikiRestService** service is used to provide Wiki data, such as
Wiki tree data, or list of Spaces. The configuration of this service is
found in
``wiki-service/src/main/resources/conf/portal/configuration.xml``:

.. code:: xml

    <component>
        <key>org.exoplatform.wiki.service.WikiRestService</key>
        <type>org.exoplatform.wiki.service.impl.WikiRestServiceImpl</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Wiki.WikiService:

Wiki Service
-------------

The **WikiService** service is used to configure the Wiki. When this
configuration file is executed, the component named
``org.exoplatform.wiki.service.impl.WikiServiceImpl`` will process
actions of Wiki. The configuration of this service is found in
``wiki-service/src/main/resources/conf/portal/configuration.xml``:

**Sample configuration**:

.. code:: xml

    <component>
        <key>org.exoplatform.wiki.service.WikiService</key>
        <type>org.exoplatform.wiki.service.impl.WikiServiceImpl</type>
        <init-params>
          <values-param>
            <name>xwiki/2.0</name>
            <value>jar:/wikisyntax/help/xWiki2.0_Short.txt</value>
            <value>jar:/wikisyntax/help/xWiki2.0_Full.txt</value>
          </values-param>
          <properties-param>
            <name>preferences</name>
            <property name="defaultSyntax" value="xwiki/2.0"/>
          </properties-param>
        </init-params>
    </component>

**Init-params**

+-----------------+-------------------+-------------------------------------------------------------------------------------------+----------------------------------+
| Name            | Type              | Value                                                                                     | Description                      |
+=================+===================+===========================================================================================+==================================+
| **xwiki/2.0**   | ``String list``   | ``jar:/wikisyntax/help/xWiki2.0_Short.txt``, ``jar:/wikisyntax/help/xWiki2.0_Full.txt``   | The list of Syntax Help files.   |
+-----------------+-------------------+-------------------------------------------------------------------------------------------+----------------------------------+

**Properties-param**

+---------------------+--------------+-----------------+---------------------------------------------+
| Property name       | Type         | Value           | Description                                 |
+=====================+==============+=================+=============================================+
| ``defaultSyntax``   | ``String``   | ``xwiki/2.0``   | The default syntax which is used in Wiki.   |
+---------------------+--------------+-----------------+---------------------------------------------+

.. _PLFRefGuide.Configurations.Components.Content:

Content components
~~~~~~~~~~~~~~~~~~~

This section describes Content services which provide low-level
functionality for UI components. These services are classified into the
following groups:

-  :ref:`Actions <PLFRefGuide.Configurations.Components.Content.Actions>`

   This section represents the components related to managing Content
   actions and scripts in eXo Platform.

-  :ref:`Content arrangement <PLFRefGuide.Configurations.Components.Content.ContentArrangement>`

   This section describes services related arranging content in eXo
   Platform, consisting of Lock Service, Taxonomy Service, Link Manager,
   Manage View Service, Manage Drives Service, New Folksonomy Service,
   and Relationship Service.

-  :ref:`Images Processing <PLFRefGuide.Configurations.Components.Content.ImagesProcessing>`

   This section describes the components related to processing Content
   images in eXo Platform, consisting of Jod Converter Service, PDF
   Viewer Service, and Thumbnail Service.

-  :ref:`Publication <PLFRefGuide.Configurations.Components.Content.Publication>`

   This section describes two components which process document
   publication in eXo Platform.

-  :ref:`Searching <PLFRefGuide.Configurations.Components.Content.Searching>`

   This section represents components related to the Content searching
   feature in eXo Platform, consisting of Site Search Service, SEO
   Service, and Query Service.

-  :ref:`Templates Processing <PLFRefGuide.Configurations.Components.Content.TemplateProcessing>`

   This section describes services related to processing Content
   templates, including Application Template Manager Service, Fragment
   Cache Service, WCM Service, WCM Configuration Service, CMS Service,
   Multi-language Service, Template Service, Metadata Service,
   XJavaScript Service, XSkin Service, WCM Content Initializer Service,
   and Live Link Manager Service.

.. _PLFRefGuide.Configurations.Components.Content.Actions:

Actions
--------

This section represents the components related to managing Content
actions and scripts in eXo Platform.

-  :ref:`Action Service Container <PLFRefGuide.Configurations.Components.Content.Actions.ActionServiceContainer>`

   The **ActionServiceContainer** component is used to manage actions
   (adding, removing, or executing actions, and more) in the system.

-  :ref:`Script <PLFRefGuide.Configurations.Components.Content.Actions.ScriptService>`

   This service is used to manage scripts in **Content**. These scripts
   can be registered and executed in the system.

.. _PLFRefGuide.Configurations.Components.Content.Actions.ActionServiceContainer:

Action Service Container
^^^^^^^^^^^^^^^^^^^^^^^^^

The **ActionServiceContainer** component is used to manage actions
(adding, removing, or executing actions, and more) in the system. The
configuration of this component is found in ``
        /core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-services-configuration.xml``.

.. code:: xml

    <component>
        <key>org.exoplatform.services.cms.actions.ActionServiceContainer</key>
        <type>org.exoplatform.services.cms.actions.impl.ActionServiceContainerImpl</type>
        <init-params>
            <value-param>
                <name>workspace</name>
                <value>system</value>
            </value-param>
            <value-param>
                <name>repository</name>
                <value>repository</value>
            </value-param>
        </init-params>
    </component>

**Details**:

-  **Value-param**:

+------------------+--------------+------------------+------------------------+
| **Name**         | **Type**     | **Value**        | **Description**        |
+==================+==============+==================+========================+
| **workspace**    | ``string``   | ``system``       | The workspace name.    |
+------------------+--------------+------------------+------------------------+
| **repository**   | ``string``   | ``repository``   | The repository name.   |
+------------------+--------------+------------------+------------------------+

.. _PLFRefGuide.Configurations.Components.Content.Actions.ScriptService:

Script
^^^^^^^

This service is used to manage scripts in **Content**. These scripts can
be registered and executed in the system.

The configuration of this component can be found
`here <https://github.com/exoplatform/ecms/blob/master/packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/dms-extension/dms/dms-scripts-configuration.xml>`__.

.. code:: xml

    <component>
      <key>org.exoplatform.services.cms.scripts.ScriptService</key>
      <type>org.exoplatform.services.cms.scripts.impl.ScriptServiceImpl</type>
    </component>


Content arrangement
--------------------

This section describes services related arranging content in eXo
Platform, consisting of:

-  :ref:`Lock Service <PLFRefGuide.Configurations.Components.Content.ContentArrangement.LockService>`

-  :ref:`Taxonomy Service <PLFRefGuide.Configurations.Components.Content.ContentArrangement.TaxonomyService>`
   
-  :ref:`Link Manager <PLFRefGuide.Configurations.Components.Content.ContentArrangement.LinkManager>`

-  :ref:`Manage View Service <PLFRefGuide.Configurations.Components.Content.ContentArrangement.ManageViewService>`

-  :ref:`Manage Drives Service <PLFRefGuide.Configurations.Components.Content.ContentArrangement.ManageDriveService>`

-  :ref:`New Folksonomy Service <PLFRefGuide.Configurations.Components.Content.ContentArrangement.NewFolksonomyService>`

-  :ref:`Relationship Service <PLFRefGuide.Configurations.Components.Content.ContentArrangement.RelationsService>`

.. _PLFRefGuide.Configurations.Components.Content.ContentArrangement.LockService:

Lock Service
^^^^^^^^^^^^^

The **LockService** component is used to manage all locked nodes and
allows unlocking the locked nodes in the system. It is also used to
assign the Lock right to a user or a user group or a membership. The
configuration of this component is found in 
``/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-services-configuration.xml``.

.. code:: xml

    <component>
      <key>org.exoplatform.services.cms.lock.LockService</key>
      <type>org.exoplatform.services.cms.lock.impl.LockServiceImpl</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Content.ContentArrangement.TaxonomyService:

Taxonomy Service
^^^^^^^^^^^^^^^^^

The **TaxonomyService** component is used to sort documents to ease
searches when browsing documents online. It provides a multi-dimensional
set of paths to find a document. In many cases, you can get your content
by using different category paths. Therefore, after creating a document
somewhere in the repository, it is possible to categorize it by adding
several taxonomy references. By browsing the taxonomy tree, it will be
possible to find the referencing article and display them as if they
were children of the taxonomy nodes. Taxonomies are stored in the JCR
itself and the JCR Reference functionality is used to provide the
advanced Content feature. The tree of taxonomies can be managed simply,
such as copying/cutting/pasting nodes, or adding and removing taxonomies
from the tree. Once a taxonomy has been added, any user who has access
to the "Manage Categories" icon from his/her view can then browse the
taxonomy tree and refer one of its nodes to the created documents.

.. code:: xml

    <component>
        <key>org.exoplatform.services.cms.taxonomy.TaxonomyService</key>
        <type>org.exoplatform.services.cms.taxonomy.impl.TaxonomyServiceImpl</type>
        <init-params>
            <object-param>
                <name>defaultPermission.configuration</name>
                <object type="org.exoplatform.services.cms.taxonomy.impl.TaxonomyTreeDefaultUserPermission">
                    <field name="permissions">
                        <collection type="java.util.ArrayList">
                            <value>
                                <object type="org.exoplatform.services.cms.taxonomy.impl.TaxonomyTreeDefaultUserPermission$Permission">
                                    <field name="identity">
                                        <string>*:/platform/administrators</string>
                                    </field>
                                    <field name="read">
                                        <string>true</string>
                                    </field>
                                    <field name="addNode">
                                        <string>true</string>
                                    </field>
                                    <field name="setProperty">
                                        <string>true</string>
                                    </field>
                                    <field name="remove">
                                        <string>true</string>
                                    </field>
                                </object>
                            </value>
                            <value>
                                <object type="org.exoplatform.services.cms.taxonomy.impl.TaxonomyTreeDefaultUserPermission$Permission">
                                    <field name="identity">
                                        <string>*:/platform/users</string>
                                    </field>
                                    <field name="read">
                                        <string>true</string>
                                    </field>
                                    <field name="addNode">
                                        <string>true</string>
                                    </field>
                                    <field name="setProperty">
                                        <string>true</string>
                                    </field>
                                    <field name="remove">
                                        <string>false</string>
                                    </field>
                                </object>
                            </value>
                        </collection>
                    </field>
                </object>
            </object-param>
        </init-params>
    </component>

**Details**:

-  **Object type**:
   **org.exoplatform.services.cms.taxonomy.impl.TaxonomyTreeDefaultUserPermission**

+-------------------+-----------------+-----------------------------+-------------------------------------------------------------------------+
| **Field**         | **Type**        | **Value**                   | **Description**                                                         |
+===================+=================+=============================+=========================================================================+
| **permissions**   | ``ArrayList``   | **{java.util.ArrayList}**   | The list of the default user permissions to access the taxonomy tree.   |
+-------------------+-----------------+-----------------------------+-------------------------------------------------------------------------+

-  **Object type**:
   **org.exoplatform.services.cms.taxonomy.impl.TaxonomyTreeDefaultUserPermission$Permission**

+-------------------+---------------+---------------------------------------------------------------------+
| **Field**         | **Type**      | **Description**                                                     |
+===================+===============+=====================================================================+
| **identity**      | ``string``    | The name of user, group or membership.                              |
+-------------------+---------------+---------------------------------------------------------------------+
| **read**          | ``boolean``   | The permission to read the taxonomy tree.                           |
+-------------------+---------------+---------------------------------------------------------------------+
| **addNode**       | ``boolean``   | The permission to add a node to the taxonomy tree.                  |
+-------------------+---------------+---------------------------------------------------------------------+
| **setProperty**   | ``boolean``   | The permission to set properties for a node in the taxonomy tree.   |
+-------------------+---------------+---------------------------------------------------------------------+
| **remove**        | ``boolean``   | The permission to remove a node from the taxonomy tree.             |
+-------------------+---------------+---------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.Components.Content.ContentArrangement.LinkManager:

Link Manager
^^^^^^^^^^^^^

This service is used to manage links, and link target. The configuration
of this component can be found
`here <https://github.com/exoplatform/ecms/blob/master/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-services-configuration.xml>`__.

.. code:: xml

    <component>
      <key>org.exoplatform.services.cms.link.LinkManager</key>
      <type>org.exoplatform.services.cms.link.impl.LinkManagerImpl</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Content.ContentArrangement.ManageViewService:

Manage View
^^^^^^^^^^^^

This service is used to manage views and templates, such as
adding/editing/deleting them. The configuration of this component can be
found
`here <https://github.com/exoplatform/ecms/blob/master/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-services-configuration.xml>`__.

.. code:: xml

    <component>
      <key>org.exoplatform.services.cms.views.ManageViewService</key>
      <type>org.exoplatform.services.cms.views.impl.ManageViewServiceImpl</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Content.ContentArrangement.ManageDriveService:

Manage Drive
^^^^^^^^^^^^^

This service is used to manage drives in **Content** of eXo Platform.

The configuration of this component can be found
`here <https://github.com/exoplatform/ecms/blob/master/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-services-configuration.xml>`__.

.. code:: xml

     <component>
      <key>org.exoplatform.services.cms.drives.ManageDriveService</key>
      <type>org.exoplatform.services.cms.drives.impl.ManageDriveServiceImpl</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Content.ContentArrangement.NewFolksonomyService:

New Folksonomy
^^^^^^^^^^^^^^^

This service is used to manage tags of documents in **Content** of eXo
Platform.

The configuration of this component can be found
`here <https://github.com/exoplatform/ecms/blob/master/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-services-configuration.xml>`__.

.. code:: xml

     <component>
         <key>org.exoplatform.services.cms.folksonomy.NewFolksonomyService</key>
         <type>org.exoplatform.services.cms.folksonomy.impl.NewFolksonomyServiceImpl</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Content.ContentArrangement.RelationsService:

Relations
^^^^^^^^^

This service is used to manage relationships between nodes in
**Content** of eXo Platform.

The configuration of this component can be found
`here <https://github.com/exoplatform/ecms/blob/master/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-services-configuration.xml>`__.

.. code:: xml

    <component>
        <key>org.exoplatform.services.cms.relations.RelationsService</key>
        <type>org.exoplatform.services.cms.relations.impl.RelationsServiceImpl</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Content.ImagesProcessing:


Images Processing
------------------

This section describes the components related to processing Content
images in eXo Platform, consisting of:

-  :ref:`Jod Converter Service <PLFRefGuide.Configurations.Components.Content.ImagesProcessing.JodConverterService>`

-  :ref:`PDF Viewer Service <PLFRefGuide.Configurations.Components.Content.ImagesProcessing.PDFViewerService>`

-  :ref:`Thumbnail Service <PLFRefGuide.Configurations.Components.Content.ImagesProcessing.ThumbnailService>`


.. _PLFRefGuide.Configurations.Components.Content.ImagesProcessing.JodConverterService:

Jod Converter Service
^^^^^^^^^^^^^^^^^^^^^^

The **JodConverterServices** component is used to convert documents into
different office formats. This component is enabled by default. The
configuration of this component is found in ``
        /core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-services-configuration.xml``.

.. code:: xml

    <component>
        <key>org.exoplatform.services.cms.jodconverter.JodConverterService</key>
        <type>org.exoplatform.services.cms.jodconverter.impl.JodConverterServiceImpl</type>
        <init-params>
            <value-param>
                <name>port</name>
                <value>${jodconverter.portNumbers}</value>
            </value-param>
            <value-param>
                <name>officeHome</name>
                <value>${jodconverter.officeHome}</value>
            </value-param>
            <value-param>
                <name>taskQueueTimeout</name>
                <value>${jodconverter.taskQueueTimeout}</value>
            </value-param>
                <value-param>
                <name>taskExecutionTimeout</name>
                <value>${jodconverter.taskExecutionTimeout}</value>
            </value-param>
            <value-param>
                <name>maxTasksPerProcess</name>
                <value>${jodconverter.maxTasksPerProcess}</value>
            </value-param>
            <value-param>
                <name>retryTimeout</name>
                <value>${jodconverter.retryTimeout}</value>
            </value-param>
        </init-params>
    </component>

**Details**:

-  **Value-param**:

+----------------------------+---------------+----------------------------------------+-------------------------------------------------------------------------------------------+
| Name                       | **Type**      | **Value**                              | **Description**                                                                           |
+============================+===============+========================================+===========================================================================================+
| **port**                   | ``Integer``   | ${jodconverter.portNumbers}            | The number of ports to connect with the office server.                                    |
+----------------------------+---------------+----------------------------------------+-------------------------------------------------------------------------------------------+
| **officeHome**             | ``String``    | ${jodconverter.officeHome}             | The absolute path to the office home on the current local computer.                       |
+----------------------------+---------------+----------------------------------------+-------------------------------------------------------------------------------------------+
| **taskQueueTimeout**       | ``Long``      | ${jodconverter.taskExecutionTimeout}   | The maximum living time of a task in the conversation queue.                              |
+----------------------------+-----------PLFRefGuide.Configurations.Components.Content.ImagesProcessing.PDFViewerService----+----------------------------------------+-------------------------------------------------------------------------------------------+
| **taskExecutionTimeout**   | ``Long``      | ${jodconverter.taskExecutionTimeout}   | The maximum time to process a task.                                                       |
+----------------------------+---------------+----------------------------------------+-------------------------------------------------------------------------------------------+
| **maxTasksPerProcess**     | ``Integer``   | ${jodconverter.maxTasksPerProcess}     | The maximum number of tasks are processed.                                                |
+----------------------------+---------------+----------------------------------------+-------------------------------------------------------------------------------------------+
| **retryTimeout**           | ``Long``      | ${jodconverter.retryTimeout}           | The interval time to try to restart the office services in case they unexpectedly stop.   |
+----------------------------+---------------+----------------------------------------+-------------------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.Components.Content.ImagesProcessing.PDFViewerService:

PDF Viewer
^^^^^^^^^^^

This service is used to initialize data under the PDF format to view
files in supported types (MS Word, MS Excel, and more) in Sites
Explorer.

The configuration of this component can be found
`here <https://github.com/exoplatform/ecms/blob/master/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-services-configuration.xml>`__.

.. code:: xml

    <component>
      <type>org.exoplatform.services.pdfviewer.PDFViewerService</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Content.ImagesProcessing.ThumbnailService:

Thumbnail Service
^^^^^^^^^^^^^^^^^^

The **ThumbnailService** component is used to resize all the images into
different sizes. Besides the default sizes, it also allows users to
customize the images into the desired sizes. The configuration of this
component is found in
``/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-services-configuration.xml``.

.. code:: xml

    <component>
        <key>org.exoplatform.services.cms.thumbnail.ThumbnailService</key>
        <type>org.exoplatform.services.cms.thumbnail.impl.ThumbnailServiceImpl</type>
        <init-params>
            <value-param>
                <name>smallSize</name>
                <value>32x32</value>
            </value-param>
            <value-param>
                <name>mediumSize</name>
                <value>64x64</value>
            </value-param>
            <value-param>
                <name>largeSize</name>
                <value>300x300</value>
            </value-param>
            <value-param>
                <name>enable</name>
                <value>false</value>
            </value-param>
            <value-param>
                <name>mimetypes</name>
                <value>image/jpeg;image/png;image/gif;image/bmp</value>
            </value-param>
        </init-params>
    </component>

**Details**:

-  **Value-param**:

+------------------+-------------------------+------------------------------------------------+---------------------------------------------------+
| **Name**         | **Type**                | **Value**                                      | **Description**                                   |
+==================+=========================+================================================+===================================================+
| **smallSize**    | ``integer x integer``   | ``32x32``                                      | The small thumbnail size.                         |
+------------------+-------------------------+------------------------------------------------+---------------------------------------------------+
| **mediumSize**   | ``integer x integer``   | ``64x64``                                      | The medium thumbnail size.                        |
+------------------+-------------------------+------------------------------------------------+---------------------------------------------------+
| **largeSize**    | ``integer x integer``   | ``300x300``                                    | The large thumbnail size.                         |
+------------------+-------------------------+------------------------------------------------+---------------------------------------------------+
| **enable**       | ``boolean``             | ``false``                                      | Specifies if the thumbnail is displayed or not.   |
+------------------+-------------------------+------------------------------------------------+---------------------------------------------------+
| **mimetypes**    | ``Images formats``      | ``image/jpeg;image/png;image/gif;image/bmp``   | The image formats that are supported.             |
+------------------+-------------------------+------------------------------------------------+---------------------------------------------------+

.. _PLFRefGuide.Configurations.Components.Content.Publication:

Publication
------------

This section describes two components which process document publication
in eXo Platform.

**Publication Service**

This service is used to manage the status changes of documents in the
publication lifecycles.

The configuration of this component can be found
`here <https://github.com/exoplatform/ecms/blob/master/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-publication-configuration.xml>`__.

.. code:: xml

    <component>
      <key>org.exoplatform.services.ecm.publication.PublicationService</key>
      <type>org.exoplatform.services.ecm.publication.impl.PublicationServiceImpl</type>
    </component> 

**Publication Presentation**

This component is used to retrieve the WebUI form corresponding to the
current state of the specified node.

The configuration of this component can be found
`here <https://github.com/exoplatform/ecms/blob/master/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-publication-configuration.xml>`__.

.. code:: xml

    <component>
       <key>org.exoplatform.services.ecm.publication.PublicationPresentationService</key>
       <type>org.exoplatform.services.ecm.publication.impl.PublicationPresentationServiceImpl</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Content.Searching:

Searching
----------

This section represents components related to the Content searching
feature in eXo Platform, consisting of:

-  :ref:`Site Search Service <PLFRefGuide.Configurations.Components.Content.Searching.SiteSearchService>`

-  :ref:`SEO Service <PLFRefGuide.Configurations.Components.Content.Searching.SEOService>`

-  :ref:`Query Service <PLFRefGuide.Configurations.Components.Content.Searching.QueryService>`

.. _PLFRefGuide.Configurations.Components.Content.Searching.SiteSearchService:

Site Search Service
^^^^^^^^^^^^^^^^^^^^

The **SiteSearchService** component is used in the Search portlet that
allows users to find all information matching with your given keyword.

It is configured in the
``core/core-configuration/src/main/webapp/WEB-INF/conf/configuration.xml``
file as follows:

.. code:: xml

    <import>war:/conf/wcm-core/core-search-configuration.xml</import>

The component configuration maps the **SiteSearchService** component
with its own implementation: **SiteSearchServiceImpl**.

.. code:: xml

    <component>
        <key>org.exoplatform.services.wcm.search.SiteSearchService</key>
        <type>org.exoplatform.services.wcm.search.SiteSearchServiceImpl</type>
        <component-plugins>
          <component-plugin>
            <name>ExcludeMimeTypes</name>
            <set-method>addExcludeIncludeDataTypePlugin</set-method>
            <type>org.exoplatform.services.wcm.search.ExcludeIncludeDataTypePlugin</type>
            <init-params>
              <properties-param>
                <name>search.exclude.datatypes</name>
                <description>exclude some data type when search</description>
                <property name="mimetypes" value="${wcm.search.excluded-mimetypes:text/css,text/javascript,application/x-javascript,text/ecmascript}" />
              </properties-param>
            </init-params>
          </component-plugin>
        </component-plugins>
        <init-params>
          <value-param>
            <name>isEnabledFuzzySearch</name>
            <value>${wcm.search.enableFuzzySearch:true}</value>
          </value-param>
          <value-param>
            <name>fuzzySearchIndex</name>
            <value>${wcm.search.fuzzySearchIndex:}</value>
          </value-param>
        </init-params>
      </component>

**Detail**:

-  **Value-param**:

+--------------------------------+---------------+----------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Name**                       | **Type**      | **Value**                                                                                                | **Description**                                                                                                                                                                                                     |
+================================+===============+==========================================================================================================+=====================================================================================================================================================================================================================+
| **search.exclude.datatypes**   | ``string``    | ``${wcm.search.excluded-mimetypes:text/css,text/javascript,application/x-javascript,text/ecmascript}``   | Allows administrators to exclude/include some data types when doing a search. See `Exclude Include Data Type <#PLFRefGuide.Configurations.ExternalComponentPlugins.Content.ExcludeMimeTypes>`__ for more details.   |
+--------------------------------+---------------+----------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **isEnabledFuzzySearch**       | ``boolean``   | ``${wcm.search.enableFuzzySearch:true}``                                                                 | Allows administrators to enable/disable the fuzzy search mechanism.                                                                                                                                                 |
+--------------------------------+---------------+----------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **fuzzySearchIndex**           | ``N/A``       | ``${wcm.search.fuzzySearchIndex:}``                                                                      | Allows the approximate level between the input keyword and the found key results. In case of the invalid configuration, the default value is set to 0.8.                                                            |
+--------------------------------+---------------+----------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

To have more information about the fuzzy search, please refer to 
`Fuzzy Search <http://lucene.apache.org/core/old_versioned_docs/versions/3_0_0/queryparsersyntax.html#Fuzzy Searches>`__.

.. _PLFRefGuide.Configurations.Components.Content.Searching.SEOService:

SEO Service
^^^^^^^^^^^^

The **SEOService** component is used to help users manage SEO data of a
page or a content, so their websites can achieve higher rankings on
search engines. The configuration of this component is found in ``
        /packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/wcm-extension/wcm/seo-configuration.xml``.

.. code:: xml

    <component>
        <key>org.exoplatform.services.seo.SEOService</key>
        <type>org.exoplatform.services.seo.impl.SEOServiceImpl</type>
        <init-params>
            <object-param>
                <name>seo.config</name>
                <object type="org.exoplatform.services.seo.SEOConfig">
                    <field name="robotsindex">
                        <collection type="java.util.ArrayList">
                            <value>
                                <string>INDEX</string>
                            </value>
                            <value>
                                <string>NOINDEX</string>
                            </value>
                        </collection>
                    </field>
                    <field name="robotsfollow">
                        <collection type="java.util.ArrayList">
                            <value>
                                <string>FOLLOW</string>
                            </value>
                            <value>
                                <string>NOFOLLOW</string>
                            </value>
                        </collection>
                    </field>
                    <field name="frequency">
                        <collection type="java.util.ArrayList">
                            <value>
                                <string>Always</string>
                            </value>
                            <value>
                                <string>Hourly</string>
                            </value>
                            <value>
                                <string>Daily</string>
                            </value>
                            <value>
                                <string>Weekly</string>
                            </value>
                            <value>
                                <string>Monthly</string>
                            </value>
                            <value>
                                <string>Yearly</string>
                            </value>
                            <value>
                                <string>Never</string>
                            </value>
                        </collection>
                    </field>
                </object>
            </object-param>
        </init-params>
    </component>

**Details**:

-  **Object-param**:

   -  **Object type**: ``org.exoplatform.services.seo.SEOConfig``

+--------------------+-----------------+----------------+--------------------------------------------------------------------------------------------+
| **Field**          | **Type**        | **Value**      | **Description**                                                                            |
+====================+=================+================+============================================================================================+
| **robotsindex**    | ``ArrayList``   | ``INDEX``      | Allows search engines to index a particular page or not.                                   |
|                    |                 |                |                                                                                            |
|                    |                 | ``NOINDEX``    |                                                                                            |
+--------------------+-----------------+----------------+--------------------------------------------------------------------------------------------+
| **robotsfollow**   | ``ArrayList``   | ``FOLLOW``     | Allows search engines to follow links from a particular page to find other pages or not.   |
|                    |                 |                |                                                                                            |
|                    |                 | ``NOFOLLOW``   |                                                                                            |
+--------------------+-----------------+----------------+--------------------------------------------------------------------------------------------+
| **frequency**      | ``ArrayList``   | ``Always``     | Defines how often a particular page is updated.                                            |
|                    |                 |                |                                                                                            |
|                    |                 | ``Hourly``     |                                                                                            |
|                    |                 |                |                                                                                            |
|                    |                 | ``Daily``      |                                                                                            |
|                    |                 |                |                                                                                            |
|                    |                 | ``Weekly``     |                                                                                            |
|                    |                 |                |                                                                                            |
|                    |                 | ``Monthly``    |                                                                                            |
|                    |                 |                |                                                                                            |
|                    |                 | ``Yearly``     |                                                                                            |
|                    |                 |                |                                                                                            |
|                    |                 | ``Never``      |                                                                                            |
+--------------------+-----------------+----------------+--------------------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.Components.Content.Searching.QueryService:

Query Service
^^^^^^^^^^^^^^

The **QueryService** component is used to manage many queries, including
adding, removing or executing a query. The configuration of this
component is found in
``/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-services-configuration.xml``.

.. code:: xml

    <component>
        <key>org.exoplatform.services.cms.queries.QueryService</key>  
        <type>org.exoplatform.services.cms.queries.impl.QueryServiceImpl</type>
        <init-params>
          <value-param>
            <name>workspace</name>
            <value>system</value>
          </value-param>   
          <value-param>
            <name>relativePath</name>
            <value>Private/Searches</value>
          </value-param>
          <value-param>
            <name>group</name>
            <value>*:/platform/administrators</value>
          </value-param>            
        </init-params>          
     </component>

**Details**:

-  **Value-param**:

+--------------------+--------------+----------------------------------+----------------------------------------------------+
| **Name**           | **Type**     | **Value**                        | **Description**                                    |
+====================+==============+==================================+====================================================+
| **workspace**      | ``string``   | ``system``                       | The workspace name.                                |
+--------------------+--------------+----------------------------------+----------------------------------------------------+
| **relativePath**   | ``string``   | ``Private/Searches``             | The path to the query location.                    |
+--------------------+--------------+----------------------------------+----------------------------------------------------+
| **group**          | ``string``   | ``*:/platform/administrators``   | The group is allowed to access the query folder.   |
+--------------------+--------------+----------------------------------+----------------------------------------------------+

.. _PLFRefGuide.Configurations.Components.Content.TemplateProcessing:

Templates Processing
-----------------------

This section describes services related to processing Content templates,
including:

-  :ref:`Application Template Manager <PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.ApplicationTemplateManagerService>`

-  :ref:`Fragment Cache <PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.FragmentCacheService>`

-  :ref:`WCM <PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.WCMService>`

-  :ref:`WCM Configuration <PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.WCMConfigurationService>`

-  :ref:`CMS <PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.CmsService>`

-  :ref:`Multi-language <PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.MultiLanguageService>`

-  :ref:`Template <PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.TemplateService>`

-  :ref:`Metadata <PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.MetadataService>`

-  :ref:`XJavaScript <PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.XJavascriptService>`

-  :ref:`XSkin <PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.XSkinService>`

-  :ref:`WCM Content Initializer <PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.WCMContentInitializerService>`

-  :ref:`Live Link Manager <PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.LiveLinkManagerService>`

.. _PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.ApplicationTemplateManagerService:

Application Template Manager
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
The **ApplicationTemplateManagerService** component is used to manage
dynamic Groovy templates for Content-based products. The configuration
of this component is found in
``/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-services-configuration.xml``.

.. code:: xml

    <component>
        <key>org.exoplatform.services.cms.views.ApplicationTemplateManagerService</key>
        <type>org.exoplatform.services.cms.views.impl.ApplicationTemplateManagerServiceImpl</type>
        <init-params>
            <properties-param>
                <name>storedLocations</name>
                <property name="repository" value="system"/>
            </properties-param>
        </init-params>
    </component>

**Details**:

-  **Properties-param**:

+-----------------------+---------------------+--------------+--------------+------------------------+
| **Name**              | **Property name**   | **Type**     | **Value**    | **Description**        |
+=======================+=====================+==============+==============+========================+
| **storedLocations**   | ``repository``      | ``string``   | ``system``   | The repository name.   |
+-----------------------+---------------------+--------------+--------------+------------------------+

.. _PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.FragmentCacheService:

Fragment Cache
^^^^^^^^^^^^^^^

The **FragmentCacheService** component is used to cache the response
fragments which are sent to end-users.

The configuration of this component is found in ``
      core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/wcm-configuration.xml``.

.. code:: xml

    <component>
        <key>org.exoplatform.services.portletcache.FragmentCacheService</key>
        <type>org.exoplatform.services.portletcache.FragmentCacheService</type>
        <init-params>
            <value-param>
                <name>cleanup-cache</name>
                <description>The cleanup cache period in seconds</description>
                <value>300</value>
            </value-param>
        </init-params>
    </component>

**Details**

-  **Value-param**:

+---------------------+---------------+-------------+-------------------------------------------------------+
| **Name**            | **Type**      | **Value**   | **Description**                                       |
+=====================+===============+=============+=======================================================+
| **cleanup-cache**   | ``integer``   | ``300``     | The time period over which cache items are expired.   |
+---------------------+---------------+-------------+-------------------------------------------------------+

.. _PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.WCMService:

WCM
^^^^

The **WCMService** component allows setting expiration cache of portlets
and checking given portals if they are shared portals or not. It also
gets reference contents basing on item identifiers. The configuration of
this component is found in
``/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/wcm-configuration.xml``.

.. code:: xml

    <component>
        <key>org.exoplatform.services.wcm.core.WCMService</key>
        <type>org.exoplatform.services.wcm.core.impl.WCMServiceImpl</type>
        <init-params>
            <properties-param>
                <name>server.config</name>
                <description>server.config</description>
                <property name="expirationCache" value="${wcm.cache.wcmservice.expirationcache:30}" />
            </properties-param>
        </init-params>
    </component>

**Details**:

+------------------------+-----------------------+---------------+--------------------------------------------------+-----------------------------------------------------------------------------------------------------------+
| **Properties-param**   | **Property name**     | **Type**      | **Value**                                        | **Description**                                                                                           |
+========================+=======================+===============+==================================================+===========================================================================================================+
| **server.config**      | ``expirationCache``   | ``integer``   | ``${wcm.cache.wcmservice.expirationcache:30}``   | The period in which the cache is cleared in seconds. By default, the cache is cleared every 30 seconds.   |
+------------------------+-----------------------+---------------+--------------------------------------------------+-----------------------------------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.WCMConfigurationService:

WCM Configuration
^^^^^^^^^^^^^^^^^^

This service is used to manage general information of sites and runtime
context parameters.

The configuration of this component can be found
`here <https://github.com/exoplatform/ecms/blob/master/packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/wcm-extension/wcm/system-configuration.xml>`__.

.. code:: xml

    <component>
        <key>org.exoplatform.services.wcm.core.WCMConfigurationService</key>
        <type>org.exoplatform.services.wcm.core.WCMConfigurationService</type>
        <init-params>
          <properties-param>
            <name>RuntimeContextParams</name>
            <description>some params for runtime</description>

            <property name="parameterizedPageURI" value="${wcm.config.parameterizedPageURI:/detail}" />
            <property name="parameterizedURIParam" value="${wcm.config.parameterizedURIParam:content-id}"/>
            <property name="printPageURI" value="${wcm.config.printPageURI:/printviewer}" />
            <property name="printViewerPage" value="${wcm.config.printViewerPage:printviewer}" />
            <property name="editorPageURI" value="${wcm.config.editorPageURI:editor}" />
            <property name="siteExplorerURI" value="${wcm.config.siteExplorerURI:siteExplorer}" />

            <property name="CLVPortlet" value="/presentation/ContentListViewerPortlet" />
            <property name="SCVPortlet" value="/presentation/SingleContentViewer" />

            <property name="formViewTemplatePath" value="${wcm.config.formViewTemplatePath:}" />
            <property name="paginatorTemplatePath" value="${wcm.config.paginatorTemplatePath:/exo:ecm/views/templates/content-list-viewer/paginators/DefaultPaginator.gtmpl}" />
          </properties-param>
          <properties-param>
            <name>share.portal.config</name>
            <description>share portal name for each repository</description>
            <property name="portalName" value="shared" />
          </properties-param>
          <object-param>
            <name>live.portals.location.config</name>
            <description>configuration for the cms path</description>
            <object type="org.exoplatform.services.wcm.core.NodeLocation">
              <field name="workspace">
                <string>collaboration</string>
              </field>
              <field name="path">
                <string>/sites</string>
              </field>
            </object>
          </object-param>
          <object-param>
            <name>site.drive.config</name>
            <description>drive config for each site drive</description>
            <object type="org.exoplatform.services.cms.drives.DriveData">
              <field name="name">
                <string>{siteName}</string>
              </field>
              <field name="workspace">
                <string>{workspace}</string>
              </field>
              <field name="permissions">
                <string>{accessPermission}</string>
              </field>
              <field name="homePath">
                <string>{sitePath}/categories/{siteName}</string>
              </field>
              <field name="icon">
                <string></string>
              </field>
              <field name="views">
                <string>Categories</string>
              </field>
              <field name="viewPreferences">
                <boolean>false</boolean>
              </field>
              <field name="viewNonDocument">
                <boolean>true</boolean>
              </field>
              <field name="viewSideBar">
                <boolean>true</boolean>
              </field>
              <field name="showHiddenNode">
                <boolean>false</boolean>
              </field>
              <field name="allowCreateFolders">
                <string>nt:folder,nt:unstructured</string>
              </field>
              <field name="allowNodeTypesOnTree">
                <string>*</string>
              </field>
            </object>
          </object-param>
        </init-params>
      </component> 

**Details**:

-  **properties-param**: ``RuntimeContextParams``

   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
   | Property-name               | Type     | Value                                                                                                                    | Description                                                                                                                          |
   +=============================+==========+==========================================================================================================================+======================================================================================================================================+
   | ``parameterizedPageURI``    | string   | ``${wcm.config.parameterizedPageURI:/detail}``                                                                           | Contains the path to a page which displays the full content of a document provided by a URL on the browser's address bar.            |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
   | ``parameterizedURIParam``   | string   | ``${wcm.config.parameterizedURIParam:content-id}``                                                                       | Contains the parameter that takes the URL of a document on the browser's address bar to be displayed in the ``parameterizedPageURI``.|
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
   | ``printPageURI``            | string   | ``${wcm.config.printPageURI:/printviewer}``                                                                              | The URL of the document's print preview page.                                                                                        |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
   | ``printViewerPage``         | string   | ``${wcm.config.printViewerPage:printviewer}``                                                                            | The name of the print preview page.                                                                                                  |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
   | ``editorPageURI``           | string   | ``${wcm.config.editorPageURI:editor}``                                                                                   | The name of the page which users can in-line edit its content displayed in the front-end page.                                       |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
   | ``siteExplorerURI``         | String   | ``${wcm.config.siteExplorerURI:siteExplorer}``                                                                           | The URL of a page containing the Sites Explorer portlet.                                                                             |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
   | ``CLVPortlet``              | String   | ``/presentation/ContentListViewerPortlet``                                                                               | The portlet which contains a list of content.                                                                                        |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
   | ``SCVPortlet``              | String   | ``/presentation/SingleContentViewer``                                                                                    | The portlet which contains single content.                                                                                           |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
   | ``formViewTemplatePath``    | String   | ``${wcm.config.formViewTemplatePath:}``                                                                                  | The path to the template used to display the contents in this portlet.                                                               |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
   | ``paginatorTemplatePath``   | String   | ``${wcm.config.paginatorTemplatePath:/exo:ecm/views/templates/content-list-viewer/paginators/DefaultPaginator.gtmpl}``   | The path to the paginator used to display the contents in this portlet.                                                              |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------+

-  **properties-param**: ``share.portal.config``

   +------------------+----------+--------------+---------------------------+
   | Property name    | Type     | Value        | Description               |
   +==================+==========+==============+===========================+
   | ``portalName``   | String   | ``shared``   | The name of the portal.   |
   +------------------+----------+--------------+---------------------------+

-  **object-param**: ``live.portals.location.config``

   +-----------------+----------+---------------------+---------------------------------------------------------------+
   | Field           | Type     | Value               | Description                                                   |
   +=================+==========+=====================+===============================================================+
   | ``workspace``   | string   | ``collaboration``   | The workspace name in the Content Repository.                 |
   +-----------------+----------+---------------------+---------------------------------------------------------------+
   | ``path``        | string   | ``/sites``          | The path to the folders containing the sites of the system.   |
   +-----------------+----------+---------------------+---------------------------------------------------------------+

-  **object-param**: ``site.drive.config``

   +----------------------------+-----------+----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | Field                      | Type      | Value                                  | Description                                                                                                                 |
   +============================+===========+========================================+=============================================================================================================================+
   | ``name``                   | String    | ``{siteName}``                         | The name of a site in the portal.                                                                                           |
   +----------------------------+-----------+----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``workspace``              | String    | ``{workspace}``                        | The workspace name in the Content repository.                                                                               |
   +----------------------------+-----------+----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``permissions``            | String    | ``{accessPermission}``                 | Visibility of the drive based on users' access permission.                                                                  |
   +----------------------------+-----------+----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``homePath``               | String    | ``{sitePath}/categories/{siteName}``   | The root path in the Content Repository. ``userId`` can be used at runtime in the path.                                     |
   +----------------------------+-----------+----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``views``                  | String    | ``wcm-category-view``                  | The list of views you want to use, separated by commas. For example: ``simple-view,admin-view``.                            |
   +----------------------------+-----------+----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``viewPreferences``        | Boolean   | ``false``                              | The ``User Preference`` icon will be visible if true.                                                                       |
   +----------------------------+-----------+----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``viewNonDocument``        | Boolean   | ``true``                               | Non-document types will be visible in the user view if true.                                                                |
   +----------------------------+-----------+----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``viewSideBar``            | Boolean   | ``true``                               | Shows/Hides the left bar (with navigation and filters).                                                                     |
   +----------------------------+-----------+----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``showHiddenNode``         | Boolean   | ``false``                              | Hidden nodes will be visible if true.                                                                                       |
   +----------------------------+-----------+----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``allowCreateFolders``     | String    | ``nt:folder,nt:unstructured``          | A list of node types that you can create as folders. For example: ``nt:folder,nt:unstructured``                             |
   +----------------------------+-----------+----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``allowNodeTypesOnTree``   | String    | ``*``                                  | Allows you to filter node types in the navigation tree. For example, the default value is "\*" to show all content types.   |
   +----------------------------+-----------+----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.CmsService:

CMS
^^^^

This service is used to write data to JCR. The configuration of this
component can be found
`here <https://github.com/exoplatform/ecms/blob/master/packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/dms-extension/dms/cms-configuration.xml>`__.

.. code:: xml

    <component>
      <key>org.exoplatform.services.cms.CmsService</key>
      <type>org.exoplatform.services.cms.impl.CmsServiceImpl</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.MultiLanguageService:

Multi-language
^^^^^^^^^^^^^^^

This service is used to manage and display content in different
languages of a node which contains many language versions.

The configuration of this component can be found
`here <https://github.com/exoplatform/ecms/blob/master/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-services-configuration.xml>`__.

.. code:: xml

    <component>
      <key>org.exoplatform.services.cms.i18n.MultiLanguageService</key>
      <type>org.exoplatform.services.cms.i18n.impl.MultiLanguageServiceImpl</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.TemplateService:

Template
^^^^^^^^^^

This service is used to manage templates of content in **Content** of
eXo Platform.

The configuration of this component can be found
`here <https://github.com/exoplatform/ecms/blob/master/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-services-configuration.xml>`__.

.. code:: xml

    <component>
      <key>org.exoplatform.services.cms.templates.TemplateService</key>
      <type>org.exoplatform.services.cms.templates.impl.TemplateServiceImpl</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.MetadataService:

Metadata
^^^^^^^^^

This service is used to manage metadata of nodes in JCR, such as
adding/editing/deleting/retrieving them.

The configuration of this component can be found
`here <https://github.com/exoplatform/ecms/blob/master/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-services-configuration.xml>`__

.. code:: xml

    <component>
      <key>org.exoplatform.services.cms.metadata.MetadataService</key>
      <type>org.exoplatform.services.cms.metadata.impl.MetadataServiceImpl</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.XJavascriptService:

XJavascript
^^^^^^^^^^^^

This service is used to update and retrieve JavaScript codes to run on
the front-end pages.

The configuration of this component can be found
`here <https://github.com/exoplatform/ecms/blob/master/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/wcm-configuration.xml>`__.

.. code:: xml

    <component>
      <key>org.exoplatform.services.wcm.javascript.XJavascriptService</key>
      <type>org.exoplatform.services.wcm.javascript.XJavascriptService</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.XSkinService:

XSkin
^^^^^^

This service is used to update and retrieve stylesheet codes to apply
for the front-end pages.

The configuration of this component can be found
`here <https://github.com/exoplatform/ecms/blob/master/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/wcm-configuration.xml>`__.

.. code:: xml

    <component>
      <key>org.exoplatform.services.wcm.skin.XSkinService</key>
      <type>org.exoplatform.services.wcm.skin.XSkinService</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.WCMContentInitializerService:

WCM Content Initializer
^^^^^^^^^^^^^^^^^^^^^^^^

This service is used to log, deploy and check the deployment plugin of
sites in **Content** of eXo Platform.

.. code:: xml

    <component>
      <type>org.exoplatform.services.deployment.WCMContentInitializerService</type>
    </component>

.. _PLFRefGuide.Configurations.Components.Content.TemplatesProcessing.LiveLinkManagerService:

Live Link Manager
^^^^^^^^^^^^^^^^^^

The **LiveLinkManagerService** component is used to check broken links,
update links when the links are edited and extract links to return a
list of all links. The configuration of this component is found in
``/packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/wcm-extension/wcm/system-configuration.xml``.

.. code:: xml

    <component>
        <key>org.exoplatform.services.wcm.link.LiveLinkManagerService</key>
        <type>org.exoplatform.services.wcm.link.LiveLinkManagerServiceImpl</type>
        <init-params>
            <properties-param>
                <name>server.config</name>
                <description>server.address</description>
                <property name="scheme" value="${wcm.linkmanager.scheme:http}"/>
                <property name="hostName" value="${wcm.linkmanager.hostname:localhost}"/>
                <property name="port" value="${wcm.linkmanager.port:8080}"/>
            </properties-param>
        </init-params>
    </component>

**Details**:

+------------------------+------------------------------------+------------------------------------+---------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| **Properties-param**   | **Property name**                  | **Type**                           | **Value**                                   | **Description**                                                                                                                               |
+========================+====================================+====================================+=============================================+===============================================================================================================================================+
| **server.config**      | ``scheme``                         | ``http/https``                     | ``${wcm.linkmanager.scheme:http}``          | All the property names are used together to configure the server. Here is an example about the server configuration: http//:localhost:8080.   |
|                        |                                    |                                    |                                             |                                                                                                                                               |
|                        | .. raw:: html                      | .. raw:: html                      | .. raw:: html                               |                                                                                                                                               |
|                        |                                    |                                    |                                             |                                                                                                                                               |
|                        |    <div class="informalexample">   |    <div class="informalexample">   |    <div class="informalexample">            |                                                                                                                                               |
|                        |                                    |                                    |                                             |                                                                                                                                               |
|                        | .. raw:: html                      | .. raw:: html                      | .. raw:: html                               |                                                                                                                                               |
|                        |                                    |                                    |                                             |                                                                                                                                               |
|                        |    </div>                          |    </div>                          |    </div>                                   |                                                                                                                                               |
|                        |                                    |                                    |                                             |                                                                                                                                               |
|                        | ``hostName``                       | ``String``                         | ``${wcm.linkmanager.hostname:localhost}``   |                                                                                                                                               |
|                        |                                    |                                    |                                             |                                                                                                                                               |
|                        | .. raw:: html                      | .. raw:: html                      | .. raw:: html                               |                                                                                                                                               |
|                        |                                    |                                    |                                             |                                                                                                                                               |
|                        |    <div class="informalexample">   |    <div class="informalexample">   |    <div class="informalexample">            |                                                                                                                                               |
|                        |                                    |                                    |                                             |                                                                                                                                               |
|                        | .. raw:: html                      | .. raw:: html                      | .. raw:: html                               |                                                                                                                                               |
|                        |                                    |                                    |                                             |                                                                                                                                               |
|                        |    </div>                          |    </div>                          |    </div>                                   |                                                                                                                                               |
|                        |                                    |                                    |                                             |                                                                                                                                               |
|                        | ``port``                           | ``The port number``                | ``${wcm.linkmanager.port:8080}``            |                                                                                                                                               |
+------------------------+------------------------------------+------------------------------------+---------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.Components.CalendarService:

Calendar Service
~~~~~~~~~~~~~~~~~~


The ``CalendarService`` configuration of the Calendar application can be
found
`here <https://github.com/exoplatform/calendar/blob/master/calendar-extension/calendar-extension-webapp/src/main/webapp/WEB-INF/cs-extension/cs/calendar/calendar-service-configuration.xml>`__.

Use the ``CalendarService`` to configure the Calendar. The following
information will explain details of its configuration. When this
configuration file is executed, the component named
**org.exoplatform.calendar.service.impl.CalendarServiceImpl** will
process actions of the Calendar application.

.. code:: xml

    <component>
        <key>org.exoplatform.calendar.service.CalendarService</key>
        <type>org.exoplatform.calendar.service.impl.CalendarServiceImpl</type>
        <init-params>
            <properties-param>
                <name>eventNumber.info</name>
                <property name="eventNumber" value="100"/>
            </properties-param>
        </init-params>
    </component>

**Details:**

+------------------------+-------------------+------------------+-----------------+---------------------------------------+
| Properties-Param       | Property name     | Possible Value   | Default Value   | Description                           |
+========================+===================+==================+=================+=======================================+
| **eventNumber.info**   | ``eventNumber``   | ``integer``      | ``100``         | The number of events in a calendar.   |
+------------------------+-------------------+------------------+-----------------+---------------------------------------+

.. _PLFRefGuide.Configurations.Components.Forum:

Forum components
~~~~~~~~~~~~~~~~~~~

+------------------------------------------------------------------+------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Key                                                              | Data type                                                        | Description                                                                                                                                                                                                           |
+==================================================================+==================================================================+=======================================================================================================================================================================================================================+
| **org.exoplatform.forum.bbcode.core.BBCodeServiceImpl**          | org.exoplatform.forum.bbcode.core.BBCodeServiceImpl              | Manages CRUD operations on BBCodes.                                                                                                                                                                                   |
+------------------------------------------------------------------+------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **org.exoplatform.forum.bbcode.api.BBCodeService**               | org.exoplatform.forum.bbcode.core.cache.CachedBBCodeService      | Caches operations on BBCodes.                                                                                                                                                                                         |
+------------------------------------------------------------------+------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **org.exoplatform.forum.service.DataStorage**                    | org.exoplatform.forum.service.cache.CachedDataStorage            | Stores data of Forums via the JCR system.                                                                                                                                                                             |
+------------------------------------------------------------------+------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **org.exoplatform.forum.service.impl.JCRDataStorage**            | org.exoplatform.forum.service.impl.JCRDataStorage                | Implements the DataStorage component.                                                                                                                                                                                 |
+------------------------------------------------------------------+------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **org.exoplatform.forum.service.ForumService**                   | org.exoplatform.forum.service.impl.ForumServiceImpl              | Includes all public APIs to interact with the UI component and database.                                                                                                                                              |
+------------------------------------------------------------------+------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **org.exoplatform.forum.service.ForumStatisticsService**         | org.exoplatform.forum.service.impl.ForumStatisticsServiceImpl    | Includes all public APIs to interact with the database of Statistics system.                                                                                                                                          |
+------------------------------------------------------------------+------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **org.exoplatform.forum.service.ws.ForumWebservice**             | N/A                                                              | Provides web services for the Forum application.                                                                                                                                                                      |
+------------------------------------------------------------------+------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **org.exoplatform.forum.common.image.ResizeImageService**        | org.exoplatform.forum.common.image.impl.ResizeImageServiceImpl   | Resizes the avatar image in the Forum and Answer applications.                                                                                                                                                        |
+------------------------------------------------------------------+------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **org.exoplatform.forum.rendering.MarkupRenderingService**       | org.exoplatform.forum.rendering.MarkupRenderingService           | Renders BBCodes or HTML.                                                                                                                                                                                              |
+------------------------------------------------------------------+------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **org.exoplatform.forum.common.jcr.KSDataLocation**              | org.exoplatform.forum.common.jcr.KSDataLocation                  | Defines the default node path of JCR storage for the data of Forum, Answer and Poll applications. Its ``workspace`` value-param which is used to define the workspace where stores the Forum, Answer and Poll data.   |
+------------------------------------------------------------------+------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **org.exoplatform.forum.common.user.ContactProvider**            | org.exoplatform.forum.ext.common.SocialContactProvider           | Auto-synchronizes users' profile in Social Intranet with the users' information in the Forum application.                                                                                                             |
+------------------------------------------------------------------+------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **org.exoplatform.forum.common.webui.cssfile.CssClassManager**   | org.exoplatform.forum.common.webui.cssfile.CssClassManager       | Manages CSS class of file icons.                                                                                                                                                                                      |
+------------------------------------------------------------------+------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.Components.Answers:

Answers components
~~~~~~~~~~~~~~~~~~~

+-----------------------------------------------+---------------------------------------------------+----------------------------------------------------------------------------+
| Key                                           | Data type                                         | Description                                                                |
+===============================================+===================================================+============================================================================+
| **org.exoplatform.faq.service.FAQService**    | org.exoplatform.faq.service.impl.FAQServiceImpl   | Includes all public APIs to interact with the UI component and database.   |
+-----------------------------------------------+---------------------------------------------------+----------------------------------------------------------------------------+
| **org.exoplatform.faq.service.DataStorage**   | org.exoplatform.faq.service.impl.JCRDataStorage   | Stores data of FAQ via the JCR system.                                     |
+-----------------------------------------------+---------------------------------------------------+----------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.Components.ProfileContactProvider:

Profile contact provider
~~~~~~~~~~~~~~~~~~~~~~~~~

Forum and FAQ applications are to show some information about posters.
The way to retrieve that information is pluggable through the
**ContactProvider** component.

For public internet websites, users can provide personal information,
such as personal email address and location. To enable, simply override
the **ContactProvider** component in your configuration.

**Configuration**

Configure the ``profile-configuration.xml`` file as shown below:

.. code:: xml

    <component>
      <key>org.exoplatform.forum.common.user.ContactProvider</key>
      <!-- <type>org.exoplatform.forum.common.user.DefaultContactProvider</type> -->
      <type>org.exoplatform.forum.ext.common.SocialContactProvider</type>
    </component>

**Use ContactProvider**

You can get the **ContactProvider** as follows:

.. code:: java

    public static CommonContact getPersonalContact(String userId) {
      try {
        if(userId.indexOf(Utils.DELETED) > 0) return new CommonContact();
        ContactProvider provider = (ContactProvider) PortalContainer.getComponent(ContactProvider.class) ;
        return provider.getCommonContact(userId);
      } catch (Exception e) {
        return new CommonContact();
      }
    }

**SocialContactProvider**

In eXo Platform, when using ``ContactProvider``, you can use the
``SocialContactProvider`` classes which gets users' profiles by userId
via the ``IdentityManager`` class.

.. code:: java

    public CommonContact getCommonContact(String userId) {
      CommonContact contact = new CommonContact();
      try {
        IdentityManager identityM = (IdentityManager) PortalContainer.getInstance().getComponentInstanceOfType(IdentityManager.class);
        Identity userIdentity = identityM.getIdentity(OrganizationIdentityProvider.NAME, userId, true);
        Profile profile = userIdentity.getProfile();
        if (profile.contains(Profile.EMAIL)) {
          contact.setEmailAddress(profile.getProperty(Profile.EMAIL).toString());
        }
        if (profile.contains(Profile.FIRST_NAME)) {
          contact.setFirstName(profile.getProperty(Profile.FIRST_NAME).toString());
        }
        if (profile.contains(Profile.LAST_NAME)) {
          contact.setLastName(profile.getProperty(Profile.LAST_NAME).toString());
        }
        contact.setAvatarUrl(profile.getAvatarImageSource());
        if (profile.contains(Profile.GENDER)) {
          contact.setGender(profile.getProperty(Profile.GENDER).toString());
        }

        if (profile.contains(Profile.CONTACT_PHONES)) {
          contact.setPhone(profile.getProperty(Profile.CONTACT_PHONES).toString());
        }
        if (profile.contains(Profile.URL)) {
          contact.setWebSite(profile.getProperty(Profile.URL).toString());
        }
      } catch (Exception e) {
        if (LOG.isErrorEnabled()) LOG.error(String.format("can not load contact from eXo Social Profile with user [%s]", userId), e);
      }
      return contact;
    }

-  The information which is get by the user includes:

+-----------------+--------------+-----------------------+
| Name            | Type         | Description           |
+=================+==============+=======================+
| **email**       | ``String``   | Email of user.        |
+-----------------+--------------+-----------------------+
| **firstName**   | ``String``   | First name of user.   |
+-----------------+--------------+-----------------------+
| **lastName**    | ``String``   | Last name of user.    |
+-----------------+--------------+-----------------------+

-  The information which is get via **UserProfile** includes:

+----------------------------------------------------+--------------+------------------------------------------+
| Attribute                                          | Type         | Description                              |
+====================================================+==============+==========================================+
| **user.other-info.avatar.url**                     | ``String``   | The path containing the user's avatar.   |
+----------------------------------------------------+--------------+------------------------------------------+
| **user.bdate**                                     | ``String``   | The user's birthday.                     |
+----------------------------------------------------+--------------+------------------------------------------+
| **user.home-info.postal.city**                     | ``String``   | The home city of user.                   |
+----------------------------------------------------+--------------+------------------------------------------+
| **user.home-info.postal.country**                  | ``String``   | The home country of user.                |
+----------------------------------------------------+--------------+------------------------------------------+
| **user.gender**                                    | ``String``   | The user's gender.                       |
+----------------------------------------------------+--------------+------------------------------------------+
| **user.jobtitle**                                  | ``String``   | The user's job.                          |
+----------------------------------------------------+--------------+------------------------------------------+
| **user.home-info.telecom.telephone.number**        | ``String``   | The home phone number of user.           |
+----------------------------------------------------+--------------+------------------------------------------+
| **user.business-info.telecom. telephone.number**   | ``String``   | The mobile number of user.               |
+----------------------------------------------------+--------------+------------------------------------------+
| **user.home-info.online.uri**                      | ``String``   | The individual websites of user.         |
+----------------------------------------------------+--------------+------------------------------------------+

.. _PLFRefGuide.Configurations.Components.Poll:

Poll components
~~~~~~~~~~~~~~~~~

+-------------------------------------------------+------------------------------------------------------+----------------------------------------------------------------------------+
| Key                                             | Data type                                            | Description                                                                |
+=================================================+======================================================+============================================================================+
| **org.exoplatform.poll. service.DataStorage**   | org.exoplatform.poll.service. impl.JCRDataStorage    | Includes all public APIs to interact with the UI component and database.   |
+-------------------------------------------------+------------------------------------------------------+----------------------------------------------------------------------------+
| **org.exoplatform.poll. service.PollService**   | org.exoplatform.poll.service. impl.PollServiceImpl   | Stores data of Polls via the JCR system.                                   |
+-------------------------------------------------+------------------------------------------------------+----------------------------------------------------------------------------+
       
.. _PLFRefGuide.Configurations.ExternalComponentPlugins:

==========================
External component plugins
==========================


This section consists of the following main topics:

-  :ref:`Common plugins <PLFRefGuide.Configurations.ExternalComponentPlugins.Commons>`

   Description of the main component plugins used in Commons, sample
   configurations, init-params and how to use these plugins.

-  :ref:`Social plugins <PLFRefGuide.Configurations.ExternalComponentPlugins.Social>`

   Description of the main component plugins used in Social, sample
   configurations, init-params and how to use these plugins.

-  :ref:`Wiki plugins <PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki>`

   Information about main component plugins used in Wiki, consisting of
   Wiki Template Page plugin and Page Resolver.

-  :ref:`Contentplugins <PLFRefGuide.Configurations.ExternalComponentPlugins.Content>`

   Description of the main component plugins used in Content, sample
   configurations, init-params and how to use these plugins.

-  :ref:`Calendar plugins <PLFRefGuide.Configurations.ExternalComponentPlugins.Calendar>`

   Description of the main component plugins used in Calendar, sample
   configurations, init-params and how to use these plugins.

-  :ref:`Init data plugin <PLFRefGuide.Configurations.ExternalComponentPlugins.InitData>`

   Configuration for initializing default data for Forum, Answers and
   Poll.

-  :ref:`Roles plugin <PLFRefGuide.Configurations.ExternalComponentPlugins.Roles>`

   How to configure the Roles plugin in Forum.

-  :ref:`Forum plugins <PLFRefGuide.Configurations.ExternalComponentPlugins.ForumPlugins>`

   Description of the main component plugins used in Forum, sample
   configurations, init-params and how to use these plugins.

-  :ref:`FAQ plugins <PLFRefGuide.Configurations.ExternalComponentPlugins.FAQPlugins>`

   Description of the main component plugins used to configure the FAQ
   application of eXo Platform.


.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Commons:

Common plugins
~~~~~~~~~~~~~~~

This section describes the main component plugins in Commons (used by
any eXo Platform modules), sample configurations with explanation about
init-params and how to use these plugins.

Currently, only CSS Class Manager plugin is included in this section:

-  :ref:`CSS Class Manager <PLFRefGuide.Configurations.ExternalComponentPlugins.Commons.CssClassManager>`

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Commons.CssClassManager:

CSS Class Manager
------------------

This plugin is used to manage CSS class of file icons.

You can find the configuration file of this component at:
``commons-extension.war!/WEB-INF/conf/commons-extension/css-class-configuration.xml``.

To use the plugin in the component configuration, you must configure the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.webui.cssfile.CssClassManager</target-component>

**Sample Configuration**

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.webui.cssfile.CssClassManager</target-component>
        <component-plugin>
            <name>forum.default.cssclass</name>
            <set-method>registerCssClassPlugin</set-method>
            <type>org.exoplatform.webui.cssfile.CssClassPlugin</type>
            <description>default supported CSS class icon file</description>
            <init-params>
                <object-param>
                    <name>default</name>
                    <description></description>
                    <object type="org.exoplatform.webui.cssfile.CssClassIconFile">
                        <field name="type">
                            <string>default</string>
                        </field>
                        <field name="cssClass">
                            <string>FileDefault</string>
                        </field>
                        <field name="groupFileTypes">
                            <string><![CDATA[applicationoctet-stream]]></string>
                        </field>
                    </object>
                </object-param>
                ...
                <object-param>
                    <name>zip</name>
                    <description></description>
                    <object type="org.exoplatform.webui.cssfile.CssClassIconFile">
                        <field name="type">
                            <string>zip</string>
                        </field>
                        <field name="cssClass">
                            <string>FileArchiveZip</string>
                        </field>
                        <field name="groupFileTypes">
                            <string><![CDATA[FileZip,applicationzip]]></string>
                        </field>
                    </object>
                </object-param>
                ...
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``forum.default.cssclass``

-  **Type**: ``org.exoplatform.webui.cssfile.CssClassPlugin``

-  **Object type**: ``org.exoplatform.webui.cssfile.CssClassIconFile``

+----------------------+--------------+-------------------------------------------------------------------------------+
| **Field**            | **Type**     | **Description**                                                               |
+======================+==============+===============================================================================+
| **type**             | ``string``   | The file extension.                                                           |
+----------------------+--------------+-------------------------------------------------------------------------------+
| **cssClass**         | ``string``   | The CSS class which is corresponding to the file extension.                   |
+----------------------+--------------+-------------------------------------------------------------------------------+
| **groupFileTypes**   | ``string``   | The list of file types which have the same CSS class as the file extension.   |
+----------------------+--------------+-------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Social:

Social plugins
~~~~~~~~~~~~~~~

This section describes the main component plugins used in Social, sample
configurations with explanation about init-params and how to use these
plugins.

-  :ref:`Activity Resource Bundle <PLFRefGuide.Configurations.ExternalComponentPlugins.Social.ActivityResourceBundlePlugin>`

-  :ref:`Identity Provider <PLFRefGuide.Configurations.ExternalComponentPlugins.Social.IdentityProviderPluginIdentityManager>`

-  :ref:`Mentions Processor <PLFRefGuide.Configurations.ExternalComponentPlugins.Social.MentionsProcessor>`

-  :ref:`OSHtml Sanitizer Processor <PLFRefGuide.Configurations.ExternalComponentPlugins.Social.OSHtmlSanitizerProcessor>`

-  :ref:`Portlet Preference Required <PLFRefGuide.Configurations.ExternalComponentPlugins.Social.PortletPreferenceRequiredPlugin>`

-  :ref:`Profile Updates Publisher <PLFRefGuide.Configurations.ExternalComponentPlugins.Social.ProfileUpdatesPublisher>`

-  :ref:`Relationship Publisher <PLFRefGuide.Configurations.ExternalComponentPlugins.Social.RelationshipPublisher>`

-  :ref:`Social Chromattic LifeCycle <PLFRefGuide.Configurations.ExternalComponentPlugins.Social.SocialChromatticLifeCycle>`

-  :ref:`Space Activity Publisher <PLFRefGuide.Configurations.ExternalComponentPlugins.Social.SpaceActivityPublisher>`

-  :ref:`Template Params Processor <PLFRefGuide.Configurations.ExternalComponentPlugins.Social.TemplateParamsProcessor>`

-  :ref:`URL Converter Filter <PLFRefGuide.Configurations.ExternalComponentPlugins.Social.URLConverterFilterPlugin>`

-  :ref:`OpenSocial 2-legged OAuth <PLFRefGuide.DeveloperReferences.OpenSocial2LeggedOAuth>`

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Social.ActivityResourceBundlePlugin:

Activity Resource Bundle
-------------------------


This plugin is used to register the external resource bundle for the
internationalized activity type.

**Sample configuration**:

.. code:: xml

    <component-plugin>
      <name>exosocial:spaces</name>
      <!-- activity type -->
      <set-method>addActivityResourceBundlePlugin</set-method>
      <type>org.exoplatform.social.core.processor.ActivityResourceBundlePlugin</type>
      <init-params>
        <object-param>
          <name>locale.social.Core</name>
          <!-- resource bundle key file -->
          <description>activity key type resource bundle mapping for exosocial:spaces</description>
          <object type="org.exoplatform.social.core.processor.ActivityResourceBundlePlugin">
            <field name="activityKeyTypeMapping">
              <map type="java.util.HashMap">
                <entry>
                  <key>
                    <string>space_created</string>
                  </key>
                  <value>
                    <string>SpaceActivityPublisher.space_created</string>
                  </value>
                </entry>
                <entry>
                  <key>
                    <string>manager_role_granted</string>
                  </key>
                  <value>
                    <string>SpaceActivityPublisher.manager_role_granted</string>
                  </value>
                </entry>
                <entry>
                  <key>
                    <string>manager_role_revoked</string>
                  </key>
                  <value>
                    <string>SpaceActivityPublisher.manager_role_revoked</string>
                  </value>
                </entry>
                <entry>
                  <key>
                    <string>has_joined</string>
                  </key>
                  <value>
                    <string>SpaceActivityPublisher.has_joined</string>
                  </value>
                </entry>
                <entry>
                  <key>
                    <string>has_left</string>
                  </key>
                  <value>
                    <string>SpaceActivityPublisher.has_left</string>
                  </value>
                </entry>
                <entry>
                  <key>
                    <string>user_joined</string>
                  </key>
                  <value>
                    <string>SpaceActivityPublisher.user_joined</string>
                  </value>
                </entry>
                <entry>
                  <key>
                    <string>member_left</string>
                  </key>
                  <value>
                    <string>SpaceActivityPublisher.member_left</string>
                  </value>
                </entry>
                <entry>
                  <key>
                    <string>space_renamed</string>
                  </key>
                  <value>
                    <string>SpaceActivityPublisher.space_renamed</string>
                  </value>
                </entry>
                <entry>
                  <key>
                    <string>space_description_edited</string>
                  </key>
                  <value>
                    <string>SpaceActivityPublisher.space_description_edited</string>
                  </value>
                </entry>
                <entry>
                  <key>
                    <string>space_avatar_edited</string>
                  </key>
                  <value>
                    <string>SpaceActivityPublisher.space_avatar_edited</string>
                  </value>
                </entry>
              </map>
            </field>
          </object>
        </object-param>
      </init-params>
    </component-plugin>

In which:

-  **Name**: ``exosocial:spaces``

-  **Set-method**: ``addActivityResourceBundlePlugin``

-  **Type**:
   ``org.exoplatform.social.core.processor.ActivityResourceBundlePlugin``

-  **Init-params**:

+--------------------------+---------------------------------+
| Object-param             | Description                     |
+==========================+=================================+
| **locale.social.Core**   | The resource bundle key file.   |
+--------------------------+---------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Social.IdentityProviderPluginIdentityManager:

Identity Provider
------------------

The plugin provides the identity for a space.

**Sample configuration**:

.. code:: xml

    <component-plugins>
      <component-plugin>
        <name>SpaceIdentityProvider plugin</name>
        <set-method>registerIdentityProviders</set-method>
        <type>org.exoplatform.social.core.identity.IdentityProviderPlugin</type>
        <init-params>
          <values-param>
            <name>providers</name>
            <description>Identity Providers</description>
            <value>org.exoplatform.social.core.identity.provider.SpaceIdentityProvider</value>
          </values-param>
        </init-params>
      </component-plugin>
    </component-plugins>

In which:

-  **Name**: ``SpaceIdentityProvider plugin``

-  **Set-method**: ``registerIdentityProviders``

-  **Type**:
   ``org.exoplatform.social.core.identity.IdentityProviderPlugin``

-  **Init-params**:

+-----------------+--------------------------------------+---------------------------------------------------------------------------+--------------------------------------------------------+
| Name            | Possible value                       | Default value                                                             | Description                                            |
+=================+======================================+===========================================================================+========================================================+
| **providers**   | ``Every other identity providers``   | ``org.exoplatform.social.core.identity.provider.SpaceIdentityProvider``   | Identity Provider instances for managing identities.   |
+-----------------+--------------------------------------+---------------------------------------------------------------------------+--------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Social.MentionsProcessor:

Mentions Processor
--------------------

This plugin allows creating a link to a user profile when the user is
mentioned in the activity content.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.social.core.manager.ActivityManager</target-component>

**Sample Configuration**:

.. code:: xml

    <component-plugin>
      <name>MentionsProcessor</name>
      <set-method>addProcessorPlugin</set-method>
      <type>org.exoplatform.social.core.processor.MentionsProcessor</type>
      <init-params>
        <value-param>
          <name>priority</name>
          <description>priority of this processor (lower are executed first)</description>
          <value>2</value>
        </value-param>
      </init-params>
    </component-plugin>

In which:

-  **Name**: ``MentionsProcessor``

-  **Set-method**: ``addProcessorPlugin``

-  **Type**: ``org.exoplatform.social.core.processor.MentionsProcessor``

-  **Init-params**:

+----------------+------------------+-----------------+-------------------------------------------------------------------------------+
| Name           | Possible value   | Default value   | Description                                                                   |
+================+==================+=================+===============================================================================+
| **priority**   | ``integer``      | 2               | The priority of this processor. The lower priority level is executed first.   |
+----------------+------------------+-----------------+-------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Social.OSHtmlSanitizerProcessor:

OSHtml Sanitizer Processor
----------------------------

The plugin renders valid HTML tags appearing in the Activity body
(content).

**Sample configuration**:

.. code:: xml

    <component>
      <key>org.exoplatform.social.core.manager.ActivityManager</key>
      <type>org.exoplatform.social.core.manager.ActivityManagerImpl</type>
      <component-plugins>
        <component-plugin>
          <name>OSHtmlSanitizer</name>
          <set-method>addProcessorPlugin</set-method>
          <type>org.exoplatform.social.core.processor.OSHtmlSanitizerProcessor</type>
        </component-plugin>
      </component-plugins>
    </component>

In which:

-  **Name**: ``OSHtmlSanitizer``

-  **Set-method**: ``addProcessorPluginn``

-  **Type**:
   ``org.exoplatform.social.core.processor.OSHtmlSanitizerProcessor``

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Social.PortletPreferenceRequiredPlugin:

Portlet Preference Required
----------------------------

This plugin is used to configure the list of portlet names which will
have portlet preference of space context.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.social.core.space.spi.SpaceService</target-component>

**Sample configuration**:

.. code:: xml

    <component-plugin>
      <name>portlets.prefs.required</name>
      <set-method>setPortletsPrefsRequired</set-method>
      <type>org.exoplatform.social.core.application.PortletPreferenceRequiredPlugin</type>
      <init-params>
        <values-param>
          <name>portletsPrefsRequired</name>
          <value>SpaceActivityStreamPortlet</value>
          <value>SpaceSettingPortlet</value>
          <value>MembersPortlet</value>
        </values-param>
      </init-params>
    </component-plugin>

In which:

-  **Name**: ``portlets.prefs.required``

-  **Set-method**: ``setPortletsPrefsRequired``

-  **Type**:
   ``org.exoplatform.social.core.application.PortletPreferenceRequiredPlugin``

-  **Init-params**:

+-----------------------------+---------------------+-----------------------------------------------------------------------+-------------------------------------------------------------------------------+
| Name                        | Possible value      | Default value                                                         | Description                                                                   |
+=============================+=====================+=======================================================================+===============================================================================+
| **portletsPrefsRequired**   | ``Portlet names``   | ``SpaceActivityStreamPortlet; SpaceSettingPortlet; MembersPortlet``   | The list of portlets which need to be saved and get the space context name.   |
+-----------------------------+---------------------+-----------------------------------------------------------------------+-------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Social.ProfileUpdatesPublisher:

Profile Updates Publisher
---------------------------


This plugin is used to process activities and comments related to
changes on the users' profiles.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
      <target-component>org.exoplatform.social.core.manager.IdentityManager</target-component>
      <component-plugin>
        <name>ProfileUpdatesPublisher</name>
        <set-method>addProfileListener</set-method>
        <type>org.exoplatform.social.core.application.ProfileUpdatesPublisher</type>
      </component-plugin>
    </external-component-plugins>

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Social.RelationshipPublisher:

Relationship Publisher
-----------------------

This plugin is used to process activities and comments related to
changes on the relationship between two users.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
      <target-component>org.exoplatform.social.core.manager.RelationshipManager</target-component>
      <component-plugin>
        <name>RelationshipPublisher</name>
        <set-method>addListenerPlugin</set-method>
        <type>org.exoplatform.social.core.application.RelationshipPublisher</type>
      </component-plugin>
    </external-component-plugins>

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Social.SocialChromatticLifeCycle:

Social Chromattic LifeCycle
----------------------------

This plugin is used to manage **ChromatticSession** in the Social
project.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.commons.chromattic.ChromatticManager</target-component>

**Sample configuration**:

.. code:: xml

    <component-plugin>
      <name>chromattic</name>
      <set-method>addLifeCycle</set-method>
      <type>org.exoplatform.social.common.lifecycle.SocialChromatticLifeCycle</type>
      <init-params>
        <value-param>
          <name>domain-name</name>
          <value>soc</value>
        </value-param>
        <value-param>
          <name>workspace-name</name>
          <value>social</value>
        </value-param>
        <value-param profiles="all,default,minimal">
          <name>workspace-name</name>
          <value>social</value>
        </value-param>
        <values-param>
          <name>entities</name>
          <value>org.exoplatform.social.core.chromattic.entity.ProviderRootEntity</value>
          <value>org.exoplatform.social.core.chromattic.entity.ProviderEntity</value>

          <value>org.exoplatform.social.core.chromattic.entity.IdentityEntity</value>
          <value>org.exoplatform.social.core.chromattic.entity.ProfileEntity</value>
          <value>org.exoplatform.social.core.chromattic.entity.ActivityProfileEntity</value>

          <value>org.exoplatform.social.core.chromattic.entity.RelationshipEntity</value>
          <value>org.exoplatform.social.core.chromattic.entity.RelationshipListEntity</value>

          <value>org.exoplatform.social.core.chromattic.entity.HidableEntity</value>
          <value>org.exoplatform.social.core.chromattic.entity.LockableEntity</value>
          <value>org.exoplatform.social.core.chromattic.entity.ActivityEntity</value>
          <value>org.exoplatform.social.core.chromattic.entity.ActivityListEntity</value>
          <value>org.exoplatform.social.core.chromattic.entity.ActivityDayEntity</value>
          <value>org.exoplatform.social.core.chromattic.entity.ActivityMonthEntity</value>
          <value>org.exoplatform.social.core.chromattic.entity.ActivityYearEntity</value>
          <value>org.exoplatform.social.core.chromattic.entity.ActivityParameters</value>

          <value>org.exoplatform.social.core.chromattic.entity.SpaceRootEntity</value>
          <value>org.exoplatform.social.core.chromattic.entity.SpaceEntity</value>
          <value>org.exoplatform.social.core.chromattic.entity.SpaceListEntity</value>
          <value>org.exoplatform.social.core.chromattic.entity.SpaceRef</value>
        </values-param>
        <properties-param>
          <name>options</name>
          <property name="org.chromattic.api.Option.root_node.path" value="/production"/>
          <property name="org.chromattic.api.Option.root_node.create" value="true"/>
        </properties-param>
      </init-params>
    </component-plugin>

In which:

-  **Name**: ``chromattic``

-  **Set-method**: ``addLifeCycle``

-  **Type**:
   ``org.exoplatform.social.common.lifecycle.SocialChromatticLifeCycle``

-  **Init-params**:

+----------------------+---------------------+-------------------------------------------------------------------------------------------+
| Value-param          | Possible value      | Description                                                                               |
+======================+=====================+===========================================================================================+
| **domain-name**      | ``String``          | The lifecycle domain name.                                                                |
+----------------------+---------------------+-------------------------------------------------------------------------------------------+
| **workspace-name**   | ``String``          | The repository workspace name that is associated with this lifecycle.                     |
+----------------------+---------------------+-------------------------------------------------------------------------------------------+
| **entities**         | ``List<String>``    | The list of chromattic entities that will be registered against the chromattic builder.   |
+----------------------+---------------------+-------------------------------------------------------------------------------------------+

**Properties-param**: **option**

+---------------------------------------------------+------------------+-------------------+----------------------------------------------------------------------------------------------------------------+
| Property name                                     | Possible value   | Default value     | Description                                                                                                    |
+===================================================+==================+===================+================================================================================================================+
| **org.chromattic.api.Option.root\_node.path**     | ``String``       | ``/production``   | The path of the root node.                                                                                     |
+---------------------------------------------------+------------------+-------------------+----------------------------------------------------------------------------------------------------------------+
| **org.chromattic.api.Option.root\_node.create**   | ``Boolean``      | ``true``          | Specifies whether or not the root node is created by the **ROOT\_NODE\_PATH** option when it does not exist.   |
+---------------------------------------------------+------------------+-------------------+----------------------------------------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Social.SpaceActivityPublisher:

Space Activity Publisher
--------------------------

This plugin is used to process activities and comments related to
spaces, such as creating spaces, editing space information, users
joining/leaving spaces, or granting/removing the "manager" role of the
spaces.

**Sample configuration**:

.. code:: xml

    <component-plugin>
      <name>SpaceActivityPublisher</name>
      <set-method>addSpaceListener</set-method>
      <type>org.exoplatform.social.core.application.SpaceActivityPublisher</type>
    </component-plugin>

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Social.TemplateParamsProcessor:

Template Params Processor
--------------------------

This plugin uses the value in the **template** parameter of the activity
and replaces the title and body of the activity with the **template**
parameter of this activity.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.social.core.manager.ActivityManager</target-component>

**Sample configuration**:

.. code:: xml

    <component-plugin>
      <name>TemplateParamsProcessor</name>
      <set-method>addProcessorPlugin</set-method>
      <type>org.exoplatform.social.core.processor.TemplateParamsProcessor</type>
      <init-params>
        <value-param>
          <name>priority</name>
          <value>1</value>
        </value-param>
      </init-params>
    </component-plugin>

In which:

-  **Name**: ``TemplateParamsProcessor``

-  **Set-method**: ``addProcessorPlugin``

-  **Type**:
   ``org.exoplatform.social.core.processor.TemplateParamsProcessor``

-  **Init-params**:

+----------------+------------------+-----------------+-------------------------------------------------------------------------------+
| Name           | Possible value   | Default value   | Description                                                                   |
+================+==================+=================+===============================================================================+
| **priority**   | ``integer``      | 1               | The priority of this processor. The lower priority level is executed first.   |
+----------------+------------------+-----------------+-------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Social.URLConverterFilterPlugin:

URL Converter Filter
---------------------

This plugin converts all the URLs in the activity into the hyperlinks.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.social.common.xmlprocessor.XMLProcessor</target-component>

**Sample configuration**:

.. code:: xml

    <component-plugin>
      <name>URLConverterFilterPlugin</name>
      <set-method>addFilterPlugin</set-method>
      <type>org.exoplatform.social.common.xmlprocessor.filters.URLConverterFilterPlugin</type>
      <init-params>
        <value-param>
          <name>urlMaxLength</name>
          <description>the max length of URL</description>
          <value>-1</value>
        </value-param>
      </init-params>
    </component-plugin>

In which:

-  **Name**: ``URLConverterFilterPlugin``

-  **Set-method**: ``addFilterPlugin``

-  **Type**:
   ``org.exoplatform.social.common.xmlprocessor.filters.URLConverterFilterPlugin``

-  **Init-params**:

+--------------------+------------------+-----------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Value-param        | Possible value   | Default value   | Description                                                                                                                                                  |
+====================+==================+=================+==============================================================================================================================================================+
| **urlMaxLength**   | ``integer``      | -1              | The maximum length of the URL. If the URL exceeds the maximum length, the URL will be shortened. If the value is -1, it means the URL is not be shortened.   |
+--------------------+------------------+-----------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _PLFRefGuide.DeveloperReferences.OpenSocial2LeggedOAuth:

OpenSocial 2-legged OAuth
--------------------------

This section is about configuring the 2-legged OAuth scenario in
OpenSocial. (Reference:
`OpenSocial.org <http://docs.opensocial.org/display/OS/Home>`__)

For more information, visit `2-legged OAuth for the OpenSocial REST
API. <http://sites.google.com/site/oauthgoog/2leggedoauth/2opensocialrestapi>`__

**Generate the key**

::

    $ openssl req -newkey rsa:1024 -days 365 -nodes -x509 -keyout testkey.pem \
         -out testkey.pem -subj '/CN=mytestkey'
    $ openssl pkcs8 -in testkey.pem -out oauthkey.pem -topk8 -nocrypt -outform PEM

**Configure the property file**

Edit ``container.js`` and change the following parameter to point to
your private key and key name.

::

    "gadgets.signingKeyFile" : "oauth.pem",
    "gadgets.signingKeyName" : "oauthKey",

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki:

Wiki plugins
~~~~~~~~~~~~~

This section describes the main component plugins used in Wiki, sample
configurations with explanation about init-params and how to use these
plugins.

-  :ref:`Wiki Template Page plugin <PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki.WikiTemplatePagePlugin>`

-  :ref:`Page Resolver <PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki.PageResolver>`

-  :ref:`Data Injector <PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki.DataInjector>`

-  :ref:`New User Listener <PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki.NewUserListener>`

-  :ref:`Session Created Listener <PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki.SessionCreatedListener>`

-  :ref:`Session Destroyed Listener <PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki.SessionDestroyedListener>`

-  :ref:`WikiChromatticLifecycle <PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki.WikiChromatticLifecycle>`

-  :ref:`Uncached Macros <PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki.WikiUncache>`

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki.WikiTemplatePagePlugin:

Wiki Template Page
-------------------

This plugin is used to inject default Wiki templates. The configuration
can be found in
``wiki-webapp/src/main/webapp/WEB-INF/conf/configuration.xml``.

**Sample configuration**:

.. code:: xml

    <component-plugin><name>Template page initializer</name>
        <set-method>addWikiTemplatePagePlugin</set-method>
        <type>org.exoplatform.wiki.template.plugin.WikiTemplatePagePlugin</type>
        <description>XML Deployment Plugin</description>
        <init-params>
            <values-param>
                <name>sourcePaths</name>
                <description>path of file imported. </description>
                <value>war:/conf/data/template.xml</value>
                <!--value>war:/conf/data/file-name.xml</value -->
            </values-param>
        </init-params>
    </component-plugin>

In which:

-  **Name**: ``sourcePaths``

-  **Set-method**: ``addWikiTemplatePagePlugin``

-  **Type**:
   ``org.exoplatform.wiki.template.plugin.WikiTemplatePagePlugin``

**Init-params**

+-------------------+--------------+-----------------------------------+-----------------------------------------+
| **Name**          | **Type**     | **Default value**                 | **Description**                         |
+===================+==============+===================================+=========================================+
| **sourcePaths**   | ``String``   | ``war:/conf/data/template.xml``   | The path to import the template file.   |
+-------------------+--------------+-----------------------------------+-----------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki.PageResolver:

Page Resolver
--------------

This plugin is used to analyze the URLs to output the page information
that users want to access. The configuration can be found in
``wiki-injector/src/main/resources/conf/portal/configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.wiki.resolver.PageResolver</target-component>
        <component-plugin>
            <name>urlresolver</name>
            <set-method>setResolverPlugin</set-method>
            <type>org.exoplatform.wiki.resolver.URLResolver</type>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``urlresolver``

-  **Set-method**: ``setResolverPlugin``

-  **Type**: ``org.exoplatform.wiki.resolver.URLResolver``

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki.DataInjector:

Data Injector
--------------

This plugin is used to initialize data for Wiki. The configuration can
be found in
``wiki-injector/src/main/resources/conf/portal/configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.bench.DataInjectorService</target-component>
        <component-plugin>
            <name>WikiDataInjector</name>
            <set-method>addInjector</set-method>
            <type>org.exoplatform.wiki.bench.WikiDataInjector</type>
            <description>inject data for Wiki</description>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``WikiDataInjector``

-  **Set-method**: ``addInjector``

-  **Type**: ``org.exoplatform.wiki.bench.WikiDataInjector``

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki.NewUserListener:

New User Listener
------------------

This plugin is used to listen to events when new users are added to the
system. As each user can have a default personal Wiki space created. The
configuration can be found in
``wiki-webapp/src/main/webapp/WEB-INF/conf/configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
      <target-component>org.exoplatform.services.organization.OrganizationService</target-component>
      <component-plugin>
          <name>ecm.new.user.event.listener</name>
          <set-method>addListenerPlugin</set-method>
          <type>org.exoplatform.services.jcr.ext.hierarchy.impl.NewUserListener</type>
          <description>description</description>
          <init-params>
            <object-param>
              <name>configuration</name>
              <description>description</description>
              <object type="org.exoplatform.services.jcr.ext.hierarchy.impl.HierarchyConfig">
                <field  name="jcrPaths">
                  <collection type="java.util.ArrayList">
                    <value>
                      <object type="org.exoplatform.services.jcr.ext.hierarchy.impl.HierarchyConfig$JcrPath">
                        <field name="alias"><string>userApplicationData</string></field>
                        <field name="path"><string>ApplicationData</string></field>
                        <field name="nodeType"><string>nt:unstructured</string></field>
                        <field name="permissions">
                          <collection type="java.util.ArrayList">
                            <value>
                              <object type="org.exoplatform.services.jcr.ext.hierarchy.impl.HierarchyConfig$Permission">
                                <field name="identity"><string>*:/platform/administrators</string></field>
                                <field name="read"><string>true</string></field>
                                <field name="addNode"><string>true</string></field>
                                <field name="setProperty"><string>true</string></field>
                                <field name="remove"><string>true</string></field>
                              </object>
                            </value>
                          </collection>
                        </field>
                      </object>
                    </value>
                  </collection>
                </field>
              </object>
            </object-param>
          </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``urlresolver``

-  **Set-method**: ``setResolverPlugin``

-  **Type**:
   ``org.exoplatform.services.jcr.ext.hierarchy.impl.NewUserListener``

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki.SessionCreatedListener:

Session Created Listener
-------------------------

This plugin is used to listen to events when users log in (start a
session). The configuration can be found in
``wiki-service/src/main/resources/conf/portal/configuration.xml``.

**Sample configuration**:

.. code:: xml

     <external-component-plugins>
        <target-component>org.exoplatform.services.listener.ListenerService</target-component>
        <component-plugin>
          <name>org.exoplatform.web.GenericHttpListener.sessionCreated</name>
          <set-method>addListener</set-method>
          <type>org.exoplatform.wiki.service.impl.SessionCreatedListener</type>
          <description>description</description>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``urlresolver``

-  **Set-method**: ``addListener``

-  **Type**:
   ``org.exoplatform.wiki.service.impl.SessionCreatedListener``

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki.SessionDestroyedListener:

Session Destroyed Listener
----------------------------

This plugin is used to listen to events when users logout (finish a
session or session timeout). The configuration can be found in
``wiki-service/src/main/resources/conf/portal/configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.listener.ListenerService</target-component>
        <component-plugin>
            <name>org.exoplatform.web.GenericHttpListener.sessionDestroyed</name>
            <set-method>addListener</set-method>
            <type>org.exoplatform.wiki.service.impl.SessionDestroyedListener</type>
            <description>description</description>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``sessionDestroyed``

-  **Set-method**: ``addListener``

-  **Type**:
   ``org.exoplatform.wiki.service.impl.SessionDestroyedListener``

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki.WikiChromatticLifecycle:

Wiki Chromattic Lifecycle
--------------------------

This plugin is used configure workspace and node name with Chromattic.
The configuration can be found in
``wiki-service/src/main/resources/conf/portal/configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
            <target-component>org.exoplatform.commons.chromattic.ChromatticManager</target-component>
            <component-plugin>
              <name>chromattic</name>
              <set-method>addLifeCycle</set-method>
              <type>org.exoplatform.wiki.service.impl.WikiChromatticLifeCycle</type>
              <init-params>
                <value-param>
                  <name>domain-name</name>
                  <value>wiki</value>
                </value-param>
                <value-param>
                  <name>workspace-name</name>
                  <value>collaboration</value>
                </value-param>
                <values-param>
                  <name>entities</name>
                  <value>org.exoplatform.wiki.mow.core.api.WikiStoreImpl</value>
                  <value>org.exoplatform.wiki.mow.core.api.wiki.PortalWiki</value>
                  <value>org.exoplatform.wiki.mow.core.api.wiki.PortalWikiContainer</value>
                  <value>org.exoplatform.wiki.mow.core.api.wiki.GroupWiki</value>
                  <value>org.exoplatform.wiki.mow.core.api.wiki.GroupWikiContainer</value>
                  <value>org.exoplatform.wiki.mow.core.api.wiki.UserWiki</value>
                  <value>org.exoplatform.wiki.mow.core.api.wiki.UserWikiContainer</value>
                  <value>org.exoplatform.wiki.mow.core.api.content.ParagraphImpl</value>
                  <value>org.exoplatform.wiki.mow.core.api.content.MarkupImpl</value>
                  <value>org.exoplatform.wiki.mow.core.api.content.WikiLink</value>
                  <value>org.chromattic.ext.ntdef.NTFile</value>
                  <value>org.chromattic.ext.ntdef.NTResource</value>
                  <value>org.exoplatform.wiki.chromattic.ext.ntdef.NTVersionHistory</value>
                  <value>org.exoplatform.wiki.chromattic.ext.ntdef.NTVersion</value>
                  <value>org.exoplatform.wiki.chromattic.ext.ntdef.NTVersionLabels</value>
                  <value>org.exoplatform.wiki.chromattic.ext.ntdef.NTFrozenNode</value>
                  <value>org.exoplatform.wiki.chromattic.ext.ntdef.VersionableMixin</value>
                  <value>org.exoplatform.wiki.mow.core.api.content.AnnotationImpl</value>
                </values-param>
            </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``chromattic``

-  **Set-method**: ``addLifeCycle``

-  **Type**:
   ``org.exoplatform.wiki.service.impl.WikiChromatticLifeCycle``

**Init-params**

+----------------------+--------------+---------------------+---------------------------------------------------------------------------------+
| **Name**             | **Type**     | **Default value**   | **Description**                                                                 |
+======================+==============+=====================+=================================================================================+
| **domain-name**      | ``String``   | ``wiki``            | The domain name where JCR stores Wiki data.                                     |
+----------------------+--------------+---------------------+---------------------------------------------------------------------------------+
| **workspace-name**   | ``String``   | ``collaboration``   | The workspace name where JCR stores Wiki data.                                  |
+----------------------+--------------+---------------------+---------------------------------------------------------------------------------+
| **entities**         | ``String``   |                     | List of Wiki classes that contain the Chromattic configuration of node types.   |
+----------------------+--------------+---------------------+---------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Wiki.WikiUncache:

Uncached Macros
----------------

This plugin is used to list the macros which must not be cached. This is
required for macros generating dynamic content (meaning the content
generated by the macro can change even if the wiki page source is not
updated). Generated HTML version of Wiki pages are cached to avoid
generating it again at each display. If a page contains macros producing
dynamic content, its HTML version must not be cached to be sure it is
always up to date. For example the *rss* macro provides new content as
soon as new articles are published on the remote website, so it must be
listed as an uncached macro. The default configuration of this plugin
can be found in
``wiki-service/src/main/resources/conf/portal/cache-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.wiki.service.WikiService</target-component>
        <component-plugin>
            <name>addUnCachedMacro</name>
            <set-method>addUnCachedMacro</set-method>
            <type>org.exoplatform.wiki.rendering.cache.UnCachedMacroPlugin</type>
            <description>Add the uncached macro list</description>
            <init-params>
                <values-param>
                    <name>uncachedMacroes</name>
                    <value>rss</value>
                    <value>jira</value>
                </values-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: **addUnCachedMacro**

-  **Set-method**: **addUnCachedMacro**

-  **Type**:
   **org.exoplatform.wiki.rendering.cache.UnCachedMacroPlugin**

**Init-params**

+-----------------------+--------------+---------------------+--------------------------------+
| **Name**              | **Type**     | **Default value**   | **Description**                |
+=======================+==============+=====================+================================+
| **uncachedMacroes**   | ``String``   | ``rss, jira``       | The list of uncached macros.   |
+-----------------------+--------------+---------------------+--------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content:

Content plugins
~~~~~~~~~~~~~~~~

This section describes the main component plugins used in Content,
sample configurations with explanation about init-params and how to use
these plugins.

-  :ref:`Authoring Publication <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.AuthoringPublicationPlugin>`

-  :ref:`Content Type Filter <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.ContentTypeFilterPlugin>`

-  :ref:`Context <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.ContextPlugin>`

-  :ref:`Exclude Include Data Type <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.ExcludeMimeTypes>`

-  :ref:`Friendly <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.FriendlyPlugin>`

-  :ref:`Image Thumnail <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.ImageThumnailPlugin>`

-  :ref:`Ignore Portal <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.IgnorePortalPlugin>`

-  :ref:`Initial Webcontent <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.InitialWebcontentPlugin>`

-  :ref:`Link Deployment <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.LinkDeploymentPlugin>`

-  :ref:`Lock Groups Or Users <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.LockGroupsOrUsersPlugin>`

-  :ref:`Manage Drive <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.ManageDrivePlugin>`

-  :ref:`Manage View <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.ManageViewPlugin>`

-  :ref:`PDF Thumnail <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.PDFThumnailPlugin>`

-  :ref:`Portlet Template <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.PortletTemplatePlugin>`

-  :ref:`Query <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.QueryPlugin>`

-  :ref:`WatchDocumentService <PLFRefGuide.Configurations.Components.Content.WatchDocumentPlugin>`

-  :ref:`Remove Taxonomy <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.RemoveTaxonomyPlugin>`

-  :ref:`Script Action <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.ScriptActionPlugin>`

-  :ref:`Script <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.ScriptPlugin>`

-  :ref:`States Lifecycle <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.StatesLifecyclePlugin>`

-  :ref:`Tag Permission <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.TagPermissionPlugin>`

-  :ref:`Tag Style <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.TagStylePlugin>`

-  :ref:`Taxonomy <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.TaxonomyPlugin>`

-  :ref:`Template <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.TemplatePlugin>`

-  :ref:`Publication Deployment <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.PublicationDeploymentPlugin>`

-  :ref:`WCM Publication Deployment <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.WCMPublicationDeploymentPlugin>`

-  :ref:`XML Deployment <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.XMLdeploymentPlugin>`

-  :ref:`Abstract plugins <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.AbstractPlugins>`

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.AuthoringPublicationPlugin:

Authoring Publication
----------------------

This plugin is used to manage the publication lifecycle of web contents
and DMS document on a portal page with more states and versions. The
configuration is applied mainly in ``
      packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/content-extended/authoring/configuration.xml``.

**Sample configuration**:

.. code:: xml

    <component-plugin>
        <name>Authoring publication</name>
        <set-method>addPublicationPlugin</set-method>
        <type>org.exoplatform.services.wcm.extensions.publication.lifecycle.authoring.AuthoringPublicationPlugin
        </type>
        <description>This publication lifecycle publish a web content or DMS document to a portal page with more
        states and version.
        </description>
    </component-plugin>

In which:

-  **Name**: ``Authoring publication``

-  **Set-method**: ``addPublicationPlugin``

-  **Type**:
   ``org.exoplatform.services.wcm.extensions.publication.lifecycle.authoring.AuthoringPublicationPlugin``

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.ContentTypeFilterPlugin:

Content Type Filter
--------------------

This plugin is used to filter Content node types.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.cms.templates.TemplateService</target-component>

The configuration is applied mainly in
``/packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/dms-extension/dms/dms-templates-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.cms.templates.TemplateService</target-component>
        <component-plugin>
            <name>FilterContentTypeForWCMSpecificFolder</name>
            <set-method>addContentTypeFilterPlugin</set-method>
            <type>org.exoplatform.services.cms.templates.ContentTypeFilterPlugin</type>
            <description>this plugin is used to filter wcm nodetype</description>
            <init-params>
                <object-param>
                    <name>cssFolderFilter</name>
                    <description>only exo:cssFile can be created in exo:cssFolder</description>
                    <object type="org.exoplatform.services.cms.templates.ContentTypeFilterPlugin$FolderFilterConfig">
                        <field name="folderType">
                            <string>exo:cssFolder</string>
                        </field>
                        <field name="contentTypes">
                            <collection type="java.util.ArrayList">
                                <value>
                                    <string>exo:cssFile</string>
                                </value>
                            </collection>
                        </field>
                    </object>
                </object-param>
                <object-param>
                    ...
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``FilterContentTypeForWCMSpecificFolder``

-  **Set-method**: ``addContentTypeFilterPlugin``

-  **Type**:
   ``org.exoplatform.services.cms.templates.ContentTypeFilterPlugin``

-  **Object type**:
   ``org.exoplatform.services.cms.templates.ContentTypeFilterPlugin$FolderFilterConfig``

+--------------------+------------------+-----------------------------+---------------------+
| **Field**          | **Type**         | **Value**                   | **Description**     |
+====================+==================+=============================+=====================+
| **folderType**     | ``string``       | ``exo:cssFolder``           | The folder type.    |
+--------------------+------------------+-----------------------------+---------------------+
| **contentTypes**   | ``Collection``   | **{java.util.ArrayList}**   | The content type.   |
+--------------------+------------------+-----------------------------+---------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.ContextPlugin:

Context
--------

This plugin is used to store the context configuration of a publication
lifecycle. To use the plugin in the component configuration, you must
use the following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.wcm.extensions.publication.PublicationManager</target-component>

The configuration is applied mainly in
``packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/content-extended/authoring/configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.wcm.extensions.publication.PublicationManager</target-component>
        <component-plugin>
            <name>AddContext</name>
            <set-method>addContext</set-method>
            <type>org.exoplatform.services.wcm.extensions.publication.context.ContextPlugin</type>
            <init-params>
                <object-param>
                    <name>contexts</name>
                    <object type="org.exoplatform.services.wcm.extensions.publication.context.impl.ContextConfig">
                        <field name="contexts">
                            <collection type="java.util.ArrayList">
                                <value>
                                    <object type="org.exoplatform.services.wcm.extensions.publication.context.impl.ContextConfig$Context">
                                        <field name="name">
                                            <string>context2</string>
                                        </field>
                                        <field name="priority">
                                            <string>100</string>
                                        </field>
                                        <field name="lifecycle">
                                            <string>lifecycle2</string>
                                        </field>
                                        <field name="site">
                                            <string>acme</string>
                                        </field>
                                    </object>
                                </value>
                            </collection>
                        </field>
                    </object>
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``AddContext``

-  **Set-method**: ``addContext``

-  **Type**:
   ``org.exoplatform.services.wcm.extensions.publication.context.ContextPlugin``

-  **Object type**:
   ``org.exoplatform.services.wcm.extensions.publication.context.impl.ContextConfig``

+-----------------+--------------+------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Field**       | **Type**     | **Value**        | **Description**                                                                                                                                                              |
+=================+==============+==================+==============================================================================================================================================================================+
| **name**        | ``string``   | ``context2``     | The name of the context.                                                                                                                                                     |
+-----------------+--------------+------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **priority**    | ``string``   | ``100``          | The context priority, the higher number indicates higher priority. Because a site may have several lifecycles, the lifecycle with higher priority will be executed sooner.   |
+-----------------+--------------+------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **lifecycle**   | ``string``   | ``lifecycle2``   | The name of the lifecycle.                                                                                                                                                   |
+-----------------+--------------+------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **site**        | ``string``   | ``acme``         | The site that will apply the context configuration.                                                                                                                          |
+-----------------+--------------+------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.ExcludeMimeTypes:

Exclude Include Data Type
--------------------------

This plugin is used in the
`SiteSearchService <#PLFRefGuide.Configurations.Components.Content.Searching.SiteSearchService>`__
component to filter the search results before these results are
presented on the search page.

The configuration is applied mainly in ``
    core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-search-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <component-plugins>
        <component-plugin>
            <name>ExcludeMimeTypes</name>
            <set-method>addExcludeIncludeDataTypePlugin</set-method>
            <type>org.exoplatform.services.wcm.search.ExcludeIncludeDataTypePlugin</type>
            <init-params>
                <properties-param>
                    <name>search.exclude.datatypes</name>
                    <description>exclude some data type when search</description>
                    <property name="mimetypes" value="${wcm.search.excluded-mimetypes:text/css,text/javascript,application/x-javascript,text/ecmascript}"/>
                </properties-param>
            </init-params>
        </component-plugin>
    </component-plugins>

In which:

-  **Name**: ``ExcludeMimeTypes``

-  **Set-method**: ``addExcludeIncludeDataTypePlugin``

-  **Type**:
   ``org.exoplatform.services.wcm.search.ExcludeIncludeDataTypePlugin``

-  The plugin has the following parameter:

+-------------------------------+-----------------------------------------------+
| **Properties-param**          | **Description**                               |
+===============================+===============================================+
| **search.exclude.datatype**   | Excludes some data types when doing search.   |
+-------------------------------+-----------------------------------------------+

-  The ``search.exclude.datatype`` property includes two attributes:

+-----------------+----------------------------------------------------------------------------------------------------------+-------------------------------------------------------------------------+
| **Attribute**   | **Value**                                                                                                | **Description**                                                         |
+=================+==========================================================================================================+=========================================================================+
| **name**        | ``mimetypes``                                                                                            | The name of the property param.                                         |
+-----------------+----------------------------------------------------------------------------------------------------------+-------------------------------------------------------------------------+
| **value**       | ``${wcm.search.excluded-mimetypes:text/css,text/javascript,application/x-javascript,text/ecmascript}``   | The list of mimetypes which will be excluded from the search results.   |
+-----------------+----------------------------------------------------------------------------------------------------------+-------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.FriendlyPlugin:

Friendly
---------

This plugin is used to refine URLs in Content.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

          <target-component>org.exoplatform.services.wcm.friendly.FriendlyService</target-component>

Do as follows:

Set the profile Friendly for eXo Platform by adding the following
configuration to the ``setenv-customize.(sh|bat)`` file:

::

          SET EXO_PROFILES=all,friendly

Use the following sample configuration in the
``/WEB-INF/conf/content-extended/friendly/configuration.xml`` file of
the deployed war package.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
          <target-component>org.exoplatform.services.wcm.friendly.FriendlyService</target-component>
          <component-plugin>
            <name>FriendlyService.addConfiguration</name>
            <set-method>addConfiguration</set-method>
            <type>org.exoplatform.services.wcm.friendly.impl.FriendlyPlugin</type>
            <description>Configures</description>
            <priority>100</priority>
            <init-params>
              <value-param>
                <name>enabled</name>
                <value>${wcm.friendly.enabled:true}</value>
              </value-param>
              <!--
              <value-param>
                <name>servletName</name>
                <value>${wcm.friendly.servletName:content}</value>
              </value-param>
              -->
              <object-param>
                <name>friendlies.configuration</name>
                <object type="org.exoplatform.services.wcm.friendly.impl.FriendlyConfig">
                  <field name="friendlies">
                    <collection type="java.util.ArrayList">
                      <value>
                        <object type="org.exoplatform.services.wcm.friendly.impl.FriendlyConfig$Friendly">
                          <field name="friendlyUri"><string>${wcm.friendly.documents.friendlyUri:documents}</string></field>
                          <field name="unfriendlyUri"><string> ${wcm.friendly.documents.unfriendlyUri:/acme/detail?content-id=/repository/collaboration}</string></field>
                        </object>
                      </value>
                      <value>
                        <object type="org.exoplatform.services.wcm.friendly.impl.FriendlyConfig$Friendly">
                          <field name="friendlyUri"><string>${wcm.friendly.files.friendlyUri:files}</string></field>
                          <field name="unfriendlyUri"><string>${wcm.friendly.files.unfriendlyUri:/rest/jcr/repository/collaboration}</string></field>
                        </object>
                      </value>
                    </collection>
                  </field>
                </object>
              </object-param>
            </init-params>
          </component-plugin>
        </external-component-plugins>

In which:

-  **Name**: ``FriendlyService.addConfiguration``

-  **Set-method**: ``addConfiguration``

-  **Type**:
   ``org.exoplatform.services.wcm.friendly.impl.FriendlyPlugin``

-  **Object type**:
   ``org.exoplatform.services.wcm.friendly.impl.FriendlyConfig``

+---------------------+--------------+---------------------------------------------------------+---------------------------------------------------------------+
| **Field**           | **Type**     | **Value**                                               | **Description**                                               |
+=====================+==============+=========================================================+===============================================================+
| **friendlyUri**     | ``string``   | ``documents``                                           | The object into which the friendly URI is applied.            |
+---------------------+--------------+---------------------------------------------------------+---------------------------------------------------------------+
| **unfriendlyUri**   | ``string``   | ``/acme/detail?content-id=/repository/collaboration``   | The path to the location where the friendly URI is applied.   |
+---------------------+--------------+---------------------------------------------------------+---------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.ImageThumnailPlugin:

Image Thumbnail
----------------

This plugin is used to configure the file types and get thumbnail for
images.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.cms.thumbnail.ThumbnailService</target-component>

The configuration is applied mainly in
``packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/dms-extension/dms/dms-thumbnail-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.cms.thumbnail.ThumbnailService</target-component>
        <component-plugin>
            <name>ImageThumbnailPlugin</name>
            <set-method>addPlugin</set-method>
            <type>org.exoplatform.services.cms.thumbnail.impl.ImageThumbnailPlugin</type>
            <init-params>
                <object-param>
                    <name>thumbnailType</name>
                    <description>Thumbnail types</description>
                    <object type="org.exoplatform.services.cms.thumbnail.impl.ThumbnailType">
                        <field name="mimeTypes">
                            <collection type="java.util.ArrayList">
                                <value>
                                    <string>image/jpeg</string>
                                </value>
                                <value>
                                    <string>image/png</string>
                                </value>
                                <value>
                                    <string>image/gif</string>
                                </value>
                                <value>
                                    <string>image/bmp</string>
                                </value>
                                <value>
                                    <string>image/tiff</string>
                                </value>
                            </collection>
                        </field>
                    </object>
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``ImageThumbnailPlugin``

-  **Set-method**: ``addPlugin``

-  **Type**:
   ``org.exoplatform.services.cms.thumbnail.impl.ImageThumbnailPlugin``

-  **Object type**:
   ``org.exoplatform.services.cms.thumbnail.impl.ThumbnailType``

+-----------------+--------------+------------------------------------+--------------------------------------+
| **Field**       | **Type**     | **Value**                          | **Description**                      |
+=================+==============+====================================+======================================+
| **mimeTypes**   | ``String``   | ``image/jpeg``                     | The list of thumbnail image types.   |
|                 |              |                                    |                                      |
|                 |              | .. raw:: html                      |                                      |
|                 |              |                                    |                                      |
|                 |              |    <div class="informalexample">   |                                      |
|                 |              |                                    |                                      |
|                 |              | .. raw:: html                      |                                      |
|                 |              |                                    |                                      |
|                 |              |    </div>                          |                                      |
|                 |              |                                    |                                      |
|                 |              | ``image/png``                      |                                      |
|                 |              |                                    |                                      |
|                 |              | .. raw:: html                      |                                      |
|                 |              |                                    |                                      |
|                 |              |    <div class="informalexample">   |                                      |
|                 |              |                                    |                                      |
|                 |              | .. raw:: html                      |                                      |
|                 |              |                                    |                                      |
|                 |              |    </div>                          |                                      |
|                 |              |                                    |                                      |
|                 |              | ``image/gif``                      |                                      |
|                 |              |                                    |                                      |
|                 |              | .. raw:: html                      |                                      |
|                 |              |                                    |                                      |
|                 |              |    <div class="informalexample">   |                                      |
|                 |              |                                    |                                      |
|                 |              | .. raw:: html                      |                                      |
|                 |              |                                    |                                      |
|                 |              |    </div>                          |                                      |
|                 |              |                                    |                                      |
|                 |              | ``image/bmp``                      |                                      |
|                 |              |                                    |                                      |
|                 |              | .. raw:: html                      |                                      |
|                 |              |                                    |                                      |
|                 |              |    <div class="informalexample">   |                                      |
|                 |              |                                    |                                      |
|                 |              | .. raw:: html                      |                                      |
|                 |              |                                    |                                      |
|                 |              |    </div>                          |                                      |
|                 |              |                                    |                                      |
|                 |              | ``image/tiff``                     |                                      |
+-----------------+--------------+------------------------------------+--------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.IgnorePortalPlugin:

Ignore Portal
--------------

When a new portal is created, the configuration of
**IgnorePortalPlugin** is used to avoid deploying data to the existing
ones which are listed in the init-parameters.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.wcm.portal.artifacts.CreatePortalArtifactsService</target-component>

The configuration is applied mainly in
``packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/wcm-extension/wcm/deployment/template-deployment-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.wcm.portal.artifacts.CreatePortalArtifactsService</target-component>
        <component-plugin>
          <name>Add ignored portals</name>
          <set-method>addIgnorePortalPlugin</set-method>
          <type>org.exoplatform.services.wcm.portal.artifacts.IgnorePortalPlugin</type>
          <description>ignored portals. the service will not deploy data to the ignored portals</description>
          <init-params>
            <values-param>
              <name>ignored.portals</name>
              <description>ignored portal list</description>
              <value>classic</value>
              <value>acme</value>
              <value>WAIPortal</value>
            </values-param>
          </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``Add ignored portals``

-  **Set-method**: ``addIgnorePortalPlugin``

-  **Type**:
   ``org.exoplatform.services.wcm.portal.artifacts.IgnorePortalPlugin``

**Init-params**

+-----------------------+--------------+--------------------------------+-----------------------------------------+
| **Name**              | **Type**     | **Value**                      | **Description**                         |
+=======================+==============+================================+=========================================+
| **ignored.portals**   | ``string``   | ``classic, acme, WAIPortal``   | The list of ignored existing portals.   |
+-----------------------+--------------+--------------------------------+-----------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.InitialWebcontentPlugin:

Initial Webcontent
-------------------

When a portal is created, this plugin will deploy initial web-contents
as the site artifact into the **Site Artifact** folder of that portal.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.wcm.portal.artifacts.CreatePortalArtifactsService</target-component>

The configuration is applied mainly in
``packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/wcm-extension/wcm/newsletter-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.wcm.portal.artifacts.CreatePortalArtifactsService</target-component>
        <component-plugin>
            <name>Initial webcontent artifact for each site</name>
            <set-method>addPlugin</set-method>
            <type>org.exoplatform.services.wcm.webcontent.InitialWebContentPlugin</type>
            <description>This plugin deploy some initial webcontent as site artifact to site artifact folder of portal when
                a portal is
                created
            </description>
            <init-params>
                <object-param>
                    <name>Portal logo data</name>
                    <description>Deployment Descriptor</description>
                    <object type="org.exoplatform.services.deployment.DeploymentDescriptor">
                        <field name="target">
                            <object type="org.exoplatform.services.deployment.DeploymentDescriptor$Target">
                                <field name="repository">
                                    <string>repository</string>
                                </field>
                                <field name="workspace">
                                    <string>collaboration</string>
                                </field>
                                <field name="nodePath">
                                    <string>/sites/{portalName}/web contents/site artifacts</string>
                                </field>
                            </object>
                        </field>
                        <field name="sourcePath">
                            <string>war:/conf/sample-portal/wcm/artifacts/site-resources/acme-templates/Logo.xml</string>
                        </field>
                    </object>
                </object-param>
                <object-param>
                    <name>Portal signin data</name>
                    <description>Deployment Descriptor</description>
                    <object type="org.exoplatform.services.deployment.DeploymentDescriptor">
                        <field name="target">
                            <object type="org.exoplatform.services.deployment.DeploymentDescriptor$Target">
                                <field name="repository">
                                    <string>repository</string>
                                </field>
                                <field name="workspace">
                                    <string>collaboration</string>
                                </field>
                                <field name="nodePath">
                                    <string>/sites/{portalName}/web contents/site artifacts</string>
                                </field>
                            </object>
                        </field>
                        <field name="sourcePath">
                            <string>war:/conf/sample-portal/wcm/artifacts/site-resources/acme-templates/Signin.xml</string>
                        </field>
                    </object>
                </object-param>
                <object-param>
                    ...
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``AddLifecycle``

-  **Set-method**: ``addPlugin``

-  **Type**:
   ``org.exoplatform.services.wcm.webcontent.InitialWebContentPlugin``

-  **Object type**:
   ``org.exoplatform.services.deployment.DeploymentDescriptor$Target``

+------------------+--------------+------------------------------------------------------------------------------------+-------------------------------------------------------------------------+
| **Name**         | **Type**     | **Value**                                                                          | **Description**                                                         |
+==================+==============+====================================================================================+=========================================================================+
| **repository**   | ``string``   | ``repository``                                                                     | The repository into which the initial web contents will be deployed.    |
+------------------+--------------+------------------------------------------------------------------------------------+-------------------------------------------------------------------------+
| **workspace**    | ``string``   | ``collaboration``                                                                  | The workspace into which the initial web contents will be deployed.     |
+------------------+--------------+------------------------------------------------------------------------------------+-------------------------------------------------------------------------+
| **nodePath**     | ``string``   | ``/sites/{portalName}/web contents/site artifacts``                                | The target node where the initial web-contents will be deployed into.   |
+------------------+--------------+------------------------------------------------------------------------------------+-------------------------------------------------------------------------+
| **sourcePath**   | ``string``   | ``war:/conf/sample-portal/wcm/artifacts/site-resources/acme-templates/Logo.xml``   | The path to the source that this plugin will get data.                  |
+------------------+--------------+------------------------------------------------------------------------------------+-------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.LinkDeploymentPlugin:

Link Deployment
-----------------

This plugin is used to create predefined Symlinks into the system.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.deployment.WCMContentInitializerService</target-component>

The configuration is applied mainly in
``samples/acme-website/webapp/src/main/webapp/WEB-INF/conf/acme-portal/wcm/deployment/acme-deployment-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.deployment.WCMContentInitializerService</target-component>
        <component-plugin>
            <name>Content Initializer Service</name>
            <set-method>addPlugin</set-method>
            <type>org.exoplatform.services.deployment.plugins.LinkDeploymentPlugin</type>
            <description>Link Deployment Plugin</description>
            <init-params>
                <object-param>
                    <name>link01</name>
                    <description>Deployment Descriptor</description>
                    <object type="org.exoplatform.services.deployment.plugins.LinkDeploymentDescriptor">
                        <field name="sourcePath">
                            <string>repository:collaboration:/sites/acme/web contents/News/News1</string>
                        </field>
                        <field name="targetPath">
                            <string>repository:collaboration:/sites/acme/categories/powers</string>
                        </field>
                    </object>
                </object-param>
                <object-param>
                    <name>link02</name>
                    <description>Deployment Descriptor</description>
                    <object type="org.exoplatform.services.deployment.plugins.LinkDeploymentDescriptor">
                        <field name="sourcePath">
                            <string>repository:collaboration:/sites/acme/web contents/News/News2</string>
                        </field>
                        <field name="targetPath">
                            <string>repository:collaboration:/sites/acme/categories/powers</string>
                        </field>
                    </object>
                </object-param>
                <object-param>
                    <name>link03</name>
                    <description>Deployment Descriptor</description>
                    <object type="org.exoplatform.services.deployment.plugins.LinkDeploymentDescriptor">
                        <field name="sourcePath">
                            <string>repository:collaboration:/sites/acme/web contents/News/News3</string>
                        </field>
                        <field name="targetPath">
                            <string>repository:collaboration:/sites/acme/categories/powers</string>
                        </field>
                    </object>
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``Content Initializer Service``

-  **Set-method**: ``addPlugin``

-  **Type**:
   ``org.exoplatform.services.wcm.webcontent.InitialWebContentPlugin``

-  **Object type**:
   ``org.exoplatform.services.deployment.plugins.LinkDeploymentDescriptor``

+------------------+--------------+--------------------------------------------------------------------+-----------------------------------------------------------+
| **Field**        | **Type**     | **Value**                                                          | **Description**                                           |
+==================+==============+====================================================================+===========================================================+
| **sourcePath**   | ``string``   | ``repository:collaboration:/sites/acme/web contents/News/News1``   | The path to the source where this plugin will get data.   |
+------------------+--------------+--------------------------------------------------------------------+-----------------------------------------------------------+
| **targetPath**   | ``string``   | ``repository:collaboration:/sites/acme/categories/powers``         | The path to the target where this plugin will deploy.     |
+------------------+--------------+--------------------------------------------------------------------+-----------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.LockGroupsOrUsersPlugin:

Lock Groups Or Users
----------------------

This plugin is used to configure predefined groups or users for lock
administration. To use the plugin in the component configuration, you
must use the following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.cms.lock.LockService</target-component>

The configuration is applied mainly in
``core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-services-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.cms.lock.LockService</target-component>
        <component-plugin>
            <name>predefinedLockGroupsOrUsersPlugin</name>
            <set-method>addLockGroupsOrUsersPlugin</set-method>
            <type>org.exoplatform.services.cms.lock.impl.LockGroupsOrUsersPlugin</type>
            <init-params>
                <object-param>
                    <name>LockGroupsOrUsers.configuration</name>
                    <description>configuration predefined groups or users for lock administrator</description>
                    <object type="org.exoplatform.services.cms.lock.impl.LockGroupsOrUsersConfig">
                        <field name="settingLockList">
                            <collection type="java.util.ArrayList">
                                <value>
                                    <string>*:/platform/administrators</string>
                                </value>
                            </collection>
                        </field>
                    </object>
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``predefinedLockGroupsOrUsersPlugin``

-  **Set-method**: ``addLockGroupsOrUsersPlugin``

-  **Type**:
   ``org.exoplatform.services.cms.lock.impl.LockGroupsOrUsersPlugin``

-  **Object type**:
   ``org.exoplatform.services.cms.lock.impl.LockGroupsOrUsersConfig``

+-----------------------+-----------------+-----------------------------+------------------------------------------------+
| **Field**             | **Type**        | **Value**                   | **Description**                                |
+=======================+=================+=============================+================================================+
| **settingLockList**   | ``ArrayList``   | **{java.util.ArrayList}**   | The list of the groups or user to be locked.   |
+-----------------------+-----------------+-----------------------------+------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.ManageDrivePlugin:

Manage Drive
-------------

This plugin is used to create a predefined drive into a repository. A
drive can be considered as a shortcut in the content repository, a quick
access to some places for users. You can restrict the visibility of this
drive to a group/user and apply a specific view depending on the content
you have in this area.

A drive is the combination of:

-  Path: the root folder of the drive.

-  View: how we can see contents, such as by list, thumbnails.

-  Role: the visibility to every users, a group or a single user.

-  Options: allow you to specify whether to see hidden nodes or not and
   to create folders in this drive or not.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.cms.drives.ManageDriveService</target-component>

The configuration is applied mainly in ``
    packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/dms-extension/dms/dms-drives-configuration.xml``.

The following structure is used for drives configuration.

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.cms.drives.ManageDriveService</target-component>
        <component-plugin>
            <name>manage.drive.plugin</name>
            <set-method>setManageDrivePlugin</set-method>
            <type>org.exoplatform.services.cms.drives.impl.ManageDrivePlugin</type>
            <description>Nothing</description>
            <init-params>
                <object-param>
                    There are initializing attributes of org.exoplatform.services.cms.drives.DriveData object
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

The file that contains the structure above will be configured in the
``configuration.xml`` file as the following:

.. code:: xml

    <import>war:/conf/wcm-extension/dms/drives-configuration.xml</import>

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.cms.drives.ManageDriveService</target-component>
        <component-plugin>
            <name>manage.drive.plugin</name>
            <set-method>setManageDrivePlugin</set-method>
            <type>org.exoplatform.services.cms.drives.impl.ManageDrivePlugin</type>
            <description>Nothing</description>
            <init-params>
                <object-param>
                    <name>Managed Sites</name>
                    <description>Managed Sites</description>
                    <object type="org.exoplatform.services.cms.drives.DriveData">
                        <field name="name">
                            <string>Managed Sites</string>
                        </field>
                        <field name="repository">
                            <string>repository</string>
                        </field>
                        <field name="workspace">
                            <string>collaboration</string>
                        </field>
                        <field name="permissions">
                            <string>*:/platform/administrators</string>
                        </field>
                        <field name="homePath">
                            <string>/sites</string>
                        </field>
                        <field name="icon">
                            <string/>
                        </field>
                        <field name="views">
                            <string>wcm-view</string>
                        </field>
                        <field name="viewPreferences">
                            <boolean>false</boolean>
                        </field>
                        <field name="viewNonDocument">
                            <boolean>true</boolean>
                        </field>
                        <field name="viewSideBar">
                            <boolean>true</boolean>
                        </field>
                        <field name="showHiddenNode">
                            <boolean>false</boolean>
                        </field>
                        <field name="allowCreateFolders">
                            <string>nt:folder,nt:unstructured</string>
                        </field>
                        <field name="allowNodeTypesOnTree">
                            <string>*</string>
                        </field>
                    </object>
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``manage.drive.plugin``

-  **Set-method**: ``setManageDrivePlugin``

-  **Type**:
   ``org.exoplatform.services.cms.drives.impl.ManageDrivePlugin``

-  **Object type**: ``org.exoplatform.services.cms.drives.DriveData``

+----------------------------+---------------+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
| **Field**                  | **Type**      | **Value**                         | **Description**                                                                                                             |
+============================+===============+===================================+=============================================================================================================================+
| **name**                   | ``String``    | ``Managed Sites``                 | The name of drive which must be unique.                                                                                     |
+----------------------------+---------------+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
| **repository**             | ``String``    | ``repository``                    | Content Repository where to find the root path.                                                                             |
+----------------------------+---------------+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
| **workspace**              | ``String``    | ``collaboration``                 | Workspace in the Content Repository.                                                                                        |
+----------------------------+---------------+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
| **homePath**               | ``String``    | ``/sites``                        | Root path in the Content Repository. ``                                                                                     |
|                            |               |                                   |                 userId                                                                                                      |
|                            |               |                                   |               `` can be used to use the userId at runtime in the path.                                                      |
+----------------------------+---------------+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
| **permissions**            | ``String``    | **\*:/platform/administrators**   | Visibility of the drive based on eXo rights. For example: ``*:/platform/users``                                             |
+----------------------------+---------------+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
| **icon**                   | ``String``    | N/A                               | URL to the icon.                                                                                                            |
+----------------------------+---------------+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
| **views**                  | ``String``    | ``wcm-view``                      | The list of views you want to use, separated by commas. For example: ``simple-view,admin-view``                             |
+----------------------------+---------------+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
| **viewPreferences**        | ``Boolean``   | ``false``                         | The **User Preference** icon will be visible if true.                                                                       |
+----------------------------+---------------+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
| **viewNonDocument**        | ``Boolean``   | ``true``                          | Non-document types will be visible in the user view if true.                                                                |
+----------------------------+---------------+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
| **viewSideBar**            | ``Boolean``   | ``true``                          | Shows/Hides the left bar (with navigation and filters).                                                                     |
+----------------------------+---------------+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
| **showHiddenNode**         | ``Boolean``   | ``false``                         | Hidden nodes will be visible if true.                                                                                       |
+----------------------------+---------------+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
| **allowCreateFolders**     | ``String``    | ``nt:folder,nt:unstructured``     | List of node types that you can create as folders. For example: ``nt:folder,nt:unstructured``.                              |
+----------------------------+---------------+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
| **allowNodeTypesOnTree**   | ``String``    | \*                                | Allows you to filter node types in the navigation tree. For example, the default value is "\*" to show all content types.   |
+----------------------------+---------------+-----------------------------------+-----------------------------------------------------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.ManageViewPlugin:

Manage View
------------

This plugin is used to create a predefined View into a repository. A
View can include many object parameters. Parameters are used to create
default Views, Templates and Actions of **Manage View** service. View
enables administrators to customize View classification that can impact
on users in exploring workspace. Each object-param has a type that is a
class representing all properties of a View.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.cms.views.ManageViewService</target-component>

The configuration is applied mainly in
``packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/dms-extension/dms/dms-views-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.cms.views.ManageViewService</target-component>
        <component-plugin>
            <name>manage.view.plugin</name>
            <set-method>setManageViewPlugin</set-method>
            <type>org.exoplatform.services.cms.views.impl.ManageViewPlugin</type>
            <description>this plugin manage user view</description>
            <init-params>
                <value-param>
                    <name>autoCreateInNewRepository</name>
                    <value>true</value>
                </value-param>
                <value-param>
                    <name>predefinedViewsLocation</name>
                    <value>war:/conf/dms-extension/dms/artifacts</value>
                </value-param>
                <value-param>
                    <name>repository</name>
                    <value>repository</value>
                </value-param>
                <object-param>
                  <name>Web</name>
                  <description>View configuration of WCM administrator</description>
                  <object type="org.exoplatform.services.cms.views.ViewConfig">
                    <field name="name"><string>Web</string></field>
                    <field name="permissions"><string>*:/platform/web-contributors</string></field>
                    <field name="template"><string>/exo:ecm/views/templates/ecm-explorer/Content</string></field>
                    <field name="tabList">
                      <collection type="java.util.ArrayList">
                        <value>
                          <object type="org.exoplatform.services.cms.views.ViewConfig$Tab">
                            <field name="tabName"><string>Authoring</string></field>
                            <field name="buttons">
                              <string>
                                addCategory; addFolder; addDocument; editDocument; upload; viewPermissions; managePublications; manageCategories; taggingDocument; vote; watchDocument; publicationRequestApproval; publicationApproveContent; publicationPublish; addLocalizationLink  
                              </string>
                            </field>
                          </object>
                        </value>
                      </collection>
                    </field>
                  </object>
                </object-param>
                <object-param>
                  <name>Content Template</name>
                  <description>Template to display contents in list style</description>
                  <object type="org.exoplatform.services.cms.views.TemplateConfig">
                    <field name="type"><string>ecmExplorerTemplate</string></field>
                    <field name="name"><string>Content</string></field>
                    <field name="warPath"><string>/ecm-explorer/ContentView.gtmpl</string></field>
                  </object>
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``manage.view.plugin``

-  **Set-method**: ``setManageViewPlugin``

-  **Type**:
   ``org.exoplatform.services.cms.views.impl.ManageViewPlugin``

-  **Init-param**:

+---------------------------------+---------------+---------------------------------------------+--------------------------------------------------------------------------------+
| **value-param**                 | **Type**      | **Value**                                   | **Description**                                                                |
+=================================+===============+=============================================+================================================================================+
| **autoCreateInNewRepository**   | ``boolean``   | ``true``                                    | Allows creating a predefined View in this repository if the value is "true".   |
+---------------------------------+---------------+---------------------------------------------+--------------------------------------------------------------------------------+
| **predefinedViewsLocation**     | ``string``    | ``war:/conf/dms-extension/dms/artifacts``   | The location of the View node in the repository.                               |
+---------------------------------+---------------+---------------------------------------------+--------------------------------------------------------------------------------+
| **repository**                  | ``string``    | ``repository``                              | The repository name.                                                           |
+---------------------------------+---------------+---------------------------------------------+--------------------------------------------------------------------------------+

-  **Object type**: ``org.exoplatform.services.cms.views.ViewConfig``

+-------------------+-----------------+-----------------------------------------------------+---------------------------------------------------------+
| **Field**         | **Type**        | **Value**                                           | **Description**                                         |
+===================+=================+=====================================================+=========================================================+
| **name**          | ``string``      | ``Web``                                             | The name of view which must be unique inside Content.   |
+-------------------+-----------------+-----------------------------------------------------+---------------------------------------------------------+
| **permissions**   | ``string``      | **\*:/platform/web-contributors**                   | Visibility of the view based on eXo rights.             |
+-------------------+-----------------+-----------------------------------------------------+---------------------------------------------------------+
| **template**      | ``string``      | ``/exo:ecm/views/templates/ecm-explorer/Content``   | Specifies path to the template location.                |
+-------------------+-----------------+-----------------------------------------------------+---------------------------------------------------------+
| **tabList**       | ``ArrayList``   | **{java.util.ArrayList}**                           | Includes a set of view names.                           |
+-------------------+-----------------+-----------------------------------------------------+---------------------------------------------------------+

-  **Object type**:
   ``org.exoplatform.services.cms.views.ViewConfig$Tab``

+---------------+--------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------+
| **Field**     | **Type**     | **Value**                                                                                                                                                                                                                                                    | **Description**                            |
+===============+==============+==============================================================================================================================================================================================================================================================+============================================+
| **tabName**   | ``string``   | ``Authoring``                                                                                                                                                                                                                                                | The name of tab which must be unique.      |
+---------------+--------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------+
| **button**    | ``string``   | ``addCategory; addFolder; addDocument; editDocument; upload; viewPermissions; managePublications; manageCategories; taggingDocument; vote; watchDocument; publicationRequestApproval; publicationApproveContent; publicationPublish; addLocalizationLink``   | Specifies a set of view component names.   |
+---------------+--------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------+

-  **Object type**:
   ``org.exoplatform.services.cms.views.TemplateConfig``

+---------------+--------------+---------------------------------------+-------------------------------------------------------------------------------+
| **Field**     | **Type**     | **Value**                             | **Description**                                                               |
+===============+==============+=======================================+===============================================================================+
| **type**      | ``string``   | ``ecmExplorerTemplate``               | Specifies if a name is truly a class representing all properties of a view.   |
+---------------+--------------+---------------------------------------+-------------------------------------------------------------------------------+
| **name**      | ``string``   | ``Content``                           | Specifies a view component name.                                              |
+---------------+--------------+---------------------------------------+-------------------------------------------------------------------------------+
| **warPath**   | ``string``   | ``/ecm-explorer/ContentView.gtmpl``   | Specifies a template location to view.                                        |
+---------------+--------------+---------------------------------------+-------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.PDFThumnailPlugin:

PDF Thumbnail
-------------

This plugin is to set the supported file types of PDF thumbnail. See
also
`**ImageThumbnailPlugin** <#CONTref.Configuration.Plugins.ImageThumnailPlugin>`__.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.cms.thumbnail.ThumbnailService</target-component>

The configuration is applied mainly in
``packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/dms-extension/dms/dms-thumbnail-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <component-plugin>
        <name>PDFThumbnailPlugin</name>
        <set-method>addPlugin</set-method>
        <type>org.exoplatform.services.cms.thumbnail.impl.PDFThumbnailPlugin</type>
        <init-params>
            <object-param>
                <name>thumbnailType</name>
                <description>Thumbnail types</description>
                <object type="org.exoplatform.services.cms.thumbnail.impl.ThumbnailType">
                    <field name="mimeTypes">
                        <collection type="java.util.ArrayList">
                            <value>
                                <string>application/pdf</string>
                            </value>
                        </collection>
                    </field>
                </object>
            </object-param>
        </init-params>
    </component-plugin>

In which:

-  **Name**: ``PDFThumbnailPlugin``

-  **Set-method**: ``addPlugin``

-  **Type**:
   ``org.exoplatform.services.cms.thumbnail.impl.PDFThumbnailPlugin``

-  **Object type**:
   ``org.exoplatform.services.cms.thumbnail.impl.ThumbnailType``

+-----------------+--------------+-----------------------+---------------------------------------+
| **Field**       | **Type**     | **Value**             | **Description**                       |
+=================+==============+=======================+=======================================+
| **mimeTypes**   | ``String``   | ``application/pdf``   | The MIME type of the PDF thumbnail.   |
+-----------------+--------------+-----------------------+---------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.PortletTemplatePlugin:

Portlet Template
------------------

This plugin is used to import the view templates into Content List
Viewer.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.cms.views.ApplicationTemplateManagerService</target-component>

The configuration is applied mainly in
``packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/wcm-extension/dms/application-templates-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.cms.views.ApplicationTemplateManagerService</target-component>
        <component-plugin>
            <name>clv.templates.plugin</name>
            <set-method>addPlugin</set-method>
            <type>org.exoplatform.services.cms.views.PortletTemplatePlugin</type>
            <description>This plugin is used to import views templates for Content List Viewer</description>
            <init-params>
                <value-param>
                    <name>portletName</name>
                    <value>content-list-viewer</value>
                </value-param>
                <value-param>
                    <name>portlet.template.path</name>
                    <value>war:/conf/wcm-artifacts/application-templates/content-list-viewer</value>
                </value-param>
                <object-param>
                  <name>Two columns CLV template</name>
                  <description>Two columns CLV template</description>
                  <object type="org.exoplatform.services.cms.views.PortletTemplatePlugin$PortletTemplateConfig">
                    <field name="title">
                      <string>Two Columns</string>
                    </field>
                    <field name="templateName">
                      <string>TwoColumns.gtmpl</string>
                    </field>
                    <field name="category">
                      <string>list</string>
                    </field>
                  </object>
                </object-param>
                <object-param>
                    ....
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``clv.templates.plugin``

-  **Set-method**: ``addPlugin``

-  **Type**:
   ``org.exoplatform.services.cms.views.PortletTemplatePlugin``

-  **Init-param**:

+-----------------------------+--------------+-------------------------------------------------------------------------+-------------------------------------------------+
| **Value-param**             | **Type**     | **Value**                                                               | **Description**                                 |
+=============================+==============+=========================================================================+=================================================+
| **portletName**             | ``string``   | ``content-list-viewer``                                                 | The name of the portlet.                        |
+-----------------------------+--------------+-------------------------------------------------------------------------+-------------------------------------------------+
| **portlet.template.path**   | ``string``   | ``war:/conf/wcm-artifacts/application-templates/content-list-viewer``   | The path to the configuration of the portlet.   |
+-----------------------------+--------------+-------------------------------------------------------------------------+-------------------------------------------------+

-  **Object type**:
   ``org.exoplatform.services.cms.views.PortletTemplatePlugin$PortletTemplateConfig``

+--------------------+--------------+------------------------------------+
| **Field**          | **Type**     | **Description**                    |
+====================+==============+====================================+
| **templateName**   | ``string``   | The name of the GROOVY template.   |
+--------------------+--------------+------------------------------------+
| **category**       | ``string``   | The category name.                 |
+--------------------+--------------+------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.QueryPlugin:

Query
--------

This plugin is used to store predefined queries into the repositories of
the system.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.cms.queries.QueryService</target-component>

The configuration is applied mainly in
``/packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/dms-extension/dms/dms-queries-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.cms.queries.QueryService</target-component>
        <component-plugin>
            <name>query.plugin</name>
            <set-method>setQueryPlugin</set-method>
            <type>org.exoplatform.services.cms.queries.impl.QueryPlugin</type>
            <description>Nothing</description>
            <init-params>
                <value-param>
                    <name>autoCreateInNewRepository</name>
                    <value>true</value>
                </value-param>
                <value-param>
                    <name>repository</name>
                    <value>repository</value>
                </value-param>
                <object-param>
                    <name>CreatedDocuments</name>
                    <description>documents created by the current user</description>
                    <object type="org.exoplatform.services.cms.queries.impl.QueryData">
                        <field name="name">
                            <string>Created Documents</string>
                        </field>
                        <field name="language">
                            <string>xpath</string>
                        </field>
                        <field name="statement">
                            <string>//*[(@jcr:primaryType = 'exo:article' or @jcr:primaryType = 'nt:file') and
                                @exo:owner='${UserId}$'] order by @exo:dateCreated descending
                            </string>
                        </field>
                        <field name="permissions">
                            <collection type="java.util.ArrayList">
                                <value>
                                    <string>*:/platform/users</string>
                                </value>
                            </collection>
                        </field>
                        <field name="cachedResult">
                            <boolean>false</boolean>
                        </field>
                    </object>
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``predefinedTaxonomyPlugin``

-  **Set-method**: ``setQueryPlugin``

-  **Type**: ``org.exoplatform.services.cms.queries.impl.QueryPlugin``

-  **Init-param**:

+---------------------------------+---------------+------------------+--------------------------------------------------------------+
| **Value-param**                 | **Type**      | **Value**        | **Description**                                              |
+=================================+===============+==================+==============================================================+
| ``autoCreateInNewRepository``   | ``boolean``   | ``true``         | Stores queries in a new repository if the value is "true".   |
+---------------------------------+---------------+------------------+--------------------------------------------------------------+
| ``repository``                  | ``string``    | ``repository``   | The repository to the target node.                           |
+---------------------------------+---------------+------------------+--------------------------------------------------------------+

-  **Object type**:
   ``org.exoplatform.services.cms.queries.impl.QueryData``

+--------------------+-----------------+-----------------------------------------------------------+
| **Field**          | **Type**        | **Description**                                           |
+====================+=================+===========================================================+
| **name**           | ``string``      | The name of the query.                                    |
+--------------------+-----------------+-----------------------------------------------------------+
| **language**       | ``string``      | The language of the query (Xpath, SQL).                   |
+--------------------+-----------------+-----------------------------------------------------------+
| **statement**      | ``string``      | The query statement.                                      |
+--------------------+-----------------+-----------------------------------------------------------+
| **permissions**    | ``ArrayList``   | The permission which users must have to use this query.   |
+--------------------+-----------------+-----------------------------------------------------------+
| **cachedResult**   | ``boolean``     | Specifies if the query is cached or not.                  |
+--------------------+-----------------+-----------------------------------------------------------+

.. _PLFRefGuide.Configurations.Components.Content.WatchDocumentPlugin:

Watch Document
---------------

The **WatchDocumentService** component allows users to watch/unwatch a
document. If they are watching the document, they will receive a
notification mail when there are any changes on the document. The
configuration of this component is found in
``/core/core-configuration/src/main/webapp/WEB-INF/conf/wcm-core/core-services-configuration.xml``.

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.cms.watch.WatchDocumentService</target-component>
        <component-plugin>
          <name>watching document notification email contents setting</name>
          <set-method>initializeMessageConfig</set-method>
          <type>org.exoplatform.services.cms.watch.impl.MessageConfigPlugin</type>
          <description>Initialize the settings for watching document notification email contents</description>
          <init-params>
            <object-param>
              <name>messageConfig</name>
              <description>Message Configuration</description>
              <object type="org.exoplatform.services.cms.watch.impl.MessageConfig">
                <field name="sender"><string>${gatein.ecms.watchdocument.sender:support@exoplatform.com}</string></field>
                <field name="subject"><string>${gatein.ecms.watchdocument.subject:Your watching document is changed}</string></field>
                <field name="mimeType"><string>${gatein.ecms.watchdocument.mimetype:text/html}</string></field>
                <field name="content">
                  <string>${gatein.ecms.watchdocument.content: Dear $user_name,<br /><br />The document $doc_name ($doc_title) has changed.<br /><br />Please go to <a href="$doc_url">$doc_title</a> to see this change.<br /><br /></string>
                </field>
              </object>
            </object-param>
          </init-params>
        </component-plugin>
      </external-component-plugins>

**Details**:

-  **object-param**:

   -  **Object type:**
      ``org.exoplatform.services.cms.watch.impl.MessageConfig``

+----------------+--------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------+
| **Field**      | **Type**     | **Value**                                                                                                                                                                                                          | **Description**                               |
+================+==============+====================================================================================================================================================================================================================+===============================================+
| **sender**     | ``string``   | ``${gatein.ecms.watchdocument.sender:support@exoplatform.com}``                                                                                                                                                    | The sender who sends the notification mail.   |
+----------------+--------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------+
| **subject**    | ``string``   | ``${gatein.ecms.watchdocument.subject:Your watching document is changed}.``                                                                                                                                        | The subject of the notification mail.         |
+----------------+--------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------+
| **mimeType**   | ``string``   | ``${gatein.ecms.watchdocument.mimetype:text/html}.``                                                                                                                                                               | The format of the notification mail.          |
+----------------+--------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------+
| **content**    | ``string``   | ``${gatein.ecms.watchdocument.content: Dear $user_name,<br /><br />The document $doc_name ($doc_title) has changed.<br /><br />Please go to <a href="$doc_url">$doc_title</a> to see this change.<br /><br />.``   | The content of the notification mail.         |
+----------------+--------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.RemoveTaxonomyPlugin:

Remove Taxonomy
----------------

This plugin is used to invalidate taxonomy trees in **categories**
folder of a portal when the portal is removed.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.wcm.portal.artifacts.RemovePortalArtifactsService</target-component>

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.wcm.portal.artifacts.RemovePortalArtifactsService</target-component>
        <component-plugin>
            <name>Remove taxonomy tree</name>
            <set-method>addPlugin</set-method>
            <type>org.exoplatform.services.wcm.category.RemoveTaxonomyPlugin</type>
            <description>This plugin invalidate taxonomy tree to categories folder of portal when a portal is removed
            </description>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``Remove taxonomy tree``

-  **Set-method**: ``addPlugin``

-  **Type**:
   ``org.exoplatform.services.wcm.category.RemoveTaxonomyPlugin``

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.ScriptActionPlugin:

Script Action
--------------

This plugin is used to import the predefined script actions into the
system.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.cms.actions.ActionServiceContainer</target-component>

The configuration is applied mainly in
``packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/dms-extension/dms/dms-actions-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.cms.actions.ActionServiceContainer</target-component>
        <component-plugin>
            <name>exo:scriptAction</name>
            <set-method>addPlugin</set-method>
            <type>org.exoplatform.services.cms.actions.impl.ScriptActionPlugin</type>
            <init-params>
                <object-param>
                    <name>predefined.actions</name>
                    <description>description</description>
                    <object type="org.exoplatform.services.cms.actions.impl.ActionConfig">
                        <field name="repository">
                            <string>repository</string>
                        </field>
                        <field name="workspace">
                            <string>collaboration</string>
                        </field>
                        <field name="actions">
                            <collection type="java.util.ArrayList">
                                <value>
                                    <object type="org.exoplatform.services.cms.actions.impl.ActionConfig$Action">
                                        <field name="type">
                                            <string>exo:trashFolderAction</string>
                                        </field>
                                        <field name="name">
                                            <string>trashFolder</string>
                                        </field>
                                        <field name="description">
                                            <string>trigger actions for items in trash</string>
                                        </field>
                                        <field name="srcWorkspace">
                                            <string>collaboration</string>
                                        </field>
                                        <field name="srcPath">
                                            <string>/Trash</string>
                                        </field>
                                        <field name="isDeep">
                                            <boolean>false</boolean>
                                        </field>
                                        <field name="lifecyclePhase">
                                            <collection type="java.util.ArrayList">
                                                <value>
                                                    <string>node_added</string>
                                                </value>
                                                <value>
                                                    <string>node_removed</string>
                                                </value>
                                            </collection>
                                        </field>
                                    </object>
                                </value>
                            </collection>
                        </field>
                    </object>
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **name**: ``exo:scriptAction``

-  **set-method**: ``addPlugin``

-  **type**:
   ``org.exoplatform.services.cms.actions.impl.ScriptActionPlugin``

-  **Object type**:
   ``org.exoplatform.services.cms.actions.impl.ActionConfig``

+------------------+-----------------+-----------------------------+-------------------------------+
| **Name**         | **Type**        | **Default Value**           | **Description**               |
+==================+=================+=============================+===============================+
| **repository**   | ``string``      | ``repository``              | The name of the repository.   |
+------------------+-----------------+-----------------------------+-------------------------------+
| **workspace**    | ``string``      | ``collaboration``           | The name of the workspace.    |
+------------------+-----------------+-----------------------------+-------------------------------+
| **actions**      | ``ArrayList``   | **{java.util.ArrayList}**   | The list of actions.          |
+------------------+-----------------+-----------------------------+-------------------------------+

-  **Object type**:
   ``org.exoplatform.services.cms.actions.impl.ActionConfig$Action``

+----------------------+-----------------+------------------------------------------+-------------------------------------------------------------------+
| **Name**             | **Type**        | **Default Value**                        | **Description**                                                   |
+======================+=================+==========================================+===================================================================+
| **type**             | ``string``      | ``exo:trashFolderAction``                | The type of the action.                                           |
+----------------------+-----------------+------------------------------------------+-------------------------------------------------------------------+
| **name**             | ``string``      | ``trashFolder``                          | The name of the action.                                           |
+----------------------+-----------------+------------------------------------------+-------------------------------------------------------------------+
| **description**      | ``string``      | ``trigger actions for items in trash``   | The description of the action.                                    |
+----------------------+-----------------+------------------------------------------+-------------------------------------------------------------------+
| **srcWorkspace**     | ``string``      | ``collaboration``                        | The source workspace of the action.                               |
+----------------------+-----------------+------------------------------------------+-------------------------------------------------------------------+
| **srcPath**          | ``string``      | ``/Trash``                               | The path to the source.                                           |
+----------------------+-----------------+------------------------------------------+-------------------------------------------------------------------+
| **isDeep**           | ``boolean``     | ``false``                                | Specifies the depth of node that the action script will affect.   |
+----------------------+-----------------+------------------------------------------+-------------------------------------------------------------------+
| **lifecyclePhase**   | ``ArrayList``   | ``node_added, node_removed``             | Specifies the lifecycle phase that the action will take place.    |
+----------------------+-----------------+------------------------------------------+-------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.ScriptPlugin:

Script
--------

This plugin is used to add groovy scripts into the system.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.cms.scripts.ScriptService</target-component>

The configuration is applied mainly in
``packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/dms-extension/dms/dms-scripts-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.cms.scripts.ScriptService</target-component>
          <component-plugin>
            <name>manage.script.plugin</name>
            <set-method>addScriptPlugin</set-method>
            <type>org.exoplatform.services.cms.scripts.impl.ScriptPlugin</type>
            <description>Nothing</description>
            <init-params>
              <value-param>
                <name>autoCreateInNewRepository</name>
                <value>true</value>
              </value-param>
              <value-param>
                <name>predefinedScriptsLocation</name>
                <value>war:/conf/dms-extension/dms/artifacts</value>
              </value-param>
              <object-param>
                <name>predefined.scripts</name>
                <description>description</description>
                <object type="org.exoplatform.services.cms.impl.ResourceConfig">
                  <field  name="resources">
                    <collection type="java.util.ArrayList">
                      <!-- ecm-explorer/action -->
                      <value>
                        <object type="org.exoplatform.services.cms.impl.ResourceConfig$Resource">
                          <field  name="description"><string>Trash Document</string></field>
                          <field  name="name"><string>ecm-explorer/action/TrashFolder.groovy</string></field>
                        </object>
                      </value>
                      <value>
                        <object type="org.exoplatform.services.cms.impl.ResourceConfig$Resource">
                          <field  name="description"><string>Enable Versioning</string></field>
                          <field  name="name"><string>ecm-explorer/action/EnableVersioning.groovy</string></field>
                        </object>
                      </value>
                      <value>
                        <object type="org.exoplatform.services.cms.impl.ResourceConfig$Resource">
                          <field  name="description"><string>Auto Versioning</string></field>
                          <field  name="name"><string>ecm-explorer/action/AutoVersioning.groovy</string></field>
                        </object>
                      </value>
                      <value>
                        <object type="org.exoplatform.services.cms.impl.ResourceConfig$Resource">
                          <field  name="description"><string>Add Metadata</string></field>
                          <field  name="name"><string>ecm-explorer/action/AddMetadata.groovy</string></field>
                        </object>
                      </value>
                      <value>
                        <object type="org.exoplatform.services.cms.impl.ResourceConfig$Resource">
                          <field  name="description"><string>Add to Category</string></field>
                          <field  name="name"><string>ecm-explorer/action/AddToCategory.groovy</string></field>
                        </object>
                      </value>
                      <value>
                        <object type="org.exoplatform.services.cms.impl.ResourceConfig$Resource">
                          <field  name="description"><string>Add to Favorites</string></field>
                          <field  name="name"><string>ecm-explorer/action/AddToFavorites.groovy</string></field>
                        </object>
                      </value>
                      <!-- ecm-explorer/widget -->
                      <value>
                        <object type="org.exoplatform.services.cms.impl.ResourceConfig$Resource">
                          <field  name="description"><string>Fill SelectBox With Metadatas</string></field>
                          <field  name="name"><string>ecm-explorer/widget/FillSelectBoxWithMetadatas.groovy</string></field>
                        </object>
                      </value>
                      <value>
                        <object type="org.exoplatform.services.cms.impl.ResourceConfig$Resource">
                          <field  name="description"><string>Fill SelectBox With Workspaces</string></field>
                          <field  name="name"><string>ecm-explorer/widget/FillSelectBoxWithWorkspaces.groovy</string></field>
                        </object>
                      </value>
                      <value>
                        <object type="org.exoplatform.services.cms.impl.ResourceConfig$Resource">
                          <field  name="description"><string>Fill SelectBox With Language</string></field>
                          <field  name="name"><string>ecm-explorer/widget/FillSelectBoxWithLanguage.groovy</string></field>
                        </object>
                      </value>
                      <!-- ecm-explorer/interceptor -->
                      <value>
                        <object type="org.exoplatform.services.cms.impl.ResourceConfig$Resource">
                          <field  name="description"><string>Pre Node Save Interceptor</string></field>
                          <field  name="name"><string>ecm-explorer/interceptor/PreNodeSaveInterceptor.groovy</string></field>
                        </object>
                      </value>
                      <value>
                        <object type="org.exoplatform.services.cms.impl.ResourceConfig$Resource">
                          <field  name="description"><string>Post Node Save Interceptor</string></field>
                          <field  name="name"><string>ecm-explorer/interceptor/PostNodeSaveInterceptor.groovy</string></field>
                        </object>
                      </value>
                    </collection>
                  </field>
                </object>
              </object-param>
            </init-params>
           </component-plugin>
      </external-component-plugins>

In which:

-  **Name**: ``manage.script.plugin``

-  **Set-method**: ``addScriptPlugin``

-  **Type**: ``org.exoplatform.services.cms.scripts.impl.ScriptPlugin``

-  **Init-param**:

+---------------------------------+---------------+---------------------------------------------+---------------------------------------------------------------------------------+
| **Value-param**                 | **Type**      | **Value**                                   | **Description**                                                                 |
+=================================+===============+=============================================+=================================================================================+
| **autoCreateInNewRepository**   | ``Boolean``   | ``true``                                    | Enables/Disables the creation of the scripts in the newly created repository.   |
+---------------------------------+---------------+---------------------------------------------+---------------------------------------------------------------------------------+
| **repository**                  | ``String``    | ``repository``                              | The repository name.                                                            |
+---------------------------------+---------------+---------------------------------------------+---------------------------------------------------------------------------------+
| **predefinedScriptsLocation**   | ``String``    | ``war:/conf/dms-extension/dms/artifacts``   | The location where the scripts are created.                                     |
+---------------------------------+---------------+---------------------------------------------+---------------------------------------------------------------------------------+

-  **Object type**: ``org.exoplatform.services.cms.impl.ResourceConfig``

+----------------+-----------------+-----------------------------+----------------------+
| **Field**      | **Type**        | **Value**                   | **Description**      |
+================+=================+=============================+======================+
| **resource**   | ``ArrayList``   | **{java.util.ArrayList}**   | The resource name.   |
+----------------+-----------------+-----------------------------+----------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.StatesLifecyclePlugin:

States Lifecycle
-----------------

This plugin is used to control the state life cycle of a content.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.wcm.extensions.publication.PublicationManager</target-component>

The configuration is applied mainly in
``packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/content-extended/authoring/configuration.xml``.

**Sample configuration**:

.. code:: xml

    <component-plugin>
        <name>AddLifecycle</name>
        <set-method>addLifecycle</set-method>
        <type>org.exoplatform.services.wcm.extensions.publication.lifecycle.StatesLifecyclePlugin</type>
        <description>Configures</description>
        <priority>1</priority>
        <init-params>
            <object-param>
                <name>lifecycles</name>
                <object type="org.exoplatform.services.wcm.extensions.publication.lifecycle.impl.LifecyclesConfig">
                    <field name="lifecycles">
                        <collection type="java.util.ArrayList">
                            <value>
                                <object type="org.exoplatform.services.wcm.extensions.publication.lifecycle.impl.LifecyclesConfig$Lifecycle">
                                    <field name="name">
                                        <string>lifecycle1</string>
                                    </field>
                                    <field name="publicationPlugin">
                                        <string>Authoring publication</string>
                                    </field>
                                    <field name="states">
                                        <collection type="java.util.ArrayList">
                                            <value>
                                                <object type="org.exoplatform.services.wcm.extensions.publication.lifecycle.impl.LifecyclesConfig$State">
                                                    <field name="state">
                                                        <string>draft</string>
                                                    </field>
                                                    <field name="membership">
                                                        <string>author:/platform/web-contributors</string>
                                                    </field>
                                                </object>
                                            </value>
                                            <value>
                                                <object type="org.exoplatform.services.wcm.extensions.publication.lifecycle.impl.LifecyclesConfig$State">
                                                    <field name="state">
                                                        <string>pending</string>
                                                    </field>
                                                    <field name="membership">
                                                        <string>author:/platform/web-contributors</string>
                                                    </field>
                                                </object>
                                            </value>
                                            <value>
                                                <object type="org.exoplatform.services.wcm.extensions.publication.lifecycle.impl.LifecyclesConfig$State">
                                                    <field name="state">
                                                        <string>approved</string>
                                                    </field>
                                                    <field name="membership">
                                                        <string>manager:/platform/web-contributors</string>
                                                    </field>
                                                </object>
                                            </value>
                                            <value>
                                                <object type="org.exoplatform.services.wcm.extensions.publication.lifecycle.impl.LifecyclesConfig$State">
                                                    <field name="state">
                                                        <string>staged</string>
                                                    </field>
                                                    <field name="membership">
                                                        <string>publisher:/platform/web-contributors</string>
                                                    </field>
                                                </object>
                                            </value>
                                            <value>
                                                <object type="org.exoplatform.services.wcm.extensions.publication.lifecycle.impl.LifecyclesConfig$State">
                                                    <field name="state">
                                                        <string>published</string>
                                                    </field>
                                                    <field name="membership">
                                                        <string>publisher:/platform/web-contributors</string>
                                                    </field>
                                                </object>
                                            </value>
                                        </collection>
                                    </field>
                                </object>
                            </value>
                        </collection>
                    </field>
                </object>
            </object-param>
        </init-params>
    </component-plugin>

In which:

-  **Name**: ``AddLifecycle``

-  **Set-method**: ``addLifecycle``

-  **Type**:
   ``org.exoplatform.services.wcm.extensions.publication.lifecycle.StatesLifecyclePlugin``

-  **Object type**:
   ``org.exoplatform.services.wcm.extensions.publication.lifecycle.impl.LifecyclesConfig$Lifecycle``

+-------------------------+-----------------+-----------------------------+---------------------------------------+
| **Field**               | **Type**        | **Value**                   | **Description**                       |
+=========================+=================+=============================+=======================================+
| **name**                | ``string``      | ``lifecycle1``              | The name of the lifecycle.            |
+-------------------------+-----------------+-----------------------------+---------------------------------------+
| **publicationPlugin**   | ``string``      | ``Authoring publication``   | The publication plugin name.          |
+-------------------------+-----------------+-----------------------------+---------------------------------------+
| **states**              | ``ArrayList``   | **{java.util.ArrayList}**   | The list of the publication states.   |
+-------------------------+-----------------+-----------------------------+---------------------------------------+

-  **Object type**:
   ``org.exoplatform.services.wcm.extensions.publication.lifecycle.impl.LifecyclesConfig$State``

+------------------+--------------+--------------------------------------------------------------------------+
| **Field**        | **Type**     | **Description**                                                          |
+==================+==============+==========================================================================+
| **state**        | ``string``   | The publication states: draft, pending, staged, approved or published.   |
+------------------+--------------+--------------------------------------------------------------------------+
| **membership**   | ``string``   | The user or group.                                                       |
+------------------+--------------+--------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.TagPermissionPlugin:

Tag Permission
----------------

This plugin is used to configure the predefined permission for tag to
inject in JCR.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.cms.folksonomy.NewFolksonomyService</target-component>

The configuration is applied mainly in
``packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/dms-extension/dms/dms-folksonomy-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.cms.folksonomy.NewFolksonomyService</target-component>
        <component-plugin>
            <name>predefinedTagPermissionPlugin</name>
            <set-method>addTagPermissionPlugin</set-method>
            <type>org.exoplatform.services.cms.folksonomy.impl.TagPermissionPlugin</type>
            <init-params>
                <object-param>
                    <name>TagPermission.configuration</name>
                    <description>configuration predefined permission for tag to inject in jcr</description>
                    <object type="org.exoplatform.services.cms.folksonomy.impl.TagPermissionConfig">
                        <field name="tagPermissionList">
                            <collection type="java.util.ArrayList">
                                <value>
                                    <string>*:/platform/administrators</string>
                                </value>
                            </collection>
                        </field>
                    </object>
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``predefinedTagPermissionPlugin``

-  **Set-method**: ``addTagPermissionPlugin``

-  **Type**:
   ``org.exoplatform.services.cms.folksonomy.impl.TagPermissionPlugin``

-  **Object type**:
   ``org.exoplatform.services.cms.folksonomy.impl.TagPermissionConfig``

+-------------------------+-----------------+-------------------------+----------------------------------------------+
| **Name**                | **Type**        | **Value**               | **Description**                              |
+=========================+=================+=========================+==============================================+
| **tagPermissionList**   | ``ArrayList``   | {java.util.ArrayList}   | The users/groups that have the permission.   |
+-------------------------+-----------------+-------------------------+----------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.TagStylePlugin:

Tag Style
----------

This plugin is used to configure the predefined styles for tag to inject
in JCR.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.cms.folksonomy.NewFolksonomyService</target-component>

The configuration is applied mainly in
``packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/dms-extension/dms/dms-folksonomy-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.cms.folksonomy.NewFolksonomyService</target-component>
        <component-plugin>
            <name>predefinedTagStylePlugin</name>
            <set-method>addTagStylePlugin</set-method>
            <type>org.exoplatform.services.cms.folksonomy.impl.TagStylePlugin</type>
            <init-params>
                <object-param>
                    <name>htmStyleForTag.configuration</name>
                    <description>configuration predefined html style for tag to inject in jcr</description>
                    <object type="org.exoplatform.services.cms.folksonomy.impl.TagStyleConfig">
                        <field name="autoCreatedInNewRepository">
                            <boolean>true</boolean>
                        </field>
                        <field name="repository">
                            <string>repository</string>
                        </field>
                        <field name="tagStyleList">
                            <collection type="java.util.ArrayList">
                                <value>
                                    <object type="org.exoplatform.services.cms.folksonomy.impl.TagStyleConfig$HtmlTagStyle">
                                        <field name="name">
                                            <string>normal</string>
                                        </field>
                                        <field name="tagRate">
                                            <string>0..2</string>
                                        </field>
                                        <field name="htmlStyle">
                                            <string>font-size: 12px; font-weight: bold; color: #6b6b6b; font-family:
                                                verdana; text-decoration:none;
                                            </string>
                                        </field>
                                        <field name="description">
                                            <string>Normal style for tag</string>
                                        </field>
                                    </object>
                                </value>
                                <value>
                                    <object type="org.exoplatform.services.cms.folksonomy.impl.TagStyleConfig$HtmlTagStyle">
                                        <field name="name">
                                            <string>interesting</string>
                                        </field>
                                        <field name="tagRate">
                                            <string>2..5</string>
                                        </field>
                                        <field name="htmlStyle">
                                            <string>font-size: 13px; font-weight: bold; color: #5a66ce; font-family:
                                                verdana; text-decoration:none;
                                            </string>
                                        </field>
                                        <field name="description">
                                            <string>Interesting style for tag</string>
                                        </field>
                                    </object>
                                </value>
                                <value>
                                    <object type="org.exoplatform.services.cms.folksonomy.impl.TagStyleConfig$HtmlTagStyle">
                                        <field name="name">
                                            <string>attractive</string>
                                        </field>
                                        <field name="tagRate">
                                            <string>5..7</string>
                                        </field>
                                        <field name="htmlStyle">
                                            <string>font-size: 15px; font-weight: bold; color: blue; font-family: Arial;
                                                text-decoration:none;
                                            </string>
                                        </field>
                                        <field name="description">
                                            <string>attractive style for tag</string>
                                        </field>
                                    </object>
                                </value>
                                <value>
                                    <object type="org.exoplatform.services.cms.folksonomy.impl.TagStyleConfig$HtmlTagStyle">
                                        <field name="name">
                                            <string>hot</string>
                                        </field>
                                        <field name="tagRate">
                                            <string>7..10</string>
                                        </field>
                                        <field name="htmlStyle">
                                            <string>font-size: 18px; font-weight: bold; color: #ff9000; font-family: Arial;
                                                text-decoration:none;
                                            </string>
                                        </field>
                                        <field name="description">
                                            <string>hot style for tag</string>
                                        </field>
                                    </object>
                                </value>
                                <value>
                                    <object type="org.exoplatform.services.cms.folksonomy.impl.TagStyleConfig$HtmlTagStyle">
                                        <field name="name">
                                            <string>hottest</string>
                                        </field>
                                        <field name="tagRate">
                                            <string>10..*</string>
                                        </field>
                                        <field name="htmlStyle">
                                            <string>font-size: 20px; font-weight: bold; color: red; font-family:Arial;
                                                text-decoration:none;
                                            </string>
                                        </field>
                                        <field name="description">
                                            <string>hottest style for tag</string>
                                        </field>
                                    </object>
                                </value>
                            </collection>
                        </field>
                    </object>
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

-  **Name**: ``predefinedTagStylePlugin``

-  **Set-method**: ``addTagStylePlugin``

-  **Type**:
   ``org.exoplatform.services.cms.folksonomy.impl.TagStylePlugin``

-  **Object type**:
   ``org.exoplatform.services.cms.folksonomy.impl.TagStyleConfig``

+----------------------------------+-----------------+-------------------------+--------------------------------------------------------------------------------------+
| **Name**                         | **Type**        | **Value**               | **Description**                                                                      |
+==================================+=================+=========================+======================================================================================+
| **autoCreatedInNewRepository**   | ``boolean``     | ``true``                | Specifies whether the tag style is added automatically in a new repository or not.   |
+----------------------------------+-----------------+-------------------------+--------------------------------------------------------------------------------------+
| **repository**                   | ``string``      | ``repository``          | Name of the repository where the tag style is added.                                 |
+----------------------------------+-----------------+-------------------------+--------------------------------------------------------------------------------------+
| **tagStyleList**                 | ``ArrayList``   | {java.util.ArrayList}   | The list of tag styles.                                                              |
+----------------------------------+-----------------+-------------------------+--------------------------------------------------------------------------------------+

-  **Object type**:
   ``org.exoplatform.services.cms.folksonomy.impl.TagStyleConfig$HtmlTagStyle``

+-----------------+--------------+--------------------------------------------------------------------------------------+
| **Name**        | **Type**     | **Description**                                                                      |
+=================+==============+======================================================================================+
| **name**        | ``string``   | The name of the tag.                                                                 |
+-----------------+--------------+--------------------------------------------------------------------------------------+
| **tagRate**     | ``string``   | The number of times that a tag is used which will decide the respective tag style.   |
+-----------------+--------------+--------------------------------------------------------------------------------------+
| **htmlStyle**   | ``string``   | The HTML code that defines the style.                                                |
+-----------------+--------------+--------------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.TaxonomyPlugin:

Taxonomy
----------

This plugin is used to configure the predefined taxonomies to inject
into JCR.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.cms.taxonomy.TaxonomyService</target-component>

The configuration is applied mainly in
``packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/dms-extension/dms/dms-categories-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.cms.taxonomy.TaxonomyService</target-component>
        <component-plugin>
            <name>predefinedTaxonomyPlugin</name>
            <set-method>addTaxonomyPlugin</set-method>
            <type>org.exoplatform.services.cms.taxonomy.impl.TaxonomyPlugin</type>
            <init-params>
                <value-param>
                    <name>autoCreateInNewRepository</name>
                    <value>true</value>
                </value-param>
                <value-param>
                    <name>repository</name>
                    <value>repository</value>
                </value-param>
                <value-param>
                    <name>workspace</name>
                    <value>dms-system</value>
                </value-param>
                <value-param>
                    <name>treeName</name>
                    <value>System</value>
                </value-param>
                <object-param>
                    <name>permission.configuration</name>
                    <object type="org.exoplatform.services.cms.taxonomy.impl.TaxonomyConfig">
                        <field name="taxonomies">
                            <collection type="java.util.ArrayList">
                                <value>
                                    <object type="org.exoplatform.services.cms.taxonomy.impl.TaxonomyConfig$Taxonomy">
                                        <field name="permissions">
                                            <collection type="java.util.ArrayList">
                                                <value>
                                                    <object type="org.exoplatform.services.cms.taxonomy.impl.TaxonomyConfig$Permission">
                                                        <field name="identity">
                                                            <string>*:/platform/users</string>
                                                        </field>
                                                        <field name="read">
                                                            <string>true</string>
                                                        </field>
                                                        <field name="addNode">
                                                            <string>true</string>
                                                        </field>
                                                        <field name="setProperty">
                                                            <string>true</string>
                                                        </field>
                                                        <field name="remove">
                                                            <string>false</string>
                                                        </field>
                                                    </object>
                                                </value>
                                            </collection>
                                        </field>
                                    </object>
                                </value>
                            </collection>
                        </field>
                    </object>
                </object-param>
                <object-param>
                    ...
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``predefinedTaxonomyPlugin``

-  **Set-method**: ``addTaxonomyPlugin``

-  **Type**:
   ``org.exoplatform.services.cms.taxonomy.impl.TaxonomyPlugin``

-  **Init-param**:

+---------------------------------+---------------+------------------+------------------------------------------------------------------------------------+
| **Value-param**                 | **Type**      | **Value**        | **Description**                                                                    |
+=================================+===============+==================+====================================================================================+
| **autoCreateInNewRepository**   | ``boolean``   | ``true``         | Enables/Disables the creation of the taxonomies in the newly created repository.   |
+---------------------------------+---------------+------------------+------------------------------------------------------------------------------------+
| **repository**                  | ``string``    | ``repository``   | The name of the repository where taxonomies are created.                           |
+---------------------------------+---------------+------------------+------------------------------------------------------------------------------------+
| **workspace**                   | ``string``    | ``dms-system``   | The name of the workspace where taxonomies are created.                            |
+---------------------------------+---------------+------------------+------------------------------------------------------------------------------------+
| **treeName**                    | ``string``    | ``system``       | The name of the taxonomy tree created.                                             |
+---------------------------------+---------------+------------------+------------------------------------------------------------------------------------+

-  **Object type**:
   ``org.exoplatform.services.cms.taxonomy.impl.TaxonomyConfig``

+------------------+-----------------+-------------------------+------------------------------------------------------------+
| **Name**         | **Type**        | **Value**               | **Description**                                            |
+==================+=================+=========================+============================================================+
| **taxonomies**   | ``ArrayList``   | {java.util.ArrayList}   | The list of taxonomies to be configured with permission.   |
+------------------+-----------------+-------------------------+------------------------------------------------------------+

-  **Object type**:
   ``org.exoplatform.services.cms.taxonomy.impl.TaxonomyConfig$Taxonomy``

+-------------------+-----------------+-------------------------+-----------------------------------------------------------------------+
| **Name**          | **Type**        | **Value**               | **Description**                                                       |
+===================+=================+=========================+=======================================================================+
| **permissions**   | ``ArrayList``   | {java.util.ArrayList}   | The list of permissions for users or groups to access the taxonomy.   |
+-------------------+-----------------+-------------------------+-----------------------------------------------------------------------+

-  **Object type**:
   ``org.exoplatform.services.cms.taxonomy.impl.TaxonomyConfig$Permission``

+-------------------+---------------+----------------------+---------------------------------------------------------------------+
| **Name**          | **Type**      | **Value**            | **Description**                                                     |
+===================+===============+======================+=====================================================================+
| **identity**      | ``string``    | \*:/platform/users   | The name of the user, group or membership.                          |
+-------------------+---------------+----------------------+---------------------------------------------------------------------+
| **read**          | ``boolean``   | ``true``             | The permission to read the taxonomy tree.                           |
+-------------------+---------------+----------------------+---------------------------------------------------------------------+
| **addNode**       | ``boolean``   | ``true``             | The permission to add a node to the taxonomy tree.                  |
+-------------------+---------------+----------------------+---------------------------------------------------------------------+
| **setProperty**   | ``boolean``   | ``true``             | The permission to set properties for a node in the taxonomy tree.   |
+-------------------+---------------+----------------------+---------------------------------------------------------------------+
| **remove**        | ``boolean``   | ``false``            | The permission to remove a node from the taxonomy tree.             |
+-------------------+---------------+----------------------+---------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.TemplatePlugin:

Template
---------

This plugin is used to create templates into the system. A template is a
presentation to display the saved information.

The node type template is used to edit and display the node content.
Each node type has one ``dialog1.gtmpl`` file (dialog template) for
editing/creating a node and one ``view1.gtmpl`` file (view template) for
viewing the node content. Using the dialog template, you can specify a
dialog whose fields correspond to the properties of the node you want to
edit their values. When this template is rendered, each specified field
will appear with a data input box for you to edit. Note that you do not
have to design a dialog in which all data of the node are listed to be
edited. You can just list the subset of node data you want to edit. Like
the dialog template, the view template renders information of the node.
You just need to create the template and specify which data fields to be
displayed. With this kind of template, node information is only
displayed but cannot be edited. See details at
`ContentType <#PLFRefGuide.PLFDevelopment.TemplateConfiguration.WCM.ContentTypes>`__.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.cms.templates.TemplateService</target-component>

The configuration is applied mainly in
``packaging/wcm/webapp/src/main/webapp/WEB-INF/conf/dms-extension/dms/dms-templates-configuration.xml``.

**Sample configuration**:

This below example is configuration for the **nt:file** template, any
other template will be put in the same level with this template starting
from the line **<object
type="org.exoplatform.services.cms.templates.impl.TemplateConfig$NodeType>**
as the another node type.

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.cms.templates.TemplateService</target-component>
        <component-plugin>
            <name>addTemplates</name>
            <set-method>addTemplates</set-method>
            <type>org.exoplatform.services.cms.templates.impl.TemplatePlugin</type>
            <init-params>
                <value-param>
                    <name>autoCreateInNewRepository</name>
                    <value>true</value>
                </value-param>
                <value-param>
                    <name>storedLocation</name>
                    <value>war:/conf/dms-extension/dms/artifacts/templates</value>
                </value-param>
                <value-param>
                    <name>repository</name>
                    <value>repository</value>
                </value-param>
                <object-param>
                    <name>template.configuration</name>
                    <description>configuration for the localtion of templates to inject in jcr</description>
                    <object type="org.exoplatform.services.cms.templates.impl.TemplateConfig">
                        <field name="nodeTypes">
                            <collection type="java.util.ArrayList">
                                <value>
                                    <object type="org.exoplatform.services.cms.templates.impl.TemplateConfig$NodeType">
                                        <field name="nodetypeName">
                                            <string>nt:file</string>
                                        </field>
                                        <field name="documentTemplate">
                                            <boolean>true</boolean>
                                        </field>
                                        <field name="label">
                                            <string>File</string>
                                        </field>
                                        <field name="referencedView">
                                            <collection type="java.util.ArrayList">
                                                <value>
                                                    <object type="org.exoplatform.services.cms.templates.impl.TemplateConfig$Template">
                                                        <field name="templateFile">
                                                            <string>/file/views/view1.gtmpl</string>
                                                        </field>
                                                        <field name="roles">
                                                            <string>*</string>
                                                        </field>
                                                    </object>
                                                </value>
                                                <value>
                                                    <object type="org.exoplatform.services.cms.templates.impl.TemplateConfig$Template">
                                                        <field name="templateFile">
                                                            <string>/file/views/admin_view.gtmpl</string>
                                                        </field>
                                                        <field name="roles">
                                                            <string>*:/platform/administrators</string>
                                                        </field>
                                                    </object>
                                                </value>
                                            </collection>
                                        </field>
                                        <field name="referencedDialog">
                                            <collection type="java.util.ArrayList">
                                                <value>
                                                    <object type="org.exoplatform.services.cms.templates.impl.TemplateConfig$Template">
                                                        <field name="templateFile">
                                                            <string>/file/dialogs/dialog1.gtmpl</string>
                                                        </field>
                                                        <field name="roles">
                                                            <string>*</string>
                                                        </field>
                                                    </object>
                                                </value>
                                                <value>
                                                    <object type="org.exoplatform.services.cms.templates.impl.TemplateConfig$Template">
                                                        <field name="templateFile">
                                                            <string>/file/dialogs/admin_dialog.gtmpl</string>
                                                        </field>
                                                        <field name="roles">
                                                            <string>*:/platform/administrators</string>
                                                        </field>
                                                    </object>
                                                </value>
                                            </collection>
                                        </field>
                                        <field name="referencedSkin">
                                            <collection type="java.util.ArrayList">
                                                <value>
                                                    <object type="org.exoplatform.services.cms.templates.impl.TemplateConfig$Template">
                                                        <field name="templateFile">
                                                            <string>/file/skins/Stylesheet-lt.css</string>
                                                        </field>
                                                        <field name="roles">
                                                            <string>*</string>
                                                        </field>
                                                    </object>
                                                </value>
                                                <value>
                                                    <object type="org.exoplatform.services.cms.templates.impl.TemplateConfig$Template">
                                                        <field name="templateFile">
                                                            <string>/file/skins/Stylesheet-rt.css</string>
                                                        </field>
                                                        <field name="roles">
                                                            <string>*</string>
                                                        </field>
                                                    </object>
                                                </value>
                                            </collection>
                                        </field>
                                    </object>
                                </value>
                            </collection>
                        </field>
                    </object>
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **name**: ``addTemplates``

-  **set-method**: ``addTemplates``

-  **type**:
   ``org.exoplatform.services.cms.templates.impl.TemplatePlugin``

-  **Init-params**:

+-----------------------------+---------------+-------------------------------------------------------+-------------------------------------------------------------------------------------------------------------+
| **Value-param**             | **Type**      | **Value**                                             | **Description**                                                                                             |
+=============================+===============+=======================================================+=============================================================================================================+
| autoCreateInNewRepository   | ``boolean``   | ``true``                                              | Enables the application to import predefined templates at the start-up of template service automatically.   |
+-----------------------------+---------------+-------------------------------------------------------+-------------------------------------------------------------------------------------------------------------+
| storedLocation              | ``string``    | ``war:/conf/dms-extension/dms/artifacts/templates``   | The location of stored templates.                                                                           |
+-----------------------------+---------------+-------------------------------------------------------+-------------------------------------------------------------------------------------------------------------+
| repository                  | ``string``    | ``repository``                                        | Location of stored templates.                                                                               |
+-----------------------------+---------------+-------------------------------------------------------+-------------------------------------------------------------------------------------------------------------+

-  **Object-type**:
   ``org.exoplatform.services.cms.templates.impl.TemplateConfig`` that
   defines all available template files, using the "collection type"
   configuration.

-  **type**: It is the name of each object type. It means the type of
   template, the further configurations for this type are defined by
   some specified fields.

+-----------------+-----------------+-------------------------+----------------------------------+
| **Field**       | **Type**        | **Value**               | **Description**                  |
+=================+=================+=========================+==================================+
| **nodeTypes**   | ``ArrayList``   | {java.util.ArrayList}   | The node type of the template.   |
+-----------------+-----------------+-------------------------+----------------------------------+

-  **Object-type**:
   ``org.exoplatform.services.cms.templates.impl.TemplateConfig$NodeType``

+------------------------+-----------------+-------------------------+------------------------------------------------------------+
| **Field**              | **Type**        | **Value**               | **Description**                                            |
+========================+=================+=========================+============================================================+
| **nodetypeName**       | ``string``      | nt:file                 | The name of template that is saved as a node in system.    |
+------------------------+-----------------+-------------------------+------------------------------------------------------------+
| **documentTemplate**   | ``boolean``     | ``true``                | Determines if the node type is a document type.            |
+------------------------+-----------------+-------------------------+------------------------------------------------------------+
| **label**              | ``string``      | ``file``                | Visual display of the title for this node.                 |
+------------------------+-----------------+-------------------------+------------------------------------------------------------+
| **referencedView**     | ``ArrayList``   | {java.util.ArrayList}   | Determines how to display a view.                          |
+------------------------+-----------------+-------------------------+------------------------------------------------------------+
| **referencedDialog**   | ``ArrayList``   | {java.util.ArrayList}   | Determines how to display a dialog to input information.   |
+------------------------+-----------------+-------------------------+------------------------------------------------------------+
| **referencedSkin**     | ``ArrayList``   | {java.util.ArrayList}   | Determines the stylesheet for display.                     |
+------------------------+-----------------+-------------------------+------------------------------------------------------------+

-  **Object type:**
   ``org.exoplatform.services.cms.templates.impl.TemplateConfig$Template``

+--------------------+--------------+-------------------------------------------------------------------+
| **Field**          | **Type**     | **Description**                                                   |
+====================+==============+===================================================================+
| **templateFile**   | ``string``   | The location of the file store for the template's presentation.   |
+--------------------+--------------+-------------------------------------------------------------------+
| **roles**          | ``string``   | Determines who can access this object (View/Dialog/CSS).          |
+--------------------+--------------+-------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.PublicationDeploymentPlugin:

Publication Deployment
-----------------------

This plugin is used to publish content. This plugin checks if content is
enrolled to a publication lifecycle or not. If content has been
enrolled, this plugin will unsubscribe content from the publication
lifecycle. The configuration is applied mainly in
``webapps/acme-website/WEB-INF/conf/acme-portal/wcm/deployment/acme-deployment-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.deployment.WCMContentInitializerService</target-component>
        <component-plugin>
          <name>Content Initializer Service</name>
          <set-method>addPlugin</set-method>
          <type>org.exoplatform.services.wcm.extensions.deployment.PublicationDeploymentPlugin</type>
          <description>Publication Deployment Plugin</description>
          <init-params>
            <object-param>
              <name>plfpub01</name>
              <description>Deployment Descriptor</description>
              <object type="org.exoplatform.services.wcm.extensions.deployment.PublicationDeploymentDescriptor">
                <field name="contents">
                  <collection type="java.util.ArrayList">
                    <value><string>collaboration:/sites/acme/web contents/site artifacts/Introduce</string></value>
                    <value><string>collaboration:/sites/acme/web contents/site artifacts/contact_form_confirmation</string></value>
                    <value><string>collaboration:/sites/acme/web contents/site artifacts/contact-us-countries</string></value>
                    ...
                  </collection>
                </field>
              </object>
            </object-param>
          </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **Name**: ``Content Initializer Service``

-  **Set-method**: ``addPlugin``

-  **Type**:
   ``org.exoplatform.services.wcm.extensions.deployment.PublicationDeploymentPlugin``

-  **Object type**:
   ``org.exoplatform.services.wcm.extensions.deployment.PublicationDeploymentDescriptor``

+----------------+------------------+-----------------------------+----------------------+
| **Field**      | **Type**         | **Value**                   | **Description**      |
+================+==================+=============================+======================+
| **contents**   | ``Collection``   | **{java.util.ArrayList}**   | The content paths.   |
+----------------+------------------+-----------------------------+----------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.WCMPublicationDeploymentPlugin:

WCM Publication Deployment
----------------------------

This plugin is used to inject content at the server startup. Being
considered as a substitute for the deprecated ``XMLDeploymentPlugin``,
it is better because it allows both injection and publication to be done
at once.

In configuration, plug it to the following target component:

.. code:: xml

    <target-component>org.exoplatform.services.deployment.WCMContentInitializerService</target-component>

**Sample configuration:**

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.deployment.WCMContentInitializerService</target-component>
        <component-plugin>
            <name>Content Initializer Service</name>
            <set-method>addPlugin</set-method>
            <type>org.exoplatform.services.wcm.extensions.deployment.WCMPublicationDeploymentPlugin</type>
            <description>WCM Plublication Deployment Plugin</description>
            <init-params>
                <value-param>
                    <name>override</name>
                    <description>The flag parameter to decide if portal metadata is overriden on restarting server</description>
                    <value>${acme.portalConfig.metadata.override:false}</value>
                </value-param>
                <object-param>
                    <name>ACME French translations directory</name>
                    <description>Deployment Descriptor</description>
                    <object type="org.exoplatform.services.wcm.extensions.deployment.WCMPublicationDeploymentDescriptor">
                        <field name="target">
                            <object type="org.exoplatform.services.deployment.DeploymentDescriptor$Target">
                                <field name="workspace"><string>collaboration</string></field>
                                <field name="nodePath"><string>/sites/acme/web contents/site artifacts</string></field>
                            </object>
                        </field>
                        <field name="sourcePath">
                            <string>war:/conf/acme-portal/wcm/artifacts/site-resources/acme/FrenchTranslations.xml</string>
                        </field>
                        <field name="cleanupPublicationType">
                            <string>publish-first-publication</string>
                        </field>
                    </object>
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **set-method**: ``addPlugin``

-  **type**:
   ``org.exoplatform.services.wcm.extensions.deployment.WCMPublicationDeploymentPlugin``

+--------------------+---------------+----------------+----------------------------+
| **Param name**     | **Type**      | **Value**      | **Description**            |
+====================+===============+================+============================+
| **override**       | ``boolean``   | *true* or      | -  *true*: Always          |
|                    |               | *false*        |    re-import the data from |
|                    |               |                |    the configuration when  |
|                    |               |                |    the server restarts.    |
|                    |               |                |                            |
|                    |               |                | -  *false*: Do not         |
|                    |               |                |    re-import, so if the    |
|                    |               |                |    data has been modified  |
|                    |               |                |    after being imported    |
|                    |               |                |    for the first time, the |
|                    |               |                |    modification is not     |
|                    |               |                |    overridden when the     |
|                    |               |                |    server restarts.        |
+--------------------+---------------+----------------+----------------------------+

-  **Object type**:
   ``org.exoplatform.services.wcm.extensions.deployment.WCMPublicationDeploymentDescriptor``

+----------------+--------+----------------------------------------+--------------+
| **Field**      | **Type | **Value**                              | **Descriptio |
|                | **     |                                        | n**          |
+================+========+========================================+==============+
| **target**     | ``Obje | ``org.exoplatform.services.deployment. | The target   |
|                | ct``   | DeploymentDescriptor$Target``          | node to      |
|                |        |                                        | import.      |
+----------------+--------+----------------------------------------+--------------+
| **sourcePath** | ``Stri | ``war:/conf/acme-portal/wcm/artifacts/ | The xml      |
|                | ng``   | site-resources/acme/FrenchTranslations | descriptor   |
|                |        | .xml``                                 | file of the  |
|                |        |                                        | imported     |
|                |        |                                        | data.        |
+----------------+--------+----------------------------------------+--------------+
| **cleanupPubli | ``Stri | ``publish-first-publication`` (see all | -  *clean-pu |
| cationType**   | ng``   | the options in Description column)     | blication*:  |
|                |        |                                        |    import,   |
|                |        |                                        |    then      |
|                |        |                                        |    clean all |
|                |        |                                        |    the       |
|                |        |                                        |    publicati |
|                |        |                                        | on           |
|                |        |                                        |    state and |
|                |        |                                        |    version   |
|                |        |                                        |    history   |
|                |        |                                        |    (if any). |
|                |        |                                        |              |
|                |        |                                        | -  *keep-pub |
|                |        |                                        | lication*:   |
|                |        |                                        |    import    |
|                |        |                                        |    and keep  |
|                |        |                                        |    the       |
|                |        |                                        |    publicati |
|                |        |                                        | on           |
|                |        |                                        |    state and |
|                |        |                                        |    version   |
|                |        |                                        |    history.  |
|                |        |                                        |              |
|                |        |                                        | -  *publish- |
|                |        |                                        | first-public |
|                |        |                                        | ation*:      |
|                |        |                                        |    import,   |
|                |        |                                        |    clean all |
|                |        |                                        |    the       |
|                |        |                                        |    publicati |
|                |        |                                        | on           |
|                |        |                                        |    state and |
|                |        |                                        |    version   |
|                |        |                                        |    history,  |
|                |        |                                        |    then      |
|                |        |                                        |    publish   |
|                |        |                                        |    the data  |
|                |        |                                        |    as the    |
|                |        |                                        |    first     |
|                |        |                                        |    version.  |
+----------------+--------+----------------------------------------+--------------+

-  **Object type**:
   ``org.exoplatform.services.deployment.DeploymentDescriptor$Target``

+------------+---------+---------------------------------+------------------------+
| **Field**  | **Type* | **Value**                       | **Description**        |
|            | *       |                                 |                        |
+============+=========+=================================+========================+
| **workspac | ``Strin | ``collaboration``               | The target workspace   |
| e**        | g``     |                                 | to import.             |
+------------+---------+---------------------------------+------------------------+
| **nodePath | ``Strin | ``/sites/acme/web contents/site | The target node to     |
| **         | g``     |  artifacts``                    | import.                |
+------------+---------+---------------------------------+------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.XMLdeploymentPlugin:

XML Deployment
---------------

.. warning:: ``XMLDeploymentPlugin`` is deprecated. Use
             :ref:`WCMPublicationDeploymentPlugin <PLFRefGuide.Configurations.ExternalComponentPlugins.Content.WCMPublicationDeploymentPlugin>` instead.

When a site is created, most of end-users want to see something in the
page instead of a blank page, so you need this plugin to deploy some
"default" contents, such as Banner, Footer, Navigation, Breadcrumb.

There are two main cases to use:

-  The site is created only one time when the database is cleaned.

-  The site is created at runtime, when a user uses the core features of
   the GateIn portal.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.deployment.WCMContentInitializerService</target-component>

The configuration is applied mainly in
``samples/acme-website/webapp/src/main/webapp/WEB-INF/conf/acme-portal/wcm/deployment/acme-deployment-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.deployment.WCMContentInitializerService</target-component>
        <component-plugin>
            <name>Content Initializer Service</name>
            <set-method>addPlugin</set-method>
            <type>org.exoplatform.services.deployment.plugins.XMLDeploymentPlugin</type>
            <description>XML Deployment Plugin</description>
            <init-params>
                <value-param>
                    <name>override</name>
                    <description>The flag parameter to decide if portal metadata is overriden on restarting server</description>
                    <value>${acme.portalConfig.metadata.override:false}</value>
                </value-param>
                <object-param>
                    <name>ACME Logo data</name>
                    <description>Deployment Descriptor</description>
                    <object type="org.exoplatform.services.deployment.DeploymentDescriptor">
                        <field name="target">
                            <object type="org.exoplatform.services.deployment.DeploymentDescriptor$Target">
                                <field name="repository">
                                    <string>repository</string>
                                </field>
                                <field name="workspace">
                                    <string>collaboration</string>
                                </field>
                                <field name="nodePath">
                                    <string>/sites/acme/web contents/site artifacts</string>
                                </field>
                            </object>
                        </field>
                        <field name="sourcePath">
                            <string>war:/conf/sample-portal/wcm/artifacts/site-resources/acme/Logo.xml</string>
                        </field>
                        <field name="versionHistoryPath">
                            <string>war:/conf/sample-portal/wcm/artifacts/site-resources/acme/Logo_versionHistory.zip
                            </string>
                        </field>
                        <field name="cleanupPublication">
                            <boolean>true</boolean>
                        </field>
                    </object>
                </object-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

In which:

-  **name**: ``Content Initializer Service``

-  **set-method**: ``addPlugin``

-  **type**:
   ``org.exoplatform.services.deployment.plugins.XMLDeploymentPlugin``

+----------------+---------------+----------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+
| **Name**       | **Type**      | **Value**                                          | **Description**                                                                                                       |
+================+===============+====================================================+=======================================================================================================================+
| **override**   | ``boolean``   | ``${acme.portalConfig.metadata.override:false}``   | Decides if portal metadata is overriden on restarting server.                                                         |
|                |               |                                                    |                                                                                                                       |
|                |               |                                                    | -  **true**: Before importing, check if the node exists in JCR, override it with the newer node from configuration.   |
|                |               |                                                    |                                                                                                                       |
|                |               |                                                    | -  **false**: Not override.                                                                                           |
+----------------+---------------+----------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------+

-  **Object type**:
   ``org.exoplatform.services.deployment.DeploymentDescriptor``

+--------------------------+---------------+-----------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
| **Name**                 | **Type**      | **Value**                                                                               | **Description**                                                                                       |
+==========================+===============+=========================================================================================+=======================================================================================================+
| **target**               | ``Object``    | ``org.exoplatform.services.deployment.DeploymentDescriptor$Target (*)``                 | The target node which will contain the imported node.                                                 |
+--------------------------+---------------+-----------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
| **sourcePath**           | ``string``    | ``war:/conf/sample-portal/wcm/artifacts/site-resources/acme/Logo.xml``                  | The absolute path of the XML file.                                                                    |
+--------------------------+---------------+-----------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
| **cleanupPublication**   | ``boolean``   | ``false``                                                                               | Decides when the publication lifecycle is cleaned up in the target folder after importing the data.   |
|                          |               |                                                                                         |                                                                                                       |
|                          |               |                                                                                         | -  **true**: Allow.                                                                                   |
|                          |               |                                                                                         |                                                                                                       |
|                          |               |                                                                                         | -  **false**: Not allow.                                                                              |
+--------------------------+---------------+-----------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------+
| **versionHistoryPath**   | ``string``    | ``war:/conf/sample-portal/wcm/artifacts/site-resources/acme/Logo_versionHistory.zip``   | The absolute path of the version history file.                                                        |
+--------------------------+---------------+-----------------------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------+

-  **Object type**:
   ``org.exoplatform.services.deployment.DeploymentDescriptor$Target``

+------------------+--------------+-----------------------------------------------+----------------------------------------------+
| **Field**        | **Type**     | **Value**                                     | **Description**                              |
+==================+==============+===============================================+==============================================+
| **repository**   | ``string``   | ``repository``                                | The repository name of the target node.      |
+------------------+--------------+-----------------------------------------------+----------------------------------------------+
| **workspace**    | ``string``   | ``collaboration``                             | The collaboration name of the target node.   |
+------------------+--------------+-----------------------------------------------+----------------------------------------------+
| **nodePath**     | ``string``   | ``/sites/acme/web contents/site artifacts``   | The path of the target node.                 |
+------------------+--------------+-----------------------------------------------+----------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Content.AbstractPlugins:

Abstract plugins
------------------

**BaseActionPlugin**

This plugin provides all base and abstract methods which are used for
action types, such as **Add New**, **Schedule Activation**.

**CreatePortalPlugin**

This plugin provides an abstract method which creates all data when a
new portal is added.

**PublicationPlugin**

This plugin implements a publication lifecycle. When a lifecycle is
defined, a new plugin will be extended from the **PublicationPlugin**
and registered with the Publication Service.

**RemovePortalPlugin**

This plugin provides an abstract method which invalidates all data when
a portal is removed.

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Calendar:

Calendar plugins
~~~~~~~~~~~~~~~~~

This section describes the main component plugins used in Calendar,
sample configurations with explanation about init-params and how to use
these plugins.

-  :ref:`New User Listener <PLFRefGuide.Configurations.ExternalComponentPlugins.Calendar.NewUserListener>`

-  :ref:`New Group Listener <PLFRefGuide.Configurations.ExternalComponentPlugins.Calendar.NewGroupListener>`

-  :ref:`New Membership Listener <PLFRefGuide.Configurations.ExternalComponentPlugins.Calendar.NewMembershipListener>`

-  :ref:`Reminder Period Job <PLFRefGuide.Configurations.ExternalComponentPlugins.Calendar.ReminderPeriodJob>`

-  :ref:`Popup Reminder Period Job <PLFRefGuide.Configurations.ExternalComponentPlugins.Calendar.PopupReminderPeriodJob>`

-  :ref:`Social Integration Configuration <PLFRefGuide.Configurations.ExternalComponentPlugins.Calendar.SocialIntegrationConfiguration>`

   -  **CalendarDataInitialize** - Creates a calendar for a group in a
      specific space.

   -  **CalendarSpaceActivityPublisher** - Customizes the activity
      status of a specific space when an event happens on a calendar.

   -  **PortletPreferenceRequiredPlugin** - Declares the application
      that will automatically create database.

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Calendar.NewUserListener:

New User Listener
---------------------

Each user can have a default personal calendar created. Use the
NewUserListener to configure that. To use the plugin in the component
configuration, you must use the target-component:

.. code:: xml

    <target-component>org.exoplatform.services.organization.OrganizationService</target-component>

The configuration can be found
`here <https://github.com/exoplatform/calendar/blob/master/calendar-extension/calendar-extension-webapp/src/main/webapp/WEB-INF/cs-extension/cs/calendar/calendar-service-configuration.xml>`__.

.. code:: xml

    <component-plugin>
          <name>calendar.new.user.event.listener</name>
          <set-method>addListenerPlugin</set-method>
          <type>org.exoplatform.calendar.service.impl.NewUserListener</type>
          <description>description</description>
          <init-params>
            <value-param>
              <name>defaultEventCategories</name>
              <value>defaultEventCategoryIdMeeting,defaultEventCategoryIdCalls,defaultEventCategoryIdClients,defaultEventCategoryIdHoliday,defaultEventCategoryIdAnniversary</value><!-- Multi value, use coma (,) to split values-->
              <!-- The event category's name will be get from resource bundle by key "UICalendars.label." + defaultEventCategory's value.
                   If the key does not exist, the defaultEventCategory's value will be used to display.
                   Sample:
                      If the value is "defaultEventCategoryIdMeeting" then the resource bundle key is "UICalendars.label.defaultEventCategoryIdMeeting".
                        The value of this key is "Meeting", so "Meeting" will be display as default event category.
                      If the value is "Not exist key", because this key doesn't exist in resource bundle then
                        "Not exist key" will be display as default event category.
              -->
            </value-param>
            <value-param>
              <name>defaultCalendarCategory</name>
              <value>defaultCalendarCategoryId</value><!-- Single value, default calendar category's name is "My group"-->
              <!-- The calendar category's name will be get from resource bundle by key "UICalendars.label." + defaultCalendarCategory's value.
                   If the key does not exist, the defaultCalendarCategory's value will be used to display.
                   Sample:
                      If the value is "defaultCalendarCategoryId" then the resource bundle key is "UICalendars.label.defaultCalendarCategoryId".
                        The value of this key is "My group", so "My group" will be display as default calendar category.
                      If the value is "My calendar category", because this key doesn't exist in resource bundle then
                        "My calendar category" will be display as default calendar category.
              -->
            </value-param>
            <value-param>
              <name>defaultCalendar</name>
              <value>defaultCalendarId</value> <!-- Single value, default calendar's name is "Default"-->
              <!-- The calendar's name will be get from resource bundle by key "UICalendars.label." + defaultCalendar's value.
                   If the key does not exist, the defaultCalendar's value will be used to display.
                   Sample:
                      If the value is "defaultCalendarId" then the resource bundle key is "UICalendars.label.defaultCalendarId".
                        The value of this key is "Default", so "Default" will be display as default calendar.
                      If the value is "My calendar", because this key doesn't exist in resource bundle then
                        "My calendar" will be display as default calendar.
              -->
            </value-param>
            <!--Params for default calendar setting-->
            <value-param>
             <name>viewType</name>
             <value>1</value><!-- DAY_VIEW = "0" ; WEEK_VIEW = "1" ; MONTH_VIEW = "2" ; YEAR_VIEW = "3" ; LIST_VIEW = "4" ; SCHEDULE_VIEW = "5" ; WORKING_VIEW = "6" ;-->
            </value-param>

            <value-param>
             <name>weekStartOn</name>
             <value>2</value><!--SUNDAY = "1" ; MONDAY = "2" ; TUESDAY = "3" ; WEDNESDAY = "4" ; THURSDAY = "5" ; FRIDAY = "6" ;SATURDAY = "7" ;-->
            </value-param>

            <value-param>
             <name>dateFormat</name>
             <value>MM/dd/yyyy</value>
            </value-param>

            <value-param>
             <name>timeFormat</name>
             <value>HH:mm</value> <!-- HH:mm/hh:mm a -->
            </value-param>

            <value-param>
             <name>localeId</name>
             <value>BEL</value><!-- see more locale ids http://userpage.chemie.fu-berlin.de/diverse/doc/ISO_3166.html -->
            </value-param>

             <value-param>
             <name>timezoneId</name>
             <value>Europe/Brussels</value><!-- see more for timeZone ids http://www.unicode.org/cldr/data/docs/design/formatting/zone_log.html#windows_ids -->
            </value-param>

             <value-param>
             <name>baseUrlForRss</name>
             <value></value>
            </value-param>

             <value-param>
             <name>isShowWorkingTime</name>
             <value>false</value><!-- boolean true/false -->
            </value-param>

             <value-param>
             <name>workingTimeBegin</name>
             <value>08:00</value><!--  -->
            </value-param>

             <value-param>
               <name>workingTimeEnd</name>
               <value>18:00</value><!--  -->
            </value-param>

            <values-param>
              <name>ignoredUsers</name>
              <description>Definition users to ignore create default calendar</description>
              <!--
              <value>demo</value>
              <value>marry</value>
               -->
            </values-param>

          </init-params>
    </component-plugin>

**Details:**

-  **Name**: ``calendar.new.user.event.listener`` - The unique key to
   avoid duplicate names. Users can change it.

-  **Type**: ``org.exoplatform.calendar.service.impl.NewUserListener`` -
   The class is set up to execute the creation of database.

-  **Description**: It is a plugin used to create default personal
   calendars.

See the details about the init-params of the component in the following
table:

+-------------------------------+--------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------+
| Value-params                  | Possible values                                                                | Default value                                                                                                                                                             | Description                                                               |
+===============================+================================================================================+===========================================================================================================================================================================+===========================================================================+
| **defaultEventCategories**    | ``String (Comma separated list of resource bundle keys for category names)``   | ``                                                                                                                                                                        | The default event categories for users.                                   |
|                               |                                                                                |                 defaultEventCategoryIdMeeting,defaultEventCategoryIdCalls,defaultEventCategoryIdClients,defaultEventCategoryIdHoliday,defaultEventCategoryIdAnniversary   |                                                                           |
|                               |                                                                                |               ``                                                                                                                                                          |                                                                           |
+-------------------------------+--------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------+
| **defaultCalendarCategory**   | ``String``                                                                     | ``defaultCalendarCategoryId``                                                                                                                                             | The name of the default calendar categories.                              |
+-------------------------------+--------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------+
| **defaultCalendar**           | ``String``                                                                     | ``defaultCalendarId``                                                                                                                                                     | The name of the default calendar.                                         |
+-------------------------------+--------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------+
| **viewType**                  | ``0-6 (see below)``                                                            | ``1``                                                                                                                                                                     | Default view after user logs in and goes to the Calendar portlet.         |
+-------------------------------+--------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------+
| **weekStartOn**               | ``1-7 (see below)``                                                            | ``2``                                                                                                                                                                     | Day to use as the beginning of the week. It only affects the Week view.   |
+-------------------------------+--------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------+
| **dateFormat**                | ``valid Java Date format``                                                     | ``MM/dd/yyyy``                                                                                                                                                            | The display format for dates.                                             |
+-------------------------------+--------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------+
| **timeFormat**                | ``valid Java Date format``                                                     | ``HH:mm``                                                                                                                                                                 | The display format for time.                                              |
+-------------------------------+--------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------+
| **localeId**                  | ``valid locale ID``                                                            | ``BEL``                                                                                                                                                                   | Id of the geographic locale.                                              |
+-------------------------------+--------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------+
| **timezoneId**                | ``valid TimeZone id``                                                          | ``Europe``                                                                                                                                                                | User time zone.                                                           |
+-------------------------------+--------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------+
| **baseUrlForRss**             | ``none``                                                                       | ``none``                                                                                                                                                                  | The URL to publish the RSS content.                                       |
+-------------------------------+--------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------+
| **isShowWorkingTime**         | ``true/false``                                                                 | ``false``                                                                                                                                                                 | Indicates if the working time should be highlighted in the Day view.      |
+-------------------------------+--------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------+
| **workingTimeBegin**          | ``time in timeFormat``                                                         | ``08:00``                                                                                                                                                                 | The start time in working time.                                           |
+-------------------------------+--------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------+
| **workingTimeEnd**            | ``time in timeFormat``                                                         | ``18:00``                                                                                                                                                                 | The end time in working time.                                             |
+-------------------------------+--------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------+
| **ignoredUsers**              | ``user id, use multiple by each line``                                         | ``N/A``                                                                                                                                                                   | Definition users to ignore creating the default calendar.                 |
+-------------------------------+--------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------+

The **viewType** parameter is encoded by a number as follows:

-  0: Day view

-  1: Week view

-  2: Month view

-  3: Year view

-  4: List view

-  5: Schedule view

-  6: Working days view

The **weekStartOn** parameter is encoded as follow:

-  1: Sunday

-  2: Monday

-  3: Tuesday

-  4: Wednesday

-  5: Thursday

-  6: Friday

-  7: Saturday

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Calendar.NewGroupListener:

New Group Listener
--------------------

To use the plugin in the component configuration, you must use the
target-component:

.. code:: xml

    <target-component>org.exoplatform.services.organization.OrganizationService</target-component>

The configuration can be found
`here <https://github.com/exoplatform/calendar/blob/master/calendar-extension/calendar-extension-webapp/src/main/webapp/WEB-INF/cs-extension/cs/calendar/calendar-service-configuration.xml>`__.

.. code:: xml

    <component-plugin>
          <name>calendar.new.group.event.listener</name>
          <set-method>addListenerPlugin</set-method>
          <type>org.exoplatform.calendar.service.impl.NewGroupListener</type>
          <description>description</description>
          <init-params>
            <value-param>
              <name>defaultEditPermission</name>
              <value>*.*</value><!-- Multi value membership, use coma (,) to split values-->
            </value-param>
            <value-param>
              <name>defaultViewPermission</name>
              <value>*.*</value><!-- Multi value membership, use coma (,) to split values-->
            </value-param>

            <value-param>
              <name>defaultLocale</name>
              <value>BEL</value><!-- see more locale ids http://userpage.chemie.fu-berlin.de/diverse/doc/ISO_3166.html -->
            </value-param>

            <value-param>
              <name>defaultTimeZone</name>
              <value>Europe/Brussels</value><!-- see more for timeZone ids http://www.unicode.org/cldr/data/docs/design/formatting/zone_log.html#windows_ids -->
            </value-param>

            <values-param>
              <name>ignoredGroups</name>
              <description>Definition group to ignore create default calendar</description>
              <!--
              <value>/platform/guests</value>
               -->
              <value>/spaces/*</value> <!-- single value, use more <value> tags to add more group -->
            </values-param>

          </init-params>
        </component-plugin>

**Details:**

-  **Name**: ``calendar.new.group.event.listener`` - The unique key to
   avoid duplicate names. Users can change it.

-  **Type**: ``org.exoplatform.calendar.service.impl.NewGroupListener``
   - The class which is set up to execute the creation of database.

-  **Description** - It is the plugin used to create default group
   calendars.

See the details about the init-params of the component in the following
table:

+-----------------------------+----------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| Value-params                | Possible values                                                      | Default value                                                                                                              | Description                                                                                                               |
+=============================+======================================================================+============================================================================================================================+===========================================================================================================================+
| **defaultEditPermission**   | ``User id`` (Multi value membership, use coma (,) to split values)   | ``                                                                                                                         | The default permission assigned to membership in a specific group to edit calendars and events/tasks of the calendar.     |
|                             |                                                                      |                 *.*                                                                                                        |                                                                                                                           |
|                             |                                                                      |                 means that all members in that group can modify and add, remove a calendar, events/tasks of the calendar   |                                                                                                                           |
|                             |                                                                      |               ``                                                                                                           |                                                                                                                           |
+-----------------------------+----------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| **defaultViewPermission**   | ``User Id`` (Multi value membership, use coma (,) to split values)   | ``                                                                                                                         | The default permission assigned to membership in a specific group to view a calendar and events /tasks of the calendar.   |
|                             |                                                                      |                 *.*                                                                                                        |                                                                                                                           |
|                             |                                                                      |                 means that all members in that group can view this calendar and all the events/tasks of this calendar.     |                                                                                                                           |
|                             |                                                                      |               ``                                                                                                           |                                                                                                                           |
+-----------------------------+----------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| **defaultLocale**           | ``Valid locale Id``                                                  | ``BEL (see more locale ids http://userpage.chemie.fu-berlin.de/diverse/doc/ISO_3166.html )``                               | The default locale of the calendar.                                                                                       |
+-----------------------------+----------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| **defaultTimeZone**         | ``Valid timezone Id``                                                | ``Europe/Brussels (see more for timeZone Ids                                                                               | The default time zone of the calendar.                                                                                    |
|                             |                                                                      |                 http://www.unicode.org/cldr/data/docs/design/formatting/zone_log.html#windows_ids)                         |                                                                                                                           |
|                             |                                                                      |               ``                                                                                                           |                                                                                                                           |
+-----------------------------+----------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+
| **ignoredGroups**           | ``Group Id (use line to define multiple value)``                     | ``/spaces/*``                                                                                                              | Definition group to ignore create the default calendar.                                                                   |
+-----------------------------+----------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Calendar.NewMembershipListener:

New Membership Listener
------------------------

To use the plugin in the component configuration, you must use the
target-component:

.. code:: xml

    <target-component>org.exoplatform.services.organization.OrganizationService</target-component>

The configuration can be found
`here <https://github.com/exoplatform/calendar/blob/master/calendar-extension/calendar-extension-webapp/src/main/webapp/WEB-INF/cs-extension/cs/calendar/calendar-service-configuration.xml>`__.

.. code:: xml

    <component-plugin>
      <name>calendar.new.membership.event.listener</name>
      <set-method>addListenerPlugin</set-method>
      <type>org.exoplatform.calendar.service.impl.NewMembershipListener</type>
      <description>description</description>
    </component-plugin>

**Details:**

-  **Name**: ``calendar.new.membership.event.listener`` - The unique key
   to avoid duplicate names. Users can change it.

-  **Type**:
   ``org.exoplatform.calendar.service.impl.NewMembershipListener`` - The
   class which is set up to execute the creation of database.

-  **Description**: It is a plugin used to execute sending reminder
   emails to users.

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Calendar.ReminderPeriodJob:

Reminder Period Job
--------------------

The Calendar application of eXo Platform sends event reminders by using
the email reminder plugin configuration. You will probably need to
adjust this configuration to meet your own needs. The feature is based
on a periodic poll of the stored reminders.

You must use the following target component to use the plugin in this
configuration:

.. code:: xml

    <target-component>org.exoplatform.services.scheduler.JobSchedulerService</target-component>

The configuration can be found
`here <https://github.com/exoplatform/calendar/blob/master/calendar-extension/calendar-extension-webapp/src/main/webapp/WEB-INF/cs-extension/cs/cs-configuration.xml>`__.

.. code:: xml

    <component-plugin>
          <name>RecordsJob</name>
          <set-method>addPeriodJob</set-method>
          <type>org.exoplatform.calendar.service.ReminderPeriodJob</type>
          <description>add e-mail reminder job to the JobSchedulerService</description>
          <init-params>
            <properties-param>
              <name>job.info</name>
              <description>save the monitor data  periodically</description>
              <property name="jobName" value="ReminderJob"/>
              <property name="groupName" value="CollaborationSuite"/>
              <property name="job" value="org.exoplatform.calendar.service.ReminderJob"/>
              <property name="repeatCount" value="0"/>
              <property name="period" value="180000"/>
              <property name="startTime" value="+60000"/>
              <property name="endTime" value=""/>
            </properties-param>
          </init-params>
        </component-plugin>

**Details:**

-  **Name**: ``RecordsJob`` - The name of a schedule job.

-  **Type**: ``org.exoplatform.calendar.service.ReminderPeriodJob`` - A
   class that executes to transfer data into database of Job Scheduler.

-  **Description**: Add email reminder job to the JobSchedulerService.

See details about the init-params of the component in the following
table:

+-------------------+-------------------+----------------------------------------------------+---------------------------------------------+
| Property names    | Possible values   | Default value                                      | Description                                 |
+===================+===================+====================================================+=============================================+
| ``jobName``       | ``String``        | ``ReminderJob``                                    | The name of job                             |
+-------------------+-------------------+----------------------------------------------------+---------------------------------------------+
| ``groupName``     | ``String``        | ``CollaborationSuite``                             | The name of group job.                      |
+-------------------+-------------------+----------------------------------------------------+---------------------------------------------+
| ``job``           | ``Class path``    | ``org.exoplatform.calendar.service.ReminderJob``   | The name of actual job class.               |
+-------------------+-------------------+----------------------------------------------------+---------------------------------------------+
| ``repeatCount``   | ``Long``          | ``0, ( use '0' which means 'run forever'.)``       | How many times to run this job.             |
+-------------------+-------------------+----------------------------------------------------+---------------------------------------------+
| ``period``        | ``Long``          | ``180000``                                         | The time interval between job executions.   |
+-------------------+-------------------+----------------------------------------------------+---------------------------------------------+
| ``startTime``     | ``Integer``       | ``+60000``                                         | The time when the job starts running.       |
+-------------------+-------------------+----------------------------------------------------+---------------------------------------------+
| ``endTime``       | ``Integer``       | ``none``                                           | The time when the job ends running.         |
+-------------------+-------------------+----------------------------------------------------+---------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Calendar.PopupReminderPeriodJob:

Popup Reminder Period Job
---------------------------

You must use the following target component to use the plugin in this
configuration:

.. code:: xml

    <target-component>org.exoplatform.services.scheduler.JobSchedulerService</target-component>

The configuration can be found
`here <https://github.com/exoplatform/calendar/blob/master/calendar-extension/calendar-extension-webapp/src/main/webapp/WEB-INF/cs-extension/cs/cs-configuration.xml>`__.

.. code:: xml

      <component-plugin>
          <name>PopupRecordsJob</name>
          <set-method>addPeriodJob</set-method>
          <type>org.exoplatform.calendar.service.PopupReminderPeriodJob</type>
          <description>add popup reminder job to the JobSchedulerService</description>
          <init-params>
            <properties-param>
              <name>job.info</name>
              <description>save the monitor data  periodically</description>
              <property name="jobName" value="PopupReminderJob"/>
              <property name="groupName" value="CollaborationSuite"/>
              <property name="job" value="org.exoplatform.calendar.service.PopupReminderJob"/>
              <property name="repeatCount" value="0"/>
              <property name="period" value="15000"/>
              <property name="startTime" value="+60000"/>
              <property name="endTime" value=""/>
            </properties-param>
            <properties-param>
              <name>popupreminder.info</name>
              <description>save the monitor data  periodically</description>
              <property name="portalName" value="portal"/>
            </properties-param>
          </init-params>
      </component-plugin>

**Details:**

-  **Name**: ``PopupRecordsJob`` - The name of the job.

-  **Type**: ``org.exoplatform.calendar.service.PopupReminderPeriodJob``
   - The class which executes to transfer the data into database of Job
   Scheduler.

-  **Description**: Adds popup reminder job to the JobSchedulerService.

-  **Properties-param**: ``job.info``. This param saves the monitor data
   periodically and includes the following sub-params:

+-------------------+-------------------+---------------------------------------------------------+-----------------------------------------------------------+
| Property names    | Possible values   | Default value                                           | Description                                               |
+===================+===================+=========================================================+===========================================================+
| ``jobName``       | ``String``        | ``PopupReminderJob``                                    | The name of job.                                          |
+-------------------+-------------------+---------------------------------------------------------+-----------------------------------------------------------+
| ``groupName``     | ``String``        | ``CollaborationSuite``                                  | The name of group job.                                    |
+-------------------+-------------------+---------------------------------------------------------+-----------------------------------------------------------+
| ``job``           | ``Class path``    | ``org.exoplatform.calendar.service.PopupReminderJob``   | The name of actual job class.                             |
+-------------------+-------------------+---------------------------------------------------------+-----------------------------------------------------------+
| ``repeatCount``   | ``Long``          | ``0, ( use '0' which means 'run forever'.)``            | How many times to run this job.                           |
+-------------------+-------------------+---------------------------------------------------------+-----------------------------------------------------------+
| ``period``        | ``Long``          | ``15000``                                               | The time interval (millisecond) between job executions.   |
+-------------------+-------------------+---------------------------------------------------------+-----------------------------------------------------------+
| ``startTime``     | ``Long``          | ``+60000``                                              | The time when the job starts running.                     |
+-------------------+-------------------+---------------------------------------------------------+-----------------------------------------------------------+
| ``endTime``       | ``Integer``       | ``None``                                                | The time when the job ends running.                       |
+-------------------+-------------------+---------------------------------------------------------+-----------------------------------------------------------+
| ``portalName``    | ``String``        | ``portal``                                              | The name of the portal in which displays the pop-ups.     |
+-------------------+-------------------+---------------------------------------------------------+-----------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Calendar.SocialIntegrationConfiguration:

Social Integration Configuration
---------------------------------

The Social Integration Configuration can be found
`here <https://github.com/exoplatform/integration/blob/master/integ-calendar/integ-calendar-social/src/main/resources/conf/portal/configuration.xml>`__.

**CalendarDataInitialize**

.. code:: xml

    <external-component-plugins>
      <target-component>org.exoplatform.social.core.space.spi.SpaceService</target-component>
      <component-plugin>
        <name>CalendarDataInitialize</name>
        <set-method>addSpaceListener</set-method>
        <type>org.exoplatform.cs.ext.impl.CalendarDataInitialize</type>
        <init-params>
          <value-param>
            <name>portletName</name>
            <value>CalendarPortlet</value>
          </value-param>
        </init-params>
      </component-plugin>
    </external-component-plugins>

**Details:**

-  **Name**: ``CalendarDataInitialize`` - The name of plugin.

-  **Type**: ``org.exoplatform.cs.ext.impl.CalendarDataInitialize`` - A
   class that executes all requirements of the plugin.

-  **Description**: It is used to initialize a calendar for a group in a
   specific space.

See the details about the init-params of the component in the following
table:

+-------------------+------------------+-----------------------+----------------------------+
| Value-param       | Possible value   | Default value         | Description                |
+===================+==================+=======================+============================+
| **portletName**   | ``String``       | ``CalendarPortlet``   | The name of the portlet.   |
+-------------------+------------------+-----------------------+----------------------------+

**CalendarSpaceActivityPublisher**

.. code:: xml

    <external-component-plugins>
      <target-component>org.exoplatform.calendar.service.CalendarService</target-component>
      <component-plugin>
        <name>CalendarEventListener</name>
        <set-method>addEventListenerPlugin</set-method>
        <type>org.exoplatform.cs.ext.impl.CalendarSpaceActivityPublisher</type>
      </component-plugin>
    </external-component-plugins>

**Details:**

-  **Name**: ``CalendarEventListener`` - The name of the plugin.

-  **Type**:
   ``org.exoplatform.cs.ext.impl.CalendarSpaceActivityPublisher`` - A
   class that executes all the requirements of the plugin.

-  **Description**: It is a plugin used to customize the activity status
   of a specific space when an event happens on a calendar.

**PortletPreferenceRequiredPlugin**

.. code:: xml

    <external-component-plugins>
      <target-component>org.exoplatform.social.core.space.spi.SpaceService</target-component>
      <component-plugin>
        <name>portlets.prefs.required</name>
        <set-method>setPortletsPrefsRequired</set-method>
        <type>org.exoplatform.social.core.application.PortletPreferenceRequiredPlugin</type>
        <init-params>
          <values-param>
            <name>portletsPrefsRequired</name>
            <value>CalendarPortlet</value>
          </values-param>
        </init-params>
      </component-plugin>
    </external-component-plugins>

**Details:**

-  **Name**: ``ortlets.prefs.required`` - The name of the plugin.

-  **Type**:
   ``org.exoplatform.social.core.application.PortletPreferenceRequiredPlugin``
   - A class that executes all the requires of the plugin.

-  **Description**: It is a plugin used to declare the application that
   will automatically create database.

See the details about the init-params of the component in the following
table:

+-----------------------------+------------------+-----------------------+---------------------------------------------+
| Value-param                 | Possible value   | Default value         | Description                                 |
+=============================+==================+=======================+=============================================+
| **portletsPrefsRequired**   | ``String``       | ``CalendarPortlet``   | The name of plugin added to SpaceService.   |
+-----------------------------+------------------+-----------------------+---------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.InitData:

Init data plugin
~~~~~~~~~~~~~~~~~

The Init data plug-in is used to define the default data in the ``.xml``
file. It includes nodes (node of jcr). When the
``org.exoplatform.services.jcr.config.RepositoryServiceConfiguration``
component is initialized, the
``org.exoplatform.services.jcr.impl.config.RepositoryServiceConfigurationPlugin``
component will be get and the ``addConfig`` function is called. Then,
the ``/ks-extension/jcr/storage-configuration.xml`` file is loaded and
the component **org.exoplatform.forum.common.jcr.KSDataLocation** will
be initialized. Next, the ``setLocation`` function is called, setting up
the workspace for the Forum, Answers and Polls applications. After that,
the ``addPlugin`` function will be run, generating the DataLocation
(some parent nodes) for the Forum, Answers and Polls applications.

The following is the list of applications and the corresponding
components used to initialize the default data.

+---------------+----------------------------------------+----------------------------------------------------+
| Application   | Component                              | Description                                        |
+===============+========================================+====================================================+
| **Forum**     | ``KSDataLocation, ForumServiceImpl``   | Initializes default data of the Forum portlet.     |
+---------------+----------------------------------------+----------------------------------------------------+
| **Answers**   | ``KSDataLocation, FAQServiceImpl``     | Initializes default data of the Answers portlet.   |
+---------------+----------------------------------------+----------------------------------------------------+
| **Polls**     | ``KSDataLocation, PollServiceImpl``    | Initializes default data of the Polls portlet.     |
+---------------+----------------------------------------+----------------------------------------------------+

In this section, you will understand how to initialize data via the
sample configurations later.

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.InitData.InitializingConf-partForLoading_repository-configuration.xml:

Initializing the conf-part for loading repository-configuration.xml
---------------------------------------------------------------------

When the server starts, the ``jcr-configuration.xml`` file is
initialized. The ``addConfig`` function will be referred to the
``org.exoplatform.services.jcr.impl.config.RepositoryServiceConfigurationPlugin``
component-plugin to load the
``war:/ks-extension/jcr/repository-configuration.xml`` file.

.. code:: xml

    <component-plugin>
      <!-- The name of the plugin -->
      <name>Sample RepositoryServiceConfiguration Plugin</name>
      <!-- The name of the method to call on the RepositoryServiceConfiguration
           in order to add the RepositoryServiceConfigurations -->
      <set-method>addConfig</set-method>
      <!-- The full qualified name of the RepositoryServiceConfigurationPlugin -->
      <type>org.exoplatform.services.jcr.impl.config.RepositoryServiceConfigurationPlugin</type>
      <init-params>
        <value-param>
          <name>conf-path</name>
          <description>JCR configuration file</description>
          <value>war:/ks-extension/jcr/repository-configuration.xml</value>
        </value-param>
      </init-params>
    </component-plugin>

-  In which:

+---------------------------------------------+--------------+---------------------------------------------------------------------------------------+-----------------------------------------------------------+
| Name                                        | Set-method   | Type                                                                                  | Description                                               |
+=============================================+==============+=======================================================================================+===========================================================+
| **RepositoryService ConfigurationPlugin**   | addConfig    | ``org.exoplatform.services. jcr.impl.config.Repository ServiceConfigurationPlugin``   | Reads the configuration of JCR data to initialize data.   |
+---------------------------------------------+--------------+---------------------------------------------------------------------------------------+-----------------------------------------------------------+

-  Init-params

+-----------------+------------------+----------------------------------------------------------+----------------------------------------------------------+
| Name            | Possible value   | Default value                                            | Description                                              |
+=================+==================+==========================================================+==========================================================+
| **conf-path**   | ``string``       | ``war:/ks-extension/jcr/repository-configuration.xml``   | The path to the ``repository-configuration.xml`` file.   |
+-----------------+------------------+----------------------------------------------------------+----------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.InitData.InitializingWorkspaceNameRepositoryName:

Initializing workspace name and repository name in storage-configuration.xml
------------------------------------------------------------------------------

In details:

Once the ``war:/ks-extension/jcr/repository-configuration.xml`` file has
been initialized, the server will load the ``storage-configuration.xml``
file, and the ``setLocation`` function in the
``org.exoplatform.forum.common.conf.DataLocationPlugin`` component will
run.

.. code:: xml

    <external-component-plugins>
      <target-component>org.exoplatform.forum.common.jcr.KSDataLocation</target-component>
      <component-plugin>
        <name>ks.data.location</name>
        <set-method>setLocation</set-method>
        <type>org.exoplatform.forum.common.conf.DataLocationPlugin</type>
        <init-params>
          <value-param>
            <name>repository</name>
            <description>JCR repository for KS data</description>
            <value>repository</value>
          </value-param>
          <value-param>
            <name>workspace</name>
            <description>workspace for KS data</description>
            <value>knowledge</value>
          </value-param>
        </init-params>
      </component-plugin>
    </external-component-plugins>

In which,

+------------------+------------------+------------------+-----------------------------------+
| Value-param      | Possible value   | Default value    | Description                       |
+==================+==================+==================+===================================+
| **repository**   | ``string``       | ``repository``   | The JCR repository for KS data.   |
+------------------+------------------+------------------+-----------------------------------+
| **workspace**    | ``string``       | ``knowledge``    | The workspace for KS data.        |
+------------------+------------------+------------------+-----------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.InitData.InitializingJCRStructure:

Initializing JCR structure
---------------------------

Once the workspace name and repository name are registered, the server
will load
``org.exoplatform.services.jcr.ext.hierarchy.NodeHierarchyCreator`` and
the ``addPaths`` function in
``org.exoplatform.services.jcr.ext.hierarchy.impl.AddPathPlugin`` is
called. Then, the data location will be built.

.. code:: xml

    <component-plugin>
      <name>addPaths</name>
      <set-method>addPlugin</set-method>
      <type>org.exoplatform.services.jcr.ext.hierarchy.impl.AddPathPlugin</type>
      <init-params>
        <object-param>
          <name>ks.storage</name>
          <description>ks data storage tree</description>
          <object type="org.exoplatform.services.jcr.ext.hierarchy.impl.HierarchyConfig">
            <field name="repository">
              <string>repository</string>
            </field>
            <field name="workspaces">
              <collection type="java.util.ArrayList">
                <value>
                  <string>knowledge</string>
                </value>
              </collection>
            </field>
            <field name="jcrPaths">
              <collection type="java.util.ArrayList">
                <value>
                  <object type="org.exoplatform.services.jcr.ext.hierarchy.impl.HierarchyConfig$JcrPath">
                    <field name="alias">
                      <string>eXoApplications</string>
                    </field>
                    <field name="path">
                      <string>/exo:applications</string>
                    </field>
                    <field name="permissions">
                      <collection type="java.util.ArrayList">
                        <value>
                          <object type="org.exoplatform.services.jcr.ext.hierarchy.impl.HierarchyConfig$Permission">
                            <field name="identity">
                              <string>*:/platform/administrators</string>
                            </field>
                            <field name="read">
                              <string>true</string>
                            </field>
                            <field name="addNode">
                              <string>true</string>
                            </field>
                            <field name="setProperty">
                              <string>true</string>
                            </field>
                            <field name="remove">
                              <string>true</string>
                            </field>
                          </object>
                        </value>
                      </collection>
                    </field>
                  </object>
                </value>
                <value>
                ...
                </value>
              </collection>
            </field>
          </object>
        </object-param>
      </init-params>
    </component-plugin>

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.Roles:

Roles plugin
~~~~~~~~~~~~~

The roles plug-in component defines roles in Forum of eXo Platform. This
convenient application defines access to a set of functions within the
application. Currently, it only defines the person who has the
**administrator** role. Administrators can get access to administration
functions. At runtime, the application gets data from the roles plug-in
to decide whether the logged user has the administrative role or not.

**Configuration**

The plug-in is configured in the ``roles-configuration.xml`` file.

When the user signs in, his or her username, group and membership will
be compared with the user roles defined in the ``.xml`` file that is
provided by the roles plug-in component.

In particular, at runtime of ForumService, the roles plug-in component
is called. The role plug-in is configured in the
``roles-configuration.xml`` file. The plug-in component named
``add.role.rules.plugin`` will be referred to
``org.exoplatform.ks.common.conf.RoleRulesPlugin`` to create users for
Forum corresponding to users who exist in the organization database. In
addition, the list of users who have the **administration** role are
also defined.

.. code:: xml

    <component-plugin>
      <name>add.role.rules.plugin</name>
      <set-method>addRolePlugin</set-method>
      <type>org.exoplatform.forum.common.conf.RoleRulesPlugin</type>
      <description>add role rules</description>
      <init-params>
        <value-param>
          <name>role</name>
          <description>name of the role</description>
          <value>ADMIN</value>
        </value-param>
        <values-param>
          <name>rules</name>
          <description>rules of the role</description>
          <value>root</value>
          <!-- value>admin</value-->
          <!--value>member:/demo</value-->
          <!--value>/platform/administrators</value-->
          <!--value>manager:/platform/users</value-->
          <!--value>*:/somegroup/somesubgroup</value-->
          <!--value>manager:/somegroup/someothergroup</value-->
        </values-param>
      </init-params>
    </component-plugin>

In which:

+-----------------------------+---------------------+------------------------------------------------------+--------------------+
| Name                        | Set-method          | Type                                                 | Description        |
+=============================+=====================+======================================================+====================+
| **add.role.rules.plugin**   | **addRolePlugin**   | ``org.exoplatform.ks.common.conf.RoleRulesPlugin``   | Adds role rules.   |
+-----------------------------+---------------------+------------------------------------------------------+--------------------+

-  Init-params:

+-------------+------------------+-----------------+----------------------+
| Name        | Possible value   | Default value   | Description          |
+=============+==================+=================+======================+
| **role**    | ``string``       | ``ADMIN``       | The name of role.    |
+-------------+------------------+-----------------+----------------------+
| **rules**   | ``string``       | ``root``        | The rules of role.   |
+-------------+------------------+-----------------+----------------------+

-  When the ``role-configuration.xml`` file is executed, the
   administration role (with ``ADMIN`` value) will be checked and
   assigned to a matrix of ``users/groups/memberships`` defined inside
   the "``value``" tags as below:

.. code:: xml

    <value>...</value>

For example:

.. code:: xml

    ...
    <value>root</value>
    <value>john</value>
    <value>/platform/administrators</value>
    <value>member:/VIP</value>
    <value>validator:/VIP</value>
    ...

In the example above, the default administrators of Forum include
*root*, *john*, users in */platform/administrators* group and users who
have *member/validator* memberships in the VIP group.

When being *root*, the users who belong to the
*/platform/administrators* group or who have the *member/validator*
memberships in the VIP group and sign in the Forum, they will be
identified as the default administrator of Forum.

To add or remove the default administrator of the Forum, simply edit the
``roles-configuration.xml`` file, add or remove the relevant "``value``"
tags.

.. code:: xml

    ...
    <values-param>
      ...
      <value>...</value>
      ...
    </values-param>
    ...

The default administrators of the Forum can only change their roles by
editing in the ``roles-configuration.xml`` file.

At runtime, modifications in the ``roles-configuration.xml`` file will
be read and database will be updated. Normal users of the Forum and
default administration will be created correspondingly.

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.ForumPlugins:

Forum plugins
~~~~~~~~~~~~~~

This section describes the main component plugins used in Forum, sample
configurations with explanation about init-params and how to use these
plugins.

-  :ref:`BBCode <PLFRefGuide.Configurations.ExternalComponentPlugins.ForumPlugins.BBCodeConfiguration>`

-  :ref:`Auto-prune <PLFRefGuide.Configurations.ExternalComponentPlugins.ForumPlugins.Auto-prune>`

-  :ref:`Forum Group Listener <PLFRefGuide.Configurations.ExternalComponentPlugins.ForumPlugins.ForumGroupListener>`

-  :ref:`Forum User Listener <PLFRefGuide.Configurations.ExternalComponentPlugins.ForumPlugins.ForumUserListener>`

-  :ref:`User Statistics <PLFRefGuide.Configurations.ExternalComponentPlugins.ForumPlugins.UserStatistics>`

-  :ref:`Update Statistic Data <PLFRefGuide.Configurations.ExternalComponentPlugins.ForumPlugins.StatisticData>`

-  :ref:`Default User Profile <PLFRefGuide.Configurations.ExternalComponentPlugins.ForumPlugins.DefaultUserProfile>`

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.ForumPlugins.BBCodeConfiguration:

BBCode
------

The BBCode plug-in component defines default BBCode data in the ``.xml``
file, including BBCode tags, for example, I, B, U, SIZE, COLOR.

When the BBCode Service runs, it will get values returned from the
BBCode plug-in component to initialize default BBCode data.

**Configuration of default BBCode data**

The default BBCode data is configured in the
``bbcodes-configuration.xml`` file.

In particular, at runtime of BBCode Service, the BBCode plug-in
component is called. Then, the ``bbcodes-configuration.xml`` file will
be executed, and the component-plugin named ``registerBBCodePlugin``
will be referred to ``org.exoplatform.ks.bbcode.spi.BBCodePlugin`` to
execute some objects that will generate default data.

.. code:: xml

    <component-plugin>
      <name>forum.default.bbcodes</name>
      <set-method>registerBBCodePlugin</set-method>
      <type>org.exoplatform.forum.bbcode.spi.BBCodePlugin</type>
      <description>default supported BBCodes</description>
      <init-params>
        <object-param>
          <name>I</name>
          <description>set text in italic</description>
          <object type="org.exoplatform.forum.bbcode.spi.BBCodeData">
            <field name="tagName">
              <string>I</string>
            </field>
            <field name="replacement">
              <string>&lt;i&gt;{param}&lt;/i&gt;</string>
            </field>
            <field name="description">
              <string>Set text in italic</string>
            </field>
            <field name="example">
              <string>[I]This text is italic[/I]</string>
            </field>
            <field name="isOption">
              <string>false</string>
            </field>
            <field name="isActive">
              <string>true</string>
            </field>
          </object>
        </object-param>

        <object-param>
          <name>B</name>
          <description></description>
          <object type="org.exoplatform.forum.bbcode.spi.BBCodeData">
            <field name="tagName">
              <string>B</string>
            </field>
            <field name="replacement">
              <string>&lt;strong&gt;{param}&lt;/strong&gt;</string>
            </field>
            <field name="description">
              <string>Set text in bold</string>
            </field>
            <field name="example">
              <string>[B]This text is bold[/B]</string>
            </field>
            <field name="isOption">
              <string>false</string>
            </field>
            <field name="isActive">
              <string>true</string>
            </field>
          </object>
        </object-param>

        <object-param>
          ...

        </object-param>
      </init-params>
    </component-plugin>

-  In which,

+-----------------------------+----------------------------+--------------------------------------------------+---------------------------------------------+
| Name                        | Set method                 | Type                                             | Description                                 |
+=============================+============================+==================================================+=============================================+
| **forum.default.bbcodes**   | ``registerBBCodePlugin``   | ``org.exoplatform.ks.bbcode.spi.BBCodePlugin``   | Defines formats for data displayed on UI.   |
+-----------------------------+----------------------------+--------------------------------------------------+---------------------------------------------+

-  The BBCode array is defined by the
   ``org.exoplatform.forum.bbcode.spi.BBCodeData`` object as below:

.. code:: xml

    <object type="org.exoplatform.forum.bbcode.spi.BBCodeData">
      <field name="tagName">
        <string>I</string>
      </field>
      <field name="replacement">
        <string>&lt;i&gt;{param}&lt;/i&gt;</string>
      </field>
      <field name="description">
        <string>Set text in italic</string>
      </field>
      <field name="example">
        <string>[I]This text is italic[/I]</string>
      </field>
      <field name="isOption">
        <string>false</string>
      </field>
      <field name="isActive">
        <string>true</string>
      </field>
    </object> 

-  The BBCode includes basic data which are defined in the field tag
   with a specific name as below:

.. code:: xml

    <field name="tagName">
      <string>I</string>
    </field>
    <field name="replacement">
      <string>&lt;i&gt;{param}&lt;/i&gt;</string>
    </field>
    <field name="description">
      <string>Set text in italic</string>
    </field>
    <field name="example">
      <string>[I]This text is italic[/I]</string>
    </field>
    <field name="isOption">
      <string>false</string>
    </field>
    <field name="isActive">
      <string>true</string>
    </field>

In which:

+-------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field name        | Value                 | Description                                                                                                                                                                                                                                                                         |
+===================+=======================+=====================================================================================================================================================================================================================================================================================+
| **tagName**       | ``string``            | The text for the BBCode, which is put between two square brackets ([ ]). For example, for the bold tag, if you type ``[b]``, the BBCode tag will be **b** without any square brackets ([ ]).                                                                                        |
+-------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **replacement**   | ``string``            | The HTML code that replaces the BBCode entered by the user. Make sure that you include ``{param}`` to insert the text between opening and closing BBCode tags, and ``{option}`` for the parameter within the BBCode tag. You can only use ``option`` if 'Use Option' is selected.   |
+-------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **description**   | ``string``            | The piece of text to describe the BBCode tag, including HTML tags if you want.                                                                                                                                                                                                      |
+-------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **example**       | ``string``            | The sample piece of BBCode to use as an example for the particular BBCode. For example, to demonstrate the usage of the ``[b]`` tag, enter ``[b]text[/b]``.                                                                                                                         |
+-------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **isOption**      | ``true``, ``false``   | Selects the ``[tag=option] [/tag]`` style tag, rather than just a ``[tag][/tag]`` style tag. This function will be created if you select this option.                                                                                                                               |
+-------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **isActive**      | ``true``, ``false``   | Activates the BBCode tag.                                                                                                                                                                                                                                                           |
+-------------------+-----------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.ForumPlugins.Auto-prune:

Auto-prune
-----------

The Auto-prune component is to prune inactive topics which have not been
viewed, edited or received for a given period. The "prune" operation
does not denote to the physical removal of topics, but sets them to
invisible. The function helps you not clutter busy forums from outdated
information.

When the Job Scheduler runs, it will get values returned from the
Auto-prune plug-in component to identify topics which have to be
inactivated in the Forum application. These topics will be invisible to
users.

**Configuration**

The properties of Auto-prune plug-in are configured in the
``war:/ks-extension/ks/forum/prune-configuration.xml`` file.

In particular, at runtime of Job Scheduler, the Auto-prune plugin
component is called. Then, the ``prune-configuration.xml`` file will be
executed. The component-plugin named ``ForumDeactiveJob`` will refer to
``org.exoplatform.forum.service.conf.DeactivePeriodJob`` to inactivate
topics in Forum which meets predefined inactivation properties.

.. code:: xml

    <component-plugin>
      <name>ForumDeactiveJob</name>
      <set-method>addPeriodJob</set-method>
      <type>org.exoplatform.forum.service.conf.DeactivePeriodJob</type>
      <description>add a Deactive job to the JobSchedulerService</description>
      <init-params>
        <properties-param>
          <name>job.info</name>
          <description>save the monitor data periodically</description>
          <property name="jobName" value="DeactiveJob"/>
          <property name="groupName" value="KnowlegedSuite"/>
          <property name="job" value="org.exoplatform.forum.service.conf.DeactiveJob"/>
          <property name="repeatCount" value="0"/>
          <property name="period" value="7200000"/> <!-- 2 hours-->
          <property name="startTime" value="+1296000000"/>
          <property name="endTime" value=""/>
        </properties-param>
        <properties-param>
          <name>deactive.info</name>
          <description></description>
          <property name="inactiveDays" value="15"/>
          <property name="forumName" value="Live demo"/>
        </properties-param>
      </init-params>
    </component-plugin>

-  In which,

+------------------------+--------------------+-------------------------------------------------------------+--------------------------------------------------+
| Name                   | Set-method         | Type                                                        | Description                                      |
+========================+====================+=============================================================+==================================================+
| **ForumDeactiveJob**   | ``addPeriodJob``   | ``org.exoplatform.forum. service.conf.DeactivePeriodJob``   | Adds a DeactiveJob to the JobSchedulerService.   |
+------------------------+--------------------+-------------------------------------------------------------+--------------------------------------------------+

-  The properties for the Auto-prune plug-in are defined in the
   **property** tag with the format as below:

.. code:: xml

    ...
    <property name="jobName" value="DeactiveJob"/>
    <property name="groupName" value="KnowlegedSuite"/>
    <property name="job" value="org.exoplatform.forum.service.conf.DeactiveJob"/>
    <property name="repeatCount" value="0"/>
    <property name="period" value="7200000"/> <!-- 2 hours-->
    <property name="startTime" value="+1296000000"/>
    <property name="endTime" value=""/>
    ...
    <property name="inactiveDays" value="15"/>
    <property name="forumName" value="Live demo"/>
    ...

In details:

+-------------------+------------------+------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Property name     | Possible value   | Default value                                        | Description                                                                                                                                                                                                                                                                                 |
+===================+==================+======================================================+=============================================================================================================================================================================================================================================================================================+
| **jobname**       | ``String``       | ``DeactiveJob``                                      | The name of job which will be executed.                                                                                                                                                                                                                                                     |
+-------------------+------------------+------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **groupname**     | ``String``       | ``KnowlegedSuite``                                   | The name of application which will be executed.                                                                                                                                                                                                                                             |
+-------------------+------------------+------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **job**           | ``Class path``   | ``org.exoplatform.forum.service.conf.DeactiveJob``   | The reference function of the job which will be executed.                                                                                                                                                                                                                                   |
+-------------------+------------------+------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **repeatCount**   | ``Long``         | ``0``                                                | The repeating time for the job, meaning that how many times the job will be executed. The **0** value means that ``DecactiveJob`` is called at runtime only without repeating. If the value is set to **2** or **3**, ``DecactiveJob`` will be called two or three times correspondingly.   |
+-------------------+------------------+------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **period**        | ``Long``         | ``72000000``                                         | The interval between job executions.                                                                                                                                                                                                                                                        |
+-------------------+------------------+------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **starttime**     | ``Integer``      | ``+1296000000``                                      | The start time when the function executes.                                                                                                                                                                                                                                                  |
+-------------------+------------------+------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **endtime**       | ``Integer``      | ``null``                                             | The end time when the function stops executing. The ``endtime`` is blank, meaning that there is no limitation for the end time for ``                                                                                                                                                       |
|                   |                  |                                                      |                 DecactiveJob``.                                                                                                                                                                                                                                                             |
+-------------------+------------------+------------------------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

With start and end time, you can give a specific date in the format:
yyyy-mm-dd HH:mm:ss.sss to define the start and end time for
``DecactiveJob``. Besides, inactive information is also defined:

+--------------------+------------------+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Property name      | Possible value   | Default value   | Description                                                                                                                                                                                                                                              |
+====================+==================+=================+==========================================================================================================================================================================================================================================================+
| **inactiveDays**   | ``Integer``      | ``15``          | The number of days the topic has not been activated. The ``inactivateDays`` is set to **1**, meaning that all the topics, which have one inactivated day, will be set as inactivated status. They will be invisible.                                     |
+--------------------+------------------+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **forumname**      | ``String``       | ``Live Demo``   | The name of Forum which will be checked for Auto-prune. In case the value of ``forumname`` is blank, all forums will be checked for the Auto-prune. If the ``forumname`` is Live demo, only the Forum named 'Live demo' is checked for the Auto-prune.   |
+--------------------+------------------+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

By default, the default properties can only be changed by editing its
value in the ``prune-configuration.xml`` file.

At runtime, the new changes in the ``prune-configuration.xml`` file are
executed and updated. After that, the Auto-prune plug-in will be
executed, depending on its properties.

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.ForumPlugins.ForumGroupListener:

Forum Group Listener
----------------------

This plugin is used to remove space forums and user groups stored in
categories/forums/topics.

You can find the configuration file of this component at: ``
    extension/webapp/src/main/webapp/WEB-INF/ks-extension/ks/ks-configuration.xml``.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.organization.OrganizationService</target-component>

**Sample Configuration**

.. code:: xml

    <component-plugin>
      <name>forum.group.event.listener</name>
      <set-method>addListenerPlugin</set-method>
      <type>org.exoplatform.forum.service.conf.ForumGroupListener</type>
      <description>Remove the forums in spaces and remove user groups stored in categories/forums/topics.</description>
    </component-plugin>

-  **Name**: ``forum.group.event.listener``

-  **Type**: ``org.exoplatform.forum.service.conf.ForumGroupListener``

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.ForumPlugins.UserStatistics:

User Statistics
----------------

The Auto-count Active Users component is to calculate the number of
active users automatically. A user is considered as the active user only
when he/she adds a topic/post in the Forum and his/her last post date
matches the predefined interval time.

For example, if one user does not have any new posts after 15 days,
he/she is not considered as an active user.

When the Job Scheduler runs, it will get values returned from the
Auto-count Active Users plug-in component to identify the number of
active users. This value is updated to Active Members information when
the user views Forum statistics.

**Configuration**

The properties of Auto-count Active Users plug-in is configured in the
``war:/ks-extension/ks/forum/statistics-configuration.xml`` file.

In details, at runtime of Job Scheduler, the Auto-count Active Users
plug-in component is called. Then, the ``statistics-configuration.xml``
file is executed. The component-plugin named ``RecountActiveUserJob``
will refer to
``org.exoplatform.forum.service.conf.RecountActiveUserPeriodJob`` to
calculate the number of active users.

.. code:: xml

    <component-plugin>
      <name>RecountActiveUserJob</name>
      <set-method>addPeriodJob</set-method>
      <type>org.exoplatform.forum.service.conf.RecountActiveUserPeriodJob</type>
      <description>add a RecountActiveUser job to the JobSchedulerService</description>
      <init-params>
        <properties-param>
          <name>job.info</name>
          <description>save the monitor data periodically</description>
          <property name="jobName" value="RecountActiveUserJob"/>
          <property name="groupName" value="KnowlegedSuite"/>
          <property name="job" value="org.exoplatform.forum.service.conf.RecountActiveUserJob"/>
          <property name="repeatCount" value="0"/>
          <property name="period" value="7200000"/> <!-- 2 hours-->
          <property name="startTime" value="+0"/>
          <property name="endTime" value=""/>
        </properties-param>
        <properties-param>
          <name>RecountActiveUser.info</name>
          <description/>
          <property name="lastPost" value="15"/> <!-- users are active if have last posts in 15 day -->
        </properties-param>
      </init-params>
    </component-plugin>

-  In which,

+----------------------------+--------------------+-----------------------------------------------------------------------+--------------------------------------------------------------------+
| Name                       | Method             | Type                                                                  | Description                                                        |
+============================+====================+=======================================================================+====================================================================+
| **RecountActiveUserJob**   | **addPeriodJob**   | ``org.exoplatform.forum. service.conf. RecountActiveUserPeriodJob``   | Adds a ``RecountActiveUser`` job to the ``JobSchedulerService``.   |
+----------------------------+--------------------+-----------------------------------------------------------------------+--------------------------------------------------------------------+

-  The properties for Auto-count Active Members plug-in are defined in
   the property tag as below:

.. code:: xml

    ...
    <property name="jobName" value="RecountActiveUserJob"/>
    <property name="groupName" value="KnowlegedSuite"/>
    <property name="job" value="org.exoplatform.forum.service.conf.RecountActiveUserJob"/>
    <property name="repeatCount" value="0"/>
    <property name="period" value="7200000"/>
    <property name="startTime" value="+0"/>
    <property name="endTime" value=""/>
    ...
    <property name="lastPost" value="15"/>
    ...

In which:

+-------------------+------------------+---------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Property name     | Possible value   | Default value                                                 | Description                                                                                                                                                                                                                                              |
+===================+==================+===============================================================+==========================================================================================================================================================================================================================================================+
| **jobname**       | ``String``       | ``RecountActiveUserJob``                                      | The name of job which will be executed.                                                                                                                                                                                                                  |
+-------------------+------------------+---------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **groupname**     | ``String``       | ``KnowlegedSuite``                                            | The name of application which will be executed.                                                                                                                                                                                                          |
+-------------------+------------------+---------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **job**           | ``Class path``   | ``org.exoplatform.forum.service.conf.RecountActiveUserJob``   | The reference function of job which will be executed.                                                                                                                                                                                                    |
+-------------------+------------------+---------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **repeatCount**   | ``Long``         | 0                                                             | The number of times the job is repeated. If ``repeatCount`` is set to **0**, ``RecountActiveUserJob`` is called at runtime only without repeating. If the number is set to **2** or **3**, ``RecountActiveUserJob`` will be called two or three times.   |
+-------------------+------------------+---------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **period**        | ``Long``         | 7200000 (millisecond) (equal to two hours)                    | The interval time to execute the job.                                                                                                                                                                                                                    |
+-------------------+------------------+---------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **starttime**     | ``Integer``      | 0                                                             | The start time when the function executes. The ``starttime`` is 0, meaning that the time to start executing ``RecountActiveUserJob`` is the runtime.                                                                                                     |
+-------------------+------------------+---------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **endtime**       | ``Integer``      | null                                                          | The end time when the function stops executing. The ``endtime`` is blank, meaning that there is no limitation for the end time for ``                                                                                                                    |
|                   |                  |                                                               |                 RecountActiveUserJob``.                                                                                                                                                                                                                  |
+-------------------+------------------+---------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

With start and end time, you can give a specific date in the format:
yyyy-mm-dd HH:mm:ss.sss to define the start and end time for
``RecountActiveUserJob``. The information of active time is also
defined:

+-----------------+------------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Property name   | Possible value   | Default value   | Description                                                                                                                                                                                     |
+=================+==================+=================+=================================================================================================================================================================================================+
| **lastPost**    | ``Integer``      | 15              | The number of days that the user has added the last post. ``lastPost`` is 15, meaning that all users, who have any new posts within 15 days as from their last post date, are active members.   |
+-----------------+------------------+-----------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

By default, the default properties can only be changed by editing its
values in the ``statistics-configuration.xml`` file.

At runtime, the new changes in the ``statistics-configuration.xml`` file
will be executed and updated. The Auto-count Active Users plug-in will
be executed, depending on its properties.

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.ForumPlugins.StatisticData:

Update Statistic Data
----------------------

The ``UpdateDataJob`` is used when there are abnormal changes in Forum
data (such as migration). By default, ``UpdateDataJob`` is disabled at
the server start up. When ``UpdateDataJob`` is running, it will
calculate the statistic data in Forum to make sure that the statistic
data are correct.

**Configuration**

The properties of Forum's UpdateDataJob is configured in
``/WEB-INF/ks-extension/ks/forum/statistics-configuration.xml`` which is
located in the ``ks-extension`` webapp.

.. code:: xml

    <component-plugin>
      <name>UpdateDataJob</name>
      <set-method>addPeriodJob</set-method>
      <type>org.exoplatform.services.scheduler.PeriodJob</type>
      <description>update topic count and post count to forum service</description>
      <init-params>
        <properties-param>
          <name>job.info</name>
          <description>save the monitor data  periodically</description>
          <property name="jobName" value="UpdateDataJob"/>
          <property name="groupName" value="KnowledgeSuite-forum"/>
          <property name="job" value="org.exoplatform.forum.service.conf.UpdateDataJob"/>
          <property name="repeatCount" value="1"/>
          <property name="period" value="30000"/>
          <property name="startTime" value="+0"/>
          <property name="endTime" value=""/>
        </properties-param>
      </init-params>
    </component-plugin>

In which:

+---------------------+--------------------+----------------------------------------------------+-------------------------------------------------------------+
| Name                | Method             | Type                                               | Description                                                 |
+=====================+====================+====================================================+=============================================================+
| **UpdateDataJob**   | **addPeriodJob**   | ``org.exoplatform.services.scheduler.PeriodJob``   | Adds an ``UpdateDataJob`` to the ``JobSchedulerService``.   |
+---------------------+--------------------+----------------------------------------------------+-------------------------------------------------------------+

-  The properties for Auto-count Active Members plugin are defined in
   the property tag as below:

.. code:: xml

    <property name="jobName" value="UpdateDataJob"/>
    <property name="groupName" value="KnowledgeSuite-forum"/>
    <property name="job" value="org.exoplatform.forum.service.conf.UpdateDataJob"/>
    <property name="repeatCount" value="1"/>
    <property name="period" value="30000"/>
    <property name="startTime" value="+0"/>
    <property name="endTime" value=""/>

+-------------------+------------------+--------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Property name     | Possible value   | Default value                                          | Description                                                                                                                                                                                                                                              |
+===================+==================+========================================================+==========================================================================================================================================================================================================================================================+
| **jobname**       | ``String``       | ``UpdateDataJob``                                      | The name of job which will be executed.                                                                                                                                                                                                                  |
+-------------------+------------------+--------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **groupname**     | ``String``       | ``KnowledgeSuite-forum``                               | The name of application which will be executed.                                                                                                                                                                                                          |
+-------------------+------------------+--------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **job**           | ``Class path``   | ``org.exoplatform.forum.service.conf.UpdateDataJob``   | The reference function of job which will be executed.                                                                                                                                                                                                    |
+-------------------+------------------+--------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **repeatCount**   | ``Long``         | 1                                                      | The number of times the job is repeated. If ``repeatCount`` is set to **1**, ``RecountActiveUserJob`` is called at runtime only without repeating. If the number is set to **2** or **3**, ``RecountActiveUserJob`` will be called two or three times.   |
+-------------------+------------------+--------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **period**        | ``Long``         | 30000 (millisecond) (equal to two hours)               | The interval time to execute the job.                                                                                                                                                                                                                    |
+-------------------+------------------+--------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **starttime**     | ``Integer``      | 0                                                      | The start time when the function executes. The ``starttime`` is 0, meaning that the time to start executing ``RecountActiveUserJob`` is the runtime.                                                                                                     |
+-------------------+------------------+--------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **endtime**       | ``Integer``      | null                                                   | The end time when the function stops executing. The ``endtime`` is blank, meaning that there is no limitation for the end time for ``                                                                                                                    |
|                   |                  |                                                        |                 UpdateDataJob``.                                                                                                                                                                                                                         |
+-------------------+------------------+--------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

With start and end time, you can give a specific date in the
``yyyy-mm-dd HH:mm:ss.sss`` format to define the start and end time for
``UpdateDataJob``.

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.ForumPlugins.DefaultUserProfile:

Default User Profile
----------------------

The default Forum settings are a set of settings for a new account. It
contains declarations of time zone, short date format, long date format,
time format, maximum topics per page, maximum posts per page and flag
for showing forum jump or not. The settings are simple, and users can
change such settings to UI-based functions later.

**Configuration**

This configuration is declared in the file named
``ks-configuration.xml``. Its path is
``[tomcat source]/webapps/ks-extension/WEB-INF/ks-extension/ks/ks-configuration.xml
    `` if you are running the tomcat and
``[project source]/extension/webapp/src/main/webapp/WEB-INF/ks-extension/ks/ks-configuration.xml``
if you are in the development phrase.

.. code:: xml

    ...
    <external-component-plugins>
      <target-component>org.exoplatform.services.organization.OrganizationService</target-component>
      <component-plugin>
        ...
        <init-params>
          <properties-param>
            <name>user.profile.setting</name>
            <description>set default user profile</description>
            <property name="timeZone" value="GMT"/>
            <property name="shortDateFormat" value="MM/dd/yyyy"/>
            <property name="longDateFormat" value="DDD,MMM dd,yyyy"/>
            <property name="timeFormat" value="hh:mm a"/>
            <property name="maxTopic" value="10"/>
            <property name="maxPost" value="10"/>
          </properties-param>
        </init-params>

      </component-plugin>
    </external-component-plugins>
    ...

In which:

+-----------------------+------------------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter             | Possible value               | Default value         | Description                                                                                                                                                                             |
+=======================+==============================+=======================+=========================================================================================================================================================================================+
| **timeZone**          | ``Time zone id``             | ``GMT``               | The time zone set by user. For example: GMT, GMT-05:00, GMT+07:00, GMT+08:30 ... Visit the website: http://java.sun.com/j2se/1.4.2/docs/api/java/util/TimeZone.html for more details.   |
+-----------------------+------------------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **shortDateFormat**   | ``Valid Java Date format``   | ``MM/dd/yyyy``        | The format to display short information of date. Visit the website: http://java.sun.com/j2se/1.4.2/docs/api/java/text/SimpleDateFormat.html to ensure the exact format.                 |
+-----------------------+------------------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **longDateFormat**    | ``Valid Java Date format``   | ``DDD,MMM dd,yyyy``   | The format to display a date with more information. Visit the website http://java.sun.com/j2se/1.4.2/docs/api/java/text/SimpleDateFormat.html to ensure the exact format.               |
+-----------------------+------------------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **timeFormat**        | ``valid Java Date format``   | ``hh:mm a``           | The format to view time (for example, hour, minute,). Visit the website: http://java.sun.com/j2se/1.4.2/docs/api/java/text/SimpleDateFormat.html to ensure the exact format.            |
+-----------------------+------------------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **maxTopic**          | ``Integer``                  | 10                    | The maximum number of topics per page.                                                                                                                                                  |
+-----------------------+------------------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **maxPost**           | ``Integer``                  | 10                    | The maximum number of posts per page.                                                                                                                                                   |
+-----------------------+------------------------------+-----------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.FAQPlugins:

FAQ plugins
~~~~~~~~~~~~

This section describes the main component plugins used to configure the
FAQ application of eXo Platform, including:

-  :ref:`FAQ preference template updater <PLFRefGuide.Configurations.ExternalComponentPlugins.AnswerPlugins.FAQPreferenceTemplateUpdaterPlugin>`

-  :ref:`FAQ user listener <PLFRefGuide.Configurations.ExternalComponentPlugins.AnswerPlugins.FAQUserListener>`

-  :ref:`Template <PLFRefGuide.Configurations.ExternalComponentPlugins.AnswerPlugins.TemplatePlugin>`

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.AnswerPlugins.FAQPreferenceTemplateUpdaterPlugin:

FAQ preference template updater
---------------------------------

The ``FAQPreferenceTemplateUpdaterPlugin`` plugin is used to migrate the
default template of the FAQ viewer.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.commons.upgrade.UpgradeProductService</target-component>

The configuration is applied mainly in
``extension/webapp/src/main/webapp/WEB-INF/ks-extension/ks/faq/templates-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <component-plugin profiles="knowledge,default,all">
      <name>FAQPreferenceTemplateUpdaterPlugin</name>
      <set-method>addUpgradePlugin</set-method>
      <type>org.exoplatform.faq.service.updater.FAQPreferenceTemplateUpdaterPlugin</type>
      <description>FAQ template upgrade plug-in</description>
      <init-params>
        <value-param>
          <name>product.group.id</name>
          <description>The groupId of the product</description>
          <value>org.exoplatform.forum</value>
        </value-param>
        <value-param>
          <name>old.product.group.id</name>
          <description>The groupId of the old product</description>
          <value>org.exoplatform.ks</value>
        </value-param>
        <value-param>
          <name>location</name>
          <description>The location of file template</description>
          <value>war:/ks-extension/ks/faq/templates/FAQViewerPortlet.gtmpl</value>
        </value-param>
      </init-params>
    </component-plugin>

-  **Name**: ``FAQPreferenceTemplateUpdaterPlugin``

-  **Type**:
   ``org.exoplatform.faq.service.updater.FAQPreferenceTemplateUpdaterPlugin``

+----------------------------+--------------+-----------------------------------------------------------------+---------------------------------------+
| **Value-params**           | **Type**     | **Value**                                                       | **Description**                       |
+============================+==============+=================================================================+=======================================+
| **product.group.id**       | ``string``   | ``org.exoplatform.forum``                                       | The ``groupId`` of the product.       |
+----------------------------+--------------+-----------------------------------------------------------------+---------------------------------------+
| **old.product.group.id**   | ``string``   | ``org.exoplatform.ks``                                          | The ``groupId`` of the old product.   |
+----------------------------+--------------+-----------------------------------------------------------------+---------------------------------------+
| **location**               | ``string``   | ``war:/ks-extension/ks/faq/templates/FAQViewerPortlet.gtmpl``   | The location of the template file.    |
+----------------------------+--------------+-----------------------------------------------------------------+---------------------------------------+

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.AnswerPlugins.FAQUserListener:

FAQ user listener
------------------

The ``FAQUserListener`` plugin is used to process the user information
when the user is deleted from the system.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.services.organization.OrganizationService</target-component>

The configuration is applied mainly in
``extension/webapp/src/main/webapp/WEB-INF/ks-extension/ks/ks-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <component-plugin>
      <name>answer.user.event.listener</name>
      <set-method>addListenerPlugin</set-method>
      <type>org.exoplatform.faq.service.conf.FAQUserListener</type>
      <description>calculate info when deleted users</description>
    </component-plugin>

-  **Name**: ``answer.user.event.listener``

-  **Type**: ``org.exoplatform.faq.service.conf.FAQUserListener``

.. _PLFRefGuide.Configurations.ExternalComponentPlugins.AnswerPlugins.TemplatePlugin:

Template
---------

This plugin is used to initialize the template for the FAQ application.

To use the plugin in the component configuration, you must use the
following target-component:

.. code:: xml

    <target-component>org.exoplatform.faq.service.FAQService</target-component>

The configuration is applied mainly in
``extension/webapp/src/main/webapp/WEB-INF/ks-extension/ks/faq/templates-configuration.xml``.

**Sample configuration**:

.. code:: xml

    <component-plugin>
      <name>faq.default.template</name>
      <set-method>addTemplatePlugin</set-method>
      <type>org.exoplatform.faq.service.TemplatePlugin</type>
      <init-params>
        <value-param>
          <name>viewerTemplate</name>
          <value>war:/ks-extension/ks/faq/templates/FAQViewerPortlet.gtmpl</value>
        </value-param>
      </init-params>
    </component-plugin>

-  **Name**: ``faq.default.template``

-  **Type**: ``org.exoplatform.faq.service.TemplatePlugin``

+----------------------+--------------+-----------------------------------------------------------------+-----------------------------+
| **Value-params**     | **Type**     | **Value**                                                       | **Description**             |
+======================+==============+=================================================================+=============================+
| **viewerTemplate**   | ``string``   | ``war:/ks-extension/ks/faq/templates/FAQViewerPortlet.gtmpl``   | The viewer template file.   |
+----------------------+--------------+-----------------------------------------------------------------+-----------------------------+
