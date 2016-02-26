---
id: 186
title: 'dyld: Symbol not found: _mysql_get_client_info'
date: 2014-10-29T18:04:41+00:00
author: dmarges
layout: post
guid: http://www.donmarges.io/?p=186
permalink: /dyld-symbol-not-found-_mysql_get_client_info/
categories:
  - Ruby
  - Ruby on Rails
tags:
  - mysql
  - ruby on rails
  - yosemite
---
I came across this issue when I generated a new rails app specifying MySQL as the database to use. I am running Mac OS X Yosemite, Ruby 2.1 and Rails 4.

Here&#8217;s what I did, I uninstalled the mysql2 gem, then used Brew to install MySQL, then reinstalled the mysql2 gem. Here&#8217;s the commands for easy copy and paste:

<pre>gem uninstall mysql2
brew install mysql
gem install mysql2
</pre>

After running those commands, I was able to use MySQL in my Rails projects with no issue.