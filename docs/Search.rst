.. _Search:

###########################
Searching In eXo Platform
###########################

    In this chapter, you will learn about the search feature in eXo Platform.
    You can search for content via various ways:

:ref:`Searching in Social Intranet <Search-Social-Intranet>`

       Introduction to the Search function in Social Intranet where you
       can find out everything without accessing each specific
       application.

:ref:`Refining your search <Refine-Search>`

       Details of searches that allow you to search for specific content
       types just within separate applications.
       
.. _Search-Social-Intranet:

============================
Searching in Social Intranet
============================

This section consists of the following topics:

* :ref:`Sorting and filtering your results <Sort-filter-results>`

   How to further restrict the search scope to streamline the returned results.

* :ref:`Customizing search settings <Customizing-search-settings>`

   How to change settings for Search portlets and manage content types
   displayed in Search portlets.

Besides the search feature in each application, PRODUCT provides a
robust search tool which allows you to search for all types of content
right in Social Intranet. With this new search feature, you are able to
search for everything without accessing each specific application. This
means the productivity will be much enhanced as you can search for any
content at any location with just few clicks away from the search box on
the navigation bar.

.. _Perform-quick-search:

**Performing quick search**

1. Click |image0| on the top navigation bar to open the search box.

2. Enter your search term into the Search box.

|image1|

This search displays quick results in the drop-down menu. These results
are grouped by their types: Files, Documents, Wiki, Pages, Discussions,
People, Spaces, Events, Tasks, Questions and Answers. By default, the
quick search returns results for content located in the current site
only.

3. Select your desired result from the drop-down menu to directly access it;
   Or, hit the **Enter** key, or click |image2|, or click See All Search
   Results to view all results in the search main panel.

|image3|

.. _Preview-docs-on-search:

**Preview documents on search results**

After having the search results list that corresponds to the keyword
used in the search box, you can preview an element from that list either
in :ref:`Documents Application <DocumentsInterface>`
or with the :ref:`document viewer <DocumentViewer>`. It is also possible
to download it.

-  To preview the selected document in document viewer, you simply need
   to click on the document's icon.

|image16|

-  To preview the selected document in Documents Application, you simply
   need to click on the document's link or in the button Open in
   Documents after previewing it in document viewer.

-  To download the selected document, you need to preview it with the
   document viewer then click on the Download button.

|image4|

.. _Sort-filter-results:

Sorting and filtering your results
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the search main panel, you can further restrict the search scope to
streamline the returned results.

.. _Sorting-results:

Sorting your results
-----------------------

By selecting the **Sort By** drop-down menu, you can narrow your search
results.

|imageSearch|

-  **Relevance**: This type is set by default for search and in the
   descending order. This means the search results will be sorted by the
   connection with the entered terms. The top result is one which has
   the closest relevance with the entered term.

-  **Date**: This type displays results by the last created/modified date in
   the descending order.

-  **Title**: This type displays results by their title based on the
   ascending (alphanumeric) order.


.. note:: If you select each Sort option again, the order type will be changed. This means "ascending" is changed into "descending" and vice versa.

.. _Filtering-results:

Filtering your results
--------------------------

The **Filter By** panel is displayed on the left side, allowing you to
control the search range by sites and content types.

|image5|

-  **All Sites**: A list of sites on which the search action is performed.

-  **All Content Types**: A list of content types by which the search action is performed.

By default, all checkboxes are ticked. To exclude some result types from
the results page, simply untick the corresponding checkbox.

.. _Customizing-search-settings:

Customizing search settings
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you are an administrator, you can change settings for Search portlets
and manage content types displayed in the Search portlets easily.

There are 2 Search portlets you can customize their settings, including:
Search main page and Search textbox.

.. _Change-settings-search:

Changing settings for Search main page
------------------------------------------

To change settings of the Search main page portlet, you have to go into
its **Edit** mode.

1. Open the Search main page by :ref:`doing quick search <Perform-quick-search>`.

2. Select |image6| --> Page --> Edit Layout.

The Page Editor is opened.

|image7|

3. Hover your cursor over the **Search** portlet and select |image8| to 
open Search settings in the Edit Mode tab.

|image9|

**In which:**

