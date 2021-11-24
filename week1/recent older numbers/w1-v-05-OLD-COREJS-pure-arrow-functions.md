## w1 - v5 arrow functions -- pure functions -- render function

## oops they already know arrow functions

## need to rewrite this and set us up for array.map()

functions of a higher order 5 mins

arrow functions are cool
functions should do one thing
functions can have parameters, and default parameters too
functions have a single return value; if we want to return more than one thing
we can use an object or an array
there's actually a lot more to learn about functions in JS, but we'll come back to it
react components are always functions that return a single DOM element, eg a div

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

In the last video, I sprang this component-like arrow function on you, but I feel like I should take a minute to review arrow functions, which will be such an important part of

[SC]
function(a, b){
rerturn a + b
}

(a, b) => {
return a + b
}

[VO]

Arrow functions are a way of writing functions in javascript that was introduced in ES6.

As you can see, we basically just replace the function keyword with an arrow, and move it between the parenthese that hold the input parameters and the curly braces that define the function body.

And one of the key benefits is that it's a little bit shorter to write; but, personally, I also really like the arrow syntax because it really shows what a function is : a function is a block of code which takes one or more input parameters and transforms them to create a new value.

[SC]
function(a, b){
return a + b
}

(a, b) => a + b

[VO]
But the really nice thing about arrow functions is that, in cases like this, where the function consits of a single expression, we can also lose the curly braces, so the function declaration becomes even shorter.

[SC]
function(a, b){
return a + b
}

(a, b) => a + b

[SC]
function add(a, b){
return a + b
}
[VO]
If we want to give a traditional function a name, so we can invoke it later, we can do it by naming it, like this.

[SC]
const add = (a, b) => a + b

[VO]
We can't do this with arrow functions, but what we can do is assign that function to a variable, like this.

[SC]
const add = (a, b) => a + b
const sum = add(2,4)
// sum = 6
[VO]
Then, we can call the function the same way we would a call a named function.

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
So, with that out of the way, let's return to the arrow function that we wrote before.

We now have a function called Message, that returns a div which, as I said before, is a LOT like a React component.

[SC]
const welcomeChris = Message('👋 welcome, Chris!')
console.log(welcomeChris) // div
[VO]
I can call that function, and pass in a message, and get a div back.

[SC]
const welcomeChris = Message('👋 welcome, Chris!')
console.log(welcomeChris) // div
[VO]
And, now, to welcome a different user to the site, I can just pass in

[SC]
const myNewMessage = Message('❤️ I love you, Chris!')
console.log(myNewMessage) // div
[VO]

And now, I can create another div, by just passing in a new message.

[SC]

const Message = (msg, name, col, textSize) => {
const div = document.createElement('div')
div.innerText = msg + name
div.style.color = col
div.style.fontSize = textSize
div.style.marginTop = '20vh'
return div
}

[VO]

And, of course, if I want to extend this example just a bit, I can also pass in a text color, right? And a textSize? Oh and while we're at it, do all of these messages have to be for Chris? Let's add a name parameter as well.

So I'm going to do that now, and I'm also going shorten that first input parameter, because I think the code is actually more readable with the shorter variable name, and it's just as descriptive.

# end

One extremely powerful and common pattern in javascript is the use of callback functions; callback functions are functions that are passed into other functions as arguments. Because they're so succinct, arrow functions are often used to write callback functions.

Let's look at an example.

[SC]

const

[VO]

## is this extraneous info at this point?

But....FWIW, and this is important to remember -- this function, although it's been assigned to a variable, is not

##

##

this was a failed idea on higher order functions which probably aren't necessary yet?

##

const user = 'chris'
const double = (input) => input + input

const justAddMagic = (name) => (magic) => magic(name)

[VO]

At the end of the last video, I left you pondering the question of what should get logged to the console here.

If we want to test this out, we can just run this code in the browser. Let's do that now, first.

[SC]

[VO]
I'm going to make a new javascript file called magic.js, and I'm going to import that file instead of my index.js in my index.html file, then refresh my browser, and there I can see what gets logged to the console.

Now, before we go any farther, let's be sure we understand why we get that output by reviewing what's going on here.

[SC]

const double = (input) => input + input

[VO]

We'll start with the first line, which is a named function declaration. It's written as an arrow function. If arrow functions are new to you, don't worry, they're not that hard to get used to and I think you'll find that they are supremely useful. For one thing, they're really short.

[SC]

const double = (input) => input + input

const double = function(input){
return input + input
}

[VO]
We could rewrite this with the function keyword and it would look like this.

You can see that, when we use the arrow, we can omit the function keyword, as well as the return keyword and the curly braces. This can really shorten up our code nicely!

[SC]

const double = (input) => input + input

const double = function(input){
return input + input
}

[VO]
Now, there are a couple of really important function fundamentals that I want to point out here.

First of all, this is an example of what's known as a PURE function.

Pure functions always take in one or more values, they always return have a return value, they do not use or refer values other than the input parameters that come from outside the function and as a result, they do not have what's know as 'side effects'. Which means, they are very predictable. No matter what, this function will always return the
