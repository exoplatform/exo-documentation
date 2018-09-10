.. _Manage-Sites:

#######################
Managing Your Websites
#######################

    Content is a main part of a website that may consist of various
    elements, such as texts, images, sounds, videos, animations, and
    more. In eXo Platform, you can manage both structured and unstructured
    content.

    To create and manage the content more effectively and dynamically,
    you need to pay attention to the structure of each content,
    including:

    -  **Main content** contains all key content, such as texts, images,
       links, tables, and more.

    -  **Illustration** is an image which is used to clarify or explain 
       the content. Also, a summary also can be added to this image.

    -  **CSS Data** are used to present the web content, such as layout,
       font, color, and more.

    -  **JS Data** are used to make web content more animating and dynamic.

    In this chapter, with the role as a web-contributor, you will know
    how to effectively manage your websites via the following topics:

    - :ref:`Contributing content <ContributingContent>`
       Introduction to the **Edit** mode, procedures to do actions in
       **InContext Editing**, **Inline Editing**, **CKEditor** and
       information about the publication process.

    - :ref:`Publication process <PublicationProcess>`
       Introduction to the publication process of content and how to
       manage the publication.

    - :ref:`Managing content list viewer byquery <ManagingCLVByQuery>`
       Introduction to the **Content By Query** portlet and detailed
       steps to add this portlet to a specific page.

    - :ref:`Managing categories <ManagingCategories>`
       Introduction to how to work with categories in Sites Explorer via
       the Add category and Manage Categories actions added to the
       Action bar.

    - :ref:`Creating content inside a category <CreatingContentInsideCategory>`
       Steps to create content in a category.

    - :ref:`Managing content in a specific site <ManagingContentInSitesExplorer>`
       Information about Web content, and detailed steps to create,
       edit, delete, publish and search for web content via the Sites
       Management drive.

    - :ref:`Adding translations to content <AddingTranslationsToDocument>`
       Instructions on how to add multiple languages for content.

    - :ref:`Using WebDAV <UsingWebDAV>`
       Two ways to access a website using **WebDAV**, how to add/delete
       new web content in **WebDAV**.

    - :ref:`Managing content with Fast Content Creator <ManagingContentWithFastContentCreator>`
       Introduction to the **Fast Content Creator** portlet, steps to
       configure this portlet and to create and view content with this
       portlet.

    - :ref:`Managing category navigation <CategoryNavigation>`
       Instructions on how to access and configure the **Category
       Navigation** portlet.

    - :ref:`Managing SEO <ManagingSEO>`
       Introduction to **Search Engine Optimization (SEO)**, steps to
       manage **SEO** data of web pages, web content and optimize your
       website for search engine.

    - :ref:`Searching content in a site <SearchingForContentInASite>`
       Steps to search for content and to configure the **Search**
       portlet.

    - :ref:`Printing content <PrintingContent>`
       Steps to print any content in a site.

.. _ContributingContent:

====================
Contributing content
====================

This function allows web-contributors to edit content, quickly access
content list folders from the homepage of the current site, publish
content without using the :ref:`Manage Publication <ManagingPublication>`
function in **Sites Explorer**.

This section consists of the following topics:

-  :ref:`Edit mode <EditMode>`
   Introduction to the Edit mode in eXo Platform, how to enable and use this
   mode.

-  :ref:`CKEditor <CKEditor>`
   Introduction to the additional features of CKEditor in eXo Platform.

.. _EditMode:

Edit mode
~~~~~~~~~~

When you access the :ref:`Agital <#eXoAddonsGuide.WCM.Agital>` site, by
default, the site content is in the **published mode** and you cannot
edit them.

However, eXo Platform provides you with the **Edit** mode which enables you
to edit all content of the Agital site by using the :ref:`InContext Editing <InContextEditing>`
and :ref:`Inline Editing <InlineEditing>` features.

When hovering your cursor over content, you can see |image0| which
enables you to quickly edit this content in Sites Explorer. You can take
advantage of this feature to submit content to a page.

.. _TurningOnTheEditMode:

To turn on the **Edit** mode, click Edit on the top navigation bar, then
select Content from the drop-down menu.

|image1|

For single content viewer (SCV), you can see the current state of the
content, the Edit Content icon and Preferences icon.

|image2|

For content list viewer (CLV), you can see the current state of the
content, the Edit Content icon, the Preferences icon, the Add Content
icon and the Manage Content icon.

|image3|

.. _InContextEditing:

InContext Editing
------------------

By using the **InContext Editing** feature, the process of editing a
page becomes more intuitive. This feature allows you to edit content "in
context" without using the WYSIWYG editor, and the new content will
automatically override the old one.

To use **InContext Editing**, you first need to turn on the `Edit Mode <TurningOnTheEditMode>`.

.. _AddingContentInContext:

Adding content
```````````````

.. note:: Adding new content by using **InContext Editing** is enabled for the **content list viewer** (CLV) only.

1. Turn on the :ref:`Edit Mode <TurningOnTheEditMode>`, then hover your
   cursor over the CLV to which you want to add new content.

2. Click |image4| on the CLV.

You will be redirected to the **Sites Explorer** in the creation form of
the content having the same type as other contents in the CLV.

|image5|

**Details:**

+-----------------------+----------------------------------------------------+
| Field                 | Description                                        |
+=======================+====================================================+
|   |image6|            | Maximizes/minimizes the screen.                    |
+-----------------------+----------------------------------------------------+
| Close                 | Closes the content creation form without saving    |
|                       | the content.                                       |
+-----------------------+----------------------------------------------------+
| Save and Close        | Saves the changes done and closes the creation     |
|                       | form.                                              |
+-----------------------+----------------------------------------------------+
| Save                  | Saves the changes done without closing the         |
|                       | creation form.                                     |
+-----------------------+----------------------------------------------------+

3. Fill all the fields in the form. The field name is required.

4.Click Save or Save & Close to save the content.

After closing the content form, you can view the content and do some
actions listed on the Action bar for the content. See the 
:ref:`Working with basic actions <WorkingWithBasicActions>` for more 
details.

|image7|

.. note:: The folder, where a document is saved, is the path you have selected in the :ref:`Managing preferences <ManagingPreferences>` section.

.. _EditContentIncontext:

Editing content
````````````````

You can edit any content on the homepage for SCV and CLV with
**InContext Editing**.

1. Turn on the :ref:`Edit Mode <TurningOnTheEditMode>`, then hover your
   cursor over the content you want to edit, and click |pencil| at the
   right corner. You will be directed to **Sites Explorer** with the
   document form for you to edit.

|image8|

2. Make changes on the content, then click Save or Save & Close to 
   accept your changes.

   After closing the Edit form, the content is in the Document View.

|image9|

3. Click |image10| to return to the site. In the **Edit** mode, your new
   content will be in the "Draft" state with its visible modifications.

|image11|

4. Click |image12| to publish your edited content. Your content is now 
   in the "Published" state.

.. note:: You cannot see the edited content in the draft state when you turn off the **Edit** mode.

.. _ManageContentInContext:

Managing content
`````````````````

With **InContext Editing**, you can easily manage a content list viewer
on the page. You can add new content, edit, delete an existing content
or copy/cut/paste in the CLV and take more actions in the right-click
menu.

**Adding content in the CLV**

1. Turn on the :ref`Edit Mode <TurningOnTheEditMode>`.