+-----------------------+----------------------------------------------------+
| Field                 | Description                                        |
+=======================+====================================================+
| Results per page      | Specifies the number of results that are retrieved |
|                       | each time a search is run. The value "10" is set   |
|                       | by default.                                        |
+-----------------------+----------------------------------------------------+
| Search in current     | Scopes the search to the current site. If being    |
| site only             | checked, the All Sites filter is not displayed in  |
|                       | the Filter By panel.                               |
+-----------------------+----------------------------------------------------+
| Hide search form      | Hides the search field and search button.          |
+-----------------------+----------------------------------------------------+
| Hide facets filter    | Hides the whole Filter By panel.                   |
+-----------------------+----------------------------------------------------+
| Search In             | Specifies the content types that the Search        |
|                       | portlet must search in.                            |
+-----------------------+----------------------------------------------------+

4. Change the Search settings, then click Save Settings button and click Close to quit the form.

5. Click |image10| to quit the Page Editor and back to the Search page.

.. _Change-settings-search-box:

Changing settings for Search textbox
-------------------------------------

1. :ref:`Open the Page Editor <Change-settings-search>`, then drag and drop the **Quick Search** portlet (of the **Search** category) from **Page Editor** 
to the main page body.


 .. note:: If you do not see the **Quick Search** portlet in the Page Editor, you need to import it as described in :ref:`Importing portlets and gadgets <ImportingPortletGadgets>`.

2. Hover your cursor over the **Quick Search** portlet and select 
   |image11| to see the Quick Search settings in the Edit Mode mode.

|image12|

In which, "Results per Type" specifies the maximum number of results 
retrieved for each content type. The value "5" is set by default. 
Click :ref:`here <Change-settings-search>` for more details about fields.

3. Change the Quick Search settings, then click Save Settings and click
   Close to quit the form.

4. Click |image13| to quit the Page Editor.

.. _Manage-content-types-in-search:

Managing content types in Search portlets
------------------------------------------

In eXo Platform, administrators can use the **Search Administration**
page to enable or disable various content types on which your search is 
based.

1. Click |image14| --> Content --> Search Administration

   |image15|

**In which:**

+------------------+----------------------------------------------------------+
| Field            | Description                                              |
+==================+==========================================================+
| Content Type     | The type of searchable content.                          |
+------------------+----------------------------------------------------------+
| Description      | The quick description of each content type.              |
+------------------+----------------------------------------------------------+
| Action           | The action to disable/enable each content type. When     |
|                  | disabled, a content type will no longer appear in both   |
|                  | search results and Search settings.                      |
+------------------+----------------------------------------------------------+

2. Enable/Disable your desired content type by clicking the 
   corresponding button in the Action column.

.. _Refine-Search:

=====================
Refining your search
=====================

This section instructs you how to search in specific applications of
eXo Platform, including:

-  :ref:`Searching for spaces <Search-Space>`
   Steps to search for spaces by name/description or by alphabets.

-  :ref:`Searching for contacts <SearchingForContact>`
   Steps to search by name, position and skills, or by alphabets.

-  :ref:`Searching for documents <Search-Documents>`
   Steps to do quick and advanced searches for your document.

-  :ref:`Searching for posts and topics <Search-Forum>`
   Steps to do quick and advanced searches for posts and topics in **Forums**.

-  :ref:`Searching for Wiki pages <Search-For-Content>`
   Steps to search for Wiki pages.

-  :ref:`Searching for events/tasks <Search-Events>`
   Steps to perform quick and advanced searches for events in Calendar.

.. _Search-Space:

Searching for spaces
~~~~~~~~~~~~~~~~~~~~~

In the **Social Intranet** homepage, you can do a quick search for your
desired space from the list of spaces where you are managers or members
right in the MY SPACE panel.

|sidebar|

Or, you can search in the Spaces application that helps you easily find
spaces from one of the tabs in the :ref:`Space navigation <All-spaces-access>`.
To do this, click the MY SPACES link, or click Join a space on the left
panel to open the Spaces page first. After accessing your desired space
tab, you can search for spaces by **Name** and **Description** from the
Search textbox or by **Alphabets**.

|image17|

.. _Search-name-description:

Searching by name/description |image18|
----------------------------------------

1. Enter your search key into the Find Space field.

2. Press the Enter key.

Only spaces where their names or descriptions contain the Search key will be listed in the Spaces Found panel.

.. _Search-alphabets

Searching by alphabets |image19|
--------------------------------

