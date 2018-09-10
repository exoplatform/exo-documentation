.. _Application:

########################
Developing Applications
########################

    Portlets and gadgets are the two main types of eXo applications.
    Portlets are user interface components that provide fragments of
    markup code from the server side, while gadgets generate dynamic web
    content on the client side.

    This chapter includes the following main topics:

    -  :ref:`Developing a portlet <PLFDevGuide.DevelopingApplications.DevelopingPortlet>`
       Steps to create, build and deploy a portlet in eXo Platform. CSS and
       JavaScript in portlets. Portlet development using frameworks like
       JSF, Spring MVC, Juzu.

    -  :ref:`Developing a gadget <PLFDevGuide.DevelopingApplications.DevelopingGadget>`
       Steps to create a gadget, create and apply resources in a gadget,
       and many methods of customizing a gadget.

    -  :ref:`Extending eXo applications <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications>`
       Concept and mechanism of UI Extension framework which allows the
       customization and extensibility of eXo applications through
       simple plugins.

.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet:

====================
Developing a portlet
====================

In this part, you learn some portlet development techniques, including:

-  :ref:`HelloWorld portlet <PLFDevGuide.DevelopingApplications.DevelopingPortlet.HelloWorld>`
   Writing a very basic JSR-286 portlet.

-  :ref:`Portlet deployment <PLFDevGuide.DevelopingApplications.DevelopingPortlet.Deployment>`
   Deploying a portlet in eXo Platform by UI and by configuration.

-  :ref:`Portlet localization <PLFDevGuide.DevelopingApplications.DevelopingPortlet.Localization>`
   Notice the resource path in eXo portlet is specific.

-  :ref:`Portlet CSS <PLFDevGuide.DevelopingApplications.DevelopingPortlet.CSS>` 
   Using portal-managed CSS with gatein-resources.xml.

-  :ref:`Adding JavaScript to a portlet <PLFDevGuide.DevelopingApplications.DevelopingPortlet.JavaScript>`
   Using modularized JavaScript in eXo Platform.

-  :ref:`Portlet preferences <PLFDevGuide.DevelopingApplications.DevelopingPortlet.Preferences>`
   Portlet preferences in eXo are not user-specific.

-  :ref:`JSF2 portlet example <PLFDevGuide.DevelopingApplications.DevelopingPortlet.JSF2_JPB>`
   Writing a JSF2 portlet using JBoss Portlet Bridge.

-  :ref:`JSF2 portlet with CDI <PLFDevGuide.DevelopingApplications.DevelopingPortlet.JSF2_CDI>`
   Writing a JSF2 portlet that utilizes CDI.

-  :ref:`Public render parameters <PLFDevGuide.DevelopingApplications.DevelopingPortlet.PublicRenderParameter>`
   Example of the JSR-286 feature.

-  :ref:`Contextual properties <PLFDevGuide.DevelopingApplications.DevelopingPortlet.ContextualProperty>`
   eXo's leverage of JSR-286 public render parameter to obtain
   contextual information, such as navigation URI, site and page name.

-  :ref:`Juzu portlet <PLFDevGuide.DevelopingApplications.DevelopingPortlet.Juzu.HelloJuzu>`
   Introduction to Juzu framework that makes portlet development much easier.

-  :ref:`Spring MVC portlet <PLFDevGuide.DevelopingApplications.DevelopingPortlet.Spring.Intro>`
   it is officially supported as of Platform 4.2.

You should also read:

-  `JSR-286, Portlet Specification <http://www.jcp.org/en/jsr/detail?id=286>`__

-  `Chapter 4, JavaEE Tutorial, Oracle <http://docs.oracle.com/javaee/6/tutorial/doc/bnaph.html>`__


.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.HelloWorld:

HelloWorld portlet
~~~~~~~~~~~~~~~~~~~

In this part, you will create a very basic portlet which contains a
simple JSP page. The source code is available
`here <https://github.com/exo-samples/docs-samples/tree/master/portlet/hello-portlet>`__.

1. Create a new Maven project as follows:

   |image0|

2. Edit ``pom.xml``:

   .. code:: xml

		<project>
		  <modelVersion>4.0.0</modelVersion>
		  <groupId>com.acme.samples</groupId>
		  <artifactId>hello-portlet</artifactId>
		  <version>1.0</version>
		  <packaging>war</packaging>
		  <build>
			<finalName>hello-portlet</finalName>
		  </build>

		  <dependencies>
			<dependency>
			  <groupId>javax.portlet</groupId>
			  <artifactId>portlet-api</artifactId>
			  <version>2.0</version>
			  <scope>provided</scope>
			</dependency>
		  </dependencies>
		</project>

3. Edit ``WEB-INF/web.xml``:

   .. code:: xml

       <web-app>
         <display-name>hello-portlet</display-name>
       </web-app>

4. Edit ``WEB-INF/portlet.xml``:

   .. code:: xml

		<portlet-app version="2.0" xmlns="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd"
		  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		  xsi:schemaLocation="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd">
		  <portlet>
			<portlet-name>Hello</portlet-name>
			<portlet-class>com.acme.samples.HelloPortlet</portlet-class>
			<supports>
			  <mime-type>text/html</mime-type>
			</supports>
			<portlet-info>
			  <title>Hello</title>
			</portlet-info>
		  </portlet>
		</portlet-app>

5. Edit ``HelloPortlet.java``:

   .. code:: java

    package com.acme.samples;

		import java.io.IOException;

		import javax.portlet.GenericPortlet;
		import javax.portlet.PortletRequestDispatcher;
		import javax.portlet.RenderRequest;
		import javax.portlet.RenderResponse;
		import javax.portlet.PortletException;
		import javax.portlet.RenderMode;

		public class HelloPortlet extends GenericPortlet {
		  @RenderMode(name = "view")
		  public void Hello(RenderRequest request, RenderResponse response) throws IOException, PortletException {
			PortletRequestDispatcher prDispatcher = getPortletContext().getRequestDispatcher("/jsp/hello.jsp");
			prDispatcher.include(request, response);
		  }
		}

6. Edit ``jsp/hello.jsp``:

   .. code:: jsp

		<h2>Hello</h2>
		<h6>Welcome to Hello portlet!</h6>
		<p><i>Powered by eXo Platform.</i><p>

After being built, the package should be ``target/hello-portlet.war``.
Go to :ref:`next section <PLFDevGuide.DevelopingApplications.DevelopingPortlet.Deployment>`
to deploy it in eXo Platform.

.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.Deploymentm:

Portlet deployment
~~~~~~~~~~~~~~~~~~~

The portlet *war* file should be installed into
``$PLATFORM_TOMCAT_HOME/webapps`` (in Tomcat) or
``$PLATFORM_JBOSS_HOME/standalone/deployments`` (in JBoss).

**Particularly for JBoss**, you need to include a
``WEB-INF/jboss-deployment-structure.xml`` file to your portlet *war*,
to declare *platform.ear* as a dependency:

.. code:: xml

    <jboss-deployment-structure xmlns="urn:jboss:deployment-structure:1.2">
        <deployment>
            <dependencies>
                <module name="deployment.platform.ear" export="true"/>
            </dependencies>
        </deployment>
    </jboss-deployment-structure>

For more information, see `Master Your Portlet Packaging in JBoss article, <http://blog.exoplatform.com/en/2014/04/22/master-portlet-packaging-jboss>`__.

Both Tomcat and JBoss support hot deployment.

To test your portlet in action, you need to add it to a page. This task
can be done in two ways:

-  :ref:`through UI <PLFDevGuide.DevelopingApplications.DevelopingPortlet.Deployment.UI>`

-  :ref:`by configuration <PLFDevGuide.DevelopingApplications.DevelopingPortlet.Deployment.Page_configuration>`


.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.Deployment.UI:

Activating a portlet through UI
--------------------------------

First, you need to register your portlet as a portal-managed
application:

1. Log in as an administrator.

2. Click AdministrationApplications.

3. Click Portlet on the right of the screen. Scroll down to find your
   portlet in the list and click it.

4. Scroll up to see the screen below, then click Click here to add into
   categories.

   |image1|

5. Select one category (or more), such as *Development*, then save.

Once a portlet has been added to a category, you can change it as
follows:

1. Click Manage Applications.

2. Find the category that has your portlet. Here you can unregister it 
   from the category by clicking the |image2| icon, or click Hello to 
   edit the *default permission*.

|image3|

The *default permission* takes effect when you add the portlet to a page
and do not edit the permission by yourself.

Next, create a page and add the portlet to it. If you need instructions
to create a page, see `Adding a new page, User guide <ManagingPages.AddingNewPage>`.
The portlet in view mode will be as follows:

|image4|

.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.Deployment.Configuration:

Registering a portlet by configuration
---------------------------------------

In the previous section, you registered the hello-portlet to an
application category and add it to a page through UI. In this section,
you learn how to register this portlet by configuration.

The registration of portal-managed applications is performed by
configuring the ``ApplicationRegistryService`` service, so you need a
portal extension. In the following example, you are going to make the
hello-portlet as an extension containing service configuration. The
source code is available
`here <https://github.com/exo-samples/docs-samples/tree/master/portlet/register>`__.

1. Make your hello-portlet a :ref:`portal extension <PLFDevGuide.eXoAdd-ons.PortalExtension>` 
   by adding ``META-INF/exo-conf/configuration.xml`` file:

   .. code:: xml

		<configuration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
			xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd"
			xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">
			<external-component-plugins>
				<target-component>org.exoplatform.container.definition.PortalContainerConfig</target-component>
				<component-plugin>
					<name>Add PortalContainer Definitions</name>
					<set-method>registerChangePlugin</set-method>
					<type>org.exoplatform.container.definition.PortalContainerDefinitionChangePlugin</type>
					<priority>101</priority>
					<init-params>
						<values-param>
							<name>apply.specific</name>
							<value>portal</value>
						</values-param>
						<object-param>
							<name>addDependencies</name>
							<object type="org.exoplatform.container.definition.PortalContainerDefinitionChange$AddDependencies">
								<field name="dependencies">
									<collection type="java.util.ArrayList">
										<value><string>hello-portlet</string></value>
									</collection>
								</field>
							</object>
						</object-param>
					</init-params>
				</component-plugin>
			</external-component-plugins>
		</configuration>

2. Add a new configuration file named ``WEB-INF/conf/application-registry.xml``:

   .. code:: xml

		<configuration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd"
			xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">
			<external-component-plugins>
				<target-component>org.exoplatform.application.registry.ApplicationRegistryService</target-component>
				<component-plugin>
					<name>acme.apps</name>
					<set-method>initListener</set-method>
					<type>org.exoplatform.application.registry.ApplicationCategoriesPlugins</type>
					<description></description>
					<init-params>
						<object-param>
							<name>ACME Apps</name>
							<description></description>
							<object type="org.exoplatform.application.registry.ApplicationCategory">
								<field name="name"><string>ACMEApps</string></field>
								<field name="displayName"><string>ACME applications</string></field>
								<field name="description"><string>ACME applications</string></field>
								<field name="accessPermissions">
									<collection type="java.util.ArrayList" item-type="java.lang.String">
										<value><string>*:/platform/users</string></value>
									</collection>
								</field>
								<field name="applications">
									<collection type="java.util.ArrayList">
										<value>
											<object type="org.exoplatform.application.registry.Application">
												<field name="applicationName"><string>Hello</string></field>
												<field name="categoryName"><string>ACMEApps</string></field>
												<field name="displayName"><string>Hello</string></field>
												<field name="type"><string>portlet</string></field>
												<field name="description"><string>Hello Portlet</string></field>
												<field name="contentId"><string>hello-portlet/Hello</string></field>
												<field name="accessPermissions">
													<collection type="java.util.ArrayList" item-type="java.lang.String">
														<value><string>*:/platform/administrators</string></value>
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
		</configuration>


	-  ``accessPermissions``: Set this to *Everyone* if you want to make the
	   category/portlet public.

	-  ``contentId``: The *hello-portlet/Hello* pattern is the package name
	   (declared in ``web.xml``) and the portlet name (declared in
	   ``portlet.xml``).

3. Add the ``WEB-INF/conf/configuration.xml`` file to import the new
   configuration file:

   .. code:: xml

		<configuration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd"
			xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">
			<import>war:/conf/application-registry.xml</import>
		</configuration>

After deploying the ``hello-portlet.war``, you can test that the portlet
is registered under the *ACME applications* category:

|image5|


.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.Deployment.Page_configuration:

Adding portlet to page by configuration
----------------------------------------

Through UI, you have to register a portlet to portal-managed
applications prior to adding it to a page. By configuration, it is not
required.

You can download the source code used in this section
`here <https://github.com/exo-samples/docs-samples/tree/master/portlet/add-to-page>`__.

Assume that you have already configured a site and some pages by :ref:`site extension <PLFDevGuide.Site.CreateNew>`. 
To add your hello-portlet to a page, you just need to modify ``pages.xml``
to add the following configuration:

.. code:: xml

    <portlet-application>
        <portlet>
            <application-ref>hello-portlet</application-ref>
            <portlet-ref>Hello</portlet-ref>
        </portlet>
        <title>Hello</title>
        <access-permissions>*:/platform/users</access-permissions>
        <show-info-bar>false</show-info-bar>
        <show-application-state>false</show-application-state>
        <show-application-mode>false</show-application-mode>
    </portlet-application>

So the whole file looks like this:

.. code:: xml

    <page-set xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.gatein.org/xml/ns/gatein_objects_1_2 http://www.gatein.org/xml/ns/gatein_objects_1_2"
        xmlns="http://www.gatein.org/xml/ns/gatein_objects_1_2">
        <page>
            <name>homepage</name>
            <title>Home Page</title>
            <access-permissions>*:/platform/users</access-permissions>
            <edit-permission>*:/platform/administrators</edit-permission>
            <portlet-application>
                <portlet>
                    <application-ref>hello-portlet</application-ref>
                    <portlet-ref>Hello</portlet-ref>
                </portlet>
                <title>Hello</title>
                <access-permissions>*:/platform/users</access-permissions>
                <show-info-bar>false</show-info-bar>
                <show-application-state>false</show-application-state>
                <show-application-mode>false</show-application-mode>
            </portlet-application>
        </page>
    </page-set>

-  ``application-ref``: The web context that you declare in ``web.xml``
   of the portlet package.

-  ``portlet-ref``: The portlet name declared in ``portlet.xml``.

-  ``accessPermissions``: Set it to *Everyone* if you want to make the
   portlet public.

.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.Deployment.Undeploy:

Undeploying a portlet
----------------------

The removal of a *portlet war* will not lead to auto-removal of its
application registries and instances in pages. The registered
application is still visible and available to be added to a page;
however, it does not work anymore and the page will display a message
like "*This portlet encountered an error and could not be displayed*\ ".

So you should find and remove all the instances of the portlet from
every page.

**Redeploying a portlet**

Both Tomcat and JBoss support hot redeployment, so you can just replace
the old war with the new one and it should work. However, depending on
the technology the portlet uses, the hot redeployment might not work
properly. In this case, a server restart is required.

.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.Deployment.Injection:

Injecting a portlet using Dynamic Container
--------------------------------------------

**The mechanism**

If you want to inject a portlet to every page in a site, you might add
it directly to the shared layout (``sharedlayout.xml``). However, in
case you have more than one extension that overrides
``sharedlayout.xml``, only the last loaded one takes effect. This leads
to trouble that portlets injection cannot be solved in packaging, it
will require extra tasks in deployment (like merging several layouts
from different projects).

As of 4.1, the trouble is solved by the Dynamic Container feature. A
shared layout and an extension get involved in how it works:

-  **The shared layout must contain some Dynamic Container instances**

   To make a site ready to inject portlets, there should be some Dynamic
   Containers added to the shared layout. This is done by
   ``sharedlayout.xml``, like this:

   .. code:: xml

       <container id="top-dynamic-container" template="system:/groovy/portal/webui/container/UIAddOnContainer.gtmpl">
           <name>top-dynamic-container</name>
           <factory-id>addonContainer</factory-id>
       </container>

-  **The extension project must configure a component plugin to inject
   portlets to a container.**

   So it is important that the extension project is aware of the
   container name. The configuration will be described later.

-  In the heart of the feature is the component plugin
   ``org.exoplatform.commons.addons.AddOnPluginImpl`` that takes care of
   injecting specified portlets to a specified Dynamic Container. This
   makes Dynamic Container a special kind of container, because the
   portlets that it will contain are pre-defined. In other words, the
   portlet drag-and-drop is not in the Dynamic Container designation.

So in this way, whenever the named container instance is put into a
page, or all pages via ``sharedlayout.xml``, the portlet injection is
done automatically. An extension does not have to override the layout.

**Example**

In the following example, you inject the "Help" portlet (a built-in, for
simplification) into all pages of the Intranet site. The Help portlet is
already featured at the top right of the homepage by default, so you
will add another one to the left. The source code of this example is
`here <https://github.com/exo-samples/docs-samples/tree/4.3.x/portlet/dynamic-container>`__.

Make a custom extension as described in `Portal extension
section <#PLFDevGuide.eXoAdd-ons.PortalExtension.Howto>`__.

Edit ``WEB-INF/conf/configuration.xml``:

.. code:: xml

    <configuration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd"
        xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">
        <external-component-plugins>
            <target-component>org.exoplatform.commons.addons.AddOnService</target-component>
            <component-plugin>
                <name>addPlugin</name>
                <set-method>addPlugin</set-method>
                <type>org.exoplatform.commons.addons.AddOnPluginImpl</type>
                <description></description>
                <init-params>
                    <value-param>
                        <name>priority</name>
                        <value>5</value>
                    </value-param>
                    <value-param>
                        <name>containerName</name>
                        <value>left-topNavigation-container</value>
                    </value-param>
                    <object-param>
                        <name>help-portlet</name>
                        <description></description>
                        <object type="org.exoplatform.portal.config.serialize.PortletApplication">
                            <field name="state">
                                <object type="org.exoplatform.portal.config.model.TransientApplicationState">
                                    <field name="contentId">
                                        <string>platformNavigation/UIHelpPlatformToolbarPortlet</string>
                                    </field>
                                </object>
                            </field>
                        </object>
                    </object-param>
                </init-params>
            </component-plugin>
        </external-component-plugins>
    </configuration>

In which:

-  The container instance is identified by ``containerName``. Find below
   a picture that depicts the default layout of the *Intranet* site.

-  The portlets are identified by ``contentId``. In the example,
   ``platformNavigation`` is the webapp name (declared in ``web.xml``),
   and ``UIHelpPlatformToolbarPortlet`` is the portlet name (declared in
   ``portlet.xml``).

   To inject more than one portlet, add more *object-param* with
   different names.

**Default Dynamic Container instances**

Here are the Dynamic Container instances in the *Intranet* site:

|image6|

For a customized site, you can manage Dynamic Containers by `customizing
sharedlayout.xml <#PLFDevGuide.Site.LookAndFeel.CustomizingLayout.SharedLayout>`__.
The configuration sample is given above. There are two templates of
Dynamic Container:

-  ``system:/groovy/portal/webui/container/UIAddOnContainer.gtmpl``

-  ``system:/groovy/portal/webui/container/UIAddOnColumnContainer.gtmpl``


.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.Localization:

Portlet localization
~~~~~~~~~~~~~~~~~~~~~

In this example you add some language resources and CSS to be used in
the JSP of the HelloWorld portlet. You can download the portlet's source
code `here <https://github.com/exo-samples/docs-samples/tree/4.3.x/portlet/localization>`__.

The example is plain JSR-286, except one thing: eXo expects that the
resource bundle should be found in the ``locale/portlet`` folder. The
path is fixed and you need to pack your ``.properties`` files in a
sub-folder of this path.

1. Create a new Maven project as follows:

|image7|

2. Edit ``pom.xml``:

   .. code:: xml

		<project>
		  <modelVersion>4.0.0</modelVersion>
		  <groupId>com.acme.samples</groupId>
		  <artifactId>hello-portlet</artifactId>
		  <version>1.0</version>
		  <packaging>war</packaging>
		  <build>
			<finalName>hello-portlet</finalName>
		  </build>

		  <dependencies>
			<dependency>
			  <groupId>javax.portlet</groupId>
			  <artifactId>portlet-api</artifactId>
			  <version>2.0</version>
			  <scope>provided</scope>
			</dependency>
		  </dependencies>
		</project>

3. Edit ``web.xml``:

   .. code:: xml

		<web-app>
		  <display-name>hello-portlet</display-name>
		</web-app>

4. Edit ``HelloPortlet.java``:

   .. code:: java

		package com.acme.samples;

		import java.io.IOException;

		import javax.portlet.GenericPortlet;
		import javax.portlet.PortletRequestDispatcher;
		import javax.portlet.RenderRequest;
		import javax.portlet.RenderResponse;
		import javax.portlet.PortletException;
		import javax.portlet.RenderMode;

		public class HelloPortlet extends GenericPortlet {
		  @RenderMode(name = "view")
		  public void Hello(RenderRequest request, RenderResponse response) throws IOException, PortletException {
			PortletRequestDispatcher prDispatcher = getPortletContext().getRequestDispatcher("/jsp/hello.jsp");
			prDispatcher.include(request, response);
		  }
		}

5. Edit ``HelloPortlet_en.properties`` to add language properties:

   ::

		com.acme.samples.HelloPortlet.Hello=Hello!
		com.acme.samples.HelloPortlet.Msg1=This is a portlet example.
		com.acme.samples.HelloPortlet.Msg2=Written by a baker.

6. Edit ``HelloPortlet_fr.properties`` to add language properties:

   ::

		com.acme.samples.HelloPortlet.Hello=Bonjour!
		com.acme.samples.HelloPortlet.Msg1=C'est un example de portlet.
		com.acme.samples.HelloPortlet.Msg2=Ecrit par un boulanger.

7. Edit ``portlet.xml`` to register supported locale and the
   resource-bundle:

   .. code:: xml

		<portlet-app version="2.0" xmlns="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd"
		  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		  xsi:schemaLocation="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd">
		  <portlet>
			<portlet-name>Hello</portlet-name>
			<portlet-class>com.acme.samples.HelloPortlet</portlet-class>
			<supports>
			  <mime-type>text/html</mime-type>
			</supports>
			<supported-locale>en</supported-locale>
			<resource-bundle>locale.portlet.HelloPortlet.HelloPortlet</resource-bundle>
			<portlet-info>
			  <title>Hello</title>
			</portlet-info>
		  </portlet>
		</portlet-app>

8. Edit ``Stylesheet.css``:

   .. code:: css

		.HelloPortlet1, .HelloPortlet2, .HelloPortlet3 {
		  padding: 10px;
		  font-style: italic;
		  font-size: 18px;
		  width: 400px;
		}
		.HelloPortlet1 {
		  background-color: antiquewhite;
		}
		.HelloPortlet2 {
		  background-color: lemonchiffon;
		}
		.HelloPortlet3 {
		  background-color: wheat;
		}

9. Edit ``hello.jsp`` to add language properties:

   .. code:: html

		<%@ taglib uri="http://java.sun.com/portlet" prefix="portlet" %>
		<%@ page import="java.util.ResourceBundle"%>

		<portlet:defineObjects />

		<%
		  String contextPath = request.getContextPath();
		  ResourceBundle resource = portletConfig.getResourceBundle(request.getLocale());
		%>

		<link rel="stylesheet" type="text/css" href="<%=contextPath%>/skin/Stylesheet.css"/>
		<div class="HelloPortlet1">
		  <span><%=resource.getString("com.acme.samples.HelloPortlet.Hello")%></span>
		</div>
		<div class="HelloPortlet2">
		  <span><%=resource.getString("com.acme.samples.HelloPortlet.Msg1")%></span>
		</div>
		<div class="HelloPortlet3">
		  <span><%=resource.getString("com.acme.samples.HelloPortlet.Msg2")%></span>
		</div>

	-  Notice the *taglib* and *portlet:defineObjects* is added to be able
	   to use the ``portletConfig`` object.

	-  To simplify this example, a CSS link is added to the body (JSP) but
	   this is not recommended. Please see the :ref:`Portlet CSS <PLFDevGuide.DevelopingApplications.DevelopingPortlet.CSS>`
	   section for a better way.

After deployment, add the portlet to a page and test:

|image8|

.. note:: The locale resource bundle needs to be packed in a sub folder under ``WEB-INF/classes/locale/portlet/``.

.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.CSS:

Portlet CSS
~~~~~~~~~~~~

In the example of :ref:`Portlet localization <#PLFDevGuide.DevelopingApplications.DevelopingPortlet.Localization>`,
the CSS resource is added into the JSP. It might make the page slow and
ugly.

::

    <link rel="stylesheet" type="text/css" href="<%=contextPath%>/skin/Stylesheet.css"/>
    <div>..</div>

In this section you improve it by letting the portal manage your CSS
resource. You can download all source code used in this section
`here <https://github.com/exo-samples/docs-samples/tree/master/portlet/css>`__.

The registration of a CSS resource to the portal is done via
``WEB-INF/gatein-resources.xml`` in your *.war*. For this purpose you
will make your webapp a `portal
extension <#PLFDevGuide.eXoAdd-ons.PortalExtension>`__, by adding
``META-INF/exo-conf/configuration.xml`` file:

.. code:: xml

    <configuration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd"
        xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">
        <external-component-plugins>
            <target-component>org.exoplatform.container.definition.PortalContainerConfig</target-component>
            <component-plugin>
                <name>Add PortalContainer Definitions</name>
                <set-method>registerChangePlugin</set-method>
                <type>org.exoplatform.container.definition.PortalContainerDefinitionChangePlugin</type>
                <priority>101</priority>
                <init-params>
                    <values-param>
                        <name>apply.specific</name>
                        <value>portal</value>
                    </values-param>
                    <object-param>
                        <name>addDependencies</name>
                        <object type="org.exoplatform.container.definition.PortalContainerDefinitionChange$AddDependencies">
                            <field name="dependencies">
                                <collection type="java.util.ArrayList">
                                    <value>
                                        <string>hello-portlet</string>
                                    </value>
                                </collection>
                            </field>
                        </object>
                    </object-param>
                </init-params>
            </component-plugin>
        </external-component-plugins>
    </configuration>

The CSS resource is registered like below:

1. Add the ``WEB-INF/gatein-resources.xml`` file so that you have:

|image9|

2. Edit ``gatein-resources.xml``:

   .. code:: xml

		<gatein-resources xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		  xsi:schemaLocation="http://www.gatein.org/xml/ns/gatein_resources_1_3 http://www.gatein.org/xml/ns/gatein_resources_1_3"
		  xmlns="http://www.gatein.org/xml/ns/gatein_resources_1_3">
		  <portlet-skin>
			<application-name>hello-portlet</application-name>
			<portlet-name>Hello</portlet-name>
			<skin-name>Default</skin-name>
			<css-path>/skin/Stylesheet.css</css-path>
		  </portlet-skin>
		</gatein-resources>

	-  The application-name is the name of war file and needs to be
	   configured as the same value in ``web.xml``.

	-  The portlet-name is configured in ``portlet.xml``.

	-  Do not miss the :ref:`note <Note-Using-Shared-CSS-Resource>` at 
	   the end of this section.

Modify the ``jsp/hello.jsp`` file (to remove the link tag):

::

    <%@ taglib uri="http://java.sun.com/portlet" prefix="portlet" %>
    <%@ page import="java.util.ResourceBundle"%>
    <%@ page import="org.exoplatform.services.resources.ResourceBundleService"%>
    <%@ page import="org.exoplatform.container.PortalContainer"%>

    <portlet:defineObjects />

    <%
      String contextPath = request.getContextPath();
      ResourceBundle resource = portletConfig.getResourceBundle(request.getLocale());
    %>

    <div class="HelloPortlet1">
      <span><%=resource.getString("com.acme.samples.HelloPortlet.Hello")%></span>
    </div>
    <div class="HelloPortlet2">
      <span><%=resource.getString("com.acme.samples.HelloPortlet.Msg1")%></span>
    </div>
    <div class="HelloPortlet3">
      <span><%=resource.getString("com.acme.samples.HelloPortlet.Msg2")%></span>
    </div>

The result will be:

|image10|

.. _Note-Using-Shared-CSS-Resource:

.. note:: To allow many portlets to use a shared CSS resource, the resource should be registered as a portal-skin module. Find details in :ref:`Managing eXo Platform look and feel <PLFDevGuide.Site.LookAndFeel>`.

.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.JavaScript:

Adding JavaScript to a portlet
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In this example, you add a button to the Hello portlet and use jQuery to
register an event for the button. When you click the "here" button, a
popup will appear. The source code used in this section is
`here <https://github.com/exo-samples/docs-samples/tree/master/portlet/js>`__.

.. note:: This is a quick tutorial. You are strongly recommended to read
    :ref:`Developing JavaScript <PLFDevGuide.JavaScript>` chapter to 
    write your JavaScript safely in eXo Platform.

The registration of a JavaScript module is done via
``WEB-INF/gatein-resources.xml`` in your *.war*. For this purpose you
will make your webapp a :ref:`portal extension <PLFDevGuide.eXoAdd-ons.PortalExtension>`, 
by adding ``META-INF/exo-conf/configuration.xml`` file:

.. code:: xml

    <configuration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd"
        xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">
        <external-component-plugins>
            <target-component>org.exoplatform.container.definition.PortalContainerConfig</target-component>
            <component-plugin>
                <name>Add PortalContainer Definitions</name>
                <set-method>registerChangePlugin</set-method>
                <type>org.exoplatform.container.definition.PortalContainerDefinitionChangePlugin</type>
                <priority>101</priority>
                <init-params>
                    <values-param>
                        <name>apply.specific</name>
                        <value>portal</value>
                    </values-param>
                    <object-param>
                        <name>addDependencies</name>
                        <object type="org.exoplatform.container.definition.PortalContainerDefinitionChange$AddDependencies">
                            <field name="dependencies">
                                <collection type="java.util.ArrayList">
                                    <value>
                                        <string>hello-portlet</string>
                                    </value>
                                </collection>
                            </field>
                        </object>
                    </object-param>
                </init-params>
            </component-plugin>
        </external-component-plugins>
    </configuration>

The JavaScript is added like below:

1. Add the ``WEB-INF/gatein-resources.xml`` file:

   .. code:: xml

		<gatein-resources xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://www.gatein.org/xml/ns/gatein_resources_1_3 http://www.gatein.org/xml/ns/gatein_resources_1_3"
			xmlns="http://www.gatein.org/xml/ns/gatein_resources_1_3">
			<portlet>
				<name>Hello</name>
				<module>
					<script>
						<path>/js/foo.js</path>
					</script>
					<depends>
						<module>jquery</module>
						<as>jq</as>
					</depends>
				</module>
			</portlet>
		</gatein-resources>

2. Add the ``/js/foo.js`` file to ``src/main/webapp``:

   ::

		(function($) {
			$("body").on("click", ".hello .btn", function() {
				alert("Hello World!");
			});
		})(jq);

3. Modify the ``jsp/hello.jsp`` file:

   .. code:: html

		<div class='hello'>
			<h2>Hello</h2>
			<h6>Welcome to Hello portlet!</h6>
			<p>Click <a class='btn'>here</a> to display the popup window.</p>
			<p><i>Powered by eXo Platform.</i></p>
		</div>

The result when you click the "here" button:

|image11|

.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.Preferences:

Portlet preferences
~~~~~~~~~~~~~~~~~~~~

JSR-168 lets the implementations decide whether portlet preferences are
user-specific or not.

In this example you will learn that portlet preferences in eXo are not
user-specific. The source code of this example is
`here <https://github.com/exo-samples/docs-samples/tree/master/portlet/portlet-preferences>`__.

1. Create a new Maven project as follows:

   |image12|

2. Edit ``pom.xml``:

   .. code:: xml

		<project>
		  <modelVersion>4.0.0</modelVersion>
		  <groupId>com.acme.samples</groupId>
		  <artifactId>hello-portlet</artifactId>
		  <version>1.0</version>
		  <packaging>war</packaging>
		  <build>
			<finalName>hello-portlet</finalName>
		  </build>

		  <dependencies>
			<dependency>
			  <groupId>javax.portlet</groupId>
			  <artifactId>portlet-api</artifactId>
			  <version>2.0</version>
			  <scope>provided</scope>
			</dependency>
		  </dependencies>
		</project>

3. Edit ``web.xml``:

   .. code:: xml

       <web-app>
         <display-name>hello-portlet</display-name>
       </web-app>

4. Edit ``HelloPortlet.java``:

   .. code:: java

		package com.acme.samples;

		import java.io.IOException;

		import javax.portlet.GenericPortlet;
		import javax.portlet.PortletRequestDispatcher;
		import javax.portlet.RenderRequest;
		import javax.portlet.RenderResponse;
		import javax.portlet.PortletException;
		import javax.portlet.ActionRequest;
		import javax.portlet.ActionResponse;
		import javax.portlet.PortletMode;
		import javax.portlet.PortletPreferences;

		public class HelloPortlet extends GenericPortlet {

		  @Override
		  protected void doView(RenderRequest request, RenderResponse response) throws IOException, PortletException {

			PortletRequestDispatcher dispatcher = getPortletContext().getRequestDispatcher("/jsp/view.jsp");
			dispatcher.forward(request, response);
		  }

		  @Override
		  protected void doEdit(RenderRequest request, RenderResponse response) throws IOException, PortletException {

			PortletRequestDispatcher dispatcher = getPortletContext().getRequestDispatcher("/jsp/edit.jsp");
			dispatcher.forward(request, response);
		  }

		  @Override
		  public void processAction(ActionRequest request, ActionResponse response) throws IOException, PortletException {

			String borderColor = request.getParameter("border_color");
			PortletPreferences preferences = request.getPreferences();
			preferences.setValue("border_color", borderColor);
			preferences.store();

			response.setPortletMode(PortletMode.VIEW);
		  }
		}

5. Edit ``portlet.xml`` to support VIEW and EDIT modes:

   .. code:: xml

		<portlet-app version="2.0" xmlns="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd"
		  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		  xsi:schemaLocation="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd">
		  <portlet>
			<portlet-name>Hello</portlet-name>
			<portlet-class>com.acme.samples.HelloPortlet</portlet-class>
			<supports>
			  <mime-type>text/html</mime-type>
			  <portlet-mode>VIEW</portlet-mode>
			  <portlet-mode>EDIT</portlet-mode>
			</supports>
			<portlet-info>
			  <title>Portlet preferences</title>
			</portlet-info>
		  </portlet>
		</portlet-app>