2. Hover your cursor over the CLV to which you want to add new content 
   on the homepage, and clicck |image13|.

You will be directed to the **Sites Explorer** page.

|image14|

3. Select |Add Document| on the Action bar.

4. Do the same steps as in the :ref:`Adding Content <AddingContentInContext>` 
   section.

**Do other actions**

You can do many different actions for specific content in the CLV. See
the :ref:`Working with basic actions <WorkingWithBasicActions>` section.

.. _ManagingPreferences:

Managing preferences
``````````````````````

Preferences enable you to edit content in the single content viewer
(SCV) and the content list viewer (CLV), reset the display of the
content in SCV and CLV and publish content.

**Editing the single content viewer**

1. Turn on the :ref:`Edit Mode <TurningOnTheEditMode>`.

2. Hover your cursor over a single content viewer and select |image15| 
   of a single content viewer.

The Content Detail Preferences dialog appears.

|image16|

**Details:**

+-----------------------+----------------------------------------------------+
| Field                 | Description                                        |
+=======================+====================================================+
| The Content Selection | Content Path: Select the path of the content that  |
| tab                   | you want to show.                                  |
+-----------------------+----------------------------------------------------+
| The Display Settings  | Configure the visibility of Title, Date and Option |
| tab                   | Bar.                                               |
|                       |                                                    |
|                       | -  Show Title: Select this checkbox to display the |
|                       |    title of the content.                           |
|                       |                                                    |
|                       | -  Show Date: Select this checkbox to display the  |
|                       |    date of the content publication.                |
|                       |                                                    |
|                       | -  Show Option Bar: Select this checkbox to        |
|                       |    display the Option bar which is used to show    |
|                       |    the print link.                                 |
|                       |                                                    |                                                                           
+-----------------------+----------------------------------------------------+
| The Print Settings    | -  Show in Page: The content is shown in the page. |
| tab                   |                                                    |
|                       | -  with: Parameters contain the content path.      |
|                       |                                                    |                                                                          
+-----------------------+----------------------------------------------------+
| The Advanced tab      | This tab consists of two parts:                    |
|                       |                                                    |
|                       | -  Dynamic Navigation: Allow you to get a          |
|                       |    parameter to configure the portlet by URL. It   |
|                       |    means that the URL containing the content path  |
|                       |    can be dynamically changed.                     |
|                       |                                                    |
|                       |    -  Disable: The single content will be opened   |
|                       |       by an URL containing the Content Path.       |
|                       |                                                    |
|                       |    -  Enable: This portlet is configured with the  |
|                       |       provided parameter ("content-id" by default) |
|                       |       and the content.                             |
|                       |                                                    |
|                       | -  Content Visibility: Allow you to use a cache    |
|                       |    shared between users to get content. If you     |
|                       |    want to get content, which are displayed in CLV |
|                       |    or SCV, from one cache, select Restricted by    |
|                       |    Authentication. If not, select Restricted by    |
|                       |    User Roles. In most cases, you should not       |
|                       |    switch to Restricted by User Roles as it        |
|                       |    reduces the overall performance.                |
|                       |                                                    |                                                                            
+-----------------------+----------------------------------------------------+


.. note:: Hover your cursor over |question mark| to see a quick help for each section.

3. Click |image18| next to the Content Path to select another content. 
   The Select Content dialog appears.

4. Select a folder in the left pane, and its content in the right pane. 
   The selected content will be displayed in the Content Path field.

5. Tick the checkboxes, including Show Title, Show Date and Show Option
   Bar, if you want to display the content title, the publication date 
   and the print button like the illustration below.

|image19|

**i.** In the Print Setting part, click |magnifying glass| to open the
UIPageSelector dialog.

**ii.** Click |magnifying glass1|, then click a folder on the left and
select a page which will show the content on the right by clicking
|image20|.

6. Click Save to save all your changes.

.. _ContentListPreferences:

**Editing the content list viewer**

1. Turn on the :ref:`Edit Mode <TurningOnTheEditMode>`, then hover your
   cursor over a content list viewer and select |image23|.

|image24|

The Content List Preferences dialog appears.

|image25|

.. _Dynamic-Navigation:

**Details:**

+--------------------------+--------------------------------------------------+
| Field                    | Description                                      |
+==========================+==================================================+
| The Content Selection    | Mode: This mode is to select web content for the |
| tab                      | list viewer. There are two modes:                |
|                          |                                                  |
|                          | -  By Folder: Allows selecting a content folder  |
|                          |    in the Folder Path field.                     |
|                          |                                                  |
|                          | -  By Content: Allows selecting by the content   |
|                          |    in a specific folder in Folder Path field.    |
|                          |                                                  |
|                          | Folder Path: The path to a location of a folder  |
|                          | that contains the content.                       |
|                          |                                                  |
|                          | Order by: Sorts content in the List Viewer by    |
|                          | Title, Created Date, Modified Date, Published    |
|                          | Date, Event Date, or Index in the ascending or   |
|                          | descending order.                                |
+--------------------------+--------------------------------------------------+
| The Display Settings tab | Header: The title of all content that is shown   |
|                          | on the top of the content list viewer.           |
|                          |                                                  |
|                          | -  Automatic Detection: Ticks this checkbox to   |
|                          |    enable automatically detecting the header of  |
|                          |    the content list viewer basing on the current |
|                          |    selection.                                    |
|                          |                                                  |
|                          | Template: The template which is used to view the |
|                          | content list.                                    |
|                          |                                                  |
|                          | Paginator: The template which is used to view    |
|                          | each content in the list.                        |
|                          |                                                  |
|                          | Items per Page: The number of items which will   |
|                          | be displayed per page.                           |
|                          |                                                  |
|                          | The following options which can be shown or      |
|                          | hidden by ticking or unticking checkboxes        |
|                          | respectively.                                    |
|                          |                                                  |
|                          | -  Show Title: Title of each published web       |
|                          |    content/document.                             |
|                          |                                                  |
|                          | -  Show Header: Header of each published web     |
|                          |    content/document.                             |
|                          |                                                  |
|                          | -  Show Refresh: The Refresh button at the left  |
|                          |    bottom of the page.                           |
|                          |                                                  |
|                          | -  Show Image: The illustration of each          |
|                          |    published web content/document.               |
|                          |                                                  |
|                          | -  Show Date: The created date of each published |
|                          |    web content/document.                         |
|                          |                                                  |
|                          | -  Show More Links: The Read more link to read   |
|                          |    all the content of web content and/or         |
|                          |    document.                                     |
|                          |                                                  |
|                          | -  Show Summary: The summary of each web         |
|                          |    content/document.                             |
|                          |                                                  |
|                          | -  Show Link: The link of web content/document.  |
|                          |                                                  |
|                          | -  Show RSS Link: The RSS link of all content of |
|                          |    web content/document.                         |
|                          |                                                  |                                                                           
+--------------------------+--------------------------------------------------+
| The Advanced tab         | Dynamic Navigation                               |
|                          |                                                  |
|                          | -  Disable: The single content will be opened by |
|                          |    an URL containing the Content Path.           |
|                          |                                                  |
|                          | -  Enable: This portlet is configured with the   |
|                          |    provided parameter (content-id by default).   |
|                          |                                                  |
|                          | -  By: This parameter is the key in the URL to   |
|                          |    let CLV know which really is the path in the  |
|                          |    current URL.                                  |
|                          |                                                  |
|                          | -  Show in Page: The single content in CLV will  |
|                          |    be shown in a selected page. You can select   |
|                          |    any page but should take one with a Content   |
|                          |    Detail Portlet. The "Dynamic Navigation" is   |
|                          |    enabled in the Content Detail Portlet that    |
|                          |    interprets the URL and shows a single         |
|                          |    content.                                      |
|                          |                                                  |
|                          | -  With: This parameter is the key in the URL to |
|                          |    let SCV know which really is the path in the  |
|                          |    current URL.                                  |
|                          |                                                  |
|                          | Content Visibility: Allows using a cache shared  |
|                          | between users to get content. If you want to get |
|                          | content which is displayed in CLV or SCV from    |
|                          | one cache, select Restricted by Authentication   |
|                          | (default). If not, select Restricted by User     |
|                          | Roles. In most cases, you should not switch to   |
|                          | Restricted by User Roles as it reduces the       |
|                          | overall performance.                             |
+--------------------------+--------------------------------------------------+