Simply click a specific letter. Only spaces where their names start with
your selected alphabet are listed in the Spaces Found pane.

.. _SearchingForContact:

Searching for contacts
~~~~~~~~~~~~~~~~~~~~~~~

This function allows you to find your desired contact quickly by:

-  Searching by name, position, and skills

-  Filtering by first letter

1. Select People in the left panel to be redirected to the People 
   Directory page.

|image20|

Here, you can see all users who are active in eXo Platform.

2. Select the search criteria:

-  **Search by Name** |image21|: Enter the contact name you want to
   search into the Search by Name field. When you type, a drop-down list
   of contact names containing your entered letter appears for you to
   select.

   |image22|
   
   

-  **Search by Position** |image23|: Enter the position of the contacts
   you want to search by.

-  **Search by Skills** |image24|: Enter the skill of the contacts you
   want to search by.

3. Hit the Enter key, or click Search to find your desired contacts.

-  If you :ref:`filter by first letter <Search-alphabets>` |image25|,
   only contacts whose last names start with the search letter are
   returned.

-  The search results are also arranged to the alphabetical order of
   last names.

 .. tip::	-  You can combine more than one search type (by name, by position and by skills) at the same time to enhance your search results. 
			-  You can select a tab from the **People Directory** page to narrow the search scope.
			-  The search engine is tolerant to typos, meaning it can find results even if you searched with wrong accent or missed a letter in the name you're looking for.

.. _Search-Documents:

Searching for documents
~~~~~~~~~~~~~~~~~~~~~~~~~

To search for documents only, you first need to select Documents from
the left panel. You are then redirected to the Documents page. Here, you
can perform the search types:

-  :ref:`Quick search <QuickSearch>`

-  :ref:`Advanced search <Advanced-search>`

-  :ref:`Saved queries <SearchingWithSavedQueries>`
   
.. _QuickSearch:   

Quick search
-------------

With the quick search, you can directly type a search term in the search
textbox. All documents, whose keywords are matched with the search term,
are retrieved and listed in the results form.

1. Enter a keyword into the search textbox.

|quicksearch|

2. Click |image26| to perform your search; Or, press the **Enter** key.

The search results will be displayed right in the main view. The search
results are empty if no document contains the search keyword.

|image27|

**In which:**

+----------------+-----------------------------------------------------------+
| **Fields**     | **Description**                                           |
+================+===========================================================+
| Type           | Groups the content by its type together. The ascending    |
|                | order is set by default. By clicking Type, the order type |
|                | will be changed into descending, and vice versa.          |
+----------------+-----------------------------------------------------------+
| Name           | Displays the document content which matches with your     |
|                | search term.                                              |
+----------------+-----------------------------------------------------------+
| Score          | The appearance frequency of your search term in the       |
|                | content. The higher score is, the more your search term   |
|                | appears in the content.                                   |
+----------------+-----------------------------------------------------------+
| Action         | Two actions you can do the content, including:            |
|                |                                                           |
|                | -  Click |image28| corresponding to the document you want |
|                |    to view;                                               |
|                |                                                           |
|                | -  Or, click |image29| to go to the folder which contains |
|                |    the relevant document.                                 |
|                |                                                           |                                                                        
+----------------+-----------------------------------------------------------+

.. _Refine-quick-search-tags:

Refine quick search using tags
```````````````````````````````

You can refine the search results by selecting one or many :ref:`documents tags <TaggingDocument>`.

This allows you to display in the search results documents:

-  Containing the used keyword for search.

-  Tagged by the selected tags.

For that purpose, proceed as follows:

1. Ensure that the sidebar is diplayed in left menu of the documents 
   application, if not refer to this :ref:`link <CustomizingYourPreferences>` 
   to display it.

|image30|

2. Click |image31| to display all the used tags for documents.

|image32|

3. Select one or many tags to refine the search results.

|image33|

 .. note::   To be able to refine your search using tags, you should :ref:`add tags <TaggingDocument>` when uploading/adding contents and files to the documents application, otherwise, the tag cloud will be empty.

.. _Advanced-search:

Advanced search
-----------------

1. Click |image34| on the sidebar. To follow this way, you need to 
   :ref:`enable sidebar <EnableSideBar>` first.

|image35|

2. Click |image36| to open the **Advanced Search** form.

|image37|

The tabs in this form offer different search functions:

-  :ref:`Searching by Name <SearchingByName>`

-  :ref:`Searching with constraints <SearchingWithConstraints>`

-  :ref:`Searching by creating a new query <SearchingByNewQuery>`

-  :ref:`Searching by existing queries <SearchingByExistingQueries>`

.. _SearchingByName:

Searching by Name
``````````````````

Use the **Searching by Name** tab to search nodes by name as follows:

1. Enter the exact name you wish to search in the **Content Name** field.

2. Click **Search**.

* Results will return with the message No results found if there is no content with the entered name.

* Results will be returned in the **Search Results** tab if the requested name is found.

.. _SearchingWithConstraints:

Searching with constraints
```````````````````````````

