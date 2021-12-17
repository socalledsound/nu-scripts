https://codeburst.io/a-beginner-friendly-intro-to-functional-programming-4f69aa109569

## w1 - v4 CORE JS : functions 5 mins

[SC]
FUNCTIONAL JAVASCRIPT
[VO]

Welcome back.

In the last video, I introduced this idea of functional or declarative javascript, and also said that React utilizes functional javascript.

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

But at it's core, functional programming actually a pretty simple idea: the goal is to write small and specific functions that can be combined and organized to create larger functions.

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

Here's a kind of nonsense function that I think demonstrates how weird functions can get in javascript.

Do you know what the value of this function expression is?

If so, you're well on your way. If not, don't worry, it should make perfect sense by the end of this video.

[SC]
function logMessage(){
const message = 'hi'
console.log(message)
}

[VO]
So, for starters, as you probably know, we can declare a function with the function keyword. The curly braces denote the scope of the function. Variables declared inside that function are not available elsewhere in the program. This is very useful for keeping our data safe and sound, as we'll see throughout this course.

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

    const logSecret = () => {
        const secret = 'you are so cute'
        console.log(secret)
    }

    const notSecret = () => {
        console.log(`not ${secret}`)  // undefined
    }

[VO]
Function scope is tremendously useful for keeping your data pure. This is called encapsulation.

Here the variable named secret can't be accessed from outside of the scope of the function in which it is defined.

One of the key benefits of functional programming is data integrity. In funcitonal programming, as we'll see, on of the key mantras is 'never mutate data'.

So, for instance, we almost always declare our variables as constants, and then if we want to create a new variable based on that old variable, we simply make a new variable.

And we always try to pass our data in to a function in which we want to use it, rather than relying on a parent scope.

Many of the design choices of both the React and Redux libraries are premised upon this principle.

[SC]
const sum = (a,b) => a + b
[VO]

A function that returns a value and doesn't modify or utilize any data from outside of its scope is known as a pure function, because if we run it with the same inputs, the result will always be the same. Notice that it's not working with any data that exists outside the scope of the function.

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
This function is also not a pure function, first, because it doesn't have a return value. More importantly, it generates what's known as a side effect -- it affects something outside of its scope. IN this case, by rendering something to the console.

Side effects happen when a function relies on or modifies something outside of its scoope.

So, for instance, logging to the console, or taking in user input, or even using the DOM, all of these things are side effects, because the function can't really know or predict the status of those things.

Now....it's probably immediately obvious that just about everything neat or useful about a web site is, therefore a side effect. They are unavoidable and, we wouldn't want to avoid them. But what we can do is, be careful with them.

[SC]

    const MyReactComponent = () => {
        return React.createElement('div', null, null)
    }

[VO]
React helps us be careful with side effects by forcing us to structure our code using functions that have strict limitations on what they can return -- a React component is a function which must return a single React element.

[SC]

[VO]
And in other important ways that we'll learn about soon, React makes it hard for us to write code that mutates data.

When you're

There will be times when you think to yourself, jeez, does it have to be this hard?

At those times, try to remember that the reason it

# bring this back in:

    const messages = []
    for(let i = 0; i < messages.length; i++){
        root.appendChild(HeartMessage('you are bear', '100px', '500px', 'lightblue'))
    }

[SC]
function logMessage(punctuation){
return (msg) => console.log(msg + punctuation)
}

[VO]

And functions can also return other functions!

[SC]
DOUBLE MIND BLOWN EMOJI
[VO]

[SC]
HIGHER ORDER FUNCTIONS
[VO]
When a function is returned from a function, or passed into a function as an input parameter, we call that a 'higher order function'. They can be a bit daunting at first but don't worry -- in this course and in your career as a React developer you'll get plenty of exposure to these ideas and, as with everything, with a little practice it will become second-nature.

[SC]
function logMessage(punctuation){
return (msg) => console.log(msg + punctuation)
}
logMessage('!')('hi')

[VO]
If a function returns a function, then we can also invoke the function that it returns, as you can see here.

[SC]
function logMessage(punctuation){
return (msg) => console.log(msg + punctuation)
}
const logMessageWithExclamation = logMessage('!')
logMessageWithExclamation('hi)
[VO]

Or, we can assign the returned function to a new variable, and invoke it later. This is called partial application.

[SC]
TRIPLE MIND BLOWN EMOJI