2. Select the Content Selection tab:

-  Select content you want to show on the content list viewer by
   clicking |image26| next to the Folder Path field.

   -  If you select the By Folder mode, select an available site on the
      left, then select a folder that contains content (documents and/or
      web content) on the right by clicking the folder.

   -  If you select the By Content mode, select an available folder from
      the left pane, all content in this folder will be listed in the
      right pane. Click content on the right that you want to add to the
      content list. There will be a message, informing that you have
      successfully added it to the Content List. The selected content
      will be listed in the Content List.

-  Click the Order by field and select one criterion to sort the content
   list in the ascending or descending order.

3. Select the Display settings tab:

-  Enter a header for the content list in the Header field if you want.

-  Select a template to display the content list in the template list.

-  Tick/Untick your desired options.

4. Select the Advanced tab to activate the dynamic navigation and select
   the content visibility.

5. Click Save to accept your changes.

.. _InlineEditing:

Inline Editing
---------------

The **Inline Editing** mode allows you to edit directly on the page
without going to a separate one. By using this mode, you can edit the
text in the same location in such an intuitive and convenient manner.

**Do the Inline Editing**

1. Turn on the :ref:`Edit Mode <TurningOnTheEditMode>`, then hover your
   cursor over the area you want to edit. The editable area will be
   highlighted.

2. Click the area you want to edit.

|image27|

The Edit area will be displayed with the
`CKEditor <http://ckeditor.com/demo>`__ as below. (See more information
about CKEditor :ref:`here <CKEditor>`.)

|image28|

3. Make changes on your selected area.

4. Click |image29| to accept, or |image30| to discard changes.

-  After you have made changes on your content, it is in the **Draft**
   state.

-  Click |image31| to publish the content. Now, your edited content is
   in the **Published** state.

.. _CKEditor:

CKEditor
~~~~~~~~~

When using CKEditor to write/edit a document in eXo Platform, you can also:

- :ref:`Insert a site link to the document <CKEditor.InsertingSiteLink>`

- :ref:`Insert a content link to the document <CKEditor.InsertingContentLink>`

- :ref:`Upload an image to the document <CKEditor.InsertingImage>`


.. _CKEditor.InsertingSiteLink:

**Inserting a site link**

1. Click |image32| to open the Insert link to a site page form.

|image33|

2. Enter the site title of the link in the Title field.

3. Enter the site URL manually, or you can also click Get portal link to
   open a page containing all the sites in the same server, then select 
   one that you want.

4. Click Preview to view the site.

5. Click Save to accept inserting the site to the document.

.. _CKEditor.InsertingContentLink:

**Inserting a content link**

1. Click |image34| to open a page.

|image35|

2. Click the plus before the document name, or click directly the 
   document name in the left pane to show the content in the right pane,
   or click |image36| to upload a file from your local device.

3. Click content that you want to insert to the document.

.. _CKEditor.InsertingImage:

**Image Upload through CKEditor**

1. Click |image37| to open the upload image form.

|image38|

2. Click on Browse server to open the WCM Content selector allowing to
   upload from desktop or to select an existing attached image.

-  By default, the WCM content selector opens the folder where the
   webcontent/Illustrated webcontent will be saved.

   |image39|

   In this case, the webcontent is added under
   ``sites/intranet/web contents``.

-  If the WCM Content selector has already been opened and a file has
   been selected then this last location will be displayed.

   |image40|

   As an example of this case:

   -  Go to file Explorer under /sites/intranet/web contents and create
      a new webcontent.

   -  Click |image41| to insert an image and then Browse server.

   -  The WCM content selector opens the folder
      ``/sites/intranet/web contents`` (the first case). Browse to get,
      for example, under the path ``sites/intranet/medias``, upload an
      image and insert it to the webcontent.

   -  Reclick |image42| and then on Browse server, the WCM contents
      selector will open the last location which is
      ``sites/intranet/medias`` and not the default one
      ``/sites/intranet/web contents``.

3. Select an image from the existing ones or click on |image43| to 
   upload an image from your desktop then select it.

4. The image will be first previewed in the Image properties form.

|image44|

5. Click OK, the image will be inserted in the webcontent.

6. To finalize the webcontent/illustrated webcontent creation, click on
   Save or Save and close.

|image45|

.. _PublicationProcess:

===================
Publication process
===================

After new content has been created, it is saved as draft and must be
approved before publishing by the web-contributors or administrator. The
publication process consists of three steps:

**Request for Approval** --> **Approval** --> **Publish**.

.. _SendAppRequest:

Sending approval request
~~~~~~~~~~~~~~~~~~~~~~~~~

If you want to publish your content without having the "Approve" or
"Publish" right, you first need to send a request for approval by
clicking |image46| on the Action bar.

.. _AppContent:

Approving content
~~~~~~~~~~~~~~~~~~

If you have the right to approve or publish content, you will see a list
of content waiting for your approval at the bottom of the Sites
Explorer.

|image47|

To approve the content, do as follows:

1. Click the content to review.

2. Click |image48| on the Action bar to approve the content.

.. note:: If you have the right to publish content, you can publish it immediately without the Approval step.
		  After being approved/published, the content is removed from the list of Waiting For My Approval at the bottom of the Sites Explorer.

.. _PublishContent:

Publishing content
~~~~~~~~~~~~~~~~~~~

You can an quickly publish content by opening your desired content, then
clicking |image49|.

.. _ManagingPublication:

Managing publication
~~~~~~~~~~~~~~~~~~~~~

This function allows you to manage the content publication. You can
publish or unpublish any content or publish the content in a given
period. Also, you can review the publication history of the content.

1. Select content (on the left or right pane) which you want to manage 
   its publication.

2. Click |Manage Publications| on the Action bar.

The Manage Publication form appears.

|image50|

-  The Revision tab displays some basic information and the current
   state of the selected node.

   -  The |magnifying glass2| icon allows you to view the content of
      the node.

   -  The |Restore Version| icon allows you to restore a version
      of the node (refer to :ref:`Activating document versioning <ActivatingDocumentVersion>`
      for more details).

-  The Scheduled tab allows you to publish content in a period.

-  The History tab allows you review the publication history of the
   content.

3. Set the status for the content by ticking the corresponding checkbox 
   in the Revision tab.

-  *Draft*: The content is in draft.

-  *Pending*: The content is waiting for approval to publish.

