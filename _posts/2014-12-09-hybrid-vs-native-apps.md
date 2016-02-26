---
id: 192
title: Hybrid vs Native Apps
date: 2014-12-09T04:27:37+00:00
author: dmarges
layout: post
guid: http://www.donmarges.io/?p=192
permalink: /hybrid-vs-native-apps/
categories:
  - Mobile Apps
  - Tech Discussions and Debates
---
I think this debate is probably up there with vi vs emacs at this point, but here&#8217;s my take on it. 

I&#8217;ll start with my experiences with developing both Hybrid apps and Native Apps in my day jobs. For companies, the idea of &#8220;write once, deploy on any device&#8221; is pretty sexy especially if they are mostly web but are trying to bring in mobile development business. There is lower labour costs and lower training and staffing costs since you don&#8217;t have to hire Objective C or Java developers nor do you have to bring current staff up to speed on those languages. The lower labour costs come from the fact that you&#8217;re writing the app once and not two or three times depending on the platforms you are supporting.

There are a few tools that make Hybrid apps possible but the one with the most clout is PhoneGap. It supports a vast number of platforms and is free to use. There is even a build tool which manages your build processes in the cloud for a fee.

The way PhoneGap works is that it creates a native application that contains a WebView. It&#8217;s in this WebView that your HTML, CSS and JavaScript is executed. It&#8217;s as simple as that!

I hope you didn&#8217;t think that the story ends here&#8230;because it doesn&#8217;t and it&#8217;s not one with a happy ending. Yes, in my experience you can certainly develop great Mobile apps using the Hybrid approach. I am in no way trashing this method. When going Hybrid you need to keep some key points in mind.

One of the things I would be worried about when going with the Hybrid approach is third-party libraries. Although PhoneGap offers a lot of functionality out of the box, you will need to supply libraries for things like displaying ads and analytics. PhoneGap does have a community of plugins which interface with third-party libraries, but if you are using a library no one has written a plugin for then you will have to write your own.

When you write a plugin for PhoneGap, you are really writing code in at least two languages. The answer to why lies in the fact that PhoneGap provides a JavaScript layer which makes calls into the native functions of the device. Therefore, writing a plugin will mean that you have to write in at least two languages: JavaScript and Objective C or Java or both depending on what you want to support. At the risk of sounding cynical, this is the whole reason you wanted to go with a Hybrid approach to begin with! You wanted to avoid writing code in multiple native languages.

To further add to some of the pains of Hybrid Mobile App Development, there is the issue of architecture. Technically, I guess you can have a straightforward &#8220;website&#8221; structure where you have multiple HTML pages and you just link to them through anchor tags but I have never been on a project where things could have been implemented in such a simple manner. In fact, the preferred method in PhoneGap is to use a Single Page Application architecture. This isn&#8217;t terrible, but it will require your JavaScript developer to be proficient with an SPA-type setup and a strong understanding of JavaScript is a must with this approach.

Speaking from my personal experience, I have gone with just using PhoneGap&#8217;s starter &#8220;framework&#8221; when you start the app which worked out pretty well. I have also used Sencha Touch which is based on the Ext framework but adds a lot of cool stuff for the mobile environment. At the risk of sounding like one of their salesmen, it&#8217;s a great framework and should consider it if you have a more complicated UI and are really looking for a near-native experience.

The team who built Sencha Touch went through a lot of work to add a great level of polish. For example, the scrolling lists that are part of nearly every Mobile app have a lot going on under the hood that controls the smoothness and even the momentum of scrolling through the list. This gives you a feel that is pretty damn close to native. It&#8217;s also an MV* framework so it conforms to a lot of what you already know about structure if you&#8217;re coming from a Web Dev background and have used Rails.

Another cool thing that Sencha Touch has going for it is that it comes with CSS &#8220;themes&#8221; that you can include in your project that make it look like it&#8217;s a native app. It has themes for iOS, Android, BlackBerry and Windows Phone. 

It&#8217;s negatives are that it can be clunky feeling on some of the Android devices. Even newer ones like the Galaxy S4 had some issues regarding performance. This is due to a couple of factors. One of which is another strike against Sencha. The DOM structure of some of its elements can be quite complex and this bogs down performance. The other is that the browser on the Android devices just isn&#8217;t very good. You can use Chromium which is the Open Source version of Chrome. I have had experience including a build of Chromium and using that to power the WebView that is created in a PhoneGap project. This helped performance, but some rendering issues still remained.

Overall, if you have to go with a Hybrid solution I would opt to use Sencha Touch. Especially if you&#8217;re trying to create a native experience but don&#8217;t have the know-how to build a native app. I don&#8217;t have experience using something like Backbone or something like that to build a Mobile Application. Please contact me if you have, I would be curious as to what your experience was.

In the other corner of this flame war is a full-fledged Native Application. I have developed quite a few Native applications some of which I will share at a later time on this blog. For now, I will just share what it was like to code in the native environments.

Personally, I started out doing Native Applications. I coded in Java when I ran my Mobile Games business for J2ME. From there I moved on to developing BlackBerry Applications which also used Java. Then I started writing Android Applications and then finally sticking with developing iOS apps.

One of the points I made earlier is that a Hybrid approach means that if you&#8217;re a Web Developer, then you don&#8217;t have to learn new languages. From my perspective, learning Java and Objective C wasn&#8217;t that difficult. At the time of writing this, Swift has already been released for quite some time now and it&#8217;s much more elegant and friendly to newcomers than Objective C. There is even less of an excuse while looking at Java since it&#8217;s taught in most Computer Science curriculums. The thing that comes with the learning curve is just learning what all of the libraries that come with iOS or Android can do and what they can&#8217;t do. Usually this is fixed with reading a lot of documentation.

In my opinion, nothing in the Hybrid world compares to using a Native app and nothing compares to actually coding one. With the Hybrid app development path, I always felt like I was hacking something together to make it work. I can&#8217;t quite put it into words, but if someone asked me if a feature was possible I never felt totally comfortable giving a timeframe since there was usually an obscure issue that would come with adding the new feature.

From the projects I worked on using the Hybrid approach, I never really experienced a savings in time. These projects took just as long to build and maintain as a Native project. In fact, I would say they took longer since we had to account for things that wouldn&#8217;t be issues developing in the native environments. One issue was just managing and maintaining all of the plugins for third-party libraries which required that we write native code anyways.

Another advantage that Native Environments have that Hybrid doesn&#8217;t is that both iOS and Android have WYSIWYG editors for the UI. In iOS you have the IDE XCode which has Storyboard which lets you layout screens, navigation and transitions in a visual way. Android has the Android Studio which is similar to Storyboard. I don&#8217;t know of anything similar for doing a Web UI which you could use in a PhoneGap project.

**Closing Thoughts**

If you have a choice in your project as to what method to choose, go with Native. It doesn&#8217;t take long to learn the ropes of Objective-C, Swift and Java and sites like <a href="http://www.teamtreehouse.com" target="_blank">Team Treehouse</a>, <a href="http://codeschool.com" target="_blank">Code School</a> and <a href="http://pluralsight.com" target="_blank">Pluralsight</a> have a lot of great courses that will get you coding Native Apps quickly.

If you have to develop a Hybrid app and there&#8217;s no way around it. I would use <a href="http://www.appcelerator.com" target="_blank">Titanium</a> from Appcelerator which isn&#8217;t a Hybrid app. It lets you code in JavaScript and the tool will convert your JavaScript to Native Code. If you can&#8217;t use Titanium and MUST go with a true hybrid app, then you should look at using Sencha Touch and PhoneGap for your project.