6. Edit ``view.jsp``:

   .. code:: html

		<%@ page import="javax.portlet.PortletURL" %>
		<%@ page import="javax.portlet.PortletMode" %>
		<%@ page import="javax.portlet.PortletPreferences" %>
		<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet"%>
		<portlet:defineObjects/>

		<%
		  PortletURL editURL = renderResponse.createRenderURL();
		  editURL.setPortletMode(PortletMode.EDIT);

		  PortletPreferences preferences = renderRequest.getPreferences();
		  String borderColor  = preferences.getValue("border_color", "transparent");
		%>

		<div style="border: solid 1px <%=borderColor%>">
		  <a href="<%=editURL%>">Click here to switch to edit mode!</a>
		</div>

7. Edit ``edit.jsp``:

   .. code:: html

		<%@ page import="javax.portlet.PortletURL" %>
		<%@ page import="javax.portlet.PortletMode" %>
		<%@ page import="javax.portlet.PortletPreferences" %>
		<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet"%>
		<portlet:defineObjects/>

		<%
		  PortletURL viewURL = renderResponse.createRenderURL();
		  viewURL.setPortletMode(PortletMode.VIEW);

		  PortletURL actionURL = renderResponse.createActionURL();
		  PortletPreferences preferences = renderRequest.getPreferences();
		  String borderColor = preferences.getValue("border_color", "transparent");
		%>

		<div style="border: solid 1px <%=borderColor%>">
		  <a href="<%=viewURL%>">Click here to switch to view mode!</a>
		  <p></p>
		  <form action="<%=actionURL%>" method="POST">
			<label>Select border color:</label>
			<select name="border_color">
			  <option value="transparent" <%=(borderColor == "transparent" ? "selected=\"selected\"" : "")%>>None</option>
			  <option value="red" <%=(borderColor == "red" ? "selected=\"selected\"" : "")%>>Red</option>
			  <option value="blue" <%=(borderColor == "blue" ? "selected=\"selected\"" : "")%>>Blue</option>
			</select>
			<input type="submit" value="Save"/>
		  </form>
		</div>

After deployment, add the portlet to a page and test:

|image13|

.. note:: Again, the portlet preferences are not user-specific. In this example, when a user changes the value of border color, it affects other users.

.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.JSF2_JPB:

JSF2 portlet example
~~~~~~~~~~~~~~~~~~~~~~

In this example, you write a JSF2 portlet using `JBoss Portlet Bridge (JPB) <https://docs.jboss.org/author/display/PBRDOC/Home>`__.

The `code sample <https://github.com/exo-samples/docs-samples/tree/4.3.x/portlet/jsf2-portlet>`__
originates from `JPB project <https://github.com/portletbridge/portletbridge/tree/4.3.x/examples/jsf2portlet>`__,
and is modified in this example so that you can build it independently.

1. Create a new Maven project as follows:

   |image14|

2. Edit ``pom.xml``:

   .. code:: xml

		<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
			<modelVersion>4.0.0</modelVersion>
			<groupId>org.jboss.portletbridge.examples</groupId>
			<artifactId>jsf2portlet-example</artifactId>
			<packaging>war</packaging>
			<name>JSF 2 Portlet Example</name>
			<version>1.0</version>

			<dependencies>
				<dependency>
					<groupId>com.sun.faces</groupId>
					<artifactId>jsf-api</artifactId>
					<version>2.1.14</version>
				</dependency>
				<dependency>
					<groupId>com.sun.faces</groupId>
					<artifactId>jsf-impl</artifactId>
					<scope>runtime</scope>
					<version>2.1.14</version>
				</dependency>
				<dependency>
					<groupId>org.jboss.portletbridge</groupId>
					<artifactId>portletbridge-api</artifactId>
					<version>3.1.2.Final</version>
				</dependency>
				<dependency>
					<groupId>org.jboss.portletbridge</groupId>
					<artifactId>portletbridge-impl</artifactId>
					<version>3.1.2.Final</version>
					<scope>runtime</scope>
				</dependency>
			</dependencies>

			<build>
				<finalName>jsf2portlet-example</finalName>
			</build>
		</project>

Pay attention to the ``runtime`` scope. This tells Maven to include the
dependencies to ``WEB-INF/lib``.

.. note:: The portlet bridge libraries must be available and are usually bundled with the ``WEB-INF/lib`` directory of the web archive.

3. Write the managed bean ``Echo.java``:

   .. code:: java

		package com.acme.samples.jsf2portlet;

		import javax.faces.bean.ManagedBean;
		import javax.faces.bean.SessionScoped;
		import javax.faces.event.ActionEvent;

		@ManagedBean(name = "echo")
		@SessionScoped
		public class Echo {

			String str = "hello";

			public String getStr() {
				return str;
			}

			public void setStr(String str) {
				this.str = str;
			}

			public void reset(ActionEvent ae) {
				str = "";
			}

		}

4. Edit ``web.xml``:

   .. code:: xml

		<?xml version="1.0"?>
		<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xmlns="http://java.sun.com/xml/ns/javaee" 
			xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"
			version="2.5">

			<display-name>JSF2 Portlet Example</display-name>
			<context-param>
				<param-name>javax.portlet.faces.RENDER_POLICY</param-name>
				<param-value>ALWAYS_DELEGATE</param-value>
			</context-param>
			<context-param>
				<param-name>javax.faces.FACELETS_VIEW_MAPPINGS</param-name>
				<param-value>*.xhtml</param-value>
			</context-param>
			<context-param>
				<param-name>javax.faces.DEFAULT_SUFFIX</param-name>
				<param-value>.xhtml</param-value>
			</context-param>
			<servlet>
				<servlet-name>Faces Servlet</servlet-name>
				<servlet-class>javax.faces.webapp.FacesServlet</servlet-class>
				<load-on-startup>1</load-on-startup>
			</servlet>
			<servlet-mapping>
				<servlet-name>Faces Servlet</servlet-name>
				<url-pattern>*.faces</url-pattern>
			</servlet-mapping>
		</web-app>

The context-params are explained at
http://myfaces.apache.org/core21/myfaces-impl/webconfig.html.

5. Edit ``*.xhtml`` files:

	-  ``main.xhtml``:

	   .. code:: xml

		   <f:view id="ajaxEcho" xmlns="http://www.w3.org/1999/xhtml" xmlns:ui="http://java.sun.com/jsf/facelets"
			   xmlns:f="http://java.sun.com/jsf/core" xmlns:h="http://java.sun.com/jsf/html">
			   <h:head />
			   <h:body>
				   <h2>JSF 2 portlet</h2>
				   <p>this is simple JSF 2.0 portlet with AJAX echo.</p>
				   <h:form id="form1">
				   Output: <h:outputText id="out1" value="#{echo.str}" />
					   <br />
				   Input: <h:inputText id="in1" autocomplete="off" value="#{echo.str}">
						   <f:ajax render="out1" />
					   </h:inputText>
					   <br />
					   <!-- A no-op button, just to lose the focus from "in1" -->
					   <h:commandButton id="button1" value="Echo" type="button" />
					   <br />
					   <!-- Resets the string, refreshes the form, but not the page -->
					   <h:commandButton id="reset" value="reset" actionListener="#{echo.reset}">
						   <f:ajax render="@form" />
					   </h:commandButton>
					   <!-- Reloads the page, doesn't reset the string -->
					   <h:commandButton id="reload" value="reload" />
					   <h:messages />
				   </h:form>
			   </h:body>
		   </f:view>

   Here the tag *f:ajax* is used.

	-  ``edit.xhtml``:

	   .. code:: xml

		   <ui:composition xmlns="http://www.w3.org/1999/xhtml" xmlns:f="http://java.sun.com/jsf/core"

			   xmlns:ui="http://java.sun.com/jsf/facelets" xmlns:h="http://java.sun.com/jsf/html">

			  Edit Mode
		   </ui:composition>

	-  ``help.xhtml``:

	   .. code:: xml

		   <ui:composition xmlns="http://www.w3.org/1999/xhtml" xmlns:f="http://java.sun.com/jsf/core"
			   xmlns:ui="http://java.sun.com/jsf/facelets" xmlns:h="http://java.sun.com/jsf/html">

			  Help Mode
		   </ui:composition>

6. Edit ``portlet.xml``:

   .. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<portlet-app xmlns="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd" version="2.0"
			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd">
			<portlet>
				<portlet-name>jsf2portlet</portlet-name>
				<portlet-class>javax.portlet.faces.GenericFacesPortlet</portlet-class>
				<init-param>
					<name>javax.portlet.faces.defaultViewId.view</name>
					<value>/pages/main.xhtml</value>
				</init-param>
				<init-param>
					<name>javax.portlet.faces.defaultViewId.edit</name>
					<value>/pages/edit.xhtml</value>
				</init-param>
				<init-param>
					<name>javax.portlet.faces.defaultViewId.help</name>
					<value>/pages/help.xhtml</value>
				</init-param>
				<init-param>
					<name>javax.portlet.faces.preserveActionParams</name>
					<value>true</value>
				</init-param>
				<expiration-cache>0</expiration-cache>
				<supports>
					<mime-type>text/html</mime-type>
					<portlet-mode>VIEW</portlet-mode>
					<portlet-mode>EDIT</portlet-mode>
					<portlet-mode>HELP</portlet-mode>
				</supports>
				<portlet-info>
					<title>JSF 2.0 AJAX Portlet</title>
				</portlet-info>
			</portlet>
		</portlet-app>

This last step makes the JSF2 application a portlet.

Deploy the portlet, add it to a page as instructed in previous sections,
and test it:

|image15|

Some references:

-  `Java Server Faces, Oracle
   Tutorial <http://docs.oracle.com/javaee/6/tutorial/doc/bnaph.html>`__

-  `Ajax with JSF, Oracle
   Tutorial <http://docs.oracle.com/javaee/6/tutorial/doc/gkiow.html>`__

.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.JSF2_CDI:

JSF2 portlet with CDI
~~~~~~~~~~~~~~~~~~~~~~

In :ref:`previous section <PLFDevGuide.DevelopingApplications.DevelopingPortlet.JSF2_JPB>`,
you have learnt to write JSF2 portlet. In this section, your JSF2
portlet will utilize CDI (Contexts and Dependency Injection).

This section will not explain JBoss Portlet Brigde again, so get back to
the previous section if necessary.

The code sample can be found
`here <https://github.com/exo-samples/docs-samples/tree/4.3.x/portlet/jsf2-portlet-cdi>`__.


.. note:: Currently you could not use JSF together with CDI in Tomcat. This tutorial is for JBoss only.

		  Also note that the deployment of this portlet does not follow :ref:`Portlet deployment <PLFDevGuide.DevelopingApplications.DevelopingPortlet.Deployment>`
		  section completely, so do not miss the :ref:`deployment <PLFDevGuide.DevelopingApplications.DevelopingPortlet.JSF2_CDI.Deployment-in-JBoss>`
		  part at the end of this tutorial.

**So why CDI?**

If you want to get a quick understanding about CDI, and current
Dependency Injection frameworks, `this
introduction <https://jaxenter.com/tutorial-introduction-to-cdi-contexts-and-dependency-injection-for-java-ee-jsr-299-104536.html>`__
may help. As CDI is a part of Java EE specification, `Oracle's
Documentation <https://docs.oracle.com/javaee/7/tutorial/partcdi.htm#GJBNR>`__
is always recommended.

Note this tutorial sticks with `Weld, CDI implementation of
JBoss <http://weld.cdi-spec.org/documentation/>`__.

In this tutorial, you learn the basic CDI via an example, in which you
use *@Inject* annotation, with some *Scopes* and *Qualifiers*.

In the example, your JSF2 portlet is a form in which users input email
subject/body and press buttons to send emails. There are two kinds of
recipients - "customers" and "partners" - so you have two buttons. See
the screenshot below:

|image16|

The ``To`` mail lists are different in the two cases. So "customers"
addresses are provided by a Bean, and "partners" are provided by a
modified one of that Bean. Both are at ``ApplicationScoped``.

The ``From`` field will be the email of the logged-in user. It is
provided by another Bean at ``SessionScoped``.

The base idea of CDI is: your application (the portlet in this example)
does not create the Mail list providers, but let CDI create and manage
the lifecycle of them, so the application always gets the same object
for the same context. As important as that, it is CDI which knows the
chain of the dependencies, not the application.

The three Beans are declared by annotations, but need to be packaged
together with a ``beans.xml`` file.

Now let's start your project. Again, see the full code sample at
`GitHub <https://github.com/exo-samples/docs-samples/tree/4.3.x/portlet/jsf2-portlet-cdi>`__.

1. Create a Maven project with the following structure:

   |image17|

2. In ``pom.xml``, add the dependencies of JSF, JPB and CDI, and also 
   some eXo dependencies to work with eXo Mail and Social services.

   .. code:: xml

		<!-- CDI (Contexts and Dependency Injection) -->
		<dependency>
			<groupId>javax.inject</groupId>
			<artifactId>javax.inject</artifactId>
			<version>1</version>
			<scope>provided</scope>
		</dependency>
		<dependency>
			<groupId>javax.enterprise</groupId>
			<artifactId>cdi-api</artifactId>
			<version>1.0-SP4</version>
			<scope>provided</scope>
		</dependency>
		<dependency>
			<groupId>org.gatein</groupId>
			<artifactId>cdi-portlet-integration</artifactId>
			<version>1.0.3.Final</version>
			<scope>runtime</scope>
		</dependency>
		<!-- eXo -->
		<dependency>
			<groupId>org.exoplatform.core</groupId>
			<artifactId>exo.core.component.security.core</artifactId>
			<version>2.5.13-GA</version>
			<scope>provided</scope>
		</dependency>
		<dependency>
			<groupId>org.exoplatform.social</groupId>
			<artifactId>social-component-core</artifactId>
			<version>4.2.0</version>
			<scope>provided</scope>
		</dependency>

3. Edit the ``WEB-INF/beans.xml`` file:

   .. code:: xml

		<?xml version="1.0"?>
		<beans xmlns="http://java.sun.com/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://jboss.org/schema/cdi/beans_1_0.xsd">
			<!-- This file is required to enable CDI for this web-app. There is nothing 
				here because the beans will be declared using annotations. In case your beans 
				are packaged in jar, this file should be placed under META-INF/ folder. -->
		</beans>

4. Edit the ``WEB-INF/portlet.xml`` file. You need to configure the 
   portlet filter to the ``org.gatein.cdi.PortletCDIFilter`` class.

   .. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<portlet-app version="2.0"
			xmlns="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd"
			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd
		  http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd">
			<portlet>
				<portlet-name>jsf2portlet-cdi-example</portlet-name>
				<portlet-class>javax.portlet.faces.GenericFacesPortlet</portlet-class>
				<init-param>
					<name>javax.portlet.faces.defaultViewId.view</name>
					<value>/pages/main.xhtml</value>
				</init-param>
				<init-param>
					<name>javax.portlet.faces.preserveActionParams</name>
					<value>true</value>
				</init-param>
				<expiration-cache>0</expiration-cache>
				<supports>
					<mime-type>text/html</mime-type>
					<portlet-mode>VIEW</portlet-mode>
				</supports>
				<portlet-info>
					<title>JSF2 Portlet CDI</title>
				</portlet-info>
			</portlet>
			<filter>
				<filter-name>PortletCDIFilter</filter-name>
				<filter-class>org.gatein.cdi.PortletCDIFilter</filter-class>
				<lifecycle>ACTION_PHASE</lifecycle>
				<lifecycle>EVENT_PHASE</lifecycle>
				<lifecycle>RENDER_PHASE</lifecycle>
				<lifecycle>RESOURCE_PHASE</lifecycle>
			</filter>
			<filter-mapping>
				<filter-name>PortletCDIFilter</filter-name>
				<portlet-name>jsf2portlet-cdi-example</portlet-name>
			</filter-mapping>
		</portlet-app>

5. Edit the ``WEB-INF/web.xml`` file. It is the same as the basic JSF2
   portlet, so not repeated here.

6. Edit the ``pages/main.xhtml`` file.

   .. code:: xml

		<f:view id="ajaxEcho" xmlns="http://www.w3.org/1999/xhtml" xmlns:ui="http://java.sun.com/jsf/facelets"
		xmlns:f="http://java.sun.com/jsf/core" xmlns:h="http://java.sun.com/jsf/html">
			<h:head />
			<h:body>
				<h2>JSF 2 portlet</h2>
				<h:form id="form1">
					Subject: <h:inputText id="subject" autocomplete="off" value="#{mailSender.subject}"></h:inputText>
					<br/>
					Message: <h:inputTextarea id="body" value="#{mailSender.body}"></h:inputTextarea>
					<br/>
					<h:commandButton id="sendCustomer" value="Send Customers" actionListener="#{mailSender.sendCustomers}"></h:commandButton>
					<br/>
					<h:commandButton id="sendPartners" value="Send Partners" actionListener="#{mailSender.sendPartners}"></h:commandButton>
				</h:form>
			</h:body>
		</f:view>

7. Create the ``MailList.java`` interface:

   .. code:: java

		package org.exoplatform.samples.jsf2portlet.cdi;

		public interface MailList {
		  
		  public String getMailList();
		}

There will be two implementations of this interface. In companion with
CDI, you annotate the two with
`Qualifiers <https://docs.oracle.com/javaee/7/tutorial/cdi-basic006.htm#GJBCK>`__.
For that, you will create two qualifiers, *Customer* and *Partner*.

8. Edit the two qualifiers. In ``Customer.java``:

   .. code:: java

		package org.exoplatform.samples.jsf2portlet.cdi;

		import static java.lang.annotation.ElementType.FIELD;
		import static java.lang.annotation.ElementType.METHOD;
		import static java.lang.annotation.ElementType.PARAMETER;
		import static java.lang.annotation.ElementType.TYPE;
		import java.lang.annotation.Retention;
		import static java.lang.annotation.RetentionPolicy.RUNTIME;
		import java.lang.annotation.Target;
		import javax.inject.Qualifier;

		@Qualifier
		@Retention(RUNTIME)
		@Target({TYPE, METHOD, FIELD, PARAMETER})
		public @interface Customer {}

   And do the same with ``Partner.java``.

9. Implement the MailList interface. Use the qualifier *Customer* in
   ``CustomerMailList.java``:

   .. code:: java

		package org.exoplatform.samples.jsf2portlet.cdi;

		import javax.faces.bean.ApplicationScoped;
		import javax.faces.bean.ManagedBean;

		@ManagedBean
		@ApplicationScoped
		@Customer
		public class CustomerMailList implements MailList{
		  
		  public String getMailList() {
			return "user1@example.com, user2@example.com";
		  }
		}

   Do it similarly in ``PartnerMailList.java``, use the qualifier
   *Partner*.

10. Edit ``UserBean.java``. This bean provides the current user email, 
    so its scope should be SessionScoped.

    .. code:: java

		package org.exoplatform.samples.jsf2portlet.cdi;

		import javax.faces.bean.ManagedBean;
		import javax.faces.bean.SessionScoped;

		import org.exoplatform.container.ExoContainerContext;
		import org.exoplatform.services.security.ConversationState;
		import org.exoplatform.social.core.manager.IdentityManager;
		import org.exoplatform.social.core.identity.model.*;
		import org.exoplatform.social.core.identity.provider.OrganizationIdentityProvider;

		@ManagedBean
		@SessionScoped
		public class UserBean {
		  
		  private String userEmail;
		  
		  public UserBean() {
			IdentityManager identityManager = (IdentityManager) ExoContainerContext.getCurrentContainer().getComponentInstanceOfType(IdentityManager.class);
			String currentUserId = ConversationState.getCurrent().getIdentity().getUserId();
			Identity currentIdentity = identityManager.getOrCreateIdentity(OrganizationIdentityProvider.NAME, currentUserId, false);
			Profile profile = currentIdentity.getProfile();
			userEmail = profile.getEmail();
		  }
		  
		  public String getUserEmail() {
			return userEmail;
		  }
		}

    Now you have all dependencies that your JSF portlet will use. So 
    let's finish the portlet.

11. Edit the ``MailSender.java`` file:

    .. code:: java

		package org.exoplatform.samples.jsf2portlet.cdi;

		import javax.inject.*;
		import javax.faces.bean.*;

		import org.exoplatform.services.mail.MailService;
		import org.exoplatform.services.mail.Message;
		import org.exoplatform.commons.utils.CommonsUtils;

		@ManagedBean
		public class MailSender {
		  
		  private String subject, body;
		  
		  @Inject @Customer MailList customerMailList;
		  @Inject @Partner MailList partnerMailList;
		  @Inject UserBean userBean;
		  
		  public String getSubject() {
			return subject;
		  }
		  public void setSubject(String subject) {
			this.subject = subject;
		  }
		  public String getBody() {
			return body;
		  }
		  public void setBody(String body) {
			this.body = body;
		  }
		  
		  public void sendCustomers() {
			Message message = new Message();
			message.setSubject(subject);
			message.setBody(body);
			message.setFrom(userBean.getUserEmail());
			message.setTo(customerMailList.getMailList());
			
			try {
			  ((MailService) CommonsUtils.getService(MailService.class)).sendMessage(message);
			} catch (Exception e) {
			  e.printStackTrace();
			}
		  }
		  
		  public void sendPartners() {
			Message message = new Message();
			message.setSubject(subject);
			message.setBody(body);
			message.setFrom(userBean.getUserEmail());
			message.setTo(partnerMailList.getMailList());
			
			try {
			  ((MailService) CommonsUtils.getService(MailService.class)).sendMessage(message);
			} catch (Exception e) {
			  e.printStackTrace();
			}
		  } 
		}
    
.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.JSF2_CDI.Deployment-in-JBoss:    

**Deployment in eXo Platform JBoss**

Your webapp needs to be scanned by Weld so you will not deploy it in
``standalone/deployments`` as other portlet applications. Instead,
deploy it into ``platform.ear`` and add a module in ``application.xml``.

1. ``target/jsf2portlet-cdi-example.war`` into
   ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear``.

2. Edit ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear/META-INF/application.xml``
   to add a module like the following. The module must be added before 
   the **starter** module, so on top if you like that:

   .. code:: xml

		<module>
			<web>
				<web-uri>jsf2portlet-cdi-example.war</web-uri>
				<context-root>jsf2portlet-cdi-example</context-root>
			</web>
		</module>

   Then follow the :ref:`Portlet deployment <#PLFDevGuide.DevelopingApplications.DevelopingPortlet.Deployment>`
   section to register and add the portlet to a page for testing.

.. note:: Starting from eXo Platform 5.0, we upgraded to JBoss EAP 7.0 which uses `Contexts and Dependency Injection (CDI) 1.2 <https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.0/html/development_guide/contexts_and_dependency_injection_cdi#introduction_to_cdi>`__.
		  CDI 1.2 comes with the new notion of implicit bean archive allowing
		  to scan war archives for annotations to process by Weld (the JBoss
		  implementation of CDI). This new feature has some conflicts with our
		  development and thus it has been disabled by default for eXo Platform EAR
		  including its addons.

.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.PublicRenderParameter:

Public render parameters
~~~~~~~~~~~~~~~~~~~~~~~~~

In this example you write two portlets: one sets a value of a public
parameter, and the other consumes the value.

The source code of this example is
`here <https://github.com/exo-samples/docs-samples/tree/4.3.x/portlet/public-render-parameters>`__.

1. Create a new Maven project as follows:

   |image18|

2. Edit ``pom.xml``:

   .. code:: xml

		<project>
		  <modelVersion>4.0.0</modelVersion>
		  <groupId>com.acme.samples</groupId>
		  <artifactId>hello-portlet</artifactId>
		  <version>1.0</version>
		  <packaging>war</packaging>
		  <build>
			<finalName>prp-portlet</finalName>
		  </build>

		  <dependencies>
			<dependency>
			  <groupId>javax.portlet</groupId>
			  <artifactId>portlet-api</artifactId>
			  <version>2.0</version>
			  <scope>provided</scope>
			</dependency>
		  </dependencies>
		</project>

3. Edit ``web.xml``:

   .. code:: xml

		<web-app>
		  <display-name>prp-portlet</display-name>
		</web-app>

4. Edit ``portlet.xml``:

   .. code:: xml

		<portlet-app version="2.0" xmlns="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd"
		  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		  xsi:schemaLocation="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd">
		  <portlet>
			<portlet-name>Sharing-PRP-Portlet</portlet-name>
			<portlet-class>com.acme.samples.SharingPRPPortlet</portlet-class>
			<supports>
			  <mime-type>text/html</mime-type>
			</supports>
			<portlet-info>
			  <title>Sharing-PRP-Portlet</title>
			</portlet-info>
			<supported-public-render-parameter>current_time</supported-public-render-parameter>
		  </portlet>
		  <portlet>
			<portlet-name>Consuming-PRP-Portlet</portlet-name>
			<portlet-class>com.acme.samples.ConsumingPRPPortlet</portlet-class>
			<supports>
			  <mime-type>text/html</mime-type>
			</supports>
			<portlet-info>
			  <title>Consuming-PRP-Portlet</title>
			</portlet-info>
			<supported-public-render-parameter>current_time</supported-public-render-parameter>
		  </portlet>
		  <public-render-parameter>
			<identifier>current_time</identifier>
			<name>current_time</name>
		  </public-render-parameter>
		</portlet-app>

	-  In case you pack the two portlets separately, the two ``portlet.xml``
	   files must repeat the same *public-render-parameter* and
	   *supported-public-render-parameter* elements. In other words, there
	   is no difference between the sharing portlet and the consuming one's
	   configuration.

5. Edit ``SharingPRPPortlet.java``:

   .. code:: java

		package com.acme.samples;

		import java.io.IOException;
		import java.io.PrintWriter;
		import java.util.Date;

		import javax.portlet.GenericPortlet;
		import javax.portlet.RenderRequest;
		import javax.portlet.RenderResponse;
		import javax.portlet.PortletException;
		import javax.portlet.ActionRequest;
		import javax.portlet.ActionResponse;
		import javax.portlet.PortletURL;

		public class SharingPRPPortlet extends GenericPortlet {

		  @Override
		  public void processAction(ActionRequest request, ActionResponse response) throws IOException, PortletException {
			response.setRenderParameter("current_time", new Date(System.currentTimeMillis()).toString());
		  }

		  @Override
		  public void doView(RenderRequest request, RenderResponse response) throws IOException, PortletException {
			PortletURL actionURL = response.createActionURL();
			PrintWriter w = response.getWriter();
			w.write("<p>Click <a href=\"" + actionURL.toString() + "\">here</a> to execute processAction()</p>");
			w.write("<span>" + request.getParameter("current_time") + "</span>");
			w.close();
		  }
		}

5. Edit ``ConsumingPRPPortlet.java``:

   .. code:: java

		package com.acme.samples;

		import java.io.IOException;
		import java.io.PrintWriter;
		import java.util.Map;

		import javax.portlet.GenericPortlet;
		import javax.portlet.RenderRequest;
		import javax.portlet.RenderResponse;
		import javax.portlet.PortletException;
		import javax.portlet.ActionRequest;
		import javax.portlet.ActionResponse;

		public class ConsumingPRPPortlet extends GenericPortlet {

		  @Override
		  public void doView(RenderRequest request, RenderResponse response) throws IOException, PortletException {
			Map<String, String[]> paramNames = request.getPublicParameterMap();
			PrintWriter w = response.getWriter();
			for (String name : paramNames.keySet()) {
			  String value = request.getParameter(name);
			  w.write("<p>" + "*<b>" + name + "</b>: " + value + "</p>");
			}
			w.close();
		  }
		}

	-  In ``SharingPRPPortlet.java``, the ``current_time`` parameter is set
	   by the ``processAction()`` method, so the ``doView()`` method
	   provides a link to trigger ``processAction()``.

	-  While both the portlets prints ``current_time``, the
	   ``ConsumingPRPPortlet`` portlet gets and prints all the public
	   parameters that it supports.

	 Add the two portlets to a page and test them:

|image19|

.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.ContextualProperty:

Contextual properties
~~~~~~~~~~~~~~~~~~~~~~

ContextualPropertyManager service and plugins give you a way to access
information of portal context, like site type, page name and node URI.
You can also inject a property as you want.


.. note:: Such properties are accessed in the same way as public render
		  parameters, but unlike public render parameters, contextual
		  properties values cannot and should not be changed by the portlet.

In this example, you write a ContextualPropertyManager plugin that adds
a parameter (called *current\_time*), and a portlet that gets all the
public contextual properties, including your one and the built-in ones.

The source code of this example is
`here <https://github.com/exo-samples/docs-samples/tree/master/portlet/contextual-properties>`__.

**The ContextualPropertyManager plugin project**

1. Create a new Maven project as follows:

   |image20|

2. Edit ``pom.xml``:

   .. code:: xml

		<project>
		  <modelVersion>4.0.0</modelVersion>
		  <groupId>com.acme.samples</groupId>
		  <artifactId>cp-plugin</artifactId>
		  <version>1.0</version>
		  <packaging>jar</packaging>

		  <dependencies>
			<dependency>
			  <groupId>org.gatein.portal</groupId>
			  <artifactId>exo.portal.webui.portal</artifactId>
			  <version>3.5.10.Final</version>
			  <scope>provided</scope>
			</dependency>
			<dependency>
			  <groupId>org.exoplatform.kernel</groupId>
			  <artifactId>exo.kernel.container</artifactId>
			  <version>2.4.9-GA</version>
			  <scope>provided</scope>
			</dependency>
		  </dependencies>
		</project>

3. Edit ``CPPlugin.java``:

   .. code:: java

		package com.acme.samples;

		import java.util.Map;
		import java.util.Date;

		import org.exoplatform.portal.application.state.AbstractContextualPropertyProviderPlugin;
		import javax.xml.namespace.QName;
		import org.exoplatform.container.xml.InitParams;
		import org.exoplatform.portal.webui.application.UIPortlet;

		public class CPPlugin extends AbstractContextualPropertyProviderPlugin {

		  private QName myQName;

		  public CPPlugin (InitParams params) {

			super(params);
			this.myQName = new QName(namespaceURI, "current_time");
		  }

		  @Override
		  public void getProperties(UIPortlet portletWindow, Map<QName, String[]> properties) {

			addProperty(properties, myQName, new Date(System.currentTimeMillis()).toString());
		  }
		}

4. Edit ``conf/portal/configuration.xml``:

   .. code:: xml

		<configuration>
		  <external-component-plugins>
			<target-component>org.exoplatform.portal.application.state.ContextualPropertyManager</target-component>
			<component-plugin>
			  <name>CPPlugin</name>
			  <set-method>addPlugin</set-method>
			  <type>com.acme.samples.CPPlugin</type>
			  <priority>1</priority>
			  <init-params>
				<value-param>
				  <name>namespaceURI</name>
				  <description>Namespace URI</description>
				  <value>http://www.gatein.org/xml/ns/prp_1_0</value>
				</value-param>
			  </init-params>
			</component-plugin>
		  </external-component-plugins>
		</configuration>

5. Build the project and install ``target/cp-plugin-1.0.jar`` to the
   ``lib`` folder of the server.

**The portlet project**

1. Create a Maven project as follows:

   |image21|

2. Edit ``pom.xml``:

   .. code:: xml

		<project>
		  <modelVersion>4.0.0</modelVersion>
		  <groupId>com.acme.samples</groupId>
		  <artifactId>hello-portlet</artifactId>
		  <version>1.0</version>
		  <packaging>war</packaging>
		  <build>
			<finalName>hello-portlet</finalName>
		  </build>

		  <dependencies>
			<dependency>
			  <groupId>javax.portlet</groupId>
			  <artifactId>portlet-api</artifactId>
			  <version>2.0</version>
			  <scope>provided</scope>
			</dependency>
		  </dependencies>
		</project>

3. Edit ``web.xml``:

   .. code:: xml

		<web-app>
		  <display-name>hello-portlet</display-name>
		</web-app>

4. Edit ``portlet.xml``:

   .. code:: xml

		<portlet-app version="2.0" xmlns="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd"
		  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		  xsi:schemaLocation="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd">
		  <portlet>
			<portlet-name>Hello</portlet-name>
			<portlet-class>com.acme.samples.HelloPortlet</portlet-class>
			<supports>
			  <mime-type>text/html</mime-type>
			</supports>
			<portlet-info>
			  <title>Contextual properties</title>
			</portlet-info>
			<supported-public-render-parameter>navigation_uri</supported-public-render-parameter>
			<supported-public-render-parameter>page_name</supported-public-render-parameter>
			<supported-public-render-parameter>site_type</supported-public-render-parameter>
			<supported-public-render-parameter>site_name</supported-public-render-parameter>
			<supported-public-render-parameter>window_width</supported-public-render-parameter>
			<supported-public-render-parameter>window_height</supported-public-render-parameter>
			<supported-public-render-parameter>window_show_info_bar</supported-public-render-parameter>
			<supported-public-render-parameter>current_time</supported-public-render-parameter>
		  </portlet>

		  <public-render-parameter>
			<identifier>navigation_uri</identifier>
			<qname xmlns:prp='http://www.gatein.org/xml/ns/prp_1_0'>prp:navigation_uri</qname>
		  </public-render-parameter>
			<public-render-parameter>
			<identifier>page_name</identifier>
			<qname xmlns:prp='http://www.gatein.org/xml/ns/prp_1_0'>prp:page_name</qname>
		  </public-render-parameter>
		  <public-render-parameter>
			<identifier>site_type</identifier>
			<qname xmlns:prp='http://www.gatein.org/xml/ns/prp_1_0'>prp:site_type</qname>
		  </public-render-parameter>
		  <public-render-parameter>
			<identifier>site_name</identifier>
			<qname xmlns:prp='http://www.gatein.org/xml/ns/prp_1_0'>prp:site_name</qname>
		  </public-render-parameter>
		  <public-render-parameter>
			<identifier>window_width</identifier>
			<qname xmlns:prp='http://www.gatein.org/xml/ns/prp_1_0'>prp:window_width</qname>
		  </public-render-parameter>
		  <public-render-parameter>
			<identifier>window_height</identifier>
			<qname xmlns:prp='http://www.gatein.org/xml/ns/prp_1_0'>prp:window_height</qname>
		  </public-render-parameter>
		  <public-render-parameter>
			<identifier>window_show_info_bar</identifier>
			<qname xmlns:prp='http://www.gatein.org/xml/ns/prp_1_0'>prp:window_show_info_bar</qname>
		  </public-render-parameter>
		  <public-render-parameter>
			<identifier>current_time</identifier>
			<qname xmlns:prp='http://www.gatein.org/xml/ns/prp_1_0'>prp:current_time</qname>
		  </public-render-parameter>
		</portlet-app>

