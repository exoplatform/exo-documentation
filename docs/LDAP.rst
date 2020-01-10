.. _LDAP:

#################
LDAP Integration
#################


eXo Platform organizational entities (users, groups and memberships),  
can be stored in a database or a directory such as OpenLDAP or Active 
Directory (AD). This chapter documents how to configure eXo Platform to 
plug to a directory.

.. note:: Please notice that this integration is not SSO (Single Sign On).
          If SSO is what you need, read the :ref:`SSO chapter, eXo Add-ons guide <SSO>` that explains how eXo Platform works with a directory through an SSO service like CAS or OpenAM.
    
    
.. warning:: -  eXo Platform supports only the **read-only** mode with a directory (LDAP/AD).
             -  Only one single directory is allowed.
             -  The mapped organizational  entities from directory are imported in one way direction: **from the directory to eXo Platform**.

This chapter covers the following topics:

    -  :ref:`Introduction <LDAP.Introduction>`
       An introduction about directory server integration basics.

    -  :ref:`Quick start <LDAP.QuickStart>`
       A step by step tutorial for eXo Platform configuration with a directory server.
   
    -  :ref:`How to map multiple DNs for users? <LDAP.MapDNsUsers>`
       A step by step tutorial to map multiple DNs for users from your directory to eXo Platform.
   
    -  :ref:`How to change default mandatory users attributes mapping? <LDAP.MandatoryUserAttributes>`
       A step by step tutorial to map default users attributes.
   
    -  :ref:`How to map additional user attributes? <LDAP.AdditionalUserAttributes>`
       A step by step tutorial to map additional users attributes than the default ones.
   
    -  :ref:`How to map multiple DNs for groups? <LDAP.MultipleDNsGroups>`
       A tutorial allowing to map multiple DNs for groups from your directory to eXo platform.
   
    -  :ref:`How to map directory groups to a new eXo Platform group? <LDAP.NewPLFGroups>`
       A tutorial allowing to map your directory groups to new eXo platform groups.

    -  :ref:`Configuration reference <LDAP.ConfigurationReference>`
       A reference guide about PicketLink IDM configuration and eXO Platform configuration.

    -  :ref:`Frequently asked questions <LDAP.FAQ>`
       How to resolve some possible issues of a directory integration.

.. _LDAP.Introduction:

=============
Introduction
=============

eXo Platform uses `PicketLink IDM framework <http://picketlink.org/>`__ 
that allows a very flexible integration with a directory server:

-  It can be plugged to an already populated directory, in read-only mode. The directory can contain users and groups, or only users.
  
-  Structure of users and groups in the directory can be finely customized.

-  The supported directory implementations are: OpenLDAP and Microsoft Active Directory. You can refer to our official 
   `supported environments <https://www.exoplatform.com/terms-conditions/supported-environments.pdf>`__ matrix for more 
   details about the supported versions. 

The term "Directory users" represents users who are created in the directory by its utilities. The term "Platform users" represents users who are created via eXo Platform UI. The understanding is similar for "Directory groups" and "Platform group*".

The following section is a step-by-step tutorial to integrate eXo Platform with a directory server.

If you want to know more about PicketLink IDM configuration, you can refer to the official documentation of PicketLink.

.. _LDAP.QuickStart:

============
Quick start
============

Through this tutorial, you will be able to integrate eXo Platform with a populated directory server.
We suppose that your directory server has a structure similar to the following one:

|image0|


In this quick start, you configure eXo Platform to read information of users and groups from the directory. 
It might not match your need exactly, but after this start you will have everything packaged in an extension, 
that you can adapt by following the following sections.


.. note:: The ldap-extension is technically a portal extension that is described in 
          :ref:`Developer guide <PLFDevGuide.eXoAdd-ons.PortalExtension.Howto>`, but 
          it does not require compilation as it requires only xml files, so administrators 
          can pack the war archive without using a Maven build. If you are a developer, you 
          can create a Maven project for it like any other extension.

1. Create a ``ldap-extension`` directory having this structure:

   ::

       ldap-extension
       |__ META-INF
               |__ exo-conf
                       |__ configuration.xml
       |__ WEB-INF
               |__ conf
                       |__ configuration.xml
                       |__ organization
                   |__ idm-configuration.xml
                   |__ picketlink-idm-ldap-config.xml
               |__ jboss-deployment-structure.xml
               |__ web.xml


2. Edit ``WEB-INF/conf/configuration.xml``:

   .. code:: xml

		   <?xml version="1.0" encoding="ISO-8859-1"?>
		   <configuration
			  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			  xsi:schemaLocation="http://www.exoplatform.org/xml/ns/kernel_1_3.xsd   http://www.exoplatform.org/xml/ns/kernel_1_3.xsd"
			  xmlns="http://www.exoplatform.org/xml/ns/kernel_1_3.xsd">

			   <import>war:/conf/organization/idm-configuration.xml</import>
		   </configuration>

