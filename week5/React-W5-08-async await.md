
--- 

##### SC

async/await

##### VO

Welcome back.

--- 

##### SC

Promises may be
    pending
    fulfilled
    rejected


##### VO

In the last video, you were introduced to Promises, those speculative objects that let us plan for the future by creating the logic to handle a variety of possible outcomes. 

Perhaps the most important thing to always remember about Promises is that they may exist in one of three possible states.  They may be pending, fulfilled, or rejected.  

And hopefully you remember that Promises were a language feature that were introduced to make it easier to keep track of what the current state of an ansychronous event is.


--- 

##### SC

async await

##### VO

IN this video, I want to introduce you to the async await syntax, which provides us with some syntactic sugar for handling promise-based code.

But first, I want to make sure that you understand really understand Promises, so you can better see the problem that async await helps us solve.


--- 

##### SC


focus outline follows text


    const pauseThenLog = pause => new Promise((resolve, reject) => {
        if(pause){
            setTimeout(() => resolve(`I just paused for ${pause} milliseconds`), pause);
        }else{
            reject('no pause was specified')
        }
    })



##### VO

So let's look at an example of a some promise based code.

Often, a Promise is returned by a function.  Like for instance this function here, pauseThenLog, which takes in a specified amount of time to wait, and then returns a promise.

Every promise takes in a callback function, which in turn has access to resolve and reject methods, which we can use in the body of that callback function if we want to.

Here, we'll check and see if a pause was specified and then if there was, we'll call setTimeout, wait for the specified pause, and then let the user know how long the pause was.

If there is no pause, we call the reject method and pass in a message.


--- 

##### SC


show this with node.js

    const pauseThenLog = pause => new Promise((resolve, reject) => {
        if(pause){
            setTimeout(() => resolve(`I just paused for ${pause} milliseconds`), pause);
        } else {
            reject('no pause was specified');
        }
    
        })

    console.log(pauseThenLog(5000));
     // Promise { pending }



##### VO

Now, since pauseThenLog returns a promise, we should be able to log the return value of that function and see that it's a Promise....which is exactly what we see, a Promise with the status of pending.

--- 

##### SC

show this with node.js

    const pauseThenLog = pause => new Promise((resolve, reject) => {
        if(pause){
            setTimeout(() => resolve(`I just paused for ${pause} milliseconds`), pause);
        } else {
            reject('no pause was specified');
        }
    
        })


    console.log( pauseThenLog(5000).then());
    // Promise { pending }

    

##### VO


Now, since the return value of this function is a promise, it will have a then method - which also returns a promise!  And you can see here that if I invoke pauseThenLog and it's then method, yep, it's another promise with a pending state.   And that's suchh an important thing to remember about promises -- the then method is also a function that returns a promise!   Which is why they are chainable -- because every promise has access to the then method.

--- 

##### SC

console.log(pauseThenLog(1000).then().then().then())
// Promise { <pending> }

##### VO

So if I do something silly like log .then.then.then.then....it's still a promise, and it always will be.


--- 

##### SC

setTimeout(() => resolve(`I just paused for ${pause} milliseconds`), pause);

##### VO

Now, if I want to actually log the message that gets passed in to my resolve method....

--- 

##### SC

focus arrow follows text

    const pauseThenLog = pause => new Promise((resolve, reject) => {
        if(pause){
            setTimeout(() => resolve(`I just paused for ${pause} milliseconds`), pause);
        } else {
            reject('no pause was specified');
        }
    
        })

 pauseThenLog(5000)
     .then( msg => console.log(msg))
     .catch( msg => console.lcog(msg))

##### VO

I can do that in the then method of my promise, by just passing in a callback function, that takes in that message and then logs it to the console.  In this instance you can see that pause has a value and that value gets logged inside the message.


--- 

##### SC



    const pauseThenLog = pause => new Promise((resolve, reject) => {
        if(pause){
             console.log('hold on a sec')
            setTimeout(() => resolve(`I just paused for ${pause} milliseconds`), pause);
        } else {
            reject('no pause was specified');
        }
    
        })

 pauseThenLog()
     .then( msg => console.log(msg))
     .catch( msg => console.log(msg))

##### VO

And similarly, the .catch method will have access to what I've passed in to the reject method.  So if there is no pause value passed in, then the else block runs and the catch method receives the message from reject.




--- 

##### SC


