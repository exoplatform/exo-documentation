.. _WCM:

###############
eXo Web Pack
###############

    Do you have any idea about how to build a company website that makes
    impression on potential clients? The eXo Web Pack add-on is
    aimed at this purpose by providing you with handy site templates,
    which are easy to navigate and clearly convey your business's
    products and services. By having this add-on installed, you will
    have the following two sample website templates with reusable
    components to build modern and mobile friendly websites:

    -  The **Agital** template for corporate groups or companies:

       |image0|

    -  The **Globex** template for product landing:

       |image1|

    -  **WAI** template for a website accessible by any user:

       |image2|

    In this chapter:

    -  :ref:`Installation andUninstallation <eXoAddonsGuide.WCM.Installation>`

       Instructions in how to install eXo Web Pack addon.

    -  :ref:`Reusable Components <eXoAddonsGuide.WCM.ReusableComponents>`

       This chapter introduces the components that could be reused to
       build your new site. It assumes that you are already familiar
       with the administration of :ref:`portal sites <ManagingSites>`
       and :ref:`pages <ManagingPages>`.

    -  :ref:`How to use? <eXoAddonsGuide.WCM.HowToUse>`

       How to use eXo Web Pack addon.

    -  :ref:`Agital <eXoAddonsGuide.WCM.Agital>`

       Introduction to Agital Site.

    -  :ref:`Globex <eXoAddonsGuide.WCM.Globex>`

       Introduction to Globex Site.

    -  :ref:`WAI <eXoAddonsGuide.WCM.WAI>`

       Introduction to WAI.

.. _eXoAddonsGuide.WCM.Installation:

===============================
Installation and Uninstallation
===============================

.. _eXoAddonsGuide.WCM.Installation.Install:

Installation
~~~~~~~~~~~~~

Install the eXo Web Pack add-on with the command:
``addon install exo-web-pack``.

After installation, there are two new site templates that appear in the
Portal Templates tab when you :ref:`create a new site <CreatingNewSite>`.

|image3|

Select one of the two templates and set the Portal Name in the Portal
Settings tab as "WCM". After creating the site, check it at
`http://mycompany.com:port/portal/WCM <http://mycompany.com:port/portal/WCM>`__.

.. _eXoAddonsGuide.WCM.Installation.uninstall:

Uninstallation
~~~~~~~~~~~~~~~

Simply use the command: ``addon uninstall exo-web-pack``.
:
.. note:: The uninstallation does not remove the initialized data. If you want 
          to remove the WCM site, follow :ref:`Deleting a site, Platform User guide <ManagingSites.DeletingSite>`.

.. _eXoAddonsGuide.WCM.ReusableComponents

===================
Reusable Components
===================


eXo Web Pack addon comes with different resources to help you
build stunning website with eXo Platform. It contains, new page
containers and applications for the page composer as well as rich
content types that are implemented under several fully working site
templates : Agital Globex and WAI.

.. _eXoAddonsGuide.WCM.ReusableComponents.AppsandContainers:

Containers and Applications
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Adding a page under one of the three sites: Agital, Globex or WAI is
similar as adding it under any other PRODUCT site. Please check this
link :ref:`Adding a new page <ManagingPages.AddingNewPage>`.

|image4|

As shown in the previous screenshot, there are various container types:
Rows layout, Columns layout, Autofit Columns layout, Tabs layout, Mixed
layout and Responsive layout the one which is coming with eXo Web Pack
addon.

The table below represents the layout styles proposed by the responsive
layout:


=============  ============  ===============================
Desktop view   Tablet view   Smartphone view  
=============  ============  ===============================
Single Column Layout: Inserts a column layout in the page.
------------------------------------------------------------
|image63|      |image64|     |image65|   
=============  ============  ===============================

=============  ============  ===============================
Desktop view   Tablet view   Smartphone view  
=============  ============  ===============================
RowResponsive Layout: It inserts a row in the page.
------------------------------------------------------------
|image66|      |image67|     |image68| 
=============  ============  ===============================

=============  ============  ===============================
Desktop view   Tablet view   Smartphone view  
=============  ============  ===============================
Two columns Layout: It inserts two columns in the page.
------------------------------------------------------------
|image69|      |image70|     |image71| 
=============  ============  ===============================

