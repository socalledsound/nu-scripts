[SC]
FUNCTIONAL JAVASCRIPT
[VO]

Welcome back.

In the last video, I talked about some of the big ideas of React, and made a big point out of the fact that React utilizes functional javascript.

So, in this first series of videos, we're going to make sure that you have a solid foundation in functional javascript, so that you'll be prepared to write React code, and really understand what you're writing.  

Before we get started, I want you to download the code for this first section of the course from the link down below on this exercise page that says 'section 1 code'.

After you download it, go ahead and open up that folder in vs code.  Then, in the file browser, navigate to the folder labeled '01-functional-foundations'.  Click on the file titled question.js.  And try not to peek at the one titled answer.js!  

In this file you see a little code, just a few functions.

You can see that the first three are simple one line arrow functions and then the fourth one is a bit more complex.

So my question for you is, how would you compose a message that outputs 'your phone number is contained somewhere in the digits of Pi' and then logs a surprised reaction?

Depending on your familiarity with functions in javascript, you may find that this is a bit of a puzzle!

If you want to take a shot at it, you can just write your code anywhere below line 13, and then run this file using the terminal.

To do that, first open up the terminal, and then you can check to see if you've got the node interpreter installed with node -v.  Hit enter and it should show you the version.  If it doesn't show you a version for node, go back to the installing node exercise that preceded this and install node.

If you do have a node version, then you can just type node question.js, hit enter, and see the result.

Now, there's a decent chance that this challenge might be a little beyond your knowledge level right now!  Which is fine, and in fact good.  If you have a slightly confused or even slightly anxious feeling when you think about this challenge, that feeling is called 'learning hard stuff', and it's a natural part of becoming a functional programmer.  And, composing with functions definitely feels a little odd when you first start doing it. 

But, as you probably know, you can't learn to swim if you don't get in the water.  Just remember to breathe deeply and stay calm and stay out of water that's too deep, and you'll be fine.

So if you just don't know how to make this work, don't worry about it -- I guarantee that by the end of this video, you'll understand all of the syntax here and be well on your way to mastering this thing called functional javascript.

Now go ahead and pause the video now and take a shot at it.  Or just stick around and I'll explain what's going on here.

So, did it work for you?

Did you get this message?

Or did you get this message instead?

Now, I hope you don't mind if I don't show you my answer just yet.

First, I want to review functions in javascript.  Along the way you'll learn what this function is doing and why you may have gotten this 'ERROR: you forgot to submit a message' message.

So let's start with the basic syntax of functions.  I'll start off with a basic review, but I'll get into the more complicated stuff pretty quickly so, just bear with me if I repeat some stuff that you already know.  

[SC]
function doNothingReturnNothing(){

}


[VO]
We can declare a function with the function keyword, and we can add a name so that we can access that function later.

[SC]
const doNothingReturnNothing = function(){

}



Or, we can assign that function to a variable and access it later that way.



[SC]
const doNothingReturnNothing = () => {
    
}

We can also declare a function using arrow notation, and assign it to a variable.  Most often, in React, we'll use arrow notation.  



[VO]


The curly braces of a function denote the scope of the function. Variables declared inside that function scope are not available outside that scope.  There are some really neat and subtle details related to function scope in javascript, but for the most part you can just think about the scope of a function as being the curly braces of that function, which is generally the case.



[VO]

WE can also invoke a function in javascript


[SC]

const greetUser = (userName) => {
    console.log('hi there, ' + userName)
}


[VO]
 Functions can take one or more parameters as input arguments.

 So this function greetUser can take in a username and as you see, if I pass in a name like 'Sam', it logs a message to the console.

[SC]

const logMessage = (msg) => {
    console.log(msg)
}

const greetUser = (func, userName) => {
    func('hi there, ' + userName)
}


[VO]

And functions can also accept other functions as input parameters!

[SC]
MIND BLOWN EMOJI

[VO]

[SC]

const logMessage = (msg) => {
    console.log(msg)
}

const greetUser = (func, userName) => {
    func('hi there, ' + userName)
}
[VO]
So here we have a function that takes a function and a username in as input parameters and then uses that function to log a message to the console.

