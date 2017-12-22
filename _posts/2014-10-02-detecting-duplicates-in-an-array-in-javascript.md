---
id: 133
title: Detecting Duplicates In An Array In JavaScript
date: 2014-10-02T17:13:12+00:00
author: dmarges
layout: post
guid: http://www.donmarges.io/?p=133
permalink: /detecting-duplicates-in-an-array-in-javascript/
categories:
  - JavaScript
tags:
  - javascript array
  - javascript array duplicates
  - javascript duplicate values in array
---
I came across this problem and thought I would share my solution.

I did a bit of Google-Fu and found a pretty good answer here:

<a href="http://stackoverflow.com/questions/840781/easiest-way-to-find-duplicate-values-in-a-javascript-array" target="_new">Stack Overflow post</a>.

However, I just wanted to know if any duplicates EXISTED. I didn&#8217;t care about what they were, so I adapted the solution below:

    
        var checkForDuplicateValues = function(theArray) {
            var placeHolder = theArray.length,
                comparePlaceHolder;
    
            while(comparePlaceHolder=--placeHolder) {
                while(comparePlaceHolder--) {
                    if(!(theArray[placeHolder]!== theArray[comparePlaceHolder])) {
                        return true;
                    }
                }
            }
    
            return false;
        };
    

I hope this helps! As always leave a comment to provide constructive feedback!