=============  ============  ===============================
Desktop view   Tablet view   Smartphone view  
=============  ============  ===============================
Three columns Layout: It inserts three columns in the page.
------------------------------------------------------------
|image72|      |image73|     |image74|
=============  ============  ===============================

=============  ============  ===============================
Desktop view   Tablet view   Smartphone view  
=============  ============  ===============================
Four columns Layout: It inserts four columns in the page.
------------------------------------------------------------
|image75|      |image76|     |image77|
=============  ============  ===============================

=============  ============  ==============================================
Desktop view   Tablet view   Smartphone view  
=============  ============  ==============================================
Big-Small columns Layout: It inserts a big column followed by a small one.
---------------------------------------------------------------------------
|image78|      |image79|     |image80|
=============  ============  ==============================================

=============  ============  ==============================================
Desktop view   Tablet view   Smartphone view  
=============  ============  ==============================================
Small-Big columns Layout: It inserts a small column followed by a big one.
---------------------------------------------------------------------------
|image81|      |image82|     |image83|
=============  ============  ==============================================


You can find other details about containers here :ref:`Arranging Page Layout <RearrangingPageLayout>`.

.. tip:: You can nest containers i.e add containers into another one.

              |image5|

After selecting the desired layout through containers, you can drag and
drop applications and/or gadgets into the different chosen containers.
For the sites templates Agital, Globex and WAI, all the applications and
gadgets are available and they are categorized under Administration,
Adoption...

With eXo Web Pack add on, in addition to the available
applications, it comes with some components that could be used:

|image6|

-  **Blog articles**: It is a content list viewer portlet  that helps to 
   display different contents/articles.

-  **Embedded Video**: It helps to embed a video to be displayed in a
   page. It supports different videos extensions mp4, mov...

-  **Image Slider**: It displays an image slideshow.

.. _eXoAddonsGuide.WCM.ReusableComponents.ContentTypes:

Content types
~~~~~~~~~~~~~~

When creating a new site through one of eXo Web Pack templates,
a folder is associated to the site under :ref`Sites explorer <PLFRefGuide.Application.Portlets.Content.SitesExplorer>`.
You can add contents, upload files under this folder.

eXo Web Pack addon comes with many new content types such as:

-  **Accessible media**: It adds a content with a media to display. The
   attached media should be following WCAG accessibility guidelines.

   |image7|

-  **Contact us form/Contact us 2 horizontal**: Two variants of a
   contact form that includes name, email ...

   |image8|

-  **Subscribe**: It has a field for email insertion. Same as the
   contact us form it is named with the date and hour of creation.

   |image9|

Check other available content types by installing eXo Web Pack.

|image10|

In the following sections, we will detail how the below content types
are implemented within sample websites (Agital, Globex and WAI) which
could serve as a basis for building rich websites.

.. _eXoAddonsGuide.WCM.HowToUse:

===========
How to use?
===========


A site that you intend to publish is a combination of pages, portlets
and content. In WCM site templates, these components have been
initialized to generate a useful design for you, so you just need to
replace with your new content and decide which parts to be provided for
users. This section will walk you through how to do this.

.. _eXoAddonsGuide.WCM.HowToUse.SettingPermission:

Setting permissions
~~~~~~~~~~~~~~~~~~~~

You can restrict which users/groups that have the right to access or
modify components of the WCM site by setting these permissions for the
entire site, its pages, or even its portlets or specific contents.

.. _WCM.SitePermissions:

Site permissions
-----------------

1. Go to **Administration** --> **Portal** --> **Sites**.

2. Select the WCM site that you have created after installation:

   |image11|

3. Follow :ref:`these instructions <ManagingPermissions.SettingPortalPermissions>`
   to set suitable permissions.

For instance, if you want to publish your site to not only platform
users but also guests that do not have an account, you may set the
*Access* permission as:

|image12|

.. _WCM.PagePortalPermissions:

Page and portlet permissions
------------------------------

1. Go to **Administration** --> **Portal** --> **Pages** and look for the WCM
   pages.

2. Select the WCM page that you would like to change permissions, for
   example:

   |image13|

3. Follow :ref:`these instructions <ManagingPermissions.SettingPagePermissions>`
   to set suitable permissions.

