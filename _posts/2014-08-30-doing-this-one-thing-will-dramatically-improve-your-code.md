---
id: 87
title: Doing this one thing will dramatically improve your code!
date: 2014-08-30T04:48:23+00:00
author: dmarges
layout: post
guid: http://www.donmarges.io/?p=87
permalink: /doing-this-one-thing-will-dramatically-improve-your-code/
categories:
  - Unit Testing
tags:
  - automated testing
  - tdd
  - test-driven-development
---
I know what you&#8217;re thinking&#8230;I sound like an Informercial salesman! I promise that if you stick with this article it will be worth your while.

In order to deliver on my promise, I want to tell a story. I was assigned to work on a project with a very short deadline, understaffed and a list of features that would have to be squeezed into a VERY long scroll. I know this is not only a cliche, but the status quo for Developers. I ask that you hear me out. I worked feverishly on this project, putting in overtime and constantly stressing about it even when I was not at work.

What was supposed to be a couple of months turned into four months. It wasn&#8217;t THAT the project went over its allotted budget but WHY it went over its budget that was interesting to me. We had all of the features in by the two month mark. It was the BUGS that were eating up most of our time! The root cause of this wasn&#8217;t that our features were difficult to implement, it was that our code changes would break other features of the app. At this point it would be easy to point out that our app lacked structure. Although we did use an MVC framework, there were parts of our code that were messy. You could make the argument that we weren&#8217;t using Source Control. We were. We had multiple people managing our repo.

What we lacked was rather simple&#8230;we lacked Automated Testing!

Heresy! That&#8217;s right, we didn&#8217;t have any Unit Testing, or Integration Testing or Functional Testing. It was purely code and pray. And it cost us to say the least. It was a painful lesson for me. I don&#8217;t pretend to be a Kent Beck or an Uncle Bob, but after this project I bought ALL of their books and devoured them over the course of a week.

For me, that project was a tipping point. For a long time, I dabbled in Automated Testing. I kept hearing whispers about it. I heard that it was something &#8220;Real Coders&#8221; used to produce high-quality code, but because it wasn&#8217;t a strict requirement at that company, I was lazy about using it. I would get &#8220;spasms&#8221; where I would try to use it for everything, but then I would get frustrated and give up.

When I was finished with that project, I became 110% dedicated to using and mastering the technique of Test Driven Development. Sure, there were times where it did take me longer to complete a task, but the confidence I felt in my code was well worth it. It certainly didn&#8217;t catch all of the bugs I produced, but it decreased the amount of &#8220;stupid&#8221; bugs many fold. I define &#8220;stupid&#8221; bugs as passing in the wrong type of arguments to a Constructor as an example.

It was this project that I am most thankful for in my career. Not because it was glamorous, or made me &#8220;Internet famous&#8221; or anything like that. It&#8217;s because it took this vague pain that I felt on a lot of previous projects and really made it visceral. It forced action to improve and it thrusted me out of my complacency and into a new realm of professionalism and well-crafted code.

If I ever meet the Authors of these books, I will thank them profusely for the impact they have made in my Career and my Life. These books are:

<a title="Clean Code" href="http://www.amazon.ca/gp/product/B00MU8W5MG/ref=as_li_ss_tl?ie=UTF8&camp=15121&creative=390961&creativeASIN=B00MU8W5MG&linkCode=as2&tag=donmar-20" target="_blank">Clean Code</a>
  
<a title="The Clean Coder" href="http://www.amazon.ca/gp/product/0137081073/ref=as_li_ss_tl?ie=UTF8&camp=15121&creative=390961&creativeASIN=0137081073&linkCode=as2&tag=donmar-20" target="_blank">The Clean Coder</a>
  
<a title="Working Effectively with Legacy Code" href="http://www.amazon.ca/gp/product/0131177052/ref=as_li_ss_tl?ie=UTF8&camp=15121&creative=390961&creativeASIN=0131177052&linkCode=as2&tag=donmar-20" target="_blank">Working Effectively with Legacy Code</a>
  
<a title="Test Driven Development" href="http://www.amazon.ca/gp/product/0321146530/ref=as_li_ss_tl?ie=UTF8&camp=15121&creative=390961&creativeASIN=0321146530&linkCode=as2&tag=donmar-20" target="_blank">Test Driven Development</a>
  
<a title="The Pragmatic Programmer" href="http://www.amazon.ca/gp/product/020161622X/ref=as_li_ss_tl?ie=UTF8&camp=15121&creative=390961&creativeASIN=020161622X&linkCode=as2&tag=donmar-20" target="_blank">The Pragmatic Programmer</a>