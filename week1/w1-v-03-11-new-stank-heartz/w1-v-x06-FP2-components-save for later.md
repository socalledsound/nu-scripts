[SC]

    (*) => React

[VO]
In the last video we talked a little bit about how functions and functional programming can help us write code that is re-usable, and also more predictable.

In React, these functions are a bit more sophisticated, and we call them components.

We'll use these functions, or components, to compose web pages.

To do this well, we have to learn how to look at web content, and also coding, just a little bit differently -- we need to try to break down bigger tasks into smaller ones.

[SC]

heart image

[VO]

Rather than try to explain this in an abstract way, I want to give you a very concrete and visual example: this heart that we're trying to build.

It's a shape that has a lot of meaning, for a lot of people.

[SC]

svg points

[VO]

And it's a shape that can get a little bit complicated to make. If we wanted to code it by hand using, say, SVG, we'd need a long list of points to make these arc shapes.

[SC]
two circles and a square heart
[VO]

Or, we can approach it from another perspective, breaking the shape down into it's constituent parts. As you can see here, a heart is, basically, a square and two circles combined.

[SC]

[VO]
And, you can break down just about any web page you want to build in just this way.
Soon, you'll be doing it without even thinking about it.
a login page?
Two text input fields and a submit form.

[SC]

[VO]
A registration page?
Take those same parts from the login page, and add a few more text fields.

[SC]
a few pages with highlighted sections that show components.
can we use things like netflix or shoudl these be pages that I built?
[VO]
If you look around the internet with this perspective, it all starts to make new sense, you'll see repeated parts everywhere. Not all of these pages are using React, but they're all using this very fundamental principle of composing web pages by using re-usable parts.

[SC]

square
circle
circle
[VO]
But back to our heart, which we can make in a similar way, by coding some small pieces, and then combining them. We'll need to write two functions. A square, and a circle, which we can use twice.

[SC]
Heart
Circle
Circle
Square
HeartMessage
[VO]
And, then we'll also write a Heart function, which will combine these shapes and also display the HeartMessage function that we've already written.

[SC]
square animation with rotation

[VO]

Let's code the pieces now. We'll start with the square, which will just be a div with a fixed width and height, that we rotate by 45 degrees.

