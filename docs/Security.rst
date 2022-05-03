.. _Security:

#########
Security
#########

    This chapter introduces you to the security configuration in
    eXo Platform:

    -  :ref:`JAAS Realm configuration <Security.ChangeJAASReal>`
       Instructions on how to configure JAAS Realm.

    -  :ref:`Gadget proxy configuration <Security.GadgetProxyConfig>`
       How to configure the ProxyFilterService, and how the proxy
       service works.

    -  :ref:`Enabling HTTPS <Security.HTTPSConf>`
       To enable security access, you can either run eXo Platform itself
       in HTTPS, or more commonly, use a reverse proxy like Apache.

    -  :ref:`Password encryption key of RememberMe <Security.KeyRemembermeToken>`
       Information about the file location and steps to update the
       "Remember My Login" password encryption key.

    -  :ref:`Anti Brute Force <Security.AntibruteForce>`
       To configure antibrute force system.

    -  :ref:`XSS protection <Security.XSSProtection>`
       To activate XSS protection mechanisms.

    -  :ref:`SameSite Configuration <Security.SameSiteConfiguration>`
       To configure SameSite property for cookies

    -  :ref:`Securing the MongoDB Database <Security.MongoDBSecure>`
       How to secure eXo chat database.

    -  :ref:`Rest Api exposure <Security.APIExposure>`
       List of REST API exposed by eXo Platform.

.. _Security.ChangeJAASReal:

========================
JAAS Realm configuration
========================

eXo Platform relies on JAAS for propagating the user identity and roles to
the different applications deployed on the server. The JAAS realm is
used by all eXo Platform applications and even propagated to the JCR for
`Access Control <../../reference/html/JCR.AccessControl.html>`__.
Therefore, if you need to change the JAAS configuration, consider that
your change impacts a lot and it may require you to unpackage and modify
some ``.war`` files.

This section explains:

-  :ref:`What is JAAS Realm? <Security.ChangeJAASReal.WhatIsJAASRealm>`

-  :ref:`Declaring JAAS Realm in eXo Platform <Security.ChangeJAASReal.DeclaringJAASRealm>`

-  :ref:`List of applications using Realm <Security.ChangeJAASReal.ListOfApplicationsUsingRealm>`

.. _Security.ChangeJAASReal.WhatIsJAASRealm:

What is JAAS Realm?
~~~~~~~~~~~~~~~~~~~~

The JAAS configuration requires a `login.config file <https://docs.oracle.com/javase/1.5.0/docs/guide/security/jaas/tutorials/LoginConfigFile.html>`__. 
This file contains one (or more) entry which is called a "Realm". Each 
entry declares a Realm name and at least one login module. Each login 
module consists of a Java class and some parameters which are specified 
by the class.

Below is the default Realm in the Tomcat bundle.

::

    gatein-domain {
      org.gatein.sso.integration.SSODelegateLoginModule required
        enabled="#{gatein.sso.login.module.enabled}"
        delegateClassName="#{gatein.sso.login.module.class}"
        portalContainerName=portal
        realmName=gatein-domain
        password-stacking=useFirstPass;
      org.exoplatform.services.security.j2ee.TomcatLoginModule required
        portalContainerName=portal
        realmName=gatein-domain;
    };

In which:

-  ``gatein-domain`` is the **Realm name** which will be refered by
   applications. If you change this default name, you need to
   re-configure all the applications that use the Realm (listed later).

-  Two required **login modules** are:
   *org.gatein.sso.integration.SSODelegateLoginModule* and
   *org.exoplatform.services.security.j2ee.TomcatLoginModule*. The
   first, if authentication succeeds, will create an *Identity* object
   and save it into a shared state map, then the object can be used by
   the second.

   These are some login modules available in eXo Platform. Refer to 
   :ref:`Existing login modules <Security.ChangeJAASReal>` to understand 
   how they match the login scenarios.

.. _Security.ChangeJAASReal.DeclaringJAASRealm:

Declaring JAAS Realm in eXo Platform
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**In the Tomcat bundle**

