## w1 - v5 functions

[SC]
FUNCTIONAL JAVASCRIPT
[VO]

And the first most important thing that React does isn't the virtual DOM, or JSX or Hooks or any of the fancy and mysterious things you've probably heard about.

The first best most important thing that React does, is it encourages us to write good javascript. It encourages us to write bug-free, modular, reusable code. And how does it do this? Primarily, by making sure that we follow good functional programming principles. That's what it means when we say that

[SC]
functions should do one thing
functions should have a return value
functions should avoid side effects
[VO]
But what is 'functional programming'? I mean, other than a buzz word?

In functional programming

This means that we can also

[SC]
pure functions
higher order functions
immutability + side effects
[VO]
If you've heard that React is challenging, or if you tried to learn it on your own before and couldn't quite get the hang of it, there's a very good chance that not understanding some of the things on the screen now is what tripped you up.

In the next few videos, we're going to go over each of these things, to make sure that you're solid with the basics of functional programming before you try to learn React.

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

That way, we'll be able to re-use this code if, say, we want to change the message.

So, can you do that? What we want is an arrow function (remember those?) which will take in a message and return a div with it's innerText property set to that message.

I'll be back in the next video with the answer and some more thoughts about functions.

# END video 4, the rest is older drafts/fragments

[SC]

const newDiv = document.createElement('div')
newDiv.innerText = '👋 hi there'
newDiv.style.color = 'green'
newDiv.style.fontSize = '10rem'
newDiv.style.marginTop = '20vh'

[VO]

At the end of the last video, I left you with a challenge, which was to turn this code into a function.

I'm going to do that now, and I'm going to write it so that it looks a lot like a React Component, which is what we call functions like this in React.

[SC]

const WelcomeMessage = (message) => {
const div = document.createElement('div')
div.innerText = message
div.style.color = 'green'
div.style.fontSize = '10rem'
div.style.marginTop = '20vh'
return div
}

[VO]
So I'll start by creating a constant that starts with a capital letter, because in React, by convention, we use capital letters to name functions like this, that return a DOM node.

I'm going to assign an arrow function to this variable, and it will take in a message as its input parameter.

And then I'll just copy everything from before into the body of the function, and be sure to return the div
from the function.

And I'll replace the message with the message input parameter.

And that's it!

Now we have a function that looks a lot like a React component.

This is a pure function, because it takes in a value, returns a modified version of that value, and doesn't reference any variables outside of it's scope.

This means that every time I run this function, I can know for sure that, if I pass in a message, I will get back a div that contains that message.

And the great

So as we can see, functions are awesome.

But in javascript, functions