5. Edit ``HelloPortlet.java`` by simply dispatching requests to
   ``view.jsp``:

   .. code:: java

		package com.acme.samples;

		import java.io.IOException;
		import java.util.Date;
		import java.io.PrintWriter;

		import javax.portlet.GenericPortlet;
		import javax.portlet.PortletRequestDispatcher;
		import javax.portlet.RenderRequest;
		import javax.portlet.RenderResponse;
		import javax.portlet.PortletException;
		import javax.portlet.ActionRequest;
		import javax.portlet.ActionResponse;

		public class HelloPortlet extends GenericPortlet {

		  @Override
		  public void doView(RenderRequest request, RenderResponse response) throws IOException, PortletException {

			PortletRequestDispatcher dispatcher = getPortletContext().getRequestDispatcher("/jsp/view.jsp");
			dispatcher.include(request, response);
		  }
		}

6. Edit ``view.jsp``:

   ::

		<%
		  String navigation_uri = request.getParameter("navigation_uri");
		  String page_name = request.getParameter("page_name");
		  String site_type = request.getParameter("site_type");
		  String site_name = request.getParameter("site_name");
		  String window_width = request.getParameter("window_width");
		  String window_height = request.getParameter("window_height");
		  String window_show_info_bar = request.getParameter("window_show_info_bar");
		  String current_time = request.getParameter("current_time");
		%>

		<style>
		  #contextual_properties td:last-child {font-style: italic}
		  #contextual_properties tr, td {padding: 5px}
		</style>
		<table border="1" id="contextual_properties" style="width: auto; border-spacing: 5px">
		  <tr><td>navigation_uri</td><td><%=navigation_uri%></td></tr>
		  <tr><td>page_name</td><td><%=page_name%></td></tr>
		  <tr><td>site_type</td><td><%=site_type%></td></tr>
		  <tr><td>site_name</td><td><%=site_name%></td></tr>
		  <tr><td>window_width</td><td><%=window_width%></td></tr>
		  <tr><td>window_height</td><td><%=window_height%></td></tr>
		  <tr><td>window_show_info_bar</td><td><%=window_show_info_bar%></td></tr>
		  <tr><td>current_time</td><td><%=current_time%></td></tr>
		</table>

   After deployment, add the portlet to a page and test:

   |image22|

The properties ``window_width`` and ``window_height`` are the size of
the portlet instance. You can change these parameters, and
``window_show_info_bar`` as well, in Portlet Setting menu (by clicking
Edit --> PageEdit --> Layout).

.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.Juzu.HelloJuzu:

Juzu portlet
~~~~~~~~~~~~~

The source code used in this tutorial is
`here <https://github.com/exo-samples/docs-samples/tree/master/portlet/juzu-portlet>`__.

Juzu framework offers the following features to ease portlet
development:

-  Be able to develop your portlet like a standalone application, and
   simply use the *@Portlet* annotation to make it a portlet.

-  Live mode: no need to re-deploy your application, because changes are
   applied when you save your files.

-  Templating: use Groovy, type safe parameters, template validation at
   compilation.

-  Dependency injection - JSR-330 (CDI, Spring, Guice).

-  Modular architecture with plugins.

**References**

-  Juzu documentation: http://juzuweb.org - learn directly from this
   site where Juzu team will update tutorials, references and Javadocs.

-  Juzu source code: https://github.com/juzu/juzu.

This tutorial focuses on Juzu portlet deployment in PRODUCT Tomcat and
JBoss.

The dependencies are different for each server and each dependency
injection implementation, so the project will use different Maven build
profiles for packaging in each case:

-  Use ``mvn clean package -Pplf-tomcat-guice`` to build a package for
   Tomcat using Guice.

-  Use ``mvn clean package -Pplf-jboss-guice`` to build a package for
   JBoss using Guice.

-  Use ``mvn clean package -Pplf-tomcat-spring`` to build a package for
   Tomcat using Spring.

-  Use ``mvn clean package -Pplf-jboss-spring`` to build a package for
   JBoss using Spring.

.. note:: Currently, only Guice and Spring are covered in this tutorial. The
		  other implementation, Weld, will be documented later.

1. Create a Maven project as follows:

   |image23|

.. note:: You can use the following archetype to generate project but make
		  sure you will modify every single file in accordance with this
		  tutorial.
		  
		  ::

			*mvn archetype:generate -DarchetypeGroupId=org.juzu
			-DarchetypeArtifactId=juzu-archetype -DarchetypeVersion=1.0.0
			-DgroupId=org.exoplatform.samples -DartifactId=hellojz
			-Dversion=5.1.x*

2. Edit ``Controller.java``:

   .. code:: java

		package org.exoplatform.samples;

		import juzu.Path;
		import juzu.View;
		import juzu.Response;
		import juzu.template.Template;

		import javax.inject.Inject;
		import java.io.IOException;

		public class Controller {

		  @Inject
		  @Path("index.gtmpl")
		  Template index;

		  @View
		  public Response.Content index() throws IOException {
			return index.ok();
		  }
		}

3. Edit ``package-info.java``:

   .. code:: java

		@juzu.Application
		@juzu.plugin.servlet.Servlet(value = "/")
		package org.exoplatform.samples;

4. Edit ``index.gtmpl``:

   ::

		Hello World

5. Edit ``jboss-deployment-structure.xml``:

   .. code:: xml

		<jboss-deployment-structure xmlns="urn:jboss:deployment-structure:1.2">
			<deployment>
				<dependencies>
					<module name="deployment.platform.ear" export="true"/>
				</dependencies>
			</deployment>
		</jboss-deployment-structure>

6. Edit ``portlet.xml``:

   .. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<portlet-app xmlns="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd" version="2.0"
			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd">
			<portlet>
				<portlet-name>SampleApplication</portlet-name>
				<display-name xml:lang="EN">Juzu Sample Application</display-name>
				<portlet-class>juzu.bridge.portlet.JuzuPortlet</portlet-class>
				<init-param>
					<name>juzu.app_name</name>
					<value>org.exoplatform.samples</value>
				</init-param>
				<supports>
					<mime-type>text/html</mime-type>
				</supports>
				<portlet-info>
					<title>Sample Application</title>
				</portlet-info>
			</portlet>
		</portlet-app>

7. Edit ``web-guice.xml``:

   .. code:: xml

		<?xml version="1.0" encoding="ISO-8859-1" ?>
		<web-app xmlns="http://java.sun.com/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
			version="3.0">
			<!-- Run mode: prod, dev or live -->
			<context-param>
				<param-name>juzu.run_mode</param-name>
				<param-value>${juzu.run_mode:dev}</param-value>
			</context-param>
			<!-- Injection container to use: guice, spring, cdi or weld -->
			<context-param>
				<param-name>juzu.inject</param-name>
				<param-value>guice</param-value>
			</context-param>
		</web-app>

8. Edit ``web-spring.xml``:

   .. code:: xml

		<?xml version="1.0" encoding="ISO-8859-1" ?>
		<web-app xmlns="http://java.sun.com/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
			version="3.0">
		<!-- Run mode: prod, dev or live -->
			<context-param>
				<param-name>juzu.run_mode</param-name>
				<param-value>${juzu.run_mode:dev}</param-value>
			</context-param>
			<!-- Injection container to use: guice, spring, cdi or weld -->
			<context-param>
				<param-name>juzu.inject</param-name>
				<param-value>spring</param-value>
			</context-param>
		</web-app>

