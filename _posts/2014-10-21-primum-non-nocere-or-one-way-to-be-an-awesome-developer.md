---
id: 168
title: 'Primum non nocere &#8211; Or one way to be an awesome developer'
date: 2014-10-21T00:16:45+00:00
author: dmarges
layout: post
guid: http://www.donmarges.io/?p=168
permalink: /primum-non-nocere-or-one-way-to-be-an-awesome-developer/
categories:
  - Tech Discussions and Debates
tags:
  - be an awesome developer
  - one way to be an awesome developer
  - primum non nocere
---
I bet you&#8217;re asking what the phrase _Primum non nocere_ means and what does it have to do with Software Development! Well read on 😉

_Primum non nocere_ is a Latin phrase which is actually taught to med students. It means &#8220;First, do no harm&#8221;. It&#8217;s taught as a means of helping students to realize that sometimes the best course of action is none at all or the least invasive action. 

To put the aforementioned phrase into context, let&#8217;s say that you suffer from a headache on a particular day of the month for every month of your life. The headache is manageable and just requires you to take it easy for that day. You decide to have your Doctor check it out. Your Doctor tells you to take some Aspirin and lay down until the headache goes away for that day. The Doctor my send you for a test, but if you&#8217;re a young person and in good shape, then the last statement will be the most likely outcome.

Now let&#8217;s look at this from a Developer&#8217;s perspective. When we see a problem with the code we are working on, what is our course of action? Well we would pull down the latest code, create a branch, run the test suite, do some more debugging and finally see what the issue is if we are lucky. Then what do we do? Well, if you&#8217;re a student of TDD, you&#8217;ll write some tests, make them pass to fix the bug. Then you would see if all of the other tests are passing. If everything looks good you&#8217;ll push it up to your repo and submit a pull request. 

What typically happens is that your fix introduced some other subtle bug which you may not have expected. So you go through the process again. Then probably again, stacking change upon change. This is in violation of _Primum non nocere_. In the example visit to your Doctor, did he whip out his bonesaw and start poking around inside your brain? When you have a muscle cramp, does the Doctor cut open your skin to see what&#8217;s happening?

The initial problem could have been left alone and you wouldn&#8217;t be stuck in this cycle of breaking/fixing. For example, let&#8217;s say you populate a list from an external API. From time to time, the request will timeout leaving you with a blank list. So your idea was to check for a timeout and if the request does in fact timeout, then make the request again. You realize that sometimes it could timeout multiple times, so you put it in a loop to keep rechecking. Then you create a way to break out of the loop when the request is successful. After that work you realize that your app is killing the user&#8217;s battery by constantly hammering http requests, on an on ad infinitum.

If we were to apply _Primum non nocere_, one option in the above example would be to simply add some indication to the user that the data was unable to be fetched and to try again and adding a button to refresh but that&#8217;s as far as you would go. This would not require any edits to existing code and would be a matter of a Label field and possibly a Button to call the function you have to make the request.

Is it potentially a pain for the user to hit the refresh button? Possibly, but I think we all vastly overestimate how much users actually care about stuff like this. I know that the statement I just made would probably make our inner Steve Jobs blow a gasket, or our bosses or stakeholders put in a recommendation of who should be in the first round of layoffs but hear me out. 

When one of the iPhones was having issues of dropped calls because people were holding it a certain way, Steve Jobs famously taught everyone how to fix the problem by holding the phone in the other hand. That&#8217;s brilliant! Instead of recalling the phones or issuing a complicated fix, he simply showed people a quick and easy way to fix it that didn&#8217;t involve even more issues. Did that affect sales of the iPhone in the least? Absolutely not!

Even though _Primum non nocere_ was meant for Medical Practitioners, I feel that Developers would benefit from its use as well.