## w1 - v4 CORE JS : functions 5 mins

[SC]
FUNCTIONAL JAVASCRIPT
[VO]

Welcome back.

In the last video, I introduced this idea of functional javascript, and also said that React utilizes functional javasscript.

In fact, I think you could safely say that the wild growth of functional and declarative javascript over the last decade goes hand in hand with the wild and explosive growth of React -- the two are inextricably linked.

If you're new to functional javascript, you're in for a treat! It's a powerful and elegant way to write javascript code and it also can be pretty challenging. There will most likely be some brain benders coming your way over the next few weeks, and most of them will have to do with higher order functions of one kind or another.

But at it's core, funcational programming actually a pretty simple idea: the goal is to write small and specific functions that can be combined and organized to create larger functions.

So, maybe the first thing we should do is to review the humble and oh so powerful function.

[SC]

[VO]
A function is

[SC]
IN FUNCTIONAL JAVASCRIPT:

functions should do one thing
functions should be predictable
functions should be self contained
functions should have a return value
functions should avoid side effects

[VO]
need the text for this here

[SC]

[VO]
To keep things clean and simple, we always try not to modify, or MUTATE, data that exists outside of the scope of the functions that we write.

So, we either pass that data in as an argument, or declare it

[SC]

    (*) => React

[VO]
So if the basic organizing block of functional programming is functions, and React is based on functional programming principles, guess what the basic organizing block of React is?

That's right - functions.

[SC]

const newDiv = document.createElement('div')
newDiv.innerText = '👋 hi there'
newDiv.style.color = 'green'
newDiv.style.fontSize = '10rem'
newDiv.style.marginTop = '20vh'

[VO]

So to make the code we wrote in the last video more React-like, let's start by turning it into a function.

[SC]
const WelcomeMessage

[VO]

So I'll start by creating a constant that starts with a capital letter, because I'm trying to make this as React-like as possible and in React, by convention, we use capital letters to name our these functions that return DOM nodes, which, again, are called components in React.

[SC]
const WelcomeMessage = (name) => {
const newDiv = document.createElement('div')
newDiv.innerText = '👋 hi there'
newDiv.style.color = 'green'
newDiv.style.fontSize = '10rem'
newDiv.style.marginTop = '20vh'
return newDiv
}
[VO]
Now, I'll assign an arrow function that takes in a name. We're going to keep our text from before, and add this name to the text. And then in the body of the function, we can just copy in all of what we wrote before.

And finally, I'll be sure to return that newDiv.

[SC]
const WelcomeMessage = (name) => {
const newDiv = document.createElement('div')
newDiv.innerText = '👋 hi there,' + name
newDiv.style.color = 'green'
newDiv.style.fontSize = '10rem'
newDiv.style.marginTop = '20vh'
return newDiv
}
[VO]

Now, to use that name variable, we can just add it to the current name.

[SC]

WelcomeMessage('Chris')

[VO]
Now, when we invoke this function we can pass in any name that we want, and get back a message that's specifically tailored to that person.

[SC]
root.appendChild(WelcomeMessage('Chris'))
[VO]
And if we want this to appear in our DOM, we can just pass in this function invocation, exactly where we passed in the newDiv variable before, because the return value of this function is....our newDiv.

[SC]
functional programming review

[VO]
So we've a learned a few things about functional programming and about functions in this video, and I just want to review those before we move on.

[SC]

    const WelcomeMessage = (name) => {
        const newDiv = document.createElement('div')
        newDiv.innerText = '👋 hi there,' + name
        newDiv.style.color = 'green'
        newDiv.style.fontSize = '10rem'
        newDiv.style.marginTop = '20vh'
        return newDiv
    }

[VO]

[SC]

    const WelcomeMessage = (name) => {
        const newDiv = document.createElement('div')
        newDiv.innerText = '👋 hi there,' + name
        newDiv.style.color = generateRandomColor()
        newDiv.style.fontSize = '10rem'
        newDiv.style.marginTop = '20vh'
        return newDiv
    }

[VO]
I want to write change the WelcomeMessage so that the text color is a random color every time we run the WelcomeMessage function.

So what I can do, is

Actually, I've already got
[SC]
[VO]

[SC]

[VO]

[SC]

[VO]
Now, I've got a little functional challenge for you.

And guess what? Generating a random color is a great excuse to write a function.
