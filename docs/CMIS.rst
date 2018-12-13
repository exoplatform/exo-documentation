.. _CMIS:

#####
CMIS
#####

    CMIS add-on is built on top of
    `xCMIS <https://github.com/exoplatform/xcmis>`__ - the open source
    implementation of CMIS.

    `CMIS standard by OASIS <http://www.oasis-open.org/committees/tc_home.php?wg_abbrev=cmis>`__
    defines a domain model and Web Services and Restful AtomPub bindings
    that can be used by applications to work with one or more Content
    Management repositories/systems.

.. note:: CMIS add-on is available for Enterprise Edition only.

    In this chapter:

    -  :ref:`CMIS specification <eXoAddonsGuide.CMIS.Specification>`

       Basic information of CMIS specification by OASIS.

    -  :ref:`xCMIS project <eXoAddonsGuide.CMIS.xCMIS>`

       Introduction to the open source CMIS implementation by eXo.

    -  :ref:`eXo CMIS add-on and configuration <eXoAddonsGuide.CMIS.Addon>`

       How the add-on works in eXo Platform and detailed configuration.

    -  :ref:`CMIS features <eXoAddonsGuide.CMIS.Features>`

       The features provided by the add-on.

    -  :ref:`CMIS usage code
       examples <eXoAddonsGuide.CMIS.CodeExamples>`

       Learn to use the API by examples (Java and JavaScript).

.. _eXoAddonsGuide.CMIS.Specification:

==================
CMIS specification
==================

.. note:: This is related to `Content Management Interoperability Services
          (CMIS) <http://en.wikipedia.org/wiki/Content_Management_Interoperability_Services>`__
          OASIS v1.0 Standard on May 1, 2010.

The CMIS interface is designed to be layered on top of existing Content
Management systems and their existing programmatic interfaces. It is
intended to expose all of the CM systems capabilities through the CMIS
interfaces exhaustively. The CMIS specification defines the followings:

-  A standard "domain model" for an ECM system - a set of core concepts
   included in all modern ECM systems, such as Object Types, properties,
   folders, documents, versions, and relationships; and a set of
   operations performed on those concepts, such as updating documents,
   or navigating via a folder hierarchy.

-  The way to bind the CMIS domain model to two different web service
   protocols, including the Simple Object Access Protocol (SOAP) used in
   many ECM systems, and the Atom used in many Web 2.0 applications.

.. note:: The SOAP protocol is not implemented in eXo CMIS add-on.

The CMIS specification provides a Web services interface that can:

-  Work over existing repositories, enabling customers to build and
   leverage applications against multiple repositories.

-  Decouple Web services and content from the content management
   repository, enabling customers to manage content independently.

-  Provide common Web services and Web 2.0 interfaces to dramatically
   simplify the application development.

-  Build the development platform and language agnostic.

-  Support the composite application development and mashups by the
   business or IT analysts.

.. _eXoAddonsGuide.CMIS.xCMIS:

=============
xCMIS project
=============

xCMIS includes the client side frameworks for integrating content from
different enterprise repositories, according to 
`CMIS standard <http://www.oasis-open.org/committees/tc_home.php?wg_abbrev=cmis>`__.

The project is to make joining Enterprise Content repositories simpler
by offering CMIS abilities and exposing them to language-independent
CMIS clients via the most convenient protocol.

**xCMIS project**:

-  Is embedded, packaged as the J2EE Web archive (WAR) and prepared
   "download and go" Tomcat bundle.

-  Has a live demo with the full-featured CMIS Expert client, which is
   accessible via xcmis.org site and with prepared "download and go"
   Tomcat bundle (the client is accessible as the remote gadget).

-  Is embedded in eXo Platform to create the special xCMIS JCR repository and
   access it with any CMIS client.

-  Tested with third-party CMIS clients, such as IBM CMIS Firefox
   Connector and CMIS Spaces Flex+AIR client. Either local repository,
   or can be used as a CMIS repository's endpoint URL for these, or
   other types of clients.

**Benefits of xCMIS**:

-  xCMIS is an open source, server side Java CMIS implementation,
   enabling to expose content in the existing content repositories
   according to the protocols defined in the CMIS specification.

-  xCMIS will give developers a way to make their content repositories
   "pluggable" on the server side based on the internal Storage Provider
   Interface and additional protocol on-demand bindings.

-  xCMIS will provide (several) CMIS client frameworks for
   repository-application and repository-repository interactions. The
   programming language and supported protocol can be selected by users.
   For example, the reasonable choice for using web applications,
   gadgets, and/or mashups is JavaScript, or GWT over REST AtomPub,
   while for inter-repository exchange, it may be Java over Web Services
   like WSDL/SOAP.

-  Both the server and client sides of xCMIS are easily integrated in
   eXo Platform infrastructure. In particular, xCMIS exposes the eXo JCR
   content repository and provides a framework for building web
   applications and gadgets for the GateIn portal.

The xCMIS project is distributed under the LGPL license. You can
download sources on `github <https://github.com/exoplatform/xcmis>`__,
or visit `Community Wiki <http://code.google.com/p/xcmis/w/list>`__ for
more information.

.. _eXoAddonsGuide.CMIS.Addon:

=================================
eXo CMIS add-on and configuration
=================================

eXo CMIS add-on is built on the top of xCMIS embedded in eXo Platform to
expose the Content drives as the CMIS repositories. The CMIS features
are implemented as a set of components deployed on the eXo Container
using XML files to describe the service configuration.


.. note:: SOAP protocol binding is not implemented in eXo CMIS add-on.

See how eXo CMIS works in the figure below.

|image0|

The Content drives exposure is implemented as a Content storage provider
to the xCMIS SPI. The storage provider uses mappings from the Content's
**ManageDriveService** to actual JCR nodes. **AtomPub** bindings make
Content structure available via CMIS standard API.

.. note:: The getRepositories service endpoint is: *http://localhost:8080/rest/private/cmisatom*.

**Configuration**

You do not need to configure anything to make it work, unless you want
to enable CMIS index and search.

The configuration is done in
``ecm-xcmis-extension.war!/WEB-INF/conf/xcmis-configuration/xcmis-configuration.xml``.

The following component -
``org.exoplatform.ecms.xcmis.sp.DriveCmisRegistry`` that extends
``CmisRegistry`` - is used to expose Content drives to the CMIS
repositories:

.. code:: xml

    <component>
        <type>org.exoplatform.ecms.xcmis.sp.DriveCmisRegistry</type>
        <init-params>
            <!-- Disabled by default. Uncomment if you need query support in CMIS. -->
            <!-- value-param>
                <name>indexDir</name>
                <value>${gatein.jcr.index.data.dir}/cmis-index${container.name.suffix}</value>
            </value-param-->
            <value-param>
                <name>exo.cmis.renditions.persistent</name>
                <value>true</value>
            </value-param>
            <values-param>
                <name>renditionProviders</name>
                <description>Redition providers classes.</description>
                <!-- <value>org.xcmis.renditions.impl.PDFDocumentRenditionProvider</value> -->
                <value>org.xcmis.renditions.impl.ImageRenditionProvider</value>
            </values-param>
        </init-params>
    </component>

-  **indexDir** - The directory where the lucene index will be placed.
   It is disabled by default.

-  **exo.cmis.renditions.persistent** - Indicates if a rendition of the
   document (thumbnails) should be persisted in the JCR. The allowed
   value is **true** or **false**.

-  **renditionProviders** - A set of FQN of classes which can be used as
   Rendition Providers. Classes which implement the
   **org.xcmis.spi.RenditionProvider** interface are used to preview the
   CMIS objects (thumbnails).


.. note:: In most cases, it is not required to change anything in the xCMIS
          configuration. In case of any change on the indexer storage
          location, uncomment the **indexDir** value parameter and point it to
          the actual location.

.. _eXoAddonsGuide.CMIS.Addon.JCR:

