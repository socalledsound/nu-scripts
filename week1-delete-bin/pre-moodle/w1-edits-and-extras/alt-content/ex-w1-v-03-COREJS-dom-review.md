## OLD

Let's load on now

So, the first sexy but confusing concept in React is this idea of the virtual DOM. And I want to tell you- you don't have to thoroughly understand the virtual DOM in order to use it. That's actually the main idea behind the 'declarative' approach to writing code, which was another big idea that I mentioned in the first video.

What we mean when we say that React provides us with a declarative interface for handling our DOM manipulation is that you don't have to know how the virtual dom works to use it effectively -- in fact, that virtual DOM mostly just stays out of our way and does what it does without us ever doing anything at all.

[SC]
[VO]

But why do we need or want a virtual DOM in the first place?

And the truth is, we don't need a virtual DOM -- there are plenty of javascript frameworks, like Angular or Svelte, that use a different approach.

But, generally,

<!-- But one thing you absolutely should be familiar with before you write React applications is...what this new approach of useing a virtual DOM is replacing. In other words, manipulating the DOM in javascript. -->

[SC]
[VO]

You learned about the Document Object Model in the bootstrap course (did they?) -- it's, basically, a abstract representation of a web page which you can access and manipulate in javascript.

[SC]
inspect this page using the developer tools
[VO]

The DOM is also exactly what you see when you open a web page and inspect it using the elements tab of chrome's developer tools.

[SC]
login panel
[VO]
When we build web applications using React, or any other javascript framework, the javascript code that we write uses the DOM to update our web page. After a user clicks a login button, we need to submit that user data and then

Frameworks like React, or Vue, use a virtual DOM to facilitate these transitions; others, like
Angular or Svelte, do not.

##

##

And perhaps the most important thing I said is that React encourages us to create re-usable components
mentioned a few of the key advantages that React gives us as we create user interfaces. One of these that you'll hear again and again is, the 'virtual dom'.

But what does this mean, actually?

To answer this, we should probably first be sure that we remember what the DOM -- the Document Object Model -- is.

Now, it's not crucial that you understand everything about the virtual DOM and how it works before you get started with React -- but I do want to take a minute to review what the DOM is.

[SC]

[VO]

[SC]

[VO]

[SC]

[VO]

[SC]

[VO]
