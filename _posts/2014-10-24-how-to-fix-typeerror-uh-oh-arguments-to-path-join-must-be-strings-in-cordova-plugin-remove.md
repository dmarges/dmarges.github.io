---
id: 173
title: 'How to fix &#8211; TypeError: Uh oh! Arguments to path.join must be strings in Cordova Plugin Remove'
date: 2014-10-24T16:31:54+00:00
author: dmarges
layout: post
guid: http://www.donmarges.io/?p=173
permalink: /how-to-fix-typeerror-uh-oh-arguments-to-path-join-must-be-strings-in-cordova-plugin-remove/
categories:
  - Cordova
tags:
  - cordova
  - cordova creating a plugin
  - cordova plugins
  - phonegap
  - phonegap plugins
---
I came across a problem while doing some Cordova/PhoneGap Plugin Development that I thought I would share my solution to.

The problem was when using the Cordova Command Line Tool to remove a plugin which was for the iOS and Android platforms I got this error:

<pre>TypeError: Uh oh!
Arguments to path.join must be strings
</pre>

The problem for me was an incorrect setting in my plugin.xml file specific to the Android portion of the plugin. When you create a plugin, a plugin.xml file is necessary to make it work. For each platform you want it to work on, you must add an entry to that file. For example, the Android entry would look like this:

[sourcecode language=&#8221;xml&#8221;] <platform name="android"> <config-file target="res/xml/config.xml" parent="/*">
            
<feature name="MyPlugin"> 

<param name="android-package" value="com.mycompany.MyPlugin" />
</feature>

          
</config-file><source-file src="src/android/MyPlugin.java" target-dir="src/com/mycompany/MyPlugin.java" /></platform> [/sourcecode]

The issue for me was caused by an incorrect source-file tag, I had the following:

[sourcecode language=&#8221;xml&#8221;]<source-file src="src/android/MyPlugin.java" />[/sourcecode]

You MUST have a target-dir attribute specified as well:

[sourcecode language=&#8221;xml&#8221;]<source-file src="src/android/MyPlugin.java" target-dir="src/com/mycompany/MyPlugin.java" />[/sourcecode]

I hope this helps. Feel free to share your solutions or whether this worked for you in the comments.