Required nodetypes and namespaces in JCR
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The following configuration is mandatory for JCR to work correctly (this
is done in the add-on already):

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.services.jcr.RepositoryService</target-component>
        <component-plugin>
            <name>add.namespaces</name>
            <set-method>addPlugin</set-method>
            <type>org.exoplatform.services.jcr.impl.AddNamespacesPlugin</type>
            <init-params>
                <properties-param>
                    <name>namespaces</name>
                    <property name="cmis" value="http://www.exoplatform.com/jcr/cmis/1.0"/>
                    <property name="xcmis" value="http://www.exoplatform.com/jcr/xcmis/1.0"/>
                </properties-param>
            </init-params>
        </component-plugin>
        <component-plugin>
            <name>add.nodeType</name>
            <set-method>addPlugin</set-method>
            <type>org.exoplatform.services.jcr.impl.AddNodeTypePlugin</type>
            <init-params>
                <values-param>
                    <name>autoCreatedInNewRepository</name>
                    <description>Node types configuration file</description>
                    <value>jar:/conf/cmis-nodetypes-config.xml</value>
                </values-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

.. _eXoAddonsGuide.CMIS.Addon.SearchAndIndex:

CMIS search and index
~~~~~~~~~~~~~~~~~~~~~~~

The CMIS standard defines a query language based on a subset of the
SQL-92 grammar (ISO/IEC 9075: 1992 -- Database Language SQL), with a few
extensions to enhance its filtering capability for the CMIS data model,
such as existential quantification for multi-valued property, full-text
search, and folder membership.

.. warning:: CMIS search is disabled by default in eXo CMIS. Uncomment the
             **indexDir** parameter if you need the query support in CMIS. To
             discover the search capability, check the table below.

CMIS Relational View
----------------------

The relational view of a CMIS repository consists of a collection of
virtual tables that are defined on the top of the CMIS data model. A
virtual table exists for every **queryable** object type (content type
if you prefer) in the repository. Each row in these virtual tables
corresponds to an instance of the corresponding object type (or one of
its subtypes). A column exists for every property that the object type
has.

Query Capabilities
--------------------

+---------------------------------------+------------------------------------------------------------------------+
| **Capability**                        | **Value**                                                              |
+=======================================+========================================================================+
| **capabilityQuery**                   | ``bothcombined`` (if **indexDir** is configured; otherwise ``none``)   |
+---------------------------------------+------------------------------------------------------------------------+
| **capabilityJoin**                    | ``none``                                                               |
+---------------------------------------+------------------------------------------------------------------------+
| **capabilityPWCSearchable**           | ``false``                                                              |
+---------------------------------------+------------------------------------------------------------------------+
| **capabilityAllVersionsSearchable**   | ``false``                                                              |
+---------------------------------------+------------------------------------------------------------------------+

Configuration
--------------

To be able to provide full-text search capabilities, xCMIS uses its own
index. The following is the configuration parameter:

+-----------------+---------------+----------------------------------------------------------------------------------------------------+
| **Parameter**   | **Default**   | **Description**                                                                                    |
+=================+===============+====================================================================================================+
| **indexDir**    | none          | The location of the index directory. This parameter is mandatory for the default implementation.   |
+-----------------+---------------+----------------------------------------------------------------------------------------------------+

For example, to set up the index directory:

.. code:: xml

    <component>
        <type>org.exoplatform.ecms.xcmis.sp.DriveCmisRegistry</type>
        <init-params>
            <value-param>
            <name>indexDir</name>
            <value>${gatein.jcr.index.data.dir}/cmis-index${container.name.suffix}</value>
            </value-param>
            ...
        </init-params>
    </component>

Indexing atomicity and durability
-----------------------------------

-  **Write-ahead logging**

To be able to provide index consistency and recovery in case of
unexpected crashes or damages, XCMIS uses `write-ahead
logging <http://en.wikipedia.org/wiki/Write-ahead_logging>`__ (WAL)
technique. Write-ahead logging is a standard approach to transaction
logging. Briefly, WAL's centre concept is "changes of data files
(indexes)" that must be written only after those changes have been
logged, that is, when the change log records have been flushed to
permanent storage. If you follow this procedure, you do not need to
flush data pages to disk on every transaction commit, because it is
known in the event of a crash, and the index can be recovered by using
the log: any changes that have not been applied to the data pages can be
redone from the log records. (This is roll-forward recovery, also known
as REDO.)

A major benefit of using WAL is a significantly reduced number of disk
writes, because only the log file needs to be flushed to disk at the
time of transaction commit, rather than every data file changed by the
transaction.

-  **Recovering uncommitted transaction**

When you start Indexer, it will check uncommitted transaction logs. If
at least one log exists, recovering process will be started. Indexer
will read all logs and extract added, updated and removed UUIDs into a
set. Then, indexer walks through this set and checks objects against
UUID. If the object exists, the indexer will put it into the added
document list. In other cases, UUID will be added to the removed
documents list. After that, depending on the list of added and removed
documents, changes will be applied to the index.

-  **Initial index population**

When you run the indexer to check the number of documents in the index.
If there are no documents in the index or the previous re-indexation was
not successful, then re-indexation of all content will be started. The
first step is cleaning old index data. Uncommitted transaction logs and
old persistent data are removed. These data are useless, because
re-indexation of all content will be started. Then, the indexer walks
through all objects and makes Lucene document for each one. Then batches
with less than 100 elements will be saved to the index. After
re-indexation, all logs (WAL) are removed, and all data mentioned on
these change logs are already indexed.

.. note:: If you, as an administrator, get an exception with the message
          "Can't remove reindex flag.", it means that the index restoring was
          finished but file-flag was not removed (see index directory, file
          named as "reindexProcessing"). You can manually remove this
          file-flag, and avoid a new reindex of repository on the JCR start.

.. _eXoAddonsGuide.CMIS.Features:

=============
CMIS features
=============

-  :ref:`Integration with Content <eXoAddonsGuide.CMIS.Features.IntegrationWithContent>`

   How to integrate between Content and CMIS via :ref:`JCR namespaces and nodetypes <eXoAddonsGuide.CMIS.Features.IntegrationWithContent.JCRNamespacesAndNodetypes>`,
   :ref:`Content drives as CMIS Repositories <eXoAddonsGuide.CMIS.Features.IntegrationWithContent.ContentDrivesAsCMISRepositories>`,
   :ref:`Content symlinks <eXoAddonsGuide.CMIS.Features.IntegrationWithContent.ContentSymlinks>`,
   :ref:`CMIS search <eXoAddonsGuide.CMIS.Features.Search>`, and
   :ref:`modifying content via CMIS <eXoAddonsGuide.CMIS.Features.IntegrationWithContent.ModifyingContentViaCMIS>`.

-  :ref:`CMIS Domain Model <eXoAddonsGuide.CMIS.Features.CMISDomainModel>`

   Necessary information about the CMIS Domain Model and some of its
   common entities.

-  :ref:`CMIS Services <eXoAddonsGuide.CMIS.Features.CMISServices>`

   Introduction to the CMIS Services, including Repository, Navigation,
   Object, Multi-filing, Discovery, Versioning, Relationship, Policy and
   ACL.

.. _eXoAddonsGuide.CMIS.Features.IntegrationWithContent:

Integration with Content
~~~~~~~~~~~~~~~~~~~~~~~~~

The Content system provides CMIS access to its content storage features:

-  Content drives

-  Document files and folders

-  Symlinks

-  Categories

To expose Content drives as CMIS repositories, there is a special
extension of **CmisRegistry**.

Working with CMIS is based on reference documents returned by services.
Each CMIS service returns response containing links to other services
describing the Document or operations on it. In most cases, a Document
will be asked by its ID. Some services accept a Document path.

.. note:: Notes for use cases: To access the eXo CMIS services from the client
          side, use the `Curl tool <http://curl.haxx.se/download.html>`__. The
          CMIS AtomPub binding which is based upon the Atom (RFC4287) and Atom
          Publishing Protocol (RFC5023) will be used.

          SOAP binding is not implemented as of eXo Platform 4.0.