-  The default Realm is declared in the
   ``$PLATFORM_TOMCAT_HOME/conf/jaas.conf`` file. Its content is exactly
   the above example.

-  A "security domain" property in
   ``$PLATFORM_TOMCAT_HOME/gatein/conf/exo.properties`` (about this
   file, see :ref:`Configuration overview <Configuration.ConfigurationOverview>`)
   needs to be set equal to the Realm name:

   ::

       exo.security.domain=gatein-domain

.. _Security.ChangeJAASReal.ListOfApplicationsUsingRealm:

List of applications using Realm
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If an application (.war) uses the Realm for authentication and
authorization, it will refer to the Realm name with either of the
following lines.

-  In ``WEB-INF/jboss-web.xml``:

   .. code:: xml

       <security-domain>java:/jaas/gatein-domain</security-domain>

-  In ``WEB-INF/web.xml``:

   .. code:: xml

       <realm-name>gatein-domain</realm-name>

-  In ``META-INF/context.xml``:

   .. code:: xml

       appName='gatein-domain'

As mentioned above, if you change "``gatein-domain``\ ", you need to
re-configure all the applications that use the Realm to refer to the new
Realm. Here is the list of webapps and the files you need to
re-configure:

**In the Tomcat bundle:**

-  ``portal.war``: ``/WEB-INF/jboss-web.xml``, ``/WEB-INF/web.xml``,
   ``/META-INF/context.xml``.

-  ``rest.war``: ``/WEB-INF/jboss-web.xml``, ``/WEB-INF/web.xml``.

-  ``ecm-wcm-extension.war``: ``/WEB-INF/jboss-web.xml``.

-  ``calendar-extension.war``: ``/WEB-INF/jboss-web.xml``.

-  ``forum-extension.war``: ``/WEB-INF/jboss-web.xml``.

-  ``wiki-extension.war``: ``/WEB-INF/jboss-web.xml``.

-  ``ecm-wcm-core.war``: ``/WEB-INF/jboss-web.xml``.


.. note:: The ``.war`` files are located under the ``$PLATFORM_TOMCAT_HOME/webapps`` folder.


.. _Security.GadgetProxyConfig:

==========================
Gadget proxy configuration
==========================

In eXo Platform, you could allow gadgets to load remote resources. 
However, this could be a potential security risk, as it will make the 
Gadget deployed as an open web proxy. So, you can set up the anonymous 
proxy to accept or deny certain hosts by configuring the 
*ProxyFilterService*.

.. _ProxyFilterServiceConfig:

Configuring the ProxyFilterService
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

By default, the proxy denies any host except the domain on which the
gadget server is installed.

To specify domains that you want to allow or deny, modify the file:

-  ``$PLATFORM_TOMCAT_HOME/webapps/portal.war/WEB-INF/conf/common/common-configuration.xml``


The default configuration is:

.. code:: xml

    <component>
        <key>org.exoplatform.web.security.proxy.ProxyFilterService</key>
        <type>org.exoplatform.web.security.proxy.ProxyFilterService</type>
        <init-params>
            <values-param>
            <!-- The white list -->
                <name>white-list</name>
                <!-- We accept anything not black listed -->
                <value>*</value>
            </values-param>
            <values-param>
                <name>black-list</name>
                <value>*.evil.org</value>
            </values-param>
        </init-params>
    </component>

.. _HowItWorks:

How does it work?
~~~~~~~~~~~~~~~~~~

-  Any domain name in black list is denied.

-  Any domain name NOT in white list is denied.

-  Only domain names in white list and NOT in black list are allowed.

Multiple values can be added (by adding more **value** tags) and
wildcards can be used, as in the following example:

.. code:: xml

    <component>
        <key>org.exoplatform.web.security.proxy.ProxyFilterService</key>
        <type>org.exoplatform.web.security.proxy.ProxyFilterService</type>
        <init-params>
            <values-param>
                <name>white-list</name>
                <value>*.example.com</value>
                <value>www.example.net</value>
            </values-param>

            <values-param>
                <name>black-list</name>
                <value>evil.example.com</value>
            </values-param>
        </init-params>
    </component>


