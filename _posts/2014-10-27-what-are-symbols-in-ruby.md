---
id: 182
title: What are symbols in Ruby?
date: 2014-10-27T19:27:12+00:00
author: dmarges
layout: post
guid: http://www.donmarges.io/?p=182
permalink: /what-are-symbols-in-ruby/
categories:
  - Ruby
tags:
  - ruby symbols
  - symbols ruby
  - what are symbols in ruby
---
One of the conceptual sticking points I had when learning Ruby was what symbols actually were.

If you&#8217;re new to Ruby and/or Rails, you might have come across something like the following:

[sourcecode language=&#8221;ruby&#8221;]
  
params[:user_id]
  
[/sourcecode]

Within a few minutes, you learn or you are told that it&#8217;s a symbol. When I was learning Ruby that didn&#8217;t mean a lot to me. It took me a bit to really grok them.

A symbol is just a unique way to represent something in code. Think of it like a constant except the value is simply the name of the constant. An example that really helped was the use of Cardinal directions. North, South, East and West don&#8217;t really have &#8220;values&#8221; in the traditional sense. They represent a direction.

For example, if you were coding a game where you control the movement of a player, you might have the following:

[sourcecode language=&#8221;ruby&#8221;]
  
def move_player(direction)
    
if direction == :north
      
player.y -= 1
    
elsif direction == :south
      
player.y += 1
    
elsif direction == :east
      
player.x += 1
    
else #west
      
player.x -= 1
    
end
  
end
  
[/sourcecode]

In the above code, we don&#8217;t care about what the value of North would be. We just care that the player is moving North. That highlights the main purpose of a symbol.

The most common usage of symbols are as keys in a hash. Like the example above, you just need a unique way of being able to identify something. 

Here&#8217;s another example:

[sourcecode language=&#8221;ruby&#8221;]
    
user = {
      
:first_name => &#8220;Don&#8221;
      
:last_name => &#8220;Marges&#8221;
      
:age => 29
    
}
  
[/sourcecode]

If you contrast this concept with objects in JavaScript, you see that symbols actually make a lot of sense. In JavaScript, the key could be a string which won&#8217;t necessarily be unique. Symbols in Ruby are guaranteed to be unique.

Now, you should be warned that you won&#8217;t really see an example like the one above in the wild. It is a common practice to use the shorthand of symbols as keys in Ruby. So the above example would look like the following:

[sourcecode language=&#8221;ruby&#8221;]
    
user = {
      
first_name: &#8220;Don&#8221;
      
last_name: &#8220;Marges&#8221;
      
age: 29
    
}
  
[/sourcecode]

I hope this little tutorial has helped you understand symbols a bit more clearly. I didn&#8217;t catch on to them as quickly as a should have when learning Ruby because I came from languages like PHP and JavaScript where there isn&#8217;t a concept of a Symbol, so I didn&#8217;t really have a frame of reference.