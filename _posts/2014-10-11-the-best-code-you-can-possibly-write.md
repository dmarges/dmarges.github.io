---
id: 162
title: The Best Code You Can Possibly Write
date: 2014-10-11T05:27:47+00:00
author: dmarges
layout: post
guid: http://www.donmarges.io/?p=162
permalink: /the-best-code-you-can-possibly-write/
categories:
  - Tech Discussions and Debates
tags:
  - chrome
  - internet explorer 7
  - internet explorer 8
  - tdd
  - test-driven-development
---
How do you write amazingly solid code that covers all edge cases, doesn&#8217;t break and is 100% reliable?

That&#8217;s simple, you don&#8217;t write it at all.

Many times in my career I have been asked to solve complicated issues that resulted in insanely brittle code that frankly I didn&#8217;t have any faith or confidence in. Don&#8217;t get me wrong, these weren&#8217;t complicated issues as in trying to find the largest prime number or some complex Machine Learning algorithm. These issues were along the lines of &#8220;hey Don, we need to change that feature so that we can handle when a user uploads a 50gb (even though we told them not to) file while not logged in on a harvest moon from a dial up connection in the middle of Montana.&#8221; Issues that had a simple fix&#8230;don&#8217;t address them.

I have written really insane code that I fought tooth and nail against because these issues were more easily solved by a simple error message. Why is it that we feel we have to cave into the insane edge cases that come up? It&#8217;s not like we demand electricians to repair a fuse box for us because we decided to try to fix a blown fuse with toffee and a paper clip! We don&#8217;t demand that contractors design a bathroom to protect us against dropping our hair dryer in the toilet! So why are we stuck trying to handle ridiculously outdated browsers and dialup internet connections?

What Project Managers and Stakeholders fail to see is that coding is expensive. Just because what developers do isn&#8217;t something you can touch physically, that doesn&#8217;t mean costs are any lower or the work is easier. I&#8217;ve overheard PMs complain about how there is no room in the budget for things like TDD, but what about handling every single edge case for a form? 

If you only accept PNGs for uploads then limit it to PNGs dammit! If they try to upload anything else, stop them and display a message that you only accept PNGs. I know that&#8217;s a very trite example, I could give others from my past places of employment but I don&#8217;t want to name names out of respect.

I get why it happens. Maybe a potential customer needs your software to be able to support an older environment or their users typically use older machines that can&#8217;t support new browsers. If they are non-technical they won&#8217;t understand why it can&#8217;t be done. That&#8217;s why it&#8217;s up to us to tell them that it&#8217;s not feasible to meet their expectations. We can&#8217;t just tell them no and leave it at that. It&#8217;s also our responsibility as developers to help them brainstorm other solutions that could meet their needs in other ways. For example, we can&#8217;t support anything else other than PNG, but maybe we can put a link to a website that converts your JPEGs to PNGs for free. Or in the other example, suggest that we can develop the website, but we can&#8217;t use Canvas animations because IE7 won&#8217;t support it and we can use jQuery to do what we can in the way of animation.

What everyone in this business has to remember is that customers use our software because it solves a huge pain point for their business. Focus on solving that pain point! Don&#8217;t worry about implementing OAuth so they can login with Facebook if you have a kickass CRM. If you know that users of your CRM mostly use Chrome, and Chrome offers the best way to help you solve their problem then stick a notice up on your sales page saying that you only support Chrome users. Again, if what you are offering them is so targeted and so ridiculously useful to their business for a good price then they won&#8217;t care if they have to use Chrome! Don&#8217;t believe me? How many organizations are still (STILL!!!) stuck using IE8 because the have a web app that was developed a long time ago and the costs of switching are too high? 

All of this comes down to the fact that writing code is very unintuitive for human beings. It&#8217;s not something that is natural to us and also the industry is still relatively new. Many of the tools we use are still broken, or have their own fragility or idiosyncrasies. Just think of how many different languages you have to know to get a damned web app up and running! My thought is let&#8217;s focus on the code that we HAVE to write to solve the pain point of our customers and no more. If we come up against something and it isn&#8217;t directly related to solving that problem, then find a solution that isn&#8217;t more code.

I will end off with the famous Space Race problem. During the Space Race, the astronauts needed something to write with. Normal pens wouldn&#8217;t work in zero-gravity. NASA spent millions to develop a pen that would work in space. The Soviet Union used a pencil. When faced with a similar problem, always take the pencil, even NASA doesn&#8217;t have millions to throw away on pens anymore&#8230;