For instance, if you want the Contact page to be available for those who
have a real account, you may set the *Access* permission as:

   |image14|

4. Open **Page Editor** and select the portlets you want to set the Access
   permission. For example, the Address portlet on the Contact page:

   |image15|

5. Tick *Everyone* if you want to make this portlet public to everybody. If
   not, just specify certain groups by using the Add Permission button.

   |image16|

.. _WCM.ContentPermissions:

Content permissions
---------------------

All contents displayed on the WCM site are stored under the *WCM* folder
in Sites Explorer so that you can set permissions on each of them.

1. Go to **Administration** --> **Content** --> **Sites Explorer** and look for
   the WCM folder.

    |image17|

2. Select any content under the WCM folder that you would like to change
   permissions.

3. Click Permissions on the Action bar.

4. Refer to :ref:`this guide <ManagingPermissions>` to set suitable 
   permissions for your documents.

.. _eXoAddonsGuide.WCM.HowToUse.EditingContent:

Editing content
~~~~~~~~~~~~~~~~

Each content displayed on the WCM site is able to be modified. There are
two ways to do this.

.. _OnSiteEditing:

On-site
---------

1. Select Edit from the top navigation bar and tick the Content checkbox to
   edit your site content on-site.

   |image18|

2. Hover your cursor over any content that you want to edit. For instance:

   -  Navigation bar:

      |image19|

   -  Logo:

      |image20|

   -  Articles:

      |image21|
      

.. _ViaSitesExplorerEditing:

Via Sites Explorer
---------------------

To modify a content by this way, you need to find exactly where its
sources are located.

1. Go to **Administration** --> **Content** --> **Sites Explorer**.

2. Look for the content that you want to edit under the WCM folder. For
   example:

   -  Navigation bar:

      |image22|

   -  Logo:

      |image23|

.. note:: The updated content needs to be published again, see :ref:`this guide <eXoAddonsGuide.WCM.HowToUse.CreatingPublishingContent.Publishing>`
          for more details.

.. _eXoAddonsGuide.WCM.HowToUse.CreatingPublishingContent:

Creating and publishing content
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. _eXoAddonsGuide.WCM.HowToUse.CreatingPublishingContent.Create:

Creating content
-----------------

To create a new content, simply put its sources into the right folder
under the WCM folder. For instance, to create a new article:

1. Go to **Administration** --> **Content** --> **Sites Explorer**.

2. Select the *homeArticles* folder.

   |image24|

3. Click the ``New Content`` button on the Action bar.

4. Create the main content for this article. For instance:

   |image25|

5. Click Save or Save & Close to save this article.

.. _eXoAddonsGuide.WCM.HowToUse.CreatingPublishingContent.Publishing:


Publishing content
--------------------

The newly created content will not be published by default. To do this,
follow the steps below:

1. Go to **Administration** --> **Content** --> **Sites Explorer**.

2. Select the content that you want to publish.

3. Click **More** --> **Publications** --> **Published** or **More** --> **Publish**. 
   The content will be available on your WCM site immediately.

    |image26|


.. _eXoAddonsGuide.WCM.Agital:

======
Agital
======

This template is designed with five main pages, including the Home,
About, Services, Blog and Contact pages. In this section, you are going
to learn how to leverage this design to best introduce your company.

Company logo
~~~~~~~~~~~~~

|image27|

The logo is a web content named *AgitalLogo* which is located in the
``WCM/web contents/site artifacts`` folder in **Sites Explorer**.

Navigation bar
~~~~~~~~~~~~~~~

You can define a multi-level navigation bar as follows:

|image28|

This navigation is a web content named *AgitalNavigation* which is
located in the ``WCM/web contents/site artifacts`` folder in **Sites Explorer**.

Home page
~~~~~~~~~~~

This page is a combination of ten portlets that are Banner, Solutions,
Projects, Results, Hello there, News, Welcome, Articles, Why us and
Services. They are arranged like this:

|image29|

The Banner portlet
-------------------

This is an image sliding banner which displays images from the
*homeBanner* folder under the WCM folder. These images will be shown as
follows:

|image30|

Besides, you have an option to include a title and a subtitle for each
image.

The Solutions, Projects and Results portlets
----------------------------------------------

|image31|

