.. _SpaceTemplates:

######################
Managing Space Templates
######################

    eXo Platform spaces are associated with templates. Each template
    defines the space visbility, registration and the list of applications.
    This chapter will show steps for

    -  :ref:`Extending existing templates <PLFDevGuide.SpaceTemplates.Extend>`
        Steps for extending existing space templates. Only applications list can be extended.

    -  :ref:`Creating a new template <PLFDevGuide.SpaceTemplates.CreateNew>`
       Steps to create a new space template.

    -  :ref:`Defining an application handler for template <PLFDevGuide.SpaceTemplates.handler.CreateNew>`
       Steps to define an application handler for a space template.

.. tip:: In order to extend existing space templates or create a new one, you have to create your own :ref:`extension <PLFDevGuide.eXoAdd-ons.PortalExtension>`.
In this chapter we will consider that you have already an extension.

.. tip:: All the configurations samples given in this chapter have to be added to the portal configuration file of the extension war: *custom-form.war!/WEB-INF/conf/configuration.xml*.


.. _PLFDevGuide.SpaceTemplates.Extend:

============================
Extending existing templates
============================

Sapce templates can be extended in order to add applications. Only applications can be added to space templates via extension.
In order to add some applications to an existing template, "extendSpaceTemplatePlugin" method of the "SpaceTemplateService" will be used in a component plugin.
In your portal configuration of your extension, add the following configuration:

    .. code:: xml

        <external-component-plugins>
            <target-component>org.exoplatform.social.core.space.spi.SpaceTemplateService</target-component>
            <!-- Community space template -->
            <component-plugin>
              <name>Space Template Extension</name>
              <set-method>extendSpaceTemplatePlugin</set-method>
              <type>org.exoplatform.social.core.space.SpaceTemplateConfigPlugin</type>
              <init-params>
                <object-param>
                  <name>template</name>
                  <description>Space Template</description>
                  <object type="org.exoplatform.social.core.space.SpaceTemplate">
                    <field name="name"><string>community</string></field>
                    <field name="applications">
                      <collection type="java.util.ArrayList">
                        <value>
                          <object type="org.exoplatform.social.core.space.SpaceApplication">
                            <field name="portletApp">
                              <string>task-management</string>
                            </field>
                            <field name="portletName">
                              <string>TaskManagementApplication</string>
                            </field>
                            <field name="appTitle">
                              <string>abcd</string>
                            </field>
                            <field name="removable">
                              <boolean>true</boolean>
                            </field>
                            <field name="order">
                              <int>3</int>
                            </field>
                            <field name="uri">
                              <string>tasks</string>
                            </field>
                          </object>
                        </value>
                      </collection>
                    </field>
                  </object>
                </object-param>
              </init-params>
            </component-plugin>
            ...
        </external-component-plugins>

This will add "tasks" application to the "community" space template. The "tasks" application will the third application on "community" template according to the "order" field.


.. _PLFDevGuide.SpaceTemplates.CreateNew:

============================
Creating a new template
============================

You can define a new space template by configuration using "registerSpaceTemplatePlugin" method of the "SpaceTemplateService".
A space template consists of *name*, *visibility*, *registration*, *banner*, *home application* and *applications list*.
To do so, you have to add the following configuration to your portal configuration:

    .. code:: xml

        <external-component-plugins>
            <target-component>org.exoplatform.social.core.space.spi.SpaceTemplateService</target-component>
            <!-- Default applications to be installed when creating a new space -->
            <component-plugin>
              <name>Space Template Configuration</name>
              <set-method>registerSpaceTemplatePlugin</set-method>
              <type>org.exoplatform.social.core.space.SpaceTemplateConfigPlugin</type>
              <init-params>
                <object-param>
                  <name>template</name>
                  <description>Space Template</description>
                  <object type="org.exoplatform.social.core.space.SpaceTemplate">
                    <field name="name"><string>custom</string></field>
                    <field name="visibility"><string>private</string></field>
                    <field name="registration"><string>open</string></field>
                    <field name="bannerPath"><string>war:/conf/social-extension/social/space-template/custom/banner.png</string></field>
                    <field name="homePageApplication">
                      <object type="org.exoplatform.social.core.space.SpaceApplication">
                        <field name="portletApp"><string>social-portlet</string></field>
                        <field name="portletName"><string>SpaceActivityStreamPortlet</string></field>
                        <field name="appTitle"><string>Home</string></field>
                      </object>
                    </field>
                    <field name="applications">
                      <collection type="java.util.ArrayList">
                        <value>
                          <object type="org.exoplatform.social.core.space.SpaceApplication">
                            <field name="portletApp"><string>social-portlet</string></field>
                            <field name="portletName"><string>SpaceSettingPortlet</string></field>
                            <field name="appTitle"><string>Space Settings</string></field>
                            <field name="removable"><boolean>false</boolean></field>
                            <field name="order"><int>2</int></field>
                            <field name="uri"><string>settings</string></field>
                            <!--<field name="icon"><string>SpaceSettingsIcon</string></field>-->
                          </object>
                        </value>
                        ...
                      </collection>
                    </field>
                  </object>
                </object-param>
              </init-params>
            </component-plugin>
        </external-component-plugins>

