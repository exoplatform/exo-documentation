.. _Database:

##########
Database
##########

    By default, eXo Platform uses HSQL and you do not need any
    configuration to make it work. Follow this chapter only when you
    need to use another RDBMS.

    Assuredly you can use MySQL, PostgreSQL, MSSQL, Oracle, Sybase, DB2.
    Optimistically any SQL database that provides a JDBC compliant
    driver can be used.

    In this chapter:

    -  :ref:`Creating databases <Database.Creating_databases>`
       You need to create databases. The tables are created
       automatically in Platform first startup.

    -  :ref:`Configuring eXo Platform <Database.ConfiguringPLF>`
       This section is a complete guide to configure eXo to use a RDBMS.

    -  :ref:`Configuring Database in a docker install <Database.DockerDatabase>`
       This section describes how to configure database in a docker
       container.

    -  :ref:`Datasource JNDI name <Database.JNDI>`
       If for any reason you want to change JNDI name of the
       datasources, follow this section.

    -  :ref:`File storage <Database.FileStorage>`
       This section targets to describe the possible ways to store
       binary files in eXo Platform. It also makes comparison between them to
       allow administrators to choose the suitable file storage for
       their environment.

    -  :ref:`Configuring eXo Chat database <Database.ChatDatabase>`
       This section introduces the parameters to configure eXo Chat
       MongoDB database.

    -  :ref:`Frequently asked questions <Database.FAQs>`
       This section especially targets to solve some possible issues.


.. _Database.Creating_databases:

==================
Creating databases
==================

eXo Platform uses three datasources:

-  **IDM**: For Identity Management service.

-  **JCR**: For Java Content Repository service.

-  **JPA**: To store entities mapped by Hibernate.

Create 3 databases, one for IDM, one for JCR and one for JPA, or you can
use the same database for all pf them. Leave the databases empty, the
tables will be created automatically in Platform first startup.

-  If you do not need to support specific characters, it is recommended
   to use the character set ``latin1`` and the collation
   ``latin1_general_cs`` (as eXo JCR is case sensitive). For example, in
   MySQL: *CREATE DATABASE plf\_jcr DEFAULT CHARACTER SET latin1 DEFAULT
   COLLATE latin1\_general\_cs;*.

-  If you need to support specific characters, it is recommended to use
   the character set ``utf8`` and the collation ``utf8_bin`` (as eXo JCR
   is case sensitive). For example, in MySQL: *CREATE DATABASE plf\_jcr
   DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8\_bin;*

-  To avoid username/profile duplication, IDM schema should be case
   insensitive i.e it should use the collaction ``latin1_swedish_ci``.
   For example, in MySQL: *CREATE DATABASE plf\_idm DEFAULT CHARACTER
   SET latin1 DEFAULT COLLATE latin1\_swedish\_ci;*

Grant a user the right to access the databases. The user should be
allowed to access remotely from where eXo Platform is hosted.

For example, in MySQL:

::

    grant all on ${dbname}.* to '$username'@'$IP' identified by '$password';

-  $IP is your app server host name that accepts wildcard (for example,
   192.168.1.% = all IPs on 192.168.1.x network).

-  $username and $password are credentials that eXo Platform will use to
   connect to the databases.

.. _Database.ConfiguringPLF:

=========================
Configuring eXo Platform
=========================

.. warning:: By default, eXo Platform is connected to hsql database. This database
			 could be used for testing purpose but it is not possible to use it
			 in production environments.

eXo Platform relies on the application server (Tomcat/JBoss) to access
databases. It uses three JNDI datasources:

-  IDM uses *exo-idm\_portal*.

-  JCR uses *exo-jcr\_portal*.

-  JPA uses *exo-jpa\_portal*.

eXo provides the ready-made and fine-tuned configuration so typically
you just need to choose a sample and modify the connection url and the
credentials.

.. _ConfigureDBTomcat:

For Tomcat
~~~~~~~~~~~

