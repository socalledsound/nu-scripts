## w1 - v4 CORE JS : functions 5 mins

[SC]
FUNCTIONAL JAVASCRIPT
[VO]

Welcome back.

In the last video, I introduced this idea of functional javascript, and also said that React utilizes functional javasscript.

In fact, I think you could safely say that the wild growth of functional and declarative javascript over the last decade goes hand in hand with the wild and explosive growth of React -- the two are inextricably linked.

[SC]
IN FUNCTIONAL JAVASCRIPT:

functions should do one thing
functions should be predictable
functions should be self contained
functions should have a return value
functions should avoid side effects

[VO]
need more text here

If you're new to functional javascript, you're in for a treat! It's a powerful and elegant way to write javascript code and it also can be pretty challenging. There will most likely be some brain benders coming your way over the next few weeks, and most of them will have to do with higher order functions of one kind or another.

But at it's core, funcational programming actually a pretty simple idea: the goal is to write small and specific functions that can be combined and organized to create larger functions.

So, maybe the first thing we should do is to review the humble and oh so powerful function.

[SC]

    functions
    can be declared
    can be invoked
    can be named or anonymous
    can be immediately invoked
    have scope

    can return a value
    can be pure

[VO]
Functions are, as Marijn Haverbeke says in 'Eloquent Javascript', one of the alltime classic javascript books, 'the bread and butter of javascript'.

Functions help us structure programs, reduce repetition and give us a way to usefully name blocks of code.

[SC]

[VO]

Functions in javascript are immensely powerful and flexible, and they can also be super fun!

Here's a kind of nonsense function that I think demonstrates how weird functions can get in javascript!

Do you know what the value of this function expression is?

If so, you're well on your way. If not, don't worry, it should make perfect sense by the end of this video.

[SC]
function logMessage(){
const message = 'hi'
console.log(message)
}

[VO]
So, for starters, as you probably know, we can declare a function with the function keyword. The curly braces denote the scope of the function. Variables devlared inside that function are not available elsewhere in the program. This is very useful for keeping our data safe and sound, as we'll see throughout this course.

[SC]
const logMessage = () => {
const message = 'hi'
console.log(message)
}

[VO]
We can also use the arrow syntax to define functions. Personally, I prefere that syntax in many cases! It's usually shorter and...it looks cool, too.

[SC]
const logMessage = (msg) => {
console.log(msg)
}
logMessage('hi')

[VO]
Functions can accept one or more parameters.

[SC]
const doSomethingXTimes = (x, func) => {
for(let i = 0; i < x; i++){
func()
}
}
const sayHi = () => {
console.log('hi)
}

doSomethingXTimes(3, sayHi)

[VO]
And, functions can be the input parameters of another function!

[SC]
MIND BLOWN EMOJI
[VO]

[SC]

function sum(a,b){
return a + b
}

const sum = (a,b) => {
return a + b
}

[VO]
functions can also return a value, like this....or, in the arrow syntax, like this

[SC]
const sum = (a,b) => a + b

[VO]
But if we want to return a value from a single line arrow function we can get rid of the curly braces and return a value like this.

[SC]

    const logSecret = (a) => {
        const secret = 'you are so cute'
        console.log(secret)
    }

    const noSecret = () => {
        console.log(secret)  // undefined
    }

[VO]
Function scope is tremendously useful for keeping your data pure.

A function that returns known as a pure function, because if we run it with the same inputs, the result will always be the same. Notice that it's not working with any data that exists outside the scope of the function.

[SC]
let b = 10
const mutatingSum = (a) => a + b
[VO]
This function, on the other hand, is dependent on a variable that exists outside it's scope. If a is 3, the result could be literally anything, because it's dependent on the value of b, which could be any value, or be undefined.

[VO]
const logMessage = (msg) => {
console.log(msg)
}

[SC]
This function is also not a pure function, because it doesn't have a return value and it generates what's known as a side effect -- it renders something to the console.

Side effects happen when a function relies on or modifies something outside of its scoope. So, for instance, logging to the console, or taking in user input, or even using the DOM, all of these things are side effects, because the function can't really know or predict the status of those things.

Now....it's probably immediately obvious that just about everything cool about a web site is, therefore a side effect. They are unavoidable and, we wouldn't want to avoid them. But what we can do is, be careful with them.

[SC]

    const createDiv = () => {
    const div = document.createElement('div')
    return div
    }

[VO]
React helps us be careful with side effects by forcing us to structure our code using components. A component is, basically, a function which must return a single HTML element.

# I could also do this in the next video....

[SC]

    const HeartMessage = (msg, x, y, col) => {
        const div = document.createElement('div')
        div.innerText = msg
        div.className = 'heart-message'
        div.style.left = x
        div.style.top = y
        return div
    }

[VO]
We can rewrite our code from the last video as a function that returns a div. We'll give name it with a capital letter, because React components are, by convention, named with capital letters. We'll pass in a message, some x and y coordinates, and a color. In the function, we'll create a div, and then set the innerText property of that div to be the message.
We'll also add a classname of 'heart-message', and add the left and top style values from before. And finally, we'll be sure to return that div.

[SC]
const messageDiv = HeartMessage('cool cud', '100px', '300px', 'lightpink')
[VO]
Now, we can invoke that function, and pass in a message and it will return a div.

[SC]
const messageDiv = HeartMessage('cool cud', '100px', '300px', 'lightpink')
root.appendChild(messageDiv)
[VO]
And then we can append that div to our root div, like we did before.

[SC]
root.appendChild(HeartMessage('cool cud', '100px', '300px', 'lightpink'))
[VO]
Or, we can just pass the function invocation into root.appendChild directly, like this.

[SC]
root.appendChild(HeartMessage('cool cud', '100px', '300px', 'lightpink'))
root.appendChild(HeartMessage('you are bear', '100px', '500px', 'lightblue'))
[VO]
And now we've got a dependable and fairly concise way to create a heart message.

If pass in a new message, and modify the y coordinate so that it's a bit lower on the page, and maybe even give it a new color, we'll see a new message!

[SC]

[VO]
Now, we can use this function to generate a page full of messages.

But of course we don't want to input all of these values -- we'll use a loop to do it for us.

But first, we need to modify this function just a little bit. I'll explain how and why in the next video, when I show you about a tremendously useful ES6 feature called template literals. I'll see you there.

# end
