https://codeburst.io/a-beginner-friendly-intro-to-functional-programming-4f69aa109569

## w1 - v4 CORE JS : functions 5 mins

[SC]
FUNCTIONAL JAVASCRIPT
[VO]

Welcome back.

In the last video, I talked about some of the big ideas of React, and made a big point out of the fact that React utilizes functional javascript.

In this video, I want to talk a little about what that means.

[SC]

(data, someFunction) => someFunction(newData)

[VO]
At it's core, functional programming is actually a pretty simple idea: the goal is to write small and specific functions that process some data and can be combined and organized to create larger functions.

[SC]
(data) => InterfaceElement(data)
[VO]
In React, for example, we use functions to create and update small and specific user interface elements, like a button or a list item, which we call components, and then we combine those together to build a web page or an app.

[SC]

[VO]
So, the first big idea of functional programming is that we can use functions to help us structure programs, reduce repetition and give us a way to usefully name blocks of code.  And I think this is easy enough to understand.

[SC]

[VO]
The second big idea -- which is the use of immutable data -- is a little harder to grasp, partiularly if you haven't written a lot of software before, and it has to do with how data is handled.

It's also super important -- perhaps the most important thing -- to understanding how React works.
 

In functional programming, data is treated as a flow, that passes from function to function.    

Now, in order to preserve the quality of that data, we strive at all costs to avoid mutating it as it moves from function to function.

Instead, we create new data, and add it to the stream.  

And then we alert the parts of the program that need to know about this change to update their data feeds to point at the new data.

This is a bit of an oversimplification and the distinction may seem minor, but believe me, it's a total game changer when you're building a complex user interface that has asynchronous communication built in as a key principle, as most website do.

[SC]

[VO]
In order to accomplish this task of avoiding data mutation, we need to create functions which are pure.  What's a pure function?  That's the topic of this video.

[VO]
So to begin with, by way of review, let's take a look at a function declaration.  

We can declare a function with the function keyword, and we can add a name so that we can access that function later.

Or, we can assign that function to a variable and access it later that way.

We can also declare a function using arrow notation, and assign it to a variable.  Most often, in React, we'll use arrow notation.  






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


The curly braces of a function denote the scope of the function. Variables declared inside that function scope are not available outside that scope.  There are some really neat and subtle details related to function scope in javascript but for now we'll just think about the scope of a function as being the curly braces of that function, which is generally the case.

[SC]

    const logSecret = () => {
        const secret = 'you are so cute'
        console.log(secret)
    }

    const secretFail = () => {
        console.log(secret + 'in another function')   // undefined
    }

    console.log(secret + 'outside scope'  )  // undefined

[VO]
Function scope is tremendously useful for keeping your data pure. This is called encapsulation.

Here, I've defined a variable named friend inside the scope of the function named logSecret.  Apparently our friend named Sam has a secret.  

Notice that I'm attempting to access that secret in several other scopes, inside both the scope of this function named secretFail and also in the global scope.

If I open up the terminal and use node to run this javascript code, notice that I get undefined, in the global scope.

And, if I comment that global scope attempt out, then the code works and logSecret does it's thing.

 

And I want to say that errors like these are actually great errors to get!  You'll probably get your share of them as you build React sites.  And when you get an undefined error like this, it will generally be because you're trying to access a variable that isn't defined in the current scope.

  

Now, if I move that secret variable  to the global scope, you can see that this sweet secret message has become , well, sort of a bummer.

Of course, one thing we can and should do is to use a const instead of a let keyword to define our variable, which helps prevent data mutations.  But, as we'll see with arrays and objects -- const only prevents re-assigning the contents of a variable, it doesn't prevent modifying the contents, so it's much safer to simply encapsulate this variable, if we want to actually keep it secret.

[SC]

    const logMessage = (msg) => {
        console.log(msg)
    }
    logMessage('hi')

[VO]
Now, another thing that you may already know about functions is that they can also accept parameters.

[SC]
const logMessage = (msg = 'hi') => {
console.log(msg)
}
logMessage() // hi
logMessage('we will be using this soon') // we will be using this soon
[VO]
Those input parameters can have default values! So here, you see, we've got a parameter named msg and it has a default value of hi. So if I don't pass in any value, then that default value will be the value of the parameter, but if I do pass in a value, the value that I pass in will be the value of the parameter.

[SC]


const map = (func) => {
    const priorValue = 10
    return func(priorValue)
}

const add10 = (x) = x + 10
map(add10) // 20

[VO]

And, perhaps most exciting -- functions can be passed into other functions as input parameters.  A function that is passed into another function like this is known as a callback function.


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

We'll get a little practice with higher order functions soon.

For now, I want to focus on something a little more fundamental -- the difference between pure and impure functions.




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
<!-- As Marijn Haverbeke says in the classic javascript book 'Eloquent Javascript', 'functions are the bread and butter of javascript'. -->

Functions 




[SC]

[VO]