This search enables you to search with more constraints to limit the
returned results.

Extra search constraints are entered in the **Advanced Search** tab of
the **Advanced Search** form.

|image38|

The **Current location** field is not editable. It shows the path
selected to search.

1. Enter search terms in the **A word or phrase in content** field.

2. Select the **Operator**:

   - Select **And** operator to only return results that meet both the
     search terms and the entered constraints (see Step 3).

   -  Select **Or** operator to return results that meet *either* the
      search terms or the entered constraints (see Step 3).

3. Click **Show/Hide Constraint Form** to add more constraints.

A further constraint options window will appear.

|image39|

**In which:**

+------------+---------------------------------------------------------------+
| Item       | Description                                                   |
+============+===============================================================+
|            | Adds more than one constraint with either of two operators    |
| |image40|  | (**And** and **Or**).                                         |
+------------+---------------------------------------------------------------+
|            | Adds a constraint to search by a property with specific       |
| |image41|  | values.                                                       |
+------------+---------------------------------------------------------------+
|            | Adds a constraint to search by a property that contains one   |
| |image42|  | of the word in the keyword.                                   |
+------------+---------------------------------------------------------------+
|            | Adds a constraint to search by a property that does not       |
| |image43|  | contain the keyword.                                          |
+------------+---------------------------------------------------------------+
|            | Adds a constraint to search by a duration of date (created,   |
| |image44|  | modified).                                                    |
+------------+---------------------------------------------------------------+
|            | Adds a constraint to search by a document type, including     |
| |image45|  | File, Article, Podcast, Sample node, File Plan, Kofax.        |
+------------+---------------------------------------------------------------+
| |image46|  | Adds a constraint to search by categories.                    |
+------------+---------------------------------------------------------------+
| |plus|     | Adds a value/property.                                        |
+------------+---------------------------------------------------------------+

4. Select the constraint operator (**And/Or**).

5. Add the required constraints using one of the following methods:

-  :ref:`Adding a constraint for exact values <AddingConstraintForExactValues>`

-  :ref:`Adding a constraint including or excluding values <AddingConstraintInCludingValues>`

-  :ref:`Adding a constraint by date <AddingConstraintByDate>`

-  :ref:`Adding a constraint by document type <AddingConstraintByDocumentType>`

-  :ref:`Adding a constraint by category <AddingConstraintByCategory>`

6. Click **Add** to add any/all activated constraints.

The constraints will be converted to an **SQL** query and displayed in
the search form.

|image47|

-  Remove unnecessary constraints by clicking |image48|

7. Click **Search** to launch the search. Results will be displayed in the
   **Search Results** tab.

8. Click **Save** and put a name for this search configuration if you want
to save it to use in future.

The followings are methods to add the required constraints.

.. _AddingConstraintForExactValues:

**Adding a constraint for exact values**

1. Tick the checkbox that corresponds to the constraint you want.

2. Enter the property you want to locate, or click |image49|

A list of possible properties appears.

|image50|

3. Select a property from the list and click Add. The selected property
   will populate the **Property** field.

4. Define the property value to search for by entering a value into the
   **Contain Exactly** field, or click |plus3|.

The **Filter Form** with all pre-existing values for your selected
property will appear.

-  If the value you require is in the list, select it and click **Select**.

-  If the value you require is not in the list, enter it in the **Filter** field and click |corresponding|. The value will populate
   the **Contain Exactly** field of the constraints form.

|image51|

.. _AddingConstraintInCludingValues:

**Adding a constraint including or excluding values**

1. Tick the checkbox corresponding to the **Contain** or **Not Contain**
   constraint, as appropriate.

