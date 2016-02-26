---
id: 94
title: 'Recursive process.nextTick detected &#8211; Issue with Grunt and Watch'
date: 2014-09-02T13:26:48+00:00
author: dmarges
layout: post
guid: http://www.donmarges.io/?p=94
permalink: /recursive-process-nexttick-detected-issue-with-grunt-and-watch/
categories:
  - Workflow
tags:
  - grunt
  - jasmine
  - task runner
  - watch
---
Recently came up against this issue when using Watch with Grunt. I&#8217;m running Grunt 0.4.5 and Watch 0.6.1. When I would run &#8220;grunt watch&#8221; I would get the following error: &#8220;Recursive process.nextTick detected.&#8221; The issue was that I had registered a &#8220;watch&#8221; task as well as loaded the &#8220;watch&#8221; task. For example:

<pre>module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            files: ['app/**/*.js'],
            tasks: ['jasmine'],
            options: {
                spawn: false
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('watch', ['watch']);
</pre>

To get rid of the issue, just remove the registerTask call like so:

<pre>module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            files: ['app/**/*.js'],
            tasks: ['jasmine'],
            options: {
                spawn: false
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
</pre>

It was a careless mistake on my part as you are able to create your own tasks in Grunt which in turn perform other tasks.