1. Configure the datasources.

   -  i. Edit ``conf/server.xml`` to remove the default HSQL configuration:

      .. code:: xml

          <!-- eXo IDM Datasource for portal -->
          <Resource name="exo-idm_portal" ...
          username="sa" password="" driverClassName="org.hsqldb.jdbcDriver" .../>
          <!-- eXo JCR Datasource for portal -->
          <Resource name="exo-jcr_portal" ...
          username="sa" password="" driverClassName="org.hsqldb.jdbcDriver" .../>
          <!-- eXo JPA Datasource for portal -->
          <Resource name="exo-jpa_portal" ...
          username="sa" password="" driverClassName="org.hsqldb.jdbcDriver" .../>

   -  ii. Add a new one. For MySQL as an example, you will just need to
      copy the sample in ``conf/server-mysql.xml``:

      .. code:: xml

			  <!-- eXo IDM Datasource for portal -->
				<Resource name="exo-idm_portal" auth="Container" type="javax.sql.DataSource"
				...
				username="plf" password="plf" driverClassName="com.mysql.jdbc.Driver" url="jdbc:mysql://localhost:3306/plf?autoReconnect=true" />
			  <!-- eXo JCR Datasource for portal -->
				<Resource name="exo-jcr_portal" auth="Container" type="javax.sql.DataSource"
				...
				username="plf" password="plf" driverClassName="com.mysql.jdbc.Driver" url="jdbc:mysql://localhost:3306/plf?autoReconnect=true" />
			  <!-- eXo JPA Datasource for portal -->
				<Resource name="exo-jpa_portal" auth="Container" type="javax.sql.DataSource"
				...
				username="plf" password="plf" driverClassName="com.mysql.jdbc.Driver" url="jdbc:mysql://localhost:3306/plf?autoReconnect=true&amp;characterEncoding=utf8" />

   -  iii. Edit username, password, url (host, port and database name).
      Besides MySQL, if you are using Enterprise Edition, you will find the
      samples for other RDBMSs in ``conf/server-*.xml``.

   -  iv. Append this character encoding to the url in case your 
      database character set is ``utf8``. For example, in MySQL (this 
      is different between RDBMSs):

      .. code:: xml

          url="jdbc:mysql://localhost:3306/plf?autoReconnect=true&amp;characterEncoding=utf8"

2. Set the SQL Dialect if necessary. This step is not mandatory because 
   the dialect is auto-detected in most cases. You only need to take care of it
   for some particular RDBMSs:

   -  i. For JCR, only when you are using MySQL and database character set
      ``utf8``, you need to edit ``gatein/conf/exo.properties`` file to
      have:

      ::

          exo.jcr.datasource.dialect=MySQL-UTF8

   -  ii. For IDM, eXo Platform detects automatically the dialect for
      RDBMSs listed
      `here <http://docs.jboss.org/hibernate/orm/4.1/manual/en-US/html_single/#configuration-optional-dialects>`__.
      Only when your RDBMS is **not** in the list, for example *Postgres
      Plus Advanced Server 9.2*, you will need to edit
      ``gatein/conf/exo.properties`` file to have:

      ::
 
          hibernate.dialect=org.hibernate.dialect.PostgresPlusDialect

      Or for *Oracle Database 12c*:

      ::

          hibernate.dialect=org.hibernate.dialect.Oracle10gDialect

If you have not created ``exo.properties`` yet, see :ref:`Configuration overview <Configuration.ConfigurationOverview>`.

3. Download the JDBC driver for Java and install it to
   ``$PLATFORM_TOMCAT_HOME/lib``.

.. tip:: Normally you can find out an appropriate driver for your JDK from
		 your database vendor website. For example, for MySQL:
		 http://dev.mysql.com/downloads/connector/j/, and for Oracle:
		 http://www.oracle.com/technetwork/database/features/jdbc/index-091264.html.

.. _ConfigureDBJboss:

For JBoss
~~~~~~~~~~~

