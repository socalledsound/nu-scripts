https://codeburst.io/a-beginner-friendly-intro-to-functional-programming-4f69aa109569

## w1 - v4 CORE JS : functions 5 mins

[SC]
FUNCTIONAL JAVASCRIPT
[VO]

Welcome back.

In the last video, I talked about some of the big ideas of React, and made a big point out of the fact that React utilizes functional javascript.

In fact, I think you could safely say that the wild growth of functional and declarative javascript over the last decade goes hand in hand with the wild and explosive growth of React -- the two are inextricably linked.

[SC]

(data, someFunction) => someFunction(newData)

[VO]
At it's core, functional programming is actually a pretty simple idea: the goal is to write small and specific functions that process some data and can be combined and organized to create larger functions.

[SC]
(data) => InterfaceElement(data)
[VO]
In React, we use functions to create and update user interface elements.

[SC]

    (a, b) => a + b

[VO]
So, let's get started by reviewing the humble, flexible and oh so powerful function.

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

    function logMessage(){
        const message = 'hi'
        console.log(message)
    }

    const logMessage = () => {
        const message = 'hi'
        console.log(message)
    }

[VO]
So, for starters, as you probably remember, we can declare a function with the function keyword, or with the arrow syntax. The curly braces denote the scope of the function. Variables declared inside that function are not available elsewhere in the program.

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

[SC]

    const logMessage = (msg) => {
        console.log(msg)
    }
    logMessage('hi')

[VO]
Functions can accept one or more parameters.

[SC]
const logMessage = (msg = 'hi') => {
console.log(msg)
}
logMessage() // hi
logMessage('we will be using this soon') // we will be using this soon
[VO]
And those input parameters can have default values!

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
And if we want to return a value from a single line arrow function we can get rid of the curly braces and return a value like this.

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
ReactDOM.render()

[VO]
Generally, this means, setting them off into their own isolated functions as much as possible, and naming them with a name that indicates that they are side effect generating.

In React, for instance DOM manipulation -- the classic side effect! -- is handled by an entirely seperate library, ReactDOM. We'll talk more about this soon, but this is a really good example of designing a codebase that respects side effects and the damage they can do!

As we'll learn in the coming videos, the ReactDOM library is also a good example of the declarative style of programming that I've been talking so much about. In the next video I want to talk a little bit more about what this means, but before we continue, let's quickly review the role of functions in functional programming.

[SC]
IN FUNCTIONAL JAVASCRIPT:
functions should do one thing
[VO]
So, First of all, functions should generally try to do one thing. If you have a function that's doing one thing and need to do more things, it's probably time to think about writing another function!

[SC]

    IN FUNCTIONAL JAVASCRIPT:
        functions should do one thing
        functions should be predictable

[VO]
Secondly, functions should do the same thing with the same inputs, every time.

[SC]
IN FUNCTIONAL JAVASCRIPT:
functions should do one thing
functions should be predictable
functions should be self contained
[VO]
Third, functions should be self-contained. They shouldn't use or modify data that isn't either passed in as an argument or declared within the scope of that function
[SC]
IN FUNCTIONAL JAVASCRIPT:
functions should do one thing
functions should be predictable
functions should be self contained
functions should have a return value
[VO]
Functions should return a value. Why? Functions that don't return values usually exist to generate side efects.

[SC]
IN FUNCTIONAL JAVASCRIPT:
functions should do one thing
functions should be predictable
functions should be self contained
functions should have a return value
functions should avoid side effects
[VO]
And, as we know, side effects -- though important and fun -- should be avoided when possible, or at least contained.
[SC]

    IN FUNCTIONAL JAVASCRIPT:
        functions should do one thing
        functions should be predictable
        functions should be self contained
        functions should have a return value
        functions should avoid side effects

[VO]

Now, it's important to remember that these guidelines aren't set in stone, and sometimes you'll need or want to violate them. But they're good things to keep in mind, and if you can follow them, your code will generally function more like you want it to and be easier to test.

[SC]
DECLARATIVE vs. IMPERATIVE
[VO]
And now that we've gotten down and inspected the foundations of functional programming -- pure functions -- let's switch our focus and look at the big picture. These guidelines about writing functions are helpful, for sure, but they don't really speak about WHY we want to use functions as building blocks in the first place. In the next video, I'll talk a bit about that and outline some of the differences between declarative and imperative programming. I'll see you there.

# end

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

# bring this back in?:

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