.. _eXoAddonsGuide.CMIS.Features.IntegrationWithContent.JCRNamespacesAndNodetypes:

JCR namespaces and nodetypes
------------------------------

CMIS uses specified JCR namespaces **cmis** and **xcmis** internally.

The following nodetypes are supported to expose the content of drives:

-  ``nt:file`` nodetype for representation of ``cmis:document``.

-  ``nt:folder`` for representation of ``cmis:folder``.

Since the CMIS specification does not allow having more root types
except ones described above (``cmis:document`` and ``cmis:folder``), the
``nt:file`` and ``nt:folder`` nodetypes are mapped to CMIS types.

There are two more nodetypes which are used: ``cmis:policy`` and
``cmis:relationship`` which represent the corresponding CMIS types (see
Services description for details).

Additionally, nodetypes used in Content are mapped as follows:

-  ``nt:unstructured`` + extensions as ``cmis:folder``.

-  ``exo:taxonomy`` + extensions as ``cmis:folder``.

In other words, only nodetypes extending ``nt:file``, ``nt:folder``,
``nt:unstructured`` and ``exo:taxonomy`` will be exposed correctly via
CMIS API.

.. warning:: The Content nodetype named ``exo:article`` is not supported by eXo
             CMIS due to uncompliant structure to ``nt:file``.

.. _eXoAddonsGuide.CMIS.Features.IntegrationWithContent.ContentDrivesAsCMISRepositories:

Content drives as CMIS Repositories
---------------------------------------

The Content drive is used to expose as an isolated repository via the
CMIS service. Operations on the repository will reflect the drive
immediately.

.. tip:: When working with CMIS repositories, it is important to understand
         that a repository reflects a Content Drive, which is a sub-tree in
         JCR workspace. Two or more drives can be mapped to the same
         workspace or a sub-tree. As a result, changes in one repository can
         affect others. Refer to the Content drives mappings to know actual
         location of a content you will access or change.

Use Case: Browse Drives via getRepository
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

-  Get the list of these Content drives via CMIS using **Curl**, asking
   **getRepositories** service:

::

    curl -o repos.xml -u root:gtn http://localhost:8080/rest/private/cmisatom/

The output file ``repos.xml`` contains a list of CMIS repositories
(Content drives):

.. code:: xml

    <service>
        <workspace>
            <atom:title type="text">.organization.employees</atom:title>
            <cmisra:repositoryInfo>
                <cmis:repositoryId>.organization.employees</cmis:repositoryId>
                <cmis:repositoryName>.organization.employees</cmis:repositoryName>
                <cmis:rootFolderId>f48349e17f0000010138880df837a1cc</cmis:rootFolderId>
            </cmisra:repositoryInfo>
            ...
        </workspace>
        <workspace><!-- .organization.management.executive-board --></workspace>
        <workspace><!-- .platform.administrators --></workspace>
        <workspace><!-- .platform.users --></workspace>
        <workspace><!-- .platform.web-contributors --></workspace>
        <workspace><!-- Collaboration --></workspace>
        <workspace><!-- Managed Sites --></workspace>
        <workspace><!-- Personal Documents --></workspace>
        <workspace><!-- Trash --></workspace>
    </service>