1. Configure the datasources.

   -  i. Edit ``standalone/configuration/standalone-exo.xml`` to remove the
      default HSQL configuration:

      .. code:: xml

				  <!-- eXo IDM Datasource for PLF -->
				   <datasource enabled="true" jndi-name="java:/comp/env/exo-idm_portal" jta="false" pool-name="exo-idm_portal" spy="false" use-ccm="true" use-java-context="true">
				   <!-- HSQLDB -->
				     <driver>hsqldb-driver.jar</driver>
				     <driver-class>org.hsqldb.jdbcDriver</driver-class>
				     <connection-url>jdbc:hsqldb:file:${exo.data.dir}/hsql/exo-plf;shutdown=true;hsqldb.write_delay=false;hsqldb.tx=mvcc;</connection-url>
				     ...
				  <!-- eXo JCR Datasource for PLF -->
				   <datasource enabled="true" jndi-name="java:/comp/env/exo-jcr_portal" jta="false" pool-name="exo-jcr_portal" spy="false" use-ccm="true" use-java-context="true">
				   <!-- HSQLDB -->
					   <driver>hsqldb-driver.jar</driver>
					   <driver-class>org.hsqldb.jdbcDriver</driver-class>
					   <connection-url>jdbc:hsqldb:file:${exo.data.dir}/hsql/exo-plf;shutdown=true;hsqldb.write_delay=false;hsqldb.tx=mvcc;</connection-url>
					    ...
				  <!-- eXo JPA Datasource for PLF -->
				   <datasource enabled="true" jndi-name="java:/comp/env/exo-jpa_portal" jta="false" pool-name="exo-jpa_portal" spy="false" use-ccm="true" use-java-context="true">
				   <!-- HSQLDB -->
				    <driver>hsqldb-driver.jar</driver>
				    <driver-class>org.hsqldb.jdbcDriver</driver-class>
				    <connection-url>jdbc:hsqldb:file:${exo.data.dir}/hsql/exo-plf;shutdown=true;hsqldb.write_delay=false;hsqldb.tx=mvcc;</connection-url>
				     ...

   -  ii. For MySQL as an example, need to uncomment some lines in the
      file, edit driver, username, password, url:

      .. code:: xml

		   <!-- MySQL -->
		   <driver>mysql-connector-java-5.1.44.jar_com.mysql.jdbc.Driver_5_1</driver>
		   <driver-class>com.mysql.jdbc.Driver</driver-class>
		   <connection-url>jdbc:mysql://localhost:3306/plf?autoReconnect=true</connection-url>
		   ...
		   <security>
			   <user-name>root</username>
			   <password>exoplf</password>
		   </security>
		   <validation>
			   ...
			   <!-- MySQL -->
			   <exception-sorter class-name="org.jboss.jca.adapters.jdbc.extensions.mysql.MySQLExceptionSorter" />
			   <valid-connection-checker class-name="org.jboss.jca.adapters.jdbc.extensions.mysql.MySQLValidConnectionChecker" />

.. note:: The recommended version of MySQL JDBC driver for eXo Platfom 
          5.0 is **5.1.44**. This driver version has two JDBC driver
          implementations **com.mysql.jdbc.Driver** and
          **com.mysql.fabric.jdbc.FabricMySQLDriver**, so Jboss deploys
          them as ``mysql-connector-java-5.1.44.jar_com.mysql.jdbc.Driver_5_1`` 
          and ``mysql-connector-java-5.1.44.jar_com.mysql.fabric.jdbc.FabricMySQLDriver_5_1``.
          Therefore the ``driver`` parameter must be set to
          **mysql-connector-java-5.1.44.jar\_com.mysql.jdbc.Driver\_5\_1**,
          as in the above example.
          
          

  -  iii. Append this character encoding to the url in case your database
     character set is ``utf8``. For example, in MySQL (this is different
     between RDBMSs):

      .. code:: xml

           <connection-url>jdbc:mysql://localhost:3306/plf?autoReconnect=true&amp;characterEncoding=utf8</connection-url>

