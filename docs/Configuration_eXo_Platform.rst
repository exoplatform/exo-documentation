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

   This service is used for spaces management, including creating
   spaces, and installing applications.

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


The service is used for spaces management, including creating spaces,
and installing applications. See 
:ref:`Space Application Config <PLFRefGuide.Configurations.ExternalComponentPlugins.Social.SpaceApplicationConfigPlugin>`
for the list of applications installed in a space.

**Sample configuration**:

.. code:: xml

    <component>
      <key>org.exoplatform.social.core.space.spi.SpaceService</key>
      <type>org.exoplatform.social.core.space.impl.SpaceServiceImpl</type>
    </component>


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

-  :ref:Actions <PLFRefGuide.Configurations.Components.Content.Actions>`

   This section represents the components related to managing Content
   actions and scripts in eXo Platform.

-  :ref:Content arrangement <PLFRefGuide.Configurations.Components.Content.ContentArrangement>`

   This section describes services related arranging content in eXo
   Platform, consisting of Lock Service, Taxonomy Service, Link Manager,
   Manage View Service, Manage Drives Service, New Folksonomy Service,
   and Relationship Service.

-  :ref:Images Processing <PLFRefGuide.Configurations.Components.Content.ImagesProcessing>`

   This section describes the components related to processing Content
   images in eXo Platform, consisting of Jod Converter Service, PDF
   Viewer Service, and Thumbnail Service.

-  :ref:Publication <PLFRefGuide.Configurations.Components.Content.Publication>`

   This section describes two components which process document
   publication in eXo Platform.

-  :ref:Searching <PLFRefGuide.Configurations.Components.Content.Searching>`

   This section represents components related to the Content searching
   feature in eXo Platform, consisting of Site Search Service, SEO
   Service, and Query Service.

-  :ref:Templates Processing <PLFRefGuide.Configurations.Components.Content.TemplateProcessing>`

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

   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | Property-name               | Type     | Value                                                                                                                    | Description                                                                                                                 |
   +=============================+==========+==========================================================================================================================+=============================================================================================================================+
   | ``parameterizedPageURI``    | string   | ``${wcm.config.parameterizedPageURI:/detail}``                                                                           | Contains the path to a page which displays the full content of a document provided by a URL on the browser's address bar.   |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``printPageURI``            | string   | ``${wcm.config.printPageURI:/printviewer}``                                                                              | The URL of the document's print preview page.                                                                               |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``printViewerPage``         | string   | ``${wcm.config.printViewerPage:printviewer}``                                                                            | The name of the print preview page.                                                                                         |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``editorPageURI``           | string   | ``${wcm.config.editorPageURI:editor}``                                                                                   | The name of the page which users can in-line edit its content displayed in the front-end page.                              |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``siteExplorerURI``         | String   | ``${wcm.config.siteExplorerURI:siteExplorer}``                                                                           | The URL of a page containing the Sites Explorer portlet.                                                                    |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``CLVPortlet``              | String   | ``/presentation/ContentListViewerPortlet``                                                                               | The portlet which contains a list of content.                                                                               |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``SCVPortlet``              | String   | ``/presentation/SingleContentViewer``                                                                                    | The portlet which contains single content.                                                                                  |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``formViewTemplatePath``    | String   | ``${wcm.config.formViewTemplatePath:}``                                                                                  | The path to the template used to display the contents in this portlet.                                                      |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+
   | ``paginatorTemplatePath``   | String   | ``${wcm.config.paginatorTemplatePath:/exo:ecm/views/templates/content-list-viewer/paginators/DefaultPaginator.gtmpl}``   | The path to the paginator used to display the contents in this portlet.                                                     |
   +-----------------------------+----------+--------------------------------------------------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------+

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
