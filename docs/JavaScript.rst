.. _JavaScript:

######################
Developing JavaScript
######################

    This chapter discusses the right way to write your JavaScript code
    and include libraries in eXo Platform. How the code can be
    modularized to share and re-use, and how to avoid conflict as well
    is the main topic.

    The topic will be developed from the JavaScript primitive module
    patterns to the GateIn approach. You will walk through it by
    examples, from simple inline scripts to portlet applications. In
    this chapter:

    -  :ref:`JavaScript module patterns <PLFDevGuide.JavaScript.ModulePatterns>`

    -  :ref:`AMD and RequireJS <PLFDevGuide.JavaScript.AMD_and_RequireJS>`

    -  :ref:`Shim configuration and Non-AMD modules <PLFDevGuide.JavaScript.Shim_and_NonAMD>`

    -  :ref:`GateIn Module Definition <PLFDevGuide.JavaScript.GMD>`

    -  :ref:`JQuery versions and plugins <PLFDevGuide.JavaScript.JQuery>`

    A little knowledge of JavaScript is required, so if necessary, you
    should learn `JavaScript, W3 Schools <http://www.w3schools.com/js/>`__ first.

.. _PLFDevGuide.JavaScript.ModulePatterns:

==========================
JavaScript module patterns
==========================

**Why module patterns?**

As you might experience before, some problems that you often have to
deal with in JavaScript are:

-  Global variables are modified by not your code.

-  Your code invokes a method of a library that is not loaded yet.

-  Other code uses the same library but different versions.

In eXo Platform, your application is not a whole page. Your portlet and
gadget can be added to a page containing many other applications. That
emphasizes the importance of modularity. You need to understand the
module patterns to write JavaScript safely, even if you are writing only
one script file that will use JQuery.

**Closure and self-invoking**

Let's see an example of global variables. In the page you have a button
that counts the number of clicks on it:

.. code:: html

    <!DOCTYPE html>
    <html>
    <head>
    <script>
        var counter = 0;
        function count(){
            counter++;
            document.getElementById("result").innerHTML = counter;
        }
    </script>
    </head>
    <body>
        <p>You've clicked <span id="result">0</span> times!</p>
        <button onclick="count();">Click me</button>
    </body>
    </html>

Here you maintain a global variable that increases each time users click
on the button. The code should work, but the problem is the variable can
be modified by any other code of the page.

If you make the variable a function-scoped one that can only be changed
by the function, it will not work as expected because the variable is
reset (to zero) every time the function is invoked.

The problem can be solved if you have a way to define a variable at
function scope but is initialized only one time. The **closure pattern**
is a JavaScript feature that makes it possible:

.. code:: html

    <script>
        var counter = (function(){
            var privateCounter = 0;
            return function(){ return privateCounter++; };
        })();
        function count(){
            document.getElementById("result").innerHTML = counter();
        }
    </script>

Focus on the function declaration first:

::

    function(){...}

It is an anonymous function that cannot be invoked by later code, but
you make it invoke itself immediately - and only this time - by adding
parentheses after the declaration:

::

    (function(){...})();

By that way, the private variable is created only one time, but is
accessible by any child function under the scope. The next thing is to
return that child function to a variable that becomes the only access
holder.

.. code:: html

    <script>
        var counter = (function(){
            var privateCounter = 0;                                                 //this runs only one time in self-invocation
            return function(){ return privateCounter++; };  //this keeps the access to the private variable
        })();
    </script>

**The module pattern**

From the self-invoking function you can return not only a function but
an object that contains many properties and functions. It makes the
ability to create a namespace, or in other words, a module. The idea is
to return an object with only things that you want to expose to the
world, and keep the other things private.

Let's see how the code is built step by step before it completes the
module pattern:

::

    // create a new scope
    (function (){

    })();

    // give it a name
    var module = (function (){

    })();

    // private method and property
    var module = (function (){
        var privateProperty = "smth";
        var privateMethod = function () {};
    })();

    // public method and property
    var module = (function (){
        return {
            publicPropertyyy: "smth";
            publicMeeethod: function() { //some code };
        }
    })();

    // the complete form
    var module = (function (){
        // private properties and functions
        return {
            // public properties and functions
        }
    })();

    // access it from outside
    module.publicPropertyyy;
    module.publicMeeethod();

**The module extension pattern**

You can add properties and functions to an existing module, by passing
it as a parameter to a new self-invoking function:

::

    var module2 = (function(module){
        module.extension = function() {};
        return module;
    }(module || {});

**A Java-like example**

To ones who are more familiar with Java, this variation of the pattern
is easy to understand because it imitates a simple Java class:

::

    var module = (function(){
        //private
        var name = "default";
        var getName = function(){
            return name;
        };
        var setName = function(newName){
            name = newName;
        };
        
        //public
        var obj = {
            getName: getName,
            setName: setName
        };
        return obj;
    })();

**References**

At this point you touch a JavaScript core feature which is the base for
many libraries that support modularity. Next, you are introduced to `AMD
and RequireJS <#PLFDevGuide.JavaScript.AMD_and_RequireJS>`__. But you
may break to read some other references:

-  `JavaScript Function Closures, W3 Schools <#http://www.w3schools.com/js/js_function_closures.asp>`__

-  `Module Patterns In-Depth, Ben Cherry <#http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html>`__

-  `Mastering the Module Pattern, Todd Motto <#http://toddmotto.com/mastering-the-module-pattern/>`__


.. _PLFDevGuide.JavaScript.AMD_and_RequireJS:

=================
AMD and RequireJS
=================

**What is AMD?**

The module pattern gives you a way to create your namespace to protect
private things inside. What if your module depends on other libraries,
and the libraries use each other in chain? What if different versions of
a library are used by other applications in the same page? Is there a
way to always have the right libraries loaded in the right order?

The answer is to modularize the libraries themselves. The AMD
(Asynchronous Module Definition) standard defines the way that a library
is loaded as a module - as opposite to a global object, and that module
is available for only the other module that "requires" it.

**How it works?**

Let's say there are three companions in an AMD system: the library as a
dependency, an AMD loader, and a consumer - the module that wishes to
use the library. To avoid confusion, all are JavaScript. Here is how
they work:

-  The library defines itself as a module, by writing a function named
   ``define``:

   ::

       define(function(){});

   This is one of the signatures of *define*, which has only one
   parameter. The parameter, often documented as *factory*, is a
   function that returns a global(?) object, similarly as you see in the
   module pattern. Picking up the "counter" example, the code looks like
   that:

   ::

       define(function(){
           var counter = 0;
           count = function(){
               return (++counter);
           }
           return {
               count: count
           };
       });

-  The returned object will be global if you declare the library as an
   external script file, that is not AMD. In AMD, you "register" the
   library with the loader. The returned object then is wrapped under a
   new scope (so it is not global actually) created by the loader. As
   indicated by AMD specification, the scope is named ``require``.
   RequireJS - an AMD implementation - defines the alias ``requirejs``,
   both are the same object.

   The only way for the consumer to access the library is via the
   ``require()`` function given by the loader:

   ::

       require(["dependency1"], function("dependency1"){
           // here is your code that "consume" the dependency1
       });

Next, you will learn it via examples with RequireJS and jQuery.

**RequireJS**

RequireJS is an AMD loader. To download it, check out `Get
RequireJS <http://requirejs.org/docs/start.html#get>`__ page.

As said, you do not declare a library directly in script tags, but
register it to the loader instead. How registration is done depends on
the loader. Here you write an example of RequireJS in which you use
jQuery and one module of your own.

.. note:: The code sample can be found at `eXo Samples repository <https://github.com/exo-samples/docs-samples/tree/master/js/requirejs>`__.

It is built up from the previous example. Now "count" function is
wrapped into an AMD module, called ``util``. The consumer is ``my.js``
that contains onclick function. The html file simply gives a button to
test the function.

Look at the html file first:

.. code:: html

    <!DOCTYPE html>
    <meta charset="utf-8" />
    <html>
    <head>
    <script data-main="js/my" src="js/require.js"></script>
    </head>
    <body>
        <p>You've clicked <span id="result">0</span> times.</p>
        <button onclick="myClick();">Click me</button>
    </body>
    </html>

So here it is RequireJS that is loaded in script tag. ``my.js`` is not
loaded traditionally, instead it is the *data-main* source of RequireJS.
``my.js`` registers the dependencies by calling
``require.config({...})``:

.. code:: JavaScript

    require.config({
        baseUrl: "js",
        paths: {
            jquery: "jquery-3.2.1",
            util: "util"
        }
    });

This is a conventional configuration of RequireJS. You may omit the
configuration for "util", because RequireJS can auto-load scripts that
are located right under the baseUrl directory. In that case the module
name will be the file name without extension.

The ``util.js`` module is re-written from the "count" example. You
define an anonymous AMD module:

.. code:: JavaScript

    define(function(){
        var counter = 0;
        var count = function(){
            if (counter > 10) {
                alert("Stop! You're too excited!");
            }
            return (++counter);
        }
        return {
            count: count
        };
    });

JQuery accompanies AMD specification, though it also produces global
variables. The following code is much more than a define() function,
because it tries detecting if there is an AMD loader.

.. code:: JavaScript

    if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
        define( "jquery", [], function () { return jQuery; } );
    }

The last gap is how the consumer uses the libararies. In ``my.js``:

.. code:: JavaScript

    function myClick(){
        require(["util", "jquery"], function(util, $){
            $("#result").text(util.count());
        });
    }

Next, you will learn how to use non-AMD libraries with RequireJS.

**References**

This tutorial helps you understand the gist of JavaScript modularity, by
walking through the patterns from basic to advance. It does not cover
everything, indeed it avoids explaining a lot of things. So do not limit
yourself. Go ahead and read other references.

At this point you should read:

-  `AMD Specification <#https://github.com/amdjs/amdjs-api/wiki/AMD>`__

-  `RequireJS Usage <#http://requirejs.org/docs/api.html#usage>`__

.. _PLFDevGuide.JavaScript.Shim_and_NonAMD:

======================================
Shim configuration and Non-AMD modules
======================================

In this section you learn uses of shim configuration. Basically shim
configuration is something you add in *requirejs.config()* when you
need:

-  Synchronous dependencies loading.

-  Non-AMD libraries.

RequireJS documentation introduces shim configuration in `one
example <http://requirejs.org/docs/api.html#config-shim>`__. Here it
breaks into three simpler samples: deps, exports and init.

**Synchronous dependencies loading**

Remember "A" in AMD stands for "Asynchronous"? It aims at optimizing
performance. However when you need two libraries and one of them depends
on the other, you use shim **deps** configuration to load them in order.

.. code:: JavaScript

    require.config({
        baseUrl: "js",
        paths: {
            jquery: "jquery-3.2.1",
            util: "util"
        },
        shim: {
            // util depends on jquery.
            // util is non-AMD.
            "util": {
                deps: ["jquery"]
            }
        }
    });

The idea is as simple as you see it. Only one thing that needs
explanation: "util" in this example is non-AMD, because shim will not
work on AMD libraries. If "util" complies AMD, it should declare its
dependencies using this form of define():

.. code:: JavaScript

    define(["jquery"], function(jquery){...});

**Non-AMD with exports**

With the following shim configuration, the ``util`` module will hold a
local (in require scope) reference to the global ``count`` variable.

.. code:: JavaScript

    shim: {
        "util": {
            exports: "count"
        }
    }

To see it in action, let's modify `the previous example <https://github.com/exo-samples/docs-samples/tree/4.3.x/js>`__
to make "util" a non-AMD module.

1. Edit ``util.js`` to be a closure which declares a global variable:

	.. code:: JavaScript

		(function (){
			var counter = 0;
			// count is global
			count = function(){
				return ++counter;
			};
		})();

2. In ``my.js``, "count" is exported and referenced by the name "util", 
   in the scope of "require":

	.. code:: JavaScript

		require.config({
			baseUrl: "js",
			paths: {
				jquery: "jquery-3.2.1",
				util: "util"
			},
			shim: {
				"util": {
					exports: "count"
				}
			}
		});

		function myClick(){
			require(["util", "jquery"], function(util, $){
				$("#result").text(util);
			});
		}

As you may ask, the global "count" is still available (after require()
execution finishes).

**Non-AMD with init**

The init function can be used to do some tweaks with non-AMD library,
for example to remove a global variable.

The simplest use of init function can be considered as an alternative of
exports. In the below example, you return "count" in init function, it
is equivalent to exporting "count".

.. code:: JavaScript

    require.config({
        baseUrl: "js",
        paths: {
            jquery: "jquery-3.2.1",
            util: "util"
        },
        shim: {
            "util": {
                //exports: "count"
                init: function() {
                    return count;
                }
            }
        }
    });

If you need to use dependencies in init function, write it with
parameters as below:

.. code:: JavaScript

    require.config({
        baseUrl: "js",
        paths: {
            jquery: "jquery-3.2.1",
            util: "util"
        },
        shim: {
            "util": {
                deps: ["jquery"],
                init: function (jquery) {
                    //
                }
            }
        }
    });

**References**

This section explains uses of shim configuration and how Non-AMD modules
can be used with RequireJS. Please do not miss the important notes in
RequireJS documentation:

-  `Shim configuration <http://requirejs.org/docs/api.html#config-shim>`__

.. _PLFDevGuide.JavaScript.GMD:

========================
GateIn Module Definition
========================

As you understood the module pattern explained in previous sections, now
you are convinced to stick with it when developing in eXo Platform. The
Platform is built on top of GateIn that introduces the GMD as a standard
for writing and packaging JavaScript modules as portal resources.

**The counter example as a portlet**

For easily starting with GMD (GateIn Module Definition), you will turn
the single html page in "counter" example into a portlet.

.. note:: Please get the source code at `eXo Samples Repository <https://github.com/exo-samples/docs-samples/tree/4.3.x/js/counter-portlet>`__.

Though you still can write inline scripts into your portlet JSP, in this
example you turn all into modules, so the first thing is to re-write
``my.js``. In the single html example it was:

.. code:: JavaScript

    require.config({
        baseUrl: "js",
        paths: {
            jquery: "jquery-3.2.1",
            util: "util"
        }
    });

    function myClick(){
        require(["util", "jquery"], function(util, $){
            $("#result").text(util.count());
        });
    }

The *require.config()* will be replaced by GMD configuration (later in
``gatein-resources.xml``). Wrap any other code in a closure:

.. code:: JavaScript

    (function(util, $){
        $(document).ready(function(){
            $("body").on("click", ".counter-portlet button", function(){
                $("#result").text(util.count());
            });
        });
    })(util, jq);

It changes much because you no longer write a global named function
(myClick) and attach it to a button directly in HTML. Instead you use
jQuery and a CSS selector. The selector should point to the right HTML
element that you write in your portlet template, in this example it is
``counter.jsp``:

.. code:: JSP

    <div class='counter-portlet'>
    <h2>The Counter Portlet</h2>
    <p>You've clicked <span id="result">0</span> times.</p>
    <button>Click me</button>
    </div>

The last thing is to declare your GMD modules. It is done in
``gatein-resources.xml``:

.. code:: xml

    <gatein-resources xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.gatein.org/xml/ns/gatein_resources_1_3 http://www.gatein.org/xml/ns/gatein_resources_1_3"
    xmlns="http://www.gatein.org/xml/ns/gatein_resources_1_3">
        <module>
            <name>util</name>
            <script>
                <path>/js/util.js</path>
            </script>
        </module>
        <portlet>
            <name>Counter</name>
            <module>
                <script>
                    <path>/js/my.js</path>
                </script>
                <depends>
                    <module>jquery</module>
                    <as>jq</as>
                </depends>
                <depends>
                    <module>util</module>
                </depends>
            </module>
        </portlet>
    </gatein-resources>

The both dependencies - jQuery and util - are AMD modules. Simply
declare "util" as a shared module. There is already a shared module
named "jquery", and its version does not matter for now, so you use it
without packaging a jQuery file. You do not need to package
``require.js`` too.

Now you can build, deploy and test the counter portlet before you look
deeper into GMD.

**Understanding GMD**

So what happens to your modules then?

First, your js files are treated as GateIn **resources**, that means
GateIn manages their lifecycle. They are deployed to the server, thus
they are available all the time, but only loaded in the pages that use
them.

To a JS resource, basically GateIn tweaks it into AMD modules, deploys
it then loads it in the right pages. Here you see what happens to the
``my.js`` module:

1. The code is wrapped in an AMD define():

	.. code:: JavaScript

		define('PORTLET/counter-portlet/Counter', ["SHARED/jquery","SHARED/util"], function(jq,util) {
			var require = eXo.require, requirejs = eXo.require,define = eXo.define;
			eXo.define.names=["jq","util"];
			eXo.define.deps=[jq,util];
			return (function(util, $){
				$(document).ready(function(){
					$("body").on("click", ".counter-portlet button", function(){
						$("#result").text(util.count());
					});
				});
			})(util, jq);
		});

It is a normal AMD named module. The AMD name is formed with scope
(PORTLET), the name of the app where the resource is registered
(counter-portlet) and the module name configured in
``gatein-resources.xml`` (Counter).

2. The module then is minified and deployed as a web resource that can 
   be accessed by a URL like this:

	::

		http://localhost:8080/portal/scripts/4.3.0/PORTLET/counter-portlet:COUNTER-min.js

It mimics the following RequireJS paths configuration:

::

    baseUrl: "http://localhost:8080",
    paths: {
        "PORTLET/counter-portlet/Counter": "/portal/scripts/4.3.0/PORTLET/counter-portlet:COUNTER-min"
    }

The minified version is the one that takes effect, but you can view the
unminified version by eliminating the "-min" part in the URL.

3. Finally in the pages that contain your portlet, the modules (name and
   path) are added to the "require" object. This is a page object 
   defined by eXo.

	.. code:: html

		<html>
		<head>
		<script type="text/javascript">
			var require = {
				"shim":     {...},
				"paths":    {...
					"SHARED/util": "/portal/scripts/4.3.0/SHARED/util-min",
					"PORTLET/counter-portlet/Counter": "/portal/scripts/4.3.0/PORTLET/counter-portlet:Counter-min",
				...}
			};
		</script>
		</head>
		</html>

**GMD and Non-AMD libraries**

Now assume the library util is not compatible with AMD. For example, it
is the following plain old JavaScript:

.. code:: JavaScript

    var counter = 0;
    var count = function(){
        return (++counter);
    }

You will use the **adapter** script in ``gatein-resources.xml``
configuration to make its AMD compatible:

.. code:: xml

        <module>
            <name>util</name>
            <script>
                <adapter>
                    (function() {
                        <include>/js/util.js</include>
                        return {
                            count: count
                        };
                    })();
                </adapter>
            </script>
        </module>

This adapter code wraps the original script (pay attention to
**include** tag) in a closure, and returns the function count() that
will be accessed by util.count(). The final code that is loaded in the
page will be:

.. code:: JavaScript

    define('SHARED/util', [], function() {
        var require = eXo.require, requirejs = eXo.require,define = eXo.define;
        eXo.define.names=[];
        eXo.define.deps=[];
        return (function() {
            var counter = 0;
            var count = function(){
                return (++counter);
            }
            return {
                count: count
            };
        })();
    });

.. _PLFDevGuide.JavaScript.JQuery:

===========================
JQuery versions and plugins
===========================

Because of JQuery's popularity, it is necessary to have this guideline
that helps you use JQuery safely, especially if its versions and
extensions matter to your application.

**The built-in SHARED module jquery**

As in the counter portlet example, you can use the default "jquery"
shared module. It is packaged and declared in ``eXoResources.war``.

.. code:: xml

    <module>
        <name>jquery</name>
        <as>$</as>
        <script>
            <adapter>
                (function() {
                <include>/javascript/jquery-3.2.1.js</include>
                return jQuery.noConflict(true);
                })();
            </adapter>
        </script>
    </module>

So the version is 3.2.1 at the time this document is written. To check
it in your eXo instance, use this URL when PRODUCT PLF\_VERSION is
starting locally:

::

    http://localhost:8080/portal/scripts/5.0.0/SHARED/jquery.js

N.B: The URL cited above is for a 5.0.0 PRODUCT instance, you should
replace it by the correct version of your server.

**Using a different version of JQuery**

In case you want to use a different version of JQuery, for example
1.8.3, declare it as a GMD module with another name than "jquery".

::

    <module>
        <name>jquery-1.8.3</name>
        <script>
            <adapter>
                (function() {
                <include>/js/jquery-1.8.3.js</include>
                return jQuery.noConflict(true);
                })();
            </adapter>
        </script>
    </module>

**Using JQuery plugins**

Using JQuery plugins/extensions probably causes conflict over global
variables. The problems vary, but usually you can deal with it by using
GMD adapter pattern. A simple and useful method is to save the current
global one at first and restore it at last. Here is an example:

.. code:: xml

    <module>
        <name>bootstrap_tooltip</name>
        <script>
            <adapter>
                (function() {
                var oldJQuery = window.jQuery;
                window.jQuery = $;
                <include>/WEB-INF/classes/org/exoplatform/task/management/assets/javascripts/bootstrap/bootstrap-tooltip.js</include>
                window.jQuery = oldJQuery;
                return $;
                })();
            </adapter>
        </script>
        <depends>
            <module>jquery</module>
        </depends>
    </module>

See some other examples in `Task Management Addon
project <https://github.com/exo-addons/task/blob/develop/task-management/src/main/webapp/WEB-INF/gatein-resources.xml>`__.