2. Set the SQL Dialect if necessary.

   This step is not mandatory because the dialect is auto-detected in most
   cases. You only need to take care of it for some particular RDBMSs:

   -  i. For JCR, only when you are using MySQL and database character set
      ``utf8``, you need to edit
      ``standalone/configuration/gatein/exo.properties`` file to have:

      ::

          exo.jcr.datasource.dialect=MySQL-UTF8

   -  ii. For IDM, eXo Platform detects automatically the dialect for
      RDBMSs listed
      `here <http://docs.jboss.org/hibernate/orm/4.1/manual/en-US/html_single/#configuration-optional-dialects>`__.
      Only when your RDBMS is **not** in the list, for example *Postgres
      Plus Advanced Server 9.2*, you will need to edit
      ``standalone/configuration/gatein/exo.properties`` file to have:

      ::

          hibernate.dialect=org.hibernate.dialect.PostgresPlusDialect

If you have not created ``exo.properties`` yet, see :ref:`Configuration overview <Configuration.ConfigurationOverview>`.

3. Download the JDBC driver for Java and install it to ``$PLATFORM_JBOSS_HOME/standalone/deployments``.

.. tip:: Normally you can find out an appropriate driver for your JDK from
         your database vendor website. For example, for MySQL:
         http://dev.mysql.com/downloads/connector/j/, and for Oracle:
         http://www.oracle.com/technetwork/database/features/jdbc/index-091264.html.

.. note:: Particularly to MySQL, this fast install method might not work for
		  some couples of MySQL server and driver versions. If it happens to
		  you, solve it by installing the driver as a *module*. See details
		  below.

**Installing JDBC driver as a JBoss module**

This alternative method is applied to solve a deployment problem with
some couples of MySQL server and driver versions. There is no statement
that indicates exactly the versions, but the problem likely happens with
some most recent versions, such as MySQL server 5.6.19 and
mysql-connector-java-5.1.35-bin.jar.

-  When it happens, you will get a JBAS014775 message like the
   following, and Platform JBoss does not start successfully ::

       JBAS014775:    New missing/unsatisfied dependencies:
             service jboss.jdbc-driver.mysql-connector-java-5_1_35-bin_jar (missing) dependents: 
             [service jboss.data-source.java:/comp/env/exo-idm_portal, 
             service jboss.driver-demander.java:/comp/env/exo-jcr_portal, 
             service jboss.driver-demander.java:/comp/env/exo-idm_portal, JBAS014799: ... and 3 more ]

Then you should remove the jar from
``$PLATFORM_JBOSS_HOME/standalone/deployments/`` and install it to JBoss
modules as follows:

1. Create a new folder: ``$PLATFORM_JBOSS_HOME/modules/com/mysql/main/``.

2. Place the driver (.jar) in the created folder.

3. Create a ``module.xml`` file in the created folder, with the following
   content:

	.. code:: xml

		<?xml version="1.0" encoding="UTF-8"?>
		<module xmlns="urn:jboss:module:1.0" name="com.mysql">  
			<resources>  
				<resource-root path="mysql-connector-java-5.1.35-bin.jar"/>  <!--replace this with your jar file-->
			</resources>  
			<dependencies>  
				<module name="javax.api"/>
			</dependencies>  
		</module>

4. Modify the datasources configuration in ``standalone-exo.xml`` to
   declare a driver in *drivers* tag and reference to it in *datasource*
   tag:

	.. code:: xml

		<subsystem xmlns="urn:jboss:domain:datasources:1.1">
			<datasources>
				<!-- eXo IDM Datasource for PLF -->
				<datasource enabled="true" jndi-name="java:/comp/env/exo-idm_portal" jta="false" pool-name="exo-idm_portal" spy="false" use-ccm="true" use-java-context="true">

					<driver>com.mysql</driver>
					<connection-url>jdbc:mysql://localhost:3306/plf?autoReconnect=true</connection-url>

					<!-- note: don't put driver-class tag here-->
					...
				</datasource>
				<!-- similar to other datasources, JCR (and Quartz in cluster) -->

				<drivers>
					<driver name="com.mysql" module="com.mysql">
						<xa-datasource-class>com.mysql.jdbc.jdbc2.optional.MysqlXADataSource</xa-datasource-class>
						<driver-class>com.mysql.jdbc.Driver</driver-class>
					</driver>
				</drivers>
			</datasources>
		</subsystem>