.. _Security.HTTPSConf:

===============
Enabling HTTPS
===============


In order to enable HTTPS, you can either:

-  :ref:`Use a reverse proxy <PLFAdminGuide.Security.HTTPSConf.Proxy>`,
   such as Apache HTTPd or Nginx, to set up an HTTPS virtual host that
   runs in front of eXo Platform. Or:

-  :ref:`Run eXo Platform itself over HTTPS <PLFAdminGuide.Security.HTTPSConf.eXo>`.

In both cases, you must have a valid SSL certificate. For testing
purpose, you can generate a :ref:`self-signed SSL certificate <PLFAdminGuide.Security.HTTPSConf.SSLCertificate>.
For a production environment, a :ref:`verified SSL certificate <PLFAdminGuide.Security.HTTPSConf.VerifiedSSLCertificate>`
should be used.

.. _PLFAdminGuide.Security.HTTPSConf.SSLCertificate:

Generating a self-signed certificate
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Generating a self-signed certificate can be done with
`OpenSSL <https://www.openssl.org/>`__. Once again, a self-signed
certificate must be used only for testing purpose, never in production.
Use the following command to generate the certificate:

``openssl req -x509 -nodes -newkey rsa:2048 -keyout cert-key.pem -out cert.pem -subj '/O=MYORG/OU=MYUNIT/C=MY/ST=MYSTATE/L=MYCITY/CN=proxy1.com' -days 730``

You will use cert-key.pem to certificate the Apache/Nginx server
proxy1.com, so the part "*CN=proxy1.com*" is important.

.. note:: When using a self-signed certificate, users will need to point their
          browser to *https://proxy1.com* and accept the security exception.

.. _PLFAdminGuide.Security.HTTPSConf.VerifiedSSLCertificate:

Importing an SSL certificate in the JVM's trust store
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For gadgets to work, the SSL certificate must be imported in the JVM
trust store:

1. Because Java keytool does not accept PEM file format, you will need to
   convert ``cert-key.pem`` into DER format.

``openssl x509 -outform der -in cert-key.pem -out cert-key.der``

2. Import your certificate to the JVM trust store using the following command:

``keytool -import -trustcacerts -file cert-key.der -keystore $JAVA_HOME/jre/lib/security/cacerts -alias proxy1.com``

.. note:: The default password of the JVM's trust store is "*changeit*".

.. _PLFAdminGuide.Security.HTTPSConf.Proxy:

Using a reverse proxy for HTTPS in front of eXo Platform
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Apache or Nginx can both be used as a reverse proxy in front of eXo Platform.
The role of the reverse proxy server is to catch HTTPS requests coming
from the http clients (e.g web browsers) and to relay them to eXo Platform
either via AJP or via HTTP protocol. The following diagram depicts the
case described in this section:

|image0|

.. note:: At this stage, we assume you already have an :ref:`SSL certificate <PLFAdminGuide.Security.HTTPSConf.SSLCertificate>`,
          either issued by an official certification authority or self-signed
          (for testing).

		  The examples below will let you setup a basic installation with ssl
		  enabled. You should fine tune your installation before opening it on
		  the web. Mozilla provide a `great site <https://mozilla.github.io/server-side-tls/ssl-config-generator/>`__
		  to help you to find a configuration adapted to your needs.

Configuring Apache
--------------------

Before you start, note that for clarity, not all details of the Apache
server configuration are described here. The configuration may vary
depending on Apache version and your OS, so consult `Apache
documentation <http://httpd.apache.org/docs/>`__ if you need.

.. note:: The supported version of Apache is 2.4 which should be used in a
	   	  supported version of OS. You can learn more about supported
		  environments
		  `here <https://www.exoplatform.com/terms-conditions/supported-environments.pdf>`__.

**Required modules**

You need mod\_ssl, mod\_proxy. They are all standard Apache2 modules, so
no installation is required. You just need to enable them with the
following command:

::

    sudo a2enmod ssl proxy proxy_http headers

**Configuring a virtual host for the SSL port**

