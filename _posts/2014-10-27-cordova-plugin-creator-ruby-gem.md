---
id: 180
title: Cordova Plugin Creator Ruby Gem
date: 2014-10-27T13:41:07+00:00
author: dmarges
layout: post
guid: http://www.donmarges.io/?p=180
permalink: /cordova-plugin-creator-ruby-gem/
categories:
  - Cordova
tags:
  - cordova plugin creator
  - cordova plugins
  - phonegap plugin creator
  - phonegap plugins
  - ruby
  - rubygems
---
Hey everyone!

I just wanted to announce the release of a Ruby Gem I created!

It was born out of some work I&#8217;ve been doing recently with PhoneGap. Essentially, I was creating some plugins that extended the functionality of PhoneGap. For those of you who don&#8217;t know, PhoneGap is a tool which Adobe owns that allows you to create Native Mobile Applications using Web Technologies. It&#8217;s basically like you&#8217;re coding for the browser, except you can release your app in the App Stores. It does this by creating a WebView and running your code within that context.

PhoneGap gives you the ability to write plugins which are native code that you write JavaScript interfaces for. So in your Web code, you can call the JavaScript functions which call into the native code for your plugin.

The drawback is that there is a very specific structure that your plugins must have in terms of configurations and directory structure and it was a pain to have to set it up manually as I would miss a setting and it would prevent my plugin from working.

Using my trusty knowledge of Ruby and creating gems, I created a gem which handled all of the setup for a plugin for you so you can just get to work coding the plugin itself.

Since I&#8217;m terrible at naming things, it&#8217;s named Cordova Plugin Creator and you can find it on Rubygems <a href="http://rubygems.org/gems/cordovaplugincreator" title="Cordova Plugin Creator" target="_blank">here</a>.

<a href="https://github.com/dmarges/cordovaplugincreator" title="Cordova Plugin Creator" target="_blank">Here is the repo for it as well.</a>

Any feedback is appreciated and welcome.