-  *Approved*: The content is approved.

-  *Scheduled*: The content is published in a period. When checking this
   checkbox, you will see the Scheduled tab. Select this tab, then click
   From/To to select the start and end dates for publication from a
   mini-calendar.

   |image51|

   Click Save to accept publishing the content as the schedule.

.. note:: To publish your content forever, you should not set time in the To field.

-  *Published*: The content is published immediately and permanently.

4. Click Close to quit the form.

.. _ManagingCLVByQuery:

=====================================
Managing content list viewer by query
=====================================

The **Content By Query** portlet allows you to collect and display data
throughout a workspace by using a query instead of selecting items by a
folder or by content.

To use this portlet, first you need to add the **Content By Query**
portlet to a specific page as follows:

1. Drag and drop the **Content By Query** portlet from the 
   **Page Editor** --> **Applications** --> **Content**
   to the main pane. This can be done while :ref:`creating a new page <ManagingPages.AddingNewPage>`
   or :ref:`editing an existing page <ManagingPages.EditingPage>`
   or :ref:`editing the layout of a site <EditingLayout>`.

|image52|

2. Edit the **Content By Query** portlet by hovering your cursor over 
   it, then click |pencil1| to edit the portlet.

|image53|

The form with the Edit Mode tab appears.

|image54|

To know the details about the fields in this form, see
:ref:`here <ManagingPreferences>`.

3. In the Advanced tab, enter a valid query into the by query field to 
   get data that you want to display.

4. Select a workspace where you want to get data.

5. Click Save to complete adding the **Content By Query** portlet.

6. Click |image55| to quit the **Page Editor** page and see the 
   displayed data.


.. _ManagingCategories:

===================
Managing categories
===================

As a web-contributors, you can easily work with categories in Sites
Explorer via the Add category and Manage Categories actions added to the
Action bar.

By default, these buttons are available in the Categories and Web views.
To know which drives have these views, see
:ref:`here <WorkingWithExplorer.Drives>` for more details.

.. _CreateNewCat:

Creating a new category
~~~~~~~~~~~~~~~~~~~~~~~~

This function enables you to quickly create a new category in Sites
Explorer.

1. Select a folder in which you want to create a new category.

2. Select |Add category| on the Action bar to open the Add Category
   form.

|image56|

3. Enter a name for the category in the Category Name field.

4. Click Save to accept creating the new category.

.. _AssignCatToContent:

Assigning a category to content
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can assign available categories to content/document folders only.

1. Select a content/document folder to which you want to assign a 
   category.

2. Click |Manage Categories| on the Action bar.

The Add Category form appears.

3. Select the Select Category tab to show the available categories.

|image57|

4. Select a category tree for the content/folder.

5. Click |green tick| next to Root Tree to add the category tree to
   the content/folder.

   Or/And click a category on the left, then click |green tick1|
   corresponding to the child category on the right to add it to the
   content/folder.

The categories added to the content/folder will be listed in the
Referenced Categories tab.

|image58|

.. note:: You can add many categories to content.

.. _ViewCategory:

Viewing a category
~~~~~~~~~~~~~~~~~~~~

Viewing a category allows you know which content is added to the
category and you can view it by double-clicking its name or do many
different actions in the right-click menu.

1. Go to the drive which contains the category you have added. There 
   will be a list of categories available.

2. Select your desired category. The content added to that category 
   will be listed.

|image59|

.. note:: To know which drives contain categories, see :ref:`Categories <WorkingWithAdvancedConfiguration.Categories>` in Content Administration.
		   When copying and pasting content in the category tree, a reference to the original content will be created. This reference is a symlink rather than a copy. This feature is used to preserve the disk space.

.. _RemoveCatFromContent:

Removing a category from content
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Select content to which categories have been added.

2. Click |Manage Categories| on the Action bar.

3. Select the Referenced Categories tab.

4. Click |trash can| that corresponds to the category you want to delete.


.. _CreatingContentInsideCategory:

==================================
Creating content inside a category
==================================

In eXo Platform, you can create new content in any folders or directly 
in a CLV with **Incontext Editing.** However, to facilitate the content
management, categories which are usually used to sort and organize
documents make your desired searches more quickly. Also, creating
content inside a category helps you manage and publish them effectively.

After creating a document, you should categorize it by adding it to a
category. Otherwise, documents should be created right in a category and
links to those documents will be automatically created in the category.
In eXo Platform, categories are stored in JCR.

.. _CreateContentInCat:

Creating content in a category
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Click |image60| --> Content --> Sites Explorer on the top navigation 
   bar.

2. Open the drives list, and select a drive that has categories, for
   example, Collaboration.

|image61|

3. Select a category where you want to add new content.

4. Click |image62| on the Action bar to create the new content. See the
:ref:`Creating new web content <CreatingNewWebContent>`
section to know how to add new content. The new content is stored in the
category as a symlink and also stored in also stored in another folder
depending on the target path configured while creating a category tree
by Administrator.

To view the content, simply click the Symlink.

|image63|


.. _ManagingContentInSitesExplorer:

===================================
Managing content in a specific site
===================================

Web content is a key resource which is used for a site. Other resources
make a site more dynamic and animated by using layout, color, font, and
more. This section focuses on how to manage web content in a specific
site via the Sites Management drive which allows you to manage content
of all sites in the portal.

This section consists of the following topics:

- :ref:`Creating new web content <CreatingNewWebContent>`
   Instructions on how to create new web content in a specific site.

- :ref:`Editing/Publishing/Deleting web content <EditingPublishingDeletingWebContent>`
   Instructions on how to edit/publish/delete web content.

 .. note:: Only users who have the right to access the Sites Management drive can do it.

.. _CreatingNewWebContent:

Creating new web content
~~~~~~~~~~~~~~~~~~~~~~~~~

1. Go to the Sites Management drive, then select a site to which you want
   to add web content.

2. Select the **web content** folder on the left.

.. note:: In this step, you also can add new web content into another folders (documents and media folders) of a site but you are recommended to select the **web content** folder because:
			-  Managing web content of a site becomes more easily.
			-  You do not have to select many web content types in the list of document types. It makes adding new web content more flexibly.

3. Click |image64| on the Action bar to open 
   :ref:`a list of content templates <AddingContentInContext>`, 
   including *Illustrated Web Content* and *Web content*.

4. Select a template to present the web content by clicking one.

5. Enter values in fields of the form.

6. Click Save or Save & Close to save the content or Close to quit the 
   Add New Document form.

Tabs in the Add New Document form
-----------------------------------

-  The Main Content tab

   +--------------------+--------------------------------------------------------+
   | Field              | Description                                            |
   +====================+========================================================+
   | Name               | The name of the web content.                           |
   +--------------------+--------------------------------------------------------+
   | Language           | The language of the web content. At present, eXo       |
   |                    | Platform supports 23 languages.                        |
   +--------------------+--------------------------------------------------------+
   | Main Content       | The main content that you want to display when         |
   |                    | publishing this web content.                           |
   +--------------------+--------------------------------------------------------+