3. Copy content of the ``portal.war!/WEB-INF/conf/organization/idm-configuration.xml`` file of eXo Platform to your ``idm-configuration.xml`` file, then edit your file to replace:

   .. code:: xml

		<value>war:/conf/organization/picketlink-idm/picketlink-idm-config.xml</value>

   with the path to your ``picketlink-idm-ldap-config.xml`` file:

    .. code:: xml

		<value>war:/conf/organization/picketlink-idm-ldap-config.xml</value>

4. Copy content from one of PicketLink sample files to your ``picketlink-idm-ldap-config.xml``  file.

.. note:: The sample files can be found in,``portal.war!/WEB-INF/conf/organization/picketlink-idm/examples``.
          Choose either of the following files:

			-  ``picketlink-idm-msad-config.xml`` if you use MS Active Directory.
			-  ``picketlink-idm-openldap-config.xml`` for OpenLDAP.
			-  ``picketlink-idm-ldap-config.xml`` for other LDAP compliant directories.


5. Modify the ``picketlink-idm-ldap-config.xml`` file according to your directory setup. Most of the time,  
   the following parameters need to be changed:

   -  all the DNs locating the users and groups:
		-  **ctxDNs** of the USER identity object, which must be the root DN of the users.
		-  **ctxDNs** of the platform_type identity object, which must be the root DN of 
		   the groups mapped under the eXo Platform /platform group.
		-  **ctxDNs** of the organization_type identity object, which must be the root DN 
		   of the groups mapped under the eXo Platform /organization group
   -  providerURL
   -  adminDN
   -  adminPassword