.. _Database.DockerDatabase:

===========================================
Configuring database for a docker container
===========================================

eXo Platform community docker image supports both HSQL and MySQL databases.
HSQL database is the default one for testing purposes. To move into
production environment, it is highly recommended to connect the docker
image to MySQL database.

For that purpose, you should specify some environment variables to the
container startup command to make it work. The table below lists these
needed variables:

+--------------------+--------------+--------------+--------------------------------+
| Variable           | Mandatory    | Default      | Description                    |
|                    |              | value        |                                |
+====================+==============+==============+================================+
| EXO\_DB\_TYPE      | No           | hsqldb       | The database type to be used,  |
|                    |              |              | Community edition only         |
|                    |              |              | supports hsqldb and mysql      |
|                    |              |              | databases.                     |
+--------------------+--------------+--------------+--------------------------------+
| EXO\_DB\_HOST      | No           | mysql        | The host to connect to the     |
|                    |              |              | database server.               |
+--------------------+--------------+--------------+--------------------------------+
| EXO\_DB\_PORT      | No           | 3306         | The port to connect to the     |
|                    |              |              | database server.               |
+--------------------+--------------+--------------+--------------------------------+
| EXO\_DB\_NAME      | No           | exo          | The name of the database /     |
|                    |              |              | schema to use.                 |
+--------------------+--------------+--------------+--------------------------------+
| EXO\_DB\_USER      | No           | exo          | The username to connect to the |
|                    |              |              | database.                      |
+--------------------+--------------+--------------+--------------------------------+
| EXO\_DB\_PASSWORD  | Yes          |              | The password to connect to the |
|                    |              |              | database.                      |
+--------------------+--------------+--------------+--------------------------------+

An example of the execution command to use MySQL database for eXo Platform
community docker image:

::

    docker run -d \
        -p 8080:8080 \
        -e EXO_DB_TYPE="mysql" \
        -e EXO_DB_HOST="mysql.server-hostname.org" \
        -e EXO_DB_USER="exo" \
        -e EXO_DB_PASSWORD="my-secret-pw" \
        exoplatform/exo-community
        

For more details, you can look at this
`documentation <https://hub.docker.com/r/exoplatform/exo-community/>`__.


.. _Database.JNDI:

====================
Datasource JNDI name
====================

As said previously, eXo Platform uses two datasources, *exo-idm\_portal* and
*exo-jcr\_portal*. If for any reason you change those names in
datasource configuration (xml file), you need to match them in some
other files.

.. note:: The properties file (``exo.properties``) will not take "\_portal"
		  suffix as it is appended automatically by eXo, as detailed below.

There is a constraint that the suffix of datasource JNDI names must be
"\_portal". Take JCR as example, it uses the following property:

::

    exo.jcr.datasource.name=java:/comp/env/exo-jcr

to look up a datasource for the portal. Because the core of eXo Platform
is designed for supporting multi-portal, there are theoretically
different datasources for different portals. Consequently this property
is treated as datasource name's prefix, and the portal name (knowing
that it is "portal" by default) is appended to complete the name in JNDI
lookup.

So if you change the JDNI names *exo-idm\_portal* and *exo-jcr\_portal*,
you need to edit the following properties:

::

    # JNDI Name of the IDM datasource
    exo.idm.datasource.name=java:/comp/env/exo-idm
    ...
    # name of the datasource that will be used by eXo JCR
    exo.jcr.datasource.name=java:/comp/env/exo-jcr

in ``gatein/conf/exo.properties`` (Tomcat), or
``standalone/configuration/gatein/exo.properties`` (JBoss).

If you have not created ``exo.properties`` yet, see `Configuration
overview <#PLFAdminGuide.Configuration.ConfigurationOverview>`__.

**Particularly in Tomcat**, you also need to edit
``conf/Catalina/localhost/context.xml.default`` file:

.. code:: xml

    <ResourceLink name="exo-jcr_portal" global="exo-jcr_portal" type="javax.sql.DataSource"/>
    <ResourceLink name="exo-idm_portal" global="exo-idm_portal" type="javax.sql.DataSource"/>


