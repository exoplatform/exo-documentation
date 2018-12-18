.. _Configuration_eXo_JCR:

###############
Configuration
###############

    This chapter is divided into 2 main topics that allow you to follow
    easily:

    -  :ref:`Basic configuration <JCRref.Configuration.BasicConfiguration>`
       Instructions on basic configurations related to JCR, persister
       and JDBC Data Container.

    -  :ref:`Advanced configuration <JCRref.Configuration.AdvancedConfiguration>`
       Instructions on advanced configurations regarding to Search,
       LockManager, QueryHandler, Cluster, RepositoryCreationService,
       TransactionService and External Value Storages.

.. _JCRref.Configuration.BasicConfiguration:

===================
Basic configuration
===================

-  :ref:`JCR configuration <JCR.eXoJCRconfiguration.JCRConfiguration>`

   Details of the JCR configuration, including Repository, Workspace,
   Value storage plugin, Initializer, Cache, Query Handler and Lock
   Manager.

-  :ref:`JCR configuration persister <JCR.ConfigurationPersister>`

   Instructions on how to configure and customize the JCR persister.

-  :ref:`JDBC data container configuration <JCR.JDBCDataContainerConfig>`

   Information about configuration of JDBC data container.

-  :ref:`Frequently asked questions <JCR.ConfigurationFAQs>`

   Questions and their answers related to commonly basic configurations,
   such as Lucene spellchecker, spellchecker results, Help application,
   and more.

The JCR service configuration (for example, Repository service) that can
be found in `` jcr-configuration.xml`` looks like the following:

.. code:: xml

    <component>
      <key>org.exoplatform.services.jcr.RepositoryService</key>
      <type>org.exoplatform.services.jcr.impl.RepositoryServiceImpl</type>
    </component>
    <component>
      <key>org.exoplatform.services.jcr.config.RepositoryServiceConfiguration</key>
      <type>org.exoplatform.services.jcr.impl.config.RepositoryServiceConfigurationImpl</type>
      <init-params>
        <value-param>
          <name>conf-path</name>
          <description>JCR repositories configuration file</description>
          <value>war:/conf/jcr/repository-configuration.xml</value>
        </value-param>
        <value-param>
          <name>max-backup-files</name>
          <value>5</value>
        </value-param>
        <properties-param>
          <name>working-conf</name>
          <description>working-conf</description>
          <property name="persister-class-name" value="org.exoplatform.services.jcr.impl.config.JDBCConfigurationPersister" />
          <property name="source-name" value="${gatein.jcr.datasource.name}${container.name.suffix}"/>
          <property name="dialect" value="${gatein.jcr.datasource.dialect}"/>
        </properties-param>
      </init-params>
    </component>

-  ``conf-path``: A path to a RepositoryService JCR Configuration.

-  ``max-backup-files``: The maximum number of backup files. This option
   lets you specify the number of stored backups. Number of backups can
   not exceed this value. File which will exceed the limit will replace
   the oldest file.

-  ``working-conf``: This is optional. See :ref:`JCR configuration persister <JCR.ConfigurationPersister>` 
   for more details. If there is not a ``working-conf``, the persister 
   will be disabled.

The JCR Core implementation contains a persister which stores the
repository configuration in the related database using JDBC calls -
``org.exoplatform.services.jcr.impl.config.JDBCConfigurationPersister``.
The implementation will create and use table JCR\_CONFIG in the provided
database. But the developer can implement his own persister for his
particular usecase.

.. _JCR.eXoJCRconfiguration.JCRConfiguration:

JCR configuration
~~~~~~~~~~~~~~~~~~


The ``repository-configuration.xml`` file is declared in
``jcr-configuration.xml``.

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.jcr.config.RepositoryServiceConfiguration</target-component>
        <component-plugin>
            <name>Sample RepositoryServiceConfiguration Plugin</name>
            <set-method>addConfig</set-method>
            <type>org.exoplatform.services.jcr.impl.config.RepositoryServiceConfigurationPlugin</type>
            <init-params>
                <value-param>
                    <name>conf-path</name>
                    <description>JCR configuration file</description>
                    <value>war:/conf/platform/repository-configuration.xml</value>
                </value-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

.. _repository-configuration-file-locations:

Each ``repository-configuration.xml`` file contains configurations of
one repository, workspaces of the repository and configurations of
workspaces. This file can be found in various locations:

-  ``platform-extension/WEB-INF/conf/platform``

-  ``wiki-extension/WEB-INF/wiki-extension/jcr``

-  ``portal/WEB-INF/conf/jcr``

-  ``social-extension/WEB-INF/conf/social-extension/jcr``

-  ``forum-extension/WEB-INF/ks-extension/jcr``

-  ``ecm-wcm-extension/WEB-INF/conf/dms-extension/jcr``

-  ``calendar-extension/WEB-INF/cs-extension/jcr``

See the following DTD file to understand the expected format of the JCR
configuration.

