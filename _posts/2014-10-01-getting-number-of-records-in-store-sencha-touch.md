---
id: 130
title: 'Getting Number Of Records In Store &#8211; Sencha Touch'
date: 2014-10-01T21:58:13+00:00
author: dmarges
layout: post
guid: http://www.donmarges.io/?p=130
permalink: /getting-number-of-records-in-store-sencha-touch/
categories:
  - Sencha Touch
tags:
  - sencha touch
  - sencha touch data store
  - sencha touch store
---
Hey!

So I just got tricked by this and wanted to share while it was still fresh in my head.

I wanted to take a certain action based on how many records are in a store. To get the number of records, I tried to use store.getTotalCount(). This is incorrect and I should have read more carefully. This gets the totalCount property which is actually set by the server. To get the actual records in the store you have to use store.getAllCount(). This produced the results I wanted.

Leave a comment if you have any suggestions or feedback!