These three portlets bring you a chance to present essential
information, such as projects, potential solutions and achievements.
These contents are located in the ``WCM/web contents/site artifacts``
folder with the names *homeProjects*, *homeSolutions* and *homeResults*
respectively.

The Hello there, Welcome and Why us portlets
----------------------------------------------

These portlets allow you to briefly introduce your company. Therefore,
you should try to leverage them to convince customers at a glance. For
instance:

-  The Hello there portlet:

   |image32|

-  The Welcome portlet:

   |image33|

-  The Why us portlet:

   |image34|

Their resources are located in the ``WCM/web contents/site artifacts``
folder with the names *Home, homeWelcomeFolder* and *homeWhyUs*
respectively.

The News and Articles portlets
---------------------------------

These portlets show daily updated information which could be under a
news or an article. The information is displayed as a list by the
created time.

-  The News portlet:

   |image35|

-  The Articles portlet:

   |image36|

.. _eXoAddonsGuide.WCM.SiteSampe.Agital.HomeServices:

The Services portlets
----------------------

The portlet lists the services that your company is offering to
customers.

|image37|

.. _eXoAddonsGuide.WCM.SiteSampe.Agital.About:

About page
~~~~~~~~~~~~

This page contains the Testimonials, A Few Words About Us and Our Work
Team portlets. They are arranged like this:

|image38|

-  The Testimonials portlet shows words from other partners saying about
   your company, products and services. Its resources are located under
   the ``WCM/web contents/site artifacts/aboutTestimonials`` folder.

-  The A Few Words About Us portlet shows brief words about your
   company. Its resources are located under the
   ``WCM/web contents/site artifacts/aboutAFewWordsFolder`` folder.

-  The Our Work Team portlet presents the key members in your company.
   Its resources are located under the
   ``WCM/web contents/site artifacts/aboutOurWorkTeam`` folder.

.. _eXoAddonsGuide.WCM.SiteSampe.Agital.Services:

Services page
~~~~~~~~~~~~~~~~

This page contains only one portlet which is the *Services* portlet.
This portlet displays the same information as :ref:`this one <eXoAddonsGuide.WCM.SiteSampe.Agital.HomeServices>` 
but with an illustrative image and a short description.

|image39|

Blog page
~~~~~~~~~~

This page lists all blog posts as well as their categories and archives.

|image40|

The Comment feature is integrated to allow commenting on each blog
entry.

Contact page
~~~~~~~~~~~~~~~

This page provides you with three useful tools which are the *Contact
Us, Contact Form* and *Address* portlets.

|image41|

These portlets help you to show the company address and provide a form
to collect feedback from customers.

.. _eXoAddonsGuide.WCM.Globex:

======
Globex
======

This template is for a landing page that helps you to present your
company product effectively. The template is divided into two parts:

-  The first part with the *Title, Introduction, Services, Feature,
   Video* and *Quote* portlets.

   |image42|

-  The second part with the *PricingLeft, PricingRight1, PricingRight2,
   WhatTheySay, AskedQuestions, SubscribesLeft, SubscribesRight,
   ContactLeft* and *ContactRight* portlets.

   |image43|

You will be introduced each of these portlets in more details about
their usage.

**Title**

This is a web content that contains a background image, company name and
some additional titles.

|image44|

These resources are located in the
``WCM/web contents/site artifacts/Title`` folder.

**Introduction**

This is a web content that shows a short description about your product.

|image45|

The resource is located in the
``WCM/web contents/site artifacts/introductions`` folder.

**Services**

This is the same as :ref:`this portlet <eXoAddonsGuide.WCM.SiteSampe.Agital.Services>` 
but with an additional title and subtitle.

|image46|

**Features**

This portlet presents the most outstanding features of your product.

|image47|

You can find the resources in the
``WCM/web contents/site artifacts/Features`` folder.

**Video**

This portlet embeds an introduction video of your product. Supported
videos include youtube, vimeo and dailymotion.

|image48|

You can find the resources in the
``WCM/web contents/site artifacts/video`` content.

**Quote**

This portlet shows well-known words of a celebrity.

|image49|

You can find the resources in the
``WCM/web contents/site artifacts/quote`` content.

**Pricing**

This section contains three portlets that allow you to provide customers
with pricing information for basic and professional versions of your
product.