9. Edit ``pom.xml``:

   .. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
			<modelVersion>4.0.0</modelVersion>
			<groupId>org.exoplatform.samples</groupId>
			<artifactId>hellojz</artifactId>
			<version>4.2.x</version>
			<packaging>war</packaging>
			<name>Juzu Application</name>
			<properties>
				<maven.compiler.target>1.6</maven.compiler.target>
				<maven.compiler.source>1.6</maven.compiler.source>
			</properties>
			<dependencies>
				<dependency>
					<groupId>org.juzu</groupId>
					<artifactId>juzu-core</artifactId>
					<version>1.0.0</version>
				</dependency>
				<dependency>
					<groupId>org.juzu</groupId>
					<artifactId>juzu-plugins-servlet</artifactId>
					<version>1.0.0</version>
				</dependency>
				<dependency>
					<groupId>javax.servlet</groupId>
					<artifactId>javax.servlet-api</artifactId>
					<version>3.0.1</version>
				</dependency>
			</dependencies>
			<build>
				<finalName>hellojz</finalName>
			</build>
			<profiles>
				<profile>
					<id>plf-tomcat-guice</id>
					<activation>
						<activeByDefault>true</activeByDefault>
						<property>
							<name>target</name>
							<value>plf-tomcat-guice</value>
						</property>
					</activation>
					<dependencies>
						<dependency>
							<groupId>com.google.inject</groupId>
							<artifactId>guice</artifactId>
							<version>3.0</version>
						</dependency>
					</dependencies>
					<properties>
						<maven.war.webxml>src/main/web-guice.xml</maven.war.webxml>
					</properties>
					<build>
						<plugins>
							<plugin>
								<artifactId>maven-war-plugin</artifactId>
								<version>2.6</version>
								<configuration>
									<packagingExcludes>
										WEB-INF/jboss-deployment-structure.xml,
										WEB-INF/lib/*.jar
									</packagingExcludes>
								</configuration>
							</plugin>
						</plugins>
					</build>
				</profile>
				<profile>
					<id>plf-jboss-guice</id>
					<activation>
						<property>
							<name>target</name>
							<value>plf-jboss-guice</value>
						</property>
					</activation>
					<dependencies>
						<dependency>
							<groupId>com.google.inject</groupId>
							<artifactId>guice</artifactId>
							<version>3.0</version>
						</dependency>
					</dependencies>
					<properties>
						<maven.war.webxml>src/main/web-guice.xml</maven.war.webxml>
					</properties>
				</profile>
				<profile>
					<id>plf-tomcat-spring</id>
					<activation>
						<property>
							<name>target</name>
							<value>plf-tomcat-spring</value>
						</property>
					</activation>
					<dependencies>
						<dependency>
							<groupId>javax.inject</groupId>
							<artifactId>javax.inject</artifactId>
							<version>1</version>
						</dependency>
						<dependency>
							<groupId>org.springframework</groupId>
							<artifactId>spring-web</artifactId>
							<scope>runtime</scope>
							<version>2.5.5</version>
						</dependency>
					</dependencies>
					<properties>
						<maven.war.webxml>src/main/web-spring.xml</maven.war.webxml>
					</properties>
					<build>
						<plugins>
							<plugin>
								<artifactId>maven-war-plugin</artifactId>
								<version>2.6</version>
								<configuration>
									<packagingExcludes>
										WEB-INF/jboss-deployment-structure.xml
									</packagingExcludes>
								</configuration>
							</plugin>
						</plugins>
					</build>
				</profile>
				<profile>
					<id>plf-jboss-spring</id>
					<activation>
						<property>
							<name>target</name>
							<value>plf-jboss-spring</value>
						</property>
					</activation>
					<dependencies>
						<dependency>
							<groupId>javax.inject</groupId>
							<artifactId>javax.inject</artifactId>
							<version>1</version>
						</dependency>
						<dependency>
							<groupId>org.springframework</groupId>
							<artifactId>spring-web</artifactId>
							<scope>runtime</scope>
							<version>2.5.5</version>
						</dependency>
					</dependencies>
					<properties>
						<maven.war.webxml>src/main/web-spring.xml</maven.war.webxml>
					</properties>
				</profile>
			</profiles>
		</project>

Here are some remarks:

**Dependencies**

Juzu:

.. code:: xml

    <dependency>
        <groupId>org.juzu</groupId>
        <artifactId>juzu-core</artifactId>
        <version>1.0.0</version>
    </dependency>
    <dependency>
        <groupId>org.juzu</groupId>
        <artifactId>juzu-plugins-servlet</artifactId>
        <version>1.0.0</version>
    </dependency>
    <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>javax.servlet-api</artifactId>
        <version>3.0.1</version>
    </dependency>

Guice:

.. code:: xml

    <dependency>
        <groupId>com.google.inject</groupId>
        <artifactId>guice</artifactId>
        <version>3.0</version>
    </dependency>

Spring:

.. code:: xml

    <dependency>
        <groupId>javax.inject</groupId>
        <artifactId>javax.inject</artifactId>
        <version>1</version>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-web</artifactId>
        <version>2.5.5</version>
    </dependency>

Note that you can deploy this portlet using Guice in Tomcat and JBoss or
using Spring in Tomcat as usual. However, to deploy this portlet using
Spring in JBoss, the following dependencies are needed at runtime:

-  ``spring-beans-2.5.5.jar``

-  ``spring-context-2.5.5.jar``

-  ``spring-core-2.5.5.jar``

-  ``spring-web-2.5.5.jar``

These dependencies have been already packaged in the generated
``hellojz.war`` file. Therefore you can choose to deploy this portlet
via the 2 following ways:

-  Copy these above dependencies from ``hellojz.war!/WEB-INF/lib/`` to
   ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear!/lib``,
   then deploy this portlet as usual.

-  Deploy the ``hellojz.war`` file into
   ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear/`` and
   include it as the first module in the
   ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear/META-INF/application.xml``
   file. The ``application.xml`` file will look like:

   .. code:: xml

       ...
       <display-name>plf-enterprise-jbosseap-ear</display-name>
       <initialize-in-order>true</initialize-in-order>
       <!-- The first module -->
       <module>
       <web>
         <web-uri>hellojz.war</web-uri>
         <context-root>hello-portlet-sample</context-root>
       </web>
       </module>
       <!-- Other modules -->
       ...

.. _PLFDevGuide.DevelopingApplications.DevelopingPortlet.Spring.Intro:

Spring MVC portlet
~~~~~~~~~~~~~~~~~~~

Spring MVC portlet is officially supported as of eXo Platform 4.2.

This tutorial shows you how to write a basic Spring portlet. Please
visit `chapter Portlet, Spring
documentation <http://docs.spring.io/autorepo/docs/spring/4.0.x/spring-framework-reference/html/portlet.html>`__
for your further reading. Besides, you can download all source code used
in this tutorial
`here <https://github.com/exo-samples/docs-samples/tree/master/portlet/spring-mvc-portlet>`__.

If you are already familiar with Spring portlet and just want to know
how to **deploy** it in eXo Platform, skip this section and go to
:ref:`Portlet deployment section <PLFDevGuide.DevelopingApplications.DevelopingPortlet.Deployment>`.

1. Create a Maven project as follows:

|image24|

2. Edit ``pom.xml``:

   .. code:: xml

		<project>
			<modelVersion>4.0.0</modelVersion>
			<groupId>org.exoplatform.samples</groupId>
			<artifactId>sample-spring-mvc-portlet</artifactId>
			<version>4.2.x</version>
			<packaging>war</packaging>
			
			<dependencies>
				<dependency>
					<groupId>javax.portlet</groupId>
					<artifactId>portlet-api</artifactId>
					<version>2.0</version>
					<scope>provided</scope>
				</dependency>
				<dependency>
					<groupId>org.springframework</groupId>
					<artifactId>spring-webmvc-portlet</artifactId>
					<version>4.0.4.RELEASE</version>
					<!-- <version>2.5.5</version> -->
				</dependency>
				<dependency>
					<groupId>javax.servlet</groupId>
					<artifactId>jstl</artifactId>
					<version>1.2</version>
				</dependency>
			</dependencies>
			
			<build>
				<finalName>spring-mvc-portlet</finalName>
			</build>
		</project>


	-  Though the Spring version you see here is 4.0.4.RELEASE, it should
	   work in older versions too. This example was tested against Spring
	   2.5.5 and Spring 4.0.4.RELEASE.

3. Edit ``Contact.java``. This class is the data model.

   .. code:: java

		package org.exoplatform.samples.spring;

		public class Contact {
			private String firstName;
			private String lastName;
			private String displayName;
			private String email;
			
			public Contact(String firstName, String lastName, String displayName, String email) {
				this.firstName = firstName;
				this.lastName = lastName;
				this.displayName = displayName;
				this.email = email;
			}
			
			public String getFirstName() {
				return firstName;
			}
			public void setFirstName(String firstName) {
				this.firstName = firstName;
			}
			public String getLastName() {
				return lastName;
			}
			public void setLastName(String lastName) {
				this.lastName = lastName;
			}
			public String getDisplayName() {
				return displayName;
			}
			public void setDisplayName(String displayName) {
				this.displayName = displayName;
			}
			public String getEmail() {
				return email;
			}
			public void setEmail(String email) {
				this.email = email;
			}
		}

4. Edit ``ContactService.java``. This interface has only one method to 
   get a list of contacts:

   .. code:: java

		package org.exoplatform.samples.spring;

		import java.util.Set;

		public interface ContactService {
			
			public Set getContacts();
		}

5. Edit ``ContactServiceImpl.java``. This class implements ContactService
   and provides a method to create some data for testing. For simplicity,
   the data is in-memory.

   .. code:: java

		package org.exoplatform.samples.spring;

		import java.util.Set;
		import java.util.LinkedHashSet;
		import org.exoplatform.samples.spring.Contact;

		public class ContactServiceImpl implements ContactService {
			
			private static Set contactList = new LinkedHashSet();

			public Set getContacts() {
				if (contactList.size() == 0) {
					initContacts();
				}
				return contactList;
			}
			
			public void initContacts() {
				contactList.add(new Contact("John", "Smith", "John Smith", "john.smith@exo.com"));
				contactList.add(new Contact("Mary", "Williams", "Mary Williams", "mary.williams@exo.com"));
				contactList.add(new Contact("Jack", "Miller", "Jack Miller", "jack.miller@exo.com"));
				contactList.add(new Contact("James", "Davis", "James Davis", "james.davis@exo.com"));
			}

		}

6. Edit ``ContactController.java``.

   .. code:: java

		package org.exoplatform.samples.spring;

		import org.springframework.web.portlet.mvc.AbstractController;
		import javax.portlet.RenderRequest;
		import javax.portlet.RenderResponse;
		import org.springframework.web.portlet.ModelAndView;
		import java.util.Set;

		public class ContactController extends AbstractController {
			
			private ContactService contactService;
			
			public void setContactService(ContactService contactService) {
				this.contactService = contactService;
			}
			
			@Override
			public ModelAndView handleRenderRequestInternal(RenderRequest request, RenderResponse response) {
				Set contacts = contactService.getContacts();
				ModelAndView modelAndView = new ModelAndView("contactsView", "contacts", contacts);
				return modelAndView;
			}
		}

	-  Here you extend Spring's AbstractController and override the method
	   handleRenderRequestInternal.

	-  This tutorial is limited in render phase. The super class has also
	   the method handleActionRequestInternal that will be called in action
	   phase.

7. Edit ``portlet.xml``.

   .. code:: xml

		<portlet-app xmlns="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd"
			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://java.sun.com/xml/ns/portlet http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd"
			version="2.0">
			<portlet>
				<portlet-name>contact</portlet-name>
				<display-name>Contact</display-name>
				<portlet-class>org.springframework.web.portlet.DispatcherPortlet</portlet-class>
				<supports>
					<mime-type>text/html</mime-type>
					<portlet-mode>view</portlet-mode>
				</supports>
				<portlet-info>
					<title>Contact</title>
				</portlet-info>
			</portlet>
		</portlet-app>

All Spring portlets have portlet-class DispatcherPortlet that dispatches
requests to controllers.

-  Each instance of DispatcherPortlet has its own
   *WebApplicationContext* that inherits all the beans already defined
   in the *Root WebApplicationContext*.

-  Each one also has its portlet-scope beans which are created during
   its initialization. Those beans are defined in a file named
   ``{portlet-name}-portlet.xml`` (that is, ``contact-portlet.xml`` in
   next step).

8. Edit ``contact-portlet.xml``.

   .. code:: xml

		<beans xmlns="http://www.springframework.org/schema/beans" 
			xmlns:aop="http://www.springframework.org/schema/aop" 
			xmlns:p="http://www.springframework.org/schema/p" 
			xmlns:tx="http://www.springframework.org/schema/tx" 
			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
			xsi:schemaLocation="http://www.springframework.org/schema/beans 
			http://www.springframework.org/schema/beans/spring-beans-2.5.xsd
			http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop-2.5.xsd 
			http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx-2.5.xsd">

			<bean id="contactController" class="org.exoplatform.samples.spring.ContactController">
				<property name="contactService" ref="contactService" />
			</bean>
			<bean id="portletModeHandlerMapping" class="org.springframework.web.portlet.handler.PortletModeHandlerMapping">
				<property name="portletModeMap">
					<map>
						<entry key="view" value-ref="contactController" />
					</map>
				</property>
			</bean>
		</beans>

	Here you define some portlet-scoped beans: a controller and a handler
	mapping. The portlet-scoped bean definition overrides any bean with the
	same name defined at global scope.

	-  The class ContactController you wrote is declared as a bean and is
	   responsible for handling the view mode.

	-  Such beans as view resolver or services should be defined at the
	   application context, so you do not have to define them for each
	   portlet.

9. Edit ``web.xml``.

    .. code:: xml

		<web-app version="2.5" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
			xmlns="http://java.sun.com/xml/ns/javaee" 
			xmlns:web="http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" 
			xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd">
			<display-name>spring-mvc-portlet</display-name>
			<context-param>
				<param-name>contextConfigLocation</param-name>
				<param-value>/WEB-INF/applicationContext.xml</param-value>
			</context-param>
			<listener>
				<listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
			</listener>
			<servlet>
				<servlet-name>ViewRendererServlet</servlet-name>
				<servlet-class>org.springframework.web.servlet.ViewRendererServlet</servlet-class>
			</servlet>
			<servlet-mapping>
				<servlet-name>ViewRendererServlet</servlet-name>
				<url-pattern>/WEB-INF/servlet/view</url-pattern>
			</servlet-mapping>
		</web-app>

	-  The ViewRendererServlet brings all the view rendering capabilities
	   that exist in the Spring servlet framework to the portlet.

	-  Here you add a parameter, ``contextConfigLocation``, to customize the
	   initialization of *DispatcherPortlet*. The goal is to define some
	   beans at the application scope.

.. note:: Pay attention to the attribute *version="2.5"*. The version 2.5 or
		  greater is required. You should specify the version, otherwise it
		  might not work in JBoss package.

10. Edit ``applicationContext.xml``.

    .. code:: xml

		<beans xmlns="http://www.springframework.org/schema/beans" 
			xmlns:aop="http://www.springframework.org/schema/aop" 
			xmlns:p="http://www.springframework.org/schema/p" 
			xmlns:tx="http://www.springframework.org/schema/tx" 
			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
			xsi:schemaLocation="http://www.springframework.org/schema/beans 
			http://www.springframework.org/schema/beans/spring-beans-2.5.xsd
			http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop-2.5.xsd 
			http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx-2.5.xsd">

			<bean id="contactService" class="org.exoplatform.samples.spring.ContactServiceImpl" />
			<bean id="viewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
				<property name="viewClass" value="org.springframework.web.servlet.view.JstlView" />
				<property name="prefix" value="/WEB-INF/jsp/" />
				<property name="suffix" value=".jsp" />
			</bean>
		</beans>

	Here you define the service bean that will be consumed by the
	controller, and a view resolver.

	-  The JstlView is configured to resolve ``/WEB-INF/jsp/*.jsp`` files.

11. Edit ``contactsView.jsp``.

    .. code:: xml

		<%@taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
		<table border = "1">
			<tr>
				<th style="text-align:left">Name</th>
				<th style="text-align:left">Email</th>
			</tr>
			<c:forEach items = "${contacts}" var ="contact">
				<tr>
					<td>${contact.displayName}</td>
					<td>${contact.email}</td>
				</tr>
			</c:forEach>
		</table>

Now, you can
:ref:`deploy <PLFDevGuide.DevelopingApplications.DevelopingPortlet.Deployment>`
the portlet in eXo Platform and test:

|image25|

.. note::`Here <https://github.com/exo-addons/sample-springmvc-portlet/tree/master/portlet>`__
		  is a more intensive example that uses a lot of Spring annotations
         (so less xml configuration) and has several action methods.

.. _PLFDevGuide.DevelopingApplications.DevelopingGadget:

===================
Developing a gadget
===================

Gadgets are basically simple applications written in JavaScript and can
be imported as windows. They are also considered as independent HTML
content, so their UI, including layout, font or color, may be different.
That is why you need to make consistent in the look and feel of all
gadgets in eXo Platform after creating any new gadgets. One of significant
advantages when developing gadgets is the fact that Google provides a
standard
`OpenSocial <https://developers.google.com/gadgets/docs/overview>`__,
which is an API for gadgets to interact with Social network platforms.
This section will instruct you to:

-  :ref:`Create a very simple gadget <PLFDevGuide.DevelopingApplications.DevelopingGadget.CreatingGadget>`
   in eXo Platform.
   
-  :ref:`Create resources <PLFDevGuide.DevelopingApplications.DevelopingGadget.CreatingResources>`
   and :ref:`apply them <PLFDevGuide.DevelopingApplications.DevelopingGadget.ApplyingResources>`
   into a gadget.

-  :ref:`Use AJAX and HTML DOM Object <PLFDevGuide.DevelopingApplications.DevelopingGadget.UsingAJAXAndHTMLDOMObject>`
   for a gadget.

-  :ref:`Customize a gadget <PLFDevGuide.DevelopingApplications.DevelopingGadget.CustomizingGadget>`,
   including: changing a gadget's category, resizing, changing thumbnail
   and setting preferences for a gadget.

To get more information on how to develop gadgets, see :ref:`Managing Google Gadget, eXo Add-ons guide <eXoAddonsGuide.IDE.AdvancedActions.ManagingGoogleGadget>`.

.. _PLFDevGuide.DevelopingApplications.DevelopingGadget.CreatingGadget:

Creating a gadget
~~~~~~~~~~~~~~~~~~

Creating a gadget is very simple. To create a gadget through a Webapp,
you need to create a sample bundle where you will add and deploy your
gadget. This procedure walks you through steps to create a very simple
gadget called **Hello World**.

The source code is provided
`here <https://github.com/exo-samples/docs-samples/tree/master/gadget/simple-gadget>`__.

.. note:: Unlike portlet, the gadget webapp is always required to be a :ref:`portal extension <PLFDevGuide.eXoAdd-ons.PortalExtension>`. 
          As of 4.3, this can be done simply by adding a ``META-INF/exo-conf/configuration.xml`` file.

The ``META-INF/exo-conf/configuration.xml`` file should has the content
below. Unless you use a traditional ``custom-extension-config.jar``,
always add this file to your gadget webapp, though it might not be
repeated in later tutorials.

.. code:: xml

    <configuration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd"
        xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">
        <external-component-plugins>
            <target-component>org.exoplatform.container.definition.PortalContainerConfig</target-component>
            <component-plugin>
                <name>Add PortalContainer Definitions</name>
                <set-method>registerChangePlugin</set-method>
                <type>org.exoplatform.container.definition.PortalContainerDefinitionChangePlugin</type>
                <priority>101</priority>
                <init-params>
                    <values-param>
                        <name>apply.specific</name>
                        <value>portal</value>
                    </values-param>
                    <object-param>
                        <name>addDependencies</name>
                        <object type="org.exoplatform.container.definition.PortalContainerDefinitionChange$AddDependencies">
                            <field name="dependencies">
                                <collection type="java.util.ArrayList">
                                    <value>
                                        <!-- CHANGE THIS ACCORDINGLY TO YOUR WEBAPPS -->
                                        <string>hello-gadget</string>
                                    </value>
                                </collection>
                            </field>
                        </object>
                    </object-param>
                </init-params>
            </component-plugin>
        </external-component-plugins>
    </configuration>

Here are the steps to create your first gadget:

1. Create a Maven project with the following ``pom.xml`` file. See the
   project structure in the source link given above.

   .. code:: xml

		<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
			xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
			<modelVersion>4.0.0</modelVersion>
			<groupId>sample</groupId>
			<artifactId>gadget</artifactId>
			<packaging>war</packaging>
			<version>1.0</version>
			<name>Hello Gadget sample</name>
			<build>
				<finalName>hello-gadget</finalName>
			</build>
		</project>

2. Edit ``web.xml`` file:

   .. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<web-app version="3.0" metadata-complete="true"
			xmlns="http://java.sun.com/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd">
			<display-name>hello-gadget</display-name>
		</web-app>

3. Edit ``webapp/gadgets/HelloGadget/HelloGadget.xml`` file:

   .. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<Module>
			<ModulePrefs author="eXoPlatform"
			title="Hello World"
			directory_title="Hello World"
			description="The simplest gadget">
			</ModulePrefs>
			<Content type="html">
				<![CDATA[
					<div class='hello'>
					<h2>Hello</h2>
					<h6>Welcome to Hello World gadget!</h6>
					<p><i>Powered by eXo Platform.</i></p>
					</div>
				]]>
			</Content>
		</Module>

4. Edit ``webapp/WEB-INF/gadget.xml`` file:

   .. code:: xml

		<gadgets xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://www.gatein.org/xml/ns/gatein_objects_1_0 http://www.gatein.org/xml/ns/gadgets_1_0"
			xmlns="http://www.gatein.org/xml/ns/gadgets_1_0">
			<gadget name="HelloGadget">
				<path>/gadgets/HelloGadget/HelloGadget.xml</path>
			</gadget>
		</gadgets>

5. Include ``WEB-INF/jboss-deployment-structure.xml`` file if the gadget
   will be deployed in JBoss:

   .. code:: xml

		<jboss-deployment-structure xmlns="urn:jboss:deployment-structure:1.2">
			<deployment>
				<dependencies>
					<module name="deployment.platform.ear" export="true"/>
				</dependencies>
			</deployment>
		</jboss-deployment-structure>

6. Build the project with the command: ``mvn clean install``.

7. Install ``hello-gadget.war`` to:

	-  ``$PLATFORM_TOMCAT_HOME/webapps/`` for Tomcat.

	-  ``$PLATFORM_JBOSS_HOME/standalone/deployments/`` for JBoss.

.. note:: See details about deployment in :ref:`portal extension section <PLFDevGuide.eXoAdd-ons.PortalExtension.Howto>`,
    especially if you use the traditional extension with jar to be backward compatible.

8. Start the server and go to UI to do the next steps.

9. Select Administration --> Applications, then add this gadget into a
  category:

|image26|

10. Click My Dashboard (the menu drops down from the user name in the
    Topbar) to add the gadget. The result:

   |image27|

.. note:: You can also create and edit a gadget completely :ref:`via UI <ManagingPortletsAndGadgets.AddingGadget>`.

.. _PLFDevGuide.DevelopingApplications.DevelopingGadget.CreatingResources:

Creating resources
~~~~~~~~~~~~~~~~~~~

To achieve the consistent look and feel, you have to collect the common
features of all gadgets as much as possible and put in a place where it
can be shared for all gadgets. You will use **exo-gadget-resources** for
this purpose. It is a ``.war`` file that contains commonly used static
resources (stylesheets, images, JavaScript libraries, and more)
available for all gadgets in eXo Platform at runtime:

::

    /exo-gadget-resources
     |__skin
     |   |__exo-gadget
     |   |   |__images
     |   |   |__gadget-common.css
     |   |__...(3rd-party components' CSS)
     |__script
        |__jquery
        |  |__3.2.1
        |  |__...(other jQuery versions)
        |  |__plugins
        |__utils

The resources are divided into 2 categories: skin and script.

**Skin**

This is the place for the shared stylesheets of the gadgets
(``exo-gadget/gadget-common.css``) and other third-party components
styles adapted to the eXo Platform skin (jqPlot, Flexigrid, and more). 
This is a copy of the component's original CSS with some modifications 
to match the eXo Platform's skin. You can find this original file at the
component's folder under ``exo-gadget-resources/script`` then link to it
or make your own copy (put it in your gadget's folder and refer to it in
gadget's .xml file) to suit your need.

The ``gadget-common.css`` file is the main place for the global
stylesheets. When the eXo Platformskin is changed, updating stylesheets 
in this file will affect all gadgets skins accordingly. In this file, 
you will define stylesheets applied for all gadgets, such as gadget 
title, gadget body, fonts, colors, tables, and some commonly used icons, 
such as drop-down arrow, list bullet, setting button, and more.

**Script**

This is the place for commonly used third-party JavaScript libraries
(e.g: jQuery and its plugins) and a library of useful utility scripts
(the utils folder).

jQuery and plugins:

-  **jquery/<version>**: `jQuery JavaScript
   library <http://jquery.com/>`__.

-  **jquery/plugins/jqplot**: `Charts and Graphs for
   jQuery <http://www.jqplot.com/>`__.

-  **jquery/plugins/flexigrid**: `Lightweight but rich data
   grid <http://flexigrid.info/>`__.

-  **jquery/plugins/date.js**: `JavaScript date
   library <http://www.datejs.com/>`__.

-  **jquery/plugins/jquery.timers**: `JavaScript
   timer <http://jquery.offput.ca/js/>`__.

.. note:: Here you should keep the latest and several versions of jQuery because some plugins may not work with the latest version. Several versions of a plugin are also kept.

The utilities scripts:

-  ``utils/pretty.date.js``: Calculate the difference from a point of
   time in the past to the present and display "4 months 3 weeks ago",
   for example.

.. _PLFDevGuide.DevelopingApplications.DevelopingGadget.ApplyingResources:

Applying resources in a gadget
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A gadget should use static resources available in
``exo-gadget-resources`` instead of including them in their own package.
This helps reduce packaging size, avoid duplication (considering every
gadget uses the same jQuery version, instead of adding each jQuery in
its own package) and take advantages of automatic skin changing/updating
when ``exo-gadget-resources`` is updated.

A simple example of applying resources into a gadget is to use a
JavaScript. In this example, you will add a button to the Hello World
gadget and use jQuery to register an event for the button. When you
click the "here" button, the color of welcome message will be changed.
The source code of this example is
`here <https://github.com/exo-samples/docs-samples/tree/master/gadget/gadget-resources>`__.

1. Edit ``HelloGadget.xml`` file:

.. code:: xml

    <?xml version="1.0" encoding="UTF-8" ?>
    <Module>
        <ModulePrefs author="eXoPlatform"
        title="Hello World"
        directory_title="Hello World"
        description="The simplest gadget">
        </ModulePrefs>
        <Content type="html">
            <![CDATA[
                <script src="/exo-gadget-resources/script/jquery/3.2.1/jquery.min.js"></script>
                <script type="text/javascript">
                $("body").live("click", ".hello .btn", function() {
                $(".hello h6").css("color", "green");
                });
                </script>
                <div class='hello'>
                <h2>Hello</h2>
                <h6>Welcome to Hello World gadget!</h6>
                <p>Click <a class='btn'>here</a> to change the default color of the welcome message.
                <p><i>Powered by eXo Platform.</i></p>
                </div>
            ]]>
        </Content>
    </Module>

   The **Hello World** gadget is now displayed:

   |image28|

2. Add the CSS resources of eXo Platform to make consistent between 
   **Hello World** gadget and look and feel of eXo Platform which is  
   based on `Twitter Bootstrap <http://twitter.github.io/bootstrap/>`__. 
   To do that,  edit ``HelloGadget.xml`` to add this:

   .. code:: xml

		<link rel="stylesheet" type="text/css" href="/eXoResources/skin/bootstrap/css/bootstrap.css" />

The look and feel of **Hello World** gadget is now changed:

|image29|

.. _PLFDevGuide.DevelopingApplications.DevelopingGadget.UsingAJAXAndHTMLDOMObject:

Using AJAX and HTML DOM Object
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

AJAX allows your gadget to be updated asynchronously by exchanging small
amounts of data with the server behind the scenes. Besides, with the
support of HTML DOM Object, the gadget's content can be created
dynamically based on AJAX's response data. This section instructs you
how to leverage these utilities to customize your gadget.

You can get the source code of this example
`here <https://github.com/exo-samples/docs-samples/tree/master/gadget/ajax>`__.

1. Create a new Maven project with the following structure:

  |image30|

2. Edit ``pom.xml`` file:

   .. code:: xml

		<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchemainstance"
			xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
			<modelVersion>4.0.0</modelVersion>
			<groupId>sample</groupId>
			<artifactId>gadget</artifactId>
			<packaging>war</packaging>
			<version>1.0</version>
			<name>Auto slideshow gadget sample</name>
			<build>
				<finalName>auto-slideshow</finalName>
			</build>
		</project>

3. Edit ``web.xml`` file:

   .. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<web-app version="3.0" metadata-complete="true"
			xmlns="http://java.sun.com/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd">
			<display-name>auto-slideshow</display-name>
		</web-app>

4. Edit ``AutoSlideshowGadget.xml`` file:

   .. code:: xml

		<?xml version="1.0" encoding="UTF-8" ?>
		<Module>
		  <ModulePrefs title="Memories!" width="240" height="200"/>
		  <Content type="html">
		  <![CDATA[
		  <!--Gadget's main body which will be added by HTML DOM Object later-->
		  <div id="slideshow">
		  </div>
		  ]]>
		  </Content>
		</Module>

	in which you name the gadget as **Memories!**. The main body consists of
	a div tag only. This file will be updated later.

5. Download http://code.jquery.com/jquery-3.2.1.js and save it in
   ``webapp/gadgets/AutoSlideshowGadget/``.

6. Edit ``style.css`` file:

   .. code:: css

		img {width: 240px;
		}
		#slideshow { 
			margin: 10px auto 10px; 
			position: relative; 
			width: 240px; 
			height: 200px; 
			padding: 10px; 
			box-shadow: 0 0 20px rgba(0,0,0,0.4); 
		}
		#slideshow > div { 
			position: absolute; 
			top: 10px; 
			left: 10px; 
			right: 10px; 
			bottom: 10px; 
		}

7. Edit ``myscript.js`` file. This script contains a function using 
   AJAX to call DriverConnector API (see `here <rest-api/content/DriverConnector.getFoldersAndFiles>` 
   for more details) to get all public images of root user. Another function, 
   the *traverseXMLDoc* function will be added in next steps.

   ::

		function getImages() {
			//This function uses AJAX to send GET request to server's DriverConnector API and receive XML response
			jQuery.ajax({
				type: "GET",
				url: "/portal/rest/wcmDriver/getFoldersAndFiles?driverName=Collaboration&currentFolder=Users/r___/ro___/roo___/root/Public&currentPortal=intranet&repositoryName=repository&workspaceName=collaboration&filterBy=Image",
				contentType: "application/xml; charset=utf-8",
				dataType: "xml",
				success: function (data, status, jqXHR) {
					var strResults=new XMLSerializer().serializeToString(data.documentElement);
					//build dynamic html content for "slideshow" div tag
					traverseXMLDoc(strResults, "slideshow");
				},
				//error report
				error: function (jqXHR, status) {
					//error handler
					alert("Cannot retrieve data!");
				}
			});
		}

.. note:: Notice the ``url`` parameter here is pointing to **Public** folder
		  of *root* user to retrieve image files. Therefore, in later steps,
		  it requires logging in as *root* user to upload images before anyone
		  can use this gadget.

8. Add the *traverseXMLDoc* function with 2 input parameters to this 
   script as follows:

   ::

		function traverseXMLDoc(xmlDoc, idOfContainerDomElement){
			//This function traverses through the whole XML response returned from server
			var $xmlDocObjChildren, $contentDiv;
			$contentDiv = $('#' + idOfContainerDomElement);
			if ($contentDiv.length === 0) {
				throw new Error('There are no DOM elements with this id: "' + idOfContainerDomElement + '"');
			}
			//Information of each image object is contained in "File" tag
			$xmlDocObjChildren = $(xmlDoc).find("File");
			$xmlDocObjChildren.each(function(index, Element) {
				var $currentObject = $(this),
						childElementCount = Element.childElementCount,
				//Image's url is contained in "url" attribute
				currentNodeType = $currentObject.attr('url');
				//Adding dynamic content into gadget's body
				$contentDiv.append('<div><img src="'+currentNodeType+'"></div>');
			});
		}

9. Add some image effects by JavaScript and include all your created
   resources to the ``AutoSlideshowGadget.xml`` file:

   .. code:: xml

		<?xml version="1.0" encoding="UTF-8" ?>
		<Module>
		  <ModulePrefs title="Memories!" width="240" height="200"/>
		  <Content type="html">
		  <![CDATA[
		  <script src="jquery-3.2.1.js"></script>
		  <script src="myscript.js"></script>
		  <link rel="stylesheet" type="text/css" href="style.css" />
		  <!--Gadget's main body which will be added by HTML DOM Object later-->
		  <div id="slideshow">
		  </div>
		  <!--Start calling js function-->
		  <script type="text/javascript">
			getImages();
			//Creating gagdet's effects
			$("#slideshow > div:gt(0)").hide();
			setInterval(function() { 
			  $('#slideshow > div:first')
				.fadeOut(1000)
				.next()
				.fadeIn(1000)
				.end()
				.appendTo('#slideshow');
			},  3000);
		  </script>
			]]>
		  </Content>
		</Module>

	Notice that you can follow :ref:`this section <PLFDevGuide.DevelopingApplications.DevelopingGadget.CreatingResources>`
	to create CSS and Javascript resources in separate files to share 
	with other gadgets. In this guide, we make it simple by including 
	these resources right inside the war package.

10. Edit ``gadget.xml`` file:

   .. code:: xml

		<gadgets xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://www.gatein.org/xml/ns/gatein_objects_1_0 http://www.gatein.org/xml/ns/gadgets_1_0"
			xmlns="http://www.gatein.org/xml/ns/gadgets_1_0">
			<gadget name="AutoSlideshowGadget">
				<path>/gadgets/AutoSlideshowGadget/AutoSlideshowGadget.xml</path>
			</gadget>
		</gadgets>

11. Deploy the gadget and add it to Root's user dashboard. If necessary, 
   see `Creating a gadget <PLFDevGuide.DevelopingApplications.DevelopingGadget.CreatingGadget>`
   for how to.

12. Log in as Root, upload several images into Documents --> Public.

The result is as below:

|image31|

.. _PLFDevGuide.DevelopingApplications.DevelopingGadget.CustomizingGadget:

Customizing a gadget
~~~~~~~~~~~~~~~~~~~~~

You can customize gadgets in some aspects:

-  :ref:`Changing the category <PLFDevGuide.DevelopingApplications.DevelopingGadget.CustomizingGadget.ChangingCategory>`

-  :ref:`Resizing a gadget <PLFDevGuide.DevelopingApplications.DevelopingGadget.CustomizingGadget.ResizingGadget>`

-  :ref:`Changing a gadget thumbnail <PLFDevGuide.DevelopingApplications.DevelopingGadget.CustomizingGadget.ChangingThumbnail>`

-  :ref:`Setting preferences <PLFDevGuide.DevelopingApplications.DevelopingGadget.CustomizingGadget.SettingPreferences>`

.. _PLFDevGuide.DevelopingApplications.DevelopingGadget.CustomizingGadget.ChangingCategory:

Changing the category of a gadget
---------------------------------

There are 2 ways to change the category of a gadget:

-  Via UI as described in :ref:`Adding a portlet/gadget to the Application list <ManagingPortletsAndGadgets.AddingPortletGadgetToApplicationList>`.
   However, this works only one time for a new gadget. After you have
   added it to a category, you could not change its category via UI.

-  By configuring ``ApplicationCategoriesPlugins``, as detailed below.

Here is the configuration example to add **Hello World** gadget to the
**My Gadgets** category.

Add the following configuration to ``WEB-INF/conf/configuration.xml``
file:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.application.registry.ApplicationRegistryService</target-component>
        <component-plugin>
            <name>new.portal.portlets.registry</name>
            <set-method>initListener</set-method>
            <type>org.exoplatform.application.registry.ApplicationCategoriesPlugins</type>
            <description>this listener init the portlets are registered in PortletRegister</description>
            <init-params>
                <object-param>
                    <name>MyGadgets</name>
                    <description>description</description>
                    <object type="org.exoplatform.application.registry.ApplicationCategory">
                        <field name="name"><string>MyGadgets</string></field>
                        <field name="displayName"><string>My Gadgets</string></field>
                        <field name="description"><string>List of personal gadgets for development.</string></field>
                        <field name="accessPermissions">
                            <collection type="java.util.ArrayList" item-type="java.lang.String">
                                <value><string>*:/developers</string></value>
                            </collection>
                        </field>
                        <field name="applications">
                            <collection type="java.util.ArrayList">
                                <value>
                                    <object type="org.exoplatform.application.registry.Application">
                                        <field name="applicationName"><string>HelloGadget</string></field>
                                        <field name="categoryName"><string>MyGadgets</string></field>
                                        <field name="displayName"><string>Hello Gadget</string></field>
                                        <field name="description"><string>The simplest gadget</string></field>
                                        <field name="type"><string>gadget</string></field>
                                        <field name="contentId"><string>HelloGadget</string></field>
                                        <field name="accessPermissions">
                                            <collection type="java.util.ArrayList" item-type="java.lang.String">
                                                <value><string>*:/developers</string></value>
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

Deploy it to a fresh server. You will see the category is automatically
added:

|image32|

.. note:: This method only works for a fresh (empty data) server because the
	  	  categories defined in the ApplicationRegistryService configuration
		  are created all in once when you start PRODUCT for the first time,
		  and when the JCR repository is empty. In case the server is started
		  already, you may write a portlet for this job, as described below.

1. Create the category by using the following code:

   .. code:: xml

		PortalContainer container = PortalContainer.getInstance();
			ApplicationRegistryService appService = (ApplicationRegistryService)container.getComponentInstanceOfType(ApplicationRegistryService.class);
			  try {
				if (appService.getApplication("MyGadgets/HelloGadget") == null) {
				  ApplicationCategory cat = new ApplicationCategory();
				  cat.setName("MyGadgets");
				  cat.setDisplayName("My Gadgets");
				  cat.setDescription("List of personal gadgets for development");
				  cat.setAccessPermissions(Arrays.asList("*:/developers"));
				  
				  Application app = appService.getApplication("Gadgets/HelloGadget");
				  appService.save(cat, app);
				}
			  } catch (Exception e) {
				throw new RuntimeException(e);
			  }

2. Add the above code block to one portlet action, for example:

   .. code:: xml

		@Override
		  public void processAction(ActionRequest actionRquest, ActionResponse actionResponse) {
			PortalContainer container = PortalContainer.getInstance();
			ApplicationRegistryService appService = (ApplicationRegistryService)container.getComponentInstanceOfType(ApplicationRegistryService.class);
			  try {
				if (appService.getApplication("MyGadgets/HelloGadget") == null) {
				  ApplicationCategory cat = new ApplicationCategory();
				  cat.setName("MyGadgets");
				  cat.setDisplayName("My Gadgets");
				  cat.setDescription("List of personal gadgets for development");
				  cat.setAccessPermissions(Arrays.asList("*:/developers"));
				  
				  Application app = appService.getApplication("Gadgets/HelloGadget");
				  appService.save(cat, app);
				}
			  } catch (Exception e) {
				throw new RuntimeException(e);
			  }
		  }

		  @RenderMode(name = "view")
		  public void hello(RenderRequest request, RenderResponse response) throws IOException, PortletException {
			PrintWriter writer = response.getWriter();
			PortletURL actionURL = response.createActionURL();
			writer.append("<p>Click <a href='" + actionURL.toString() + "'>here</a> to create MyGadgets category</p>");
		  }

3. Deploy the portlet to which you have added the above code block, then 
   do the portlet action.

.. _PLFDevGuide.DevelopingApplications.DevelopingGadget.CustomizingGadget.ResizingGadget:

Resizing a gadget
-----------------

This part instructs you how to use the configuration to resize the
gadget by adding the height attribute (for example, height="300") to the
**<ModulePrefs>** tag in the ``HelloGadget.xml`` file:

.. code:: xml

    <ModulePrefs author="eXoPlatform" 
        title="Hello World"
        directory_title="Hello World"
        description="The simplest gadget"
        height="300">
    </ModulePrefs>

.. note:: You can also resize a gadget through the web console as described in :ref:`Editing a gadget <ManagingPortletsAndGadgets.EditingGadget>`.

.. _PLFDevGuide.DevelopingApplications.DevelopingGadget.CustomizingGadget.ChangingThumbnail:

Changing a gadget thumbnail
---------------------------

The gadget thumbnails are displayed in the Page Editor window when you
edit a page. The thumbnail image size needs to be consistent for all
gadgets in the list. The current size (in eXo Platform) is 80 x 80 px, 
so you should select an image of this size in PNG (preferred), JPG or 
GIF format for your gadget thumbnail.

|image33|

-  The image can also be one from a public website (absolute URL), for
   example,
   ``thumbnail="http://www.example.com/images/HelloWorld-icon.jpg"/`` or
   from an internal image (relative URL):
   ``thumbnail="image/HelloWorld-icon ``. Add that attribute to the
   <ModulePrefs> tag in the ``HelloGadget.xml`` file.

.. _PLFDevGuide.DevelopingApplications.DevelopingGadget.CustomizingGadget.SettingPreferences:

Setting preferences
-------------------

The Google OpenSocial specifications describe different features that
can be used, but eXo Platform implements only some of them. See the code of
the following files:

-  ``$PLATFORM_TOMCAT_HOME/lib/exo.portal.gadgets-core-{version}.jar!/gatein-features/gatein-container/Gadgets.js``.

-  ``$PLATFORM_TOMCAT_HOME/webapps/eXoResources/javascript/eXo/gadget/UIGadget.js``.

-  ``$PLATFORM_TOMCAT_HOME/lib/exo.portal.gadgets-core-{version}.jar!/gatein-features/gatein-container/ExoBasedUserPrefStore.js``.

The following is a simple procedure to set preferences for **Hello
World** gadget. You can get the source
`here <https://github.com/exo-samples/docs-samples/tree/master/gadget/preferences>`__.

In ``HelloGadget.xml`` file:

1. Enable the **setprefs** feature:

   .. code:: xml

		<ModulePrefs ...
			<Require feature="setprefs"/>
		</ModulePrefs>

2. Register one preference:

   .. code:: xml

		<UserPref 
			name="welcome" display_name="Welcome message" 
			default_value="Welcome to Hello World gadget!" required="true"/>

3. Use JavaScript to get the registered preference that changes Welcome
   message.

   .. code:: javascript

		var getUserPrefs = function() {
		var prefs = new _IG_Prefs(__MODULE_ID__);
		var welcome_message = prefs.getString("welcome");
		$(".hello .alert-info h6").text(welcome_message);
		};
		gadgets.util.registerOnLoadHandler(getUserPrefs);

	In summary, the complete content of the ``HelloGadget.xml`` file will
	be:

	.. code:: xml

		<?xml version="1.0" encoding="UTF-8" ?>
		<Module>
			<ModulePrefs author="eXoPlatform"
			title="Hello World"
			directory_title="Hello World"
			description="The simplest gadget"
			height="300">
				<Require feature="setprefs"/>
			</ModulePrefs>
			<UserPref 
				name="welcome" display_name="Welcome message" 
				default_value="Welcome to Hello World gadget!" required="true"/>
			<Content type="html">
				<![CDATA[
					<link rel="stylesheet" type="text/css" href="/eXoResources/skin/bootstrap/css/bootstrap.css" />
					<script src="/exo-gadget-resources/script/jquery/1.6.2/jquery.min.js"></script>
					<script type="text/javascript">
					$("body").live("click", ".hello .btn", function() {
					$(".hello h6").css("color", "green");
					});
					var getUserPrefs = function() {
					var prefs = new _IG_Prefs(__MODULE_ID__);
					var welcome_message = prefs.getString("welcome");
					$(".hello .alert-info h6").text(welcome_message);
					};
					gadgets.util.registerOnLoadHandler(getUserPrefs);
					</script>
					<div class='hello well'>
					<h2>Hello</h2>
					<div class='alert alert-info'>
					<h6></h6>
					</div>
					<p>Click <a class='btn btn-primary'>here</a> to change the default color of the welcome message.
					<p><i>Powered by eXo Platform.</i></p>
					</div>
					]]>
			</Content>
		</Module>

The **Hello World** gadget now appears with a pencil icon that allows
changing gadget preferences.

|image34|


.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications:

==========================
Extending eXo applications
==========================

-  :ref:`Overriding application templates <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.OverridingApplicationTemplates>`
   Steps to override the default template of a portlet in eXo Platform.

-  :ref:`Applications Plugins <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins>`
   Tutorials to add plugin to eXo applications, such as Activity
   composer or action in Wiki using UI Extension framework.

-  :ref:`Notification <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.Notification>`
   Tutorials to extend or customize the notification system in eXo Platform.

-  :ref:`Overriding user profile design <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.OverridingUserProfileDesign>`
   Steps to override your profile page in eXo Platform.

-  :ref:`Wiki macro <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.XWIKI_Macro>`
   A tutorial to write new macros in eXo Wiki.

-  :ref:`ExtensibleFilter mechanism <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ExtensibleFilter>`
   A tutorial to create and insert your own filter into eXo Platform.

.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.OverridingApplicationTemplates:

Overriding application templates
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Groovy templates can be overriden thanks to extension mechanism. Here
are steps to override a template of **Organization** portlet. The source
code used in this section is provided
`here <https://github.com/exo-samples/docs-samples/tree/master/overriding-application-template>`__
for downloading.

1. Take a look at
   ``$PLATFORM_TOMCAT_HOME/webapps/eXoResources/groovy/organization/webui/component/UIOrganizationPortlet.gtmpl``.
   This file contains the template definitions of the Organization 
   portlet.

|image35|

2. Create a ``UIOrganizationPortlet.gtmpl`` file and put it in
   ``custom-extension.war!/groovy/organization/webui/component``.

3. Copy the existing content from ``UIOrganizationPortlet.gtmpl`` of 
   Step 1 into your ``custom-extension.war!/groovy/organization/webui/component/UIOrganizationPortlet.gtmpl``,
   then modify your file, for example change the color of text and
   background on the toolbar.

4. Refresh the browser if you are running eXo Platform at the developer 
   mode. You will see your modification take effect on the 
   **Organization** portlet.

|image36|

.. note:: If you are not running eXo Platform in the developer mode, you will have to restart the server.

.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins:

Applications Plugins
~~~~~~~~~~~~~~~~~~~~~

Hereafter are some tutorials to write eXo add-ons using the UI Extension
framework:

-  :ref:`Creating a new activity type <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.ActivityType>`

-  :ref:`Creating an activity composer <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.ActivityComposer>`

-  :ref:`Adding your own Content UI Extensions <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.ContentUIExtension>`

-  :ref:`Writing an action extension in Wiki <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.WikiAction>`

An explanation of the base framework can be found at `Platform Reference
Guide - UI
Extensions <#PLFRefGuide.PLFDevelopment.Extensions.UIExtensions>`__.

In general, writing a complete UI Extension involves filter (business
logic or access permission), localization and CSS customization. You
might read more about the subjects:

-  :ref:`Internal filter <#PLFRefGuide.PLFDevelopment.Extensions.UIExtensions.InternalFilter>`

-  :ref:`External filter <#PLFRefGuide.PLFDevelopment.Extensions.UIExtensions.ExternalFilter>`

-  :ref:`Resource Bundle service <#sect-Reference_Guide-Internationalization_Configuration-ResourceBundleService>`__

-  :ref:`Skin service <#sect-Reference_Guide-Skinning_Portal-Skin_Service>`__

-  :ref:`JavaScript development <#sect-Reference_Guide-Javascript_Development>`__

.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.ActivityType:

Creating a new activity type
-----------------------------

The creation of an activity type involves a UI Component which is
required for the activity display. In this tutorial, you define an
activity type and your own UI Component to display it. You can download
all source code of this tutorial
`here <https://github.com/exo-samples/docs-samples/tree/4.3.x/create-new-activity-type>`__.

1. Create a Maven project as follows:

|image37|

2. Edit the ``pom.xml`` file:

   .. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
			<modelVersion>4.0.0</modelVersion>
			<parent>
				<artifactId>integ-wiki</artifactId>
				<groupId>org.exoplatform.integration</groupId>
				<version>4.0.4</version>
			</parent>
			<artifactId>wiki-activity-type</artifactId>
			<packaging>jar</packaging>
			<version>1.0</version>
			<name>Activity type</name>
			<description>UI Extension - Activity type</description>
			<dependencies>
				<dependency>
					<groupId>org.exoplatform.platform-ui</groupId>
					<artifactId>platform-ui-webui-core</artifactId>
				</dependency>
				<dependency>
					<groupId>org.gatein.portal</groupId>
					<artifactId>exo.portal.webui.framework</artifactId>
				</dependency>
				<dependency>
					<groupId>org.exoplatform.social</groupId>
					<artifactId>social-component-webui</artifactId>
				</dependency>
				<dependency>
					<groupId>org.exoplatform.kernel</groupId>
					<artifactId>exo.kernel.container</artifactId>
				</dependency>
				<dependency>
					<groupId>org.exoplatform.core</groupId>
					<artifactId>exo.core.component.security.core</artifactId>
				</dependency>
				<dependency>
					<groupId>org.exoplatform.social</groupId>
					<artifactId>social-component-core</artifactId>
				</dependency>
				<dependency>
					<groupId>org.exoplatform.wiki</groupId>
					<artifactId>wiki-service</artifactId>
				</dependency>
			</dependencies>
		</project>

3. Edit the ``SampleUIActivity.java`` file:

   .. code:: java

		package com.acme.samples.activitytype;

		import org.exoplatform.webui.core.lifecycle.UIFormLifecycle;
		import org.exoplatform.webui.config.annotation.ComponentConfig;
		import org.exoplatform.social.webui.activity.BaseUIActivity;

		@ComponentConfig(
		  lifecycle = UIFormLifecycle.class,
		  template = "classpath:groovy/com/acme/samples/SampleUIActivity.gtmpl"
		)

		public class SampleUIActivity extends BaseUIActivity {

		}

4. Edit the ``SampleUIActivity.gtmpl`` file. You can copy the code of
   ``social-extension.war!/groovy/social/webui/activity/UIDefaultActivity.gtmpl``.

	Some samples that you can refer:

	-  ``integ-wiki-social-4.x.x.jar!/groovy/wiki/social-integration/plugin/space/WikiUIActivity.gtmpl``

	-  ``integ-calendar-social-4.x.x.jar!/groovy/cs/social-integration/plugin/space/CalendarUIActivity.gtmpl``

	-  ``integ-ecms-social-4.x.x.jar!/groovy/ecm/social-integration/plugin/space/ContentUIActivity.gtmpl``

5. Edit the ``SampleUIActivityBuilder.java`` file:

   .. code:: java

		package com.acme.samples.activitytype;

		import org.exoplatform.social.core.activity.model.ExoSocialActivity;
		import org.exoplatform.social.webui.activity.BaseUIActivity;
		import org.exoplatform.social.webui.activity.BaseUIActivityBuilder;

		public class SampleUIActivityBuilder extends BaseUIActivityBuilder {

		  @Override
		  protected void extendUIActivity(BaseUIActivity uiActivity, ExoSocialActivity activity) {
			//
		  }
		}

6. Edit the ``configuration.xml`` file:

   .. code:: xml

		<configuration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd"
		  xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">
			<external-component-plugins>
				<target-component>org.exoplatform.webui.ext.UIExtensionManager</target-component>
				<component-plugin>
					<name>add.action</name>
					<set-method>registerUIExtensionPlugin</set-method>
					<type>org.exoplatform.webui.ext.UIExtensionPlugin</type>
					<init-params>
						<object-param>
							<name>Space Activity</name>
							<object type="org.exoplatform.social.webui.activity.UIActivityExtension">
								<field name="type"><string>org.exoplatform.social.webui.activity.BaseUIActivity</string></field>
								<field name="name"><string>test-activity-type</string></field>
								<field name="component">
									<string>com.acme.samples.activitytype.SampleUIActivity</string>
								</field>
								<field name="activityBuiderClass">
									<string>com.acme.samples.activitytype.SampleUIActivityBuilder</string>
								</field>
							</object>
						</object-param>
					</init-params>
				</component-plugin>
			</external-component-plugins>

			<external-component-plugins>
				<target-component>org.exoplatform.wiki.service.WikiService</target-component>
				<component-plugin>
					<name>Wiki listener</name>
					<set-method>addComponentPlugin</set-method>
					<type>com.acme.samples.activitytype.GenerateActivity4Testing</type>
					<init-params>
						<value-param>
							<name>wikiPortletName</name>
							<value>wiki</value>
						</value-param>
					</init-params>
				</component-plugin>
			</external-component-plugins>
			
		</configuration>

	The configuration fulfils two tasks:

	-  Register the plugin for UIActivityExtension, using the UI Extension
	   mechanism. Pay attention that the activity type is registered as
	   ``test-activity-type``.

	-  Register your GenerateActivity4Testing as a wiki listener.

7. Edit the ``GenerateActivity4Testing.java`` file:

   .. code:: java

		package com.acme.samples.activitytype;

		import org.exoplatform.container.PortalContainer;
		import org.exoplatform.services.security.ConversationState;
		import org.exoplatform.social.core.identity.model.Identity;
		import org.exoplatform.social.core.identity.provider.OrganizationIdentityProvider;

		import org.exoplatform.social.core.activity.model.ExoSocialActivity;
		import org.exoplatform.social.core.activity.model.ExoSocialActivityImpl;
		import org.exoplatform.social.core.manager.ActivityManager;
		import org.exoplatform.social.core.manager.IdentityManager;

		import org.exoplatform.wiki.service.listener.PageWikiListener;
		import org.exoplatform.wiki.mow.api.Page;

		public class GenerateActivity4Testing extends PageWikiListener {
			
			public static final String ACTIVITY_TYPE = "test-activity-type";
			
			private void generateActivity() throws Exception {
				// Get current user and assign to ownerStream
				String username = ConversationState.getCurrent().getIdentity().getUserId();
				IdentityManager identityM = 
					(IdentityManager) PortalContainer.getInstance().getComponentInstanceOfType(IdentityManager.class);
				Identity userIdentity = identityM.getOrCreateIdentity(OrganizationIdentityProvider.NAME, username, false);
				Identity ownerStream = userIdentity;
				
				// New activity
				ExoSocialActivityImpl activity = new ExoSocialActivityImpl();
				activity.setUserId(userIdentity.getId());
				activity.setTitle("This is an activity of type <b>" + ACTIVITY_TYPE + "</b>.");
				activity.setBody("This is for testing");
				activity.setType(ACTIVITY_TYPE);
				
				// Save activity
				ActivityManager activityM = 
					(ActivityManager) PortalContainer.getInstance().getComponentInstanceOfType(ActivityManager.class);
				activityM.saveActivityNoReturn(ownerStream, activity);
				
			}
			
			@Override
			public void postAddPage(String wikiType, String wikiOwner, String pageId, Page page) throws Exception {
				
				generateActivity();
				
			}
			
			@Override
			public void postDeletePage(String wikiType, String wikiOwner, String pageId, Page page) throws Exception {
				//
			}
			
			@Override
			public void postUpdatePage(String wikiType, String wikiOwner, String pageId, Page page, String wikiUpdateType) throws Exception {
				//
			}
		}

	This is supposed to create an activity of ``test-activity-type`` 
	when a wiki page is added.

8. Build and deploy the ``.jar`` file
   (``target/wiki-activity-type-1.0.jar``) into eXo Platform package.

	-  ``$PLATFORM_TOMCAT_HOME/lib`` (in Tomcat)

	-  ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear!/lib`` (in
	   JBoss)

**Testing**

Start the server, log in and go to Wiki. Here, create a new wiki page,
then test the activity in the Intranet homepage:

|image38|

You have re-used the UIDefaultActivity template. To imagine out what can
be done with your own template, let's see the wiki activity that uses
WikiUIActivity.gtmpl. Pay attention to the book icon on the leftmost,
the link to the relevant wiki page, and the excerpt of its content:

|image39|

**What is ActivityBuilder?**

In the above example, you extend BaseUIActivityBuilder and do not write
any extra code. To understand what you can do with your ActivityBuilder,
let's see the following code of UILinkActivityBuilder:

.. code:: java

    public class UILinkActivityBuilder extends BaseUIActivityBuilder {
      private static final Log LOG = ExoLogger.getLogger(UILinkActivityBuilder.class);
      @Override
      protected void extendUIActivity(BaseUIActivity uiActivity, ExoSocialActivity activity) {
        UILinkActivity uiLinkActivity = (UILinkActivity) uiActivity;
        Map<String, String> templateParams = activity.getTemplateParams();
        uiLinkActivity.setLinkSource(templateParams.get(UILinkActivityComposer.LINK_PARAM));
        uiLinkActivity.setLinkTitle(templateParams.get(UILinkActivityComposer.TITLE_PARAM));
        uiLinkActivity.setLinkImage(templateParams.get(UILinkActivityComposer.IMAGE_PARAM));
        uiLinkActivity.setLinkDescription(templateParams.get(UILinkActivityComposer.DESCRIPTION_PARAM));
        uiLinkActivity.setLinkComment(templateParams.get(UILinkActivityComposer.COMMENT_PARAM));
      }
    }

You can see more complex codes at `the eXo Integration project <https://github.com/exoplatform/integration/tree/develop>`__
where many activity types are created. The example of this tutorial is
very similar to (and simpler than) the `ks-wiki:spaces <https://github.com/exoplatform/integration/tree/develop/integ-wiki>`__
type.

.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.ActivityComposer:

Creating an activity composer
-------------------------------

The Activity Stream portlet features a Composer container that contains
some built-in composers, like the *File* composer to share a document,
or the *Link* composer to share any external media resource. In general,
a composer is a UI form/dialog that binds to a Java class to compose and
save an activity.

The container is extensible, so you can add your own composer. In this
tutorial, it is assumed that you will add a *LocationComposer* that
functions as below:

-  In the container, a Check-in icon is added (see the screenshot). A
   click on it will expand an input field and a Check-in button.

-  The user inputs his location and clicks the button. The input is
   validated (for simplification, the sample code just checks that it is
   empty or not), then the Share button is enabled. By clicking Share,
   the user posts to the activity stream a message saying he "checked in
   at" the location.

|image40|

Your project involves a Java class, a Groovy template, JavaScript and
some other resources. All source code of this project is provided
`here <https://github.com/exo-samples/docs-samples/tree/master/create-activity-composer>`__
for downloading.

1. Create a Maven project with 2 modules:

|image41|

2. Edit the ``pom.xml`` file:

	.. code:: xml

		<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
		  <modelVersion>4.0.0</modelVersion>
		  <parent>
			<artifactId>social</artifactId>
			<groupId>org.exoplatform.social</groupId>
			<version>4.0.4</version>
		  </parent>
		  <artifactId>social-location-composer</artifactId>
		  <version>4.0.x</version>
		  <packaging>pom</packaging>
		  <name>eXo Social - Location Composer</name>
		  <description>eXo Social - Location Composer</description>
		  <modules>
			<module>resources</module>
			<module>composer-plugin</module>
		  </modules>
		</project>

3. Create folders and files for the **composer-plugin** folder, as follows:

|image42|

4. Edit the ``composer-plugin/pom.xml`` file:

	.. code:: xml

		<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
		  <modelVersion>4.0.0</modelVersion>
		  <parent>
			<artifactId>social-location-composer</artifactId>
			<groupId>org.exoplatform.social</groupId>
			<version>4.0.x</version>
		  </parent>
		  <groupId>com.acme.samples</groupId>
		  <artifactId>acme-location-composer-plugin</artifactId>
		  <packaging>jar</packaging>
		  <name>Sample activity composer plugin</name>
		  <description>Sample activity composer plugin</description>
		  <dependencies>
			<dependency>
			  <groupId>org.exoplatform.social</groupId>
			  <artifactId>social-component-common</artifactId>
			  <version>4.0.4</version>
			  <scope>provided</scope>
			</dependency>
			<dependency>
			  <groupId>org.exoplatform.social</groupId>
			  <artifactId>social-component-core</artifactId>
			  <version>4.0.4</version>
			  <scope>provided</scope>
			</dependency>
			 <dependency>
			  <groupId>org.exoplatform.kernel</groupId>
			  <artifactId>exo.kernel.commons</artifactId>
			  <version>2.4.7-GA</version>
			  <scope>provided</scope>
			</dependency>
			<dependency>
			  <groupId>org.exoplatform.social</groupId>
			  <artifactId>social-component-webui</artifactId>
			  <version>4.0.4</version>
			  <scope>provided</scope>
			</dependency>
			<dependency>
			  <groupId>org.exoplatform.platform-ui</groupId>
			  <artifactId>platform-ui-webui-core</artifactId>
			  <version>4.0.4</version>
			  <scope>provided</scope>
			</dependency>
			<dependency>
			  <groupId>org.gatein.portal</groupId>
			  <artifactId>exo.portal.component.web.controller</artifactId>
			  <version>3.5.8-PLF</version>
			  <scope>provided</scope>
			</dependency>
			<dependency>
			  <groupId>org.gatein.portal</groupId>
			  <artifactId>exo.portal.webui.framework</artifactId>
			  <version>3.5.8-PLF</version>
			  <scope>provided</scope>
			</dependency>
		  </dependencies>
		</project>

5. Edit the ``SampleActivityComposer.java`` file:

	.. code:: java

		package com.acme.samples;

		import java.util.LinkedHashMap;
		import java.util.Map;
		import java.util.ResourceBundle;

		import org.exoplatform.social.core.activity.model.ExoSocialActivity;
		import org.exoplatform.social.core.activity.model.ExoSocialActivityImpl;
		import org.exoplatform.social.core.application.PeopleService;
		import org.exoplatform.social.core.identity.model.Identity;
		import org.exoplatform.social.core.identity.provider.OrganizationIdentityProvider;
		import org.exoplatform.social.core.identity.provider.SpaceIdentityProvider;
		import org.exoplatform.social.core.space.model.Space;
		import org.exoplatform.social.core.space.spi.SpaceService;
		import org.exoplatform.social.webui.Utils;
		import org.exoplatform.social.webui.activity.UIDefaultActivity;
		import org.exoplatform.social.webui.composer.UIActivityComposer;
		import org.exoplatform.social.webui.composer.UIComposer;
		import org.exoplatform.social.webui.composer.UIComposer.PostContext;
		import org.exoplatform.social.webui.profile.UIUserActivitiesDisplay;
		import org.exoplatform.social.webui.profile.UIUserActivitiesDisplay.DisplayMode;
		import org.exoplatform.social.webui.space.UISpaceActivitiesDisplay;
		import org.exoplatform.web.application.ApplicationMessage;
		import org.exoplatform.webui.application.WebuiRequestContext;
		import org.exoplatform.webui.config.annotation.ComponentConfig;
		import org.exoplatform.webui.config.annotation.EventConfig;
		import org.exoplatform.webui.core.UIApplication;
		import org.exoplatform.webui.core.UIComponent;
		import org.exoplatform.webui.event.Event;
		import org.exoplatform.webui.event.EventListener;
		import org.exoplatform.webui.form.UIFormStringInput;
		import org.exoplatform.webui.form.UIFormTextAreaInput;

		@ComponentConfig(template = "war:/groovy/com/acme/samples/SampleActivityComposer.gtmpl", events = {
			@EventConfig(listeners = SampleActivityComposer.CheckinActionListener.class),
			@EventConfig(listeners = UIActivityComposer.CloseActionListener.class),
			@EventConfig(listeners = UIActivityComposer.SubmitContentActionListener.class),
			@EventConfig(listeners = UIActivityComposer.ActivateActionListener.class) })
		public class SampleActivityComposer extends UIActivityComposer {

		  public static final String LOCATION = "location";
		  
		  private String location_ = "";

		  private boolean isLocationValid_ = false;

		  private Map<String, String> templateParams;

		  public SampleActivityComposer() {
			setReadyForPostingActivity(false);
			UIFormStringInput inputLocation = new UIFormStringInput("InputLocation", "InputLocation", null);
			addChild(inputLocation);
		  }

		  public void setLocationValid(boolean isValid) {
			isLocationValid_ = isValid;
		  }

		  public boolean isLocationValid() {
			return isLocationValid_;
		  }

		  public void setTemplateParams(Map<String, String> tempParams) {
			templateParams = tempParams;
		  }

		  public Map<String, String> getTemplateParams() {
			return templateParams;
		  }

		  public void clearLocation() {
			location_ = "";
		  }

		  public String getLocation() {
			return location_;
		  }

		  private void setLocation(String city, WebuiRequestContext requestContext) {
			location_ = city;
			if (location_ == null || location_ == "") {
			  UIApplication uiApp = requestContext.getUIApplication();
			  uiApp.addMessage(new ApplicationMessage("Invalid location!", null, ApplicationMessage.ERROR));
			  return;
			}

			templateParams = new LinkedHashMap<String, String>();
			templateParams.put(LOCATION, location_);

			setLocationValid(true);
		  }

		  @Override
		  public void onActivate(Event<UIActivityComposer> uiActivityComposer) {
		  }

		  @Override
		  public void onSubmit(Event<UIActivityComposer> uiActivityComposer) {
		  }

		  @Override
		  public void onClose(Event<UIActivityComposer> uiActivityComposer) {
		  }

		  /* called when user clicks "Share" button.
		   * create and save activity.
		   */
		  @Override
		  public void onPostActivity(PostContext postContext,
									 UIComponent uiComponent,
									 WebuiRequestContext requestContext,
									 String postedMessage) throws Exception {
			if (postContext == UIComposer.PostContext.SPACE){
			  UISpaceActivitiesDisplay uiDisplaySpaceActivities = (UISpaceActivitiesDisplay) getActivityDisplay();
			  Space space = uiDisplaySpaceActivities.getSpace();

			  Identity spaceIdentity = Utils.getIdentityManager().getOrCreateIdentity(SpaceIdentityProvider.NAME,
																	   space.getPrettyName(),
																	   false);
			  ExoSocialActivity activity = new ExoSocialActivityImpl(Utils.getViewerIdentity().getId(),
										   SpaceService.SPACES_APP_ID,
										   postedMessage,
										   null);
			  activity.setType(UIDefaultActivity.ACTIVITY_TYPE);
			  Utils.getActivityManager().saveActivityNoReturn(spaceIdentity, activity);
			  uiDisplaySpaceActivities.init();
			} else if (postContext == PostContext.USER) {
			  UIUserActivitiesDisplay uiUserActivitiesDisplay = (UIUserActivitiesDisplay) getActivityDisplay();
			  Identity ownerIdentity = Utils.getIdentityManager().getOrCreateIdentity(OrganizationIdentityProvider.NAME,
																		   uiUserActivitiesDisplay.getOwnerName(), false);
			  if (postedMessage.length() > 0) {
				postedMessage += "<br>";
			  }
			  
			  if (this.getLocation() != null && this.getLocation().length() > 0) {
				postedMessage += String.format("%s checked in at %s.", ownerIdentity.getProfile().getFullName(), this.getLocation());
			  } else {
				postedMessage += String.format("%s checked in at Nowhere.", ownerIdentity.getProfile().getFullName());
			  }
			  ExoSocialActivity activity = new ExoSocialActivityImpl(Utils.getViewerIdentity().getId(),
											   PeopleService.PEOPLE_APP_ID,
											   postedMessage,
											   null);
			  activity.setType(UIDefaultActivity.ACTIVITY_TYPE);
			  activity.setTemplateParams(templateParams);
			  this.clearLocation();
			  Utils.getActivityManager().saveActivityNoReturn(ownerIdentity, activity);

			  this.setLocationValid(false);
			  if (uiUserActivitiesDisplay.getSelectedDisplayMode() == DisplayMode.MY_SPACE) {
				uiUserActivitiesDisplay.setSelectedDisplayMode(DisplayMode.ALL_ACTIVITIES);
			  }
			}
		  }

		  public static class CheckinActionListener extends EventListener<SampleActivityComposer> {
			
			// this is called on event "Checkin" (when users clicks Check-in button).
			@Override
			public void execute(Event<SampleActivityComposer> event) throws Exception {
			  WebuiRequestContext requestContext = event.getRequestContext();
			  SampleActivityComposer sampleActivityComposer = event.getSource();

			  String city;
			  try {
				city = requestContext.getRequestParameter(OBJECTID).trim();
			  } catch (Exception e) {
				System.out.println("Exception when getting OBJECTID!");
				return;
			  }

			  if (city != null && city.length() > 0) {
				sampleActivityComposer.setLocationValid(true);
			  } else {
				sampleActivityComposer.setLocationValid(false);
			  }
			  
			  sampleActivityComposer.setLocation(city, requestContext);
			  if (sampleActivityComposer.location_ != null && sampleActivityComposer.location_.length() > 0) {
				requestContext.addUIComponentToUpdateByAjax(sampleActivityComposer);
				event.getSource().setReadyForPostingActivity(true);
			  }
			}
		  }

		}

	Some remarks:

	-  The groovy template
	   (``groovy/com/acme/SampleActivityComposer.gtmpl``) is configured in
	   this class to be rendered when the composer is activated.

	-  The inner class (``CheckinActionListener``) listens to the "Checkin"
	   events (when the user clicks the Check-in button). The class name is
	   bound to the event name.