.. _Database.FileStorage:

============
File Storage
============

In order to store binary files uploaded by users (such as attachments,
documents or profile pictures) eXo Platform needs a file storage subsystem.
There are two supported methods to perform file storage:

-  File System: files are stored in the server file system in a folder
   structure as regular files.

-  RDBMS: files are stored in the database as BLOBs.

.. note:: You should choose either to store binary data in the database or
		  through file system by setting the suitable value to the variable
		  :ref:`exo.files.binaries.storage.type <Configuration.FileStorage>`.
		  Choosing one file storage than the other depends on your data type
		  and size.

.. warning:: Note that in case of using database as file storage, binary files
			 are stored in the database table FILES\_BINARY however in case of
			 using file system storage, binary files are loaded from a folder of
			 files. If you choose to store data through file system then you want
			 to change to database or vice versa, note that you will lose data
			 files because the source of binary files is different in the two
			 cases. Consequently, you should choose the suitable file storage. if
			 you absolutely need to migrate from rdbms to fs or vice versa, you
			 need to **implement a migration tool allowing to maintain your
			 binary files.**

.. _FSStorage:

File System storage
~~~~~~~~~~~~~~~~~~~~

-  The primary advantage of storing files in the file system is that it
   is easier to see the actual files.

-  Through file system, it is possible to backup and manipulate files
   separately of the database.

-  Files are stored off the database keeping it lighter.

.. note:: The supported file system in eXo Platform is **NTFS**.

.. _RDBMSStorage:

RDBMS storage
~~~~~~~~~~~~~~

Storing files in the database has many advantages such as:

-  The database backup will contain everything: It is easier for backup
   since only the database must be saved (and optionally the search
   indices). There is no need for a shared file system in cluster mode
   (database is shared in cluster mode).

-  The database can enforce more subtle controls on access to the files.

-  In case of changing files, the DBMS knows how to manage transactions.

.. _Comparison:

Comparing file system and RDBMS storage
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