In which:

-  **Name**: ``Space Template Configuration``

-  **Set-method**: ``registerSpaceTemplatePlugin``

-  **Type**:
   ``org.exoplatform.social.core.space.SpaceTemplateConfigPlugin``

-  **Init-params**:

+----------------------+-------------------------------------------------------+
| Object-param         | Description                                           |
+======================+=======================================================+
| **template**         | Sets the **SpaceTemplate** to ve defined.             |
+----------------------+-------------------------------------------------------+

+-------------------------+------------------------------+----------------------------------------------------------------------------+
| Field name              | Possible value               | Description                                                                |
+=========================+==============================+============================================================================+
| **name**                | ``string``                   | The name of the space template.                                            |
+-------------------------+------------------------------+----------------------------------------------------------------------------+
| **visibility**          | ``string``                   | The visibility of the space.                                               |
+-------------------------+------------------------------+----------------------------------------------------------------------------+
| **registration**        | ``string``                   | The registration of the space.                                             |
+-------------------------+------------------------------+----------------------------------------------------------------------------+
| **bannerPath**          | ``string``                   | The path of the space banner.                                              |
+-------------------------+------------------------------+----------------------------------------------------------------------------+
| **homePageApplication** | ``SpaceApplication``         | Sets the **Application** portlet to be the home page of a space.           |
+-------------------------+------------------------------+----------------------------------------------------------------------------+
| **applications**        | list of ``SpaceApplication`` | The list of the applications that are installed by default to a new space. |
+-------------------------+------------------------------+----------------------------------------------------------------------------+

-  **SpaceApplication**:

+-------------------+------------------+-------------------------------------------------------------------------+
| Field name        | Possible value   | Description                                                             |
+===================+==================+=========================================================================+
| **portletAp**     | ``string``       | The ``.war`` name file which has the portlet.                           |
+-------------------+------------------+-------------------------------------------------------------------------+
| **portletName**   | ``string``       | The name of portlet which is registered in the system.                  |
+-------------------+------------------+-------------------------------------------------------------------------+
| **appTitle**      | ``string``       | The display name of the application.                                    |
+-------------------+------------------+-------------------------------------------------------------------------+
| **removable**     | ``boolean``      | Specifies if the application is removed from the space or not.          |
+-------------------+------------------+-------------------------------------------------------------------------+
| **order**         | ``integer``      | The order of the application in the space navigation.                   |
+-------------------+------------------+-------------------------------------------------------------------------+
| **uri**           | ``string``       | The URI of the application in the page node.                            |
+-------------------+------------------+-------------------------------------------------------------------------+

In this example, you can define the banner image "banner.png" to the path */conf/social-extension/social/space-template/custom/* of your extension.

.. tip:: You can add translations for both space template name and description:
- for space template name, add the property *space.template.$TEMPLATE_NAME* (for this example *space.template.custom*)
- for space template description, add the property *space.template.description.$TEMPLATE_NAME* (for this example *space.template.description.custom*)


.. _PLFDevGuide.SpaceTemplates.handler.CreateNew:

============================
Defining an application handler
============================

Each space template can have its own application handler. The application handler manipulates space applications: install, activate, deactivate, uninstall.
All applications handlers must implement the interface `SpaceApplicationHandler <https://github.com/exoplatform/social/blob/develop/component/core/src/main/java/org/exoplatform/social/core/space/spi/SpaceApplicationHandler.java>`__.
In order to define an application handler, you have to add the following component plugin configuration to your portal configuration:

    .. code:: xml

        <external-component-plugins>
            <target-component>org.exoplatform.social.core.space.spi.SpaceTemplateService</target-component>
            <component-plugin>
              <name>CustomSpaceApplicationHandler</name>
              <set-method>registerSpaceApplicationHandler</set-method>
              <type>com.custom.social.core.space.impl.CustomSpaceApplicationHandler</type>
              <init-params>
                <value-param>
                  <name>templateName</name>
                  <value>custom</value>
                </value-param>
              </init-params>
            </component-plugin>
        </external-component-plugins>

This will define *CustomSpaceApplicationHandler* as the application handler of the space template "custom".