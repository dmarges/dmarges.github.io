---
id: 56
title: Sencha Touch 2 Ext.getStore() Loading Data Multiple Times
date: 2014-08-06T20:05:16+00:00
author: dmarges
layout: post
guid: http://localhost:8080/donmarges.io/?p=56
permalink: /sencha-touch-2-ext-getstore-loading-data-multiple-times/
categories:
  - Sencha Touch
---
For those of you in the know, you can specify the autoLoad property of a Sencha Touch 2 Store to true, false or an object. What this means is that when you create an instance of this Store, it will automatically call the load method and bring in your data. However, this seemingly simple feature can lead to some tricky bugs that can be hard to track down or cause your app to not work the way you want it to.

Here’s something that I found when going through the Sencha Touch 2 (2.3.0 to be more specific) source when debugging a particular issue. So there’s a method that you can use called Ext.getStore(). In the documentation, it simply reads that it will return an Ext.data.Store object. No fuss no muss…or is there!?! This method is actually a shortcut to Ext.data.StoreManager.lookup()! Now, you may be thinking “great work Sherlock! It says that right in the docs!”. To this I say, dig deeper…

This method will actually create a new Store if the supplied ID (passed as a string) turns up nothing in the way of an existing store. So where does this come into play? Well, don’t get me wrong, Sencha Touch and Ext are great libraries. I came across this as merely a weird situation where it could be a combination of inexperience with Sencha Touch 2 along with just a weird edge case. I found that I ended up with multiple “loadings” of a single store on several occasions due to the handling (or mishandling) of the autoLoad feature combined with Ext.getStore().

My alternative/workaround was to use Ext.data.StoreManager.get(). In fact, if you look closely at the Ext.data.StoreManager.lookup method, you’ll find that when it is passed a string, it will just return the results of calling Ext.data.StoreManager.get!

Now, I want to reiterate that this was just something I found to work in the somewhat verbose situations and edge cases I found myself in on what I would called a complex project. I would be welcome to feedback or war stories regarding anything you have come across with this.