6. Edit the ``composer-plugin/src/main/resources/conf/configuration.xml``
   file to register the extension:

	.. code:: xml

		<configuration
			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd"
			xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">

		  <external-component-plugins>
			<target-component>org.exoplatform.container.definition.PortalContainerConfig</target-component>
			<component-plugin>
			  <name>Add PortalContainer Definitions</name>
			  <set-method>registerChangePlugin</set-method>
			  <type>org.exoplatform.container.definition.PortalContainerDefinitionChangePlugin</type>
			  <priority>101</priority>
			  <init-params>
				<values-param>
				  <name>apply.specific</name>
				  <value>portal</value>
				</values-param>
				<object-param>
				  <name>addDependencies</name>
				  <object type="org.exoplatform.container.definition.PortalContainerDefinitionChange$AddDependencies">
					<field name="dependencies">
					  <collection type="java.util.ArrayList">
						<value>
						  <string>acme-extension</string>
						</value>
					  </collection>
					</field>
				  </object>
				</object-param>
			  </init-params>
			</component-plugin>
		  </external-component-plugins>
		</configuration>

7. Edit the ``composer-plugin/src/main/resources/conf/portal/configuration.xml``
   file to configure ``UIExtensionManager`` and ``ResourceBundleService``:

	.. code:: xml

		<configuration
		   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		   xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_1.xsd http://www.exoplatform.org/xml/ns/kernel_1_1.xsd"
		   xmlns="http://www.exoplatform.org/xml/ns/kernel_1_1.xsd">
		  <external-component-plugins>
			<target-component>org.exoplatform.webui.ext.UIExtensionManager</target-component>
			<component-plugin>
			  <name>add.action</name>
			  <set-method>registerUIExtensionPlugin</set-method>
			  <type>org.exoplatform.webui.ext.UIExtensionPlugin</type>
			  <init-params>
				<object-param>
				  <name>Sample Activity Composer</name>
				  <object type="org.exoplatform.webui.ext.UIExtension">
					<field name="type"><string>org.exoplatform.social.webui.composer.UIActivityComposer</string></field>
					<field name="name"><string>SampleActivityComposer</string></field>
					<field name="component"><string>com.acme.samples.SampleActivityComposer</string></field>
					<field name="rank"><int>1</int></field>
				  </object>
				</object-param>
			  </init-params>
			</component-plugin>
		  </external-component-plugins>

		  <external-component-plugins>
			<target-component>org.exoplatform.services.resources.ResourceBundleService</target-component>
			<component-plugin>
			  <name>Location Activity Composer Plugin</name>
			  <set-method>addResourceBundle</set-method>
			  <type>org.exoplatform.services.resources.impl.BaseResourceBundlePlugin</type>
			  <init-params>
				<values-param>
				  <name>classpath.resources</name>
				  <description></description>
				  <value>locale.com.acme.LocationComposer</value>
				</values-param>
				<values-param>
				  <name>portal.resource.names</name>
				  <description></description>
				  <value>locale.com.acme.LocationComposer</value>
				</values-param>
			  </init-params>
			</component-plugin>
		  </external-component-plugins>
		</configuration>

8. Edit the resources in the ``locale/com/acme/LocationComposer_en.properties`` 
   file (that is configured as ``locale.com.acme.LocationComposer`` in 
   the previous step):

	::

		UIActivityComposer.label.SampleActivityComposer=Check-in
		com.acme.LocationComposer.CheckinBtn=Check-in

	The first line is for the tooltip of the composer icon, it is looked 
	up by the composer container so you must use the property name as it 
	is. The second property is for the label of the button, it is 
	handled by yourself in the ``SampleActivityComposer.gtmpl`` so name 
	it as you want.

9. Create folders and files of the ``resources`` module. It will be 
   built into ``acme-extension.war`` that you have registered in the
   ``conf/configuration.xml`` file.

|image43|

10. Edit the ``resources/pom.xml`` file:

	.. code:: xml

		<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
		  <modelVersion>4.0.0</modelVersion>
		  <parent>
			<artifactId>social-location-composer</artifactId>
			<groupId>org.exoplatform.social</groupId>
			<version>4.0.x</version>
		  </parent>
		  <groupId>com.acme.samples</groupId>
		  <artifactId>acme-extension</artifactId>
		  <packaging>war</packaging>
		  <name>eXo Social Location Composer Resources</name>
		  <description>eXo Social Location Composer Resources</description>
		  <build>
			<finalName>acme-extension</finalName>
		  </build>
		</project>

11. Edit the ``web.xml`` file:

	.. code:: xml

		<web-app>
		  <display-name>acme-extension</display-name>
		  <listener>
			<listener-class>org.exoplatform.container.web.PortalContainerConfigOwner</listener-class>
		  </listener>
		  <filter>
			<filter-name>ResourceRequestFilter</filter-name>
			<filter-class>org.exoplatform.portal.application.ResourceRequestFilter</filter-class>
		  </filter>

		  <filter-mapping>
			<filter-name>ResourceRequestFilter</filter-name>
			<url-pattern>/*</url-pattern>
		  </filter-mapping>

		  <servlet>
			<servlet-name>GateInServlet</servlet-name>
			<servlet-class>org.gatein.wci.api.GateInServlet</servlet-class>
			<load-on-startup>0</load-on-startup>
		  </servlet>
		  <servlet-mapping>
			<servlet-name>GateInServlet</servlet-name>
			<url-pattern>/gateinservlet</url-pattern>
		  </servlet-mapping>

		</web-app>

12. Edit the ``gatein-resources.xml`` file to register JavaScript and 
    CSS resources:

	.. code:: xml

		<gatein-resources
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		xsi:schemaLocation="http://www.gatein.org/xml/ns/gatein_resources_1_3 http://www.gatein.org/xml/ns/gatein_resources_1_3"
		  xmlns="http://www.gatein.org/xml/ns/gatein_resources_1_3">
		  
		  <portal-skin>
			<skin-name>Default</skin-name>
			<skin-module>acme.samples</skin-module>
			<css-path>/skin/DefaultSkin/Stylesheet.css</css-path>
		  </portal-skin>
		  <module>
			<name>location-activity-composer</name>
			<script>
			  <path>/javascript/acme/samples/LocationComposer.js</path>
			</script>
			<depends>
			  <module>socialUtil</module>
			</depends>
			<depends>
			  <module>jquery</module>
			  <as>jq</as>
			</depends>
			<depends>
			   <module>mentionsPlugin</module>
			</depends>
			<depends>
			  <module>mentionsLib</module>
			  <as>mentions</as>
			</depends>
			<depends>
			  <module>webui</module>
			</depends>
		  </module>
		</gatein-resources>

13. Edit the ``javascript/acme/samples/LocationComposer.js`` file:

	.. code:: javascript

		(function($) {
		  var LocationComposer = {
			ENTER_KEY_CODE: 13,
			
			onLoad: function(params) {
			  LocationComposer.configure(params);
			  LocationComposer.init();
			},
			
			configure: function(params) {
			  this.locationValid = params.locationValid || false;
			  this.inputLocationId = params.inputLocationId || 'InputLocation';
			  this.checkinButtonId = params.checkinButtonId || 'CheckinButton';
			  this.checkinUrl = decodeURI(params.checkinUrl || "");
			  this.location = params.location || '';
			},
			
			init: function() {
			  LocationComposer = this;
			  
			  if (this.locationValid === "false") {
				this.inputLocation = $('#' + this.inputLocationId);
				this.checkinButton = $('#' + this.checkinButtonId);
				
				var LocationComposer = this;
				var inputLocation = this.inputLocation;
				var checkinBtn = this.checkinButton;
				inputLocation.on('focus', function(evt) {
				  if (inputLocation.val() === '') {
					inputLocation.val('');
				  }
				});
				this.inputLocation.on('keypress', function(evt) {
				  if (LocationComposer.ENTER_KEY_CODE == (evt.which ? evt.which : evt.keyCode)) {
					$(checkinBtn).click();
				  } 
				});
				this.checkinButton.removeAttr('disabled');
				this.checkinButton.on('click', function(evt) {
				  if (inputLocation.val() === '') {
					return;
				  }
				  var url = LocationComposer.checkinUrl.replace(/&amp;/g, "&") + '&objectId=' + encodeURI(inputLocation.val()) + '&ajaxRequest=true';
				  ajaxGet(url, function() {
					try {
					  $('textarea#composerInput').exoMentions('showButton', function() {});
					} catch (e) {
					  console.log(e);
					}
				  });
				});
			  }
			  
			  var closeButton = $('#UIActivityComposerContainer').find('a.uiIconClose:first');
			  if (closeButton.length > 0) {
				closeButton.on('click', function() {
				  $('textarea#composerInput').exoMentions('clearLink', function() { });
				});
			  }
			}
		  };
		  return LocationComposer;
		})(jq);

14. Edit the ``SampleActivityComposer.gtmpl`` file:

	.. code:: groovy

		<%
		  import org.exoplatform.webui.form.UIFormStringInput;
		  
		  def uicomponentId = uicomponent.id;
		  def labelCheckin = _ctx.appRes("com.acme.LocationComposer.CheckinBtn");
		  
		  def locationValid = uicomponent.isLocationValid();
		  uicomponent.setLocationValid(false);
		  def location = uicomponent.getLocation();
		  
		  def params = "{" +
						  "locationValid: '" + locationValid + "'," +
						  "inputLocationId: 'InputLocation'," +
						  "checkinButtonId: 'CheckinButton'," +
						  "checkinUrl: encodeURI('" + uicomponent.url("Checkin") + "')," +
						  "location: '" + location + "'" +
						  "}";
		   
		  def requestContext = _ctx.getRequestContext();
		  def jsManager = requestContext.getJavascriptManager();
		  jsManager.require("SHARED/jquery", "jq").require("SHARED/location-activity-composer", "locComposer").addScripts("locComposer.onLoad($params);");
		  
		%>
		<div id="$uicomponentId">
		  <div id="LocationComposerContainer" class="uiComposerLink clearfix">
			<button id="CheckinButton" class="btn pull-right">$labelCheckin</button>
			<div class="Title Editable">
			  <%if (locationValid) {%>
				<span class="tabName">Location: $location</span>
			  <%} else {
				uicomponent.renderChild(UIFormStringInput.class);
			  }%>
			</div>
		  </div>
		</div>

	This code calls the ``location-activity-composer`` JavaScript module
	that you registered in the ``gatein-resources.xml`` file.

15. Edit the CSS resources in the ``skin/Default/Stylesheet.css`` file:

	.. code:: css

		.sampleactivitycomposer .uiIconSocSampleActivityComposer {
		  background: url('/eXoSkin/skin/images/themes/default/social/skin/UIManageSpaces/Member.png') no-repeat left 3px 3px;
		}
		a.sampleactivitycomposer:hover .uiIconSocSampleActivityComposer  {
		  background: url('/eXoSkin/skin/images/themes/default/social/skin/UIManageSpaces/Member.png') no-repeat left 3px 3px;
		}

	Here you re-use the background image that is packaged in
	``eXoSkin.war``. You can create your own icon.

16. Build the project, then deploy
``composer-plugin/target/acme-location-composer-plugin-4.0.x.jar`` into
``$PLATFORM_TOMCAT_HOME/lib``, and
``resources/target/acme-extension.war`` into
``$PLATFORM_TOMCAT_HOME/webapps``.

**Testing**

Click the icon (with the "Check-in" tooltip) to bring up the location
input. Type something, click Check-in, then click Share. An activity
will display like you see at the beginning of this page.

.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.ContentUIExtension:

Adding your own Content UI Extensions
--------------------------------------

There are many UI Components in Content Explorer and Administration that
allows plugins:

-  **Action bar**

	|image66|

-  **File viewer**

	|image67|

-  **Sidebar**

	|image68|

-  **Admin control panel**

	|image69|

-  **Context menu in the main working area**

	|image70|


Creating an action extension
`````````````````````````````

This section shows you how to write an action in PRODUCT. Specifically,
a "ShowNodePath" button will be displayed in Sites Explorer. When
clicking on it, the node path of the current node will be shown. You can
download the source code used in this section
`here <https://github.com/exo-samples/docs-samples/tree/4.3.x/create-action-extension>`__.

1. Create a Maven project which has the following directory structure:

	-  ``pom.xml``: The project's POM file.

	-  ``ShowNodePathActionComponent.java``: The simple action to view the
	   node path.

	-  ``configuration.xml``: The configuration file to register your action
	   with the *org.exoplatform.webui.ext.UIExtensionManager* service.

Here is content of the ``pom.xml`` file:

.. code:: xml

    <?xml version="1.0" encoding="UTF-8"?>
    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
        <modelVersion>4.0.0</modelVersion>
        <groupId>com.acme</groupId>
        <artifactId>action-example</artifactId>
        <version>1.0</version>
        <packaging>jar</packaging>
        
        <properties>
            <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        </properties>
        
        <dependencies>
            <dependency>
                <groupId>org.gatein.portal</groupId>
                <artifactId>exo.portal.webui.core</artifactId>
                <version>3.5.2.Final</version>
                <scope>provided</scope>
            </dependency>
            <dependency>
                <groupId>org.exoplatform.commons</groupId>
                <artifactId>commons-webui-ext</artifactId>
                <version>4.0.0</version>
                <scope>provided</scope>
            </dependency>
            <dependency>
                <groupId>org.exoplatform.ecms</groupId>
                <artifactId>ecms-core-webui-explorer</artifactId>
                <version>4.0.0</version>
            </dependency>
        </dependencies>
    </project>

2. Create a new action and its corresponding listener by editing the
   ``ShowNodePathActionComponent`` class as below:

	.. code:: java

		package com.acme;

		import javax.jcr.Node;

		import org.exoplatform.ecm.webui.component.explorer.UIJCRExplorer;
		import org.exoplatform.ecm.webui.component.explorer.control.listener.UIActionBarActionListener;
		import org.exoplatform.web.application.ApplicationMessage;
		import org.exoplatform.webui.config.annotation.ComponentConfig;
		import org.exoplatform.webui.config.annotation.EventConfig;
		import org.exoplatform.webui.core.UIComponent;
		import org.exoplatform.webui.event.Event;

		@ComponentConfig(
			events = { @EventConfig(listeners = ShowNodePathActionComponent.ShowNodePathActionListener.class) })

		public class ShowNodePathActionComponent extends UIComponent {

			public static class ShowNodePathActionListener extends UIActionBarActionListener<ShowNodePathActionComponent> {
				@Override
				protected void processEvent(Event<ShowNodePathActionComponent> event) throws Exception {
					UIJCRExplorer uiJCRExplorer = event.getSource().getAncestorOfType(UIJCRExplorer.class);
					Node node = uiJCRExplorer.getCurrentNode();
					event.getRequestContext()
					.getUIApplication()
					.addMessage(new ApplicationMessage("Node path:" + node.getPath(), null, ApplicationMessage.INFO));
				}
			}
		}

3. Register the new action with UIExtensionManager in the
   ``configuration.xml`` file as below:

	.. code:: xml

		<configuration xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">
			<external-component-plugins>
				<target-component>org.exoplatform.webui.ext.UIExtensionManager</target-component>
				<component-plugin>
					<name>add.action</name>
					<set-method>registerUIExtensionPlugin</set-method>
					<type>org.exoplatform.webui.ext.UIExtensionPlugin</type>
					<init-params>
						<object-param>
							<name>ShowNodePath</name>
							<object type="org.exoplatform.webui.ext.UIExtension">
								<field name="type">
									<string>org.exoplatform.ecm.dms.UIActionBar</string>
								</field>
								<field name="name">
									<string>ShowNodePath</string>
								</field>
								<field name="component">
									<string>com.acme.ShowNodePathActionComponent</string>
								</field>
							</object>
						</object-param>
					</init-params>
				</component-plugin>
			</external-component-plugins>
		</configuration>

Some remarks about the Java code and the configuration:

-  ``ShowNodePath`` will be used to label the action, until you
   configure the label in resource bundle that will be explained later.

-  ``ShowNodePathActionComponent`` is the class name of your action.

-  There is a matching rule between the action name (``ShowNodePath``)
   and the listener class name (``ShowNodePathActionListener``): *the
   listener class name = the action name + ActionListener*.

4. Build your project: ``mvn clean install``

5. Copy the ``.jar`` file (``target/action-example-1.0.jar``) to the
   ``lib`` folder of PRODUCT.

6. Restart the server.

**Testing**

1. Log in as an administrator and go to Content Administration.

2. Edit a view to add the action to one of tabs of the view. At this 
   step, you will see the ShowNodePath action as below:
   
   |image71|

	Make sure there is a drive that applies the view. For example, you 
	can choose the *Admin* view and the *Collaboration* drive.

3. Go to Sites Explorer and select the drive, then switch to the edited
   view.

4. Select any node. The "ShowNodePath" button now displays in Action bar 
   as below:
   
   |image72|

Next, you can perform the followings for your action extension:

-  :ref:`Customizing label and icon <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.ContentUIExtension.ActionBar.Resources>`

-  :ref:`Filtering your action <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.ContentUIExtension.ActionBar.Filter>`


.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.ContentUIExtension.ActionBar.Resources:

Customizing label and icon
^^^^^^^^^^^^^^^^^^^^^^^^^^^

**Customizing labels**

As you can see in the screenshots in previous section, your action
displays in UI as "showNodePath" or "ShowNodePath". You can change this
label to something in more friendly way, like "Show Node Path", by
adding and registering your resource bundle to ResourceBundle service:

1. Add the ``src/main/resources/locale/com/acme`` folder to your project.

2. Add the ``ShowNodePath_en.xml`` file to this folder, with the 
   following content:

	.. code:: xml

		<bundle>
			<UITabForm>
				<label>
					<showNodePath>Show Node Path</showNodePath>
				</label>
			</UITabForm>
			<UIActionBar>
				<tooltip>
					<ShowNodePath>Show Node Path</ShowNodePath>
				</tooltip>
			</UIActionBar>
		</bundle>

.. note:: Notice the "showNodePath" tag (lowercase for first letter) in
          UITabForm. What you configure in UITabForm element will be displayed
          in Content Administration portlet. The other, UIActionBar, is for
		  Sites Explorer portlet.

3. Add the following configuration to ``src/main/resources/conf/portal/configuration.xml``:

	.. code:: xml

		<external-component-plugins>
			<target-component>org.exoplatform.services.resources.ResourceBundleService</target-component>
			<component-plugin>
				<name>UI Extension</name>
				<set-method>addResourceBundle</set-method>
				<type>org.exoplatform.services.resources.impl.BaseResourceBundlePlugin</type>
				<init-params>
					<values-param>
						<name>init.resources</name>
						<value>locale.com.acme.ShowNodePath</value>
					</values-param>
					<values-param>
						<name>portal.resource.names</name>
						<value>locale.com.acme.ShowNodePath</value>
					</values-param>
				</init-params>
			</component-plugin>
		</external-component-plugins>

The ``locale.com.acme.ShowNodePath`` value expresses that your resource
files should be located in the ``locale/com/acme/`` folder and have the
"ShowNodePath" prefix in name. ``ShowNodePath_en.xml`` is resource for
English of which "*en*\ " is the locale code. You can add other
resources for many languagues.

Now re-build your project and deploy. Restart server and test, you will
see the labels change into "Show Node Path".

See more details about `ResourceBundle
service <#sect-Reference_Guide-Internationalization_Configuration-ResourceBundleService>`__
and `locale
codes <#sect-Reference_Guide-Internationalization_Configuration-Locales_configuration>`__.

If you want more samples of such configuration, see:

-  ``webapps/ecmexplorer.war!/WEB-INF/classes/locale/portlet/explorer/JCRExplorerPortlet_en.xml``

-  ``webapps/ecmadmin.war!/WEB-INF/classes/locale/portlet/administration/ECMAdminPortlet_en.xml``

**Customizing icons**

Edit the
``webapps/ecmexplorer.war!/skin/icons/24x24/DefaultStylesheet.css`` file
(for the default Skin) and add the icon definition as below (in this
case, the "ManageUnLock" icon is re-used but you could add your own
picture into the
``webapps/ecmexplorer.war!/skin/icons/24x24/DefaultSkin`` directory):

::

    .ShowNodePathIcon{
    width: 24px; height: 24px;
    background: url('DefaultSkin/ManageUnLock.gif') no-repeat left center; /* orientation=lt */
    background: url('DefaultSkin/ManageUnLock.gif') no-repeat right center; /* orientation=rt */
    }


.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.ContentUIExtension.ActionBar.Filter:

Filtering your action
^^^^^^^^^^^^^^^^^^^^^^

¹. Write your filter class (``com/acme/MyUIFilter.java``):

	.. code:: java

		package com.acme;

		import java.util.Map;
		import javax.jcr.Node;
		import org.exoplatform.webui.ext.filter.UIExtensionFilter;
		import org.exoplatform.webui.ext.filter.UIExtensionFilterType;

		public class MyUIFilter implements UIExtensionFilter {
			/*
			* This method checks if the current node is a file.
			*/
			public boolean accept(Map<String, Object> context) throws Exception {
				//Retrieve the current node from the context
				Node currentNode = (Node) context.get(Node.class.getName());
				return currentNode.isNodeType("nt:file");
			}
			
			/*
			* This is the type of the filter.
			*/
			public UIExtensionFilterType getType() {
				return UIExtensionFilterType.MANDATORY;
			}
			
			/*
			* This is called when the filter has failed.
			*/
			public void onDeny(Map<String, Object> context) throws Exception {
				System.out.println("This node is not a file!");
			}
		}

This filter checks if the current node is a file. Because the filter
type is MANDATORY, the action will hide if the current node is a folder.
(Thus, with MANDATORY you cannot test onDeny method. Change the type
into OPTIONAL if you want to test the method.)

2. Apply the filter in your action class (``com/acme/ShowNodePathActionComponent.java``):

	.. code:: java

		...
		import java.util.List;
		import java.util.Arrays;
		import org.exoplatform.webui.ext.filter.UIExtensionFilter;
		import org.exoplatform.webui.ext.filter.UIExtensionFilters;

		import com.acme.MyUIFilter;
		...
		public class ShowNodePathActionComponent extends UIComponent {
		...
			/*
			* Add filters (MyUIFilter in this example)
			*/
			private static final List<UIExtensionFilter> FILTERS = Arrays.asList(new UIExtensionFilter[] {new MyUIFilter()});
			
			@UIExtensionFilters
			public List<UIExtensionFilter> getFilters() {
				return FILTERS;
			}
		}

Now build, deploy and test that your action displays only for nodes of
type "nt:file".

You have added a filter by Java code. Another way is by configuration,
that is extremely good when the filter itself allows flexible
configuration. For example, you continue to add UserACLFilter (built-in)
that allows you to configure who can use the action:

Add the following configuration to ``conf/portal/configuration.xml``:

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.webui.ext.UIExtensionManager</target-component>
        ...
            <field name="extendedFilters">
                <collection type="java.util.ArrayList">
                    <value>
                        <object type="org.exoplatform.webui.ext.filter.impl.UserACLFilter">
                            <field name="permissions">
                                <collection type="java.util.ArrayList">
                                    <value>
                                        <string>manager:/platform/administrators</string>
                                    </value>
                                </collection>
                            </field>
                        </object>
                    </value>
                </collection>
            </field>
            ...
    </external-component-plugins>

Then test that the action displays only for the users who have
*manager:/platform/administrators* membership.

There are many useful built-in filters in Content. In your real project,
you should see if some of them meet your business logic before writing a
new one:

-  ``org.exoplatform.webui.ext.filter.impl.UserACLFilter``: Filters all
   nodes that do not have any permission on the current context.

-  ``org.exoplatform.webui.ext.filter.impl.FileFilter``: Filters all
   nodes that do not exist in the given MIME type list.

-  ``org.exoplatform.ecm.webui.component.explorer.control.filter``: This
   package includes many filters, see in the table.

+-------------------------------+--------------------------------------------+
| Filters                       | Description                                |
+===============================+============================================+
| ``CanAddCategoryFilter``      | Filters nodes to which it is impossible to |
|                               | add categories.                            |
+-------------------------------+--------------------------------------------+
| ``CanCutNodeFilter``          | Filters nodes which cannot be cut.         |
+-------------------------------+--------------------------------------------+
| ``CanAddNodeFilter``          | Filters nodes to which it is impossible to |
|                               | add nodes.                                 |
+-------------------------------+--------------------------------------------+
| ``CanDeleteNodeFilter``       | Filters nodes that cannot be deleted.      |
+-------------------------------+--------------------------------------------+
| ``CanRemoveNodeFilter``       | Filters nodes that cannot be removed.      |
+-------------------------------+--------------------------------------------+
| ``CanEnableVersionFilter``    | Filters nodes which do not allow           |
|                               | versioning.                                |
+-------------------------------+--------------------------------------------+
| ``CanSetPropertyFilter``      | Filters nodes that cannot be modified.     |
+-------------------------------+--------------------------------------------+
| ``HasMetadataTemplatesFilter` | Filters nodes that do not have metadata    |
| `                             | templates.                                 |
+-------------------------------+--------------------------------------------+
| ``HasPublicationLifecycleFilt | Filters all nodes that do not have the     |
| er``                          | publication plugins.                       |
+-------------------------------+--------------------------------------------+
| ``HasRemovePermissionFilter`` | Filters nodes that do not have the         |
|                               | **Remove**\ permission.                    |
+-------------------------------+--------------------------------------------+
| ``IsFavouriteFilter``         | Filters nodes that are not favorite.       |
+-------------------------------+--------------------------------------------+
| ``IsNotFavouriteFilter``      | Filters nodes that are favorite.           |
+-------------------------------+--------------------------------------------+
| ``IsNotNtFileFilter``         | Filters nodes that are of **nt:file**.     |
+-------------------------------+--------------------------------------------+
| ``IsHoldsLockFilter``         | Filters nodes which do not hold lock.      |
+-------------------------------+--------------------------------------------+
| ``IsNotHoldsLockFilter``      | Filters nodes which are holding lock.      |
+-------------------------------+--------------------------------------------+
| ``IsNotRootNodeFilter``       | Filters the root node.                     |
+-------------------------------+--------------------------------------------+
| ``IsInTrashFilter``           | Filters nodes that are not in the trash    |
|                               | node.                                      |
+-------------------------------+--------------------------------------------+
| ``IsNotInTrashFilter``        | Filters nodes that are in the trash node.  |
+-------------------------------+--------------------------------------------+
| ``IsNotSameNameSiblingFilter` | Filters nodes that allow the same name     |
| `                             | siblings.                                  |
+-------------------------------+--------------------------------------------+
| ``IsMixCommentable``          | Filters nodes that do not allow            |
|                               | commenting.                                |
+-------------------------------+--------------------------------------------+
| ``IsMixVotable``              | Filters nodes that do not allow voting.    |
+-------------------------------+--------------------------------------------+
| ``IsNotSimpleLockedFilter``   | Filters nodes that are locked.             |
+-------------------------------+--------------------------------------------+
| ``IsNotSymlinkFilter``        | Filters nodes that are symlinks.           |
+-------------------------------+--------------------------------------------+
| ``IsNotCategoryFilter``       | Filters nodes that are of the category     |
|                               | type.                                      |
+-------------------------------+--------------------------------------------+
| ``IsNotSystemWorkspaceFilter` | Filters actions of the system-typed        |
| `                             | workspace.                                 |
+-------------------------------+--------------------------------------------+
| ``IsNotCheckedOutFilter``     | Filters nodes that are checked out.        |
+-------------------------------+--------------------------------------------+
| ``IsTrashHomeNodeFilter``     | Filters nodes that are not trash ones.     |
+-------------------------------+--------------------------------------------+
| ``IsNotTrashHomeNodeFilter``  | Filters a node that is the trash one.      |
+-------------------------------+--------------------------------------------+
| ``IsNotEditingDocumentFilter` | Filters nodes that are being edited.       |
| `                             |                                            |
+-------------------------------+--------------------------------------------+
| ``IsPasteableFilter``         | Filters nodes where the **paste** action   |
|                               | is not allowed.                            |
+-------------------------------+--------------------------------------------+
| ``IsReferenceableNodeFilter`` | Filters nodes that do not allow adding     |
|                               | references.                                |
+-------------------------------+--------------------------------------------+
| ``IsNotFolderFilter``         | Filters nodes that are folders.            |
+-------------------------------+--------------------------------------------+
| ``IsCheckedOutFilter``        | Filters nodes that are not checked out.    |
+-------------------------------+--------------------------------------------+
| ``IsVersionableFilter``       | Filters nodes which do not allow           |
|                               | versioning.                                |
+-------------------------------+--------------------------------------------+
| ``IsVersionableOrAncestorFilt | Filters nodes and ancestor nodes which do  |
| er``                          | not allow versioning.                      |
+-------------------------------+--------------------------------------------+
| ``IsDocumentFilter``          | Filters nodes that are not documents.      |
+-------------------------------+--------------------------------------------+
| ``IsEditableFilter``          | Filters nodes that are not editable.       |
+-------------------------------+--------------------------------------------+