-  The Illustration tab allows you to upload an illustration that makes
   the site's content more attractive.

   |image65|

   **Details:**

   +----------------------+-----------------------------------------------------+
   | Field                | Description                                         |
   +======================+=====================================================+
   | Illustration Image   | The path to an image which you want to upload into  |
   |                      | a site. This image will be used like an             |
   |                      | illustration of that site.                          |
   +----------------------+-----------------------------------------------------+
   | Summary              | You can give a short description about the web      |
   |                      | content because it will be displayed with the       |
   |                      | illustration image when the web content is listed.  |
   |                      | The main content will be shown when it is selected  |
   |                      | to be viewed.                                       |
   +----------------------+-----------------------------------------------------+

Uploading an image
-------------------

1. Browse a list of images on your local device by clicking the Select
   File button, then select a specific location.

2. Select an image in the list to upload.

-  The Advanced tab includes two parts: CSS Data and JS Data.

   **Details:**

   +----------------------+-----------------------------------------------------+
   | Field                | Description                                         |
   +======================+=====================================================+
   | CSS Data             | Contains the CSS definition to present data in the  |
   |                      | web content. You can optionally enter CSS data into |
   |                      | this field to specify the style.                    |
   +----------------------+-----------------------------------------------------+
   | JS Data              | Contains the JS content to make the web content     |
   |                      | more dynamic after being published. You can         |
   |                      | optionally enter the JS content in this field.      |
   +----------------------+-----------------------------------------------------+

When you create new content which is in draft, a new activity will be
created on your activity stream and on the Social Intranet homepage.
This activity shows the title |image66|, summary (if any), type 
|image67|, version |image68| and current status |image69| of the 
content, and the icon corresponding to the content type |image70|.

|image71|

From the activity stream, you can:

-  Click |image72| to view the content in a larger window.

-  Click |image75| to edit the content directly into the Sites Explorer.

-  Click |image73| to give your idea.

-  Click |image74| to show your liking to the uploaded document.

-  New comments will be automatically added to the activity when your 
   content has the following changes:
   
   - The main content is edited |image76|
   - A file is attached/removed to/from the content |image77|
   - A tag is added/removed to/from the content |image78|
   - A category is assigned/removed to/from the content |image79|
   - Your comment is added to the content from the Sites Explorer
     |image80|
     
|image81|

-   Besides, the content of the activity will be updated with comments 
    when there are the following changes:   
    - The title and/or summary of the content |image82|
    - The status of the content |image83|
    - The number of version of the content is updated without a comment 
      |image84|
    
When the content is deleted, the activity is also removed from the
activity stream without any comment or notification.

.. _EditingPublishingDeletingWebContent:

Editing/Publishing/Deleting web content
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. _EditWebContent:

Editing web content
---------------------

This function is used to edit web content in a specific drive of an
existing site.

1. Access the folder of a site which contains the web content that you 
   want to edit.

2. Select the web content by double-clicking it in the left tree or in 
   the right pane. The detailed information of web content will be 
   viewed in the right pane.

3. Click |Edit Document| on the Action bar to show the form to edit
   the selected web content. This form is similar to that of creating a 
   new document.

4. Make changes on current values in the fields of this form.

5. Complete editing the selected web content by clicking Save or Save &
   Close.

.. note:: When you click |Edit Document1|, the web content will be auto-locked for your editing. After finishing, the content is back to the unlock status. You can manage "Locks" in the :ref:`Unlocking a node <WorkingWithRepository.Locks>` section.

.. _PublishWebContent:

Publishing web content
-----------------------

This function helps you publish web content that you have added to the
web contents folder in **Sites Explorer**.

See the :ref:`Publication process <PublicationProcess>`
section to know how to publish web content.

.. _DeleteXebContent:

Deleting web content
---------------------

This function is used to remove web content from the web contents folder
of a specific site's drive.

1. Right-click the name of the web content that you want to delete, then
   select Delete from the drop-down menu.

2. Click Delete to accept your deletion in the confirmation message.


.. _AddingTranslationsToDocument:

==============================
Adding translations to content
==============================

This function enables you to add multiple languages for content. This
action is similar to adding a language.

1. Select a document to which you want to add the translation. For 
   example, select a web content in *English.*

|image85|

2. Click |Add Translation| on the Action bar to open the Add 
   Translation form.

|image86|

3. Click Select Document to browse to the target content that has a
   different language with the first content. For example, the **Web
   Content** version in French.

|image87|

4. Click Save on the Add Translation form.

5. Select the document to which you have added the translation, then 
   click the |image88| button on the Filter bar.

You will see the available languages for the selected document. Click
the language on this pane to view the document in the corresponding
language version.

|image89|


.. _UsingWebDAV:

============
Using WebDAV
============

In eXo Platform, you can use WebDAV to perform actions on a website easily,
quickly and efficiently without accessing it directly on web browsers.
Each website managed by WebDAV will be displayed as a folder.

To manage site content using WebDAV, follow either of two ways:

**The first way**

You need to connect to your WebDAV clients. See
:ref:`WebDAV <WebDAV>` for more details.

It is assumed that you want to access the ACME site using WebDAV, simply
use the URL:
`http://mycompany.com:port/rest/private/jcr/repository/collaboration/sites/acme <http://mycompany.com:8080/rest/private/jcr/repository/collaboration/sites/acme>`__
into the address bar. After successul login, the ACME site appears as a
folder.

|image90|

**The second way**

This way can be done through **Sites Management.**

1. Click |image91| on the top navigation bar, then select Content --> 
   Sites Explorer from the drop-down menu.

2. Click the Show Drives button, then select Sites Management.

|image92|

You will see all sites listed in the left sidebar.

|image93|

3. Right-click your desired site to view with WebDAV, and select 
   Download and Allow Edition from the menu.

The selected site will be shown in WebDAV.

|image94|

In this view, you can access documents in the directories that are
linked to the web server.

.. _AddNewContentSpecificSite:

Adding new content to a specific site
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This function enables you to copy web content, such as an *.html* file,
from your local device to a *web content* folder of a site.

1. Access a site via WebDAV, then go to a **web content** folder of the
   site.

2. Copy the web content on your local system into this folder.

The copied file will be converted to web content that is viewable by
WebDAV automatically. The content is converted to a directory containing
*CSS, documents, js and media.*

After the new content is added, it can be viewed as a folder in WebDAV
or as a page using a web browser.

.. _DeleteWebContent:

Deleting web content
~~~~~~~~~~~~~~~~~~~~~

This function enables site administrators to delete web content files
separately or in batches.

1. Navigate to the folder that contains the content you want to remove.

2. Right-click the content files or directories (hold the *Ctrl* key to
   select multiple files at once), and select Delete from the drop-down
   menu.

The selected files will be removed from the site.


.. _ManagingContentWithFastContentCreator:

==========================================
Managing content with Fast Content Creator
==========================================

The **Fast Content Creator** portlet in PRODUCT enables you to quickly
create and save a new document with only one template in a specific
location without accessing **Sites Explorer.** This helps you save a lot
of time when creating a new document.

To use the **Fast Content Creator** portlet, you need to add it to a
specific page first by dragging and dropping the Fast Content Creator
portlet from **Page Editor** --> **Applications** --> Forms to the main 
pane. This can be done when :ref:`creating a new page <ManagingPages.AddingNewPage>`
or :ref:`editing an existing page <ManagingPages.EditingPage>`
or :ref:`editing the layout of a site <EditingLayout>`.

|image95|

.. _ConfiguringFCC:

Configuring Fast Content Creator
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Hover your cursor over the portlet, then click |pencil2| to edit the
   portlet.

|image96|