[SC]

    const Square = (col, x, y) => {
        const div = document.createElement('div)
        // width
        // height
        // absolute position
        // rotate 45 degrees
        // top
        // left
        // background color
        return div
    }

[VO]
We're going to write a function, that returns that div, just like we did with our HeartMessage. And somewhere in that div, we're going to have to set a bunch of style properties. We'll be using absolute positioning again, and also have a background color.

We want to be able to set the color and posiition of each of these squares dynamically, so let's have three parameters, col, for color, and then an x and y value.

[SC]

    const Square = (col, x, y) => {
        const div = document.createElement('div)
        div.className = 'heart-circle'
        // width
        // height
        // absolute position
        // rotate 45 degrees
        // top
        // left
        // background color
        return div
    }

[VO]
We'll also add a classname of 'heart-square'

[SC]

    .heart-square {
        width: 150px;
        height: 150px;
        position: absolute;
        transform: rotate(-45deg);
    }

[VO]
Now we can write a few css style rules, which will be applied to every heart-square.

[SC]

    const Square = (col, x, y) => {
        const div = document.createElement('div)
        div.className = 'heart-square'
        div.style.backgroundColor = col
        div.style.left = x
        div.style.top = y
        return div
    }

[VO]
And then we can style our dynamic properties using javascript.

[SC]
root.appendChild(Square('lightpink', '200px', '300px'))
[VO]
And if you want to test it and see if it's working, you can just append it to the root div. Yo0u should see a light pink square on the page, rotated 45 degrees.

[SC]
square into circle with border radius

[VO]
Our circle will be pretty much the same, but with a border radius of 50% of the length of each side. And of course we won't need to rotate it.

[SC]

    const Square = (col, x, y) => {
        const div = document.createElement('div)
        div.className = 'heart-square'
        div.style.backgroundColor = col
        div.style.left = x
        div.style.top = y
        return div
    }

    const Circle = (col, x, y) => {
        const div = document.createElement('div)
        div.className = 'heart-circle'
        div.style.backgroundColor = col
        div.style.left = x
        div.style.top = y
        return div
    }

[VO]
Now, the fact that there's a lot of duplicated code here might make you a little uneasy, as it does me.

[SC]
const Circle = () => {
const div = document.createElement('div)
div.className = 'heart-circle'
// width
// height
// border-radius
// absolute position
// top
// left
// background color

}

[VO]
For now anyway, all of these Circles are going to be the same size, so let's add a class name of circle.

[SC]
.circle {
width: 150px;
height: 150px;
position: absolute;
border-radius: 100px;
}

[VO]
Now we can write a few css style rules, and they'll be applied to our circle.

[SC]

[VO]

So, let's start by looking at the page that we're building, and think about the pieces, or components, that we'll break it down into.

First, we have a Header, and then we have a bunch of hearts.

So to start with, we've got two areas, or components, that we can probably break down into seperate divs.

[SC]

[VO]

This one that we're building now isn't going to be very app like, since it won't really respond to user input.

But all the same, we can start embracing React by starting with an App function, that will hold the rest of our web page.

It'll be an arrow function that returns a div.

We'll call it App, with a capital A, and inside the body, we'll create div like this, and then we'll return that div.

[SC]

const newDiv = document.createElement('div')
newDiv.className = 'message'
newDiv.innerText = 'HELLO, I LOVE YOU'
newDiv.style.backgroundColor = 'pink'
newDiv.style.left = '300px'
newDiv.style.top = '300px'

[VO]

So to make the code we wrote in the last video more React-like, let's start by turning it into a function.

[SC]
const HeartMessage

[VO]

So I'll start by creating a constant that starts with a capital letter, because I'm trying to make this look as React-like as possible and in React, by convention, we use capital letters to name these functions that return DOM nodes, which, again, are called components in React.

I'm going to call this HeartMessage, because we're going to use it to display the candy heart messages that the AI generated.

[SC]

    const HeartMessage = (msg) => {
        const newDiv = document.createElement('div')
        newDiv.className = 'message'
        newDiv.innerText = msg
        newDiv.style.backgroundColor = 'pink'
        newDiv.style.left = '300px'
        newDiv.style.top = '300px'

    }

[VO]
Now, I'll assign an arrow function that takes in a message, we'll shorten it to msg, to make sure we don't confuse it with our class name. And then in the body of the function, we can just copy in what we wrote before, but substitute the msg parameter for the text we had before.

[SC]

    const HeartMessage = (msg = 'HELLO') => {
    const newDiv = document.createElement('div')
    newDiv.className = 'message'
    newDiv.innerText = msg
    newDiv.style.backgroundColor = 'pink'
    newDiv.style.left = '300px'
    newDiv.style.top = '300px'

    }

[VO]
And here's a nifty trick from es6 -- we can also add a default parameter.

[SC]
const HeartMessage = (msg) => {
const newDiv = document.createElement('div')
newDiv.className = 'message'
newDiv.innerText = msg
newDiv.style.backgroundColor = 'pink'
newDiv.style.left = '300px'
newDiv.style.top = '300px'
return newDiv
}
[VO]

And finally, I'll be sure to return that newDiv.

[SC]

HeartMessage('hello, I love you')

[VO]
Now, when we invoke this function we can pass in any message that we want, and that message will be the text of our div.

[SC]
root.appendChild(HeartMessage('hello, I think I'm falling in love with you'))
[VO]
And if we want this to appear in our DOM, we can just pass in this function invocation, exactly where we passed in the newDiv variable before, because the return value of this function is....our newDiv.

[SC]

    const HeartMessage = (msg, col, x, y) => {
        const newDiv = document.createElement('div')
        newDiv.className = 'message'
        newDiv.innerText = msg
        newDiv.style.backgroundColor = col
        newDiv.style.left = x
        newDiv.style.top = y
        return newDiv
    }

[VO]
And of course, we can also add parameters for the background color and position of our div.

[SC]

[VO]
Now, when

[SC]
functions review

[VO]
So we've a learned a few things about functions in this video, and I just want to review those before we move on.

[SC]

const HeartMessage = (msg) => {
const newDiv = document.createElement('div')
newDiv.className = 'message'
newDiv.innerText = msg
newDiv.style.backgroundColor = 'pink'
newDiv.style.left = '300px'
newDiv.style.top = '300px'
return newDiv
}

[VO]
review those points about functions here, including default parameters and closures.

[SC]
IN FUNCTIONAL JAVASCRIPT:

functions should do one thing
functions should be predictable
functions should be self contained
functions should have a return value
functions should avoid side effects

[VO]

[SC]

functions are first class citizens
[VO]
With those basics out of the way, I want to introduce one more big thing, and this is where javascript starts to get really fun.  
'functions are first class citizens'.
What this means is, first of all, you can assign functions to variable names, which you already know, we've been doing this all along.
And what it also means, is you can pass functions into functions AND what it means is you can RETURN functions from functions.

[SC]

(() => 0)()

[VO]

This may not sound like much, but it is tremendously powerful -- and can be powerfully confusing.

Here's

Over the next few weeks, you'll learn a lot about these concepts.

[SC]

[VO]
Right now, we're going to focus on the
[SC]

[VO]
IN the next video, we'll talk about arrays, and