.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.ContentUIExtension.FileViewer:

Creating a file viewer
````````````````````````

eXo Platform supports the inline visualization for many file formats. 
For example, let's see the display of PDF file:

|image73|

For those not yet available, one message will be displayed that requires
you to download it. Here is the view of a ZIP file:

|image74|

However, eXo Platform allows you to create a new file viewer to read one file
format, for example, ZIP files. Assuming that you want to display the
list of files contained in the ZIP file, follow the steps below. The
source code of this project is available
`here <https://github.com/exo-samples/docs-samples/tree/4.3.x/create-file-viewer>`__
for downloading.

1. Create a Maven project, for example, named **zip-viewer**, with the
   below structure:

	|image75|

2. Create the view template by editing the
   ``resources/templates/ZipViewer.gtmpl``. Here, you only need to 
   iterate all the ZIP files to display their names:

	.. code:: java

		<style> 
		ul.zip-file-list {
			padding: 0 20px;
		}
		ul.zip-file-list li {
			list-style-position: inside;
			list-style-type: circle;
		}
		</style>
		<%
		import java.util.zip.ZipEntry
		import java.util.zip.ZipInputStream
		import org.exoplatform.webui.core.UIComponent
		 
		def uiParent = uicomponent.getParent()
		def originalNode = uiParent.getOriginalNode()
		def contentNode = originalNode.getNode("jcr:content")
		def zis;
		 
		try {
			zis = new ZipInputStream(contentNode.getProperty("jcr:data").getStream())
		 
			ZipEntry ze
		 
			out.println("<ul class=\"zip-file-list\">")
			while ((ze = zis.getNextEntry()) != null) {
			  out.println("<li>" + ze.getName() + "</li>")
			}
			out.println("</ul>")
		} finally {
			zis?.close()
		}
		%>

3. Open the ``java/org/exoplatform/ecm/dms/ZipViewer.java`` file. Once 
   the view template is ready, it has to be registered and linked to the 
   ZIP file type. The first step for registering the template is to 
   create a simple class which extends ``UIComponent`` and to define the 
   view template's path. Note that this class defines the template's 
   path, that is, ``templates/ZipViewer.gtmpl`` in this case.

	.. code:: java

		package org.exoplatform.ecm.dms;
		 
		import org.exoplatform.webui.config.annotation.ComponentConfig;
		import org.exoplatform.webui.core.UIComponent;
		 
		@ComponentConfig(
		template = "classpath:templates/ZipViewer.gtmpl"
		)
		public class ZipViewer extends UIComponent {
		}

4. Edit the ``resources/conf/portal/configuration.xml`` file where the
   class is declared by the
   ``org.exoplatform.webui.ext.UIExtensionManager`` component.

	.. code:: xml

		<?xml version="1.0" encoding="ISO-8859-1"?>
		<configuration
			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd"
			xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">
		  <external-component-plugins>
			<target-component>org.exoplatform.webui.ext.UIExtensionManager</target-component>
			<component-plugin>
			  <name>Zip File dynamic viewer</name>
			  <set-method>registerUIExtensionPlugin</set-method>
			  <type>org.exoplatform.webui.ext.UIExtensionPlugin</type>
			  <init-params>
				<object-param>
				  <name>Zip</name>
				  <object type="org.exoplatform.webui.ext.UIExtension">
					<field name="type">
					  <string>org.exoplatform.ecm.dms.FileViewer</string>
					</field>
					<field name="rank">
					  <int>110</int>
					</field>
					<field name="name">
					  <string>Zip</string>
					</field>
					<field name="category">
					  <string>FileViewer</string>
					</field>
					<field name="component">
					  <string>org.exoplatform.ecm.dms.ZipViewer</string>
					</field>
					<field name="extendedFilters">
					  <collection type="java.util.ArrayList">
						<value>
						  <object type="org.exoplatform.webui.ext.filter.impl.FileFilter">
							<field name="mimeTypes">
							  <collection type="java.util.ArrayList">
								<value>
								  <string>application/zip</string>
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
		</configuration>

This configuration links the ``org.exoplatform.ecm.dms.ZipViewer``
component to the ``application/zip`` mimetype.

5. Update the ``pom.xml`` file that declares dependencies of the classes
   imported in the ``ZipViewer.java`` file.

	.. code:: xml

		<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
		  <modelVersion>4.0.0</modelVersion>
		  <groupId>exo.file.viewer</groupId>
		  <artifactId>zip-viewer</artifactId>
		  <packaging>jar</packaging>
		  <version>1.0-SNAPSHOT</version>
		  <name>zip-viewer</name>
		  <url>http://maven.apache.org</url>
		  <dependencies>
			<dependency>
			  <groupId>org.gatein.portal</groupId>
			  <artifactId>exo.portal.webui.framework</artifactId>
			  <version>3.5.9-PLF</version>
			  <scope>provided</scope>
			</dependency>
		  </dependencies>
		</project>

6. Build the **zip-viewer** project using the command:
   
   ::
   
		``mvn clean install``.

	Your JAR (``zip-viewer/target/zip-viewer-1.0-SNAPSHOT.jar``) should now
	contain 3 files:

	-  ``templates/ZipViewer.gtmpl``

	-  ``org/exoplatform/ecm/dms/ZipViewer.class``

	-  ``conf/portal/configuration.xml``

7. Put this ``.jar`` file into the eXo Platform package.

	-  ``$PLATFORM_TOMCAT_HOME/lib`` (in Tomcat).

	-  ``$PLATFORM_JBOSS_HOME/standalone/deployments/platform.ear!/lib`` (in
	   JBoss).

8. Restart the server. The content of a ZIP file is now displayed as 
   below:

|image76|

.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.ContentUIExtension.Others:

Other components
`````````````````

Working with other toolbars is quite similar to **UIActionbar**, except
configurations and resources.

**Sidebar**

-  **Sample configuration**

.. code:: xml

    <object-param>
        <name>Example</name>
        <object type="org.exoplatform.webui.ext.UIExtension">
            <field name="type"><string>org.exoplatform.ecm.dms.UISideBar</string></field>
            <field name="name"><string>Example</string></field>
            <field name="rank"><int>110</int></field>
            <field name="component"><string>com.acme.ExampleActionComponent</string></field>
        </object>
    </object-param>

Resources are located at
``$PLATFORM_TOMCAT-HOME/webapps/ecmexplorer/WEB-INF/classes/locale/portlet/explorer/JCRExplorerPortlet_en.xml``
(for English which is also the default language):

.. code:: xml

    ...
       <UISideBar>
      ...
     <label>
       <example>Example action</example>
      ...
     </label>
      ...
       </UISideBar>
      ...

**Admin control panel**

-  **Sample configuration**

.. code:: xml

    <object-param>
      <name>Example</name>
      <object type="org.exoplatform.webui.ext.UIExtension">
        <field name="type">
          <string>org.exoplatform.ecm.dms.UIECMAdminControlPanel</string>
        </field>
        <field name="rank">
          <int>110</int>
        </field>
        <field name="name">
          <string>Example</string>
        </field>
        <field name="category">
          <string>Templates</string>
        </field>
        <field name="component">
          <string>org.exoplatform.ecm.webui.component.admin.manager.UITemplatesManagerComponent</string>
        </field>
      </object>
    </object-param>

The "category" field specifies the category where your extension action
is performed. There are 4 options:

-  Templates

-  Explorer

-  Repository

-  Advanced

Resources are located at
``$PLATFORM_TOMCAT-HOME/webapps/ecmadmin/WEB-INF/classes/locale/portlet/administration/ECMAdminPortlet_en.xml``
(for English which is also the default language):

.. code:: xml

    ...
    <UIECMAdminControlPanel>
        ...
    <label>
        <example>Example panel</example>
        ...
    </label>
        ...
    </UIECMAdminControlPanel>
        ...

**Context menu**

-  **Sample configuration**

.. code:: xml

    <object-param>
       <name>Example</name>
       <object type="org.exoplatform.webui.ext.UIExtension">
         <field name="type"><string>org.exoplatform.ecm.dms.UIWorkingArea</string></field>
         <field name="rank"><int>105</int></field>
         <field name="name"><string>Example</string></field>
         <field name="category"><string>ItemContextMenu_SingleSelection</string></field>
         <field name="component"><string>com.acme.ExampleActionComponent</string></field>
       </object>
    </object-param>

The "category" field specifies the category where your extension action
is performed. There are many options:

-  ``ItemContextMenu_SingleSelection``: This menu has only one item when
   Trash Folder is right-clicked.

-  ``ItemContextMenu``: The menu appears when the user selects one or
   many items.

-  ``GroundContextMenu`` & ``ItemGroundContextMenu``: The menu appears
   when the user right-clicks the ground of node.

Resources are located at ``
      $TOMCAT-HOME/webapps/ecmexplorer/WEB-INF/classes/locale/portlet/explorer/JCRExplorerPortlet_en.xml
    `` (for English which is also the default language):

.. code:: xml

    <UIWorkingArea>
      ...
        <label>
            <example>Example action</example>
      ...
        </label>
      ...
    </UIWorkingArea>

.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.WikiAction:

Writing an action extension in Wiki
------------------------------------

This tutorial instructs you to plug an action to the Wiki page via the
following main steps:

-  :ref:`Creating your new project <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.WikiAction.Project>`

-  :ref:`Creating new action and the corresponding listener <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.WikiAction.Action_and_Listener>`

-  :ref:`Registering new action <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.WikiAction.Config_UIExtensionManager>`

-  :ref:`Registering localized resources <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.WikiAction.Config_ResourceBundle>`

-  :ref:`Deploying and testing new action extension <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.WikiAction.Deploy>`

Note that all source code used in this section is provided
`here <https://github.com/exo-samples/docs-samples/tree/4.3.x/write-action-extension>`
for downloading.

.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.WikiAction.Project:

Creating your new project
```````````````````````````

Create a Maven project which has the following directory structure:

::

    example
    |__ pom.xml
    |__ src
        |__ main
            |__ java
            |   |__ com
            |       |__ acme
            |           |__ ViewSourceActionComponent.java
            |__ resources
                |__ conf
                |   |__ portal
                |     |__ configuration.xml
                |__ locale
                    |__ com
                        |__ acme
                            |__ ViewSource_en.properties

Here is content of the ``pom.xml`` file:

.. code:: xml

    <?xml version="1.0" encoding="UTF-8"?>
    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
        <modelVersion>4.0.0</modelVersion>
        <groupId>com.acme</groupId>
        <artifactId>example</artifactId>
        <version>1.0</version>
        <name>eXo Wiki action - Example</name>
        <description>eXo Wiki action - Example</description>
        <dependencies>
            <dependency>
                <groupId>org.gatein.portal</groupId>
                <artifactId>exo.portal.webui.framework</artifactId>
                <version>3.5.5.Final</version>
            </dependency>
            <dependency>
                <groupId>org.exoplatform.commons</groupId>
                <artifactId>commons-webui-ext</artifactId>
                <version>4.0.1</version>
            </dependency>
            <dependency>
                <groupId>org.exoplatform.wiki</groupId>
                <artifactId>wiki-service</artifactId>
                <version>4.0.1</version>
            </dependency>
            <dependency>
                <groupId>org.exoplatform.wiki</groupId>
                <artifactId>wiki-webui</artifactId>
                <version>4.1.0</version>
            </dependency>
        </dependencies>
    </project>


.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.WikiAction.Action_and_Listener:

Creating new action and the corresponding listener
``````````````````````````````````````````````````

Edit the **ViewSourceActionComponent** class as below:

.. code:: java

    package com.acme;

    import java.util.Arrays;
    import java.util.List;

    import org.exoplatform.webui.config.annotation.ComponentConfig;
    import org.exoplatform.webui.config.annotation.EventConfig;
    import org.exoplatform.webui.event.Event;
    import org.exoplatform.webui.ext.filter.UIExtensionFilter;
    import org.exoplatform.webui.ext.filter.UIExtensionFilters;
    import org.exoplatform.wiki.commons.Utils;
    import org.exoplatform.wiki.mow.core.api.wiki.PageImpl;
    import org.exoplatform.wiki.webui.UIWikiContentDisplay;
    import org.exoplatform.wiki.webui.UIWikiPageContentArea;
    import org.exoplatform.wiki.webui.UIWikiPortlet;
    import org.exoplatform.wiki.webui.control.action.core.AbstractEventActionComponent;
    import org.exoplatform.wiki.webui.control.filter.IsViewModeFilter;
    import org.exoplatform.wiki.webui.control.listener.MoreContainerActionListener;

    @ComponentConfig (
      template = "app:/templates/wiki/webui/control/action/AbstractActionComponent.gtmpl",
      events = {
            @EventConfig(listeners = ViewSourceActionComponent.ViewSourceActionListener.class)
        }
    )

    public class ViewSourceActionComponent extends AbstractEventActionComponent {

      public static final String                   ACTION  = "ViewSource";

      private static final List<UIExtensionFilter> FILTERS = Arrays.asList(new UIExtensionFilter[] { new IsViewModeFilter() });

      @UIExtensionFilters

      public List<UIExtensionFilter> getFilters() {
        return FILTERS;
      }

      @Override
      public String getActionName() {
        return ACTION;
      }

      @Override
      public boolean isAnchor() {
        return false;
      }

      public static class ViewSourceActionListener extends MoreContainerActionListener<ViewSourceActionComponent> {
        @Override
        protected void processEvent(Event<ViewSourceActionComponent> event) throws Exception {
          UIWikiPortlet wikiPortlet = event.getSource().getAncestorOfType(UIWikiPortlet.class);
          UIWikiContentDisplay contentDisplay = wikiPortlet.findFirstComponentOfType(UIWikiPageContentArea.class)
                                                           .getChildById(UIWikiPageContentArea.VIEW_DISPLAY);
          PageImpl wikipage = (PageImpl) Utils.getCurrentWikiPage();
          contentDisplay.setHtmlOutput(wikipage.getContent().getText());
          event.getRequestContext().addUIComponentToUpdateByAjax(contentDisplay);
        }
      }
    }

Some remarks:

-  The action name is *ViewSource*.

-  The listener class name = the action name + "ActionListener" (so it
   is *ViewSourceActionListener*).

-  In this example, the listener extends the
   ``MoreContainerActionListener`` class. As a result, the action will
   be added to the More menu in the Wiki portlet. There are some choices
   that will be introduced later.

-  At the *ComponentConfig* annotation, you see a *gtmpl* file is given.
   Here you re-use the
   ``templates/wiki/webui/control/action/AbstractActionComponent.gtmpl``
   file that is already packaged in ``wiki.war``.

.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.WikiAction.Config_UIExtensionManager:

Registering new action with UIExtensionManager service
```````````````````````````````````````````````````````

Edit the ``configuration.xml`` file as below:

.. code:: xml

    <configuration xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">
        <external-component-plugins>
        <target-component>org.exoplatform.webui.ext.UIExtensionManager</target-component>
        <component-plugin>
            <name>add.action</name>
            <set-method>registerUIExtensionPlugin</set-method>
            <type>org.exoplatform.webui.ext.UIExtensionPlugin</type>
            <init-params>
                <object-param>
                    <name>ViewSource</name>
                    <object type="org.exoplatform.webui.ext.UIExtension">
                        <field name="type"><string>org.exoplatform.wiki.webui.control.MoreExtensionContainer</string></field>
                        <field name="rank"><int>1000</int></field>
                        <field name="name"><string>ViewSource</string></field>
                        <field name="component"><string>com.acme.ViewSourceActionComponent</string></field>
                    </object>
                </object-param>
            </init-params>
        </component-plugin>
        </external-component-plugins>
    </configuration>

Pay attention to the action name (**ViewSource**) and the component name
(**com.acme.ViewSourceActionComponent**).

The configuration for UIExtension is explained
:ref:`here <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.UIExtensionComponents>`.

As noticed before, your action listener extends the
``MoreExtensionContainer`` class. Here you see it is passed to the
**type** field. You can decide which menu your action is plugged in, by
choosing one of types below:

+--------------------------------------------------+-------------------------+
| Type                                             | Description             |
+==================================================+=========================+
| ``org.exoplatform.wiki.webui.control.UIPageToolB | Actions will be placed  |
| ar``                                             | in Toolbar in the View  |
|                                                  | mode.                   |
+--------------------------------------------------+-------------------------+
| ``org.exoplatform.wiki.webui.control.AddExtensio | Actions will be plugged |
| nContainer``                                     | in the Add Page menu in |
|                                                  | the View mode.          |
+--------------------------------------------------+-------------------------+
| ``org.exoplatform.wiki.webui.control.MoreExtensi | Actions will be plugged |
| onContainer``                                    | in the More menu in the |
|                                                  | View mode.              |
+--------------------------------------------------+-------------------------+
| ``org.exoplatform.wiki.webui.control.UISubmitToo | Actions will be placed  |
| lBar``                                           | in Toolbar in the Edit  |
|                                                  | mode.                   |
+--------------------------------------------------+-------------------------+
| ``org.exoplatform.wiki.webui.control.UIEditorTab | Actions will be placed  |
| s``                                              | in the Editor tabs.     |
+--------------------------------------------------+-------------------------+
| ``org.exoplatform.wiki.webui.control.BrowseExten | Actions will be plugged |
| sionContainer``                                  | in the Browse menu in   |
|                                                  | the View mode.          |
+--------------------------------------------------+-------------------------+
| ``org.exoplatform.wiki.webui.popup.UIWikiSetting | Actions will be placed  |
| Container``                                      | in the Setting tabs.    |
+--------------------------------------------------+-------------------------+


.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.WikiAction.Config_ResourceBundle:

Registering localized resources with ResourceBundle service
````````````````````````````````````````````````````````````

In this example, you have a resource file, that is
``ViewSource_en.properties``. The *\_en* suffix means English. You can
write many resources for other languages.

1. Edit the ``ViewSource_en.properties`` file as below:

   ::

       MoreExtensionContainer.action.ViewSource=View Source

This indicates that the label of your action will be View Source.

Name of the ``MoreExtensionContainer.action.ViewSource`` property must
be changed if you use another *type*. It is dependent on the *gtmpl*
file you use in your Java class. See this code in
``wiki.war!/templates/wiki/webui/control/action/AbstractActionComponent.gtmpl``:

.. code:: java

    String labelName = _ctx.appRes(uicomponent.getParent().getName() + ".action." + actionName);

2. Configure the **ResourceBundle** service in the ``configuration.xml``
   file as below:

	.. code:: xml

		<external-component-plugins>
			<target-component>org.exoplatform.services.resources.ResourceBundleService</target-component>
			<component-plugin>
				<name>UI Extension</name>
				<set-method>addResourceBundle</set-method>
				<type>org.exoplatform.services.resources.impl.BaseResourceBundlePlugin</type>
				<init-params>
					<values-param>
						<name>init.resources</name>
						<value>locale.com.acme.ViewSource</value>
					</values-param>
					<values-param>
						<name>portal.resource.names</name>
						<value>locale.com.acme.ViewSource</value>
					</values-param>
				</init-params>
			</component-plugin>
		</external-component-plugins>

Pay attention to the resource name: ``locale.com.acme.ViewSource``. It
is a translation of the ``locale/com/acme/ViewSource_en.properties``
file path (relative to the Jar archive), with the *\_en* suffix and the
*.properties* extension is eliminated.

See
`here <#sect-Reference_Guide-Internationalization_Configuration-ResourceBundleService>`__
for the **ResourceBundle** configuration.

.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ApplicationPlugins.WikiAction.Deploy:

Deploying new action extension
```````````````````````````````

Follow these steps to deploy and test your new action extension:

1. Build the project by the command: ``mvn clean install``

2. Copy the ``target/example-1.0.jar`` file into the
   ``$PLATFORM_TOMCAT_HOME/lib`` directory.

3. Start eXo Platform and go to the Wiki portlet. You will see your 
   action in the More menu as below:

|image77|

.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.Notification:

Notification
~~~~~~~~~~~~~

-  :ref:`Extending notification system <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.Notification.ExtendingNotificationSystem>`
   Steps to create an extension which plugs a new notification type and
   channel into current notification system in eXo Platform.

-  :ref:`Overriding email notification <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.Notification.OverridingEmailNotification>`
   Steps to create an extension which overrides the email notification
   templates following your own style.


.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.Notification.ExtendingNotificationSystem:

Extending notification system
------------------------------

eXo Platform provides you with a notification system that allows you to
extend in 2 mechanisms:

-  The extensibility of notification channels, such as by email,
   directly on-site or through pushing.

-  The extensibility of notification types, such as connection
   invitation, space activities.

This section will walk you through a `complete sample extension <https://github.com/exo-samples/docs-samples/tree/master/console-notification>`__
that instructs you how to:

-  create a new notification channel that pushes notification
   information to the console panel.

-  create a new notification type that informs when one user in your
   network changes her/his profile.

First you need to create a new Maven project with the overall structure:

|image44|

And now, continue with the detailed steps:

**Under pom.xml**

Add the following dependencies to the ``pom.xml`` file:

.. code:: xml

    <?xml version="1.0" encoding="UTF-8"?>
        <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
            <modelVersion>4.0.0</modelVersion>
            <groupId>com.acme.samples</groupId>
            <artifactId>console-notification</artifactId>
            <version>1.0.0</version>
            <packaging>pom</packaging>
            <modules>
                <module>lib</module>
                <module>config</module>
                <module>webapp</module>
            </modules>
            <properties>
                <org.exoplatform.depmgt.version>10-SNAPSHOT</org.exoplatform.depmgt.version>
                <org.exoplatform.kernel.version>2.4.9-GA</org.exoplatform.kernel.version>
                <org.exoplatform.core.version>2.5.9-GA</org.exoplatform.core.version>
                <!--GateIn project's dependencies-->
                <org.gatein.portal.version>3.5.10.Final</org.gatein.portal.version>
                <!--Platform project's dependencies-->
                <org.exoplatform.social.version>4.2.x-SNAPSHOT</org.exoplatform.social.version>
            </properties>
            <dependencyManagement>
                <dependencies>
                    <!-- Import versions from platform project -->
                    <dependency>
                        <groupId>org.exoplatform</groupId>
                        <artifactId>maven-depmgt-pom</artifactId>
                        <version>${org.exoplatform.depmgt.version}</version>
                        <type>pom</type>
                        <scope>import</scope>
                    </dependency>
                    <dependency>
                        <groupId>org.exoplatform.social</groupId>
                        <artifactId>social</artifactId>
                        <version>${org.exoplatform.social.version}</version>
                        <type>pom</type>
                        <scope>import</scope>
                    </dependency>
                    <!-- To be replaced by an import of GateIn Portal parent POM -->
                    <dependency>
                        <groupId>org.gatein.portal</groupId>
                        <artifactId>exo.portal.component.portal</artifactId>
                        <version>${org.gatein.portal.version}</version>
                    </dependency>
                </dependencies>
            </dependencyManagement>
        </project>

**Under config folder**

1. Create a ``pom.xml`` file and two ``configuration.xml`` files under
   ``config`` folder as below:

   |image45|

2. Add the following information to ``config/pom.xml``:

	.. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
			<modelVersion>4.0.0</modelVersion>
			<parent>
				<groupId>com.acme.samples</groupId>
				<artifactId>console-notification</artifactId>
				<version>1.0.0</version>
			</parent>
			<artifactId>console-notification-config</artifactId>
			<packaging>jar</packaging>
			<build>
				<finalName>console-notification-config</finalName>
			</build>
		</project>

3. Add the below configuration to ``conf/configuration.xml``:

	.. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<configuration
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd"
		xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">
			<external-component-plugins>
				<!-- The full qualified name of the PortalContainerConfig -->
				<target-component>org.exoplatform.container.definition.PortalContainerConfig</target-component>
				<component-plugin>
					<!-- The name of the plugin -->
					<name>Add PortalContainer Definitions</name>
					<!-- The name of the method to call on the PortalContainerConfig in order to register the PortalContainerDefinitions -->
					<set-method>registerChangePlugin</set-method>
					<!-- The full qualified name of the PortalContainerDefinitionPlugin -->
					<type>org.exoplatform.container.definition.PortalContainerDefinitionChangePlugin</type>
						<priority>102</priority>
						<init-params>
							<values-param>
								<name>apply.specific</name>
								<value>portal</value>
							</values-param>
							<object-param>
								<name>addDependencies</name>
								<object type="org.exoplatform.container.definition.PortalContainerDefinitionChange$AddDependencies">
									<!-- The name of the portal container -->
									<field name="dependencies">
										<collection type="java.util.ArrayList">
											<value>
												<!--The context name of the portal extension-->
												<string>console-notification-webapp</string>
											</value>
										</collection>
									</field>
								</object>
							</object-param>
						</init-params>
					</component-plugin>
			</external-component-plugins>
		</configuration>

4. Add the following configuration to ``portal/configuration.xml``:

	.. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
			<configuration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd"
			xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">
				
				<external-component-plugins>
					<target-component>org.exoplatform.social.core.manager.IdentityManager</target-component>
					<component-plugin>
						<name>SocialProfileListener</name>
							<set-method>registerProfileListener</set-method>
							<type>com.acme.samples.notification.SocialProfileListener</type>
					</component-plugin>
				</external-component-plugins>
				
				<external-component-plugins>
					<target-component>org.exoplatform.commons.api.notification.channel.ChannelManager</target-component>
					<component-plugin profiles="all">
						<name>console.channel</name>
							<set-method>register</set-method>
							<type>com.acme.samples.notification.ConsoleChannel</type>
							<description>Register the console channel to manager.</description>
					</component-plugin>
				</external-component-plugins>
				
				<external-component-plugins>
					<target-component>org.exoplatform.commons.api.notification.service.setting.PluginContainer</target-component>
					<component-plugin>
							<name>notification.plugins</name>
							<set-method>addPlugin</set-method>
						<type>com.acme.samples.notification.plugin.UpdateProfilePlugin</type>
							<description>Initial information for plugin.</description>
							<init-params>
								<object-param>
									<name>template.UpdateProfilePlugin</name>
									<description>The template of UpdateProfilePlugin</description>
									<object
									type="org.exoplatform.commons.api.notification.plugin.config.PluginConfig">
										<field name="pluginId">
											<string>UpdateProfilePlugin</string>
										</field>
										<field name="resourceBundleKey">
											<string>UINotification.label.UpdateProfilePlugin</string>
										</field>
										<field name="order">
											<string>11</string>
										</field>
										<field name="defaultConfig">
											<collection type="java.util.ArrayList">
												<value>
													<string>Instantly</string>
												</value>
											</collection>
										</field>
										<field name="groupId">
											<string>general</string>
										</field>
										<field name="bundlePath">
											<string>locale.notification.template.Notification</string>
										</field>
									</object>
								</object-param>
							</init-params>
					</component-plugin>
				</external-component-plugins>
			</configuration>

4. Register ``SocialProfileListener`` as a profile listener plugin to 
   the ``IdentityManager`` component. This plugin listens to user 
   profile updating events.

5. Register new plugin ``console.channel`` to the ``ChannelManager``
   component. This plugin pushes notifications to console panel.

6. Register new plugin ``UpdateProfilePlugin`` to the ``PluginContainer``
   component. This plugin declares and initializes parameters for the 
   new notification type. The initial parameters include:

-  ``template.UpdateProfilePlugin`` - the template of
   ``UpdateProfilePlugin``.

-  ``pluginId`` - the Id of plugin which was defined in the class
   ``UpdateProfilePlugin``.

-  ``resourceBundleKey`` - the key which will be provided in resource
   bundle files of each locale.

-  ``order`` - the order to display the new type in notification group.

-  ``groupId`` - the Id of group that this notification type belongs to.

-  ``bundlePath`` - the path to the locale resource.

-  ``defaultConfig`` - the default settings for this notification type
   at first startup.

**Under lib folder**

1. Create another project under ``lib`` folder with the ``pom.xml`` file 
   as below:

|image46|

	.. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
			<modelVersion>4.0.0</modelVersion>
			<parent>
				<groupId>com.acme.samples</groupId>
				<artifactId>console-notification</artifactId>
				<version>1.0.0</version>
			</parent>
			<artifactId>console-notification-lib</artifactId>
			<packaging>jar</packaging>
			<dependencies>
				<dependency>
					<groupId>log4j</groupId>
					<artifactId>log4j</artifactId>
					<scope>provided</scope>
				</dependency>
				<dependency>
					<groupId>org.exoplatform.social</groupId>
					<artifactId>social-component-core</artifactId>
					<scope>provided</scope>
				</dependency>
				<dependency>
					<groupId>org.exoplatform.core</groupId>
					<artifactId>exo.core.component.organization.api</artifactId>
					<scope>provided</scope>
				</dependency>
				<dependency>
					<groupId>org.exoplatform.social</groupId>
					<artifactId>social-component-common</artifactId>
					<scope>provided</scope>
				</dependency>
			</dependencies>
			<build>
				<finalName>console-notification-lib</finalName>
			</build>
		</project>

2. Implement the class ``UpdateProfilePlugin.java`` as follows:

	   .. code:: java

		package com.acme.samples.notification.plugin;

			import java.util.ArrayList;
			import java.util.HashSet;
			import java.util.Set;

			import org.exoplatform.commons.api.notification.NotificationContext;
			import org.exoplatform.commons.api.notification.model.ArgumentLiteral;
			import org.exoplatform.commons.api.notification.model.NotificationInfo;
			import org.exoplatform.commons.api.notification.plugin.BaseNotificationPlugin;
			import org.exoplatform.commons.utils.CommonsUtils;
			import org.exoplatform.commons.utils.ListAccess;
			import org.exoplatform.container.xml.InitParams;
			import org.exoplatform.services.log.ExoLogger;
			import org.exoplatform.services.log.Log;
			import org.exoplatform.social.core.identity.model.Identity;
			import org.exoplatform.social.core.identity.model.Profile;
			import org.exoplatform.social.core.manager.RelationshipManager;

			public class UpdateProfilePlugin extends BaseNotificationPlugin {
				public final static ArgumentLiteral<Profile> PROFILE = new ArgumentLiteral<Profile>(Profile.class, "profile");
				private static final Log LOG = ExoLogger.getLogger(UpdateProfilePlugin.class);
				public final static String ID = "UpdateProfilePlugin";
				
				public UpdateProfilePlugin(InitParams initParams) {
					super(initParams);
				}
				
				@Override
				public String getId() {
					return ID;
				}
				
				@Override
				public boolean isValid(NotificationContext ctx) {
					return true;
				}
				
				@Override
				protected NotificationInfo makeNotification(NotificationContext ctx) {
					Profile profile = ctx.value(PROFILE);
					Set<String> receivers = new HashSet<String>();
					
					RelationshipManager relationshipManager = CommonsUtils.getService(RelationshipManager.class);
					Identity updatedIdentity = profile.getIdentity();
					ListAccess<Identity> listAccess = relationshipManager.getConnections(updatedIdentity);
					try {
						Identity[] relationships =  relationshipManager.getConnections(updatedIdentity).load(0, listAccess.getSize());
						for(Identity i : relationships) {
							receivers.add(i.getRemoteId());
						}
						} catch (Exception ex) {
						LOG.error(ex.getMessage(), ex);
					}
					
					return NotificationInfo.instance()
					.setFrom(updatedIdentity.getRemoteId())
					.to(new ArrayList<String>(receivers))
					.setTitle(updatedIdentity.getProfile().getFullName() + " updated his/her profile.<br/>")
					.key(getId());
				}
				
			}

This class extends ``BaseNotificationPlugin`` that retrieves information
for new notification type of user profile updating event.

The ``makeNotification()`` method was overriden to generate essential
information for a notification.

