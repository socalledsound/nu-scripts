## w1 - v4 r-w-r basic dom + functional programming 5 mins

[SC]
FUNCTIONAL JAVASCRIPT
[VO]

What is functional javascript?

This means that we can also

[SC]
functions should do one thing
functions should have a return value
functions should avoid side effects
[VO]

[SC]

const newDiv = document.createElement('div')
newDiv.innerText = '👋 hi there'
newDiv.style.color = 'green'
newDiv.style.fontSize = '10rem'
newDiv.style.marginTop = '20vh'

[VO]

So if the basic organizing block of functional programming is functions, and React is functional programming, guess what the basic organizing block of React is?

That's right - functions.

So to make this code more React-like, let's start by taking the code we wrote earlier and turning it into a function.

# END video 4, the rest is older drafts/fragments

[SC]
pure functions
higher order functions
immutability + side effects
[VO]
If you've heard that React is challenging, or if you tried to learn it on your own before and couldn't quite get the hang of it, there's a very good chance that not understanding some of the things on the screen now is what tripped you up.

In the next few videos, we're going to go over each of these things, to make sure that you're solid with the basics of functional programming before you try to learn React.

It'll be a pure function, that returns a div, and it will be an arrow function.

So to make this function a lot more React-like, I'll make a constant named Message, like this, and assign it to an arrow function, like this.

REWRITE THIS

<!-- Now, maybe you've heard of arrow functions before, maybe you even use them all the time; in that case, the next video will mostly be review for you.  But, it's a review worth doing, because using arrow functions them effectively is so important to writing good React code, let's take a minute to do that review.  In the next videoI'll see you there. -->

is provide us with a tremendously useful model
for building websites -- in other words, it encourages, and in some cases enforces good programming habits.

It encourages us to write good, resuable code, by breaking our user interfaces into small, resuable chunks.

In React, those chunks are called components, and the best and easiest way to create them is by simply by writing a function that returns a DOM node.

[SC]
Hi Chris message

[VO]
Let's take a look at what we've written so far, to help us think about why components are such a good idea.

So far, I've got a simple message. Each time I refresh the browser, it says, '👋 welcome, Chris!!'.

[SC]
const div2 = document.createElement('div')
div2.innerText = '👋 welcome, Sam!!'
div2.style.color = 'green'
div2.style.fontSize = '10rem'
div2.style.marginTop = '20vh'
[VO]

But what if I want to send a welcome message to a different person? I'll have to write basically the same five lines of code, again.

[SC]
function WelcomeMessage(message){
const div = document.createElement('div')
div.innerText = message
div.style.color = 'green'
div.style.fontSize = '10rem'
div.style.marginTop = '20vh'
return div
}

[VO]

Or....I could be a little bit smart about it and....write a function, that returns a div!

So I'll just write a function named message, and pass in a message to display, and then copy all of my code from before into that function, like this.

And this looks a lot like a React component actually, except for a few key things. And the first of these is that, generally we name our React Components with capital letters, and we usually use arrow functions to write them.

[SC]
In the next video, we'll

So I'm just going to go ahead and convert this into something a bit more React like.

WE'll review arrow functions.

I'm going to write this as a named arrow

And, in the next video, we're going to do something a lot like

[SC]

const WelcomeMessage = (message) => {
const div = document.createElement('div')
div.innerText = `👋 hi there, ${name}`
div.style.color = 'green'
div.style.fontSize = '10rem'
div.style.marginTop = '20vh'
return div
}

[VO]
So, for instance, on in our current page, if we wanted to turn our welcome message into something like a component, we can do that, by simply writing a function that takes in a message and outputs a div that contains that message, like this.

[SC]

[VO]
If we want to make

Having a solid understanding of functions, including arrow functions, pure functions and also higher order functions is absolutely essential to being a next-level web developer and are super important to understanding React and Redux, because both React and Redux are built upon the 'functional' style of programming in javascript.

So, as we continue along this review, in the next video, we'll focus on functions.

[SC]

[VO]

But I want to leave you with a puzzling -- and hopefully entertaining -- little challenge.

What's the return value of this function?

Think about it for a minute. I'll be back in the next video with the answer.

Untangling that answer will be, I think, a great way to get started with a new understanding of some of the fun we can have with functions in javascript.

[SC]
[VO]

[SC]
[VO]

[SC]
[VO]

[SC]
[VO]

First, it very famously provides us with a 'virtual' DOM.

But what does this actually mean?

Well, let's say we have not just our single DOM node but a hundred or a hundred thousand different DOM nodes, all being injected into that root div.

In vanilla javascript, every single time

