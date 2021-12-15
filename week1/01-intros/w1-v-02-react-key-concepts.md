v2 REACT CORE PRINCIPLES, briefly

[SC]
Why React?
[VO]
So, before we talk about anything else, I want to start with this question.

Why React?

[SC]
React === challenging (and fun!)
[VO]

It's a question that lots of people have asked, and it's a question that I can almost guarantee you will ask, if you haven't already. And as this course gets harder, I want you to try to remember the answers to that question I'm going to give here. Because this course will be challenging! React is challenging!

[SC]
React === modern javascript
[VO]
But React is also super fun, and it's particularly fun if you embrace the challenge and remember that as you learn React, you're becoming a knowledgeable javascript developer, and you're joining the huge community of professional developers who have embraced modern, declarative javascript. Learning React is the best way to get good at javascript.

[SC]
React === the biggest ecosystem
[VO]
Because for better or worse -- mostly for better, I'd argue -- React is currently the most popular front end javascript library. There are a lot of good ones, and I recommend learning several of them, but React is absolutely the best place to start simply because so many people use it. That means that there are countless tutorials and code-alongs out there, and it means that you can lean on the work of other developers.

[SC]
React === jobs
[VO]
And there's also a LOT of jobs postings out there that require React knowledge. And part of the reason for that is, of course, because React is great for building web sites. You've probably heard of Facebook (or, I guess, Meta?). They invented and then open-sourced React and it's in heavy use not just on Facebook but on all of its affiliated sites.

[SC]
knowledge of React === knowledge of javascript
[VO]
But another reason that you so commonly see knowledge of React as a pre-requisite for jobs is that if you are able to write great React code, it demonstrates your knowledge of javascript more broadly. Because at the end of the day, React is mostly just javascript. So if you can build a React site and understand how it works, you'll probably be able to quickly pick up other libraries, advance your career, and be a benefit to your co-workers.

[SC]

Why did React become so popular?

[VO]
So all of this begs another question. How and why did React become the standard for front end javascript libraries? Obviously, being born at facebook helped. But why, after it's introduction in 2013, did React so quickly take over the web?

[SC]
OPEN SOURCE
[VO]

[SC]
GREAT DEVELOPER TOOLS
[VO]

[SC]
ONE WAY DATA FLOW
[VO]

[SC]
COMPONENTS
[VO]

[SC]
DECLARATIVE APPROACH TO USER INTERFACE RENDERING
[VO]

[SC]
FUNCTIONAL JAVASCRIPT
[VO]

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