-  By specifying a repository ID
   (*http://localhost:8080/rest/private/cmisatom/Collaboration*), you
   get the information of that repository.

.. code:: xml

    <service>
        <workspace>
            <atom:title type="text">Collaboration</atom:title>
            <cmisra:repositoryInfo>
                <cmis:repositoryId>Collaboration</cmis:repositoryId>
                <cmis:repositoryName>Collaboration</cmis:repositoryName>
                <cmis:repositoryDescription>xCMIS (eXo SP)</cmis:repositoryDescription>
                <cmis:vendorName>eXo</cmis:vendorName>
                <cmis:productName>xCMIS (eXo SP)</cmis:productName>
                <cmis:productVersion>1.1</cmis:productVersion>
                <cmis:rootFolderId>00exo0jcr0root0uuid0000000000000</cmis:rootFolderId>
                <cmis:latestChangeLogToken/>
                <cmis:cmisVersionSupported>1.0</cmis:cmisVersionSupported>
                <cmis:thinClientURI/>
                <cmis:changesIncomplete>true</cmis:changesIncomplete>
                <cmis:principalAnonymous>__anonim</cmis:principalAnonymous>
                <cmis:principalAnyone>any</cmis:principalAnyone>
                <cmis:capabilities></cmis:capabilities>
                <cmis:aclCapability></cmis:aclCapability>
            </cmisra:repositoryInfo>
            <collection href="http://localhost:8080/rest/private/cmisatom/Collaboration/types"></collection>
            <collection href="http://localhost:8080/rest/private/cmisatom/Collaboration/unfiled"></collection>
            <collection href="http://localhost:8080/rest/private/cmisatom/Collaboration/checkedout"></collection>
            <collection href="http://localhost:8080/rest/private/cmisatom/Collaboration/query"></collection>
            <collection href="http://localhost:8080/rest/private/cmisatom/Collaboration/children/00exo0jcr0root0uuid0000000000000"></collection>
            <cmisra:uritemplate><!-- objectbyid --></cmisra:uritemplate>
            <cmisra:uritemplate><!-- objectbypath --></cmisra:uritemplate>
            <cmisra:uritemplate><!-- query --></cmisra:uritemplate>
            <cmisra:uritemplate><!-- typebyid --></cmisra:uritemplate>
            <cmisra:uritemplate><!-- changes --></cmisra:uritemplate>
            <atom:link title="Type descendants" rel="http://docs.oasis-open.org/ns/cmis/link/200908/typedescendants" type="application/cmistree+xml" href="http://localhost:8080/rest/private/cmisatom/Collaboration/typedescendants"/>
            <atom:link title="Root folder descendants" rel="http://docs.oasis-open.org/ns/cmis/link/200908/rootdescendants" type="application/cmistree+xml" href="http://localhost:8080/rest/private/cmisatom/Collaboration/descendants/00exo0jcr0root0uuid0000000000000"/>
            <atom:link title="Root folder tree" rel="http://docs.oasis-open.org/ns/cmis/link/200908/foldertree" type="application/cmistree+xml" href="http://localhost:8080/rest/private/cmisatom/Collaboration/foldertree/00exo0jcr0root0uuid0000000000000"/>
        </workspace>
    </service>

Here is the collection of services and predefined templates which can be
used from the client side to request resources related to this
repository. For example, to get the Content node of the drive by path,
the **objectbypath** template can be used:

::

    http://localhost:8080/rest/private/cmisatom/{repositoryId}/objectbypath?path={path}&amp;filter={filter}&amp;includeAllowableActions={includeAllowableActions}&amp;includePolicyIds={includePolicyIds}&amp;includeRelationships={includeRelationships}&amp;includeACL={includeACL}&amp;renditionFilter={renditionFilter}

-  Required:

   -  ID repositoryId: The identifier for the repository.

   -  String path: The path to the object.

-  Optional:

   -  String filter

   -  Boolean includeAllowableActions

   -  Enum includeRelationships

   -  String renditionFilter

   -  Boolean includePolicyIds

   -  Boolean includeACL

.. note:: Find the full description of all specified services in the :ref:`CMIS specification <eXoAddonsGuide.CMIS.Specification>`.

.. _eXoAddonsGuide.CMIS.Features.IntegrationWithContent.ContentSymlinks:

Content symlinks
-----------------


Symlinks are used to organize the virtual access to documents in
Content, which is implemented like links in Unix/Linux/Mac OS (refer to
ln command for more details).

Via CMIS, you can get a file using its symlink as well as its real path.

.. note:: Nodetype of symlinks is ``exo:symlink``.

Use Case: Follow Symlinks
^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Log in *intranet* website as a developer role.

2. Go to Administration --> Content --> Sites Explorer --> Site Management on
   the administration bar, then select ``/intranet/documents`` folder.

3. Upload any file (for example ``test.txt``) to ``/intranet/documents``.

4. Go to ``/intranet/categories/intranet`` and add a new category:
   ``/intranet/categories/intranet/news``.

5. Back to ``/intranet/documents/test.txt`` and add this file to that
   category. This will create a symlink of ``/intranet/documents/test.txt``
   in ``/intranet/categories/intranet/news``.

6. Get content of the ``/intranet/categories/intranet/news`` folder via
   CMIS:

   ::

       curl -o news.xml -u root:gtn http://localhost:8080/rest/private/cmisatom/Managed%20Sites/objectbypath?path=/intranet/categories/intranet/news

   The output file (``news.xml``) contains the entry with information about
   the folder, in which you will find a link (to get children) like this:

   .. code:: xml

       <link href="http://localhost:8080/rest/private/cmisatom/Managed%20Sites/children/03dcf0827f00000100cf3b9a4cbf3de4" rel="down" type="application/atom+xml; type=feed"/>

7. Get the children of ``/intranet/categories/intranet/news`` using that
   link:

   ::

       curl -o children.xml -u root:gtn http://localhost:8080/rest/private/cmisatom/Managed%20Sites/children/03dcf0827f00000100cf3b9a4cbf3de4

   The output file (``children.xml`` contains an entry (related to
   ``test.txt``) that has an ID:

   .. code:: xml

		<entry>
			<id>03dd409c7f000001010b7e050789d358</id>
			...
			<title type="text">test.txt</title>
			...
		</entry>

8. Finally get the ``test.txt`` file by using *file* service and the ID:

   ::

       curl -o test.txt -u root:gtn http://localhost:8080/rest/private/cmisatom/Managed%20Sites/file/03dd409c7f000001010b7e050789d358

.. _eXoAddonsGuide.CMIS.Features.IntegrationWithContent.ModifyingContentViaCMIS:

Modifying Content via CMIS
----------------------------


In the previous section, you get a file using *file* service and the
file's ID.

You can modify your local copy of the file and upload it back to the
Content drive using the *file* service again but with PUT method.

::

    curl -T test.txt -X PUT -H "Content-Type:text/plain; charset=UTF-8" -u root:gtn http://localhost:8080/rest/private/cmisatom/Managed%20Sites/file/03dd409c7f000001010b7e050789d358

Then check the new content of ``/intranet/documents/test.txt`` in **Sites Explorer**.

.. _eXoAddonsGuide.CMIS.Features.Search:

CMIS search
-------------

.. note:: To enable query support, follow :ref:`CMIS Add-on configuration <eXoAddonsGuide.CMIS.Addon>` section.

          The service URL is *http://localhost:8080/rest/private/cmisatom/{repositoryId}/query*.
          To use curl to send request (GET and POST), see :ref:`Simple query <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.SimpleQuery>`
          section.

CMIS provides a type-based query service for discovering objects that
match specified criteria by defining a read-only projection of the CMIS
data model into a Relational View.

CMIS query languages are based on a subset of the SQL-92 grammar.
CMIS-specific language extensions to SQL-92 are called out explicitly.
The basic structure of a CMIS query is a SQL statement that MUST include
the following clauses:

-  SELECT (virtual columns): This clause identifies the set of virtual
   columns that will be included in the query results for each row.

-  FROM (Virtual Table Names): This clause identifies which Virtual
   Table(s) the query will run against.

Additionally, a CMIS query MAY include the following clauses:

-  WHERE (conditions): This clause identifies the constraints that rows
   MUST satisfy to be considered a result for the query.

-  ORDER BY (sort specification): This clause identifies the order in
   which the result rows MUST be sorted in the result row set.

Each CMIS ObjectType definition has the following query attributes:

+------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Name                                     | Description                                                                                                                                                                                                                                                                                                                                              |
+==========================================+==========================================================================================================================================================================================================================================================================================================================================================+
| **query name (String)**                  | Is used for query operations on object types. In the SQL statement examples, all object types are queryName. For example, the given queryName matches the specific type of document. For example, in query like "``SELECT * FROM cmis:document``", "``cmis:document``" is queryName pre-configured in Document object type definition.                   |
+------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **queryable (Boolean)**                  | Indicates whether or not this object type is queryable. A non-queryable object type is not visible through the relational view that is used for query, and can not appear in the FROM clause of a query statement.                                                                                                                                       |
+------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **fulltextIndexed (Boolean)**            | Indicates whether objects of this type are full-text indexed for querying via the ``CONTAINS()`` query predicate.                                                                                                                                                                                                                                        |
+------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **includedInSupertypeQuery (Boolean)**   | Indicates whether this type and its subtypes appear in a query of this type's ancestor types. For example, if Invoice is a sub-type of Document, and its value is TRUE for a query on Document type, the matched instances of Invoice will be returned. If this attribute is FALSE, no instances (including matched ones) of Invoice will be returned.   |
+------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Property definition also contains queryName and queryable attributes
with the same usage.

Here are query examples for each case, including:

-  :ref:`Simple query <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.SimpleQuery>`

-  :ref:`Find document by several constraints <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.FindDocumentBySeveralConstraints>`

-  :ref:`Full-text search <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.FulltextSearch>`

-  :ref:`Extended full-text search <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.ExtendedFulltextSearch>`

-  :ref:`Date property comparison <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.DataPropertyComparison>`

-  :ref:`Boolean property comparison <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.BooleanPropertyComparison>`

-  :ref:`IN Constraint <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.InConstraint>`

-  :ref:`Select all documents where the longprop property is not in set <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.SelectAllDocumentsWhereLongpropNotInSet>`

-  :ref:`Select all documents where the longprop property is in set <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.WhereLongpropPropertyNOTNOTInSet>`

-  :ref:`IN\_FOLDER constraint <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.InFolderConstraint>`

-  :ref:`Select all documents that are in a specified folder <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.SelectAllDocumentsInSpecifiedFolder>`

-  :ref:`Select all documents where query supertype is cmis:article <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.SelectAllDocumentsWhereQueySuperTypeCMISArticle>`

-  :ref:`IN\_TREE constraint <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.INTREEConstraint>`

-  :ref:`LIKE Comparison <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.LIKEComparison>`

-  :ref:`LIKE constraint with escape symbols <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.TestLIKEConstraint>`

-  :ref:`NOT constraint <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.NOTConstraint>`

-  :ref:`Property existence <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.PropertyExistence>`

-  :ref:`ORDER BY <eXoAddonsGuide.CMIS.Features.ORDERBY>`

-  :ref:`ORDER BY ASC <eXoAddonsGuide.CMIS.Features.Search.ORDERBYASC>`

-  :ref:`ORDER BY DESC <eXoAddonsGuide.CMIS.Features.Search.ORDERBYDESC>`

-  :ref:`ORDER BY SCORE (as columns) <eXoAddonsGuide.CMIS.Features.Search.ORDERBYSCORE>`

-  :ref:`Not equal comparison (decimal) <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.NotEqualComparisonDecimal>`

-  :ref:`Not equal comparison (string) <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.NotEqualComparisonString>`

-  :ref:`Greater than comparison (>) <eXoAddonsGuide.CMIS.Features.Search.QueryExamples.GreaterThanComparison>`

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.SimpleQuery:

Simple query
^^^^^^^^^^^^^

    **Warning**

    You are looking at documentation for an older release. Not what you
    want? See the `current release
    documentation <https://exo-documentation.readthedocs.io/en/latest/index.html>`__.

Query: Select all ``cmis:document``.

::

    SELECT * FROM cmis:document

    **Note**

    You need to enable query support by following `CMIS Add-on
    configuration <eXoAddonsGuide.CMIS.Addon>`__ section.

That simple query can be executed by curl as follows:

Upload a text file ``test.txt`` to the drive **Collaboration** in Sites
Explorer.

Send the GET request to *query* service by curl:

::

    curl -o result.xml -uroot:gtn http://localhost:8080/rest/private/cmisatom/Collaboration/query?q=SELECT%20*%20FROM%20cmis:document

The output file (``result.xml``) contains an entry of test.txt:

::

    <feed>
        ...
        <cmisra:numItems>1</cmisra:numItems>
        <entry>
            <id>058a68ab7f00000101699284020aa88c</id>
            ...
            <title type="text">test.txt</title>
            ...
        </entry>
        ...
    </feed>

If you want to use POST request, write your query in an xml file
(``cmis:statement`` is required):

.. code:: xml

    <?xml version='1.0' encoding='utf-8'?>
    <cmis:query xmlns='http://www.w3.org/2005/Atom' xmlns:cmis='http://docs.oasis-open.org/ns/cmis/core/200908/'>
        <cmis:statement>SELECT * FROM cmis:document</cmis:statement>
        <cmis:maxItems>10</cmis:maxItems>
        <cmis:skipCount>0</cmis:skipCount>
        <cmis:searchAllVersions>true</cmis:searchAllVersions>
        <cmis:includeAllowableActions>true</cmis:includeAllowableActions>
    </cmis:query>

Then send it by the following command (for example you saved the file as
``query.xml``):

::

    curl -o result.xml -X POST -uroot:gtn http://localhost:8080/rest/private/cmisatom/Collaboration/query -H "Content-Type: text/xml; charset=UTF-8" -d @query.xml

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.FindDocumentBySeveralConstraints:

Find document by several constraints
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Query: Select all documents where ``apollo:propertyBooster`` is 'Saturn
V' and ``apollo:propertyCommander`` is Frank F. Borman, II or James A.
Lovell, Jr.

Initial data:

-  document1: ``apollo:propertyBooster`` - Saturn 1B,
   ``apollo:propertyCommander`` - Walter M. Schirra

-  document2: ``apollo:propertyBooster`` - Saturn V,
   ``apollo:propertyCommander`` - Frank F. Borman, II

-  document3: ``apollo:propertyBooster`` - Saturn V,
   ``apollo:propertyCommander`` - James A. Lovell, Jr.

::

    SELECT * FROM cmis:document WHERE apollo:propertyBooster = 'Saturn V' AND (apollo:propertyCommander = 'Frank F. Borman, II' OR  apollo:propertyCommander = 'James A. Lovell, Jr.')

Query result:

-  document2 and document3.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.FulltextSearch:

Full-text search
^^^^^^^^^^^^^^^^^^

Query: Select all documents that contains the "here" word.

Initial data:

-  document1: content - "There must be test word"

-  document2: content - "Test word is not here"

::

    SELECT * FROM cmis:document WHERE CONTAINS('here')

Query result:

-  document2.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.ExtendedFulltextSearch:

Extended full-text search
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Query: Select all documents that contains "There must" phrase and do not
contain the "check-word" term.

Initial data:

-  document1: content - "There must be test word."

-  document2: content - "Test word is not here. Another check-word."

-  document3: content - "There must be check-word."

::

    SELECT * FROM cmis:document WHERE CONTAINS("There must" - "check-word")

Query result:

-  document1.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.DataPropertyComparison:

Date property comparison
^^^^^^^^^^^^^^^^^^^^^^^^^^

Query: Select all documents where ``cmis:lastModificationDate`` is more
than 2007-01-01.

Initial data:

-  document1: ``cmis:lastModificationDate`` - 2006-08-08

-  document2: ``cmis:lastModificationDate`` - 2009-08-08

::

    SELECT * FROM cmis:document WHERE (cmis:lastModificationDate >= TIMESTAMP '2007-01-01T00:00:00.000Z')"

Query result:

-  document2.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.BooleanPropertyComparison:

Boolean property comparison
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Query: Select all documents where the ``apollo:someProperty`` property
equals to false.

Initial data:

-  document1: ``apollo:someProperty`` - true

-  document2: ``apollo:someProperty`` - false

::

    SELECT * FROM cmis:document WHERE (apollo:someProperty = FALSE)

Query result:

-  document2.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.InConstraint:

IN Constraint
^^^^^^^^^^^^^^

Query: Select all documents where ``apollo:propertyCommander`` is in set
{'Virgil I. Grissom', 'Frank F. Borman, II', 'James A. Lovell, Jr.'}.

Initial data:

-  document1: ``apollo:propertyCommander`` - Walter M. Schirra

-  document2: ``apollo:propertyCommander`` - Frank F. Borman, II

-  document3: ``apollo:propertyCommander`` - James A. Lovell, Jr.

-  document4: ``apollo:propertyCommander`` - Eugene A. Cernan

::

    SELECT * FROM cmis:document WHERE apollo:propertyCommander IN ('Virgil I. Grissom', 'Frank F. Borman, II', 'James A. Lovell, Jr.')

Query result:

-  document2, document3.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.SelectAllDocumentsWhereLongpropNotInSet:

Select all documents where the longprop property is not in set
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Query: Select all documents where the ``apollo:propertyCommander``
property is not in set {'Walter M. Schirra', 'James A. Lovell, Jr.'}.

Initial data:

-  document1: ``apollo:propertyCommander`` - Walter M. Schirra

-  document2: ``apollo:propertyCommander`` - Frank F. Borman, II

-  document3: ``apollo:propertyCommander`` - James A. Lovell, Jr.

-  document4: ``apollo:propertyCommander`` - Eugene A. Cerna

::

    SELECT * FROM cmis:document WHERE apollo:PropertyCommander NOT IN ('Walter M. Schirra', 'James A. Lovell, Jr.')

Query result:

-  document2, document4.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.WhereLongpropPropertyNOTNOTInSet:

Select all documents where the longprop property is in set
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Query: Select all documents where the ``apollo:propertyCommander``
property is in set {'James A. Lovell, Jr.'}.

Initial data:

-  document1: ``apollo:propertyCommander`` - Walter M. Schirra

-  document2: ``apollo:propertyCommander`` - Frank F. Borman, II

-  document3: ``apollo:propertyCommander`` - James A. Lovell, Jr.

-  document4: ``apollo:propertyCommander`` - Eugene A. Cerna

::

    SELECT * FROM cmis:document WHERE  NOT (apollo:propertyCommander NOT IN ('James A. Lovell, Jr.'))

Query result:

-  document3.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.InFolderConstraint:

IN\_FOLDER constraint
^^^^^^^^^^^^^^^^^^^^^^

Query: Select all folders that are in folder1.

Initial data:

-  folder1: id - 123456789

   -  document1: Title - node1

-  folder3:

   -  folder4:

-  folder2:

   -  document2: Title - node2

::

    SELECT * FROM cmis:folder WHERE IN_FOLDER('123456789')

Query result:

-  folder3.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.SelectAllDocumentsInSpecifiedFolder:

Select all documents that are in a specified folder
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Query: Select all documents that are in folder1.

Initial data:

-  folder1: id - 123456789

   -  document1: Title - node1

-  folder2:

   -  document2: Title - node2

::

    SELECT * FROM cmis:document WHERE IN_FOLDER('123456789')

Query result:

-  document1.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.SelectAllDocumentsWhereQueySuperTypeCMISArticle:

Select all documents where query supertype is cmis:article
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Initial data:

-  testRoot: id - 123456789

-  document1: Title - node1 typeID - cmis:article-sports

-  document2: Title - node2 typeID - cmis:article-animals

::

    SELECT * FROM cmis:article WHERE IN_FOLDER('123456789')

Query result:

-  document1, document2.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.INTREEConstraint:

IN\_TREE constraint
^^^^^^^^^^^^^^^^^^^

Query: Select all documents that are in the tree of folder1.

Initial data:

-  folder1: id - 123456789

   -  document1

-  folder2:

   -  document2

::

    SELECT * FROM cmis:document WHERE IN_TREE('123456789')

Query result:

-  document1, document2.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.LIKEComparison:

LIKE Comparison
^^^^^^^^^^^^^^^^

Query: Select all documents where ``apollo:propertyCommander`` begins
with "James".

Initial data:

-  document1: ``apollo:propertyCommander`` - Walter M. Schirra

-  document2: ``apollo:propertyCommander`` - Frank F. James, II

-  document3: ``apollo:propertyCommander`` - James A. Lovell, Jr.

-  document4: ``apollo:propertyCommander`` - Eugene A. James

::

    SELECT * FROM cmis:document AS doc WHERE apollo:PropertyCommander LIKE 'James%'

Query result:

-  document3.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.TestLIKEConstraint:

LIKE constraint with escape symbols
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Query: Select all documents where ``apollo:someProperty`` like
'ad%min%'.

Initial data:

-  document1: Title - node1, ``apollo:someProperty`` - ad%min master

-  document2: Title - node2, ``apollo:someProperty`` - admin operator

-  document3: Title - node2, ``apollo:someProperty`` - radmin

::

    SELECT * FROM cmis:document AS doc WHERE apollo:someProperty  LIKE 'ad%min%'

Query result:

-  document1.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.NOTConstraint:

NOT constraint
^^^^^^^^^^^^^^


Query: Select all documents that do not contain the "world" word.

Initial data:

-  document1: Title - node1, content - hello world

-  document2: Title - node2, content - hello

::

    SELECT * FROM cmis:document WHERE NOT CONTAINS('world')

Query result:

-  document2.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.PropertyExistence:

Property existence
^^^^^^^^^^^^^^^^^^^^

Query: Select all documents that has the ``apollo:propertyCommander``
property is NOT NULL.

Initial data:

-  document1: ``apollo:propertyCommander`` - Walter M. Schirra

-  document2: ``apollo:propertyCommander`` -

-  document3: ``apollo:propertyCommander`` - James A. Lovell, Jr.

-  document4: ``apollo:propertyCommander`` -

::

    SELECT * FROM cmis:document WHERE apollo:propertyCommander is NOT NULL

Query result:

-  document1, document3.

.. _eXoAddonsGuide.CMIS.Features.ORDERBY:

ORDER BY
^^^^^^^^^^

Query: Select all documents in default order (by document name).

Initial data:

-  document1: Title - Apollo 7

-  document2: Title - Apollo 8

-  document3: Title - Apollo 13

-  document4: Title - Apollo 17

::

    SELECT cmis:lastModifiedBy, cmis:objectId, cmis:lastModificationDate FROM cmis:document

Query result:

-  document3, document4, document1, document2.

.. _eXoAddonsGuide.CMIS.Features.Search.ORDERBYASC:

ORDER BY ASC
^^^^^^^^^^^^^

Query: Order by the ``apollo:propertyCommander`` property value (in
ascending order).

Initial data:

-  document1: ``apollo:propertyCommander`` - Walter M. Schirra

-  document2: ``apollo:propertyCommander`` - Frank F. Borman, II

-  document3: ``apollo:propertyCommander`` - James A. Lovell, Jr.

-  document4: ``apollo:propertyCommander`` - Eugene A. Cerna

::

    SELECT cmis:lastModifiedBy, cmis:objectId, cmis:lastModificationDate FROM cmis:document ORDER BY apollo:propertyCommander

Query result:

-  document4, document2, document3, document1.

.. _eXoAddonsGuide.CMIS.Features.Search.ORDERBYDESC:

ORDER BY DESC
^^^^^^^^^^^^^^

Query: Order by the ``apollo:propertyCommander`` property value (in
descending order).

Initial data:

-  document1: ``apollo:propertyCommander`` - Walter M. Schirra

-  document2: ``apollo:propertyCommander`` - Frank F. James, II

-  document3: ``apollo:propertyCommander`` - James A. Lovell, Jr.

-  document4: ``apollo:propertyCommander`` - Eugene A. James

::

    SELECT cmis:lastModifiedBy, cmis:objectId, cmis:lastModificationDate FROM cmis:document ORDER BY cmis:propertyCommander DESC

Query result:

-  document1, document3, document2, document4.

.. _eXoAddonsGuide.CMIS.Features.Search.ORDERBYSCORE:

ORDER BY SCORE (as columns)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Query: Select all documents which contains word "moon" ordered by score.

Initial data:

-  document1: content - "Earth-orbital mission, the first manned launch"

-  document2: content - "from another celestial body - Earth's Moon"

-  document3: content - "NASA intended to land on the Moon, but a
   mid-mission technical"

-  document4: content - "It was the first night launch of a U.S. human"

::

    SELECT cmis:lastModifiedBy, cmis:objectId, cmis:lastModificationDate FROM cmis:document WHERE CONTAINS('moon') ORDER BY SCORE()

Query result:

-  document2, document3.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.NotEqualComparisonDecimal:

Not equal comparison (decimal)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Query: Select all documents which have the `` apollo:propertyBooster``
property that does not equal to 3.

Initial data:

-  document1: Title - node1, ``apollo:propertyBooster`` - 3

-  document2: Title - node2, ``apollo:propertyBooster`` - 15

::

    SELECT * FROM cmis:document WHERE apollo:propertyBooster <> 3

Query result:

-  document2.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.NotEqualComparisonString:

Not equal comparison (string)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Query: Select all documents with the ``apollo:someProperty`` property
that does not equal to "test word second".

Initial data:

-  document1: ``apollo:someProperty`` - "test word first"

-  document2: ``apollo:someProperty`` - "test word second"

::

    SELECT * FROM cmis:document WHERE apollo:someProperty <> 'test word second'

Query result:

-  document1.

.. _eXoAddonsGuide.CMIS.Features.Search.QueryExamples.GreaterThanComparison:

Greater than comparison (>)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Query: Select all documents with the ``apollo:propertyBooster`` property
which is more than 5.

Initial data:

-  document1: ``apollo:propertyBooster`` - 3

-  document2: ``apollo:propertyBooster`` - 15

::

    SELECT * FROM cmis:document WHERE apollo:propertyBooster > 5

Query result:

-  document2.

.. _eXoAddonsGuide.CMIS.Features.CMISDomainModel:

CMIS Domain Model
~~~~~~~~~~~~~~~~~~

The CMIS Domain Model defines a repository as a container and an entry
point to the objects that is quite simple and non-restrictive. The
followings are some of the common entities of the domain model.

-  Repository is a container of objects with a set of "capabilities"
   which may be different depending on the implementation.

-  Object is the entity managed by a CMIS repository.

-  Object Type is a classification related to an object. It specifies a
   fixed and non-hierarchical set of properties ("schema") that all
   objects of that type have.

-  Document Object is an elementary information entity.

-  Folder Object is a collection of fileable objects.

-  Relationship Object is used to describe a dependent object
   semantically.

-  Policy Object represents an administrative policy applied to an
   object.

-  Access Object defines permissions.

-  Versioning is to support versioning for Document objects.

-  Query is type-based in a simplified SQL SELECT statement.

-  Change Log is a mechanism which enables applications to discover
   changes to the objects stored.

.. note:: CMIS specifies a query language based on the SQL-92 standard, plus
          the extensions, in conjunction with the model mapping defined by the
          CMIS's relational view.

All objects are classified by an Object Type which declares that all
objects of the given type have some sets of properties in common. Each
property consists of a set of attributes, such as the TypeID, the
property ID, its display name, its query name, and more. There are only
four base types, including Document, Folder, Relationship, and Policy.
Also, you can extend those basic types by modifying a set of their
properties.

Document Object and Folder Object are self-explanatory. Document Object
has properties to hold document metadata, such as the document author,
modification date and custom properties. It can also contain a content
stream whether it is required, and renditions, such as a thumbnail view
of document. Folder is used to contain objects. Apart from the default
hierarchical structure, CMIS can optionally store objects in multiple
folders or in no folders at all (so-called multi-filing and unfiling
capabilities). Relationship Object denotes the connection between two
objects (target and source). An object can have multiple relationships
with other objects. Policy Object is a way to define administrative
policies in managing objects. For example, you can use a CMIS policy to
define which documents are subject to retention policies.

.. _eXoAddonsGuide.CMIS.Features.CMISServices:

CMIS Services
~~~~~~~~~~~~~~

CMIS provides a set of services to access and manage the content or
repository. These services include:

+----------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Name                                   | Description                                                                                                                                                             |
+========================================+=========================================================================================================================================================================+
| **Repository Services**                | Discovers information about the repository and the object types defined for the repository.                                                                             |
+----------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Navigation Services**                | Traverses the folder hierarchy in a CMIS repository, and to locate documents which are checked out.                                                                     |
+----------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Object Services**                    | Executes ID-based CRUD functions (Create, Retrieve, Update, Delete) on objects in a repository.                                                                         |
+----------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Multi-filing Services (optional)**   | Puts an object in more than one folder (multi-filing), or outside the folder hierarchy (unfiling).                                                                      |
+----------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Discovery Services**                 | Searches for queryable objects in a repository.                                                                                                                         |
+----------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Versioning Services**                | Checks out, navigates to documents, or updates a Document Version Series (checkOut, cancelCheckOut, getPropertiesOfLatestVersion, getAllVersions, deleteAllVersions).   |
+----------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Relationship Services (optional)**   | Retrieves an object for its relationships.                                                                                                                              |
+----------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Policy Services (optional)**         | Applies, removes, or queries for policies.                                                                                                                              |
+----------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **ACL Services**                       | Returns and manages the Access Control List (ACL) of an object. ACL Services are not supported by all repositories.                                                     |
+----------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Some repositories might not implement certain optional capabilities, but
they are still considered as CMIS-compliant. Each service has binding
which defines the way messages will be serialized and wired. Binding is
based on HTTP and uses the Atom Publishing Protocol.

.. _eXoAddonsGuide.CMIS.CodeExamples:

========================
CMIS Usage code examples
========================

This section consists of the following main topics:

-  :ref:`Login to repository <eXoAddonsGuide.CMIS.CodeExamples.LoginToRepository>`

   Example of using Java to login to repository.

-  :ref:`List of documents (folder, files) <eXoAddonsGuide.CMIS.CodeExamples.ListOfDocuments>`

   Description about the usage of several methods to get the documents
   lists, such as *getChildren()*, *getFolderTree()* and
   *getDescendants()*.

-  :ref:`Read document properties and content-stream <eXoAddonsGuide.CMIS.CodeExamples.ReadDocumentPropertiesContenStream>`

   Instructions on how to read and get the document properties and
   content stream.

-  :ref:`Search of data and syntax examples <eXoAddonsGuide.CMIS.CodeExamples.SearchDataSyntaxExample>`

   Examples of using Java and Javascript to search for data and syntax
   in CMIS.

-  :ref:`Modification of document properties or content <eXoAddonsGuide.CMIS.CodeExamples.ModificationOfDocumentPropertiesOrContent>`

   Instructions on how to use Java and Javascript to update and get
   document properties or content in CMIS.

The examples of the CMIS usage may be useful for developers who need to
access a repository. CMIS access code snippets are built using Apache
HTTP Client for Java, or using Google gadgets (gadgets.io) for
JavaScript examples. For examples of CURL, visit `http://code.google.com/p/xcmis/wiki/xCMISusesWithCurl <http://code.google.com/p/xcmis/wiki/xCMISusesWithCurl>`__.

.. _eXoAddonsGuide.CMIS.CodeExamples.LoginToRepository:

Login to repository
~~~~~~~~~~~~~~~~~~~~

.. note:: The CMIS service uses the default authentication in general case,
          but it can be overridden in case of embedding CMIS into an
          Application Service. In these examples, only the Basic HTTP
          authentication is covered.

**Using Java**

.. code:: java

     import org.apache.commons.httpclient.HttpClient;
     import org.apache.commons.httpclient.UsernamePasswordCredentials;
     import org.apache.commons.httpclient.auth.AuthScope;
     import org.apache.commons.httpclient.methods.GetMethod;

     HttpClient client = new HttpClient();
     client.getState().setCredentials(
     new AuthScope("localhost", 8080, "realm"),
     new UsernamePasswordCredentials("root", "gtn");
     ....

.. _eXoAddonsGuide.CMIS.CodeExamples.ListOfDocuments:

List of documents (folder, files)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

There are several methods to get the documents lists, such as
``getChildren()``, ``getFolderTree()`` and ``getDescendants()``. The
difference between them is the usage of different URL segments to get
data ("``/children``" for ``getChildren(``), "``/foldertree``" for
``getFolderTree(``), "``/descendants``" for ``getDescendants()``), and
(``getChildren()`` returns a flat structure, while ``getFolderTree()``
and ``getDescendants()`` have a tree of items in response).

**Using Java**

.. code:: java

     import org.apache.commons.httpclient.HttpClient;
     import org.apache.commons.httpclient.methods.GetMethod;
     import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;

     String url = "http://localhost:8080/rest/private/cmisatom/";
     url += repository;
     url += "/children/";
     url += obj_id;

     HttpClient client = new HttpClient(new MultiThreadedHttpConnectionManager());
     client.getHttpConnectionManager().
     getParams().setConnectionTimeout(10000);

     GetMethod get = new GetMethod(url);
     try {
     int result = client.executeMethod(get);
     final String strResponse = get.getResponseBodyAsString();
     } finally {
       get.releaseConnection();
     }

**Using JavaScript**

Creating a URL to make a request (consisting of repository name, method
name, for example "/children/", and folderID to get children from):

.. code:: java

     var url = "http://localhost:8080/rest/private/cmisatom/";
     url += repository;
     url += "/children/";
     url += obj_id;

Performing request:

.. code:: java

     var params = {};
     params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.GET;
     params[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.FEED;
     gadgets.io.makeRequest(url, handler, params);

Processing results (the code is located in the handler specified while
making a request - the same way might be used for all examples in this
chapter):

.. code:: java

     var handler = function(resp) {
      var data = eval(resp.data.Entry);
       for (var i = 0; i < data.length; i++) {
     var doc = data[i];
     alert(doc.Title);
     alert(doc.Date);
      ...etc..
       }
    }

.. _eXoAddonsGuide.CMIS.CodeExamples.ReadDocumentPropertiesContenStream:

Read document properties and content-stream
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Reading the Document properties and content stream are two separate
operations. Getting the content stream is possible after the properties
set has been read and the content stream ID is extracted from it.

**Using Java**

-  Get document properties.

   .. code:: java

        import org.apache.commons.httpclient.HttpClient;
        import org.apache.commons.httpclient.methods.GetMethod;
        import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;

        String url = "http://localhost:8080/rest/private/cmisatom/";
        url += repository;
        url += "/object/";
        url += obj_id;

        HttpClient client = new HttpClient(new MultiThreadedHttpConnectionManager());
        client.getHttpConnectionManager().
        getParams().setConnectionTimeout(10000);

        GetMethod get = new GetMethod(url);
        try {
          int result = client.executeMethod(get);
          final String strResponse = get.getResponseBodyAsString();
          // use response...
        } finally {
          get.releaseConnection();
        }

-  Get document content-stream.

   To get the Document's content stream, an URL must contain a
   "``/file``" part, object ID, and optionally the content stream ID,
   which can be used, for example, to obtain renditions. If no stream ID
   is specified, the default stream will be returned.

   .. code:: java

        import org.apache.commons.httpclient.HttpClient;
        import org.apache.commons.httpclient.methods.PostMethod;

        String url = "http://localhost:8080/rest/private/cmisatom/";
        url += repository;
        url += "/file/";
        url += obj_id;
        //Optionally
        url += "?";
        url += "streamid=";
        url += streamID;

        HttpClient client = new HttpClient();
        client.getHttpConnectionManager().
        getParams().setConnectionTimeout(10000);

        GetMethod get = new GetMethod(url);
        try {
          int result = client.executeMethod(get);
          final InputStream stream = get.getResponseBodyAsStream();
          try {
          // use stream...
          int dataByte = stream.read();
          } finally {
        stream.close();
          }
        } finally {
          get.releaseConnection();
        } 

**Using JavaScript**

-  Get document properties.

   -  Create a URL to make a request (consisting of repository name,
      method name, for example "/children/", and folder ID to get the
      children from):

      .. code:: java

           var url = "http://localhost:8080/rest/private/cmisatom/";
           url += repository;
           url += "/object/";
           url += obj_id; 

   -  Perform the request:

      .. code:: java

           var params = {};
           params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.GET;
           params[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.FEED;
           gadgets.io.makeRequest(url, handler, params);

      You can also use the ``ContentType.DOM`` parameter to parse the
      feed in your application (Using DOMParser for example).

-  Get document content-stream.

       **Note**

       Performing a content stream request in JavaScript will cause the
       browser dialog for a file download.

   .. code:: java

        var url = "http://localhost:8080/rest/private/cmisatom/";
        url += repository;
        url += "/file/";
        url += obj_id;
        //Optionally
        url += "?";
        url += "streamid=";
        url += streamID;

.. _eXoAddonsGuide.CMIS.CodeExamples.SearchDataSyntaxExample:

Search for data and syntax examples
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

CMIS supports SQL queries for more handful content search. Query service
can handle both GET and POST requests. URL for query consists of the
repository name and the "``/query``" method name. The GET request must
contain query as a parameter named "``q``". In case of the POST, query
must be located in request body.

.. note:: You need to enable query support by following :ref:`CMIS Add-on configuration <eXoAddonsGuide.CMIS.Addon>`_section.

For more detailed instructions how to construct queries, refer to the
:ref:`Query examples <eXoAddonsGuide.CMIS.Features.Search.QueryExamples>`
section.

**Using Java**

.. code:: java

     import org.apache.commons.httpclient.HttpClient;
     import org.apache.commons.httpclient.methods.PostMethod;
     import org.apache.commons.httpclient.methods.StringRequestEntity;

     String url = "http://localhost:8080/rest/private/cmisatom/";
     url += repository;
     url += "/query/";

     HttpClient client = new HttpClient();
     client.getHttpConnectionManager().
     getParams().setConnectionTimeout(10000);

     PostMethod post = new PostMethod(url);
     String s = "<?xml version='1.0' encoding='utf-8'?>"
         + "<cmis:query xmlns='http://www.w3.org/2005/Atom' xmlns:cmis='http://docs.oasis-open.org/ns/cmis/core/200908/'>"
         + "<cmis:statement>SELECT * FROM cmis:document</cmis:statement>"
         + "<cmis:maxItems>10</cmis:maxItems>"
         + "<cmis:skipCount>0</cmis:skipCount>"
         + "<cmis:searchAllVersions>true</cmis:searchAllVersions>"
         + "<cmis:includeAllowableActions>true</cmis:includeAllowableActions>"
         + "</cmis:query>";

     RequestEntity entity = new StringRequestEntity(s, "text/xml","utf-8");
     try {
       post.setRequestEntity(entity);
       int result = client.executeMethod(post);
       final String strResponse = post.getResponseBodyAsString();
       // use response...
     } finally {
       post.releaseConnection();
     }

**Using JavaScript**

.. code:: java

     var url = "http://localhost:8080/rest/private/cmisatom/";
     url += repository;
     url += "/query/";

.. code:: java

     var params = {};
     params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.POST;
     params[gadgets.io.RequestParameters.POST_DATA] = gadgets.io.encodeValues(someQuery);
     gadgets.io.makeRequest(url, handler, params);

.. _eXoAddonsGuide.CMIS.CodeExamples.ModificationOfDocumentPropertiesOrContent:

Modification of document properties or content
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The command of property update uses PUT method. The URL is the same as
the one for reading properties, the difference is only in the HTTP
method used. The body of the request must be an Atom document with
specified properties.

Sending of content stream can be executed via PUT or POST requests.
Content-type of the request must be a "multipart/form-data".

**Using Java**

-  Update properties:

   .. code:: java

        import org.apache.commons.httpclient.HttpClient;
        import org.apache.commons.httpclient.methods.StringRequestEntity;
        import org.apache.commons.httpclient.methods.PostMethod;
        import org.apache.commons.httpclient.methods.RequestEntity;

        String url = "http://localhost:8080/rest/private/cmisatom/";
        url += repository;
        url += "/object/";
        url += obj_id;

        HttpClient client = new HttpClient();
        client.getHttpConnectionManager().
        getParams().setConnectionTimeout(10000);

       String atomDoc = "<?xml version='1.0' encoding='utf-8'?>"
            + "<entry xmlns='http://www.w3.org/2005/Atom'"
            + " xmlns:cmis='http://docs.oasis-open.org/ns/cmis/core/200908/'"
            + " xmlns:cmisra='http://docs.oasis-open.org/ns/cmis/restatom/200908/'>"
            + "<cmisra:object><cmis:properties>"
            + "<cmis:propertyString queryName='cmis:name' localName='cmis:name' propertyDefinitionId='cmis:name'>"
            + "<cmis:value>newName</cmis:value>"
            + "</cmis:propertyString>"
            + "</cmis:properties></cmisra:object>"
            + "</entry>";

        PutMethod put = new PutMethod(url);
        RequestEntity entity = new StringRequestEntity(atomDoc, "text/xml", "utf-8");
        put.setRequestEntity(entity);

        try {
          int result = client.executeMethod(put);
          final String strResponse = put.getResponseBodyAsString();
        } finally {
          put.releaseConnection();
        }

-  Set content stream:

   .. code:: java

        import org.apache.commons.httpclient.HttpClient;
        import org.apache.commons.httpclient.methods.InputStreamRequestEntity;
        import org.apache.commons.httpclient.methods.PostMethod;
        import org.apache.commons.httpclient.methods.RequestEntity;

        String url = "http://localhost:8080/rest/private/cmisatom/";
        url += repository;
        url += "/file/";
        url += obj_id;

        HttpClient client = new HttpClient();
        client.getHttpConnectionManager().
        getParams().setConnectionTimeout(10000);

        PostMethod post = new PostMethod(url);
        RequestEntity entity = new InputStreamRequestEntity(inputStream, "text/xml; charset=ISO-8859-1");
        post.setRequestEntity(entity);

        try {
          int result = client.executeMethod(post);
          final String strResponse = post.getResponseBodyAsString();
        } finally {
          post.releaseConnection();
        }

**Using JavaScript**

-  Update properties:

   .. code:: java

        var url = "http://localhost:8080/rest/private/cmisatom/";
        url += repository;
        url += "/object/";
        url += obj_id;

   .. code:: java

       //constructing document
        String atomDoc = "<?xml version='1.0' encoding='utf-8'?>";
          atomDoc += "<entry xmlns='http://www.w3.org/2005/Atom'";
          atomDoc += " xmlns:cmis='http://docs.oasis-open.org/ns/cmis/core/200908/'";
          atomDoc += " xmlns:cmisra='http://docs.oasis-open.org/ns/cmis/restatom/200908/'>";
          atomDoc += "<cmisra:object><cmis:properties>";
          atomDoc += "<cmis:propertyString queryName='cmis:name' localName='cmis:name' propertyDefinitionId='cmis:name'>";
          atomDoc += "<cmis:value>newName</cmis:value>";
          atomDoc += "</cmis:propertyString>";
          atomDoc += "</cmis:properties></cmisra:object></entry>";

        var params = {};
        params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.PUT;
        params[gadgets.io.RequestParameters.POST_DATA] = atomDoc;
        gadgets.io.makeRequest(url, handler, params);

-  Set content stream:

   .. code:: java

        var url = "http://localhost:8080/rest/private/cmisatom/";
        url += repository;
        url += "/file/";
        url += obj_id;

   .. code:: java

        var params = {};
        params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.POST;
        params[gadgets.io.RequestParameters.CONTENT_TYPE] = "multipart/form-data";
        params[gadgets.io.RequestParameters.POST_DATA] = contentStream;
        gadgets.io.makeRequest(url, handler, params);

.. |image0| image:: images/cmis/exo-cmis-wcm.png