.. code:: xml

    <!ELEMENT repository-service (repositories)>
    <!ATTLIST repository-service default-repository NMTOKEN #REQUIRED>
    <!ELEMENT repositories (repository)>
    <!ELEMENT repository (security-domain,access-control,session-max-age,authentication-policy,workspaces)>
    <!ATTLIST repository
      default-workspace NMTOKEN #REQUIRED
      name NMTOKEN #REQUIRED
      system-workspace NMTOKEN #REQUIRED
    >
    <!ELEMENT security-domain (#PCDATA)>
    <!ELEMENT access-control (#PCDATA)>
    <!ELEMENT session-max-age (#PCDATA)>
    <!ELEMENT authentication-policy (#PCDATA)>
    <!ELEMENT workspaces (workspace+)>
    <!ELEMENT workspace (container,initializer,cache,query-handler)>
    <!ATTLIST workspace name NMTOKEN #REQUIRED>
    <!ELEMENT container (properties,value-storages)>
    <!ATTLIST container class NMTOKEN #REQUIRED>
    <!ELEMENT value-storages (value-storage+)>
    <!ELEMENT value-storage (properties,filters)>
    <!ATTLIST value-storage class NMTOKEN #REQUIRED>
    <!ELEMENT filters (filter+)>
    <!ELEMENT filter EMPTY>
    <!ATTLIST filter property-type NMTOKEN #REQUIRED>
    <!ELEMENT initializer (properties)>
    <!ATTLIST initializer class NMTOKEN #REQUIRED>
    <!ELEMENT cache (properties)>
    <!ATTLIST cache 
      enabled NMTOKEN #REQUIRED
      class NMTOKEN #REQUIRED
    >
    <!ELEMENT query-handler (properties)>
    <!ATTLIST query-handler class NMTOKEN #REQUIRED>
    <!ELEMENT access-manager (properties)>
    <!ATTLIST access-manager class NMTOKEN #REQUIRED>
    <!ELEMENT lock-manager (time-out,persister)>
    <!ELEMENT time-out (#PCDATA)>
    <!ELEMENT persister (properties)>
    <!ELEMENT properties (property+)>
    <!ELEMENT property EMPTY>

JCR Service can use multiple **Repositories** and each repository can
have multiple **Workspaces**. Each workspace contains its
configurations, including:

-  :ref:`Value Storage plugin for data container <JCR.ConfigurationPersister.ValueStoragePlugin>`

-  :ref:`Initializer <JCR.eXoJCRconfiguration.InitializerConfiguration>`

-  :ref:`Cache <JCR.eXoJCRconfiguration.CacheConfiguration>`

-  :ref:`Query Handler <JCR.eXoJCRconfiguration.QueryHandlerConfiguration>`

-  :ref:`Lock Manager <JCR.eXoJCRconfiguration.LockManagerConfiguration>`

Repositories configuration parameters support human-readable formats of
values. They are all case-insensitive:

-  Number formats: K, KB - kilobytes; M, MB - megabytes; G, GB -
   gigabytes; T,TB - terabytes. For example: 100.5 - digit 100.5; 200k -
   200.

-  Time format ending: ms - milliseconds; m - minutes; h - hours; d -
   days; w - weeks. For example: 500ms - 500 milliseconds; 20 - 20
   seconds; 30m - 30 minutes; 12h - 12 hours; 5d - 5 days; 4w - 4 weeks.

.. _JCR.eXoJCRconfiguration.RepositoryServiceConfiguration:

Repository service configuration
----------------------------------

In eXo Platform, **RepositoryService** is used to build repositories
storing the whole system data. Because the repository configuration is
quite complex, **RepositoryService** does not keep that configuration in
itself but delegates to **RepositoryServiceConfiguration** for storage
and then retrieves that configuration from
**RepositoryServiceConfiguraion**. Also, additional repository
configuration can be added using
**RepositoryServiceConfigurationPlugin** which in turn will be added in
to **RepositoryServiceConfiguration**.

-  ``default-repository``: The name of a default repository (one
   returned by ``RepositoryService.getRepository()``).

-  ``repositories``: The list of repositories.

.. _JCR.eXoJCRconfiguration.RepositoryConfiguration:

Repository configuration
--------------------------

-  ``name``: The name of a repository.

-  ``default-workspace``: The name of a workspace obtained using
   ``Session's login()`` or ``login(Credentials)`` methods (ones without
   an explicit workspace name).

-  ``system-workspace``: The name of workspace where ``/jcr:system``
   node is placed.

-  ``security-domain``: The name of a security domain for JAAS
   authentication.

-  ``access-control``: The name of an access control policy. There may
   be 3 types:

   -  optional - ACL is created on demand (default).

   -  disable - No access control.

   -  mandatory - An ACL is created for each added node (not supported
      yet).

-  ``authentication-policy``: The name of an authentication policy
   class.

-  ``workspaces``: The list of workspaces.

-  ``session-max-age``: The time after which an idle session will be
   removed (called logout). If session-max-age is not set up, idle
   session will never be removed.

-  ``lock-remover-max-threads``: Number of threads that can serve
   LockRemover tasks. The default value is "1". A repository may have
   many workspaces, each workspace have own LockManager. JCR supports
   Locks with defined lifetime and these locks removed as it becomes
   expired by LockRemovers. However, ``LockRemovers`` is not an
   independent timer-thread, it is a task that executes each 30 seconds.
   Such a task is served by ``ThreadPoolExecutor`` which may use various
   threads.

eXo Platform comes with a pre-configured PortalContainer named "portal".
The default Portal Container is started from ``portal.war`` which
consists of ``jcr-configuration.xml`` and
``reposistory-configuration.xml``. These configurations can be overriden
by those in the last extension loaded.

.. note:: See :ref:`RepositoryCreationService <JCR.RepositoryCreationService>`
          if you want to learn how to create repositories in runtime.

.. _JCR.eXoJCRconfiguration.workspace:

Workspace
----------

**Workspace configuration**

-  ``name``: The name of a workspace.

-  ``auto-init-root-nodetype``: DEPRECATED. The node type for root node
   initialization.

-  ``container``: Workspace data container (physical storage)
   configuration.

-  ``initializer``: Workspace initializer configuration.

-  ``cache``: Workspace storage cache configuration.

-  ``query-handler``: Query handler configuration.

-  ``auto-init-permissions``: DEPRECATED .Default permissions of the
   root node. It is defined as a set of semicolon-delimited permissions
   containing a group of space-delimited identities (user, group, etc,
   see Organization service documentation for details) and the type of
   permission. For example, any read; **:/admin read;**:/admin
   add\_node; **:/admin set\_property;**:/admin remove means that users
   from group **admin** have all permissions and other users have only a
   'read' permission.

**Workspace data container configuration**

-  ``class``: A workspace data container class name.

-  ``value-storages``: The list of value storage plugins.

-  ``properties``: The list of properties (name-value pairs) for the
   concrete Workspace data container.

   +--------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
   | ``trigger-events-for-descendants-on-rename``     | Indicate if it is needed to trigger events for descendants on rename or not. This increases the performance of the "rename" operation. However, Observation will not be notified to have the default value as "true".   |
   +--------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
   | ``lazy-node-iterator-page-size``                 | Indicate the page size for lazy iterator. Particularly, this property defines the number of nodes which can be retrieved from storage per request. The default value is "100".                                          |
   +--------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
   | ``acl-bloomfilter-false-positive-probability``   | ACL Bloom filters desired false positive probability. Range is between [0..1] and the default value is "0.1d".                                                                                                          |
   +--------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
   | ``acl-bloomfilter-elements-number``              | Define the expected number of ACL-elements in the Bloom-filter. Its default value is 1000000.                                                                                                                           |
   +--------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. note:: Bloom filters are not supported by all the cache implementations so far, only the implementation for infinispan supports it.

**Workspaces configuration with system properties**

You can configure values of properties defined in the
``repository-configuration.xml`` file using System Properties. This is
quite helpful especially when you want to change the default
configuration of all the workspaces. For example, if you want to disable
the ``rdms`` indexing for all the workspace without this kind of
improvement, it is very error prone. For all components that can be
configured thanks to properties such as
``container, value-storage, workspace-initializer, cache, query-handler,
      lock-manager, access-manager`` and ``persister``; the logic, for
example, for the '``container``' component and the '``foo``' property
will be the following:

1. If you have a system property called
   ``exo.jcr.config.force.workspace.repository_collaboration.container.foo``
   that has been defined, its value will be used for the configuration
   of the '``repository``' repository and the '``collaboration``'
   workspace.

2. If you have a system property called
   ``exo.jcr.config.force.repository.repository.container.foo`` that has
   been defined, its value will be used for the configuration of all the
   workspaces of the '``repository``' repository except the workspaces
   for which you configured the same property using system properties
   defined in #1.

3. If you have a system property called
   ``exo.jcr.config.force.all.container.foo`` that has been defined, its
   value will be used for the configuration of all the workspaces except
   the workspaces for which you configured the same property using
   system properties defined in #1 or #2.

4. If you have a '``foo``' property configured for the '``repository``'
   repository and the '``collaboration``' workspace and you have no
   system properties corresponding to rule #1, #2 and #3, use this value
   (current behavior).

5. If the previous rules do not allow giving a value to the '``foo``'
   property, you will then check the default value in the following
   order:
   ``exo.jcr.config.default.workspace.repository_collaboration.container.foo``,
   ``exo.jcr.config.default.repository.repository.container.foo``,
   ``exo.jcr.config.default.all.container.foo.``

To turn on this feature, you need to define a component called
``SystemParametersPersistenceConfigurator``. A simple example:

.. code:: xml

      <component>
          <key>org.exoplatform.services.jcr.config.SystemParametersPersistenceConfigurator</key>
          <type>org.exoplatform.services.jcr.config.SystemParametersPersistenceConfigurator</type>
          <init-params>
          <value-param>
          <name>file-path</name>
          <value>target/temp</value>
          </value-param>
          <values-param>
          <name>unmodifiable</name>
          <value>cache.test-parameter-I</value>
          </values-param>
          <values-param>
          <name>before-initialize</name>
          <value>value-storage.enabled</value>
          </values-param>
          </init-params>
          </component>

To make the configuration process easier, here you can define thee
parameters.

1. ``file-path``: this is a mandatory parameter which defines the
   location of the file where all parameters configured on the previous
   launch of AS are stored.

2. ``unmodifiable``: this defines the list of parameters which cannot be
   modified using system properties.

3. ``before-initialize``: this defines the list of parameters which can
   be set only for not initialized workspaces (for example, during the
   first start of the AS).

The parameter in the list have the following format: ``
      {component-name}.{parameter-name}``. This takes affect for every
workspace component called ``{component-name}``.

Take into account that if this component is not defined in the
configuration, the workspace configuration overriding using system
properties mechanism will be disabled. In other words, if you do not
configure ``SystemParametersPersistenceConfigurator``, the system
properties are ignored.

.. _JCR.eXoJCRconfiguration.WorkspacePersistenceStorage:

Workspace Data Container
--------------------------

Each Workspace of JCR has its own persistent storage to hold workspace's
items data. eXo Content Repository can be configured so that it can use
one or more workspaces that are logical units of the repository content.
Physical data storage mechanism is configured using the ``container``
mandatory element. The type of container is described in the ``class``
attribute = the fully qualified name of the
``org.exoplatform.services.jcr.storage.WorkspaceDataContainer`` subclass
like:

.. code:: xml

    <container class="org.exoplatform.services.jcr.impl.storage.jdbc.optimisation.CQJDBCWorkspaceDataContainer">
      <properties>
        <property name="source-name" value="jdbcjcr1"/>
        <property name="dialect" value="hsqldb"/>
        <property name="multi-db" value="true"/>
        <property name="max-buffer-size" value="200K"/>
        <property name="swap-directory" value="target/temp/swap/ws"/>
        <property name="lazy-node-iterator-page-size" value="50"/>
        <property name="acl-bloomfilter-false-positive-probability" value="0.1d"/>
        <property name="acl-bloomfilter-elements-number" value="1000000"/>
        <property name="check-sns-new-connection" value="false"/>
        <property name="batch-size" value="1000"/>
      </properties>

**Specific parameters of Workspace Data Container**

-  ``max-buffer-size``: A threshold in bytes, if a value size is
   greater, then it will be spooled to a temporary file. The default
   value is 200k.

-  ``swap-directory``: A location where the value will be spooled if no
   value storage is configured but a ``max-buffer-size`` is exceeded.
   The default value is the value of the "``java.io.tmpdir``" system
   property.

-  ``lazy-node-iterator-page-size``: "Lazy" child nodes iterator
   settings. Defines the size of page, the number of nodes that are
   retrieved from persistent storage at once. The default value is 100.

-  ``acl-bloomfilter-false-positive-probability``: ACL Bloom-filter
   settings. ACL Bloom-filter desired false positive probability. Range
   [0..1]. The default value is 0.1d.

-  ``acl-bloomfilter-elements-number``: ACL Bloom-filter settings.
   Expected number of ACL-elements in the Bloom-filter. The default
   value is 1000000.

-  ``check-sns-new-connection``: Defines if you need to create new
   connection for checking if an older same-name sibling exists. The
   default value is "false".

-  ``trigger-events-for-descendants-on-rename``: Indicates if each
   descendant item must be included into the changes log in case of
   renaming or not.

   -  If its value is set to "**false**", the performance on the rename
      operations will be increased in case of a big amount of nodes
      under the source parent node. However, the performance will be
      decreased in case of a small amount of sub-nodes.

   -  If its value is set to "**true**", the performance will be better
      in case of a small amount of sub-nodes and worse in case of a big
      amount of sub-nodes.

   -  If this parameter is not set, the application will rely on the
      *max-descendant-nodes-allowed-on-move* parameter to add the
      descendant items to the changes log or not. If this parameter is
      not set but the *trigger-events-for-descendants-on-move* parameter
      is set, it will have the same value.

-  **trigger-events-for-descendants-on-move**: Indicates if each
   descendant item must be included into the changes log in case of
   moving or not.

   -  If its value is set to "false", the performance of moving
      operations will be increased in case of a big amount of nodes
      under the source parent node. However, the performance will be
      decreased in case of a small amount of sub-nodes.

   -  If its value is set to "true", the performance will be better in
      case of a small amount of sub-nodes and worse in case of a big
      amount of sub-nodes.

   -  If this parameter is not set, the application will rely on the
      *max-descendant-nodes-allowed-on-move* parameter to add or not the
      descendant items to the changes log.

-  **max-descendant-nodes-allowed-on-move**: The maximum number of
   descendant nodes is allowed to be included into the change log. Its
   value will be then automatically disabled. This allows the best
   performance regardless of the total amount of sub-nodes. The default
   value is set to "100". This parameter is used only if
   *trigger-events-for-descendants-on-move* and
   *trigger-events-for-descendants-on-rename* are not set.

.. note:: Bloom filters are not supported by all the cache implementations so
          far only the implementation for infinispan supports it. They are
          used to avoid read nodes that definitely do not have ACL.
          ``acl-bloomfilter-false-positive-probability`` and
          ``acl-bloomfilter-elements-number`` are used to configure such
          filters. You can read
          `here <http://en.wikipedia.org/wiki/Bloom_filter" >http://en.wikipedia.org/wiki/Bloom_filter>`__
          for more information about Bloom filters.

**Specific parameters of JDBC Workspace Data Container**

eXo JCR has an RDB (JDBC) based production ready **Workspace Data
Container** which has the following specific parameters:

-  ``source-name``: JDBC data source name, registered in JDNI by
   InitialContextInitializer. (``sourceName`` prior v.1.9). This
   property is **mandatory**.

-  ``dialect``: Database dialect, one of ""hsqldb", "h2", "mysql",
   "mysql-myisam", "mysql-utf8", "mysql-myisam-utf8", "pgsql",
   "pgsql-scs", "oracle", "oracle-oci", "mssql", "sybase", "derby",
   "db2", "db2v8". The default value is "auto".

-  ``multi-db``: Enables multi-database containers if the value of this
   parameter is "true". Otherwise, it is configured for single-database
   containers.

.. note:: This property is currently **deprecated**. It is advised to use ``db-structure-type`` instead.

-  ``db-structure-type``: Can be set to *isolated, multi, single* to set
   corresponding configuration for data container. This property is
   **mandatory.**

-  ``db-tablename-suffix``: If ``db-structure-type `` is set to
   *isolated*, tables used by repository service have the following
   format:

   -  ``JCR_I${db-tablename-suffix}`` for items.

   -  ``JCR_V${db-tablename-suffix}`` for values.

   -  ``JCR_R${db-tablename-suffix}`` for references.

      ``db-tablename-suffix`` by default equals to the workspace name,
      but can be set via configuration to any suitable.

-  ``batch-size``: The batch size. The default value is -1 (disabled).

-  ``use-sequence-for-order-number``: Indicates whether or not a
   sequence must be used to manage the order number. The expected value
   for this parameter is a boolean or "auto". By default, it is set to
   "auto" where the value of use-sequence will be set automatically
   according to your database type.

   -  It is enabled in case of H2, HSQLDB, PGSQL and ORACLE.

   -  It is disabled in case of MSSQL, MYSQL and SYBASE.

Workspace Data Container may support external storages for
``javax.jcr.Value`` (which can be the case for BLOB values for example)
using the ``value-storages`` optional element. Data Container will try
to read or write values using underlying value storage plugin if the
filter criteria (see below) match the current property.

.. code:: xml

    <value-storages>
      <value-storage id="Storage #1" class="org.exoplatform.services.jcr.impl.storage.value.fs.TreeFileValueStorage">
        <properties>
          <property name="path" value="data/values"/>
        </properties>
        <filters>
         <filter property-type="Binary" min-value-size="1M"/><!-- Values large of 1Mbyte -->
        </filters>
    .........
    </value-storages>

Where:

-  ``value-storage`` is the subclass of
   ``org.exoplatform.services.jcr.storage.value.ValueStoragePlugin`` and
   **properties** are optional plugin specific parameters.

-  ``filters``: Each file value storage can have the filter(s) for
   incoming values. If there are several filter criteria, they all have
   to match (AND-Condition).

   A filter can match values by the property type (``property-type``),
   property name (``property-name``), ancestor path (``ancestor-path``)
   and/or the size of values stored (min-value-size, e.g. 1M, 4.2G, 100
   (bytes)).

   This code sample uses a filter with ``property-type`` and
   ``min-value-size`` only. That means that the storage is only for
   binary values whose size is greater than 1Mbyte.

It is recommended to store properties with large values in a file value
storage only.

**Database's dialects**

**PostgreSQL/PostgrePlus database**

PostgreSQL/PostgrePlus's dialect is set automatically. The dialect
depends on the version of database. If you change default value of
``standard_conforming_strings`` parameter, you must configure one of the
following dialects manually:

-  ``PgSQL ``: This dialect is used if ``standard_conforming_strings``
   is set to 'off' which is the default value for version before 9.1.

-  ``PgSQL-SCS``: This dialect is used if
   ``standard_conforming_strings`` is set to 'on' which is the default
   value for version after 9.1.

**MySQL database**

-  ``mysql``: This dialect is used if JCR tables with InnoDB engine (by
   default) need to be created.

-  ``mysql-utf8``: This dialect is used if JCR tables with InnoDB engine
   with UTF-8 encoding support need to be created.

-  ``mysql-myisam``: This dialect is used if JCR tables with MyISAM
   engine need to be created.

-  ``mysql-myisam-utf8``: This dialect is used if JCR tables with MyISAM
   engine with UTF-8 encoding support need to be created.

-  ``mysql-ndb``: This dialect is used if JCR tables with NDB engine
   (mysql cluster) need to be created.

-  ``mysql-ndb-utf8``: This dialect is used if JCR tables with NDB
   engine (mysql cluster) with UTF-8 encoding support need to be
   created.

.. note:: Since MySQL NDB engine does not support foreign keys, which may lead
          to improper item removal and as consequence to
          ``InvalidItemStateException``. In this case, you will need to use
          consistency checker tool.

.. _JCR.ConfigurationPersister.ValueStoragePlugin:

Value Storage plugin for data container
----------------------------------------

.. note:: The value-storage element is optional. If you do not include it, the
          values will be stored as BLOBs inside the database.

    See :ref:`External Value Storages <JCR.ExternalValueStorages>` for
    advanced configuration of the Value Storage plugin.

-  ``value-storage``: Optional Value Storage plugin definition.

.. _JCR.eXoJCRconfiguration.InitializerConfiguration:

Initializer
------------

.. note:: This configuration is optional.

-  ``class``: Initializer implementation class.

-  ``properties``: The list of properties (name-value pairs) which are
   supported.

-  ``root-nodetype``: The node type for root node initialization.

-  ``root-permissions``: Default permissions of the root node. It is
   defined as a set of semicolon-delimited permissions containing a
   group of space-delimited identities (for example, user and group. See
   `Organization Service
   Initializer <#Core.OrganizationServiceInitializer>`__ for more
   details), and the type of permission. For example any
   read;\ **:/admin read;**:/admin add\_node;\ **:/admin
   set\_property;**:/admin remove means that users from group **admin**
   have all permissions and other users have only a 'read' permission.

-  Configurable initializer adds a capability to override workspace
   initial startup procedure (used for Clustering).It also replaces
   workspace element parameters, including ``auto-init-root-nodetype``
   and\ ``auto-init-permissions``, with ``root-nodetype`` and
   ``root-permissions`` respectively.

.. _JCR.eXoJCRconfiguration.CacheConfiguration:

Cache
-------

-  ``enabled``: Define if workspace cache is enabled or not.

-  ``class``: Cache implementation class. The default value is
   ``org.exoplatform.services.jcr.impl.dataflow.persistent.LinkedWorkspaceStorageCacheImpl``.

-  ``properties``: The list of properties (name-value pairs) for
   Workspace cache.

-  ``max-size``: Cache maximum size.

-  ``live-time``: Cached item live time.

.. _JCR.eXoJCRconfiguration.QueryHandlerConfiguration:

Query Handler
--------------

The service configuration is located at ``repository-configuration.xml``
in the web application. This file can be found in :ref:`various locations <repository-configuration-file-locations>`.

For example:

.. code:: xml

    <query-handler class="org.exoplatform.services.jcr.impl.core.query.lucene.SearchIndex">
        <properties>
            <property name="index-dir" value="target/temp/index/repository/lab" />
            <property name="support-highlighting" value="true" />
            <property name="excerptprovider-class" value="org.exoplatform.services.jcr.impl.core.query.lucene.DefaultHTMLExcerpt" />                           
        </properties>
    </query-handler>

-  ``class``: A Query Handler class name.

-  ``properties``: The list of properties (name-value pairs) for a Query
   Handler (indexDir).

.. note:: See :ref:`Query Handler configuration <JCR.QueryHandlerConfiguration>` for advanced configuration of QueryHandler.

.. _JCR.eXoJCRconfiguration.LockManagerConfiguration:

Lock Manager
-------------

The service configuration is located at ``repository-configuration.xml``
in the web application. The file can be found in :ref:`various locations <repository-configuration-file-locations>`.

For example:

.. code:: xml

    <lock-manager>
        <time-out>15m</time-out><!-- 15min -->
        <persister class="org.exoplatform.services.jcr.impl.core.lock.FileSystemLockPersister">
            <properties>
                <property name="path" value="../temp/lock/gadgets" />
            </properties>
        </persister>
    </lock-manager>

-  ``time-out``: Time after which the unused global lock will be
   removed.

-  ``persister``: A class for storing lock information for future use.
   For example, remove lock after jcr restart.

-  ``path``: A lock folder. Each workspace has its own one.

.. note:: -  See :ref:`Lock Manager configuration <JCR.LockManagerConfiguration>` for advanced configuration of LockManager.

          -  Also see :ref:`lock-remover-max-threads <JCR.eXoJCRconfiguration.LockRemoverMaxThreads>`.


.. _JCR.ConfigurationPersister:

JCR configuration persister
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

JCR allows using *persister* to store configuration. In this section,
you will understand how to use and configure JCR persister.

On startup ``RepositoryServiceConfiguration`` component checks if a
configuration persister was configured. In that case, it uses the
provided ``ConfigurationPersister`` implementation class to instantiate
the persister object.

The configuration file is located in
``portal/WEB-INF/conf/jcr/jcr-configuration.xml`` in the portal web
application.

Configuration with persister:

.. code:: xml

    <component>
    <key>org.exoplatform.services.jcr.config.RepositoryServiceConfiguration</key>
    <type>org.exoplatform.services.jcr.impl.config.RepositoryServiceConfigurationImpl</type>
    <init-params>
      <value-param>
        <name>conf-path</name>
        <description>JCR configuration file</description>
        <value>war:/conf/jcr/repository-configuration.xml</value>
      </value-param>
      <properties-param>
          <name>working-conf</name>
        <description>working-conf</description>
        <property name="persister-class-name" value="org.exoplatform.services.jcr.impl.config.JDBCConfigurationPersister" />
        <property name="source-name" value="${gatein.jcr.datasource.name}${container.name.suffix}"/>
        <property name="dialect" value="${gatein.jcr.datasource.dialect}"/>
      </properties-param>
    </init-params>
    </component>

-  ``persister-class-name`` - Class name of ``ConfigurationPersister``
   interface implementation.

-  ``source-name``: JNDI source name configured in
   ``InitialContextInitializer`` component. Find more in 
   :ref:`database configuration <JCR.JDBCDataContainerConfig>`.

-  ``dialect``: SQL dialect which will be used with database
   from\ ``source-name``. Find more in 
   :ref:`database configuration <JCR.JDBCDataContainerConfig>`.

If you want to customize, you can implement ``ConfigurationPersister``
interface as follows:

.. code:: java

    /**
       * Init persister.
       * Used by RepositoryServiceConfiguration on init. 
       * @return - config data stream
       */
      void init(PropertiesParam params) throws RepositoryConfigurationException;
      
      /**
       * Read config data.
       * @return - config data stream
       */
      InputStream read() throws RepositoryConfigurationException;
      
      /**
       * Create table, write data.
       * @param confData - config data stream
       */
      void write(InputStream confData) throws RepositoryConfigurationException;
      
      /**
       * Tell if the config exists.
       * @return - flag
       */
      boolean hasConfig() throws RepositoryConfigurationException;

.. _JCR.JDBCDataContainerConfig:

JDBC data container configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The current configuration of JCR uses `Apache DBCP <http://commons.apache.org/dbcp/>`__ connection pool.
(``org.apache.commons.dbcp.BasicDataSourceFactory``). It is possible to
set a big value for maxActive parameter in ``configuration.xml``. That
means lots of TCP/IP ports from a client machine inside the pool are
used, such as JDBC driver. As the result, the data container can throw
exceptions like "Address already in use". To solve this problem, you
have to configure the client's machine networking software for using
shorter timeouts for opened TCP/IP ports.

Microsoft Windows has ``MaxUserPort``, ``TcpTimedWaitDelay`` registry
keys in the node
``HKEY_LOCAL_MACHINESYSTEMCurrentControlSetServicesTcpipParameters``, by
default these keys are unset. Set each one with values as follows:

-  "TcpTimedWaitDelay"=dword:0000001e, sets TIME\_WAIT parameter to 30
   seconds (default value is "240").

-  "MaxUserPort"=dword:00001b58, sets the maximum of open ports to 7000
   or higher (default value is "5000").

A sample registry file is below:

::

    Windows Registry Editor Version 5.00

    [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters]
    "MaxUserPort"=dword:00001b58
    "TcpTimedWaitDelay"=dword:0000001e

Isolated-database configuration
-------------------------------

Isolated-database configuration allows configuring single database for
repository but separate database tables for each workspace.

1. Configure the data container in the
   ``org.exoplatform.services.naming.InitialContextInitializer`` service.
   It is the JNDI context initializer, which registers (binds) naming
   resources (DataSources) for data containers.

   For example:

	.. code:: xml

		   <external-component-plugins>
			<target-component>org.exoplatform.services.naming.InitialContextInitializer</target-component>
			<component-plugin>
			  <name>bind.datasource</name>
			  <set-method>addPlugin</set-method>
			  <type>org.exoplatform.services.naming.BindReferencePlugin</type>
			  <init-params>
				<value-param>
				  <name>bind-name</name>
				  <value>jdbcjcr</value>
				</value-param>
				<value-param>
				  <name>class-name</name>
				  <value>javax.sql.DataSource</value>
				</value-param>
				<value-param>
				  <name>factory</name>
				  <value>org.apache.commons.dbcp.BasicDataSourceFactory</value>
				</value-param>
				  <properties-param>
					<name>ref-addresses</name>
					<description>ref-addresses</description>
					<property name="driverClassName" value="org.postgresql.Driver"/>
					<property name="url" value="jdbc:postgresql://exoua.dnsalias.net/portal"/>
					<property name="username" value="exoadmin"/>
					<property name="password" value="exo12321"/>
				  </properties-param>
			  </init-params>
			</component-plugin>
		  </external-component-plugins>

The database connection parameters are configured:

-  ``driverClassName``. For example: "org.hsqldb.jdbcDriver",
   "com.mysql.jdbc.Driver", "org.postgresql.Driver"

-  ``url``. For example: "jdbc:hsqldb:file:target/temp/data/portal",
   "jdbc:mysql://exoua.dnsalias.net/jcr"

-  ``username``. For example: "sa", "exoadmin"

-  ``password``. For example: "exo12321"

2. Configure the repository service. Each workspace will be configured for
   the same data container.

   For example:

	.. code:: xml

		<workspaces>
		   <workspace name="ws">
			  <!-- for system storage -->
			  <container class="org.exoplatform.services.jcr.impl.storage.jdbc.optimisation.CQJDBCWorkspaceDataContainer">
				 <properties>
					<property name="source-name" value="jdbcjcr" />
					<property name="db-structure-type" value="isolated" />
					...
				 </properties>
				 ...
			  </container>
			  ...
		   </workspace>

		   <workspace name="ws1">
			  <container class="org.exoplatform.services.jcr.impl.storage.jdbc.optimisation.CQJDBCWorkspaceDataContainer">
				 <properties>
					<property name="source-name" value="jdbcjcr" />
					<property name="db-structure-type" value="isolated" />
					...
				 </properties>
				 ...
			  </container>
			  ...
		   </workspace>
		</workspaces>

In this step, you have configured two workspaces which will be persisted
in different database tables.

.. note:: The :ref:`repository configuration <JCR.eXoJCRconfiguration.RepositoryConfiguration>`
          parameters support human-readable formats of values. For example:
          200K - 200 Kbytes, 30m - 30 minutes, and more.

Single-database configuration
-----------------------------

It is simpler to configure a single-database data container. You have to
configure one naming resource.

For example (embedded mode for ``jdbcjcr`` data container):

.. code:: xml

    <external-component-plugins>
    <target-component>org.exoplatform.services.naming.InitialContextInitializer</target-component>
    <component-plugin>
        <name>bind.datasource</name>
        <set-method>addPlugin</set-method>
        <type>org.exoplatform.services.naming.BindReferencePlugin</type>
        <init-params>
          <value-param>
            <name>bind-name</name>
            <value>jdbcjcr</value>
          </value-param>
          <value-param>
            <name>class-name</name>
            <value>javax.sql.DataSource</value>
          </value-param>
          <value-param>
            <name>factory</name>
            <value>org.apache.commons.dbcp.BasicDataSourceFactory</value>
          </value-param>
          <properties-param>
            <name>ref-addresses</name>
            <description>ref-addresses</description>
            <property name="driverClassName" value="org.postgresql.Driver"/>
            <property name="url" value="jdbc:postgresql://exoua.dnsalias.net/portal"/>
            <property name="username" value="exoadmin"/>
            <property name="password" value="exo12321"/>
            <property name="maxActive" value="50"/>
            <property name="maxIdle" value="5"/>
            <property name="initialSize" value="5"/>
          </properties-param>
        </init-params>
    </component-plugin>
    </external-component-plugins>

And configure repository workspaces in repositories configuration with
this one database. Parameter "multi-db" must be switched off (set value
"false").

For example: two workspaces ``ws`` - jdbcjcr, and ``ws1`` - jdbcjcr:

.. code:: xml

    <workspaces>
      <workspace name="ws" auto-init-root-nodetype="nt:unstructured">
        <container class="org.exoplatform.services.jcr.impl.storage.jdbc.optimisation.CQJDBCWorkspaceDataContainer">
        <properties>
          <property name="source-name" value="jdbcjcr"/>
          <property name="dialect" value="pgsql"/>
          <property name="multi-db" value="false"/>
          <property name="max-buffer-size" value="200K"/>
          <property name="swap-directory" value="target/temp/swap/ws"/>
        </properties>
        </container>
        <cache enabled="true">
        <properties>
          <property name="max-size" value="10K"/>
          <property name="live-time" value="30m"/>
        </properties>
        </cache>
        <query-handler class="org.exoplatform.services.jcr.impl.core.query.lucene.SearchIndex">
        <properties>
          <property name="index-dir" value="../temp/index"/>
        </properties>
        </query-handler>
        <lock-manager>
        <time-out>15m</time-out>
        <persister class="org.exoplatform.services.jcr.impl.core.lock.FileSystemLockPersister">
          <properties>
          <property name="path" value="target/temp/lock/ws"/>
          </properties>
        </persister>
        </lock-manager>
      </workspace>
      <workspace name="ws1" auto-init-root-nodetype="nt:unstructured">
        <container class="org.exoplatform.services.jcr.impl.storage.jdbc.optimisation.CQJDBCWorkspaceDataContainer">
        <properties>
          <property name="source-name" value="jdbcjcr"/>
          <property name="dialect" value="pgsql"/>
          <property name="multi-db" value="false"/>
          <property name="max-buffer-size" value="200K"/>
          <property name="swap-directory" value="target/temp/swap/ws1"/>
        </properties>
        </container>
        <cache enabled="true">
        <properties>
          <property name="max-size" value="10K"/>
          <property name="live-time" value="5m"/>
        </properties>
        </cache>
        <lock-manager>
        <time-out>15m</time-out>
        <persister class="org.exoplatform.services.jcr.impl.core.lock.FileSystemLockPersister">
          <properties>
          <property name="path" value="target/temp/lock/ws1"/>
          </properties>
        </persister>
        </lock-manager>
      </workspace>
    </workspaces>

In this way, you have configured two workspaces which will be persisted
in one database (PostgreSQL).

**Configuration without DataSource**

Repository configuration without using the ``javax.sql.DataSource``
bounded in JNDI.

This case may be usable if you have a dedicated JDBC driver
implementation with special features like XA transactions,
statements/connections pooling and so on:

-  Remove the configuration in ``InitialContextInitializer`` for your
   database and configure a new one directly in the workspace container.

-  Remove parameter "source-name" and add next lines instead. Describe
   your values for a JDBC driver, database URL and username.

.. note:: Be careful in the case JDBC driver should be implemented and provide
          connection pooling. Connection pooling is very recommended for using
          with JCR to prevent a database overload.

.. code:: xml

    <workspace name="ws" auto-init-root-nodetype="nt:unstructured">
    <container class="org.exoplatform.services.jcr.impl.storage.jdbc.optimisation.CQJDBCWorkspaceDataContainer">
    <properties>
      <property name="dialect" value="hsqldb"/>
      <property name="driverClassName" value="org.hsqldb.jdbcDriver"/>
      <property name="url" value="jdbc:hsqldb:file:target/temp/data/portal"/>
      <property name="username" value="su"/>
      <property name="password" value=""/> 
    ......

Multi-database configuration
----------------------------

You need to configure each workspace in a repository. You may have each
one on different remote servers as far as you need.

First of all, configure the data containers in the
``org.exoplatform.services.naming.InitialContextInitializer`` service.
It is the JNDI context initializer which registers (binds) naming
resources (DataSources) for data containers.

For example, the configuration for two data containers (``jdbcjcr`` -
local HSQLDB, ``jdbcjcr1`` - remote MySQL) is as follows :

.. code:: xml

    <component>
        <key>org.exoplatform.services.naming.InitialContextInitializer</key>
        <type>org.exoplatform.services.naming.InitialContextInitializer</type>
        <component-plugins>
          <component-plugin>
            <name>bind.datasource</name>
            <set-method>addPlugin</set-method>
            <type>org.exoplatform.services.naming.BindReferencePlugin</type>
            <init-params>
              <value-param>
                <name>bind-name</name>
                <value>jdbcjcr</value>
              </value-param>
              <value-param>
                <name>class-name</name>
                <value>javax.sql.DataSource</value>
              </value-param>
              <value-param>
                <name>factory</name>
                <value>org.apache.commons.dbcp.BasicDataSourceFactory</value>
              </value-param>
              <properties-param>
                <name>ref-addresses</name>
                <description>ref-addresses</description>
                <property name="driverClassName" value="org.hsqldb.jdbcDriver"/>
                <property name="url" value="jdbc:hsqldb:file:target/temp/data/portal"/>
                <property name="username" value="sa"/>
                <property name="password" value=""/>
              </properties-param>
            </init-params>
          </component-plugin>
          <component-plugin>
            <name>bind.datasource</name>
            <set-method>addPlugin</set-method>
            <type>org.exoplatform.services.naming.BindReferencePlugin</type>
            <init-params>
              <value-param>
                <name>bind-name</name>
                <value>jdbcjcr1</value>
              </value-param>
              <value-param>
                <name>class-name</name>
                <value>javax.sql.DataSource</value>
              </value-param>
              <value-param>
                <name>factory</name>
                <value>org.apache.commons.dbcp.BasicDataSourceFactory</value>
              </value-param>
              <properties-param>
                <name>ref-addresses</name>
                <description>ref-addresses</description>
                <property name="driverClassName" value="com.mysql.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://exoua.dnsalias.net/jcr"/>
                <property name="username" value="exoadmin"/>
                <property name="password" value="exo12321"/>
                <property name="maxActive" value="50"/>
                <property name="maxIdle" value="5"/>
                <property name="initialSize" value="5"/>
              </properties-param>
            </init-params>
          </component-plugin>
        <component-plugins>
        <init-params>
          <value-param>
            <name>default-context-factory</name>
            <value>org.exoplatform.services.naming.SimpleContextFactory</value>
          </value-param>
        </init-params>
    </component>

-  ``driverClassName``, for example. "org.hsqldb.jdbcDriver",
   "com.mysql.jdbc.Driver", "org.postgresql.Driver"

-  ``url``, for example, "jdbc:hsqldb:file:target/temp/data/portal",
   "jdbc:mysql://exoua.dnsalias.net/jcr"

-  ``username``, for example, "sa", "exoadmin"

-  ``password``, for example, "", "exo12321"

-  ``maxActive``, for example, 50

-  ``maxIdle``, for example, 5

-  ``initialSize``, for example, 5

   There are also some other connection pool configuration parameters
   (org.apache.commons.dbcp.BasicDataSourceFactory) according to 
   `Apache DBCP configuration. <http://jakarta.apache.org/commons/dbcp/configuration.html>`__

When the data container configuration is done, you can configure the
repository service. Each workspace will be configured for its own data
container.

For example (two workspaces ``ws`` and ``ws1``:

.. code:: xml

    <workspaces>
      <workspace name="ws" auto-init-root-nodetype="nt:unstructured">
        <container class="org.exoplatform.services.jcr.impl.storage.jdbc.optimisation.CQJDBCWorkspaceDataContainer">
        <properties>
          <property name="source-name" value="jdbcjcr"/>
          <property name="dialect" value="hsqldb"/>
          <property name="multi-db" value="true"/>
          <property name="max-buffer-size" value="200K"/>
          <property name="swap-directory" value="target/temp/swap/ws"/>   
        </properties>
        </container>
        <cache enabled="true">
          <properties>
            <property name="max-size" value="10K"/><!-- 10Kbytes -->
            <property name="live-time" value="30m"/><!-- 30 min -->
          </properties>
        </cache>
        <query-handler class="org.exoplatform.services.jcr.impl.core.query.lucene.SearchIndex">
        <properties>
          <property name="index-dir" value="target/temp/index"/>
        </properties>
        </query-handler>
        <lock-manager>
        <time-out>15m</time-out><!-- 15 min -->
        <persister class="org.exoplatform.services.jcr.impl.core.lock.FileSystemLockPersister">
          <properties>
          <property name="path" value="target/temp/lock/ws"/>
          </properties>
        </persister>
        </lock-manager>
      </workspace>
      <workspace name="ws1" auto-init-root-nodetype="nt:unstructured">
        <container class="org.exoplatform.services.jcr.impl.storage.jdbc.optimisation.CQJDBCWorkspaceDataContainer">
        <properties>
          <property name="source-name" value="jdbcjcr1"/>
          <property name="dialect" value="mysql"/>
          <property name="multi-db" value="true"/>
          <property name="max-buffer-size" value="200K"/>
          <property name="swap-directory" value="target/temp/swap/ws1"/>   
        </properties>
        </container>
        <cache enabled="true">
          <properties>
            <property name="max-size" value="10K"/>
            <property name="live-time" value="5m"/>
          </properties>
        </cache>
        <query-handler class="org.exoplatform.services.jcr.impl.core.query.lucene.SearchIndex">
        <properties>
          <property name="index-dir" value="target/temp/index"/>
        </properties>
        </query-handler>
        <lock-manager>
        <time-out>15m</time-out><!-- 15 min -->
        <persister class="org.exoplatform.services.jcr.impl.core.lock.FileSystemLockPersister">
          <properties>
          <property name="path" value="target/temp/lock/ws1"/>
          </properties>
        </persister>
        </lock-manager>
      </workspace>
    </workspaces>
        

-  ``source-name``: A javax.sql.DataSource name configured in
   InitialContextInitializer component.

-  ``dialect``: A database dialect, one of "hsqldb", "mysql",
   "mysql-utf8", "pgsql", "pgsql-scs", "oracle", "oracle-oci", "mssql",
   "sybase", "derby", "db2", "db2v8" or "auto" for dialect
   autodetection;

-  ``multi-db``: Enable multi-database container with this parameter
   (set value "true");

-  ``max-buffer-size: A`` threshold (in bytes) after which a javax.jcr.
   Value content will be swapped to a file in a temporary storage. For
   example: swap for pending changes.

-  ``swap-directory``: A path in the file system used to swap the
   pending changes.

In this way, you have configured two workspaces which will be persisted
in two different database (ws in HSQLDB, ws1 in MySQL).

.. note:: The :ref:`repository configuration <JCR.eXoJCRconfiguration.RepositoryConfiguration>`
          parameters supports human-readable formats of values (for example:
          200K - 200 Kbytes, 30m - 30 minutes, etc)

 _JCR.ConfigurationFAQs:
 
 Frequently asked questions
~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Q1:** **How to use Lucene spellchecker?**

**A:** You simply do the following steps:

-  Enable the Lucene spellchecker in the JCR QueryHandler configuration:

   .. code:: xml

       <query-handler class="org.exoplatform.services.jcr.impl.core.query.lucene.SearchIndex">
           <properties>
               ...
               <property name="spellchecker-class" value="org.exoplatform.services.jcr.impl.core.query.lucene.spell.LuceneSpellChecker$FiveSecondsRefreshInterval"/>
               ...
           </properties>
       </query-handler>

-  Execute query with rep:spellcheck function and word that is checked:

   .. code:: java

       Query query = qm.createQuery("select rep:spellcheck() from nt:base where " +
         "jcr:path = '/' and spellcheck('word that is checked')", Query.SQL);
         RowIterator rows = query.execute().getRows();

-  Fetch a result:

   .. code:: java

       Row r = rows.nextRow();
         Value v = r.getValue("rep:spellcheck()");

If there is no any result, this means there is no suggestion, so word is
correct or spellcheckers dictionary does not contain any words like the
checked word.

**Q2:** **How can I affect spellchecker results?**

**A:** There are two parameters in the JCR QueryHandler configuration:

-  Minimal distance between checked word and proposed suggestion:

-  Search for more popular suggestions:

   .. code:: xml

       <query-handler class="org.exoplatform.services.jcr.impl.core.query.lucene.SearchIndex">
           <properties>
               ...
               <property name="spellchecker-class" value="org.exoplatform.services.jcr.impl.core.query.lucene.spell.LuceneSpellChecker$FiveSecondsRefreshInterval" />
               <property name="spellchecker-more-popular" value="false" />
               <property name="spellchecker-min-distance" value="0.55" />
               ...
           </properties>
       </query-handler>

Minimal distance is counted as Levenshtein distance between checked word
and spellchecker suggestion.

The MorePopular parameter affects in the following way:

If "morePopular" is disabled:

-  If the proposed word exists in the directory: no suggestion given.

-  If the proposed word does not exist in the directory: propose the
   closed word.

If "morePopular" is enabled:

-  No matter word exists or not, checker will propose the closed word
   that is more popular than the checked word.

**Q3:** **Does Help application prohibit the use of closed sessions?**

**A:** Products that use JCR, sometimes missuse it since they continue
to use a session that has been closed through a method call on a node, a
property or even the session itself. To prevent bad practices, we
propose three following modes:

-  If the system property *exo.jcr.prohibit.closed.session.usage* has
   been set to "true", then a RepositoryException will be thrown any
   time an application is trying to access to a closed session. In the
   stack trace, you will be able to know the call stack that closes the
   session.

-  If the system property *exo.jcr.prohibit.closed.session.usage* has
   not been set and the system property *exo.product.developing* has
   been set to *true*, then a warning will be logged in the log file
   with the full stack trace in order to help identifying the root cause
   of the issue. In the stack trace, you will be able to know the call
   stack that closes the session.

-  If none of the previous system properties have been set, then we will
   ignore that issue and let the application use the closed session as
   before without doing anything to allow applications to migrate step
   by step.

**Q4:** **Does Help application allow the use of closed datasources?**

**A:** Since the usage of closed session affects usage of closed
datasource, we propose three ways to resolve such kind of issues:

-  If the system property *exo.jcr.prohibit.closed.datasource.usage* is
   set to *true* (default value) then a SQLException will be thrown any
   time an application will try to access to a closed datasource. In the
   stack trace, you will be able to know the call stack that closes the
   datasource.

-  If the system property *exo.jcr.prohibit.closed.datasource.usage* is
   set to "false" and the system property *exo.product.developing* is
   set to "true", then a warning will be logged in the log file with the
   full stack trace in order to help identifying the root cause of the
   issue. In the stack trace, you will be able to know the call stack
   that closes the datasource.

-  If the system property *exo.jcr.prohibit.closed.datasource.usage* is
   set to "false" and the system property *exo.product.developing* is
   set to "false" usage of closed datasource will be allowed and nothing
   will be logged or thrown.

**Q5:** **How to get the effective configuration at Runtime of all the
repositories?**

**A:** The effective configuration of all the repositories and their
workspaces can be known thanks to the method *getConfigurationXML*\ ().
This method is exposed through JMX at the
*RepositoryServiceConfiguration* level. In case of a *PortalContainer*,
the name of the related MBean will be of type
*exo:portal=${portal-container-name},service=RepositoryServiceConfiguration*.
This method will give you the effective configuration in XML format that
has been really interpreted by the JCR core. This could be helpful to
understand how your repositories/workspaces are configured especially if
you would like to overwrite the configuration for some reasons.