3. Implement the class ``SocialProfileListener.java`` as below:

	.. code:: java

		package com.acme.samples.notification;

			import org.exoplatform.commons.api.notification.NotificationContext;
			import org.exoplatform.commons.api.notification.model.PluginKey;
			import org.exoplatform.commons.notification.impl.NotificationContextImpl;
			import org.exoplatform.social.core.identity.model.Profile;
			import org.exoplatform.social.core.profile.ProfileLifeCycleEvent;
			import org.exoplatform.social.core.profile.ProfileListenerPlugin;
			import com.acme.samples.notification.plugin.UpdateProfilePlugin;

			public class SocialProfileListener extends ProfileListenerPlugin {
				
				@Override
				public void avatarUpdated(ProfileLifeCycleEvent event) {
					Profile profile = event.getProfile();
					NotificationContext ctx = NotificationContextImpl.cloneInstance().append(UpdateProfilePlugin.PROFILE, profile);
					ctx.getNotificationExecutor().with(ctx.makeCommand(PluginKey.key(UpdateProfilePlugin.ID))).execute(ctx);
				}
				
				@Override
				public void experienceSectionUpdated(ProfileLifeCycleEvent event) {
					Profile profile = event.getProfile();
					NotificationContext ctx = NotificationContextImpl.cloneInstance().append(UpdateProfilePlugin.PROFILE, profile);
					ctx.getNotificationExecutor().with(ctx.makeCommand(PluginKey.key(UpdateProfilePlugin.ID))).execute(ctx);
				}
				
				@Override
				public void contactSectionUpdated(ProfileLifeCycleEvent event) {
					Profile profile = event.getProfile();
					NotificationContext ctx = NotificationContextImpl.cloneInstance().append(UpdateProfilePlugin.PROFILE, profile);
					ctx.getNotificationExecutor().with(ctx.makeCommand(PluginKey.key(UpdateProfilePlugin.ID))).execute(ctx);
				}
				
				@Override
				public void createProfile(ProfileLifeCycleEvent event) {
					Profile profile = event.getProfile();
					NotificationContext ctx = NotificationContextImpl.cloneInstance().append(UpdateProfilePlugin.PROFILE, profile);
					ctx.getNotificationExecutor().with(ctx.makeCommand(PluginKey.key(UpdateProfilePlugin.ID))).execute(ctx);
				}
				
			}

This class extends ``ProfileListenerPlugin`` to trigger user profile
updating events and plug them into ``UpdateProfilePlugin`` as
notifications. The instance of ``UpdateProfilePlugin`` will be used to
generate and send messages to all notification channels.

-  ``avatarUpdated()`` - trigger avatar updating event.

-  ``experienceSectionUpdated()`` - trigger user experience updating
   event.

-  ``contactSectionUpdated()`` - trigger user contact updating event.

-  ``createProfile()`` - trigger user profile creating event.

4. Implement the class ``ConsoleChannel.java`` to have the following code:

	.. code:: java

		package com.acme.samples.notification;

			import java.io.Writer;
			import org.exoplatform.commons.api.notification.NotificationContext;
			import org.exoplatform.commons.api.notification.channel.AbstractChannel;
			import org.exoplatform.commons.api.notification.channel.template.AbstractTemplateBuilder;
			import org.exoplatform.commons.api.notification.channel.template.TemplateProvider;
			import org.exoplatform.commons.api.notification.model.ChannelKey;
			import org.exoplatform.commons.api.notification.model.MessageInfo;
			import org.exoplatform.commons.api.notification.model.NotificationInfo;
			import org.exoplatform.commons.api.notification.model.PluginKey;
			import org.exoplatform.commons.notification.lifecycle.SimpleLifecycle;
			import org.exoplatform.services.log.ExoLogger;
			import org.exoplatform.services.log.Log;

			public class ConsoleChannel extends AbstractChannel {
				
				private static final Log LOG = ExoLogger.getLogger(ConsoleChannel.class);
				private final static String ID = "CONSOLE_CHANNEL";
				private final ChannelKey key = ChannelKey.key(ID);
				
				public ConsoleChannel() {
					super(new SimpleLifecycle());
				}
				
				@Override
				public String getId() {
					return ID;
				}
				
				@Override
				public ChannelKey getKey() {
					return key;
				}
				
				@Override
				public void dispatch(NotificationContext ctx, String userId) {
					LOG.info(String.format("CONSOLE:: %s will receive the message from pluginId: %s",
					userId,
					ctx.getNotificationInfo().getKey().getId()));
				}
				
				@Override
				public void registerTemplateProvider(TemplateProvider provider) {}
				
				@Override
				protected AbstractTemplateBuilder getTemplateBuilderInChannel(PluginKey key) {
					return new AbstractTemplateBuilder() {
						@Override
						protected MessageInfo makeMessage(NotificationContext ctx) {
							return null;
						}
						@Override
						protected boolean makeDigest(NotificationContext ctx, Writer writer) {
							return false;
						}
					};
				}
			}

This concrete class extends ``AbstractChannel`` to define a new
notification channel which sends messages to console panel. Any new
channel must implement this interface and use an
external-component-plugin configuration to be registered in the
``ChannelManager``.

The ``dispatch()`` method was overriden to write notification contents
to console panel.

**Under webapp folder**

1. Create a new Maven project inside ``webapp`` folder with the 
   following ``pom.xml`` file:

|image47|

	.. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
			<modelVersion>4.0.0</modelVersion>
			<parent>
				<groupId>com.acme.samples</groupId>
				<artifactId>console-notification</artifactId>
				<version>1.0.0</version>
			</parent>
			<artifactId>console-notification-webapp</artifactId>
			<packaging>war</packaging>
			<build>
				<finalName>console-notification-webapp</finalName>
			</build>
		</project>

2. Add the following configurations to ``WEB-INF/web.xml``:

	.. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<web-app version="3.0"
		metadata-complete="true"
		xmlns="http://java.sun.com/xml/ns/javaee"
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd">
			<display-name>console-notification-webapp</display-name>
			<filter>
				<filter-name>ResourceRequestFilter</filter-name>
				<filter-class>org.exoplatform.portal.application.ResourceRequestFilter</filter-class>
			</filter>
			<filter-mapping>
				<filter-name>ResourceRequestFilter</filter-name>
				<url-pattern>/*</url-pattern>
			</filter-mapping>
		</web-app>

-  ``display-name`` - should be the same as the context name of the
   portal extension.

3. Open ``Notification_en.properties`` file to add this text:

.. code:: java

    #######################################################################
    #                         UpdateProfilePlugin                         #
    #######################################################################
    # For UI
    UINotification.title.UpdateProfilePlugin= Someone updates profile
    UINotification.label.UpdateProfilePlugin= Someone updates profile

This is a resource bundle for English language. The value of
``UINotification.title.UpdateProfilePlugin`` and
``UINotification.label.UpdateProfilePlugin`` will be used to display as
English name of the new notification type through user interface.

**Testing**

1. Go up to the parent project's folder and build it with the command:
   **mvn clean install**.

2. Copy the generated jar and war files into the corresponding 
   deployment folders where you unpacked the eXo Platform installation.

3. Start eXo Platform and you will see your new functions appear in 
   Notification Settings:

|image48|

4. Log in as a user and update avatar or experience (remember to enable
   notification plugins first by an administrator).

Now, a message informing about this activity will be pushed to all
notification channels, for instance:

-  directly on-site:

   |image49|

-  or on the console, there will be a message for each user who is
   connecting with the above user, such as:

   ::

       James will receive the message from pluginId: UpdateProfilePlugin
       
.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.Notification.OverridingEmailNotification:

Overriding email notification
------------------------------

In eXo Platform, all email notification templates are defined in the
``social-notification-extension.war`` package under
``WEB-INF/notification/templates/``. Each of these templates corresponds
to a specific notification type. It is obvious that you can change all
of them as your desire.

To do this, there are 2 ways as follows:

-  Modifying the template layout, such as header, body or footer.

-  Adding or removing notification properties.

This tutorial selects to customize the ``ActivityMentionPlugin.gtmpl``
file, which is the template for :ref:`Mention Notification <Mention>`
by email. Note that you can download all the source code used in this
section
`here <https://github.com/exo-samples/docs-samples/tree/master/overriding-email-notification>`__.

First you need to create a new Maven project with the overall structure:

|image50|

And now, continue with the detailed steps:

**Under pom.xml**

Add the following dependencies to the ``pom.xml`` file:

.. code:: xml

    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
        <modelVersion>4.0.0</modelVersion>
        <groupId>org.exoplatform</groupId>
        <version>1.0.0</version>
        <artifactId>email-notification-extension</artifactId>
        <name>Email Notification Extension</name>
        <packaging>pom</packaging>
        <description>Email Notification Extension</description>
        <dependencyManagement>
            <dependencies>
                <!-- Import versions from platform project -->
                <dependency>
                    <groupId>org.exoplatform.platform</groupId>
                    <artifactId>platform</artifactId>
                    <version>4.2.x-SNAPSHOT</version>
                    <type>pom</type>
                    <scope>import</scope>
                </dependency>
            </dependencies>
        </dependencyManagement>
        <modules>
            <module>config</module>
            <module>webapp</module>
        </modules>
    </project>

**Under config folder**

1. Create a ``pom.xml`` and a ``configuration.xml`` file as below:

|image51|

2. Add the following information to ``config/pom.xml``:

	.. code:: xml

		<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
		  <parent>
			<groupId>org.exoplatform</groupId>
			<artifactId>email-notification-extension</artifactId>
			<version>1.0.0</version>
		  </parent> 
		  <modelVersion>4.0.0</modelVersion>
		  <artifactId>email-notification-extension-config</artifactId>
		  <name>Email Notification Extension Configuration</name>
		  <packaging>jar</packaging>
		  <description>Email Notification Extension Configuration</description>
		</project>

3. Add the below configuration to ``conf/configuration.xml``:

	.. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<configuration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd"
		xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">
			<external-component-plugins>
				<!-- The full qualified name of the PortalContainerConfig -->
				<target-component>org.exoplatform.container.definition.PortalContainerConfig</target-component>
				<component-plugin>
					<!-- The name of the plugin -->
					<name>Change PortalContainer Definitions</name>
					<!-- The name of the method to call on the PortalContainerConfig in order to register the changes on the PortalContainerDefinitions -->
					<set-method>registerChangePlugin</set-method>
					<!-- The full qualified name of the PortalContainerDefinitionChangePlugin -->
					<type>org.exoplatform.container.definition.PortalContainerDefinitionChangePlugin</type>
					<priority>102</priority>
					<init-params>
						<value-param>
							<name>apply.default</name>
							<value>true</value>
						</value-param>
						<object-param>
							<name>change</name>
							<object type="org.exoplatform.container.definition.PortalContainerDefinitionChange$AddDependenciesAfter">
								<!-- The list of name of the dependencies to add -->
								<field name="dependencies">
									<collection type="java.util.ArrayList">
										<value>
											<string>email-notification-webapp</string>
										</value>
									</collection>
								</field>
							</object>
						</object-param>     
					</init-params>
				</component-plugin>
			</external-component-plugins>   
		</configuration>

**Under webapp folder**

In the below steps, you will modify layout, add and remove several
properties of this ``ActivityMentionPlugin`` template. Note that when
you add a new property to a notification template, it is required that
you declare it in all ``Notification_xx.properties`` files (xx is the
language code, *fr* for French, for instance). In this tutorial, assume
that there are only 2 languages available which are English (*en*) and
French (*fr*).

1. Create a new Maven project inside ``webapp`` folder as follows:

|image52|

	In which, the ``Notification_en.properties``,
	``Notification_fr.properties`` and ``ActivityMentionPlugin.gtmpl`` 
	files are copied from ``$PLATFORM_HOME/webapps/social-notification-extension.war!/WEB-INF/classes/locale/notification/template``
	and ``$PLATFORM_HOME/webapps/social-notification-extension.war!/WEB-INF/notification/templates``
	respectively.

2. Configure the ``pom.xml`` file as follows:

	.. code:: xml

		<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
			<parent>
				<groupId>org.exoplatform</groupId>
				<artifactId>email-notification-extension</artifactId>
				<version>1.0.0</version>
			</parent> 
			<modelVersion>4.0.0</modelVersion>
			<artifactId>email-notification-webapp</artifactId>
			<packaging>war</packaging>
			<name>Email Notification Extension Webapp</name>
			<description>Email Notification Extension Webapp</description>
			<build>  
				<finalName>email-notification-webapp</finalName>
			</build>
		</project>

3. Add the following configurations to ``WEB-INF/web.xml``:

	.. code:: xml

		<?xml version="1.0" encoding="ISO-8859-1" ?>
		<!DOCTYPE web-app PUBLIC "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
		"http://java.sun.com/dtd/web-app_2_3.dtd">
		<web-app>
			<display-name>email-notification-webapp</display-name>
			<!-- Resource filter to cache merged javascript and css -->
			<filter>
				<filter-name>ResourceRequestFilter</filter-name>
				<filter-class>org.exoplatform.portal.application.ResourceRequestFilter</filter-class>
			</filter>
			<filter-mapping>
				<filter-name>ResourceRequestFilter</filter-name>
				<url-pattern>/*</url-pattern>
			</filter-mapping>
			<!-- Listener -->
			<listener>
				<listener-class>org.exoplatform.container.web.PortalContainerConfigOwner</listener-class>
			</listener>
		</web-app>

	-  ``display-name`` - should be the same as the context name of the
	   portal extension.

4. Modify the ``ActivityMentionPlugin.gtmpl`` file as below:

	.. code:: xml

		<table border="0" cellpadding="0" cellspacing="0" width="500" bgcolor="#ffffff" align="center" style="background-color: #ffffff; font-size: 13px;color:#333333;line-height: 18px;font-family: HelveticaNeue, Helvetica, Arial, sans-serif;">
			<tr><!--start header area-->
				<td align="center"  valign="middle" bgcolor="#ffffff" style="background-color: #ffffff;">
					<table  cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff" align="center" style="border:1px solid #d8d8d8;">
						<tr>
							<!-- insert company logo and link-->
							<td style="width: 20%;margin:0;height:45px;vertical-align:middle;background-color:#efefef;text-align:center">
								<a href="www.exoplatform.com" target="_blank">
									<img src="https://www.rosehosting.com/blog/wp-content/uploads/2014/03/exo-platform-vps.png" style="width: 50%">
								</a>
							</td>
							<!--pass a link through a property-->
							<td style="margin:0;height:45px;vertical-align:middle;background-color:#efefef;font-family:'HelveticaNeue Bold',Helvetica,Arial,sans-serif;color:grey;font-size:14px;text-align:left" height="45" valign="middle">
								<%=_ctx.appRes("Notification.label.header", FOOTER_LINK)%>
							</td>
						</tr>
					</table>
				</td>
			</tr><!--end header area-->
			<tr><!--start content area-->
				<td bgcolor="#ffffff" style="background-color: #ffffff;">
					<table cellpadding="0" cellspacing="0" width="100%"  bgcolor="#ffffff" style="background-color: #ffffff; border-left:1px solid #d8d8d8;border-right:1px solid #d8d8d8;">
						<tr>
							<td>
								<table border="0" cellpadding="0" cellspacing="0" width="92%" bgcolor="#ffffff" align="center" style="background-color: #ffffff; color:#333333;line-height:20px;">
									<tr>
										<td align="left" bgcolor="#ffffff" style="background-color: #ffffff; padding: 10px 0;">
											<p style="margin:20, 20;font-weight:bold;vertical-align:middle; font-family: 'HelveticaNeue Bold', Helvetica, Arial, sans-serif;color:#2f5e92;font-size:18px;">
												<!--new property-->
												<%=_ctx.appRes("Notification.label.Type")%> <%=_ctx.appRes("Notification.title.ActivityMentionPlugin")%>
											</p>
											<table border="0" cellpadding="0" cellspacing="0" >
												<tr>
													<td  valign="top" style="margin-top: 0px;">
														<p style="margin: 0 0 10px 0; line-height: 22px; color: #333333; font-size:13px; font-family:'HelveticaNeue bold',verdana,arial,tahoma">
														  <%
															String profileUrl = "<strong><a target=\"_blank\" style=\"color: #2f5e92; font-size: 13px; text-decoration: none; font-family: 'HelveticaNeue Bold', Helvetica, Arial, sans-serif\" href=\""+ PROFILE_URL + "\">" + USER + "</a></strong>";
														  %>
														  <%=_ctx.appRes("Notification.message.ActivityMentionPlugin", profileUrl)%>:
														</p>
														<!--main content of the mentioned activity-->
														<table border="0" cellpadding="0" cellspacing="0" width="460" bgcolor="#ffffff" align="center" style="background-color: #ffffff; font-size: 12px;color:#333333;line-height: 18px; margin-bottom: 15px;">
															<tbody>
																<tr>
																	<td align="left" bgcolor="#ffffff" style="background-color: #f9f9f9; padding: 5px 0;">
																		$ACTIVITY
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</table>
											<!--insert Reply button-->
											<p style="margin: 0 0 20px;text-align:center">
												<a target="_blank" style="
													display: inline-block;
													text-decoration: none;
													font-size: 11px;
													font-family: 'HelveticaNeue Bold', Helvetica, Arial, sans-serif;
													color: #ffffff;
													text-shadow: 0 -1px 0 rgba(23, 33, 37, .25);
													background-color: #567ab6;
													background-image: -moz-linear-gradient(top, #638acd, #426393);
													background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#638acd), to(#426393));
													background-image: -webkit-linear-gradient(top, #638acd, #426393);
													background-image: -o-linear-gradient(top, #638acd, #426393);
													background-image: linear-gradient(to bottom, #638acd, #426393);
													background-repeat: repeat-x;
													border-radius: 4px;
													-moz-border-radius: 4px;
													padding: 4px 8px;
													height: 11px;
													line-height: 11px;
													max-height: 11px;
													text-align: center;
													border: 1px solid #224886;
													font-weight: bold;
													-webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);
													-moz-box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);
													box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);
													vertical-align: middle;
												" href="$REPLY_ACTION_URL"><%=_ctx.appRes("Notification.label.Reply")%></a>
												<!--insert View full discussion button-->
												<a target="_blank" style="
													display: inline-block;
													text-decoration: none;
													font-size: 11px;
													font-family: HelveticaNeue, Helvetica, Arial, sans-serif,serif;
													color: #333333;
													background-color: #f1f1f1;
													background-image: -moz-linear-gradient(top, #ffffff, #f1f1f1);
													background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#f1f1f1));
													background-image: -webkit-linear-gradient(top, #ffffff, #f1f1f1);
													background-image: -o-linear-gradient(top, #ffffff, #f1f1f1);
													background-image: linear-gradient(to bottom, #ffffff, #f1f1f1);
													background-repeat: repeat-x;
													border-radius: 4px;
													-moz-border-radius: 4px;
													padding: 4px 8px;
													height: 11px;
													line-height: 12px;
													max-height: 11px;
													text-align: center;
													border: 1px solid #c7c7c7;
													-webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);
													-moz-box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);
													box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);
													vertical-align: middle;
													margin-left: 3px;
												" href="$VIEW_FULL_DISCUSSION_ACTION_URL" target="_blank"><%=_ctx.appRes("Notification.label.ViewFullDiscussion")%></a>
											</p>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>            
				</td>
			</tr><!--end content area-->    
		</table>

	You can replace with your company logo and link here.

	A message at header. This property will be declared in the
	``Notification_xx.properties`` files later.

	A new label before the title of the mentioned activity, which will be
	declared in the ``Notification_xx.properties`` files later.

	A message corresponding to the mentioned activity.

	The detailed content of the mentioned activity.

	A Reply button, helping user to quickly make answer on the mentioned
	activity stream.

	A View full discussion button, helping user to jump directly to the
	mentioned activity stream.

	In this script, we have added 2 new properties
	(``Notification.label.header`` and ``Notification.label.Type``) and
	remove several ones (for example, ``Notification.label.footer``) in
	comparison with the old script in the
	``social-notification-extension.war`` package. The next steps will
	declare the new ones in two property files.

5. Declare ``Notification.label.header`` and ``Notification.label.Type`` 
   as 2 new properties as follows:

	-  In ``Notification_en.properties``:

	   ::

		   Notification.label.Type=Notification type:
		   Notification.label.header=You has been successfully subscribed to our newsletter. <br/>To unsubscribe, <a target="_blank" style="margin:30px 0 10px 0; color: #2f5e92;text-decoration: none;font-size:13px;font-family:HelveticaNeue,arial,tahoma,serif" href="{0}">click here</a>.

	-  In ``Notification_fr.properties``:

	   ::

		   Notification.label.Type=Type de notification:
		   Notification.label.header=Vous avez \u00E9t\u00E9 abonn\u00E9 \u00E0 notre bulletin avec succès.<br/> Pour d\u00E9sinscription <a target="_blank" style="margin:30px 0 10px 0; color: #2f5e92;text-decoration: none;font-size:13px;font-family:HelveticaNeue,arial,tahoma,serif" href="{0}">cliquez ici</a>.

**Testing**

1. Go up to the parent project's folder and build it with the command:
   **mvn clean install**.

2. Copy the generated jar and war files into the corresponding deployment
   folders where you unpacked the eXo Platform installation.

3. Follow :ref:`this guide <OutgoingMailService>` to configure email 
   service for eXo Platform.

4. Start eXo Platform and create 2 new users: *john* and *marry*, with 
   real emails. Notice that you need to turn on the email notification, 
   not only on *john* and *marry* sides but also on the administrator 
   side as stated :ref:`here <NotificationAdministration>`.

5. Log in as *marry* user and post an activity that mentions *john*, for
   example.

	Now, log in *john*'s email account, you will see a new notification
	email with layout as follows:

	-  if *john* user is in English language:

	   |image53|

	-  if *john* user is in French language:

	   |image54|

	By comparing with the below old template, you will see changes between
	them:

	|image55|

.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.OverridingUserProfileDesign:

Overriding user profile design
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

eXo Platform provides you with an extensible user profile design. With this
extensibility, you can override portlets on the user profile page with
your own templates.

To do this, there are 2 ways as follows:

-  Overriding existing html content by changing or adding more html
   elements, such as ``div`` tags.

-  Overriding existing groovy script by changing or adding more
   operations, such as ``for`` loops or ``if`` conditions.

This guide will walk you through both by overriding Profile Portlet,
Experience Profile Portlet, Connections User Portlet and Recent
Activities Portlet on the user profile page. You can download the source
code used in this guide
`here <https://github.com/exo-samples/docs-samples/tree/4.3.x/user-profile-design>`__.

**Overriding user profile**

1. Create a webapp ``user-profile-extension.war`` as follows:

|image56|

	-  The ``user`` folder contains your new profile portlet templates.

2. Add these configurations to ``web.xml``:

   .. code:: xml

		<?xml version="1.0" encoding="ISO-8859-1" ?>
		<!DOCTYPE web-app PUBLIC "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
		"http://java.sun.com/dtd/web-app_2_3.dtd">
		<web-app>
			<display-name>user-profile-extension</display-name>
			<!-- Resource filter to cache merged javascript and css -->
			<filter>
				<filter-name>ResourceRequestFilter</filter-name>
				<filter-class>org.exoplatform.portal.application.ResourceRequestFilter</filter-class>
			</filter>
			<filter-mapping>
				<filter-name>ResourceRequestFilter</filter-name>
				<url-pattern>/*</url-pattern>
			</filter-mapping>
			<!-- Listener -->
			<listener>
				<listener-class>org.exoplatform.container.web.PortalContainerConfigOwner</listener-class>
			</listener>
		</web-app>

3. Override ``UIBasicProfilePortlet.gtmpl`` with the following code:

   ::

		<%
		import org.exoplatform.social.user.portlet.UserProfileHelper;
		import org.exoplatform.social.webui.Utils;

		//Retrieve the basic information of the user
		def profile = uicomponent.getProfileInfo();
		def keys = profile.keySet();
		%>

		<!-- showing and hiding control buttons -->
		<button onclick="showFullContact()" id="btn_show_contact">Show full contact information</button>
		<button onclick="hideFullContact()" id="btn_hide_contact" style="display: none">Hide full contact information</button>

		<!-- javascript to show and hide full contact information -->
		<script type="text/javascript">
		function showFullContact(){
			document.getElementById("$uicomponent.id").style.display = "block";
			document.getElementById("btn_show_contact").style.display = "none";
			document.getElementById("btn_hide_contact").style.display = "block";
		}
		function hideFullContact(){
			document.getElementById("$uicomponent.id").style.display = "none";
			document.getElementById("btn_show_contact").style.display = "block";
			document.getElementById("btn_hide_contact").style.display = "none";
		}
		</script>

		<div class="uiSocApplication uiBasicProfilePortlet" id="$uicomponent.id" style="display: none">
		  <h4 class="head-container"><%=_ctx.appRes("UIBasicProfile.label.ContactInformation")%></h4>
		  <div class="uiBasicInfoSection">
		  
			<%
			//Loop through to print out all information
			  for(key in keys) {
				def values = profile.get(key);
				String clzz = key.substring(0, 1).toUpperCase() + key.substring(1);
				System.out.println(key);
				
				//If the user is not the owner, do not print out email
				if (!Utils.isOwner() && key.toString().equals("email")) continue;
			%>
			<div class="group-user-info">
			  <div class="label-user-info"><strong><%=_ctx.appRes("UIBasicProfile.label." + key)%>:</strong></div>
			  <div class="value-user-info">
			  <%
				if(UserProfileHelper.isString(values)) {
			  %>
				<div class="ui<%=clzz%> ellipsis" rel="tooltip" data-placement="top" title="" data-original-title="<%=values%>"><%=values%></div>
			  <%} else  {
				  for(subKey in values.keySet()) {
					def isIms = UserProfileHelper.isIMs(key);
					def typeIconClzz = "";
					if (isIms) {
					  typeIconClzz = UserProfileHelper.getIconCss(subKey); 
					}
					
					def listVal = values.get(subKey); 
					int valueNum = 0;
					if (UserProfileHelper.isURL(key)) {
					  for (url in listVal) { %>
					  <div class="ui<%=clzz%> ellipsis"><a href="<%=UserProfileHelper.toAbsoluteURL(url)%>" target="_blank"
						   rel="tooltip" data-placement="top" title="" data-original-title="<%=url%>"><%=url%></a></div>
					<%}
					} else {
					  if (typeIconClzz.length() > 0) {
						typeIconClzz = typeIconClzz + " uiIconSocLightGray";
					  }
					  for (val in listVal) { 
					  %>
					  <div class="listContent">
					  <%
						if (valueNum == 0) {
					  %>
						 <%if(isIms) {%>
						<div><i class="<%=typeIconClzz%>"></i>&nbsp;&nbsp;<%=_ctx.appRes("UIBasicProfile.label." + subKey)%>:&nbsp;</div>
						 <%} else { %>
						<div><%=_ctx.appRes("UIBasicProfile.label." + subKey)%>:&nbsp;</div>  
						 <%}%>
					  <%} else { %>
						<div></div>
					  <%}
						valueNum++;
					  %>
						<div class="ellipsis" rel="tooltip" data-placement="top" title="" data-original-title="<%=val%>"><%=val%></div>
					  </div>
					  <% 
					  }
					}
				  }
				}
			  %>
			  </div>
			</div>
			<%}%>
			<div class="line-bottom"><span></span></div>
		  </div>
		</div>

	This template overrides the Profile Portlet by adding:

	-  ``btn_show_contact``: a button to show the portlet's content.

	-  ``btn_hide_contact``: a button to hide the portlet's content.

	-  ``showFullContact()``: a Javascript function to handle when user
	   clicks on the ``btn_show_contact`` button.

	-  ``hideFullContact()``: a Javascript function to handle when user
	   clicks on the ``btn_hide_contact`` button.

	-  the code:

	   ::

		   if (!Utils.isOwner() && key.toString().equals("email")) continue;

   to check if the viewer is not the profile page owner, then the email
   information will not be displayed.

4. Override ``UIMiniConnectionsPortlet.gtmpl`` as follows:

   ::

		<%
		  import org.exoplatform.social.core.service.LinkProvider;
		  import org.exoplatform.portal.webui.util.Util;
		  import org.exoplatform.social.webui.Utils;
		  import org.exoplatform.social.user.portlet.UserProfileHelper;
		  
		  //Load current connections of the user
		  List profiles = uicomponent.loadPeoples();
		  int size = uicomponent.getAllSize();
		  uicomponent.initProfilePopup();
		%>

		<!-- showing and hiding control buttons -->
		<button onclick="showConnection()" id="btn_show_connection">Show connections</button>
		<button onclick="hideConnection()" id="btn_hide_connection" style="display: none">Hide connections</button>

		<!-- javascript to show and hide user's connections -->
		<script type="text/javascript">
		function showConnection(){
			document.getElementById("$uicomponent.id").style.display = "block";
			document.getElementById("btn_show_connection").style.display = "none";
			document.getElementById("btn_hide_connection").style.display = "block";
		}
		function hideConnection(){
			document.getElementById("$uicomponent.id").style.display = "none";
			document.getElementById("btn_show_connection").style.display = "block";
			document.getElementById("btn_hide_connection").style.display = "none";
		}
		</script>

		<div class="uiSocApplication uiMiniConnectionsPortlet" id="$uicomponent.id" style="display: none">
		  <h4 class="head-container"><%=_ctx.appRes("UIBasicProfile.label.Connections")%></h4>
		  <% if(size > 0) { %>
		  
			<!-- if having connections, loop through to print out -->
			<div class="borderContainer" id="borderMiniConnectionsPortlet">
			<% for(profile in profiles) { %>
				 <a href="<%=profile.getProfileURL()%>" class="avatarXSmall">
				   <img alt="<%=profile.getDisplayName()%>" src="<%=profile.getAvatarURL()%>">         
				 </a>
			<% } %>
			
				<!-- Provide View all connections feature -->
			   <div class="viewAllConnection"><a href="<%=LinkProvider.getBaseUri(null, null)%>/connections/network/<%=uicomponent.getCurrentRemoteId()%>"><%=_ctx.appRes("UIBasicProfile.label.ViewAll")%>&nbsp;(<%=size%>)</a></div>
			 </div>
		  <% } else {
		  
			  //if no connection and the user is the owner, provide Find new connection feature
			  //if the user is not the owner, just print out the message
			  String keyNoConnection = Utils.isOwner() ? "YouHaveNotConnections" : "UserHaveNotConnections";
			  String noConnectionCSS = Utils.isOwner() ? "noConnection" : "";
		  %>
			  <div class="borderContainer $noConnectionCSS center">
				<%=_ctx.appRes("UIBasicProfile.info." + keyNoConnection)%>
				<%if (Utils.isOwner()) { %>
				<div class="findConnection"><a href="<%=LinkProvider.getBaseUri(null, null)%>/connections/all-people/"><%=_ctx.appRes("UIBasicProfile.label.FindConnections")%></a></div>
				<%} %>
			  </div>
		  <% } %>
		</div>

	This template overrides the Connections User Portlet by adding:

	-  ``btn_show_connection``: a button to show the portlet's content.

	-  ``btn_hide_connection``: a button to hide the portlet's content.

	-  ``showConnection()``: a Javascript function to handle when user
	   clicks on the ``btn_show_connection`` button.

	-  ``hideConnection()``: a Javascript function to handle when user
	   clicks on the ``btn_hide_connection`` button.

5. Override ``UIExperienceProfilePortlet.gtmpl`` with:

   ::

		<%
		  import org.exoplatform.social.core.service.LinkProvider;
		  
		  //Retrieve the user's information and check whether the user is the owner or not
		  String aboutMe = uicomponent.getAboutMe();
		  boolean isOwner = uicomponent.isOwner();
		  List experienceData = uicomponent.getExperience();
		  def uiSocApplicationClzz = !isOwner && (experienceData.size() == 0) ? "" : "uiSocApplication";
		%>
		<div class="<%=uiSocApplicationClzz%> uiExperienceProfilePortlet" id="$uicomponent.id">
		<%
			//if the About me information of the user is not empty, print out
			if(aboutMe.length() > 0) { %>
			  <h4 class="head-container"><%=_ctx.appRes("UIBasicProfile.label.AboutMe")%></h4>
			  
			  <!-- Add more description here -->
			  <p>Quick description of the user</p>
			  <div class="simpleBox aboutMe"><%=aboutMe%></div>
			
			<!-- if empty and the user is the owner, print out a message and provide Edit profile feature -->
			<% } else if(isOwner) { %>
			  <div class="no-content center">
				<div><%=_ctx.appRes("UIBasicProfile.info.HaveNotAbout")%></div>
				<button class="btn btn-primary" onclick="window.location.href=window.location.origin + '<%=LinkProvider.getBaseUri(null, null)%>/edit-profile/'">
				  <i class="uiIconEdit uiIconLightGray"></i> <%=_ctx.appRes("UIBasicProfile.action.EditProfile")%></button>
			  </div>
			<% } 
			
			//if having experience information, loop through to print out
			if(experienceData.size() > 0) {
			  print("<h4 class=\"head-container\">" + _ctx.appRes("UIBasicProfile.label.Experience") + "</h4>");
			  print("<div class=\"simpleBox\"> ");
			  for(experience in experienceData) {
				print("<div class=\"experience-container\"> ");
				String utilNow = experience.get(uicomponent.EXPERIENCES_IS_CURRENT);
				for(key in experience.keySet()) {
				  if(uicomponent.EXPERIENCES_IS_CURRENT.equals(key)) {
					continue;
				  }
				  String label = _ctx.appRes("UIBasicProfile.label." + key);
		%>
				<div class="<%=key%> clearfix"><div class="labelName pull-left"><%=label%>:</div>
				  <div rel="tooltip" data-placement="top" title="" data-original-title="<%=experience.get(key)%>"
					class="pull-left ellipsis"><%=experience.get(key)%>
					<%=(utilNow != null && "startDate".equals(key)) ? (" "+_ctx.appRes("UIBasicProfile.label.untilNow")) : "" %></div>
				 </div> 
		<%
				}
				print("</div>");
			  }
			  print("</div>");
			}
		%>
		</div>

	-  This template overrides the Experience Profile Portlet with more
	   description in the code:

	   ::

		   <p>Quick description of the user</p>

6. Override ``UIRecentActivitiesPortlet.gtmpl`` as follows:

   ::

		<%
		import org.exoplatform.social.webui.Utils;
		import org.exoplatform.portal.webui.util.Util;
		import org.exoplatform.social.core.service.LinkProvider;
		import org.exoplatform.social.user.portlet.UserProfileHelper;
		import org.exoplatform.social.user.portlet.RecentActivitiesHelper;

		//Retrieve the most recent activities of the user
		List activities = uicomponent.getRecentActivities();
		%>
		<div class="uiSocApplication uiRecentActivitiesPortlet" id="$uicomponent.id">
		  <h4 class="head-container"><%=_ctx.appRes("UIBasicProfile.label.RecentActivities")%></h4>
		  
		  <!-- Additional description -->
		  <p>The most recent activities of the user</p>
		  
		  <!-- Main content of the recent activities -->
		  <div class="activityCont">
		  <%
		  
			//no activity
			if(activities.size() == 0) {
			 String keyNoActivities = Utils.isOwner() ? "YouHaveNotActivities" : "UserHaveNotActivities";
		  %>
			  <div class="simpleBox noActivity center"><%=_ctx.appRes("UIBasicProfile.info." + keyNoActivities)%></div>
		  <%
		  
			//if having activities, loop through to print out
			} else {
			  String activityURL = LinkProvider.getBaseUri(null, null) + "/activity?id=";
			  for (activity in activities) {
				def profile = RecentActivitiesHelper.getOwnerActivityProfile(activity);
				String avatarURL = profile.getAvatarUrl();
				String profileURL = profile.getUrl();
				String displayName = profile.getFullName();
				String activityTypeIcon =  RecentActivitiesHelper.getActivityTypeIcon(activity);
				String link = RecentActivitiesHelper.getLink(activity);
				String linkTitle = RecentActivitiesHelper.getLinkTitle(activity);
		  %>
		  
			  <!-- Build an activity stream for each activity-->
			  <div class="activityStream uiDefaultActivity clearfix" id="Activity<%=activity.id%>">
				<div class="activityTimeLine pull-left">
				  <div class="activityAvatar avatarCircle">
					<a href="<%=profileURL%>">
					  <img alt="<%=displayName%>" src="
					  <%=((avatarURL == null || avatarURL.length() == 0) ? LinkProvider.PROFILE_DEFAULT_AVATAR_URL : avatarURL)%>">
					</a>
				  </div>
				  <% if (activityTypeIcon != null && activityTypeIcon.length() > 0) { %>
				  <div class="activityType"><span><i class="<%=activityTypeIcon%> uiIconSocWhite"></i></span></div>
				  <% } %>
				</div>
				<!--end activityTimeLine-->
				
				<div class="boxContainer" id="boxContainer" onclick="window.open('<%=(activityURL + activity.id)%>', '_self')">
				  <div id="Content<%=activity.id%>" class="content">
				  <%if (link != null) { 
					  if (linkTitle != null) {
				  %> 
						<div class="status"><%=linkTitle%></div>
						<div class="link"><a href="javascript:void(0);" onclick="(function(evt){ evt.stopPropagation(); window.open('<%=link%>', '_blank');})(event)"><%=activity.getTitle()%></a></div>
				  <%
					  } else {
				  %>
						<div><a href="javascript:void(0);" onclick="(function(evt){ evt.stopPropagation(); window.open('<%=link%>', '_self');})(event)">
						<%=activity.getTitle()%></a></div>
				  <%  }
					} else {%>
						<div class="status"><%=activity.getTitle()%></div>
				  <%} %>
				  </div>
				</div>
				<!-- end boxContainer-->
			  </div>
			  <!-- end activityStream -->
		  <%
			  }
			  
			  //Provide view all activities feature
			  String activityStreamURL = LinkProvider.getUserActivityUri(Utils.getOwnerIdentity(false).getRemoteId());
			  print("<div style=\"display: block;\" class=\"boxLoadMore\">"+
			  "<button class=\"btn\" style=\"width:100%;\" onclick=\"window.location.href='" + activityStreamURL + "'\">" +
			  _ctx.appRes("UIBasicProfile.action.ViewAll") +
			  "</button></div>");
			  uicomponent.initProfilePopup();
			}
		  %>
			</div>    
			  <%
			  if (uicomponent.hasActivityBottomIcon && activities.size() != 0) {
		  %>
			  <div class="activityBottom" style="display: block;"><span></span></div>
		  <%      
			  }
			  %>
		</div>

	-  This template overrides the Recent Activities Portlet with more
	   description in the code:

	   ::

		   <p>The most recent activities of the user</p>

7. Create a jar file to register this ``user-profile-extension.war`` to
   portal container as in :ref:`Portal extension <PLFDevGuide.eXoAdd-ons.PortalExtension>`. 
   Then, edit the ``configuration.xml`` file as follows:

	.. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<configuration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd"
		xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">
			
			<external-component-plugins>
				<!-- The full qualified name of the PortalContainerConfig -->
				<target-component>org.exoplatform.container.definition.PortalContainerConfig</target-component>
				<component-plugin>
					<!-- The name of the plugin -->
					<name>Change PortalContainer Definitions</name>
					<!-- The name of the method to call on the PortalContainerConfig in order to register the changes on the PortalContainerDefinitions -->
					<set-method>registerChangePlugin</set-method>
					<!-- The full qualified name of the PortalContainerDefinitionChangePlugin -->
					<type>org.exoplatform.container.definition.PortalContainerDefinitionChangePlugin</type>
					<priority>102</priority>
					<init-params>
						<value-param>
							<name>apply.default</name>
							<value>true</value>
						</value-param>
						<object-param>
							<name>change</name>
							<object type="org.exoplatform.container.definition.PortalContainerDefinitionChange$AddDependenciesAfter">
								<!-- The list of name of the dependencies to add -->
								<field name="dependencies">
									<collection type="java.util.ArrayList">
										<value>
											<!--The context name of the portal extension-->
											<string>user-profile-extension</string>
										</value>
									</collection>
								</field>
							</object>
						</object-param>     
					</init-params>
				</component-plugin>
			</external-component-plugins>   
		</configuration>

8. Copy these jar and war files into the corresponding deployment 
   folders where you unpacked the eXo Platform installation.

**Testing what you have customized**

Start eXo Platform and you will see your new profile appear as follows:

|image57|

Clicking on Show full contact information or Show connections button
will expand the corresponding information panel. Note that if you are
not this user, the email will not be displayed:

|image58|

.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.XWIKI_Macro:

Wiki macro
~~~~~~~~~~~

eXo Platform uses XWiki as a Wiki engine, so you can develop and use macros
in eXo Wiki completely following the XWiki approach.

If you have never tried using a macro before, you can quickly try `eXo
video-wiki-macro <https://github.com/exo-addons/video-wiki-macro>`__.
Follow the project's README and it will help you build, deploy and use
the macro.

As said, the macro completely follows XWiki approach, so you can refer
to `their
documentation <http://rendering.xwiki.org/xwiki/bin/view/Main/ExtendingMacro>`__
for a start. In this tutorial, you write a new macro called "mailto".
When a user inserts the macro, he inputs a username from that your macro
that retrieves an email contact and adds it inline. The source code can
be found
`here <https://github.com/exo-samples/docs-samples/tree/4.3.x/exo-xwiki-macro-samples>`__.

-  **The project structure**

Create a Maven project with the structure like this:

|image59|

Alternatively, you can generate a project and modify it using `the
XWiki's macro-archetype
5.4.2 <http://mvnrepository.com/artifact/org.xwiki.rendering/xwiki-rendering-archetype-macro/5.4.2>`__.

-  **The dependencies**

In ``pom.xml``, you need dependencies of XWiki (version 5.4.2 for strong
compatibility) and eXo Social:

.. code:: xml

    <dependency>
        <groupId>org.xwiki.rendering</groupId>
        <artifactId>xwiki-rendering-syntax-xwiki21</artifactId>
    </dependency>
    <dependency>
        <groupId>org.xwiki.rendering</groupId>
        <artifactId>xwiki-rendering-syntax-xhtml</artifactId>
    </dependency>
    <dependency>
        <groupId>org.xwiki.rendering</groupId>
        <artifactId>xwiki-rendering-transformation-macro</artifactId>
    </dependency>
    <dependency>
        <groupId>org.exoplatform.social</groupId>
        <artifactId>social-component-core</artifactId>
    </dependency>

-  **The MailtoMacro class**

The macro class should extend
``org.xwiki.rendering.macro.AbstractMacro`` and implement the
``execute`` method. It must declare a parameter type so that XWiki takes
care the interface with users to get a username and passes it to your
method.

.. code:: java

    @Component("mailto")
    public class MailtoMacro extends AbstractMacro<MailtoMacroParams> {

      public MailtoMacro() {
        super("mailto", "Add an email contact inline.", MailtoMacroParams.class);
      }

      public boolean supportsInlineMode() {
        return true;
      }

      public List<Block> execute(MailtoMacroParams parameters,
                                 String content,
                                 MacroTransformationContext context) throws MacroExecutionException {
        IdentityManager identityManager = (IdentityManager) PortalContainer.getInstance().getComponentInstanceOfType(IdentityManager.class);
        try {
          // Get user info.
          Identity identity = identityManager.getOrCreateIdentity(OrganizationIdentityProvider.NAME, parameters.getUsername(), false);
          Profile profile = identity.getProfile();
          String displayName = profile.getFullName(); //to be displayed.
          String email = profile.getEmail(); //to be linked.
          
          // Build the blocks.
          RawBlock rawblock = new RawBlock(displayName, Syntax.XHTML_1_0);
          LinkBlock linkblock = new LinkBlock(Arrays.<Block>asList(rawblock), new ResourceReference(email, ResourceType.MAILTO), true);
          return Arrays.<Block>asList(linkblock);
        } catch (Exception e) {
          
          // In case the parameter is not a valid user id.
          RawBlock rawblock = new RawBlock(parameters.getUsername()+"(?)", Syntax.XHTML_1_0);
          return Arrays.<Block>asList(rawblock);
        }
      }
    }

You provide the macro name, a description (users will see it) by the
annotation and the constructor. You can also categorize your macro, see
a code sample in the video-macro's source code.

-  **The MailtoMacroParams class**

You need only one parameter - **username** that is mandatory. In the
execute method, you use it to get a user profile (if it is invalid, the
macro simply shows its raw value with a question (?) sign).

Pay attention to the annotations:

.. code:: java

    public class MailtoMacroParams {
      
      /**
       * The MailtoMacro expects a user name. If the user name is not valid, it appends a question sign to the user name.
       */
      
      private String username;

      public String getUsername() {
        return username;
      }

      @PropertyDescription("Somebody's ID. His email will be added inline.")
      @PropertyMandatory
      public void setUsername(String username) {
        this.username = username;
      }
    }