2. Enter the required property in the **Property** field, or click 
   |image52| (refer to **Step 2** in the :ref:`Adding a constraint for exact values <AddingConstraintForExactValues>` 
   section for more information).

3. Enter the required values in the **Contain** or **Not Contain** fields.

.. _AddingConstraintByDate:

**Adding a constraint by date**

1. Tick the checkbox beside the field with the drop-down menu (below the
   **Property** entries).

2. Define the search condition from the drop-down list (**Created**/
   **Modified**).

3. Click the **From** field.

A small calendar will appear.

|image53|

4. Select the date you want to use as a constraint.

5. Repeat the above steps for the **To** field.

The selected dates will populate the **From** and **To** fields in the
**Add constraint** form.

.. _AddingConstraintByDocumentType:

**Adding a constraint by document type**

1. Tick the checkbox beside the **Document Type** field.

2. Enter the document type you want to search, or click |image54| to 
   open a list of document types.

|image55|

3. Tick the checkbox corresponding to your desired document type, then
   click **Save**.

The selected document type will populate the **Document Type** field.

.. _AddingConstraintByCategory:

**Adding a constraint by category**

1. Tick the checkbox beside the **Category** field.

2. Enter the category you want to search, or click |plus2| for a list 
   of categories.

3. Click |image56| that corresponds to your desired category.

The selected category will populate the **Category** field.

.. _SearchingByNewQuery:

Searching by creating a new query
``````````````````````````````````

You need knowledge of the structure of query statements to configure a
search using the parameters on the **New Query** tab.

|image57|

1. Enter a unique name for this query in the **Name** field.

2. Select a query type from the drop-down menu: **SQL** or **xPath**.

3. Enter a query statement.

4. Click Search to perform the search and display the results in the 
   Search Results tab; Or, click Save to save the search query to the 
   Saved Query tab.

.. _SearchingByExistingQueries:

Searching by existing queries
``````````````````````````````

This tab lists all saved search queries that you have access rights to
use.

|image58|

-  Click |image59| to perform the search. You will see results in the
   **Search Results** tab.

-  Click |image60| to edit the query statement. The query form will
   appear like when creating a query 
   (see the :ref:`Searching by creating a new query <SearchingByNewQuery>` 
   section); however, you cannot edit the name of the saved search.

-  Click |image61| to delete a query (provided you have the access
   rights to that query).
   
.. _SearchingWithSavedQueries:

Searching with saved queries
-----------------------------

Do the followings to perform a search with saved queries:

1. Click |image62| on the sidebar to see the list of existing queries.

|image63|

2. Launch, modify or delete the queries as required (see the :ref:`Searching by creating a new query <SearchingByNewQuery>` 
   section for more information).
   
|image64|

3. Filter results with the entries in the **All Items** and/or 
   **Filter by Type** panes on the left of the tab. Items matching the 
   selections will appear in the right pane.

4. Click |image65| to view the file or click |image66| to go to the file location.


.. _Search-Forum:

Searching for posts and topics
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can do a :ref:`Quick Search <Quick-search-forum>` or an :ref:`Advanced Search <Advanced-search-forum>` 
anywhere in the **Forums** application, right on the homepage or inside 
each specific forum or topic that makes it easy to find the expected 
information.

.. _Quick-search-forum:

Quick search
-------------

With **Quick Search**, users can directly type a search term in the
textbox. All the categories, forums, topics and posts that have the
keyword matching the search term will be quickly displayed in the Search
Result form.

For example:

-  The **Search** function on the main bar to search for items related
   to categories, forums, topics and posts.

|image67|

-  The **Search** function inside one specific forum to find topics and
   posts in the forum only.
   
|image68|

-  The **Search** function inside one specific topic to find posts
   related to the topic only.

|image69|

Quick search
`````````````

1. Enter a search term into the relevant search textbox.

2. Click Search or press the **Enter** key to perform your search.

Depending on your selected object, the results which contain the
matching keyword will be displayed in the Search Result form.

.. _Advanced-search-forum:

Advanced search
---------------

The **Advanced Search** allows users to make a search with particular
criteria corresponding to the object you want to find.

Performing advanced search
```````````````````````````

1. Click Advanced Search in the result page if your search with the 
   search box on the User bar;

|image70|

Or, click Advanced Search link in the forum/topic search pop-up.

|image71|

Based on the criteria you want to search, such as category, forum or
post, the search criteria will be changed accordingly.