The form with the Edit Mode tab appears.

|image97|

*Details:*

+-----------------------+----------------------------------------------------+
| Field                 | Description                                        |
+=======================+====================================================+
| Location to Save      | Selects the location to save documents or          |
|                       | messages.                                          |
+-----------------------+----------------------------------------------------+
| Select Template       | Selects a template for the document. There are     |
|                       | different input fields corresponding to each       |
|                       | selected template.                                 |
+-----------------------+----------------------------------------------------+
| Custom Save Button    | Changes the label for the "Save" button.           |
+-----------------------+----------------------------------------------------+
| Custom Save Message   | Changes the content of custom message that informs |
|                       | you have just saved a document.                    |
+-----------------------+----------------------------------------------------+
| Redirect              | Allows you to redirect the path in the Redirect    |
|                       | Path field.                                        |
+-----------------------+----------------------------------------------------+
| Redirect Path         | Shows a path to which you will be directed after   |
|                       | clicking **OK** in the confirmation message.       |
+-----------------------+----------------------------------------------------+
| The Action pane       | Adds an action to the document and view actions    |
|                       | added to the document.                             |
+-----------------------+----------------------------------------------------+

2. Select a specific location to save documents.

**i.** Click |magnifying glass3| next to the Location to Save field to
open the Select Location form.

|image98|

**ii.** Select the parent node in the left pane, then click
 |green tick3| in the Add column to select the child node in the right 
 pane. After being selected, this location will be displayed on the 
 Location to Save field. Created documents will be saved in this 
 location.

3. Select a template which is used to create a new document.

.. _CustomSaveButton:

4. Change the label for the Custom Save button, and the content for 
   Custom Save Message.

5. Tick the Redirect checkbox if you want to redirect to the path in 
   the Redirect Path field after clicking **OK** in the confirmation 
   message.

6. Add an action to the document by clicking Add to open the Add Action
   form. Do the same steps in the :ref:`Adding an action <AddAction>`
   section.

7. Click Close to quit the form to edit the configuration of 
   **Fast Content Creator**.

8. Click |green tick3| to save all your changes.

The fast content creator portlet will be shown and allows you to create
content quickly. Here is the added page containing a fast content
creator for the Accessible Media template.

|image99|

.. _CreateViewContent:

Creating/Viewing content
~~~~~~~~~~~~~~~~~~~~~~~~~~

**Creating new content**

1. Go to the page which has the fast content creator portlet.

2. Fill values in all the fields in the page.

3. Click a button in the page to accept creating the new document. A
   message appears to let you know that the document is created
   successfully at the location selected in the Location to Save field.

.. note:: The button name is different, basing on the :ref:`Custom Save Button <CustomSaveButton>` field.

**Viewing content**

After creating a new document by **Fast Content Creator**, you can view 
it as follows:

1. Go to **Sites Explorer.**

2. Select the drive and the path that you established in the 
   configuration of **Fast Content Creator.** You will see this 
   document.


.. _CategoryNavigation:

============================
Managing category navigation
============================

The **category navigation** gets rid of long URLs when you view content
and enables you to see published documents or web content in specific
categories in one page. Thanks to the symbolic link, no matter where the
object physically resides, the database can retrieve it. In addition,
the relations amongst shortcuts can be managed. Now, you can view
documents or web content in the **Content List Viewer** easily.

.. _AccessCategoryNav:

Accessing the category navigation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Go to Features on the Left Navigation bar

|image100|

-  The left pane lists all the categories containing documents or web
   content.

-  The right pane displays the documents selected in the left pane.

2. Select a category that you want to view on the left. The selected
   category will be shown on the right (only documents or web content
   published are shown).

|image101|

.. _ConfigureCategoryNav:

Configuring Category Navigation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Only contributors and administrators can configure the **Category
Navigation** via the Content List portlet as follows:

1. Open **News** page on the Navigation bar.

2. Click Edit --> Page Layout on the top navigation bar.

The page which allows you to edit the **Content List** portlet will
appear.

|image102|

3. Click |pencil4| to open a form with the Edit Mode tab, allowing you 
   to edit the portlet.

|image104|

4. Click |plus icon| to select the path of a category which restores
   content you want do display.

The Folder Browser form is displayed. Click a folder on the left pane
and select its sub-folder.

|image105|

5. Edit some fields in the Display Settings tab as you want. See more
   details in the :ref:`Content List Preferences <ContentListPreferences>`
   section.

6. Select the Advanced tab to set up some properties for the portlet. 
   See more details :ref:`here <Dynamic-Navigation>`.

7. Click Save to accept saving the configuration for the **Category
   Navigation** portlet.

8. Click Close to quit the form.

9. Click |image106| on the Page Editor form to finish editing the **Content
List** portlet.

.. note:: In the Edit Mode tab, some options are disabled.


.. _ManagingSEO:

============
Managing SEO
============

SEO (Search Engine Optimization) allows you to improve the visibility of
your web pages and web content in the major search engines (such as
Google, Yahoo, Ask, Bing, and more) via the search results. Therefore,
it is very important for the user to maximize their web pages and
content's position in the search engines. In eXo Platform, the **SEO
Management** feature is provided to meet this target. By using **SEO
Management,** you can easily manage the SEO data of web pages and web
content.

.. _ManageSEOData:

Managing the SEO data
~~~~~~~~~~~~~~~~~~~~~~

1. Open a page or content that you want to edit the SEO metadata.

2. Open the SEO Management form by clicking Edit --> Page --> SEO on 
   the top navigation bar.

|image107|

Depending on your SEO management for a page or content, the content of
the SEO Management form will be different.

-  The SEO Management form for content is as follows:

   |image108|

-  The SEO Management form for a page is as follows:

   |image109|

*Details:*

+----------------------+-----------------------------------------------------+
| Field                | Description                                         |
+======================+=====================================================+
| Title                | The title of the current page. When changed, the    |
|                      | new title will be updated to the ``<title>`` tag of |
|                      | the head element of the page. The ``Title`` element |
|                      | of your web page is very important, it should       |
|                      | ideally optimize the SEO with a small number of     |
|                      | keywords or key phrases.                            |
+----------------------+-----------------------------------------------------+
| Description          | The description of your page/content. This          |
|                      | description will be seen in the results list of     |
|                      | search engines.                                     |
+----------------------+-----------------------------------------------------+
| Keywords             | The most important terms to describe the page,      |
|                      | separated by commas. By using proper keywords,      |
|                      | other users can find out your page/content via      |
|                      | search engines more easily.                         |
+----------------------+-----------------------------------------------------+
| Robots               | Search engines can access the whole directories on  |
|                      | a website, or individual pages, or individual links |
|                      | on a page and list your page/content or not that    |
|                      | depends on your options:                            |
|                      |                                                     |
|                      | -  INDEX: Allows search engines to index your       |
|                      |    page/content on the search engine results page.  |
|                      |                                                     |
|                      | -  NOINDEX: Restricts search engines from indexing  |
|                      |    your page/content on the search engine results   |
|                      |    page. Use this option if you want to keep your   |
|                      |    page private.                                    |
|                      |                                                     |
|                      | -  FOLLOW: Allows search engines to follow links    |
|                      |    from your page to find other pages.              |
|                      |                                                     |
|                      | -  NOFOLLOW: Restricts search engines from          |
|                      |    following links from your page to find other     |
|                      |    pages. Use this option if you want to prevent    |
|                      |    spam links in comments of blogs, forums and      |
|                      |    others.                                          |
|                      |                                                     |
                                                                            