pauseThenLog(1000)
    .then(val => console.log(val))
    .then(() => console.log('last'))
    .catch(err => console.log(err))


##### VO

Now, if we want to add some action that runs after the initial promise completes, we can do it in a chained then, like this.  Here you can see that the 'last' message is logged after the setTimeout has completed.



--- 

##### SC

    pauseThenLog(1000)
        .then(val => {
            console.log(val)
            return `last after ${val}`
        })
        .then((msg) => console.log(msg))
        .catch(err => console.log(err))

##### VO

Or, we can return the message from our previous then statement and bring it in to the callback function and then log it.

But honestly, this is a little weird, isn't it?  If we have some sort of complex process that needs to wait for previous events to complete before the next one is initiated, this can turn into a bit of a mess, particularly if we want to stay on top of any failed processes as we go along.

SO, while this promise-based syntax is infinitely better than the callback hell that it replaced, it can still get pretty messy as a bunch of thens and catches get chained onto each other.


--- 

##### SC


const pauseThenLog = pause => new Promise((resolve, reject) => { 
    if(pause){
        setTimeout(() => resolve(`I just paused for ${pause} milliseconds`), pause);
    }else{
        reject('no pause was specified')
    }
    })



const runMessages = async (val) => {

}




##### VO

And that's where the async await syntax comes in.  

We can declare an async function with the async keyword.

We use them as wrappers for Promise based code, to help us consume Promises, without all of those thens and catches.

So here' below the promise that we've already been looking at, I've got an async function runMessages.

In this async function, I'm going to specify a process that will run around the promise-based function that we've already looked at.

--- 

##### SC

focus arrow follows text, run code and show the process with text

const pauseThenLog = pause => new Promise((resolve, reject) => { 
    if(pause){
        setTimeout(() => resolve(`I just paused for ${pause} milliseconds`), pause);
    }else{
        reject('no pause was specified')
    }
    })



const runMessages = async (val) => {
    console.log('running....);
    await pauseThenLog(val);
    console.log(`you just waited ${val} milliseconds)

}




##### VO

The first thing we do is let the user know that the process was begin.  

But the really neat thing about async functions is the await keyword.

If I write the await keyword before my call to pauseThenLog, then my code will pause on this await line until the promise resolves.

So if I add a console.log after the await, you can see that it waited those three seconds.


--- 

##### SC

pauseThenLog(1000)
    .then(val => {
        console.log(val);
    })
    .catch(err => console.log(err))

##### VO


BUt, of course before, with our then, we were logging the result of this promise, right?



--- 

##### SC



focus arrow follows text, run code and show the process with text

const pauseThenLog = pause => new Promise((resolve, reject) => { 
    if(pause){
        setTimeout(() => resolve(`I just paused for ${pause} milliseconds`), pause);
    }else{
        reject('no pause was specified')
    }
    })



const runMessages = async (val) => {
    console.log('running....);
    const response = await pauseThenLog(val);
    console.log(response);
    console.log(`you just waited ${val} milliseconds)

}




##### VO

A neat thing about the async await syntax, is that we can store the return value of a promise in a variable.  So I can store the completion value of the promise in a variable and log that.



--- 

##### SC

    const runMessages = async (val) => {
        console.log('running....');
        try{
            const response = await pauseThenLog(val);
            console.log(response);
            console.log(`you waited for ${val} milliseconds`);
        } catch(err){
            console.log(err)
        }

    }


##### VO

IN order to handle errors in an async function, we typically wrap our Promise in a try/catch block, as you see here.  So now, if reject is called, then the catch block will receive that error and log it to the console.


--- 

##### SC


    pauseThenLog(1000)
        .then(val => {
            console.log(val)
            return `last after ${val}`
        })
        .then((msg) => console.log(msg))
        .catch(err => console.log(err))





    const runMessages = async (val) => {
        console.log('running....');
        try{
            const response = await pauseThenLog(val);
            console.log(response);
            console.log(`you waited for ${val} milliseconds`);
        } catch(err){
            console.log(err)
        }

    }



##### VO

And here you can see both codes side by side.  On the left, consuming a promise without the async function wrapper around it and on the right, the async function.  As you can see, async await doesn't really save us any lines of code, but, at least to me eye, it does read a little more cleanly and it's easier to understand the overall process.  

Async await is pretty new and is by no means mandatory, but it's a good syntax to know about, and you'll be seeing it later this week as we start to work with data fetching in our react application.  