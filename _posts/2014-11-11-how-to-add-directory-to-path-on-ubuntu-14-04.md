---
id: 198
title: How To Add Directory To Path On Ubuntu 14.04
date: 2014-11-11T03:46:31+00:00
author: dmarges
layout: post
guid: http://www.donmarges.io/?p=198
permalink: /how-to-add-directory-to-path-on-ubuntu-14-04/
categories:
  - Ubuntu
tags:
  - directory to PATH
  - ubuntu
  - ubuntu path
---
For the past several years, I have been running a Mac as my primary development machine. Recently, I&#8217;ve been doing some development on a Ubuntu virtual machine. As per usual with my bouncing back and forth between things, I forgot how to add a directory to my PATH in a Linux Distro. On my Mac, I&#8217;m used to having a .bash_login, but I didn&#8217;t have that option in this case. 

Here&#8217;s what I did to add a directory to my PATH in Ubuntu 14.04

<pre>sudo vi /etc/environment
</pre>

Just add your directory to the end of the PATH value, restart your machine and you&#8217;re good to go!