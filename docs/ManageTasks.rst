.. _ManageTasks:

####################
Working With Tasks
####################


    In this chapter, you will be introduced to the
    Task Management application which allows you to manage all
    collaborative activities under tasks. This application is aimed at
    improving the way that a team focuses their efforts on a project and
    communicates to get work done.

    In this chapter:

:ref:`Task Management overview <Intoduction>`

:ref:`Managing Tasks <Manage-task>`

:ref:`Managing Projects <Manage-project>`

:ref:`Managing Labels <Manage-label>`

:ref:`Managing Views <Manage-view>`

.. _Intoduction:

==========================
Task management overview
==========================

To use your Tasks management application effectively, there are
some terms that you should be aware of:

-  **Projects**: Containers of tasks.

-  **Management views**: Two views (Board and List) that provide you
   with different ways to manipulate your tasks.

-  **Project workflow**: The list of statuses that tasks in a project
   can take. By default, a new project will have the following workflow:
   *To Do, In Progress, Waiting On* and *Done*. Alternatively, you can
   change the project workflow later in the Board view.
   	
	- To Do: tasks which will be done in the future.
	
	- In Progress: tasks being handled at that time.
	
	- Waiting on: tasks waiting a decision or a validation i.e. awaiting a third party.
	
	- Done: tasks on which work is ended.

.. note:: Changing the default workflow for new projects is done only by
			the administrator, see :ref:`this section <#PLFAdminGuide.Configuration.TaskManagement>` 
			for more details.

-  **Sub-project**: A project can have any number of sub-projects and a
   sub-project can also have an unlimited number of smaller
   sub-projects. These sub-projects will inherit permission and workflow
   from their parent project at the creation time and you can change
   them later.

-  **Space project**: For each new space, a project with the same name
   will be automatically created when the Tasks management
   application is added to the space.

The Tasks management overview is divided into three main areas,
including left, central and right panes.

|image0|

.. _Left-pane:

**The left pane**


|image1|

This pane includes three sections:

.. _Tasks-filters:

-  **Tasks**: manages tasks individually by left filters. These filters
   are:

   -  *Incoming*: filters tasks that are not yet assigned to a project.
      This filter also excludes completed tasks by default, but you can
      change this by using the top :ref:`Filter <Filtering>` feature.

   -  *All Tasks*: shows unfiltered list of all tasks assigned to the
      current user.

   -  *Overdue*: filters tasks with a past due date.

   -  *Today*: filters tasks that are due today.

   -  *Tomorrow*: filters tasks that are due tomorrow.

   -  *Upcoming*: filters tasks that are due in future.

-  **Projects**: manages tasks by projects. Specifically, you can manage
   the workflow of tasks that are assigned to a project.

-  **Labels**: manages tasks by labels. You can set any label on a task
   to classify it for you to manage your tasks more easily.

.. _Central-pane:

**The central pane**


This pane is used to display tasks filtered via the left pane and 
:ref:`top Filter <Filtering>`. In case you are in a project, a *Board* 
view is provided so that you can manage the project's tasks more easily.

.. _Right-pane:

**The right pane**

This pane displays details of the task that is selected from the central
pane where you can modify any information of the task.

    .. note:: Inside spaces, the Tasks management overview is similar as
			above, but the project list is filtered to display only projects
			that are accessible for the members of the spaces. Besides, there
			will be no *Incoming* filter on the left menu and clicking on a
			label will display only the tasks with the selected labels in the
			spaces' projects.
		
.. _tasks-permissions-overview:

**Tasks permissions**


Task Management application comes with different roles and permissions allowing users to better manage their tasks and projects:

	- **The reporter**: is the task's creator, able to **add**, **edit** and **comment** any of his tasks.
	- **The project participant**: he maybe the task's assignee or coworker, able to **comment**, **edit** add and **delete** tasks 	   on the project. He **can not delete** tasks he not the creator.
	- **The project manager**: he could be the project creator, the space manager or the platform manager (i.e the super user root 		  or from platform/adminstrators group). Users having this role have the **same permissions as a project participants** and 	       they are also able to **edit the workflow**, **create subprojects** and also **delete** any task in the project.
	- **The observer**: is a user who have been mentioned in the task and is not a participant, is just **able to view the task**.
	
	
