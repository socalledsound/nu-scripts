## w1 - v4 javascripting the DOM 5 mins

[SC]
hi there
[VO]

Ok, so, we're going to build this little page you see here using vanilla javascript.

And the reason we're going to do this is to make sure that you have a good handle on the javascript concepts that you need in order to be an effective React developer, before you start learning React, and also I can talk a little but about the benefits that React brings us.

[SC]
making index.js
[VO]
But, first things first, let's make this page with javascript.

Make new file in vs code, called index.js.
[SC]
linking to index.js in index.html
[VO]
Now, let's link to that file from our index.html page. Inside the body of your html page, after the root div, add a script tag. You can use emmet for this too, just type script, and then select script: src. Emmet should drop your cursor down right where you want it, and you can just type out index.js, like I'm doing here, and then we should be ready to go.

An important thing to know about the DOM, by the way, is that if we want to access an element from our html in our code, we need to link to our script AFTER that element on the html page.

This won't be particularly important for working with React, because we're going to get much fancier with linking to our javaswcript files, but, still, it's a good thing to know, in case you're ever reacting without react again in the future.
[SC]
index.js
const root = document.getElementById('root')
[VO]
Now, in our index.js, first, let's get a reference to our DOM node. We'llmake a constant variable called root and set that equal to document.getElementById('root').

Here, we're using a method of the Document API, and passing in the ID that we're looking for. If the browser finds an element with that ID, it will assign it to the variable root.

[SC]
[VO]

We can also make DOM nodes with the Document API.

Let's make another constant variable -- and by the way, you should always always always default to using constants in your javascript!

EXPLAIN WHY HERE

So anyway... let's make that constant now, and let's call it newDiv. And we'll set it equal to the return value of another DOM method, document.createElement. So we'll say

const newDiv = document.createElement() and pass in div in quotes, just like this, and now we have a new div.

[SC]
div.innerText = '👋 hi there'
[VO]
And now that we have an HTML element, we have a bunch more methods that we can use.

You can set the innerText property of our new div to '👋 hi there' (you can copy the emoji hand from the lesson page or just do a google search), or any other message that you prefer.

[SC]
div.style.color = 'green'
div.style.fontSize = '10rem'
div.style.marginTop = '20vh'

[VO]
And we can style that element, like this. And - the way that we're stling this element, in javascript, is really similar to the css in javascript way of styling components in React. Notice hiow the css properties are all in camel case and they're all properties of a style object? You'll see this in React, and hopefully the reason for that syntax will make more sense, now that you've done it in vanilla JS.

[SC]
open up web page
[VO]
But, we have a little problem -- if you open up your web browser now.....still nothing.
That's because we haven't added this node to the DOM yet.

[SC]
[VO]
Let's add it now. We'll use that constant called root, which, since it is assigned to a DOM node, has a method called appendChild(). We can pass our newDiv into that function and voila - if you check your web browser, and you should see the text.

[SC]
[VO]
As I've already said -- on a very basic level, this is how React works, by utilizing the DOM to inject various types of content into a root div.

But React improves our DOM manipulating experience in several really important ways.

[SC]
COMPONENTS
[VO]

And the first most important thing that React does is provide us with a tremendously useful model
for building websites -- in other words, it encourages, and in some cases enforces good programming habits.

It encourages us to write good, resuable code, by breaking our user interfaces into small resuable chunks.

And those chunks are the basic building block of every javascript application: functions.

Having a solid understanding of functions, including arrow functions, pure functions and also higher order functions is absolutely essential to being a great javascript developer and are key to understanding React and Redux, because both React and Redux are built upon the 'functional' style of programming in javascript.

So, as we continue along this review, in the next video, we'll take a deep dive into functions.

[SC]

[VO]

But I want to leave you with a puzzling -- and hopefully entertaining -- little challenge.

What's the return value of this function?

Think about it for a minute. I'll be back in the next video with the answer.

Untangling that answer will be a great way to get started with a new understanding of functions in javascript.

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

[SC]

    (() =>
        (() => 0
        )()
    )()

[VO]
For instance, take a look at this function declaration. What's the return value and why?

I'll see you in the next video with the answer to that question, and a quick review of functions and why thoroughly mastering them is so important to becoming a great React developer!