Add this to site configuration (you can override the default ssl site
``/etc/apache2/sites-enabled/default-ssl.conf`` or create your own
site):

::

    <VirtualHost *:80>
        ServerName proxy1.com
        Redirect / https://proxy1.com/
    </VirtualHost>

    <VirtualHost *:443>
        ServerName proxy1.com
        ProxyPass / http://exo1.com:8080/
        ProxyPassReverse / http://exo1.com:8080/
        ProxyRequests Off
        ProxyPreserveHost On
        RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}

        ProxyPass /cometd ws://exo1.com:8080/cometd max=200 acquire=5000 retry=5 disablereuse=on flushpackets=on

        SSLEngine On
        SSLCertificateFile /path/to/folder/from/certificate/cert.pem
        SSLCertificateKeyFile /path/to/folder/from/certificate/cert-key.pem
    </VirtualHost>

Configuring Nginx
-------------------

Instructions for installing Nginx can be found
`here <http://wiki.nginx.org/Install>`__. On Debian and Ubuntu you can
install Nginx with the following command: ``apt-get install nginx``.

Configure the server *proxy1.com* at port *443* like this (you can put
the configuration in a file like
``/etc/nginx/sites-enabled/proxy1.com``):

::

    server {
        listen 80;
        server_name proxy1.com;

        # Redirect all HTTP requests to HTTPS with a 301 Moved Permanently response.
        return 301 https://$host$request_uri;
    }

    server {
        listen 443;
        server_name proxy1.com;
        ssl on;
        ssl_certificate /path/to/file/mycert.pem;
        ssl_certificate_key /path/to/file/mykey.pem;

        location / {
            proxy_pass http://exo1.com:8080;
        }
        location /cometd/cometd {
            proxy_pass http://exo1.com:8080;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }

    }

The configuration here is a simple one and it works. For a more advanced
configuration, you may want to read `this blog
post <http://blog.exoplatform.com/en/2014/04/17/apache-2-nginx-highly-secure-pfs-ssl-encrypting-reverse-proxy-exo-platform-4-0-web-application>`__.

Configuring the HTTP connector
-------------------------------

In eXo Platform distribution, there is a default HTTP (8080) connector.

In any case, you should configure that connector so that eXo Platform is
aware of the proxy in front of it.


Set the following property in
``$PLATFORM_TOMCAT_HOME/gatein/conf/exo.properties`` file:

::

    exo.base.url=https://proxy1.com

The connector is configured in
``$PLATFORM_TOMCAT_HOME/conf/server.xml``. Add proxy parameters like
this:

.. code:: xml

    <Connector address="0.0.0.0" port="8080" protocol="org.apache.coyote.http11.Http11NioProtocol"
      enableLookups="false" redirectPort="8443"
      connectionTimeout="20000" disableUploadTimeout="true"
      URIEncoding="UTF-8"
      compression="off" compressionMinSize="2048"
      noCompressionUserAgents=".*MSIE 6.*" compressableMimeType="text/html,text/xml,text/plain,text/css,text/javascript"
      proxyName="proxy1.com" proxyPort="443" scheme="https" />


.. _PLFAdminGuide.Security.HTTPSConf.eXo:

Running eXo Platform itself under HTTPS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the previous section you learnt to configure a reverse proxy in front
of eXo Platform, and it is the proxy which encrypts the requests and
responses. Alternatively you can configure eXo Platform to allow HTTPS access
directly, so no proxy between browsers and eXo Platform. See the following
diagram :

|image1|

Configuring eXo Platform's Tomcat
-----------------------------------

1. Set the following property in
   ``$PLATFORM_TOMCAT_HOME/gatein/conf/exo.properties`` file:

   ::

		exo.base.url=https://exo1.com:8443

2. Edit the ``$PLATFORM_TOMCAT_HOME/conf/server.xml`` file by commenting
   the following lines:

   .. code:: xml

			<Connector address="0.0.0.0" port="8080" protocol="org.apache.coyote.http11.Http11NioProtocol"
			enableLookups="false" redirectPort="8443"
			connectionTimeout="20000" disableUploadTimeout="true"
			URIEncoding="UTF-8"
			compression="off" compressionMinSize="2048"
			noCompressionUserAgents=".*MSIE 6.*" compressableMimeType="text/html,text/xml,text/plain,text/css,text/javascript" />

3. Uncomment the following lines and edit with your ``keystoreFile`` and
   ``keystorePass`` values:

   .. code:: xml

			<Connector port="8443" protocol="org.apache.coyote.http11.Http11Protocol" SSLEnabled="true"
			maxThreads="150" scheme="https" secure="true"
			clientAuth="false" sslProtocol="TLS"
			keystoreFile="/path/to/file/serverkey.jks"
			keystorePass="123456"/>

After starting eXo Platform, you can connect to
*https://exo1.com:8443/portal*. If you are testing with dummy server
names, make sure you created the host "exo1.com" in the file
``/etc/hosts``.

.. _Security.KeyRemembermeToken:

======================================
Password encryption key of RememberMe
======================================

eXo Platform supports the "Remember My Login" feature. This guideline
explains how the feature works, and how to update the password
encryption key in server side for security purpose.

.. _PasswordEncryption.HowItWorks:

How the feature works?
~~~~~~~~~~~~~~~~~~~~~~~~

If users select "Remember My Login" when they log in, their login
information will be saved in both client and server sides:

-  A token is saved in the server side. The user password is encrypted
   and saved along with the token.

-  The token ID is sent back to the browser and saved in the
   "rememberme" cookie.

When the users visit the website for next time from the same browser on
the same machine, they do not need to type their username and password.
The browser sends the cookies, and the server validates it using the
token. By that way, the login step is automatically completed.

.. _SymmetricEncryptionPasswords:

Symmetric encryption of passwords
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The user password is encrypted and stored along with the token.

The password encryption is built against JCA (Java Cryptography
Architecture) and by default uses the
`AES <http://en.wikipedia.org/wiki/Advanced_Encryption_Standard>`__
algorithm. If you do not make your own configuration, a keystore is
generated with defaulted attributes (such as file name, keypass,
keysize). Thus, the feature works without any effort to configure
anything. However, eXo Platform allows you to configure and use your own
keystore to conform to your security policy.

.. _CustomizePassword:

How to customize the password
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

As you can see, the customization involves properties in
``exo.properties``, ``jca-symmetric-codec.properties`` and a keystore.
The goal of customization is to use your own keystore instead of the
default one.

1. Generate your own keystore file using keytool:

   ::
		keytool -genseckey -alias "customAlias" -keypass "customKeyPass" -keyalg "customAlgo" -keystore "customStore" -storepass "customStorePass" -storetype "customStoreType"


The file name will be the parameter *keystore* ("customStore" in the
example). The valid value of algorithms and other parameters can be
found
`here <http://docs.oracle.com/javase/6/docs/technotes/guides/security/StandardNames.html#SecretKeyFactor>`__.

Then, place the generated file under ``gatein/conf/codec``.

2. Update the ``jca-symmetric-codec.properties`` file with the 
   parameters used in your keytool command:

   ::

		gatein.codec.jca.symmetric.alias=customAlias
		gatein.codec.jca.symmetric.keypass=customKeyPass
		gatein.codec.jca.symmetric.keyalg=customAlgo
		gatein.codec.jca.symmetric.keystore=customStore
		gatein.codec.jca.symmetric.storepass=customStorePass
		gatein.codec.jca.symmetric.storetype=customStoreType

Again, in case of eXo Platform package, you need to create the
``jca-symmetric-codec.properties`` file by yourself. You also need to
put these two properties in ``exo.properties``.

.. _UpdatePasswordEncryptionKey:

Updating password encryption key
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The password encryption uses a keystore file. By default, the file is:

-  ``$PLATFORM_TOMCAT_HOME/gatein/conf/codec/codeckey.txt``


To update the password encryption key, just remove the file, then
restart the server. The keystore file will be re-created at the startup
time.

.. note:: Updating the password encryption key causes the invalidation of existing tokens, so the users must re-login.

.. _Security.AntibruteForce:

=================================
Anti Brute Force Login Protection
=================================

To prevent an attack based on bruteforce on login form, eXo Platform have an antibrute force system.
After few failed logins attempts in a short time, the concerned user account is locked for some minutes.

When an account is locked, the user can make a forgot password request. After resetting his password, the account is unlocked
and the user can login normally.

There are two properties to configure this feature. To modify it, you can add it in ``exo.properties``.

The following property allow to configure the number of attempts before the account is locked. The default value is 5 attempts

   ::

		exo.authentication.antibruteforce.maxAuthenticationAttempts=5

The following property allow to configure the number of minutes the account is locked. The default value is 10 minutes.

   ::

		exo.authentication.antibruteforce.blockingTime=10

.. _Security.XSSProtection:

==============
XSS Protection
==============

Even if the XSS protection is handled in the PRODUCT development, some
protections can be added on the server side to protect against external
threats. They are essentially based on HTTP headers added to the
responses to ask the modern browsers to avoid such attacks.

Additional configuration options can be found on the
`Content-security-Policy header definition <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy>`__.

.. _AddXSSProtectionHeadersApache:

Add XSS protection headers on Apache
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To manipulate the response headers, the Apache module
`mod\_headers <https://httpd.apache.org/docs/2.4/mod/mod_headers.html>`__
must be activated and the following lines added on your configuration :

::

    <VirtualHost *:80>
            ...
            # XSS Protection
            Header always append X-Frame-Options SAMEORIGIN
            Header always append X-XSS-Protection 1
            Header always append Content-Security-Policy "frame-ancestors 'self'"
            ...
            </VirtualHost>

.. _AddXSSProtectionHeadersNginx

Add XSS protection headers on Nginx
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Add the following line in the ``http`` or ``server`` part of your Nginx
configuration :

::

            ...
            # XSS Protection
            add_header X-Frame-Options SAMEORIGIN;
            add_header X-XSS-Protection 1;
            add_header Content-Security-Policy "frame-ancestors 'self'"
            ...


.. _Security.SameSiteConfiguration:

======================
SameSite Configuration
======================

SameSite is a property set on HTTP cookies. It can prevent some CSRF attacks.
SameSite property can take one of theses values : None, Strict, and Lax

With value **None**, when a request is done on eXo Server, there is no verification on the referer. The cookies is used.
For example, when a user receives a malicious email, containing a link forged to call a data-altering REST endpoint such as deleting a space, changing a permission, etc..
if the user has a valid session on eXo, clicking the link would alter data on their behalf. It is a
CSRF attack.

With value **Strict**; when a request arrives on the eXo server, the referer is verified. If the referer has a different
domain than the eXo server's domain, the request will not use the cookie.
In the situation described above, the request would not  be directly executed. The user would be redirected to the login page first.
This behaviour is also applied for HTTP GET requests. So, when a user clicks on a link in a notification for example, he has to
login again. 
With this value, all SSO systems (SAML, OAuth, OpenIdConnect ...), generally based on redirections between different hosts, **will not work**.

With value **Lax**; when a request arrives on the eXo server, the referer is also verified. If the referer has a different
domain than the eXo server's domain, only GET requests will use the cookie. So this
intermediate option allows to use links read only endpoints in email notifications, and still protect sensitive requests that may alter data.

By default, eXo uses **Lax** policy in order to have email notification links and SSO configurations work.
It can be changed by configuration if a different value is needed. For that, rename file (if not already done)
``$PLATFORM_TOMCAT_HOME/bin/setenv-customize.sample.sh`` in ``$PLATFORM_TOMCAT_HOME/bin/setenv-customize.sh`` and then
uncomment the line

::

            ...
            CATALINA_OPTS="$CATALINA_OPTS -Dexo.cookie.samesite=Lax"
            ...

Then modify the value to use *None* or *Strict*

For Windows environment, use the file ``$PLATFORM_TOMCAT_HOME/bin/setenv-customize.sample.bat``

.. _Security.MongoDBSecure:

===============
Secured MongoDB
===============

For a quick setup, the add-on by default uses a local and
none-authorization connection. However, in production it is likely you
will secure your MongoDB, so authorization is required. Below are steps
to do this.

.. note:: Read `MongoDB documentation <http://docs.mongodb.org>`__ for MongoDB security. This setup procedure is applied for `MongoDB 3.2 <https://docs.mongodb.com/v3.2/>`__.

1. Start MongoDB and connect to the shell to create a database named
   *admin*. Add a user with role *userAdminAnyDatabase*.

   ::

		$ mongo
		>use admin
		>db.createUser({user: "admin", pwd: "admin", roles: [{role: "userAdminAnyDatabase", db: "admin"}]})
		>exit

2. Edit MongoDB configuration to turn on authentication, then restart 
   the server.

   ::

		# mongodb.conf
		# Your MongoDB host.
		bind_ip = 192.168.1.81

		# The default MongoDB port
		port = 27017

		# Turn on authentication
		auth=true

3. Create a user having *readWrite* role in the database *chat* (you can
   name the database as your desire).

   ::

		$ mongo -port 27017 -host 192.168.1.81 -u admin -p admin -authenticationDatabase admin
		>use chat
		>db.createUser({user: "exo", pwd: "exo", roles: [{role: "readWrite", db: "chat"}]})
		>exit

4. Verify the authentication/authorization of the new user:

   ::

		$ mongo -port 27017 -host 192.168.1.81 -u exo -p exo -authenticationDatabase chat
		>use chat
		>db.placeholder.insert({description: "test"})
		>db.placeholder.find()

5. Create a :ref:`configuration file <Configuration.ChatConfiguration>` 
   containing these below parameters.

   ::

		dbName=chat
		dbServerHost=192.168.1.81
		dbServerPort=27017
		dbAuthentication=true
		dbUser=exo
		dbPassword=exo

.. note:: The parameters above correspond with the values used during creating authorization for MongoDB.

.. _Security.APIExposure:

=================
Rest Api exposure
=================

eXo Platform exposes a list of Rest API methods. They are used internally by
the deployed components but can also be used by your users.

Depending on your use cases, it could be (highly) recommanded to block
the public access to some of them.

-  ``/rest/loginhistory/loginhistory/AllUsers`` : to avoid information
   disclosure and for performance issue.

-  ``/rest/private/loginhistory/loginhistory/AllUsers/*`` : to avoid
   information disclosure and for performance issue.

-  ``/rest/jcr/repository/collaboration/Trash`` : to avoid information
   disclosure.

-  ``/rest/`` : Avoid rest services discovery.

-  ``/portal/rest`` : Avoid rest services discovery.

The following configuraton examples will allow you to block the
previously listed Rest URLs with Apache or Nginx.


.. _WithApache:

Block sensitive Rest urls with Apache
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

    ...

          # Block login history for performance and security reasons
          RewriteRule             "/rest/loginhistory/loginhistory/AllUsers"            - [L,NC,R=403]
          RewriteRule             "/rest/private/loginhistory/loginhistory/AllUsers/*"  - [L,NC,R=403]

          # Block access to trash folder
          RewriteRule             "/rest/jcr/repository/collaboration/Trash"            - [L,NC,R=403]

          # Don't expose REST APIs listing 
          RewriteRule             "^/rest/?$"         -                   [NC,F,L]
          RewriteRule             "^/portal/rest/?$"  -                   [NC,F,L]
              ...


.. _WithNginx:

Block sensitive Rest urls with Nginx
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can create redirection rules in several ways with nginx, this is one
of the possibles :

::

    ...

          # Block login history for performance and security reasons
          location /rest/loginhistory/loginhistory/AllUsers { return 403; }
          location /rest/private/loginhistory/loginhistory/AllUsers { return 403; }

          # Block access to trash folder
          location /rest/jcr/repository/collaboration/Trash { return 403; }

          # Don't expose REST APIs listing 
          location ~ ^/rest/?$ { return 403; }
          location ~ ^/portal/rest/?$ { return 403; }

            ...


.. |image0| image:: images/https_reverse_prx_diagram.png
.. |image1| image:: images/https_direct_access_diagram.png
