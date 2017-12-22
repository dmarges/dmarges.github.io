---
id: 398
title: zlib is missing necessary for building libxml2 ubuntu
date: 2015-08-17T23:49:18+00:00
author: dmarges
layout: post
guid: http://www.donmarges.io/?p=398
permalink: /zlib-is-missing-necessary-for-building-libxml2-ubuntu/
categories:
  - Ruby
  - Ruby on Rails
tags:
  - nokogiri
  - rails
  - rails install ubuntu
  - ruby
---
Hey!

I&#8217;ve been working on some Rails stuff on a fresh Ubuntu install and came across this issue when trying to install Rails. I get the message &#8220;zlib is missing necessary for building libxml2&#8221;. Here&#8217;s how to fix it:

In the terminal run the following command:

&#8220;sudo apt-get install zlib1g-dev&#8221;

After that it installed properly and I was able to continue on my merry way!