-  **The components file**

Finally, you declare the macro's class name in
``src/main/resources/META-INF/components.txt``, just with one line:

::

    org.exoplatform.samples.xwiki.macro.MailtoMacro

Here is the picture of a Wiki page that uses the macros:

|image60|


.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ExtensibleFilter:

ExtensibleFilter mechanism
~~~~~~~~~~~~~~~~~~~~~~~~~~~

eXo Platform provides you with the ExtensibleFilter mechanism that allows you
to insert more filters from your own extension without touching the
``web.xml`` file.

In this section, you will be introduced how to create a filter that
requires users to change password at the first login and when it is
expired. The source code used in this tutorial is available
`here <https://github.com/exo-addons/change-password>`__ so that you can
clone.

Our general project will be structured as below:

|image61|

In which, the sub-projects include:

-  **config**: creates a jar file that declares the extension (war) as a
   portal dependency.

-  **services**: creates services that check if this is the first login
   of the current user or their current password has expired, and update
   their new password.

-  **war**: creates a war file that provides filter configuration files,
   locale resources as well as a form for changing password.

Now, follow the detailed steps:

**Under pom.xml**

Add the following dependencies to the ``pom.xml`` file:

.. code:: xml

    <?xml version="1.0" encoding="UTF-8"?>
    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
      <modelVersion>4.0.0</modelVersion>
      <artifactId>change-password-extension</artifactId>
      <groupId>org.exoplatform.addons.change-password</groupId>
      <version>1.1.x-SNAPSHOT</version>
      <packaging>pom</packaging>
      <name>Change Password Extension</name>
      <description>Change Password Extension</description>
      <modules>
        <module>config</module>
        <module>war</module>
        <module>services</module>
      </modules>
      <dependencyManagement>
        <dependencies>
          <dependency>
            <groupId>org.exoplatform.platform</groupId>
            <artifactId>platform</artifactId>
            <version>4.2.0</version>
            <type>pom</type>
            <scope>import</scope>
          </dependency>
        </dependencies>
      </dependencyManagement>
    </project>

**Under config folder**

1. Create a ``pom.xml`` and a ``configuration.xml`` file as below:

	|image62|

2. Add the following information to ``config/pom.xml``:

	.. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
		  <modelVersion>4.0.0</modelVersion>
		  <parent>
			<artifactId>change-password-extension</artifactId>
			<groupId>org.exoplatform.addons.change-password</groupId>
			<version>1.1.x-SNAPSHOT</version>
		  </parent>
		  <artifactId>change-password-extension-config</artifactId>
		  <packaging>jar</packaging>
		  <name>Change Password Extension Configuration</name>
		  <description>Change Password Extension Configuration</description>
		</project>

3. Add the below configuration to ``conf/configuration.xml``:

	.. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<configuration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd"
			xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">

			<external-component-plugins>
			  <!-- The full qualified name of the PortalContainerConfig -->
			  <target-component>org.exoplatform.container.definition.PortalContainerConfig</target-component>
			  <component-plugin>
				<!-- The name of the plugin -->
				<name>Change PortalContainer Definitions</name>
				<!-- The name of the method to call on the PortalContainerConfig in order to register the changes on the PortalContainerDefinitions -->
				<set-method>registerChangePlugin</set-method>
				<!-- The full qualified name of the PortalContainerDefinitionChangePlugin -->
				<type>org.exoplatform.container.definition.PortalContainerDefinitionChangePlugin</type>
				<priority>102</priority>
				<init-params>
				  <value-param>
					<name>apply.default</name>
					<value>true</value>
				  </value-param>
				  <object-param>
					<name>change</name>
					<object type="org.exoplatform.container.definition.PortalContainerDefinitionChange$AddDependenciesAfter">
					  <!-- The list of name of the dependencies to add -->
					  <field name="dependencies">
						<collection type="java.util.ArrayList">
						  <value>
							<string>change-password-extension</string>
						  </value>
						</collection>
					  </field>
					  <!-- The name of the target dependency -->
					  <field name="target">
						<string>welcome-screens</string>
					  </field>
					</object>
				  </object-param>     
				</init-params>
			  </component-plugin>
			</external-component-plugins>   
		</configuration>

**Under services folder**

This project structure is as follows:

|image63|

1. Implement the class ``ChangePasswordFilter.java`` as follows:

	.. code:: java

		package org.exoplatform.changePassword;

		import java.io.IOException;
		import java.text.SimpleDateFormat;
		import java.util.Date;

		import javax.servlet.FilterChain;
		import javax.servlet.ServletContext;
		import javax.servlet.ServletException;
		import javax.servlet.ServletRequest;
		import javax.servlet.ServletResponse;
		import javax.servlet.http.HttpServletRequest;
		import javax.servlet.http.HttpServletResponse;

		import org.exoplatform.container.ExoContainerContext;
		import org.exoplatform.container.PortalContainer;
		import org.exoplatform.services.log.ExoLogger;
		import org.exoplatform.services.log.Log;
		import org.exoplatform.services.organization.OrganizationService;
		import org.exoplatform.services.organization.UserProfile;
		import org.exoplatform.services.organization.UserProfileHandler;
		import org.exoplatform.services.security.ConversationState;
		import org.exoplatform.services.security.Identity;
		import org.exoplatform.web.filter.Filter;

		public class ChangePasswordFilter implements Filter {
			private static Log logger = ExoLogger.getLogger(ChangePasswordFilter.class);
			private static final String CHANGE_PASSWORD_SERVLET_CTX = "/change-password-extension";
			private static final String CHANGE_PASSWORD_SERVLET_URL = "/changePasswordView";
			private static final String INITIAL_URI_PARAM_NAME = "initialURI";
			private static final String REST_URI = ExoContainerContext.getCurrentContainer().getContext().getRestContextName();

			public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
				HttpServletRequest httpServletRequest = (HttpServletRequest)servletRequest;
				HttpServletResponse httpServletResponse = (HttpServletResponse)servletResponse;
				OrganizationService organizationService = (OrganizationService)PortalContainer.getInstance().getComponentInstanceOfType(OrganizationService.class);
				//get current user
				Identity identity = ConversationState.getCurrent().getIdentity();
				String userId = identity.getUserId();
				boolean logged = false;
				boolean passwordChanged = false;
				boolean passwordExpired = false;
				if (!userId.equals("__anonim")) {
					logged = true;
					UserProfileHandler userProfileHandler = organizationService.getUserProfileHandler();
					try {
						//get current user profile
						UserProfile userProfile = userProfileHandler.findUserProfileByName(userId);
						//get password changing status
						String changePassword = userProfile.getAttribute("changePassword");
						//get expire password date
						String expirePasswordDate = userProfile.getAttribute("expirePasswordDate");
						SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MMM/yyyy");
						Date today = new Date();
						//check if the password has been changed
						if (changePassword != null && changePassword.equals("true")) {
							passwordChanged = true;
						}
						//check if the password has expired
						passwordExpired = today.after(simpleDateFormat.parse(expirePasswordDate));
					} catch (Exception exception) {
						logger.error("User profile not found");
					}
				}    
				String requestUri = httpServletRequest.getRequestURI();
				boolean isRestUri = requestUri.contains(REST_URI);
				if (!isRestUri && logged && (!passwordChanged || passwordExpired)) {
					String requestURI = httpServletRequest.getRequestURI();
					String queryString = httpServletRequest.getQueryString();
					if (queryString != null) {
						requestURI += "?" + queryString;
					}
					//get context for changing password and forward to password changing view servlet
					ServletContext servletContext = httpServletRequest.getSession().getServletContext().getContext(CHANGE_PASSWORD_SERVLET_CTX);
					String targetURI = (new StringBuilder()).append(CHANGE_PASSWORD_SERVLET_URL + "?" + INITIAL_URI_PARAM_NAME + "=").append(requestURI).toString();
					servletContext.getRequestDispatcher(targetURI).forward(httpServletRequest, httpServletResponse);
					return;
				}
				filterChain.doFilter(servletRequest, servletResponse);
			}
		}

This filter checks the ``changePassword`` attribute from the current
user profile as well as the date when his password will expire. If one
of these conditions is met, this user will be forwarded to the password
changing view servlet in the next step.

2. Implement the class ``ChangePasswordViewServlet.java`` as below:

	.. code:: java

		package org.exoplatform.changePassword;

		import java.io.IOException;

		import javax.servlet.ServletException;
		import javax.servlet.http.HttpServlet;
		import javax.servlet.http.HttpServletRequest;
		import javax.servlet.http.HttpServletResponse;

		public class ChangePasswordViewServlet extends HttpServlet {
			private static final String CHANGE_PASSWORD_JSP_RESOURCE = "/WEB-INF/jsp/changePassword.jsp";
			private static final long serialVersionUID = 1L;

			@Override
			protected void doGet(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws ServletException, IOException {
				doPost(httpServletRequest, httpServletResponse);
			}
			
			@Override
			protected void doPost(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws ServletException, IOException {
				getServletContext().getRequestDispatcher(CHANGE_PASSWORD_JSP_RESOURCE).include(httpServletRequest, httpServletResponse);
			}
		}

This servlet simply calls the interface for changing password which is
created in :ref:`this step <PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ExtensibleFilter.JSPInterface>`.
After that, when user sends a post request from that interface, the
``ChangePasswordActionServlet`` servlet will be initialized. Go to next
step to implement this servlet.

3. Implement the class ``ChangePasswordActionServlet.java`` as below:

	.. code:: java

		package org.exoplatform.changePassword;

		import java.io.IOException;
		import java.text.SimpleDateFormat;
		import java.util.Calendar;

		import javax.servlet.ServletException;
		import javax.servlet.http.HttpServlet;
		import javax.servlet.http.HttpServletRequest;
		import javax.servlet.http.HttpServletResponse;

		import org.exoplatform.container.PortalContainer;
		import org.exoplatform.container.component.RequestLifeCycle;
		import org.exoplatform.services.log.ExoLogger;
		import org.exoplatform.services.log.Log;
		import org.exoplatform.services.organization.OrganizationService;
		import org.exoplatform.services.organization.User;
		import org.exoplatform.services.organization.UserProfile;
		import org.exoplatform.services.organization.UserProfileHandler;

		public class ChangePasswordActionServlet extends HttpServlet {
			private static Log logger = ExoLogger.getLogger(ChangePasswordActionServlet.class);
			private static final long serialVersionUID = 1L;
			private static final String CHANGE_PASSWORD_JSP_RESOURCE = "/WEB-INF/jsp/changePassword.jsp";
			//define the duration (in month) when user password will expire
			private static final int PASSWORD_EXPIRATION_MONTHS_NUMBER = 6;
			
			@Override
			protected void doGet(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws ServletException, IOException {
				//get the new password entered
				String newPassword = httpServletRequest.getParameter("newPassword");
				//get the confirmation password
				String reNewPassword = httpServletRequest.getParameter("reNewPassword");
				OrganizationService organizationService = (OrganizationService)PortalContainer.getInstance().getComponentInstanceOfType(OrganizationService.class);
				String userId = httpServletRequest.getRemoteUser();
				try {
					RequestLifeCycle.begin(PortalContainer.getInstance());
					User user = organizationService.getUserHandler().findUserByName(userId);
					//check if the two passwords entered are the same, if not redirect the current user to the password changing view
					if (!newPassword.equals(reNewPassword)) {
						httpServletRequest.setAttribute("notValidNewPassword", "true");
						getServletContext().getRequestDispatcher(CHANGE_PASSWORD_JSP_RESOURCE).include(httpServletRequest, httpServletResponse);
					}
					else if (newPassword.length() < 6 || newPassword.length() > 30) {
						//check if the new password does not meet the requirement
						httpServletRequest.setAttribute("notCorrectNewPassword", "true");
						getServletContext().getRequestDispatcher(CHANGE_PASSWORD_JSP_RESOURCE).include(httpServletRequest, httpServletResponse);
					}
					else {
						//do changing the current password into the new one and reset the related attributes
						UserProfileHandler userProfileHandler = organizationService.getUserProfileHandler();
						UserProfile userProfile = userProfileHandler.findUserProfileByName(userId);
						userProfile.setAttribute("changePassword", "true");
						Calendar calendar = Calendar.getInstance();
						String passwordExpirationMonthsNumber = System.getProperty("password.expiration.months.number");
						calendar.add(Calendar.MONTH, passwordExpirationMonthsNumber != null ? Integer.parseInt(passwordExpirationMonthsNumber) : PASSWORD_EXPIRATION_MONTHS_NUMBER);
						SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MMM/yyyy");
						userProfile.setAttribute("expirePasswordDate", simpleDateFormat.format(calendar.getTime()));
						userProfileHandler.saveUserProfile(userProfile, true);
						user.setPassword(newPassword);
						organizationService.getUserHandler().saveUser(user, true);
						//Redirect to the home page
						String redirectURI = "/portal/";
						httpServletResponse.sendRedirect(redirectURI);
					}
				} 
				catch (Exception exception) {
					logger.error("Password not changed");
				} finally {
					RequestLifeCycle.end();
				}
			}
		   
			@Override
			protected void doPost(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws ServletException, IOException {
				doGet(httpServletRequest, httpServletResponse);
			}
		}

This servlet verifies the new password whether it meets the minimum and
maximum length or not. If yes, the current password will be updated and
the related attributes including ``changePassword`` and
``expirePasswordDate`` will also be reset. Note that the
``expirePasswordDate`` attribute will be calculated based on the
``PASSWORD_EXPIRATION_MONTHS_NUMBER`` constant.

**Under war folder**

This war folder will have the following structure:

|image64|

In which, you will have locale resources in the
``resources/locale/portal`` folder, css rules for password changing view
in the ``css/changePassword.css`` file and other configuration files. In
this section, you are going to look at the ``filter-configuration.xml``
and ``changePassword.jsp`` files. For the other files, you can check
from the cloned source code.

1. Add the below configuration to the ``filter-configuration.xml`` file:

	.. code:: xml

		<configuration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
					   xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd http://www.exoplatform.org/xml/ns/kernel_1_2.xsd"
					   xmlns="http://www.exoplatform.org/xml/ns/kernel_1_2.xsd">
			<external-component-plugins>
				<target-component>org.exoplatform.web.filter.ExtensibleFilter</target-component>
				<component-plugin profiles="all">
					<name>ChangePassword Filter</name>
					<set-method>addFilterDefinitions</set-method>
					<type>org.exoplatform.web.filter.FilterDefinitionPlugin</type>
					<init-params>
						<object-param>
							<name>Change Password Filter</name>
							<object type="org.exoplatform.web.filter.FilterDefinition">
								<field name="filter">
									<object type="org.exoplatform.changePassword.ChangePasswordFilter"/>
								</field>
								<field name="patterns">
									<collection type="java.util.ArrayList" item-type="java.lang.String">
										<value>
											<string>/*</string>
										</value>
									</collection>
								</field>
							</object>
						</object-param>
					</init-params>
				</component-plugin>
			</external-component-plugins>
		</configuration>

	In which, the ``patterns`` field defines which URLs will be passed
	through this filter, in this case ``/*`` means that all URLs are
	counted.

.. _PLFDevGuide.DevelopingApplications.ExtendingeXoApplications.ExtensibleFilter.JSPInterface:

2. Add the following code to the ``changePassword.jsp`` file:

	.. code:: java

		<%@ page import="org.exoplatform.container.PortalContainer"%>
		<%@ page import="org.exoplatform.services.resources.ResourceBundleService"%>
		<%@ page import="java.util.ResourceBundle"%>
		<%@ page language="java" %>
		<%
		  String contextPath = request.getContextPath() ;
		  //get locale properties from the locale resource
		  ResourceBundleService service = (ResourceBundleService) PortalContainer.getCurrentInstance(session.getServletContext())
																.getComponentInstanceOfType(ResourceBundleService.class);
		  ResourceBundle resourceBundle = service.getResourceBundle(service.getSharedResourceBundleNames(), request.getLocale()) ;
		  String changePassword = resourceBundle.getString("changePassword.title");
		  String newPassword = resourceBundle.getString("changePassword.newPassword");
		  String reNewPassword = resourceBundle.getString("changePassword.reNewPassword");
		  String send = resourceBundle.getString("changePassword.send");
		  String notValidNewPasswordError  = resourceBundle.getString("changePassword.notValidNewPasswordError");
		  String notCorrectNewPasswordError  = resourceBundle.getString("changePassword.notCorrectNewPasswordError");
		  //get the password validation status
		  String notValidNewPassword = (String) request.getAttribute("notValidNewPassword");
		  String notCorrectNewPassword = (String) request.getAttribute("notCorrectNewPassword");
		  response.setCharacterEncoding("UTF-8"); 
		  response.setContentType("text/html; charset=UTF-8");
		%>
		<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<title>Change password</title>
				<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
				<link href="<%=contextPath%>/css/changePassword.css" rel="stylesheet" type="text/css"/>
			</head>
			<body class="change-password">
				<div class="bg-light"><span></span></div>
				<div class="ui-change-password">
					<div class="change-password-container">
						<div class="change-password-header intro-box">
							<div class="change-password-icon"><%=changePassword%></div>
						</div>
						<div class="change-password-content">
							<div class="change-password-title">
								<%
										//check if the new password is not valid
										if(notValidNewPassword == "true") {
								%>
											<div class="new-password-error"><i class="change-password-icon-error"></i><%=notValidNewPasswordError%></div>
								<%
										}
										//check if the password confirmation is not successful
										else if(notCorrectNewPassword == "true") {
								%>
										<div class="new-password-error"><i class="change-password-icon-error"></i><%=notCorrectNewPasswordError%></div>
								<%
										}
								%> 
							</div>
							<div class="center-change-password-content">
								<form id="changePasswordForm" name="changePasswordForm" action="<%=contextPath%>/changePassword" method="post">
									<input  id="newPassword" name="newPassword" type="password" placeholder="<%=newPassword%>" onblur="this.placeholder = <%=newPassword%>" onfocus="this.placeholder = ''"/>
									<input  id="reNewPassword" name="reNewPassword" type="password" placeholder="<%=reNewPassword%>" onblur="this.placeholder = <%=reNewPassword%>" onfocus="this.placeholder = ''"/>
									<div id="changePasswordFormAction" class="change-password-button" onclick="submit();">
										<button class="button" href="#"><%=send%></button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</body>
		</html>

**Testing**

1. Build your project with the ``mvn clean install`` command.

2. Copy the generated jar and war files into the corresponding 
   deployment folders and start eXo Platform.

3. Sign in with the *root* account and create a new user such as *john*.

4. Sign in with the *john* account, you will be required to change 
   password at the first login.

|image65|

5. Enter a new password and validate it, then click Send. If your new
   password is valid, you will be automatically redirected to the 
   homepage, otherwise a message that says "*The new password is not 
   valid*\ " will appear.






.. |image0| image:: images/portlet_dev/prj_structure.png
.. |image1| image:: images/portlet_dev/app_register_1.png
.. |image2| image:: images/common/delete_icon.png
.. |image3| image:: images/portlet_dev/app_register_2.png
.. |image4| image:: images/portlet_dev/hello_portlet.png
.. |image5| image:: images/portlet_dev/app_reg_by_conf.png
.. |image6| image:: images/portlet_dev/dynamic_containers.png
.. |image7| image:: images/portlet_dev/localization_prj.png
.. |image8| image:: images/portlet_dev/localization_test.png
.. |image9| image:: images/portlet_dev/css_prj.png
.. |image10| image:: images/portlet_dev/css_test.png
.. |image11| image:: images/portlet_dev/test_javascript.png
.. |image12| image:: images/portlet_dev/preferences_prj.png
.. |image13| image:: images/portlet_dev/preferences_test.png
.. |image14| image:: images/portlet_dev/jsf2_prj.png
.. |image15| image:: images/portlet_dev/jsf2_test.png
.. |image16| image:: images/portlet_dev/jsf2_cdi_test.png
.. |image17| image:: images/portlet_dev/jsf2_cdi_prj.png
.. |image18| image:: images/portlet_dev/prp_prj.png
.. |image19| image:: images/portlet_dev/prp_test.png
.. |image20| image:: images/portlet_dev/contextual_plugin_prj.png
.. |image21| image:: images/portlet_dev/contextual_portlet_prj.png
.. |image22| image:: images/portlet_dev/contextual_portlet_test.png
.. |image23| image:: images/portlet_dev/juzu/hellojz_prj.png
.. |image24| image:: images/portlet_dev/spring/intro_prj.png
.. |image25| image:: images/portlet_dev/spring/test_intro_portlet.png
.. |image26| image:: images/gadget/hello_gadget_description.png
.. |image27| image:: images/gadget/hello_gadget_dashboard.png
.. |image28| image:: images/gadget/gadget_apply_javascript.png
.. |image29| image:: images/gadget/hello_gadget_css.png
.. |image30| image:: images/gadget/auto_slide_prj.png
.. |image31| image:: images/gadget/auto-slideshow_gadget_dashboard.png
.. |image32| image:: images/gadget/add_gadget_category.png
.. |image33| image:: images/gadget/gadget_thumbnail.png
.. |image34| image:: images/gadget/hello_gadget_preferences.png
.. |image44| image:: images/notification/notif_whole_structure.png
.. |image45| image:: images/notification/notif_config_structure.png
.. |image46| image:: images/notification/notif_lib_structure.png
.. |image47| image:: images/notification/notif_webapp_structure.png
.. |image48| image:: images/notification/notification_setting.png
.. |image49| image:: images/notification/intranet_notification.png
.. |image50| image:: images/notification/overriding_email_overall_project.png
.. |image51| image:: images/notification/overriding_email_config_structure.png
.. |image52| image:: images/notification/overriding_email_webapp_structure.png
.. |image53| image:: images/notification/mention_notification_new_en.png
.. |image54| image:: images/notification/mention_notification_new_fr.png
.. |image55| image:: images/notification/mention_notification_old.png
.. |image35| image:: images/default_organization_portlet.png
.. |image36| image:: images/customized_organization_portlet.png
.. |image37| image:: images/application_plugins/activity_type/project.png
.. |image38| image:: images/application_plugins/activity_type/UIDefaultActivity.png
.. |image39| image:: images/application_plugins/activity_type/WikiUIActivity.png
.. |image40| image:: images/application_plugins/activity_composer/ui_intro.png
.. |image41| image:: images/application_plugins/activity_composer/project_1.png
.. |image42| image:: images/application_plugins/activity_composer/project_2.png
.. |image43| image:: images/application_plugins/activity_composer/project_3.png
.. |image44| image:: images/notification/notif_whole_structure.png
.. |image45| image:: images/notification/notif_config_structure.png
.. |image46| image:: images/notification/notif_lib_structure.png
.. |image47| image:: images/notification/notif_webapp_structure.png
.. |image48| image:: images/notification/notification_setting.png
.. |image49| image:: images/notification/intranet_notification.png
.. |image50| image:: images/notification/overriding_email_overall_project.png
.. |image51| image:: images/notification/overriding_email_config_structure.png
.. |image52| image:: images/notification/overriding_email_webapp_structure.png
.. |image53| image:: images/notification/mention_notification_new_en.png
.. |image54| image:: images/notification/mention_notification_new_fr.png
.. |image55| image:: images/notification/mention_notification_old.png
.. |image56| image:: images/overriding_user_profile_design/user_profile_extension.png
.. |image57| image:: images/overriding_user_profile_design/new_user_profile.png
.. |image58| image:: images/overriding_user_profile_design/expand_user_profile.png
.. |image59| image:: images/wiki_macro/xwiki_macro_prj.png
.. |image60| image:: images/wiki_macro/xwiki_macro_test.png
.. |image61| image:: images/extensible_filter/general_project.png
.. |image62| image:: images/extensible_filter/config_structure.png
.. |image63| image:: images/extensible_filter/services_project.png
.. |image64| image:: images/extensible_filter/war_structure.png
.. |image65| image:: images/extensible_filter/change_password_interface.png
.. |image66| image:: images/application_plugins/content/Actionbar.png
.. |image67| image:: images/application_plugins/content/file_viewer.png
.. |image68| image:: images/application_plugins/content/sidebar.png
.. |image69| image:: images/application_plugins/content/admin_control_panel.png
.. |image70| image:: images/application_plugins/content/context_menu.png
.. |image71| image:: images/application_plugins/content/action_example.png
.. |image72| image:: images/application_plugins/content/action_example_in_explorer.png
.. |image73| image:: images/application_plugins/content/pdf-viewer.png
.. |image74| image:: images/application_plugins/content/zip-preview-original.png
.. |image75| image:: images/application_plugins/content/zip-viewer-project.png
.. |image76| image:: images/application_plugins/content/zip-preview-final.png
.. |image77| image:: images/application_plugins/wiki/New_action.png