|image50|

You can find the resources named *pricingleft, pricingmid* and
*pricingright* in the ``WCM/web contents/site artifacts`` folder.

**WhatTheySay**

This is the same as the Testimonials portlet in :ref:`this template <eXoAddonsGuide.WCM.SiteSampe.Agital.About>`
but with a different style.

|image51|

You can find the resources in the
``WCM/web contents/site artifacts/whattheysay`` folder.

**Asked Questions**

This portlet displays the most frequently asked questions from your
customers.

|image52|

You can find the resources in the
``WCM/web contents/site artifacts/AskedQuestions`` folder.

**Subscription**

This portlet allows people to subscribe your product by their email.

|image53|

You can find the resources in the
``WCM/web contents/site artifacts/subscribes`` content.

**Contacts**

This portlet helps you to show the company address and provide a form to
collect feedback from customers.

|image54|

You can find the resources in the
``WCM/web contents/site artifacts/contact`` content.

.. _eXoAddonsGuide.WCM.WAI:

===
WAI
===


WAI is a web template designed to be as accessible as
possible to all who seek access to information on a website. eXo Platform
makes the website with this template available to any user, regardless
of its visual, auditory, physical, speech, cognitive, and neurological
disabilities. To achieve this, the goal is to reach a level of access
consistent with some standards such as WCAG 2.0 (Web Content
Accessibility Guidelines) and also the RGAA for the French
Administration. eXo Platform has been improved to be compliant with these
rules. Therefore, by using WAI template, eXo Platform
provides users with a way to create an accessible site and accessible
contents regardless of their roles. This site is accessible without
JavaScript enabled on the browser.

To check the compliance of this template, the following tools are used:

-  `W3C validator <http://validator.w3.org/>`__ XHTML 1.0 Transitional

-  `Achecker <http://achecker.ca/checker/index.php>`__ with the rules of
   WCAG 2.0 AA

.. _WAI.HowToUse:

How to use WAI template
~~~~~~~~~~~~~~~~~~~~~~~~

The homepage of WAI appears as below.

|image55|

This accessible site provides you with some following features:

-  **Skip to content** |image56| : Ignores navigation links, banner, or
   redundant information, and directly go to the main content of a page.

-  **Site map** |image57| : Shows a list of pages of the current
   template.

-  **Accessibility** |image58|: Accesses a specific page about the
   accessibility policy. It explains what the accessibility is, how to
   navigate into the site, and describes the available features of the
   accessible portal.

-  **Font size** |image59| : Selects your desired font size, including
   **Normal**, **Medium**, and **Large** sizes. The default size is
   **Normal**.

-  **Color themes** |image60| : Changes the skin color of the website
   into **High Contrast**, or return to the default skin with **Normal
   Contrast**.

-  **Search** |image61| : Searches for accessible content in the website.

-  **Breadcrumb** |image62| : Eases and keeps a consistent navigation.
   With the breadcrumb, you can easily navigate in an accessible
   website.

-  **Navigation without JavaScript**: One of the successful criteria of
   a website is to have accessible links and menu before the content
   when it is displayed like a screen reader. If JavaScript is disabled,
   you are still able to navigate, and the menu is expanded by default
   in this case.



.. |image0| image:: images/wcm/agital_interface.png
.. |image1| image:: images/wcm/globex_interface.png
.. |image2| image:: images/wcm/wai_interface.png
.. |image3| image:: images/wcm/select_template.png
.. |image4| image:: images/wcm/containers.png
   :width: 7.00000cm
.. |image5| image:: images/wcm/nested_containers.png
   :width: 10.00000cm
.. |image6| image:: images/wcm/components.png
   :width: 7.00000cm
.. |image7| image:: images/wcm/accMedia.png
   :width: 10.00000cm
.. |image8| image:: images/wcm/contactus.png
   :width: 10.00000cm
.. |image9| image:: images/wcm/subscribe.png
   :width: 10.00000cm
.. |image10| image:: images/wcm/contents.png
   :width: 7.00000cm
