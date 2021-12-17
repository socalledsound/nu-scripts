v2 REACT CORE PRINCIPLES, briefly

[SC]
Why React?
[VO]
So, before we talk about anything else, I want to start with this question.

Why React?

[SC]

[VO]

It's a question that lots of people have asked, and it's a question that I can almost guarantee you will ask, if you haven't already.

[SC]
why, #$%\*&?!# React!
[VO]
And as this course goes along, at times, it might even morph into something like this!

When that happens, I want you to try to remember the answers to that question I'm going to give here.

[SC]
Why React?
React === modern javascript
[VO]
React can be challenging for javascript beginners.
But React is also super fun!
And it's particularly fun if you embrace the challenge and remember that as you learn React, you're becoming a knowledgeable javascript developer, and you're joining the huge community of professional developers who have embraced modern, declarative javascript. Learning React is the best way to get good at javascript.

[SC]
React === the biggest ecosystem
[VO]
Because for better or worse -- mostly for better, I'd argue -- React is currently the most popular front end javascript library. There are a lot of good ones, and I recommend learning several of them, but React is absolutely the best place to start simply because so many people use it. That means that there are countless tutorials and code-alongs out there, many useful third-party tools and questions you may have about how to do something in React will almost certainly find answers on the internets.

[SC]
React === jobs
[VO]
Another great reason to learn and use React is that there are typically a LOT of jobs postings out there that require React knowledge. And part of the reason for that is, of course, because React is great for building web sites. You've probably heard of Facebook (or, I guess, Meta?). They invented and then open-sourced React and it's in heavy use not just on Facebook but on all of its affiliated sites.

[SC]
knowledge of React === knowledge of javascript
[VO]
But another reason that you so commonly see knowledge of React as a pre-requisite for jobs is that if you are able to write great React code, it demonstrates your knowledge of javascript more broadly. Because at the end of the day, React is mostly just javascript. So if you can build a React site and understand how it works, you'll probably be able to quickly pick up other libraries, advance your career, and be a benefit to your co-workers.

[SC]
Why React?

So why did React become so popular?

[VO]
So, if one of the great reasons to use React is that everybody uses react -- the next obvious question is, WHY does everybody use React? How and why did React become the standard for front end javascript libraries? Obviously, being born at facebook helped. But why, after it's introduction in 2013, did React so quickly take over the web?

[SC]
(relatively) easy to learn
[VO]

[SC]
GREAT DEVELOPER TOOLS
[VO]
Alongside that, React comes with great developer tools. As we'll soon see, React ships with a great set of developer tools, that make it easy to get up and running and stay up and running, and let you focus more on your development and less on troubleshooting your build tools.

[SC]
DECLARATIVE USER INTERFACE (JSX)
[VO]
And React also speeds up development time by encouraging declarative user interface development, using an HTML-like syntax right in javascript. We'll talk more about what this means in the next video, but essentially, this means that we tell React what we kind of interface we want and it handles the details for us. This makes our code more predictable and less error-prone.

[SC]
COMPONENTS
[VO]
React is modular and encourages developers to think in terms of small, re-usable parts that can be combined to make a larger part, and also re-used to make completely different interfaces.

[SC]
ONE WAY DATA FLOW
[VO]
In React, data flows through components in a single direction: parent or 'container' components can update their child components, but the children can't update their parents. And if you have kids, or know anyone who does, I think you can easily see how, again, this makes our code less error-prone.
[SC]
THE VIRTUAL DOM
[VO]
And finally, React uses a virtual DOM, which manages updates to our user interface so that it updates only the parts of our interface that have changed, and it does all of this declaratively, so we don't really have to think about it. This speeds up development and, in many cases also makes the rendering of our app much more performant.
[SC]
FUNCTIONAL JAVASCRIPT
[VO]
In all of this, React and the react ecosystem leans heavily on functional, or declarative javascript. For many, React is the gateway to functional programming, and the popularity of React and it's declarative approach to building UI has led to an equally explosive growth in the popularity of the functional programming paradigm.

To understand React and become a rockstar React developer, it really helps to understand the functional programming concepts on which is is based.

So in the next section of this course, we'll take a brief look at the big ideas of functional programming, and introduce it's key concepts: composing using pure functions, avoiding data mutation and carefully managing side effects.

In the next video, we'll start our journey into functional programming by talking a little bit about this 'declarative' idea that I keep mentioning as I talk about React, and the key differences between declarative and imperative program flow. I'll see you there.

## end

I've been teaching React for several years now and

At the time of this video, React is the number 1 front-end library, by a mile.

Why?

[SC]
LIST OF REACT BENEFITS
BIGGEST ECOSYSTEM - everybody uses React, so we get all of that shared knowledge
GREAT DEVELOPER TOOLS - create-react-app, debugging tools
JSX
VIRTUAL DOM
COMPONENTS
FUNCTIONAL JAVASCRIPT
[VO]

Discuss the reasons

[SC]

[VO]

functional (declarative) component-based UI layer for single page applications.

1. component : a component is a function that returns a DOM node.
2. JSX : jsx is a markup language that lets us write html in javascript
3. the virtual dom :
4. keep your view seperate from your application logic/data
   [SC]

[SC]
JSX. - helps us create new elements

[VO]
JSX is a huge benefit of using React.

[SC]
const div = document.createElement('div')
div.innerText = '👋 hi there'
div.className = 'hello'

becomes

<div className='hello'>👋 hi there</div>

[VO]
We'll spend a lot more time learning about JSX
[SC]
[VO]
VIRTUAL DOM - we'll talk about this more in a minute

## move this to the end of video 2

[SC]
[VO]

Welcome back.

In the last video I gave a very high level look at what React is. I used a lot of big and somewhat confusing ideas, like 'declarative', 'composing with functions' and 'the virtual dom'.

These are important exciting ideas, but if you're relatively new to javascript, they can be a little confusing, and maybe even end up making React a little more confusing than it needs to be.

So in these next few videos, I'm going to try to simplify these terms and ideas a little and I'm going to show you how to make a basic javascript web page that's a lot like a react app, but -- without React! I call it 'react without react'.

This will also give us a chance to make sure that we understand the important javascript concepts that we need to know in order to be great React developers, things like arrow functions, declarative array methods, template literals and object destructuring.

By showing you how to make something a little bit like React without using any of the React magic, I hope to show you that React magic mostly isn't magic at all, it's basically just javascript.

[SC]
the virtual DOM
[VO]
Remember how I said that one of the key advantages that React gives us is a 'virtual DOM'? We should probably try to understand what the heck that means, right?

But first, let's make sure we understand the non-virtual DOM.