2. Enter the search criteria.

3. Click Search to do search. Also, click Clear Fields to reset the 
   inputted values.

Matched results will be shown in the Search Result form. There will be
an alert message when there is no object matching with the search
criteria.

Finding in categories
```````````````````````

Select Category from the Search in drop-down menu.

|image72|

**In which:**

+--------------------+--------------------------------------------------------+
| Field              | Description                                            |
+====================+========================================================+
| Terms              | The search keyword.                                    |
+--------------------+--------------------------------------------------------+
| Scope              | The search scale. With the "Full" option selected,     |
|                    | returned results are those with both titles and        |
|                    | content matching the keyword. With the "Title" option  |
|                    | selected, returned results are those with titles       |
|                    | matching the keyword.                                  |
+--------------------+--------------------------------------------------------+
| Username           | Filters search results by the category creator. Input  |
|                    | the name manually, or click |image73| to select users  |
|                    | from a specific group.                                 |
+--------------------+--------------------------------------------------------+
| Created between -  | Filters search results by categories created within an |
| and                | interval.                                              |
+--------------------+--------------------------------------------------------+
| Moderator          | Filters search results by the category moderator.      |
|                    | Input the name manually, or click |image74| to select  |
|                    | users from a specific group.                           |
+--------------------+--------------------------------------------------------+

Finding in forums
``````````````````````

Select Forum from the Search in drop-down menu.

|image75|

**In which:**

+----------------+-----------------------------------------------------------+
| Field          | Description                                               |
+================+===========================================================+
| Terms          | The search keyword.                                       |
+----------------+-----------------------------------------------------------+
| Status         | The status of the forums ("Locked" or "Unlocked").        |
+----------------+-----------------------------------------------------------+
| State          | The state of the forums ("Open" or "Closed").             |
+----------------+-----------------------------------------------------------+
| Posts          | Filters search results by the minimum number of posts in  |
|                | the forum. Click and drag the slider bar to set the       |
|                | number of posts.                                          |
+----------------+-----------------------------------------------------------+
| Topics         | Filters search results by the minimum number of topics in |
|                | the forum. Click and drag the slider bar to set the       |
|                | number of topics.                                         |
+----------------+-----------------------------------------------------------+
| Moderator      | Filters search results by the forum moderator. Input the  |
|                | name manually, or click |image76| to select users from a  |
|                | specific group.                                           |
+----------------+-----------------------------------------------------------+

Finding in topics
``````````````````

Select Topic from the Search in drop-down menu.

|image77|

**In which:**

+--------------------+--------------------------------------------------------+
| Field              | Description                                            |
+====================+========================================================+
| Terms              | The search keyword.                                    |
+--------------------+--------------------------------------------------------+
| Type               | The type of the topic specified by the topic type name |
|                    | and its icon. It can be selected from the existing     |
|                    | list.                                                  |
+--------------------+--------------------------------------------------------+
| Status             | The status of the topics ("Locked" or "Unlocked").     |
+--------------------+--------------------------------------------------------+
| State              | The state of the topics ("Open" or "Closed").          |
+--------------------+--------------------------------------------------------+
| Created between -  | Filters search results by topics created within an     |
| and                | interval.                                              |
+--------------------+--------------------------------------------------------+
| Last Post between  | Filters search results by the last post's created date |
| - and              | in the topic.                                          |
+--------------------+--------------------------------------------------------+
| Posts              | Filters search results by the minimum number of posts  |
|                    | in the topic. Click and drag the slider bar to set the |
|                    | number of posts.                                       |
+--------------------+--------------------------------------------------------+
| Views              | Filters search results by the minimum number of topic  |
|                    | views. Click and drag the slider bar to set the number |
|                    | of views.                                              |
+--------------------+--------------------------------------------------------+

Finding in posts
`````````````````

Select Post from the Search in drop-down menu.

|image78|

**In which:**

+--------------------+--------------------------------------------------------+
| Field              | Description                                            |
+====================+========================================================+
| Term               | The search keyword.                                    |
+--------------------+--------------------------------------------------------+
| Scope              | The scale for searching. With the "Full" option        |
|                    | selected, returned results are those with both title   |
|                    | and content matching the keyword. With the "Title"     |
|                    | option selected, returned results are those with post  |
|                    | titles matching the keyword.                           |
+--------------------+--------------------------------------------------------+
| Username           | Filters search results by the posters' usernames.      |
|                    | Input the name manually, or click |image79| to select  |
|                    | users from a specific group.                           |
+--------------------+--------------------------------------------------------+
| Created between -  | Filters search results by posts created within an      |
| and                | interval.                                              |
+--------------------+--------------------------------------------------------+


