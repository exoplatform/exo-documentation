.. _Gamification:


###############
Gamification
###############

Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
PageMaker including versions of Lorem Ipsum.

====================
Leaderbord portlet
====================

Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised

.. tip:: text tip
         text tip 2
         
.. note:: note text

1. step1
   step 1 L2
   
2. step2...

3. step3 ..........


leaderboard portlet configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

sous partie
-------------


**bold text**
*italic*
 
.. code::

		<external-component-plugins>
			<target-component>org.exoplatform.social.core.space.spi.SpaceTemplateService</target-component>
			<component-plugin>
			  <name>CustomSpaceApplicationHandler</name>
			  <set-method>registerSpaceApplicationHandler</set-method>
			  <type>com.custom.social.core.space.impl.CustomSpaceApplicationHandler</type>
			  <init-params>
				<value-param>
				  <name>templateName</name>
				  <value>custom</value>
				</value-param>
			  </init-params>
			</component-plugin>
		</external-component-plugins>
		

``parameter``		



