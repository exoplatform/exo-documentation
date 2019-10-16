.. _OnlyOffice:

#############################
OnlyOffice Connector for eXo
#############################

**What is OnlyOffice**

`OnlyOffice Online Editors <https://www.onlyoffice.com/office-suite.aspx>`__ is a great open source solution 
that lets you to create, edit  and collaborate online on your office 
documents. OnlyOffice editors are 100% compatible with Microsoft Office document formats : docx, pptx and xlsx.

|image0|


.. note:: eXo partnered with OnlyOffice to offer the enterprise-ready version of OnlyOffice editors to its customers along with the **commercial editions of eXo Platform**. Thus, eXo customers are required to purchase a dedicated subscription from eXo to run the OnlyOffice connector add-on on their eXo Platform instance. However, a 30-day trial is prepackaged with the connector in order to test-drive the integration before purchase.

To install the add-on, use the following command:

::

		./addon install exo-onlyoffice
		

.. _HowToUse:

================================
How to use OnlyOffice for eXo?
================================	

.. _EditOnline_BTN:

Edit Online button
~~~~~~~~~~~~~~~~~~~~
		
Having satisfied the above conditons and installed the add-on, you can easily edit your Microsoft Office documents online.
Just hit the ``edit Online`` button |image1|.

The ``edit Online`` button is available in these locations:

-  In the activity stream among the possible actions available on the document

   |image2|
   
-  In the document's preview interface

   |image3|

-  In the ``Documents`` application, in the actions bar

   |image4|
   
Clicking on that button opens the document in an another browser tab allowing you to make your changes.


.. _EditorInterface:

Editor Interface
~~~~~~~~~~~~~~~~~~

Clicking on |image5| button opens the document you want to edit in an another tab.
The interface contains:

-  The document opened in OnlyOfficeeditor
-  A top bar containing these details:

   -  the document's breadcrumb: to inform about the document's location in the platform
   -  message about the last edit: Last edited by $editor's full name date hh:mm "summary"
   -  text area for the summary: allowing you to input a summary of your changes
   -  force save button: to save your changes with the added summary
   -  close icon: to close the editor tab


|image6|


		

.. |image0| image:: images/OnlyOffice/onlyofficeInterface.png
.. |image1| image:: images/OnlyOffice/editOnline_btn.png
.. |image2| image:: images/OnlyOffice/editOnline_btn_act.png
.. |image3| image:: images/OnlyOffice/editOnline_btn_preview.png
.. |image4| image:: images/OnlyOffice/editOnline_btn_documents.png
.. |image5| image:: images/OnlyOffice/editOnline_btn.png
.. |image6| image:: images/OnlyOffice/top_bar.png