.. _Search-For-Content:

Searching for Wiki pages
~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Enter a keyword into the search box.

|image80|

2. Select your desired page from the drop-down menu. You will be 
   redirected to the selected page; Or, hit the **Enter** key to go to 
   the result page.

.. note:: If you are in the portal wiki, your quick search will be performed on all wiki spaces, otherwise it will only be performed on the current wiki.

Or, hit the Enter key to go to the result page.

The search results are displayed like the illustration below.

|image81|

If there is no result matched with the keywords, the search screen
informs no result for your search keywords.

Optionally, you can change your search scope by selecting another 
location from the drop-down menu.

|image82|


.. _Search-Events:

Searching for events
~~~~~~~~~~~~~~~~~~~~~~

This function allows finding existing events according to specific
search conditions easily. There are 2 search types: 
:ref:`Quick search<Quick-search-events>` and :ref:`Advanced search <Advanced-search-events>`.

.. _Quick-search-events:

Quick search
-------------

This function allows you to do a quick search with specific keywords in
all your events/tasks. All events having the text matching with your
search term will be returned.

1. Enter a word in the Search field at the right corner of the toolbar.

|image83|

2. Hit Enter key to perform the search. The matching events will be shown
in the Search Result page.

|image84|

.. _Advanced-search-events:

Advanced search
-----------------

This function allows you to make a search with multiple criteria.

1. Click Advanced Search on the Search Result page.

2. Input your search criteria in the Advanced Search form.

|image85|

**In which:**

+----------------+-----------------------------------------------------------+
| Field          | Description                                               |
+================+===========================================================+
| Text           | The search term or keyword for searching.                 |
+----------------+-----------------------------------------------------------+
| Calendar       | The calendar on which you want to perform your search.    |
+----------------+-----------------------------------------------------------+
| Category       | The category of event to conduct your search.             |
+----------------+-----------------------------------------------------------+
| Priority       | The priority of your needed events: Normal, High or Low.  |
|                | If you leave **blank** in the field, your search will be  |
|                | done to all priority levels.                              |
+----------------+-----------------------------------------------------------+
| From Date      | Only the events having 'To date' greater than or equal    |
|                | the date entered in the From Date field are listed in the |
|                | results form. You can click this field and select a date  |
|                | from a mini calendar.                                     |
+----------------+-----------------------------------------------------------+
| To Date        | Only the events having 'From date' less than or equal to  |
|                | the date entered in the To date field are listed in the   |
|                | results form. You can click this field and select a date  |
|                | from a mini calendar.                                     |
+----------------+-----------------------------------------------------------+

3. Click Search to perform your search. All events matching with your
   criteria will be listed in the results form.

 .. note:: In the Search Result form, you can click an event to view it, or edit/delete an event by clicking |image86|/ |image87| at the bottom.


 .. note:: * If you are searching for a recurring event using Quick search, notice that the search returns those that occur in 2 years in the future. This limit is to prevent an infinite result, so it does notimpact non-recurrences.
		   * In Advanced search, if you leave the To Date field blank, the 2-year limit is also applied. So you can search for occurrences later than 2 years by filling in that field.

       
