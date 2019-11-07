.. _Gamification_extension_mechanism:

##################################
Gamification extension mechanism
##################################

    The Gamification feature provides a simple extension mechanism that could be used to extend the gamification configuration by adding Rules, Domains and Badges.
    This mechanism also lets developers easily declare new events (to be used in gamification rules when triggered) without having to make any change to the Gamification add-on code itself.

==============
Add new rules
==============

To add new rules to the gamification configuration, a simple external component plugin should be added to your addon configuration, this plugin should define the following information :

Rule configuration
~~~~~~~~~~~~~~~~~~
-  ``rule-title``: The  name of the event associated to the rule.
-  ``rule-description``: The description of the new rule.
-  ``rule-score``: The number of gamification points awarded when the event related to the rule is triggered.
-  ``rule-zone``: The Domain name.
-  ``rule-enable``: Define if the rule is enabled or not (true/false)

.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.addons.gamification.service.setting.rule.RuleRegistry</target-component>
        <component-plugin>
            <name>pushCode</name>
            <set-method>addPlugin</set-method>
            <type>org.exoplatform.addons.gamification.service.setting.rule.model.RuleConfig</type>
            <init-params>
                <value-param>
                    <name>rule-title</name>
                    <value>pushCode</value>
                </value-param>
                <value-param>
                    <name>rule-description</name>
                    <value>You pushed some code</value>
                </value-param>
                <value-param>
                    <name>rule-score</name>
                    <value>15</value>
                </value-param>
                <value-param>
                    <name>rule-zone</name>
                    <value>Development</value>
                </value-param>
                <value-param>
                    <name>rule-enable</name>
                    <value>true</value>
                </value-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>


===============
Add new domains
===============

To add a new domain to the gamification configuration, a simple external component plugin should be added to your  configuration. This plugin should define the following information:

Domain configuration
~~~~~~~~~~~~~~~~~~~~
-  ``zone-name``: The name of the new domain.
-  ``zone-description``: The description of the new domain.
-  ``zone-priority``: The domain priority (reserved for future use)


.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.addons.gamification.service.setting.zone.ZoneRegistry</target-component>
        <component-plugin>
            <name>developer.zone</name>
            <set-method>addPlugin</set-method>
            <type>org.exoplatform.addons.gamification.service.setting.zone.model.ZoneConfig</type>
            <init-params>
                <value-param>
                    <name>zone-name</name>
                    <value>Development</value>
                </value-param>
                <value-param>
                    <name>zone-description</name>
                    <value>Development</value>
                </value-param>
                <value-param>
                    <name>zone-priority</name>
                    <value>5</value>
                </value-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>

===============
Add new badges
===============

To add new badges to the gamification configuration, a simple external component plugin should be added to your addon configuration. This plugin should define the following information:

Badge configuration
~~~~~~~~~~~~~~~~~~~
-  ``badge-title``: The name of the new badge.
-  ``badge-description``: The description of the new badge.
-  ``badge-domain``: The domain of the new badge.
-  ``badge-icon``: The icon of the badge (ex: icon_name.png), This icon file should be added under the folder '\resources\medias\images' of your addon’s jar.
-  ``badge-neededScore``: The score required in the domain to earn this badge.
-  ``badge-enable``: Define if the badge is enabled or not (true/false)



.. code:: xml

    <external-component-plugins>
        <target-component>org.exoplatform.addons.gamification.service.setting.badge.BadgeRegistry</target-component>
        <component-plugin>
            <name>badge.SocialNovice</name>
            <set-method>addPlugin</set-method>
            <type>org.exoplatform.addons.gamification.service.setting.badge.model.BadgeConfig</type>
            <init-params>
                <value-param>
                    <name>badge-title</name>
                    <value>Social Novice</value>
                </value-param>
                <value-param>
                    <name>badge-description</name>
                    <value>Growing your network and ramping up your interactions</value>
                </value-param>
                <value-param>
                    <name>badge-domain</name>
                    <value>Social</value>
                </value-param>
                <value-param>
                    <name>badge-icon</name>
                    <value>socialNovice.png</value>
                </value-param>
                <value-param>
                    <name>badge-neededScore</name>
                    <value>50</value>
                </value-param>
                <value-param>
                    <name>badge-enable</name>
                    <value>true</value>
                </value-param>
            </init-params>
        </component-plugin>
    </external-component-plugins>


===============
Add new event
===============

Gamification uses eXo Event/Listener mechanism to grant points when configured events match a rule. To trigger a rule in the gamification system all you have to do is to broadcast a specific gamification event from your addon code using the eXo ListenerService.
This can be done by adding the following code:


.. code:: java

      Map<String, String> gam = new HashMap<>();
      gam.put("ruleTitle", ruleTitle);
      gam.put("senderId", senderId);
      gam.put("receiverId", receiverId);
      gam.put("object", object);
      listenerService.broadcast("exo.gamification.generic.action", gam, "");


with:

-  ``ruleTitle``: The name of the gamification event.
-  ``senderId``: The userName of the user who excuted the action.
-  ``receiverId``: The userName of the user who will get the gamification points.
-  ``object``: Should be a link to the object related to the action executed.