+----------------------+-----------------------------------------------------+
| Sitemap              | Allows you to see pages of the sites in the         |
|                      | tree-like structure.                                |
+----------------------+-----------------------------------------------------+
| Frequency            | Shows how often pages are updated on the site.      |
|                      | Also, setting your frequency levels tells the       |
|                      | search engines which pages should be crawled over   |
|                      | other pages. The frequency levels include: Always,  |
|                      | Hourly, Daily, Weekly, Monthly, Yearly and Never.   |
|                      | If you set "Never" for the frequency level, meaning |
|                      | that this page never gets updated, so search        |
|                      | engines will move onto other pages that get updated |
|                      | more frequently.                                    |
+----------------------+-----------------------------------------------------+
| Priority             | Allows search engines to search the page with the   |
|                      | higher priority level first. The acceptable value   |
|                      | in this field is from 0 to 1. In which, 0 is the    |
|                      | lowest priority level and 1 is the highest.         |
+----------------------+-----------------------------------------------------+
|                      | Allows you to add the localization for SEO          |
|     |image110|       | metadata. You can choose the language from the      |
|                      | drop-down list.                                     |
+----------------------+-----------------------------------------------------+
|     |image111|       | Allows you to remove the SEO metadata for a         |
|                      | respective language.                                |
+----------------------+-----------------------------------------------------+
|     |image112|       | Gives the meaning or requirement of each field.     |
+----------------------+-----------------------------------------------------+

3. Fill out all fields in this form.

4. Click Save to finish creating SEO metadata.

.. note::	-  If no language has been selected, the default portal language will be used after saving.
			-  |image113| means that the SEO information is empty.
			-  |image114| means that the SEO information has been updated but some information are not filled out yet.
			-  |image115| means that the SEO Management form is filled out with the full SEO information.
			-  |image116| means that the **SEO Management** feature is disabled.


.. _SearchingForContentInASite:

===============================
Searching for content in a site
===============================

This section consists of the following topics:

- :ref:`Searching for content <SearchingForContent>`
   Instructions on how to search for content from the front page of a
   website.

- :ref:`Editing the Search portlet <EditingSearchPortlet>`
   Instructions on how to change the display of search results.

The **Search** function allows you to quickly search for any content in
the system with a keyword from the front page, even if you do not log
in. However, the number of the search results displayed depends on your
role.

For example, if you do not log in, you only see the search results that
are published.

.. _SearchingForContent:

Searching for content
~~~~~~~~~~~~~~~~~~~~~~

1. Enter a keyword into the search box and press **Enter**.

The search results matching with your keyword are displayed in the
search page:

|image117|

In case of no search results matching the keyword, the search page is
displayed as below:

|image118|

**Details:**

