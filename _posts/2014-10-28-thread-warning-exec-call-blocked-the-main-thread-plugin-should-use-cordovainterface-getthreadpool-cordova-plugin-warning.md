---
id: 184
title: 'THREAD WARNING: exec() call blocked the main thread. Plugin should use CordovaInterface.getThreadPool(). &#8211; Cordova Plugin Warning'
date: 2014-10-28T14:48:51+00:00
author: dmarges
layout: post
guid: http://www.donmarges.io/?p=184
permalink: /thread-warning-exec-call-blocked-the-main-thread-plugin-should-use-cordovainterface-getthreadpool-cordova-plugin-warning/
categories:
  - Cordova
tags:
  - cordova plugin
  - cordova plugin threads
  - cordova plugins
---
Hey all,

So I came across this today. My plugin needed to add and manipulate views within the Cordova app. The problem is that you can&#8217;t do this since in Cordova, the WebView is on the WebCore thread and it can manipulate the UIThread directly. Hence you get this nice error/warning:

<pre>THREAD WARNING: exec() call to [pluginname].[method] blocked the main thread for XXms. Plugin should use CordovaInterface.getThreadPool().
</pre>

The way to fix this is to use the runOnUiThread method from your plugin&#8217;s source file. To do this you need to get the main activity of the app. Here&#8217;s how you would do that:

[sourcecode language=&#8221;java&#8221;]
  
this.cordova.getActivity();
  
[/sourcecode]

From here you would then invoke the runOnUiThread method and pass in a new Runnable object with its own run method. Within the run method is where you would put your code that changes your views. Here&#8217;s a snippet to tie it all together:

[sourcecode language=&#8221;java&#8221;]
  
public boolean execute(String action, final JSONArray inputs, final CallbackContext callbackContext) throws JSONException {
 		  
PluginResult result = null;
 		  
if (action.equals(&#8220;myPluginMethod&#8221;)) {
			  
this.cordova.getActivity().runOnUiThread(new Runnable() {
				  
public void run() {
					  
callbackContext.sendPluginResult(myMethod(inputs));
				  
}
			  
});

result = new PluginResult(Status.OK);

}
  
}
  
[/sourcecode]

Hope this helps! Feel free to share your experiences in the comments.