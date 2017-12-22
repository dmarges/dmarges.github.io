---
id: 119
title: '&#8220;You have to install development tools first.&#8221; Issue with installing Nomad CLI'
date: 2014-09-25T15:02:47+00:00
author: dmarges
layout: post
guid: http://www.donmarges.io/?p=119
permalink: /you-have-to-install-development-tools-first-issue-with-installing-nomad-cli/
categories:
  - Workflow
tags:
  - app business podcast
  - ios app build automation
  - nomad-cli
---
I found out about an awesome toolset for automating all of the minutiae of signing and deploying iOS applications called [Nomad CLI](http://nomad-cli.com/ "iOS App Build Automation"). I heard about it from the [App Business Podcast, show number 92](http://appbusinesspodcast.com/mobile-app-development/automate-ios-workflows-with-nomad-cli/). I did have an issue getting it installed but I did stumble upon the answer which I wanted to share here.

If you get the error &#8220;You have to install development tools first.&#8221; after running &#8220;gem install nomad-cli&#8221;, simply run &#8220;sudo gcc&#8221;. If you see that you have to agree to Apple&#8217;s terms and license, then you have the same problem I did. All you have to do from there is tap &#8220;space&#8221; until you reach the end of the document and then type &#8220;agree&#8221;. After that, you will be taken to the command line where you can run &#8220;gem install nomad-cli&#8221; and you&#8217;re off to the races!

I will update this post if I have any other issues. Otherwise, feel free to leave comments about any issues you have as well.