+------------------+-----------------------------+-----------------------------+
| Feature          | RDBMS                       | File system                 |
+==================+=============================+=============================+
| Transaction      | A basic feature provided by | Most of file systems don't  |
| support: This    | all databases.              | have this feature.          |
| feature is       |                             | Transactional NTFS(TxF),    |
| needed in case   |                             | Sun ZFS, and Veritas VxFS,  |
| of concurrent    |                             | support this feature. With  |
| access to the    |                             | eXo Platform transaction is |
| same dataset.    |                             | managed at application      |
|                  |                             | level.                      |
+------------------+-----------------------------+-----------------------------+
| Fast indexing:   | Databases allow indexing    | This is not offered by most |
| It helps fast    | based on any attribute or   | of file systems.            |
| retrieval of     | data-property (i.e SQL      |                             |
| data.            | columns).                   |                             |
+------------------+-----------------------------+-----------------------------+
| Consistency      | It is feasable by all       | File systems also support   |
| check            | databases.                  | data consistency check.     |
+------------------+-----------------------------+-----------------------------+
| Clean unused     | Possible with database.     | File system also ensure     |
| data             |                             | data cleanup.               |
+------------------+-----------------------------+-----------------------------+
| Clustering       | Advanced databases offer    | File systems still don’t    |
|                  | clustering capabilities     | support this option (The    |
|                  | (such as Oracle and Mysql). | only exceptions are Veritas |
|                  |                             | CFS and GFS.                |
+------------------+-----------------------------+-----------------------------+
| Replication      | It is a commodity with      | File systems provide        |
|                  | databases.                  | replication feature but     |
|                  |                             | still need evolution.       |
+------------------+-----------------------------+-----------------------------+
| Relational View  | Databases offer easy means  | File systems have little or |
| of Data          | to relate stored data. It   | no information about the    |
|                  | also offers a flexible      | data stored in the files    |
|                  | query language (SQL) to     | because it stores files in  |
|                  | retrieve the data.          | a stream of bytes.          |
+------------------+-----------------------------+-----------------------------+

.. note:: When using eXo Platform in cluster mode and choosing to use 
          **file system for binary files storage**, the files folder 
          **should be shared between all the cluster nodes**.

.. _FSBackupRequirements:

File storage data backup requirements
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. note:: To back up data, eXo Platform should be **stopped**.

In case of file system storage, to make the binary files backup, you
need to:

-  Copy the folder of files.

-  Backup these 3 database tables: FILES\_FILES, FILES\_NAMESPACES,
   FILES\_ORPHAN\_FILES.

.. warning:: In case of using the database for file storage, the tables related
			 to file storage are: FILES\_BINARY, FILES\_FILES, FILES\_NAMESPACES
			 and FILES\_ORPHAN\_FILES, but you should **backup the whole
			 database** since there are links between these tables and other
			 eXo Platform tables.

For more details about data backup in general, you can take a look on
the section :ref:`Backup and Restore <#PLFAdminGuide.Backup.BackingUpPlatform>`.

.. _FSConfiguration:

Configuration
~~~~~~~~~~~~~~

Some parameters are configurable in :ref:`exo.properties <Configuration.ConfigurationOverview>`.
More details could be found :ref:`File Storage Configuration <Configuration.FileStorage>`.


.. _Database.ChatDatabase:

==============================
Configuring eXo Chat database
==============================

1. eXo Chat uses `MongoDB database <http://docs.mongodb.org>`__. You can
   install it via this
   `link <https://www.mongodb.com/download-center#atlas>`__, the
   recommended version for eXo Platform 5.0 is **3.4**.

2. Configure the database parameters in ``chat.properties`` or
   ``exo.properties``. The files are located in
   ``$PLATFORM_TOMCAT_HOME/gatein/conf`` for Tomcat and
   ``$PLATFORM_JBOSS_HOME/standalone/configuration/gatein`` for Jboss.

More details in :ref:`chat configuration <Configuration.ChatConfiguration>`
section.

The parameters to set are the following:

-  standaloneChatServer: This parameter accepts a boolean value : true
   for standalone mode, false for embedded mode.

-  dbServerType: Default value is mongo which is the value that should
   be used.

-  dbServerHost: The host of MongoDB database.

-  dbServerPort: The port with which you will connect to MongoDB.

-  dbServerHosts: The MongoDB nodes to connect to, as a comma-separated
   list of ``<host:port>`` values. For example
   "host1:27017,host2:27017,host3:27017".

-  dbName: The name of the MongoDB database for eXo Chat.

-  dbAuthentication: Set to true if authentication is needed to access
   to MongoDB.

-  dbUser: The username with which you should connect of the previous
   value is set to true.

-  dbPassword: The password for MongoDB authentication, it should be
   modified for security reasons.

Here is an example for the chat configuration file (the database
configuration is in the section *MongoDB*):

::

    ##########################
    #
    # MongoDB
    #
    dbServerHost=localhost
    dbServerPort=27017
    dbName=chat
    dbAuthentication=false
    dbUser=admin
    dbPassword=pass

    ##########################
    #
    # Chat Server
    #
    standaloneChatServer=false
    chatPassPhrase=chat
    chatServerBase=http://127.0.0.1:8080
    chatServerUrl=/chatServer
    chatPortalPage=/portal/intranet/chat
    chatCronNotifCleanup=0 0/60 * * * ?
    teamAdminGroup=/platform/users
    chatReadTotalJson=200

    ############################
    #
    # Chat Client updates
    #
    chatIntervalSession=60000
    chatTokenValidity=60000
    chatUploadFileSize=100
    request.timeout=15000

.. warning:: The parameters ``dbServerPort`` and ``dbServerHost`` are deprecated
		     and should be replaced by the parameter ``dbServerHosts``.

.. note:: For a quick setup, the Chat add-on by default connects to MongoDB at
		  *localhost:27017* without authentication, so no advanced setup is
		  required if you install MongoDB in the same machine with Platform
		  server.

		  If you secure MongoDB and allow remote connections, you have to
		  configure the add-on, see :ref:`Secured MongoDB <#PLFAdminGuide.Security.MongoDBSecure>`.


.. _Database.FAQs:

==========================
Frequently asked questions
==========================

**Q:** **Any note for Microsoft SQL?**

**A:** Particularly to Microsoft SQL, you need to add
**sendStringParametersAsUnicode=false** to the connection url as in the
example below:

.. code:: xml

    <Resource name="exo-idm_portal" auth="Container" type="javax.sql.DataSource"
    initialSize="5" maxActive="20" minIdle="5" maxIdle="15" maxWait="10000"
    validationQuery="SELECT 1" validationQueryTimeout="5"
    testWhileIdle="true" testOnBorrow="true" testOnReturn="false"
    timeBetweenEvictionRunsMillis="30000" minEvictableIdleTimeMillis="60000"
    removeAbandoned="true" removeAbandonedTimeout="300" logAbandoned="false"
    poolPreparedStatements="true"
    username="plf" password="plf" driverClassName="com.microsoft.sqlserver.jdbc.SQLServerDriver" 
    url="jdbc:sqlserver://localhost:1433;databaseName=plf;sendStringParametersAsUnicode=false" />

This parameter is necessary to avoid any possible performance problem.
MS SQL Server differentiates Unicode data types (such as *nchar*) from
ASCII data types (such as *char*). By default (without this parameter),
all the JDBC drivers send strings in Unicode format to SQL Server. When,
for example, doing a comparison on a non-Unicode column, SQL Server
tries to convert data in the table into Unicode first. This conversion
might cause a serious performance issue.

The parameter is a bit different between JDBC Drivers. See more details
`here <http://emransharif.blogspot.com/2011/07/performance-issues-with-jdbc-drivers.html>`__.

**Q:** **How to remove the idle MySQL connections?**

**A:** Some RDBMSs, like MySQL, close the idle connections after a
period (8 hours on MySQL by default). Thus, a connection from the pool
will be invalid and any application SQL command will fail, resulting in
errors as below:

::

    org.hibernate.SessionException: Session is closed!
    at org.hibernate.impl.AbstractSessionImpl.errorIfClosed(AbstractSessionImpl.java:72)
    at org.hibernate.impl.SessionImpl.getTransaction(SessionImpl.java:1342)

To avoid this, you can use DBCP to monitor the idle connections and drop
them when they are invalid, with the **testWhileIdle**,
**timeBetweenEvictionRunsMillis**, and **validationQuery** parameters.

The validation query is specific to your RDBMS. For example, on MySQL,
you would use:

.. code:: java

    testWhileIdle="true" timeBetweenEvictionRunsMillis="300000" validationQuery="SELECT 1"

-  **testWhileIdle** activates the idle connections monitoring.

-  **timeBetweenEvictionRunsMillis** defines the time interval between
   two checks in milliseconds (5 minutes in the example).

-  **validationQuery** provides a simple SQL command to validate
   connection to the RDBMS.

For more details, refer to the following:

-  http://markmail.org/message/a3bszoyqbvi5qer4

-  http://stackoverflow.com/questions/15949/javatomcat-dying-database-connection

-  https://confluence.atlassian.com/display/JIRA/Surviving+Connection+Closures

**Q:** **How to enable managed connection?**

**A:** This question is specific to the JCR datasource in Platform JBoss
package.

When you want to use managed connections, set "true" for the
``gatein.jcr.datasource.managed`` property in the
``$PLATFORM_JBOSS_HOME/standalone/configuration/gatein/exo.properties``
file. See :ref:`Configuration overview <Configuration.ConfigurationOverview>`
if you have not created this file yet.

.. code:: java

    gatein.jcr.datasource.managed=true

To be clear, this property needs to be "true" in two cases:

-  You use a **datasource** with JTA enabled:

   .. code:: xml

       <datasource jndi-name="java:/comp/env/exo-jcr_portal" jta="true" .../>

-  You use an **xa-datasource**:

   .. code:: xml

       <xa-datasource  jndi-name="java:/comp/env/exo-jcr_portal" .../>

Using managed connections has pros and cons, so only do it if you know
what you are doing. By default eXo Platform JBoss uses **datasource
jta="false"**.