.. note:: In tasks application under a space, all space members get automatically the participant role.
	
	
.. _Manage-task:

==============
Managing tasks
==============

This part introduces you how to:

* :ref:`Create a task <CreateTask>`
* :ref:`Edit a task <EditTask>`
* :ref:`Schedule a task <ScheduleTask>`
* :ref:`Get permalink of a task <GetPermalink>`
* :ref:`Clone a task <CloneTask>`
* :ref:`Delete a task <DeleteTask>`
* :ref:`Filtering tasks <Filtering>`


.. _CreateTask:

Creating a task
~~~~~~~~~~~~~~~~~~~

.. note:: Anyone can create personal tasks. In project's frame, managers and participants are able to create tasks under their 		  projects.

Creating a task in eXo Platform is designed as an effortless operation, so
you just need to follow one of the following ways.

**Via Tasks management overview**


1. Click any items (except *Overdue*) under the **Tasks**, **Projects** or **Labels** sections.

2. Enter the task title into the single line text box under the New Task button:

|image2|

3. Hit **Enter** key to create this task.

    .. note:: -  If you choose to create the task in a filter, it will be put into
				that filter and automatically assigned to the currently logged-in
				user. Note that for the *Upcoming* filter, the due date will be
				the next seven days, while for the *Today* and *Tomorrow*
				filters, the due date will be today and tomorrow respectively.

				-  If you choose to create the task in a project or label, it will
				belong to that project or labelled to that label. Besides, by
				default it will not be assigned to anyone.

**Via Activity stream**


You can even create a task outside the Tasks Management application by 
using the following syntaxes on the Activity stream:

-  Creating a task: ++\ *task\_title*.

-  Setting priority: !\ *task\_priority*. Recognized priorities include
   *High, Medium* and *Low*.

-  Assigning: @\ *task\_assignee* @\ *task\_coworker\_1*
   @\ *task\_coworker\_2*

-  Setting due date: ^\ *due\_date*. Recognized syntaxes include *Today,
   Tomorrow, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday,
   Sunday, Next Week, Next Month* and *dd-mon* (e.g *12-apr* for 12th
   April).

-  Tag: #\ *tag*. The tag will be created if it does not exist.

See this example:

|image3|

**Or via comment:**


|image4|

You will see that there are two new tasks created as below:

|image5|

    .. note:: - Anyone that has access permission to a task can do anything on the task.
			  -  By default, tasks inherit permissions from the project they are in. Therefore, all members and managers of the project are able to access these tasks. 
			     In case they are not assigned to any project, only the creator, assignee and coworkers are granted the access permission.


.. _EditTask:

Editing a task
~~~~~~~~~~~~~~~~~~~~~