.. |image0| image:: images/common/search_navigation.png
.. |image1| image:: images/search/global_search_box.png
.. |image2| image:: images/common/search_navigation.png
.. |image3| image:: images/search/search_main_panel.png
.. |image4| image:: images/search/open-doc-viewer.png
.. |image5| image:: images/search/search_filter.png
.. |image6| image:: images/common/edit_navigation.png
.. |image7| image:: images/search/search_page_portlet.png
.. |image8| image:: images/common/edit_icon.png
.. |image9| image:: images/search/search_page_settings_form.png
.. |image10| image:: images/common/save_icon.png
.. |image11| image:: images/common/edit_icon.png
.. |image12| image:: images/search/quick_search_settings_form.png
.. |image13| image:: images/common/save_icon.png
.. |image14| image:: images/common/administration_navigation.png
.. |image15| image:: images/search/search_administration.png
.. |image16| image:: images/search/document-icon.png
.. |imageSearch| image:: images/search/search_sort_menu.png
.. |sidebar| image:: images/search/search_space_left_sidebar.png
.. |image17| image:: images/search/search_social_spaces.png
.. |image18| image:: images/common/1.png
.. |image19| image:: images/common/2.png
.. |image20| image:: images/search/contacts_directory.png
.. |image21| image:: images/common/1.png
.. |image22| image:: images/search/search_by_name.png
.. |image23| image:: images/common/2.png
.. |image24| image:: images/common/3.png
.. |image25| image:: images/common/4.png
.. |quicksearch| image:: images/search/quick_search_documents.png
.. |image26| image:: images/common/search_icon.png
.. |image27| image:: images/search/search_results_form.png
.. |image28| image:: images/common/view_icon.png
.. |image29| image:: images/search/goto_folder_icon.png
.. |image30| image:: images/search/documents_sidebar.png
.. |image31| image:: images/search/tag_cloud_btn.png
.. |image32| image:: images/search/tags_cloud.png
.. |image33| image:: images/search/multitag_search.png
.. |image34| image:: images/common/search_icon.png
.. |image35| image:: images/search/saved_searches_sites_management.png
.. |image36| image:: images/common/search_icon.png
.. |image37| image:: images/search/document_advanced_search.png
.. |image38| image:: images/search/document_advanced_search_tab.png
.. |image39| image:: images/search/document_advanced_search_more_constraints.png
.. |image40| image:: images/common/1.png
.. |image41| image:: images/common/2.png
.. |image42| image:: images/common/3.png
.. |image43| image:: images/common/4.png
.. |image44| image:: images/common/5.png
.. |image45| image:: images/common/6.png
.. |image46| image:: images/common/7.png
.. |plus| image:: images/common/plus_icon.png
.. |plus2| image:: images/common/plus_icon.png 
.. |plus3| image:: images/common/plus_icon.png
.. |image47| image:: images/search/constraint_added_search_form.png
.. |image48| image:: images/common/delete_icon.png
.. |image49| image:: images/common/plus_icon.png
.. |image50| image:: images/search/select_property_form.png
.. |corresponding| image:: images/common/plus_icon.png
.. |image51| image:: images/search/contain_exactly_populated.png
.. |image52| image:: images/common/plus_icon.png
.. |image53| image:: images/search/date_search_condition.png
.. |image54| image:: images/common/plus_icon.png
.. |image55| image:: images/search/document_type_list.png
.. |image56| image:: images/common/select_icon.png
.. |image57| image:: images/search/new_search_query_tab.png
.. |image58| image:: images/search/saved_search_query_tab.png
.. |image59| image:: images/search/execute_icon.png
.. |image60| image:: images/common/edit_icon.png
.. |image61| image:: images/common/delete_icon.png
.. |image62| image:: images/common/search_icon.png
.. |image63| image:: images/search/saved_search_panel.png
.. |image64| image:: images/search/execute_saved_search.png
.. |image65| image:: images/common/view_icon.png
.. |image66| image:: images/search/goto_folder_icon.png
.. |image67| image:: images/search/forum_search_bar.png
.. |image68| image:: images/search/search_this_forum.png
.. |image69| image:: images/search/search_this_topic.png
.. |image70| image:: images/search/search_result_advanced_search.png
.. |image71| image:: images/search/search_this_forum_advanced_search.png
.. |image72| image:: images/search/search_category_advanced_search_form.png
.. |image73| image:: images/common/select_user_icon.png
.. |image74| image:: images/common/select_user_icon.png
.. |image75| image:: images/search/search_in_forum_form.png
.. |image76| image:: images/common/select_user_icon.png
.. |image77| image:: images/search/search_in_topic_form.png
.. |image78| image:: images/search/search_in_post_form.png
.. |image79| image:: images/common/select_user_icon.png
.. |image80| image:: images/search/search_bar_suggestion.png
.. |image81| image:: images/search/wiki_advanced_search_result.png
.. |image82| image:: images/search/wiki_search_space_scope.png
.. |image83| image:: images/search/calendar_search_box.png
.. |image84| image:: images/search/calendar_search_result.png
.. |image85| image:: images/search/calendar_advanced_search_form.png
.. |image86| image:: images/common/edit_icon.png
.. |image87| image:: images/common/delete_icon.png