6. **For Microsoft Active Directory (MSAD)**; do the following sub-steps :

   i. Prepare a truststore file containing the valid certificate for MSAD. It can be generated by the Linux command:

   ::

      keytool -import -file  certificate -keystore truststore

   ii. Edit the following parameters in the ``picketlink-idm-ldap-config.xml``file:

       -  providerURL: Should use SSL (ldaps://).
       -  customSystemProperties: Give your truststore file path and password.

        .. code:: xml

                 <name>customSystemProperties</name>
                 <value>javax.net.ssl.trustStore=/path/to/msad.truststore</value>
                 <value>javax.net.ssl.trustStorePassword=password</value>

7. Uncomment the following entries in the ``idm-configuration.xml``  file:

   -  groupTypeMappings

      .. code:: xml

          <entry>
              <key><string>/platform/*</string></key>
              <value><string>platform_type</string></value>
          </entry>
          <entry>
              <key><string>/organization/*</string></key>
              <value><string>organization_type</string></value>
          </entry>

   -  ignoreMappedMembershipTypeGroupList

      .. code:: xml

           <value>
                  <string>/platform/*</string>
          </value>
          <value>
                  <string>/organization/*</string>
          </value>

   This step enables mapping of directory groups (platform and organization - that are predefined groups) 
   to eXo Platform. If you bypass this step, only user mapping is performed.

8. Configure your extension by following the steps 3, 4 and 5 of 
   :ref:`Creating a portal extension <PLFDevGuide.eXoAdd-ons.PortalExtension.Howto>`.

9. :ref:`Package and deploy <LDAP.QuickStart.PackagingDeploying>` your ldap-extension into Platform.

10. Make sure the directory server is running, then start eXo Platform.

.. _LDAP.QuickStart.PackagingDeploying:

Packaging and deploying
-------------------------

The extension folder must be packaged into ``ldap-extension.war`` then copied to ``$PLATFORM_TOMCAT_HOME/webapps``.

To compress the folder into a .war (and decompress the .war for editing), you can use any archiver tool that supports .war extension.
You can use the JDK built-in tool **jar**, as follows:

-  To compress, first go to **inside** ldap-extension directory:
   ``cd ldap-extension``

   Then run: ``jar cvf path/to/save/ldap-extension.war *``

-  To decompress, run: ``jar xvf path/to/ldap-extension.war``

.. note:: Do not include the ldap-extension folder itself into the ``.war.`` The ``.war`` 
          should contain META-INF and WEB-INF folders at root of the archive, it should 
          not contain ldap-extension folder. That's why you need to go to inside the folder first.

.. tip:: You should have ldap-extension packaged in .war when deploying it to production. However when testing, if you feel 
         uncomfortable having to edit a .war, you can skip compressing it. 
         In `Tomcat <https://tomcat.apache.org/tomcat-8.0-doc/deployer-howto.html>`__, just deploy the original 
         folder *ldap-extension*. 

.. _LDAP.QuickStart.Testing:         

Testing
--------

If the integration was successful, the directory users and groups will appear in eXo Platform under the menu 
**Administration --> Users --> Manage Users**.

.. _LDAP.MapDNsUsers:

===================================
How to map multiple DNs for users?
===================================

eXo Platform allows to map users dispatched in multiple directory DNs, like this:

|image1|


In such case, you should, in addition to previous steps described in the 
:ref:`Quick start section <LDAP.PicketLink.QuickStart>`, follow these steps:

1. Open the configuration file ``picketlink-idm-ldap-config.xml``.
2. Search for the option **ctxDNs**.
3. Define the different locations of DNs where your directory users are located:

   .. code:: xml

		   <option>
			   <name>ctxDNs</name>
			   <value>ou=People,o=acme,dc=example,dc=com</value>
			   <value>ou=People,o=emca,dc=example,dc=com</value>
		   </option>

Since only one type of user can be defined, all users of these DNs must share the same attributes mapping.

.. _LDAP.MandatoryUserAttributes:

===========================================================
How to change default mandatory users attributes mapping?
===========================================================

There are five attributes that **should always be mapped** (because they are mandatory in eXo Platform):

-  username
-  password
-  firstname
-  lastname
-  email

The username mapping is defined by the option ``idAttributeName``:

.. code:: xml

		<option>
			<name>idAttributeName</name>
			<value>...</value>
		</option>

The password mapping is defined by the option ``passwordAttributeName``:

.. code:: xml

		<option>
			<name>passwordAttributeName</name>
			<value>...</value>
		</option>

The firstname, lastname and email mapping are defined in user attributes:

.. code:: xml

		<attribute>
			<name>firstName</name>
			<mapping>givenName</mapping>
			...
		</attribute>
		<attribute>
			<name>lastName</name>
			<mapping>sn</mapping>
		...
		</attribute>
		<attribute>
			<name>email</name>
			<mapping>mail</mapping>
			…
		</attribute>

The default mapping defined in the provided sample configuration files for OpenLDAP and MSAD directories 
is summarized in the following table:

   +-----------------+---------------------------------+------------------------+---------------------+
   | eXo Platform    | Configuration attribute         | OpenLDAP default value | MSAD default value  |
   +=================+=================================+========================+=====================+
   | username        | Option ``idAttributeName``      | uid                    | cn                  |
   +-----------------+---------------------------------+------------------------+---------------------+
   | password        | Option ``passwordAttributeName``| userPassword           | unicodePwd          |
   +-----------------+---------------------------------+------------------------+---------------------+
   | firstname       | Attribute ``firstName``         | cn                     | givenname           |
   +-----------------+---------------------------------+------------------------+---------------------+
   | lastname        | Attribute ``lastName``          | sn                     | sn                  |
   +-----------------+---------------------------------+------------------------+---------------------+
   | email           | Attribute ``email``             | mail                   | mail                |
   +-----------------+---------------------------------+------------------------+---------------------+

You can update them in the file picketlink-idm-ldap-config.xml to match your specific mapping.

.. _LDAP.AdditionalUserAttributes:

========================================
How to map additional user attributes?
========================================

As described in the previous section, by default, only 5 attributes are mapped from a directory user to an eXo Platform user. 
Additional user attributes can be mapped by configuration by adding new ``attribute`` element in the ``attributes`` section of 
the USER identity object type. For example if you want to map a directory attribute *title* to eXo Platform attribute *user.jobtitle*, 
you must add this configuration snippet under the “attributes” tag in the file ``picketlink-idm-ldap-config.xml``, as follows:

 .. code:: xml

		<attributes>
		...
				   <attribute>
					   <name>user.jobtitle</name>
					   <mapping>title</mapping>
					   <type>text</type>
					   <isRequired>false</isRequired>
					   <isMultivalued>false</isMultivalued>
					   <isUnique>false</isUnique>
				   </attribute>
		...
			   </attributes>
	
			   
			   
.. _LDAP.MultipleDNsGroups:

========================================
How to map multiple DNs for groups?
========================================	   
			   
As in previous sections, we assume that you already have a populated directory and some groups that should be mapped into eXo Platform. 

.. tip:: To be clear about the LDAP "group", it should be the "groupOfNames" objectClass in OpenLDAP or "group" objectClass 
         in Active Directory. In OpenLDAP (default core.schema), the groupOfNames must have the member attribute.

Under the context DN (ou=Groups,o=acme,dc=example,dc=com), there are several groups as shown in the diagram below: 

|image2|


In this case, you should, in addition to previous steps described in the :ref:`Quick start section <LDAP.QuickStart>`, 
follow these steps:

1. Open the configuration file ``picketlink-idm-ldap-config.xml``.
2. Search for the option ctxDNs to define the multiple locations of DNs
   where your directory groups are located:
   
    .. code:: xml

			<option>
				<name>ctxDNs</name>
				<value>ou=Groups,o=acme,dc=example,dc=com</value>
				<value>ou=Groups,o=emca,dc=example,dc=com</value>
			 </option>
			 
.. _LDAP.NewPLFGroups:

==========================================================
How to map directory groups to a new eXo Platform group?
==========================================================				 
			
In the :ref:`Quick start chapter <LDAP.QuickStart>` we map the directory groups to default eXo Platform groups 
``/platform`` and ``/organization``. In this chapter we will learn how to map  directory groups into a new eXo Platform group. 
Let’s say we want to map the groups contained in the directory ``DN o=acme,dc=example,dc=com`` into the eXo Platform group ``/acme``. 
As a prerequisite, the group /acme must be already created in eXo Platform.

.. _PicketlinkConfiguration:

1. **PicketLink configuration**

   The first step is to define the mapping configuration in PicketLink configuration file 
   ``picketlink-idm-ldap-config.xml`` by adding a new identity object type (we call it acme_groups_type) 
   under the identity store PortalLDAPStore:

      .. code:: xml

				<identity-store>
				<id>PortalLDAPStore</id>
				...
				<supported-identity-object-types>
					...
					<identity-object-type>
						<name>acme_groups_type</name>
						<relationships>
							<relationship>
								<relationship-type-ref>JBOSS_IDENTITY_MEMBERSHIP</relationship-type-ref>
								<identity-object-type-ref>USER</identity-object-type-ref>
							</relationship>
							<relationship>
								<relationship-type-ref>JBOSS_IDENTITY_MEMBERSHIP</relationship-type-ref>
								<identity-object-type-ref>acme_groups_type</identity-object-type-ref>
							</relationship>
						</relationships>
						<credentials/>
						<attributes>
							<attribute>
								<name>description</name>
								<mapping>description</mapping>
								<type>text</type>
								<isRequired>false</isRequired>
								<isMultivalued>false</isMultivalued>
								<isReadOnly>false</isReadOnly>
							</attribute>
						</attributes>
						<options>
						  <option>
							<name>idAttributeName</name>
							<value>cn</value>
						  </option>
						  <option>
							<name>ctxDNs</name>
							<value>o=acme,dc=example,dc=com</value>
						  </option>
						  <option>
							<name>entrySearchFilter</name>
							<value><![CDATA[(&(cn={0})(objectClass=group))]]></value>
						  </option>
						  <option>
							<name>allowCreateEntry</name>
							<value>true</value>
						  </option>
						  <option>
							<name>parentMembershipAttributeName</name>
							<value>member</value>
						  </option>
						  <option>
							<name>isParentMembershipAttributeDN</name>
							<value>true</value>
						  </option>
						  <option>
							<name>allowEmptyMemberships</name>
							<value>true</value>
						  </option>
						  <option>
							<name>createEntryAttributeValues</name>
							<value>objectClass=top</value>
							<value>objectClass=group</value>
							<value>groupType=8</value>
						  </option>
					   </options>
					</identity-object-type>
				</supported-identity-object-types>
			</identity-store>

   Make sure that the attributes and options are correct, especially:
   
   - **idAttributeName**:  attribute name to use as the group id.
   - **ctxDNs**: base DN of the groups in the directory.
   - **entrySearchFilter**: search expression to filter objects to consider as groups.
   - **parentMembershipAttributeName**: attribute which holds the list of group members. In OpenLDAP or MSAD default schemas, 
     the member attribute is used, but your schema may use another attribute.

Then this new object type must be referenced in the PortalRepository repository: 

      .. code:: xml
      
			   <repository>
				   <id>PortalRepository</id>
				   ...
				   <identity-store-mapping>
					   <identity-store-id>PortalLDAPStore</identity-store-id>
					   <identity-object-types>
						   ...
						   <identity-object-type>acme_groups_type</identity-object-type>
						   ...
					   </identity-object-types>
				   </identity-store-mapping>...
				</repository>


.. _eXoConfiguration:

2. **eXo configuration**

   Besides the :ref:`PicketLink configuration <PicketlinkConfiguration>`, 
   the eXo service configuration defined in the file ``idm-configuration.xml`` must be updated. 
   A new entry must be added in the fields ``groupTypeMappings`` and ``ignoreMappedMembershipTypeGroupList`` 
   to map the group defined in PicketLink configuration with the eXo Platform group, as follows: 

    .. code:: xml

			   <component>
					<key>org.exoplatform.services.organization.OrganizationService</key>
					<type>org.exoplatform.services.organization.idm.PicketLinkIDMOrganizationServiceImpl</type>
					...
						<field name="groupTypeMappings">
							 <map type="java.util.HashMap">
								..
								<entry>
									<key><string>/acme/*</string></key>
									<value><string>acme_groups_type</string></value>
								</entry>
							</map>
						</field>
						...
						<field name="ignoreMappedMembershipTypeGroupList">
							<collection type="java.util.ArrayList" item-type="java.lang.String">
								<value><string>/acme/*</string></value>
								...
							</collection>
						</field>
					...
				</component>
				
				
.. _LDAP.ConfigurationReference:

=========================
Configuration reference
=========================

This section is a complete description of the available configuration options. 
It lists the options of both eXo configuration and PicketLink configuration.

.. _Ref_eXoConfiguration:

eXo configuration
------------------

The eXo configuration related to PicketLink integration is defined in these 2 services:

-  ``org.exoplatform.services.organization.idm.PicketLinkIDMServiceImpl``

-  ``org.exoplatform.services.organization.idm.PicketLinkIDMOrganizationServiceImpl``

You can adapt the configuration by updating these services configuration 
in the file ``idm-configuration.xml`` as described in the :ref:`Quick Start section <LDAP.QuickStart>`.

.. _Ref_eXoConfiguration_PicketLinkIDMServiceImpl:

PicketLinkIDMServiceImpl service
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This service has the following parameters:

-  **config** (value-param): location of the PicketLink IDM configuration file.

   .. code:: xml

			<component>
					<key>org.exoplatform.services.organization.idm.PicketLinkIDMService</key>
					<type>org.exoplatform.services.organization.idm.PicketLinkIDMServiceImpl</type>
					<init-params>
						<value-param>
							<name>config</name>
							<value>war:/conf/organization/picketlink-idm-ldap-config.xml</value>
					...

.. note:: The “war:” prefix allows to lookup the given location in all deployed webapps.

-  **hibernate.properties** (properties-param): list of hibernate properties 
   used to create SessionFactory that will be injected in Picketlink IDM configuration registry.

   .. code:: xml

			<properties-param>
					<name>hibernate.properties</name>
					<description>Default Hibernate Service</description>
					<property name="hibernate.hbm2ddl.auto" value="update"/>
					<property name="hibernate.show_sql" value="false"/>
					<property name="hibernate.connection.datasource" value="${gatein.idm.datasource.name}${container.name.suffix}"/>
					<property name="hibernate.connection.autocommit" value="false"/>
					....
					....
					<property name="hibernate.listeners.envers.autoRegister" value="false"/>
			 </properties-param>


-  **hibernate.annotations**: list of annotated classes that will be added to Hibernate configuration.
-  **hibernate.mappings**: list of .xml files that will be added to the hibernate configuration as mapping files.
-  **jndiName** (value-param): if the 'config' parameter is not provided, this parameter will be used to perform the JNDI lookup for IdentitySessionFactory.
-  **portalRealm** (value-param): the realm name that should be used to obtain the proper IdentitySession. The default value is 'PortalRealm'.

   .. code:: xml

			<value-param>
					<name>portalRealm</name>
					<value>idm_realm${container.name.suffix}</value>
			 </value-param>


.. _Ref_eXoConfiguration_PicketLinkIDMOrganizationServiceImpl:

PicketLinkIDMOrganizationServiceImpl service
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This service has the following parameters defined as fields of ``object-param`` 
of type ``org.exoplatform.services.organization.idm.Config``:

-  **rootGroupName** : the name of the PicketLink IDM Group that will be 
   used as a root parent. The default is ``GTN_ROOT_GROUP``.
   
-  **defaultGroupType**: the name of the PicketLink IDM GroupType that 
   will be used to store groups. The default is ``GTN_GROUP_TYPE``.
   
-  **groupTypeMappings** : this parameter maps groups added with eXo Platform 
   API as children of a given group ID, and stores them with a given 
   group type name in PicketLink IDM.
   If the parent ID ends with "/*", all child groups will have the mapped 
   group type. Otherwise, only direct (first level) children will use this type.
   This can be leveraged by LDAP if the LDAP DN is configured in PicketLink 
   IDM to only store a specific group type. This will then store the given 
   branch in the eXo Platform group tree, while all other groups will remain in the database.
   
-  **forceMembershipOfMappedTypes**: groups stored in PicketLink IDM with 
   a type mapped in 'groupTypeMappings' will automatically be members under the mapped parent. 
   The Group relationships linked by the PicketLink IDM group association will not be necessary.
   This parameter can be set to false if all groups are added via eXo Platform APIs. This may be 
   useful with the LDAP configuration when being set to true, it will make every entry added to 
   LDAP appear in eXo Platform. This, however, is not true for entries added via eXo Platform management UI.
   
-  **ignoreMappedMembershipType**: if "associationMembershipType" option is used, and this option is set to 
   true, Membership with MembershipType configured to be stored as PicketLink IDM association will not be 
   stored as PicketLink IDM Role.
   
-  **associationMembershipType** : if this option is used, each Membership created with MembrshipType that 
   is equal to the value specified here, will be stored in PicketLink IDM as the simple Group-User association.

-  **passwordAsAttribute**: this parameter specifies if a password should be stored using the PicketLink IDM 
   Credential object or as a plain attribute. The default value is set to false.
   
-  **useParentIdAsGroupType**: this parameter stores the parent ID path as a group type in PicketLink IDM 
   for any IDs not mapped with a specific type in 'groupTypeMappings'. If this option is set to false, 
   and no mappings are provided under 'groupTypeMappings', only one group with the given name can exist 
   in the eXo Platform group tree.
   
-  **pathSeparator**: when 'userParentIdAsGroupType' is set to true, this value will be used to replace 
   all "/" characters in IDs. The "/" character is not allowed in the group type name in PicketLink IDM.

.. _Ref_PicketlinkIDMConfiguration:

PicketLink IDM configuration file
-----------------------------------

Let's see the ``picketlink-idm-ldap-config.xml`` structure:

.. code:: xml

    <realms>...</realms>
    <repositories>
        <repository><id>PortalRepository</id></repository>
        <repository><id>DefaultPortalRepository</id></repository>
    </repositories>
    <stores>
        <identity-stores>
            <identity-store><id>HibernateStore</id></identity-store>
            <identity-store><id>PortalLDAPStore</id></identity-store>
        </identity-stores>
    </stores>

-  **Realm**: identity realm used. This parameter must not be changed.

-  **Repository**: Where your store and identity object type is used, by Id reference.

-  **Store**: The center part of this guideline, where you configure the directory connection, 
   identity object types and all the attributes mapping.

With the aim of making this guideline easy to understand, **DefaultPortalRepository** and 
**HibernateStore** will be excluded since they must not be re-configured, and the id references will be added.
Also, ``organization_type`` is eliminated because of its similarity to ``platform_type``. 
The structure is re-drawn as follows:

.. code:: xml

			<repositories>
				<repository>
					<id>PortalRepository</id>
					<identity-store-mappings>
						<identity-store-mapping>
							<identity-store-id>PortalLDAPStore</identity-store-id>
							<identity-object-types>
								<identity-object-type>USER</identity-object-type>
								<identity-object-type>platform_type</identity-object-type>
							</identity-object-types>
						</identity-store-mapping>
					</identity-store-mappings>
				</repository>
			</repositories>
			<stores>
				<identity-stores>
					<identity-store>
						<id>PortalLDAPStore</id>
						<supported-identity-object-types>
							<identity-object-type>
								<name>USER</name>
								<!-- attributes & options -->
							</identity-object-type>
							<identity-object-type>
								<name>platform_type</name>
								<!-- attributes & options -->
							</identity-object-type>
						</supported-identity-object-types>
					</identity-store>
				</identity-stores>
			</stores>

.. _PicketlinkIDM_Directory_connection:

The directory connection
~~~~~~~~~~~~~~~~~~~~~~~~~

The directory connection (URL and credentials) is Store configuration. It is provided in the *PortalLDAPStore*:

.. code:: xml

		<identity-store>
			<id>PortalLDAPStore</id>
			...
			<options>
				<option>
					<name>providerURL</name>
					<value>ldap://localhost:389</value>
				</option>
				<option>
					<name>adminDN</name>
					<value>cn=admin,dc=example,dc=com</value>
				</option>
				<option>
					<name>adminPassword</name>
					<value>gtn</value>
				</option>
				...
			</options>


.. _PicketlinkIDM_ReadOnly_mode:

Read-only mode
~~~~~~~~~~~~~~~

.. note:: It is the only supported mode.

The Read-only mode is a repository configuration. It is an option of the 
repository that prevents eXo Platform from writing to the directory. 
You should ensure to enable the read-only mode by setting the option to true:

.. code:: xml

		<repository>
			<id>PortalRepository</id>
			<identity-store-mappings>
				<identity-store-mapping>
					<identity-store-id>PortalLDAPStore</identity-store-id>
					<options>
						<option>
							<name>readOnly</name>
							<value>true</value>
						</option>
					</options>
				</identity-store-mapping>

.. _PicketlinkIDM_Search_scope:

Search scope (entrySearchScope option)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The *entrySearchScope* option can be placed in identity object type, 
like this:

.. code:: xml

		<option>
			<name>entrySearchScope</name>
			<value>subtree</value>
		</option>

In combination with *ctxDNs*, this option forms an LDAP query. 
It is equivalent to the *scope* parameter of the ldapsearch command (-s in OpenLDAP).

**Values**: subtree, object.

-  If the option is omitted, the search will return the children at
   level 1 of the ctxDNs - equivalent to ``-s one``.

-  Use ``subtree`` to search in the entire tree under ctxDNs. It is
   useful saving you from having to provide all the possible ctxDNs in
   configuration.

-  The ``object`` value is equivalent to ``-s base`` that examines only
   the ctxDNs itself. If the ctxDNs entry does not match the filter, the
   search result is zero.
   
   ::

		# o=acme,dc=example,dc=com
		# uid=user1,o=acme,dc=example,dc=com
		# ou=People,o=acme,dc=example,dc=com
		# uid=user2,ou=People,o=acme,dc=example,dc=com

Assume you are mapping the LDAP users in the tree above, using the ctxDNs 
*o=acme,dc=example,dc=com*, then:

-  ``subtree``: user1 and user2 are mapped.
-  ``object``: no user is mapped.
-   If omitted: only user1 is mapped.

.. _PicketlinkIDM_User_attributes:

Platform user attributes
~~~~~~~~~~~~~~~~~~~~~~~~~~

The list of Platform user attribute names (the asterisk (\*) marks a
mandatory attribute):

+-------------------------------------------------+-------------------------------------+
| Name                                            | Description                         |
+=================================================+=====================================+
| *username (\*)*                                 | user id (login name)                |
+-------------------------------------------------+-------------------------------------+
| *firstName (\*)*                                | first name                          |
+-------------------------------------------------+-------------------------------------+
| *lastName (\*)*                                 | last name                           |
+-------------------------------------------------+-------------------------------------+
| *displayName*                                   | display name                        |
+-------------------------------------------------+-------------------------------------+
| *email (\*)*                                    | email (unique, user1@example.com)   |
+-------------------------------------------------+-------------------------------------+
| *user.name.given*                               | given name                          |
+-------------------------------------------------+-------------------------------------+
| *user.name.family*                              | family name                         |
+-------------------------------------------------+-------------------------------------+
| *user.name.nickName*                            | nick name                           |
+-------------------------------------------------+-------------------------------------+
| *user.bdate*                                    | birth day                           |
+-------------------------------------------------+-------------------------------------+
| *user.gender*                                   | "Male/Female"                       |
+-------------------------------------------------+-------------------------------------+
| *user.employer*                                 | employer                            |
+-------------------------------------------------+-------------------------------------+
| *user.department*                               | department                          |
+-------------------------------------------------+-------------------------------------+
| *user.jobtitle*                                 | job title                           |
+-------------------------------------------------+-------------------------------------+
| *user.language*                                 | language                            |
+-------------------------------------------------+-------------------------------------+
| *user.home-info.postal.name*                    | personal address                    |
+-------------------------------------------------+-------------------------------------+
| *user.home-info.postal.street*                  | personal address                    |
+-------------------------------------------------+-------------------------------------+
| *user.home-info.postal.city*                    | personal address                    |
+-------------------------------------------------+-------------------------------------+
| *user.home-info.postal.stateprov*               | personal address                    |
+-------------------------------------------------+-------------------------------------+
| *user.home-info.postal.postalcode*              | personal postal code                |
+-------------------------------------------------+-------------------------------------+
| *user.home-info.postal.country*                 | personal postal country             |
+-------------------------------------------------+-------------------------------------+
| *user.home-info.telecom.mobile.number*          | personal cell phone                 |
+-------------------------------------------------+-------------------------------------+
| *user.home-info.telecom.telephone.number*       | personal line number                |
+-------------------------------------------------+-------------------------------------+
| *user.home-info.online.email*                   | personal email                      |
+-------------------------------------------------+-------------------------------------+
| *user.home-info.online.uri*                     | personal page                       |
+-------------------------------------------------+-------------------------------------+
| *user.business-info.postal.name*                | office address                      |
+-------------------------------------------------+-------------------------------------+
| *user.business-info.postal.city*                | office address                      |
+-------------------------------------------------+-------------------------------------+
| *user.business-info.postal.stateprov*           | office address                      |
+-------------------------------------------------+-------------------------------------+
| *user.business-info.postal.postalcode*          | office postal code                  |
+-------------------------------------------------+-------------------------------------+
| *user.business-info.postal.country*             | office postal country               |
+-------------------------------------------------+-------------------------------------+
| *user.business-info.telecom.mobile.number*      | office mobile number                |
+-------------------------------------------------+-------------------------------------+
| *user.business-info.telecom.telephone.number*   | office landline number              |
+-------------------------------------------------+-------------------------------------+
| *user.business-info.online.email*               | business email                      |
+-------------------------------------------------+-------------------------------------+
| *user.business-info.online.uri*                 | business page                       |
+-------------------------------------------------+-------------------------------------+

.. _PicketlinkIDM_Search_scope:

Placeholder - A note for OpenLDAP
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Ruled by OpenLDAP default *core* schema, the *member* attribute is a MUST attribute of *groupOfNames* objectClass:

::

		objectclass ( 2.5.6.9 NAME 'groupOfNames'
			DESC 'RFC2256: a group of names (DNs)'
			SUP top STRUCTURAL
			MUST ( member $ cn )
			MAY ( businessCategory $ seeAlso $ owner $ ou $ o $ description ) )

Therefore, PicketLink IDM uses a **placeholder** entry as a fake member in the creation of a groupOfNames. The placeholder DN should be configured as an option of any group type:

.. code:: xml

		<identity-object-type>
			<name>platform_type</name>
			<options>
				<option>
					<name>parentMembershipAttributePlaceholder</name>
					<value>ou=placeholder,o=portal,o=gatein,dc=example,dc=com</value>
				</option>
			  ...  

.. _LDAP.FAQ:

============================
Frequently asked questions
============================

.. _LDAP.FAQ.Q1:

Q1- How does Directory get ready for integration?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**A:** Not any condition except that the top DN should be created before being integrated.

You should ensure that the Directory contains an entry like the following:

::

    dn: dc=example,dc=com
    objectClass: top
    objectClass: domain
    dc: example

.. _LDAP.FAQ.Q2:

Q2- How to enable sign-in for LDAP pre-existing users?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**A:** LDAP users are visible in the :ref:`Users and Groups Management Page <ManagingYourOrganization.ManagingUsers>`
but they are unable to sign in eXo Platform. More exactly, they do not have
access permission to any pages.

Additional steps should be done to allow them to sign in:

-  **Manually add users to the appropriate groups**

   It is performed in the :ref:`User and Group Management Page <ManagingYourOrganization.ManagingUsers>`
   (http://[your\_host]:[your\_port]/portal/g/:platform:administrators/administration/management).
   Just go to this page and add users to appropriate groups. The
   */platform/users* group is required to access the *intranet* page.


.. _LDAP.FAQ.Q3:

Q3- How to configure PicketLink to look up users in an entire tree?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**A:** Use this option:

.. code:: xml

    <option>
        <name>entrySearchScope</name>
        <value>subtree</value>
    </option>

See more details at :ref:`PicketLink IDM configuration <PicketlinkIDM_Search_scope>`.

.. _LDAP.FAQ.Q4:

Q4- Cannot log into eXo Platform: error code 49
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**A:** This may happen with OpenLDAP, when users are created successfully but they cannot login, and there is error code 49 in your LDAP log as follows:

::

		5630e5ba conn=1002 op=0 BIND dn="uid=firstuser,ou=People,o=portal,o=gatein,dc=steinhoff,dc=com" method=128
		5630e5ba do_bind: version=3 dn="uid=firstuser,ou=People,o=portal,o=gatein,dc=steinhoff,dc=com" method=128
		5630e5ba ==> bdb_bind: dn: uid=firstuser,ou=People,o=portal,o=gatein,dc=steinhoff,dc=com
		5630e5ba bdb_dn2entry("uid=firstuser,ou=people,o=portal,o=gatein,dc=steinhoff,dc=com")
		5630e5ba => access_allowed: result not in cache (userPassword)
		5630e5ba => access_allowed: auth access to "uid=firstuser,ou=People,o=portal,o=gatein,dc=steinhoff,dc=com" "userPassword" requested
		5630e5ba => dn: [1]
		5630e5ba <= acl_get: done.
		5630e5ba => slap_access_allowed: no more rules
		5630e5ba => access_allowed: no more rules
		5630e5ba send_ldap_result: conn=1002 op=0 p=3
		5630e5ba send_ldap_result: err=49 matched="" text=""
		5630e5ba send_ldap_response: msgid=1 tag=97 err=49

To resolve this, add an ACL (Access Control List) rule in the ``slapd.conf`` file as below:

::

		# Access and Security Restrictions (Most restrictive entries first)
		access to attrs=userPassword
			by self write   
			## by dn.sub="ou=admin,dc=domain,dc=example" read ## not mandatory, useful if you need grant a permission to a particular dn
			by anonymous auth
			by users none
		access to * by * read

			

.. |image0| image:: images/LDAP/ldap_integration.png   
.. |image1| image:: images/LDAP/ldap_user.png    
.. |image2| image:: images/LDAP/GroupsDNs.png   