.. |image11| image:: images/wcm/wcm_site_config.png
.. |image12| image:: images/wcm/wcm_access_permission.png
.. |image13| image:: images/wcm/wcm_pages.png
.. |image14| image:: images/wcm/page_permission.png
.. |image15| image:: images/wcm/portlet_edit.png
.. |image16| image:: images/wcm/portlet_permission.png
.. |image17| image:: images/wcm/wcm_folder.png
.. |image18| image:: images/wcm/edit_content.png
.. |image19| image:: images/wcm/menu_bar.png
.. |image20| image:: images/wcm/logo.png
.. |image21| image:: images/wcm/articles.png
.. |image22| image:: images/wcm/navigation_bar_site_explorer.png
.. |image23| image:: images/wcm/logo_site_explorer.png
.. |image24| image:: images/wcm/home_articles.png
.. |image25| image:: images/wcm/new_article.png
.. |image26| image:: images/wcm/publish_publication.png
.. |image27| image:: images/wcm/logo_agital.png
.. |image28| image:: images/wcm/navigation_agital.png
.. |image29| image:: images/wcm/home_layout.png
.. |image30| image:: images/wcm/slide_banner.png
.. |image31| image:: images/wcm/solution_project_result_agital.png
.. |image32| image:: images/wcm/hello_there.png
.. |image33| image:: images/wcm/welcome_agital.png
.. |image34| image:: images/wcm/why_us.png
.. |image35| image:: images/wcm/news_agital.png
.. |image36| image:: images/wcm/article_agital.png
.. |image37| image:: images/wcm/services_agital.png
.. |image38| image:: images/wcm/about_page_agital.png
.. |image39| image:: images/wcm/services_agital_portlet.png
.. |image40| image:: images/wcm/blog_agital.png
.. |image41| image:: images/wcm/contact_agital.png
.. |image42| image:: images/wcm/globex_layout_top.png
.. |image43| image:: images/wcm/globex_layout_bottom.png
.. |image44| image:: images/wcm/globex_title.png
.. |image45| image:: images/wcm/globex_introduction.png
.. |image46| image:: images/wcm/globex_services.png
.. |image47| image:: images/wcm/globex_feature.png
.. |image48| image:: images/wcm/globex_video.png
.. |image49| image:: images/wcm/globex_quote.png
.. |image50| image:: images/wcm/globex_price.png
.. |image51| image:: images/wcm/globex_whattheysay.png
.. |image52| image:: images/wcm/globex_question.png
.. |image53| image:: images/wcm/globex_subscribe.png
.. |image54| image:: images/wcm/globex_contact.png
.. |image55| image:: images/wai/WAI_interface.png
.. |image56| image:: images/common/1.png
   :width: 0.40000cm
.. |image57| image:: images/common/2.png
   :width: 0.40000cm
.. |image58| image:: images/common/3.png
   :width: 0.40000cm
.. |image59| image:: images/common/4.png
   :width: 0.40000cm
.. |image60| image:: images/common/5.png
   :width: 0.40000cm
.. |image61| image:: images/common/6.png
   :width: 0.40000cm
.. |image62| image:: images/common/7.png
   :width: 0.40000cm

.. |image63| image:: images/wcm/L1_desktop.png
.. |image64| image:: images/wcm/L1_tablet.png
.. |image65| image:: images/wcm/L1_smartphone.png
.. |image66| image:: images/wcm/L2_desktop.png
.. |image67| image:: images/wcm/L2_tablet.png
.. |image68| image:: images/wcm/L2_smartphone.png
.. |image69| image:: images/wcm/L3_desktop.png
.. |image70| image:: images/wcm/L3_tablet.png
.. |image71| image:: images/wcm/L3_smartphone.png
.. |image72| image:: images/wcm/L4_desktop.png
.. |image73| image:: images/wcm/L4_tablet.png
.. |image74| image:: images/wcm/L4_smartphone.png
.. |image75| image:: images/wcm/L5_desktop.png
.. |image76| image:: images/wcm/L5_tablet.png
.. |image77| image:: images/wcm/L5_smartphone.png
.. |image78| image:: images/wcm/L6_desktop.png
.. |image79| image:: images/wcm/L6_tablet.png
.. |image80| image:: images/wcm/L6_smartphone.png
.. |image81| image:: images/wcm/L7_desktop.png
.. |image82| image:: images/wcm/L7_tablet.png
.. |image83| image:: images/wcm/L7_smartphone.png
