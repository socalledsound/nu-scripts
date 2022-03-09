React-W1-04-pure-functions-side-effects

---

##### SC

pure functions and side effects

##### VO


Welcome back.

---


##### SC
 


##### VO

In the last video we reviewed functions and their role as the vital building blocks of javascript.  Using functions we can seperate out and name pieces of code, 



And, as we saw in the last video, we can also combine these functions in various ways to compose larger blocks of code.

---


##### SC

##### VO

In the functional programming paradigm, this is called 'composing with functions', and it's a general principle that I think is pretty intuitive and easy to understand.  We start with small atomic structures, and then we use techniques like the ones we used in the last video to build larger processes.

---


##### SC

Pure Function:
a function which will always return the same value for identical inputs
and
doesn't produce any side effects


##### VO

Where possible, we also try to make sure that these functions are 'pure' functions. 

And I can hear you saying...ok....so what's a pure function?

A pure function is a function which, for identical inputs will always return the same values, and doesn't produce any side effects.


---


##### SC

const createSpecialMessage = (name) => {
    const message = ', you are so special!!!'
    return name + message
} 



##### VO

Which, I know, is a pretty classic example of a definition that asks more questions than it answers, so let's unpack that definition.

To do that, let's start with an example of a very pure function.

Here you can see, we've got a function called createSpecialMessage, which takes in a name and concatenates it with a message.  And, this way, whoever belongs to the name that we pass in can feel just a little bit special.

It's a pure function becuase if we pass in the name 'Sam', a message letting Sam know that they are special will always be returned.

And that's because everything that transforms this input value is contained within the scope of this function -- it doesn't refer to anything outside of its own scope.


---


##### SC

the scope of a function is denoted by its curly braces

focus outline around the curly braces


const specialMessage = (name) => {
    const message = ', you are so special!!';
    return name + message
} 

console.log(specialMessage('Sam'));


##### VO

Remember function scope, from the last video?

The SCOPE of a function is defined by the curly braces which enclose the body of that function.

And variables defined within the scope of that function are only accessible within that function's scope.

Which means that the content of this message can only be modified inside of this function.



---


##### SC

const messages = {
    specialMessage: ', you are so special!!!',
    lameMessage: ', you are soooo lame.',
}

const mutateMessage = () => {
    message.specialMessage = messages.lameMessage;
     return message
}



const specialMessage = (name) => {
    const message = messages.specialMessage;
    return name + message
} 

mutateMessage();
console.log(specialMessage('Sam'));


##### VO

But what if we rewrite this a bit, so that the value of our message variable refers to another variable that exists outside the scope of our specialMessage function?

This function is no longer pure, because the value of message.specialMessage can change.

And here you can see that we do in fact change it, using a function called mutateMessage, which changes the value of messages.specialMessage so that it is in fact a lame message.

And, in the console, we see that Sam is no longer 'special', but instead, 'sooooo lame.'.  

Poor Sam!



---

##### SC

const messages = {
    specialMessage: ', you are so special!!!',
    lameMessage: ', you are soooo lame.',
}

const mutateMessage = () => {
    message.specialMessage = messages.lameMessage;
    return message
}

##### VO

And this thing that mutateMessage does here -- by changing, or mutating the value of some data that exists outside of it's scope -- this is what we call a 'side effect'.



---


##### SC

A side effect occurs any time a function changes something outside of it's own scope.

A function that produces a side effect is not a pure function.

##### VO


A side effect occurs any time a function changes something outside of it's own scope.

And a function that produces a side effect is not a pure function.

---


##### SC

Examples of Side Effects:


##### VO

Now, I want to be clear about one thing: side effects are inevitable in programming.

Any time we log something to the console, or render something to the screen using DOM manipulation, or take in some user input....those are all classic examples of side effects.

Building an interactive web site is an absolute minefield of potential side effects.

---


##### SC

Avoid or Contain side effects
Favor the use of pure functions where possible
Do not mutate data


##### VO

But what we always strive to do is to keep our side effects contained, in known side effect generating functions.

And, where possible, we strive to create pure functions.  

And above all, we strive to avoid mutating data, as we did in this example.



---


##### SC

React enforces good functional programming habits by tightly controlling our use of side effects

##### VO

As we'll soon see, React is written with these principles in mind.

The React library is designed to tightly control our use of side effects.  Those side effects are inevitable, but, in the way that the React library is structured and in the ways that it forces us to write code, React helps us manage those side effects and keeps us out of trouble.


### end

<!-- ---


##### SC


##### VO



---


##### SC


##### VO




In the last video we explored functions in javascript, and if you recall I mentioned that functions in javascript are what we call 'first class citizens'.  Which means that functions can be assigned to variables, be passed into other functions like any other parameter, and also be returned from other functions.

We've already seen a 

As we've seen, these capabilities of functions allow us to compose more elaborate structures from other functions.

[SC]

[VO]




These capabilities are super useful for structuring code.  

We've already seen a few fairly simple examples of 



Functions help us structure programs and reduce repetition and they also give us a way to usefully name blocks of code. 

So, if we think about a program or a piece of software as a process, functions are ways to take a process and break it into discrete parts.

If we want to put together a meal, for instance, there are actually a lot of different things that we need to do.  

We probably need to chop up some garlic and onions and sautee them, and we'll probably also need to cut up some veggies or maybe some chicken to throw in that pan.

And I hope you can see where I'm going with that, this process of cutting stuff up is already being applied in several different contexts, so it's probably a good idea to think about writing a function that involves knives.  

And as you've already seen, we'll probably be able to write this knife weilding function in such a way that it can be flexibly transformed to suit the finely minced garlic that we'll want and also the more robust slices of say red pepper that we'll be adding to this meal.






And if you recall I mentioned that functions in javascript are first class citizens.  This means that functions can be assigned to variables, be passed into other functions like any other parameter, and also be returned from other functions.

And it also means that javascript is very capable as a functional programming language, because functional programming is a style of programming in which we compose software using....functions.

In functional programming, the goal is to compose software using functions.  



write small and specific functions which can be combined to create larger functions.  There's no hierarchical structure, as you sometimes find in class-based approaches, but instead just...functions

In React,  we use functions -- which we call components -- to create and update small and specific user interface elements, like a button or a list item, which we call components, and then we combine those components -- which are functions -- together to build a web page or an app.
 

 -->
