# be sure to add this idea of a web page as an interface

v2 REACT CORE PRINCIPLES, briefly
https://www.statista.com/statistics/1124699/worldwide-developer-survey-most-used-frameworks-web/
[SC]
Why React?
[VO]
So, before we talk about anything else, I want to start with a question.

Why React?

[SC]

[VO]
Because React is the most popular library for building user interfaces, it's a question that a lot of people have asked.  And, as you're learning it, I imagine that at some point, you'll find yourself asking that question, too.

[SC]
why, #$%\*&?!# React!
[VO]
And, at times, it might even morph into something like this!

Because, let's face it, some aspects of React can be challenging, particularly if you haven't been exposed to a lot of declarative javascript.

<!-- When that happens, I want you to try to remember the answers to that question that I'm going to give here. -->

[SC]
React === fun!
React === modern javascript
[VO]

But React is also super fun!  And I hope that as you gain confidence with React, you'll agree.

[SC]

[VO]
But I won't beat around the bush -- I know that the reason most of you are here isn't to have fun.  It's to get a job.  And, if you want to get a job in front-end web development, learning and being great at React is a huge advantage.  Most job postings you see will ask that you know React.

[SC]

[VO]
And many times, even if the job doesn't directly require 




And it's particularly fun if you embrace the challenge and remember that as you learn React, you're becoming a knowledgeable javascript developer, and you're joining the huge community of professional developers who have embraced modern, declarative javascript. Learning React is a really good way to get really good at javascript.

[SC]
Why React? 
React === jobs
[VO]
And that's one of the reasons that you see React listed as a prerequisite skill for so many jobs postings. I mean, there are a lot of React developer jobs because there's a lot of React code out there, but even for jobs that don't necessarily require React, you'll see React knowledge as a requirement.

[SC]
Why React?
knowledge of React === knowledge of javascript
[VO]
That's because knowledge of React is a great way to demonstrate a high level of proficiency with javascript. If you can build a React site and understand how it works, you'll probably be able to quickly pick up other libraries, advance your career, and be a benefit to your co-workers.

[SC]
Why React?
React === the biggest ecosystem
[VO]
And since React is currently the most popular front end javascript library, that also means that you'll have a lot of company on your journey with React.  There are countless tutorials and code-alongs out there and any questions that you may come up for you about how to do something in React will almost certainly be answered on on the internets.  


And, when you have  need for a project you're building, for instance drag and drop image upload functionality, you'll often find that smeone elese has already built it and you can pull it from npm, right in to your own project.


[SC]
Why React?

React is the dominant front end framework

[VO]
But all three of these great reasons to learn React are really just different ways to say that React is currently the dominant front end library.  Which is empirically true.  What I haven't talked about yet, are some of the reasons why so many developers have chosen React in the first place.

<!-- [SC]
(relatively) easy to learn
[VO]
First of all, it's relatively easy to learn, if you know javascript, html and css.  Now, that doesn't mean that it's a piece of cake, and, as I said in the last video, 'knowing' javascript and understanding the type of javascript that react leans on are not exactly the same thing.  But still, part of the reason that  -->



[SC]
COMPONENTS
[VO]
React is modular and encourages developers to think in terms of small, re-usable parts called Components that can be combined to make a larger parts of an interface, and can also be re-used in other projects. This idea of small, re-usable, interlocking pieces permeates the React ecosystem, and makes React projects flexible and easy to re-configure.

[SC]
GREAT DEVELOPER TOOLS
[VO]
ANother great reason to use React is that comes with great developer tools  .The React team has done a lot to streamline the setup process so you can get up and running relatively quickly. And they've also built a great set of tools for debugging. All this means that you can spend more time building and less time configuring your project.


[SC]
React is declarative
[VO]
And, along those same lines, React provides a set of tools for helping us manage our user interfaces declaratively.  
 We'll talk more about what this means soon, but for now just know that it basically means that React does a bunch of the tedious work behind the scenes, letting us focus on the behavior and look of our interface.

(JSX)

One of those declarative tools is a markup language called JSX, which is a markup language that let's us mix HTML and javascript to describe the interface that we want to build.  JSX really speeds up development time and also makes our code much more readable.  

[VIRTUAl DOM]

In React, we use JSX to create React elements, which are managed by React using something called the virtual DOM, which is another great benefit that React brings to the table.

The virtual DOM manages updates to our user interface so that it updates only the parts of our interface that have changed at any point in time.  If we have a dozen or a hundred buttons on an app, and one gets clicked, React doesn't waste precious resources re-rendering all of the buttons that haven't changed -- it only re-renders the one that has.
 



<!-- [SC]
ONE WAY DATA FLOW
[VO]
Now this next one might not make too much sense until we look at functional programming in the next videos, but....one key advantage that React offers is one way data flow.

In React, data flows through components in a single direction: parent or 'container' components can update their child components, but the children can't update their parent s.

And, though you may not immediately see how this would be a good thing....think about howif you have kids, or know anyone who does, I think you can easily see how, again, this makes our code less error-prone. -->



[SC]

[VO]
another line here about other libraries.

[SC]
FUNCTIONAL JAVASCRIPT
[VO]
Now, you're going to hear me use this word 'declarative' a lot in these videos.  React and the react ecosystem leans heavily on a declarative or functional style of javascript. 

For many, React is the gateway to functional programming, and the popularity of React and it's declarative approach to building UI has led to an equally explosive growth in the popularity of the functional programming paradigm.

So, to understand React and become a rockstar React developer, it really helps to understand the functional programming concepts on which is is based.

[SC]

[VO]
Inpm installn the next section of this course, we'll take a brief look at the big ideas of functional programming, and introduce it's key concepts: composing using pure functions, avoiding data mutation and carefully managing side effects.

In the next video, we'll start our journey into functional programming by talking a little bit about the key ingredient in functional programming which is, yeah, you guessed it -- functions. I'll see you there.

## end

is 'declarative' idea that I keep mentioning as I talk about React, and the key differences between declarative and imperative program flow. I'll see you there.

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
