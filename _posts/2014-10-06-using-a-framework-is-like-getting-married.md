---
id: 153
title: Using A Framework Is Like Getting Married
date: 2014-10-06T23:30:19+00:00
author: dmarges
layout: post
guid: http://www.donmarges.io/?p=153
permalink: /using-a-framework-is-like-getting-married/
categories:
  - Tech Discussions and Debates
tags:
  - contributing to open source
  - open source contributions
  - ruby on rails
  - sinatra
---
I read an article on [netpoetica](http://netpoetica.com/why-i-dont-want-your-javascript-framework-but-i-love-you/?utm_source=javascriptweekly&utm_medium=email "JavaScript Frameworks") that I really liked. It made some really excellent points I want to riff on.

Many times (I&#8217;m guilty of this too) when you&#8217;re involved in a greenfield project, the discussion is which framework should be used. Often, this comes from which one the team has the most experience using. A great point the article makes is that you should plan thoroughly upfront, and then decide on a framework based on your precise specifications. This is excellent advice but I want to add my spin on it. I absolutely agree, but I would say that the discussion of which framework shouldn&#8217;t exist to begin with.

I definitely see the argument that you should build to a spec and not a framework, but I will push back and say that you should pick one framework, two at the absolute most and just master the bejesus out of it. For most of the projects I have been involved with, the functionality is about 80% similar. What do I mean by functionality specifically? I mean things like logging in, user sign up, CRUD operations, etc. There is only about 20% of code that contains logic that is specific to the stakeholders requirements. Now, I&#8217;m talking Web App projects. I don&#8217;t know if this applies to developing systems for Aircraft or Nuclear Power Plants. One framework I love and fits most of my needs is Ruby on Rails. I know it&#8217;s ugly to use the scaffolding and all of that stuff. I won&#8217;t debate on best practices, but if you look at it from a business point of view, you can systematize a lot of the development! You would be able to give more accurate estimates for clients, you would be less likely to run into surprises and budget overruns. It&#8217;s great! All of the business logic can be wrapped up in its own library that you can then keep separate from the framework. So if you choose Sinatra down the road, it won&#8217;t affect any of the business logic.

Something else I want to riff on is what is talked about later on in the article about recruiters liking to see number of years of experience you have with a given framework, library or language. I think this is total and utter garbage. I&#8217;ve personally worked with many developers with double digit years of experience who displayed little proficiency in that particular language, not even a framework. That person just so happened to have the same job for about a dozen years doing the same thing. Of course on a resume, that counts as years put in.

The last thing I will hit on is the importance of reading the source code of your chosen framework. It&#8217;s all well and good to use a framework regularly, but please take the time to read the source code. To go one step further, I would try to make some contributions to that framework. Even if your submissions get rejected, keep doing it anyways. You gain more from having a deeper understanding of the source code and this will help to mitigate future unforeseen problems. There&#8217;s actually a great book that I read that was a huge help for me. The book is [Code Reading: The Open Source Perspective](http://www.amazon.ca/gp/product/0201799405/ref=as_li_ss_tl?ie=UTF8&camp=15121&creative=390961&creativeASIN=0201799405&linkCode=as2&tag=donmar-20) <img src="http://ir-ca.amazon-adsystem.com/e/ir?t=donmar-20&#038;l=as2&#038;o=15&#038;a=0201799405" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />by Diomidis Spinellis.