+--------------------+--------------------------------------------------------+
| Field              | Details                                                |
+====================+========================================================+
| in Content         | Searches all **published content** of search index     |
|                    | areas that contain the keyword.                        |
+--------------------+--------------------------------------------------------+
| in Pages           | Searches all :ref:`SEO data <_ManageSEOData>           |
|                    | (description, keyword) and pages that have titles or   |                                                      |
|                    | names matching the keyword.                            |
+--------------------+--------------------------------------------------------+

2. In the Search form, you can enter another keyword and set the search
   scale.

3. Press **Enter**, or click Search to start searching.

.. _EditingSearchPortlet:

Editing the Search portlet
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Editing the Search portlet allows you to change the display of search
results.

1. Open the Search page as in the :ref:`Searching for content <SearchingForContent>`
   section.

2. Open the Edit Mode of the **Search** portlet by following one of two
   ways:

-  **The first way**

   Click Edit --> Content on the top navigation bar, then click 
   |pencil4|.

-  **The second way**

   Click Edit --> Page --> Layout on the top navigation bar. The Page 
   Editor will be displayed.

   -  Hover your cursor over the **Search Result** portlet and click 
	  |pencil5| to edit the portlet.

      |image119|

The Edit Mode of the **Search** portlet appears.

|image120|

**Details:**

+------------------------+---------------------------------------------------+
| Field                  | Details                                           |
+========================+===================================================+
| Items per Page         | The number of search results displayed in each    |
|                        | page.                                             |
+------------------------+---------------------------------------------------+
| Page Mode              | The way to display the search results. There are  |
|                        | 3 options:                                        |
|                        |                                                   |
|                        | -  None: Only the first page of search results is |
|                        |    displayed in the search page.                  |
|                        |                                                   |
|                        | -  More: When you click the Search button, the    |
|                        |    first page of search result is displayed. The  |
|                        |    difference from the None mode is that, there   |
|                        |    is a More button allowing you to see more      |
|                        |    search results. When clicking this button, new |
|                        |    search results are appended to the current     |
|                        |    search result page like Twitter or Facebook    |
|                        |    behavior.                                      |
|                        |                                                   |
|                        | -  Pagination: In this mode, the search results   |
|                        |    are divided into many pages (for example, 1,   |
|                        |    2, 3 and Next). You can navigate to another    |
|                        |    page by clicking the page number or Next in    |
|                        |    the bottom of the Search portlet to view more  |
|                        |    results.                                       |
|                        |                                                   |                                                                           
+------------------------+---------------------------------------------------+
| Search Form Template   | The template of the Search form.                  |
+------------------------+---------------------------------------------------+
| Search Result Template | The template for displaying the search results.   |
+------------------------+---------------------------------------------------+
| Search Page Layout     | The layout of the Search portlet.                 |
| Template               |                                                   |
+------------------------+---------------------------------------------------+
| Base Path              | The page where you can see the content of a       |
|                        | search result.                                    |
+------------------------+---------------------------------------------------+

3. Edit your desired portlet and click Save to accept your changes.


.. _PrintingContent:

================
Printing content
================

Users can easily print any content in a site by following these steps:

1. Click the name of the content which you want to print to view all the
   content.

2. Click the Print button. The Print Preview page will be displayed on
   another tab.

3. Click Print to print the content of this page, or Close to close this
   tab without printing.


.. |image0| image:: images/common/edit_portlet_icon.png
.. |image1| image:: images/ecms/turn_on_edit_mode.png
.. |image2| image:: images/ecms/single_content_viewer.png
.. |image3| image:: images/ecms/content_list_viewer.png
.. |image4| image:: images/ecms/add_content_icon1.png
.. |image5| image:: images/ecms/content_forms.png
.. |image6| image:: images/ecms/full_screen_option.png
.. |image7| image:: images/ecms/new_content.png
.. |pencil| image:: images/common/edit_portlet_icon.png
.. |image8| image:: images/ecms/edit_form_in_sites_explorer.png
.. |image9| image:: images/ecms/edited_content_in_document_view.png
.. |image10| image:: images/ecms/back_icon.png
.. |image11| image:: images/ecms/draft_content.png
.. |image12| image:: images/ecms/publish-icon1.png
.. |image13| image:: images/ecms/manage_content_icon.png
.. |image14| image:: images/ecms/add_new_content_to_CLV.png
.. |Add Document| image:: images/ecms/new_content_button.png
.. |image15| image:: images/common/preferences_icon.png
.. |image16| image:: images/ecms/content_detail_preferences.png
.. |question mark| image:: images/common/tooltip_icon.png
.. |image18| image:: images/common/plus_icon.png
.. |image19| image:: images/ecms/scv_show_options.png
.. |magnifying glass| image:: images/common/search_icon.png
.. |magnifying glass1| image:: images/common/up_arrow_icon.png
.. |image20| image:: images/common/select_green_icon.png
.. |image23| image:: images/common/preferences_icon.png
.. |image24| image:: images/ecms/clv_preferences.png
.. |image25| image:: images/ecms/content_list_preferences.png
.. |image26| image:: images/common/plus_icon.png
.. |image27| image:: images/ecms/inline_editing_form.png
.. |image28| image:: images/ecms/CKEditor_Inline.png
.. |image29| image:: images/common/accept_icon.png
.. |image30| image:: images/common/cancel_icon.png
.. |image31| image:: images/ecms/publish-icon1.png
.. |image32| image:: images/ecms/insert_portal_link.png
.. |image33| image:: images/ecms/insert_link_to_a_site_page.png
.. |image34| image:: images/ecms/insert_content.png
.. |image35| image:: images/ecms/content_selector_form.png
.. |image36| image:: images/platform/upload_button.png
.. |image37| image:: images/ecms/UploadImageCKEditor_button.png
.. |image38| image:: images/ecms/imageProperties.png
.. |image39| image:: images/ecms/rootlocation.png
.. |image40| image:: images/ecms/mediafolder.png
.. |image41| image:: images/ecms/UploadImageCKEditor_button.png
.. |image42| image:: images/ecms/UploadImageCKEditor_button.png
.. |image43| image:: images/ecms/upload.png
.. |image44| image:: images/ecms/preview.png
.. |image45| image:: images/ecms/save.png
.. |image46| image:: images/ecms/request_approval_button.png
.. |image47| image:: images/ecms/content_waiting_approval.png
.. |image48| image:: images/ecms/approve_content_button.png
.. |image49| image:: images/ecms/publish_button.png
.. |Manage Publications| image:: images/ecms/publications_button.png
.. |image50| image:: images/ecms/manage_publication_form.png
.. |magnifying glass2| image:: images/ecms/preview_content_icon.png
.. |Restore Version| image:: images/ecms/restore_icon.png
.. |image51| image:: images/ecms/scheduled_tab.png
.. |image52| image:: images/ecms/drap_drop_content_by_query.png
.. |pencil1| image:: images/common/edit_portlet_icon.png
.. |image53| image:: images/ecms/edit_content_by_query.png
.. |image54| image:: images/ecms/edit_mode_content_by_query.png
.. |image55| image:: images/common/save_icon.png
.. |Add category| image:: images/ecms/add_category_button.png
.. |image56| image:: images/ecms/add_category_form1.png
.. |Manage Categories| image:: images/ecms/categories_button.png
.. |image57| image:: images/ecms/add_category_form.png
.. |green tick| image:: images/common/select_icon.png
.. |green tick1| image:: images/common/select_icon.png
.. |image58| image:: images/ecms/referenced_categories_tab.png
.. |image59| image:: images/ecms/documents_added_to_category.png
.. |trash can| image:: images/common/delete_icon.png
.. |Manage Categories| image:: images/ecms/categories_button.png
.. |image60| image:: images/common/administration_navigation.png
.. |image61| image:: images/ecms/select_category_to_add_content.png
.. |image62| image:: images/ecms/new_content_button.png
.. |image63| image:: images/ecms/new_content_inside_category.png
.. |image64| image:: images/ecms/new_content_button.png
.. |image65| image:: images/ecms/illustration_tab.png
.. |image66| image:: images/common/1.png
.. |image67| image:: images/common/2.png
.. |image68| image:: images/common/3.png
.. |image69| image:: images/common/4.png
.. |image70| image:: images/common/5.png
.. |image71| image:: images/ecms/new_content_on_activity_stream.png
.. |image72| image:: images/common/eye_view_button.png
.. |image73| image:: images/common/comment_icon.png
.. |image74| image:: images/common/like_icon.png
.. |image75| image:: images/common/edit_button.png
.. |image76| image:: images/common/1.png
.. |image77| image:: images/common/2.png
.. |image78| image:: images/common/3.png
.. |image79| image:: images/common/4.png
.. |image80| image:: images/common/5.png
.. |image81| image:: images/ecms/comments_on_activity_stream_content.png
.. |image82| image:: images/common/6.png
.. |image83| image:: images/common/7.png
.. |image84| image:: images/common/8.png
.. |Edit Document| image:: images/ecms/edit_button.png
.. |Edit Document1| image:: images/ecms/edit_button.png
.. |image85| image:: images/ecms/select_web_content_language.png
.. |Add Translation| image:: images/ecms/add_translation_button.png
.. |image86| image:: images/ecms/add_translation_form.png
.. |image87| image:: images/ecms/web_content_in_fr.png
.. |image88| image:: images/ecms/relation_icon.png
.. |image89| image:: images/ecms/content_in_different_language.png
.. |image90| image:: images/ecms/webdav_acme_folder.png
.. |image91| image:: images/common/administration_navigation.png
.. |image92| image:: images/ecms/sites_management_drive.png
.. |image93| image:: images/ecms/sites_list.png
.. |image94| image:: images/ecms/webdav_site_view.png
.. |image95| image:: images/ecms/drap_drop_fast_content_creator.png
.. |pencil2| image:: images/common/edit_portlet_icon.png
.. |image96| image:: images/ecms/configure_fcc.png
.. |image97| image:: images/ecms/edit_mode_fcc.png
.. |magnifying glass3| image:: images/common/search_icon.png
.. |image98| image:: images/ecms/select_location_form.png
.. |green tick2| image:: images/common/select_icon.png
.. |green tick3| image:: images/common/save_icon.png
.. |image99| image:: images/ecms/fast_content_creator_page.png
.. |image100| image:: images/ecms/news_navigation_bar.png
.. |image101| image:: images/ecms/category_shown_on_right_pane.png
.. |image102| image:: images/ecms/edit_category_navigation.png
.. |pencil3| image:: images/common/edit_portlet_icon.png
.. |image104| image:: images/ecms/edit_mode_category_navigation.png
.. |plus icon| image:: images/common/plus_icon.png
.. |image105| image:: images/ecms/folder_browser_form.png
.. |image106| image:: images/common/close_icon.png
.. |image107| image:: images/ecms/open_seo_management.png
.. |image108| image:: images/ecms/seo_form_for_content.png
.. |image109| image:: images/ecms/seo_form_for_page.png
.. |image110| image:: images/ecms/add_language.png
.. |image111| image:: images/common/delete_icon.png
.. |image112| image:: images/common/tooltip_icon.png
.. |image113| image:: images/ecms/seo_red_icon.png
.. |image114| image:: images/ecms/seo_orange_icon.png
.. |image115| image:: images/ecms/seo_green_icon.png
.. |image116| image:: images/ecms/seo_gray_icon.png
.. |image117| image:: images/ecms/search_page.png
.. |image118| image:: images/ecms/no_search_result.png
.. |pencil4| image:: images/ecms/edit_icon_search_portlet.png
.. |pencil5| image:: images/common/edit_portlet_icon.png
.. |image119| image:: images/ecms/edit_search_portlet.png
.. |image120| image:: images/ecms/search_edit_mode.png