This is a simple example but I think you can see or imagine how we could use these techniques to build just about anything.

So...if we can do all of this without React, why should we use React? I mean, other than the fact that everyone else uses it, and most web development jobs are going to require knowledge of React...?

So let's review the big ideas of React.

The first one is:

And the first reason is this DOM that we've been using.

Right now we're only making one DOM node, but let's say we have a hundred or a hundred thousand DOM nodes

There are lots of good reasons why we should use React, but the first best reason is in the
And it works fine, honestly, if your website is small and doesn't have very much interaction and you're not overly concerned with either developer experience or performance.

But let's review those core principles of React, now that we've seen React without React.

And remember the first one?

'React is a functional (declarative) component-based UI layer for single page applications.'

[SC]

[VO]
Now let's look at our code. It might be a stretch, but, sure we have a UI layer here. But do you see any functions?

Nope.

Now, why might we want to add functions to this code? Why does React emphasize the use of functions? Go ahead and pause the video here and think about it, if you don't have an immediate answer. I'll wait.

[SC]
login here then show the message
[VO]

Ok. So the best way to answer this question is to think about how this code might change as we develop this app. What if we add a login page, and then we want to show a welcome message that is tailored to that user, so maybe we want to say something like this?

[SC]
const WelcomeMessage = (name) => {
const div = document.createElement('div')
div.innerText = `👋 hi there, ${name}`
div.style.color = 'green'
div.style.fontSize = '10rem'
div.style.marginTop = '20vh'
return div
}
[VO]
By using a function, we can

in the context. Of an actual web application. One thing that we often want to do in a web application is, to log a user in and dynamically display content that is for their eyes only.

When you go to get your gmail, you don't want to see someone else's email, and you definitely don't want someone else to see YOUR email.

With a functional

[SC]

[VO]

Let's rewrite this code to use functions.

[SC]
[VO]
[SC]
[VO]
[SC]
[VO]
[SC]
[VO]
[SC]
[VO]
[SC]
[VO]
Once we get started with React, you'll see that this is, more or less exactly how the index.html of a React app looks; everything else happens in javascript. In React, we use the virtual DOM that we've been talking about to update and insert DOM nodes into our web page.

[SC]
making the new file index.js
[VO]
But, since we're building an app without React here, we're going to use good old fashioned DOM manipulation, which we'll do in the index.js file that we just linked to.

Click on the new file icon again and make a new file called index.js

[SC]
const root = document.getElementById('root')
[VO]

At the top, first make a constant called root and set it equal to document.getElementById('root')

[SC]

[VO]
Next, make a constant called div and set it equal to document.createElement('div')

[SC]

[VO]
You can set the innerText property of our new div to '👋 hi there' (you can copy the emoji hand from the lesson page or just do a google search), or any other message that you prefer.
Let's also go ahead and add some styling.

[SC]

[VO]

One thing to notice -- and this will also be very important when you're working with react -- when we do DOM manipulation in javascript, we use camelCase. You'll see this again in a minute when we come back and write some css styling in javascript.

[SC]

[VO]
If you open up this page with live server, you should see your message in the browser, with the styles that you just applied.

[SC]

[VO]
And if you open up the dev tools to inspect the dom, you should

[SC]

[VO]
What we've just done is to manipulate the DOM with javascript. This is the sort of workflow that React tries to improve upon, by giving us a virtual DOM and JSX and a whole host of other tools that improve the developer experience and make our websites function more efficiently. But, at its core, this is basically what a React app is, using javascript to create html elements.

In a few minutes, when we build our first React app, the similarities should be obvious!

But before we do that, let's review one more javascript fundamental: functions. Functions are the key and the core to being a great javascript developer, and a great React developer and they are a surprisingly deep topic in javascript!

(or maybe no example just yet?)

# maybe instead of the zero thing, write a function that's more useful and has a default parameter, like:

[SC]
const double = (input) => input + input
const justAddMagic = (name = 'chris', magic) => magic(name)
console.log(justAddMagic(double))

[VO]
And as a prelude to our work with functions, I want you to take a look at this function declaration, which is called a 'higher order function', and is written using arrow functions.

What gets logged to the console here and why? How can you find out? And, how would you apply a different type of magic?

But don't worry if you're not sure, or if this is all just plain confusing.

That feeling of confusion is your brain, waking up to the possibilities of functional javascript!

It's one of the hardest things to master in javascript, but also one of the most important.

I'll see you in the next video with the answer to that question, and a quick review of functions, and by the end of it, hopefully it will not only make perfect sense, but you will have the confidence to write this kind of code yourself.
