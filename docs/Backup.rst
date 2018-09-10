.. _Backup:

###################
Backup and Restore
###################


    Backup is necessary for safety. Data loss may happen in such cases
    as broken devices, software failures, attacks of viruses and
    hackers. By saving copies of your working data to a separated and
    dedicated storage, you can restore your data and recover eXo 
    Platform in such cases.

    The eXo Platform data consists of File System Data and SQL Data. The
    backup does not require any specific tools. You will use any OS
    backup utilities and any DBMS backup tools.

    The following topics are covered in this chapter:

    -  :ref:`Planning your backup <Backup.PlanBackup>`
       Necessary information about planning your backup.

    -  :ref:`Backup and Restore <Backup.BackingUpPlatform>`
       Instructions on how to back up and restore eXo Platform.

    -  :ref:`Backup MongoDB database for eXo chat <Backup.MongoDB>`
       Instructions on how to back up eXo chat Database.


.. _Backup.PlanBackup:

====================
Planning your backup
====================

The eXo Platform data consists of 2 parts:

-  data directories that can be backed up and restored using the OS
   utilities.

-  JCR, IDM and JPA datasources that can be backed up and restored using
   the DBMS tools.

.. warning:: These two parts need to be backed up and restored consistently.
             Inconsistency may lead to failures and exceptions at the eXo Platform runtime. 
             During the backup, you should stop eXo Platform to make sure no write-process is performing.

You may back up periodically or on-demand, before an upgrade or a patch
for instance. If you are planning to back up periodically, consider the
following things:

-  How often the backup is performed? Remember that there is downtime
   during the backup.

-  How much disk space is used for backup storage? Less space, less
   archive.

-  Prepare for the tools that involve: copy (local and network),
   compress and decompress tools, SQL backup tools and automation.

If your backup takes long time and occupies a big memory space, here are
some tips:

.. tip:: -  The downtime will be much shorter if you have File System data and SQL data located on different hard drives, and back up them in parallel.
		 -  Try optimizing your database server to restore faster.
		 -  You do not need full-backup all the time. There are 2 backup options: *incremental* and *differential* that may lower the space. 
		    The backup approaches are explained `here <http://en.wikipedia.org/wiki/Backup>`__. 
		    Linux `rsync <http://rsync.samba.org/>`__ and Windows backup utilities can perform incremental/differential backup. 
		    Any SQL Database server should support incremental backup.
		 -  Think of automation which can be used for your backup.

.. _Backup.BackingUpPlatform:

==================
Backup and Restore
==================

If you do not customize and configure eXo Platform, the whole data is located
in one directory. So you just need to backup and restore the folder:

-  ``$PLATFORM_TOMCAT_HOME/gatein/data`` (in Tomcat).

-  ``$PLATFORM_JBOSS_HOME/standalone/data/gatein`` (in JBoss).

.. note:: The above locations are the default ones, you may have different path to the data folder which is shared and accessible by your sever node(s).

However it is not the case in production. As introduced in :ref:`Planning your backup <Backup.PlanBackup>`, 
the eXo Platform data consists of JCR File System data and JCR/IDM/JPA 
SQL datasources. The backup/restore does not require any specific tools. 
You just need to know the data location and use OS utilities to backup/
restore file system data and DBMS tools to backup/restore SQL databases.

The data folder contains these directories:

-  ``exoplatform-es``: it contains data indexed by Elasticsearch when it
   is in :ref:`embedded mode <#PLFAdminGuide.Elasticsearch.ES_Embedded>`.

-  ``files``: it contains :ref:`file storage <Database.FileStorage>` 
   data.

-  ``jcr``: it contains jcr data i.e. indexes, values and swap (swap
   folder is not not mandatory to backup/restore).

-  ``jta``: it contains transaction data and it is not mandatory to
   backup/restore.

.. note:: JCR Directory and JCR database must be consistent. Then you 
          should stop eXo Platform, backup both before restarting. All 
          nodes should be stopped if you are running the cluster mode.

.. _FSData:

File System Data
~~~~~~~~~~~~~~~~~

You can check the data location in the customized configuration file:

-  In Tomcat, the file is ``$PLATFORM_TOMCAT_HOME/bin/setenv-customize``
   (``.sh`` for Linux and ``.bat`` for Windows).

-  In JBoss, it is ``$PLATFORM_JBOSS_HOME/bin/standalone-customize``
   (``.conf`` for Linux and ``.conf.bat`` for Windows).

Open the file and find *EXO\_DATA\_DIR*. This variable indicates the
folder you need to backup or restore. As explained above,
*EXO\_DATA\_DIR* takes by default the values cited in the top page but
you can customize it.

You may disregard the background storage system (device and protocol)
and let the OS take care of it. However, to make it efficiently, the
background storage should be considered. There are working storage (that
eXo Platform uses) and backup storage. Each of two can be on local drives, or
a mount point of a network shared device. Each can be a
`SAN <http://en.wikipedia.org/wiki/Storage_area_network>`__ or a
`NAS <http://en.wikipedia.org/wiki/Network-attached_storage>`__ storage.
You should use different hard drives for working storage and backup
storage, for safety, and conditionally for speed.

.. _JCRData:

JCR Data
~~~~~~~~~

As said above, the whole JCR file system data is located in one root
directory (EXO\_DATA\_DIR). However, there is a possibility that an
element (a workspace for instance) is configured to be different. To
handle such cases, look inside the file system data. There may be:

-  Index directory, which will be checked at the eXo Platform startup, and
   re-created if missing.

   In the cluster mode, the eXo Platform instances may share an index
   directory, or use their own directories.

-  Value directory (if existing) that is used to store the BLOB data.

   The BLOB data can be optionally stored in database and file system
   storage, and is defaulted to "true". You can override this in
   :ref:`exo.properties file <Configuration.ConfigurationOverview>`.

   .. code:: xml

       exo.jcr.storage.enabled=true

-  Swap directory, which is used as temporary memory space at runtime.
   This is not mandatory in backup and restore.

By default, all are located under ``EXO_DATA_DIR`` and each workspace
has its index, value and swap directories. Also, the portal default
configurations may be changed or overwritten, however it is not
recommended to do this. To see how it can happen, see :ref:`JCR Configuration <#JCR.eXoJCRconfiguration.JCRConfiguration>`.

.. _SQLDatabases:

SQL Databases
~~~~~~~~~~~~~~

Check your database configurations to see which databases are being
used. The database configurations are described in :ref:`Configuring eXo Platform <Database.ConfiguringPLF>` 
of the Database configuration section.

There should be three :ref:`datasources <Database.ConfiguringPLF>`: JCR, 
IDM  and JPA.

You should backup and restore the whole database. If you want to backup
and restore tables separately, make sure your backup parts are
consistent.

.. _Backup.MongoDB:

================================
Planning your backup for MongoDB
================================

You can use *mongodump* command to back up your database, assume its
name is *exochat*:

-  Against a non-authentication MongoDB server:

::

   mongodump --db exochat --out /path/to/store/the/backup
   
-  Against a secured MongoDB server:

::

   mongodump --host {host} --port {port} --username {username} --password {password} --db {dbName} --out "{backup\_folder}"
