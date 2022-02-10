[SC]
FUNCTIONAL JAVASCRIPT
[VO]

Welcome back.

In the last video, I talked about some of the big ideas of React, and made a big point out of the fact that React utilizes functional javascript.

So, in this first series of videos, we're going to make sure that you have a solid foundation in functional javascript, so that you'll be prepared to write React code, and really understand what you're writing.  

And that solid foundation starts here in this video, where we will make sure you know the things that you absolutely positively need to know about the weird and wonderful javascript function.  

But, before we get started, I want you to download the code for this first section of the course from the link down below on this exercise page that says 'functional foundations'.

After you download and unzip that file, open up that folder in vs code.  

You can see that there are several folders, one for each of the code exercises that we'll do in this first section of the course.

Click folder labeled '01-functions', then select the file named question.js.  And try not to peek at the one titled answer.js!  

In the question.js file you see a little code, a message variable and then a few functions.

Now, I want to start by saying -- if there's anything in here that's unfamiliar, don't fret.  In this video, we're going to review functions, and I'll explain all of the syntax here along the way.  


Functions are the absolute bread and butter of a javascript developer's life.  Javascript is among the handful of programming languages in which functions are first class citizens, meaning, they can be assigned to variables, and they can be both passed into and returned from other functions. 

Which is what's happening here, in that third function -- a function is being returned from another function.

Now here's my challenge for you.  Invoke the third function here, saySomethingAndReact in such a way that it logs first the message that you can see at the top of this page, and then a reaction, which you can generate by invoking one of the two reaction functions.  And you can decide whether you want to react with a surprised face or with sunglasses.  

Now, depending on your familiarity with javascript functions, this might be a bit of puzzle for you.  And, I hope you like puzzles!  Getting comfortable with that mental struggle, that process where you calmly wade through completely immaterial frustrations is a huge part of learning to code!

Learning to code is a lifelong process and there will never be a point where you know everything -- I've been coding in half a dozen languages for nearly thirty years and I still regularly come across things that I struggle to understand.  

And when I do, I actually get pretty excited!  Because things that I don't understand are opportunities to learn.

So if and when you come across things you don't understand, or things that you just can't figure out,  my recommendation to you is to breathe deeply...and give yourself the space to get comfortable with these new ideas, without judging yourself and without feeling anxiety about whether you're good at this, or not.  These things take time and effort but if you give yourself the space to learn and you work diligently at your goals, you will get to where you want to go.  And all of us here at nucamp will help you get there.

All right so, with that dharma talk complete, let's get to work. 

If you want to try solving this puzzle, you can run this code using the node interpreter, which you should have already installed.

To do that, first open up the terminal, and then you can check to see if you've got the node interpreter installed with node -v.  Hit enter and it should show you the version.  If it doesn't show you a version for node, go back to the installing node exercise that preceded this and install node.

If you do have a node version, then you can just type node question.js, hit enter, and see the result.

Now go ahead and pause the video now and take a shot at it.  Or, just stick around and I'll explain everything that's going on here.

So, did it work for you -- were you able to get both the message and the reaction to print to the console? 

If you were, then congratulations!

If not, don't fret, this coming video should clear things up and by the end of this video, you'll have mastered the concept here.  Which, by the way, is an example of a higher order function.

But let's start with the basics.    

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

A function that gets passed in to another function and is then used in the other function is called a callback function and you'll be seeing a lot of them in this course.

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

// store the return value of the function in a variable
const logConfused = logMessage('??!?') 

// value of the variable confused will be a FUNCTION
console.log(logConfused) 
logConfused('what the heck') // 'what the heck??!?'

const logExcited = logMessage('!!!!!') 

logExcited('actually this is pretty cool') // 'this is pretty cool!!!!!'

logMessage('??!?')('what the heck') // logs 'what the heck??!?'
logMessage('!!!!!')('this is pretty cool') // logs 'this is pretty cool!!!!!'

[VO]

And functions can also return other functions!  


So here we have a function named LogMessage that takes in some punctuation, and then uses that punctuation in the function that it returns.

So the return value of the logMessage function is... a FUNCTION.

MIND BLOWN EMOJI

[SC]
HIGHER ORDER FUNCTIONS
[VO]
And, I want to just pause here to point out that right here, we are coming to the answer to the challenge question that started this video, which means....this video is almost over.  ANd I bet that you're not unhappy about that, this has been a pretty long video.  

And I want to repeat what I said at the beginning of this video -- that when a function is returned from a function, or passed into a function as an input parameter, then we call that a 'higher order function'. 

These usages can be a bit daunting at first but don't worry -- in this course and in your career as a React developer you'll get plenty of exposure to these ideas and, as with everything, with a little practice it will become second-nature.  Just remember to breathe deeply and give yourself the time and space to get good at this stuff and, trust me, you will.


So back to this example.
 

You can see that we can store the function that gets returned from logMessage in a variable, and log it to the console and see that it is indeed a function.

And I'll just open up my terminal here and run it and...yep.  A function.

And we can also invoke the function that we just stored in that variable, and pass in the message that that function wants in its input parameter up here and, we get the message along with the punctuation that is stored in that function.

Make sense?

And what I want you to notice is that this 'logMessage' function is written in a way that allows us to convert it into a more specific type of function.... or, actually, into a wide variety of more specific functions, as you can see in the next lines, where we have a logExcited function, which passes in a series of exclamation marks instead.

And then, below that, you see that we can acheive the same output in one step, by first invoking logMessage and passing in the punctuation and then immmediately invoking the returned function and passing in a message.

If you hadn't already noticed, all of these code examples are in the file called function.js that's in the same folder as the original challenge question.  You can play with this example and the various outputs that are possible if you want to.

<!-- Now, the technical term for this kind of thing is called partial application, and it's just one of the many wonders of functional programming in javascript that await you!

And I hope that excites you!  Wrapping your brain around this stuff takes time, but it's also pretty fun once you get the hang of it. -->




[SC]

// challenge
const message = 'your phone number is contained somewhere in the digits of Pi'

const surprisedReaction = () => console.log('😲')
const smoothReaction = () => console.log('😎')

const saySomethingAndReact = (msg='you forgot to submit a message') => {
    console.log(msg)
    return (reaction) => {    
        reaction()
    }
}

// add the inputs here
saySomethingAndReact()
[VO]

And now, I think we have all the knowledge we need to go back to the challenge at the beginning of this video and tackle it.

If we look again at the function saySomethingAndReact, we can see that it returns a function.  

And by the way, this saySomethingAndReact has a default parameter, so if I invoke it without passing anything in, it will return that error message, as you can see. 

To properly invoke this function we'll say saySomethingThenReact() and pass in the message, and then pass the surprisedReaction function in to the function that gets returned.  And we can see that the function that I pass in will get returned inside THAT function....so, it all works out.

And now, I recommend taking a little break and stretching those legs and arms a bit.  There was quite a bit of information in there, and I hope it was a little bit interesting for you.  

Oh and by the way.....if there's any math nerds out there, then you'll know that thing about pi containing your phone number is really true, since it's infinite.  

And there's a pretty fun video linked at the bottom of this exercise page called 'Are shakespeare's plays encoded within pi?' that has some fun with that idea -- it might be a fun way to take a break of you want to get away from javascript for a minute.
https://www.youtube.com/watch?v=uXoh6vi6J5U


And when you're ready to learn some more about functions, head over to the next video, where we'll build on what we learned here and talk about one of the key ingredients of functional programming, the concept of a PURE function.  And I'll also discuss what a side effect is, and why we should be careful with them.  I'll see you there.



## end




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