.. note:: Task's edit permission is granted to:

		  - The task's creator
		  
		  - The project manager
		  
		  - The space manager (for space's tasks application)
		  
		  - The platform manager (super user and platform/administrators members
		  
		  - The project participants
		  
		  - The task's assignee
		  
		  - The task's assignee cowroker


After creating a task, the right pane will be opened for you to edit the
task directly (if you create the new task via the overview interface) or
you can choose any other task from the central pane. The details of a
task are as follows:

|image6|

In which:

-  |image7|: the name of the project that the task belongs to. In case
   the task is not assigned to any project, this field says "*No
   Project*\ ".

       .. note:: -  To select a project for a task, you must have permission on
          that project. Besides, a task should belong to only one
          project, so you should remove the existing project from the
          task before adding a new one.

       -  If you move a task to another project, its status will be set
          to the same one in the new project workflow (statuses must
          match alphabetically to be considered the same). If no status
          matches in the new project workflow, the status is set to the
          first one in the new project workflow.

-  |image8|: the labels that are assigned to the task.

-  |image9|: the title of the task which should be from 1 to 250
   characters.

-  |image10|: the due date of the task. You can choose among 4 options,
   including *None, Today, Tomorrow* and *Next Week* or specify any
   other due date.

-  |image11|: the assignee and co-workers that are assigned to the task.
   Only one assignee is accepted, while you can add multiple co-workers.

-  |image12|: the status of the task in the project workflow. Note that
   this information is available only for the tasks that are assigned to
   a specific project.

-  |image13|: the task description.

-  |image14|: the schedule of the task. If no schedule is specified,
   this field says "*Unscheduled*\ ". To remove the current schedule,
   hover cursor over it and select the deletion icon that appears.

-  |image15|: the task priority. You can choose between 4 values,
   including *High, Normal, Low* and *None*.

-  |image16|: the **Comments** tab allows people to discuss about the
   task, while the **Changes** tab shows all changes history of the
   task.

   |image17|

-  |image18|: the *Mark as completed* feature, clicking this icon will
   mark the task as completed and it will disappear from the List and
   Board views unless :ref:`Filter <Filtering>` is set to show completed
   tasks.

    .. note:: A formatting toolbar appears once you click in the comment composer.
				It allows you to change the formatting of your message, attaching
				images and links and preview how it will look once posted. (like
				what we have for :ref:`the activity stream composer <posting-status-updates>`)

To edit the task:

1. Hover cursor over any information and click it that you want to edit.

2. Make changes on the task, then hit **Enter** key or just click out the edited field.

.. _ScheduleTask:

Scheduling a task
~~~~~~~~~~~~~~~~~~~~

After creating a task or being assigned one, you can schedule it by
following these steps:

|image19|

-  |image20|: Select the list of tasks by clicking on All Tasks.

-  |image21|: Select one of the assigned/created tasks.

-  |image22|: Click on Unscheduled.

Two calendars appear to select From and To dates.

|image23|

After saving the selected dates, a message is displayed under the task's
description indicating the time interval chosen with a note about the
schedule:

-  If the To date is chosen after the due date, a message appears to
   warn that you may miss the deadline because you planned the work too
   late.

   |image24|

-  If the To date is chosen before the due date, the message that
   appears indicates that the work is planned between the chosen dates.

   |image25|

    .. note:: -  When the today's date is the task's due date, a blue exclamation mark |image26| precedes the task's name in the list/board view.
			  -  When the task's due date has already expired, i.e. today's date is after the due date and the task is not yet finished, it is preceded with a red exclamation mark: |image27|
				 
				 |image28|
    
.. _GetPermalink:

Getting permalink of a task
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Click the link icon at the top right corner of the task pane:

|image29|

You will get the permalink to share the task.


.. _CloneTask:

Cloning a task
~~~~~~~~~~~~~~~

1. Click the down arrow at the top right corner of the task pane, a
drop-down menu will appear as follows:

|image30|

2. Select Clone to clone the task. The cloned task will have the same name
with the original task and be prefixed by "*Copy of*\ ".


.. _DeleteTask:

Deleting a task
~~~~~~~~~~~~~~~~~~~~

.. note:: You can delete a task only if you have one of these roles:

		   - The task's creator
		   
		   - The project manager or the space manager (for tasks application under a space)
		   
		   - The platform manager (the super userand platform/administrators members)
		   

1. Select Delete from the dropdown menu:

|image31|

2. Click OK in the confirmation message to delete the task.

|image32|

    .. note:: This action is available to the task creator and the project manager only.


.. _Filtering:

Filtering tasks
~~~~~~~~~~~~~~~~

The central pane by default will list all the tasks depending on which
task filter, project or label is selected. This could be difficult for
you if there are too many tasks available. The Tasks management
application offers you a useful tool to narrow these tasks by specific
information.

|image33|

1. |image34| Click the filter icon |image35| at the top right corner of
the central pane.

2. |image36| The Filter form will be shown on the right pane.

In which:

-  *Contains*: filters tasks that have the title or description matching
   the input text.

-  *Labels*: filters tasks that contain the input labels.

-  *Due*: filters tasks by due date.

-  *Priority*: filters tasks that have the selected priority.

-  *Show completed tasks*: filters tasks that are completed. Unchecking
   this box will show uncompleted tasks.

    .. note:: Depending on the view you select from the left pane such as :ref:`Task filters <Tasks-filters>`,
				Projects or Labels views, some of the options above may be disabled.

2. Change any information above. The central panel will reflect instantly
to list only the matched tasks.

3. A Close icon |image37| on top-right corner of the filter panel closes
it. But the values are remembered and filter remains active.

The filter icon has two statuses:

-  It turns blue |image38| when it is activated which means that the
   central panel is filtered.

-  It is grey |image39| when it is inactive which means that the central
   panel is not filtered.

.. _Manage-project:

=================
Managing projects
=================

This part introduces you how to:

* :ref:`Create a project/sub-project <CreateProject>`
* :ref:`Edit a project <EditProject>`
* :ref:`Share a project <ShareProject>`
* :ref:`Change project color <ChangeProjectColor>`
* :ref:`Clone a project <CloneProject>`
* :ref:`Show/Hide a project <ShowHideProject>`
* :ref:`Delete a project <DeleteProject>`


.. _CreateProject:

Creating a project/sub-project
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Click the plus sign icon on the Projects section, a pop-up menu will
appear as below:

|image40|

Alternatively, you can hover cursor over any project under the Projects
section, then click the right arrow that appears:

|image41|

2. Select Add Project, a pop-up form will appear for you to enter your
project information.

3. Change the parent project if needed, by clicking the parent project
field:

|image42|

4. Select a project from the drop-down list:

|image43|

5. Fill in the name and description of the project, for instance:

|image44|

If you wish this project and its tasks to be displayed and synchronized
in the :ref:`Calendar <Interface>` application, check the box that says 
"*Enable Calendar Integration*\ ".

.. note:: -  The length of project name should be less than 100 characters.
		  -  Sub-projects DO NOT inherit the task calendar from their parent. Instead, they come with their own calendar if the Calendar integration is enabled.

6. Click Save to finish creating your project.


.. _EditProject:

Editing a project
~~~~~~~~~~~~~~~~~~~

1. Hover cursor over the project that you want to edit, then click the
right arrow. A dropdown menu will appear as follows:

|image45|

2. Click Edit to view its details.

|image46|

3. Change any information by clicking it, except the manager of the project
that can not be modified.

.. note:: For a space project, by default the manager of the project and its space is the same.

4. Click Save button to save your changes.


.. _ShareProject:

Sharing a project
~~~~~~~~~~~~~~~~~~

1. Select Share from the dropdown menu:

|image47|

A pop-up will appear as below:

|image48|

In which, you can choose to share your project to others via *Manager*
and *Participant* permissions.

-  *Participant* permission: allows to add, edit, view and comment on
   tasks of the project.

-  *Manager* permission: in addition to the *Participant* permission,
   allows to edit, delete and share workflow of the project.

2. Click |image49| corresponding to each permission to add more users.

 .. note:: -  Space members automatically get *Participant* permission to space projects.
		   -  Space managers automatically get *Manager* permission to space projects.
		   -  In case a user has share permission on a sub-project but does not have permission on the parent, the parent is still visible in the project list on the left pane but it is impossible to see in details.

3. Click Close button to close the pop-up.


.. _ChangeProjectColor:

Changing project color
~~~~~~~~~~~~~~~~~~~~~~~~~

To easily distinguish between your projects, you can color them by a
vertical bar on the left. For instance:

|image50|

To do this, just simply select the desired color from the dropdown menu:

|image51|

.. _CloneProject:

Cloning a project
~~~~~~~~~~~~~~~~~~

1. Select Clone from the dropdown menu:

|image52|

A confirmation pop-up will be displayed as follows:

|image53|

2. Tick the checkbox that says "*also clone uncompleted tasks.*\ " if you want to clone all uncompleted tasks of the project as well.

3. Click Clone to finish cloning the project. The cloned project will have the same name with the original one and be prefixed by "*Copy of*\ ".

  .. note::  A cloned project inherits the workflow, permission, description, color, due date and parent project of the original one.


.. _ShowHideProject:

Showing/Hiding a project
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. _hide-tasks-project:

Hiding a project
------------------

To hide a project, simply select Hide from the dropdown menu:

|image54|

This project and its sub-projects will disappear from the left menu.


    .. note:: Hiding projects is just a personal display setting, therefore it is not applied for other users.

.. _Show-tasks-hidden-project:

Showing hidden projects
-------------------------

To show hidden projects, click the plus sign icon on the Projects pane,
then choose Show Hidden Projects:

|image55|

You will see all hidden projects like this:

|image56|

From here, you will be able to show these projects again by clicking
Show from the dropdown menu:

|image57|

    .. note:: To show a hidden sub-project, you should show its parent first.


.. _DeleteProject:

Deleting a project
~~~~~~~~~~~~~~~~~~~~

1. Click Delete button from the dropdown menu:

|image58|

A confirmation pop-up will appear as follows:

|image59|

2. Tick the checkbox that says "*also delete all sub-projects.*\ " if you
want to delete all sub-projects or untick it to move all sub-projects to
the grandparent project.

3. Click Delete button to finish deleting this project or Cancel to skip this.

.. _Manage-label:

===============
Managing labels
===============

The Task Management application provides you with another tool
to classify tasks on your own, which is called *Labels*. You will be
able to personally label your tasks and this will not affect other users
as well as noone can see them but you.

This part introduces you how to:

* :ref:`Create a label/sub-label <CreateLabel>`
* :ref:`Edit a label <EditLabel>`
* :ref:`Show/Hide a label <ShowHideLabel>`
* :ref:`Change label color <ChangeLabelColor>`
* :ref:`Delete a label <DeleteLabel>`


.. _CreateLabel:

Creating a label/sub-label
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Click the plus sign icon on the Labels section, then select Add Label:

|image60|

Alternatively, you can click the right arrow corresponding to any label
under the Labels section, then select Add Label:

|image61|

   

   .. note::  In the second way, the created label will be a sub-label under the corresponding label.

2 Fill the label name in the text box that appears, for instance:

|image62|

3. Press Enter key or just click out the box, you will see the newly
created label.


.. _EditLabel:

Editing a label
~~~~~~~~~~~~~~~~~~

1. Click the arrow corresponding to the label that you want to edit, then
select Edit from the dropdown menu:

|image63|

A pop-up form will appear as follows:

|image64|

2. Change the parent and/or name of the label. Note that the label name
should be less than 100 characters.

3. Click Save button to save your changes or Cancel to skip this.


.. _ShowHideLabel:

Showing/Hiding a label
~~~~~~~~~~~~~~~~~~~~~~~~~

Hiding a label
---------------

To hide a label, simply select Hide from the drop-down menu:

|image65|

This label and its sub-labels will disappear from the left menu.

Showing hidden labels
----------------------

To show hidden labels, click the plus sign icon in the Labels section,
then choose Show Hidden Labels:

|image66|

You will see all hidden labels like this:

|image67|

From here, you will be able to show these labels again by clicking Show
from the dropdown menu:

|image68|

    .. note:: To show a hidden sub-label, you should show its parent first.


.. _ChangeLabelColor:

Changing a label color
~~~~~~~~~~~~~~~~~~~~~~~~

To easily distinguish between your labels, you can color them by a
vertical bar on the left. For instance:

|image69|

To do this, just simply select the desired color from the drop-down
menu:

|image70|

.. _DeleteLabel:

Deleting a label
~~~~~~~~~~~~~~~~~

1. Click Delete button from the drop-down menu:

|image71|

A confirmation pop-up will appear as follows:

|image72|

2. Click Delete button to finish deleting this label and its sub-labels or Cancel to skip this.

.. _Manage-view:

==============
Managing views
==============

eXo Platform supports two views which are:

* :ref:`List view <list-View>`
* :ref:`Board view <Board-View>`


.. _list-View:

list View
~~~~~~~~~~

By default, when you access any item on the left pane, the corresponding
tasks in the central pane will be displayed in a simple list like this:

|image73|

In which:

-  The **!** symbol in red indicates overdue tasks that have not been
   completed on time.

-  The **!** symbol in blue indicates tasks that need to be done today.

In this view, you can do the followings:

Marking a task as completed:
-----------------------------

Hover cursor over the task that you want to mark it as completed and
click the tick icon that appears:

|image74|

The task will disappear from the List view unless
:ref:`Filter <Filtering>` is set to show completed tasks.

.. _sort-tasks-list-view:

Sorting/Grouping tasks
-----------------------

At the top right corner of the central pane, there are two options under
the top filter that help you to sort and group tasks in categories.

|image75|

You can arrange these tasks by the following options:

-  *Created Date*: sorts by the created date of tasks, with the most
   recent tasks on top.

-  *Due Date*: sorts by the due date of tasks, with the oldest tasks on
   top.

-  *Title*: sorts by the task titles in alphabetical order.

-  *Priority*: sorts by the task priority, with the highest on top.

-  *Rank*: sorts by the task rank.

In addition to sorting tasks by the above options, you can also group
the tasks by:

-  *Assignee*: groups by the tasks' assignee.

-  *Label*: groups by the tasks' label.

-  *Due Date*: groups by the tasks' due date.

-  *Project*: groups by projects.

-  *Status*: groups by the tasks's status in a project.

-  *None*: ungroups tasks.

.. note:: Depending on the view you select from the left pane, such as Task
			filters, Projects or Labels views, some of the options above may be disabled.


.. _Board-View:

Board view
~~~~~~~~~~~~~~

This view is designed only for projects, therefore you need to go to a
specific project to see this view. In this view, you can manage tasks as
well as the project workflow:

|image76|

In which:

-  Each column corresponds to a status of the project workflow.

-  The color of a task card depends on its priority: *High* - Light Red,
   *Medium/Normal* - Light Orange, *Low* - Light Green, None priority -
   Light Gray.

-  The number of tasks in a column is displayed next to the status name.

Creating new tasks:
----------------------

In addition to creating new tasks by :ref:`this way <CreateTask>`, you can quickly do this via the Board view as follows:

1. Hover cursor over the last task of a column (or grouping), an editable
field will appear:

|image77|

2. Type the task title in this field, then press Enter key. Your new task
will be created immediately in the corresponding column.

Sorting/Grouping tasks:
------------------------

|image78|

You can sort these tasks by the *Due Date, Priority* and *Rank* options
as well as group them by the *Assignee, Label* and *None* options as in
:ref:`this view <sort-tasks-list-view>`.

Moving tasks
-------------

You can drag/drop tasks back and forth between assignees, labels and
statuses.

-  Between statuses:

   |image79|

-  Between assignees:

   |image80|

-  Between labels:

   |image81|

Managing project workflow
--------------------------

By default, your project will have a workflow with four statuses
including *To Do - In Progress - Waiting On - Done* and you can change
it on your own.

-  To modify a status, double-click the status name in the Board view,
   and type the new name in the editable field that appears:

   |image82|

   Press Enter key to finish updating.

-  To delete a status, hover cursor over the status name in the Board
   view, and select the delete icon that appears:

   |image83|


.. note:: -  All tasks assigned to the deleted status are affected to the previous status (the column on the left in the Board view).
		  -  If the status is the first of the list (the first column in the Board view), the tasks will be assigned to the next status (the next column on the right in the Board view).
		  -  The last status cannot be deleted.


.. |image0| image:: images/taskmanagement/overview.png
.. |image1| image:: images/taskmanagement/left_pane.png
.. |image2| image:: images/taskmanagement/new_task.png
.. |image3| image:: images/taskmanagement/capture_task_activity_stream.png
.. |image4| image:: images/taskmanagement/capture_task_comment.png
.. |image5| image:: images/taskmanagement/capture_example.png
.. |image6| image:: images/taskmanagement/task_sample.png
.. |image7| image:: images/common/1.png
.. |image8| image:: images/common/2.png
.. |image9| image:: images/common/3.png
.. |image10| image:: images/common/4.png
.. |image11| image:: images/common/5.png
.. |image12| image:: images/common/6.png
.. |image13| image:: images/common/7.png
.. |image14| image:: images/common/8.png
.. |image15| image:: images/common/9.png
.. |image16| image:: images/common/10.png
.. |image17| image:: images/taskmanagement/changes_history.png
.. |image18| image:: images/common/12.png
.. |image19| image:: images/taskmanagement/schedule_task_steps.png
.. |image20| image:: images/common/1.png
.. |image21| image:: images/common/2.png
.. |image22| image:: images/common/3.png
.. |image23| image:: images/taskmanagement/schedule_task_calendar.png
.. |image24| image:: images/taskmanagement/task_delayed.png
.. |image25| image:: images/taskmanagement/task_scheduled.png
.. |image26| image:: images/taskmanagement/blue_mark.png
.. |image27| image:: images/taskmanagement/red_mark.png
.. |image28| image:: images/taskmanagement/due_date.png
.. |image29| image:: images/taskmanagement/permalink.png
.. |image30| image:: images/taskmanagement/clone_task.png
.. |image31| image:: images/taskmanagement/delete_task.png
.. |image32| image:: images/taskmanagement/confirm_delete_task.png
.. |image33| image:: images/taskmanagement/filter_task.png
.. |image34| image:: images/common/1.png
.. |image35| image:: images/taskmanagement/filter_icon_grey.png
.. |image36| image:: images/common/2.png
.. |image37| image:: images/common/close_icon.png
.. |image38| image:: images/taskmanagement/filter_icon_blue.png
.. |image39| image:: images/taskmanagement/filter_icon_grey.png
.. |image40| image:: images/taskmanagement/create_project.png
.. |image41| image:: images/taskmanagement/add_sub_project.png
.. |image42| image:: images/taskmanagement/change_parent_project.png
.. |image43| image:: images/taskmanagement/project_drop_down_list.png
.. |image44| image:: images/taskmanagement/create_project_form.png
.. |image45| image:: images/taskmanagement/edit_project.png
.. |image46| image:: images/taskmanagement/edit_project_form.png
.. |image47| image:: images/taskmanagement/share_project.png
.. |image48| image:: images/taskmanagement/share_project_popup.png
.. |image49| image:: images/common/edit_icon.png
.. |image50| image:: images/taskmanagement/color_project.png
.. |image51| image:: images/taskmanagement/color_pane.png
.. |image52| image:: images/taskmanagement/clone_project.png
.. |image53| image:: images/taskmanagement/clone_project_confirm.png
.. |image54| image:: images/taskmanagement/hide_project.png
.. |image55| image:: images/taskmanagement/show_hidden_project.png
.. |image56| image:: images/taskmanagement/hidden_project.png
.. |image57| image:: images/taskmanagement/show_hidden_project_again.png
.. |image58| image:: images/taskmanagement/delete_project.png
.. |image59| image:: images/taskmanagement/delete_project_confirm.png
.. |image60| image:: images/taskmanagement/add_label.png
.. |image61| image:: images/taskmanagement/add_sub_label.png
.. |image62| image:: images/taskmanagement/fill_label.png
.. |image63| image:: images/taskmanagement/edit_label.png
.. |image64| image:: images/taskmanagement/edit_label_form.png
.. |image65| image:: images/taskmanagement/hide_label.png
.. |image66| image:: images/taskmanagement/show_hidden_label.png
.. |image67| image:: images/taskmanagement/hidden_label.png
.. |image68| image:: images/taskmanagement/show_hidden_label_again.png
.. |image69| image:: images/taskmanagement/color_label.png
.. |image70| image:: images/taskmanagement/color_pane_label.png
.. |image71| image:: images/taskmanagement/delete_label.png
.. |image72| image:: images/taskmanagement/delete_label_confirm.png
.. |image73| image:: images/taskmanagement/list_view.png
.. |image74| image:: images/taskmanagement/mark_completed.png
.. |image75| image:: images/taskmanagement/group_sort_option.png
.. |image76| image:: images/taskmanagement/board_view.png
.. |image77| image:: images/taskmanagement/create_task_board.png
.. |image78| image:: images/taskmanagement/board_group_sort.png
.. |image79| image:: images/taskmanagement/between_statuses.png
.. |image80| image:: images/taskmanagement/between_assignees.png
.. |image81| image:: images/taskmanagement/between_labels.png
.. |image82| image:: images/taskmanagement/edit_status.png
.. |image83| image:: images/taskmanagement/delete_status.png
