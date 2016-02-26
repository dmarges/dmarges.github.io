---
id: 331
title: Symbols in ECMAScript 6
date: 2015-01-05T17:33:23+00:00
author: dmarges
layout: post
guid: http://www.donmarges.io/?p=331
permalink: /symbols-in-ecmascript-6/
categories:
  - JavaScript
tags:
  - ecmascript6
  - javascript symbols
---
I learned today that ECMAScript 6 will support a new primitive type called a symbol. This is inspired by symbols from Ruby which I wrote about in this <a href="http://www.donmarges.io/what-are-symbols-in-ruby/" title="What are symbols in Ruby?" target="_blank">post</a>.

For those of you who may not know or didn&#8217;t read the aforementioned link, a symbol is really just a way of uniquely identifying a property, etc. For example, let&#8217;s say we wanted to represent the cardinal directions. Now, you could just have an object with properties like so:

[sourcecode language=&#8221;javascript&#8221;]
  
var directions = {
     
north: &#8220;NORTH&#8221;,
     
south: &#8220;SOUTH&#8221;,
     
east: &#8220;EAST&#8221;,
     
west: &#8220;WEST&#8221;
  
};
  
[/sourcecode]

Obviously a trite and somewhat inaccurate example, but bare with me. So the problem with this is that we don&#8217;t really care what the value of any direction would be. We just need a way to represent the directions in a unique way. This is where using symbols for the directions would be handy.

Here&#8217;s what that would look like:

[sourcecode language=&#8221;javascript&#8221;]
  
var NORTH = Symbol(),
      
SOUTH = Symbol(),
      
EAST = Symbol(),
      
WEST = Symbol();
  
[/sourcecode]

Now we could just do something like:

[sourcecode language=&#8221;javascript&#8221;]
  
switch(direction) {
      
case: NORTH
          
updatePlayerX();
      
break;
  
}
  
[/sourcecode]

Symbols are a better way of handling situations like this since strings may not be unique and generally speaking, doing any kind of check on a string&#8217;s value is an antipattern and not recommended.