A function that gets passed in to another function and is then used in the other function is called a callback function and you'll be sseeing a lot of them in this course.

[SC]

[VO]
And this is probably a good time to mention that functions don't have to be named, they can also be anonymous.  Often times we will pass in an anonymous callback function, like I'm doing here.  It will do the same thing as the code in the last example, but in this case we just pass the function in as an anonymous callback function.








[SC]

const sum = (a,b) => {
return a + b
}

[VO]
Now, a very important aspect of functions is that they can also return a value, as in this function called sum, which takes in two parameters and adds them together.

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

And, if you're feeling a little overwhelmed at this point, I want to say, first of all, that's understandable.  Functions in javascript are very fun and very deep.  And second -- congratulatinos, you've almost made it through this pretty challenging look at functions.  And third -- pay attention now! -- because the answer to the original challenge question is right here.

Here we have a function that takes in some punctuation, and then uses that punctuation in the function that it returns.

So the return value of logMessage is a function.

We can store that function that gets returned in a variable, and log it to the console and see that it is indeed a function.

And I chose this name pretty carefully actually, because this technique in javascript is called partial application.

I can use this function, simply by invoking it, and passing in the message that it wants and you can see that the punctuation that we passed in before is now a part of that function.  Amazing, isn't it?  I love javascript, I really do.

And we can acheive the same output in one step, by first invoking logMessage and passing in the punctuation and then immmediately invoking the returned function and passing in a message.

 

[SC]
DOUBLE MIND BLOWN EMOJI
[VO]

[SC]
HIGHER ORDER FUNCTIONS
[VO]
When a function is returned from a function, or passed into a function as an input parameter, we call that a 'higher order function'. They can be a bit daunting at first but don't worry -- in this course and in your career as a React developer you'll get plenty of exposure to these ideas and, as with everything, with a little practice it will become second-nature.


[SC]

const logMessage = (msg) => console.log(msg)
const surprisedReaction = () => console.log('😲')
const smoothReaction = () => console.log('😎')

const saySomethingThenReact = (saySomething, reaction) => {
    return (msg='ERROR: you forgot to submit a message') => {
        saySomething(msg)
        reaction()
    }
}
[VO]

And now, I think we have all the knowledge we need to go back to the challenge at the beginning of this video.

If we look again at the function saySomethingThenReact, we can see that it return a function, which has a default parameter of that error message.  The say SomethingThen React function also accepts two functions as input parameters, and those functions are both invoked in the body of the returned function.

So to invoke this function we'll say 

saySomethingThenReact() and pass in first logMessage, and then surprisedReaction and then we will pass in our message, 'your phone number is contained somewhere in the digits of Pi'.  Which  by the way is true -- every possible sequence of numbers exists, somehwere in PI, because it's infinite in length.

And now, I recommend taking a little break and stretching those legs and arms a bit.  There was quite a bit of information in there, and I hope it was a little bit interesting for you.  IN the next video, we're going to build on this foundational knowledge and I'm going to talk a bit about functional javascript, and in particular a concept known as a pure function.  And I'll also discuss what a side effect is, and why we should be careful with them.  I'll see you there.








[SC]

const greetUser = (userName) => {
    const scopedGreeting = 'hi there, ';
    return scopedGreeting + userName;
}

[VO]


The curly braces of a function denote the scope of the function. Variables declared inside that function scope are not available outside that scope.  There are some really neat and subtle details related to function scope in javascript but for now we'll just think about the scope of a function as being the curly braces of that function, which is generally the case.

Here you can see that this function greetUser will take in a username and output a message that combines the greeting inside the function with a username.

So if we call greetUser('Sam') we get hi there, Sam.

[SC]

[VO]
Function scope is very important!  

Notice how if I try to console.log(scopedGreeting + 'Sam'), here outside of the function -- I can't access that variable, because it's scoped to the greetUser function.

This area outside of any function scope is called the global scope.  

As we'll learn in the next video when we talk about side effects, it's generally a good idea to avoid storing variables in the global scope.



