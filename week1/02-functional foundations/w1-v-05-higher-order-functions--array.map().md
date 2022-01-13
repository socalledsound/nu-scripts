https://css-tricks.com/an-illustrated-and-musical-guide-to-map-reduce-and-filter-array-methods/
https://dmitripavlutin.com/javascript-array-from-applications/
https://www.freecodecamp.org/news/array-map-explained-in-4-levels-of-difficulty/
https://dev.to/adnanbabakan/declarative-programming-with-javascript-2h97
react = mapping data into react elements


[SC]

[VO]
Welcome back.

In the last video I talked somewhat abstractly about some of the differences between declarative and imperative programming, and one of the key things that I mentioned was that imperative code is lower level, more step by step, while decalarative programming is higher level, and tends to abstract away the details.

And I mentioned that the key to doing this is generally, yep, functions.

But how does this work exactly?

In this video, I want to show you.

[SC]

const messages = [
    'how are you doing',
    'what are you up to',
    'would you like to get a bite later',
]

[VO]

S


I'm going to do it by coding an array transformation with you.  

const sweetMessages = [
        'how are you doing, sweetie?',
        'what are you up to, sweetie?',
        'would you like to get a bite later, sweetie?',
]


and we're going to transform it into an array of sweet messages, meaning we'll just add a comma and then the word sweetie and a question mark to each of them.

[SC]

[VO]
To do that, we're going to use the template literal syntax that you should be familiar with from the template literal code challenge that you've hopefully already completed.

[SC]


[VO]
But just by way of review, template literals in javascript allow us to mix strings with javascript variables using a very terse syntax.

Instead of wrappping the strings in either double or single quotes as we do a normal string, we wrap the expression in backticks, that key at the top left of your keyboard.

Then, inside the backticks, we can mix normal text with javascript.  The javascript part of the expression begins with a dollar sign and then two curly braces.  Inside those curly braces, we can include a javascript variable, or a function invocation, or any javascript that we want to include.


[SC]

[VO]

So, for instance, we can 


 one of my favorite examples of these ideas in action.

And while I do it, I will also give you what will be one of the most important tools in your functional declarative toolbelt.

You're going to use this a LOT in react, like, every day a lot.

So, let's get started.


[SC]

const messages = [
    'how are you doing',
    'what are you up to',
    'would you like to get a bite later',
]

[VO]
And I want to start with an array of messages.

Now, these messages are fine, but what if we want to make them just a little bit sweeter?

[SC]

const sweetMessages = [
        'how are you doing, sweetie?',
        'what are you up to, sweetie?',
        'would you like to get a bite later, sweetie?',
]


[VO]
What I want is a new group of messages, where each one ends with a ', sweetie' and then a question mark.

[SC]

[VO]
Now before we do this, I just want to say that while this might seem like a silly example, it's actually a pretty common thing that you want to do on a web site.

[SC]

const imageURLS = [
    'img/

]

<div>
    <img src=`${imageURLS[0]}`/>
</div>
<div>
    <img src=`${imageURLS[1]}`/>
</div>
<div>
    <img src=`${imageURLS[2]}`/>
</div>

[VO]
For instance, if you want to make a gallery of images -- you'll need to take some imageURLS and wrap them in some markup, so you can display them on the page.

But we'll get to that soon.


[SC]


[VO]
For now, let's focus on that original array, and I'm going to show you two different ways of creating the new array.  The first is an imperative approach.  I'm going to use a for loop.  So we'll start with the original array of messages and then write a for loop to iterate over the array of messages. 

SO something like




# enter the stuff here





That callback function is usually written as an arrow function and it can take from one to three parameters.

And each of these parameters is coming from the instance of an array that is....our array.  If that makes sense.

And the array will supply our callback function with those three parameters for each element in the array.

So, this first parameter, which I've named el here, will be available inside the body of the function.  That function will run for each element in the array, so the first time it runs it will log a, the second time it runs the value of el will be b, so b will be logged, and the third time, c.

This second parameter is also available in the function and it will bring the index of that particular element into the function, so the first time it will be 0 and then 1 and then 2.

The third parameter will always be the entire array.  As I said, I can vaguely imagine a few cases where that might be useful but I haven't ever used it.

The first parameter will be the contents of that element in the array.

The second parameter -- which is optional -- will be the index number of that element in the array.

And the third parameter, which is also optional and is rarely used, in fact I don't think I've ever used it -- is the entire array.

Those parameters are then available in the body of the callback function.

And I think it might help to look at an example of Array.map(), to help understand this.





[SC]


[VO]
And so we successfull accomplished our task in this highly imperative manner, and one of the hallmarks of imperative code is the use of a for loop, where we specify very explicitly the task that we want accomplished and the steps that it will take, which are directly a function of this counter variable that we wrote.


[SC]

[VO]
Now I want to do the same thing, declaratively, and then I'll talk about the differences.  

So to do it declataratively I'll just create a new constant named sweetMessages and set it equal to Array.map(), and into array.map I will pass a callback function. 

And this callback function will look like this.  It will be an inline arrow functino that takes in a paramter and returns a modified version of that parameter.  In this case, I'm going to call this parameter message and it's going to return the same template literal that I wrote inside the for loop a second ago.

[SC]
// inside array.map()
[VO]
Now, here's the neat part inside Array.map(),  there's a for loop, which iterates over the array, just like we did with our for loop a second ago, and it runs the callback function on each item in the array.  Does that make sense?  

And then the map method returns a new array, which will contain the updated versions of the old array.

[SC]

[VO]

And my final code looks like this: shorter, sweeter and less error prone, because I don't have to rewrite that for loop, I just use the one the array.map supplies.

Notice that the exact same imperative code is lurking under the surface, but it's been abstracted away by the map method.

[SC]

[VO]
I do want to add that advanced array methods like Array.map() are absolutely crucial and knowing them well is absolutely criticial to writing the ind of javascript that makes people want to hire you.


You'll get practice with several in this course.  In addition to Array.map(), we'll also get a lot of use out of Array.filter and Array.reduce, both of which will ebe introduced in a coming lesson.

But...all of the array methods are useful, and though we don't have time in this course for all of them, I recommend spending time learning them all.  You can find the full list of methods at MDN.

[SC]

[VO]
A





[SC]

    const doSomethingXTimes = (x, func) => {
        for(let i = 0; i < x; i++){
            func()
        }
    }

    const sayHi = () => {
        console.log('hi')
    }

    const beAmazed = () => {
        console.log('😲')
    }

    doSomethingXTimes(3, sayHi) // logs hi to the console three times
    doSomethingXTimes(3, beAmazed) // logs hi to the console three times

[VO]
And, functions can be the input parameters of another function! In other words, functions can be used inside other functions -- and we can pass them in just as we would a variable. So, here, we can write a function that executes any function that we pass in to it, three times.

The function that we pass in here is called a callback function, you have probably already seen them?

[SC]
element.addEventListener("click", () => { console.log("Hello World!")});
[VO]
For instance, when we create an eventListener in javascript, we pass in a callback function, which is used in the function that we pass it in to, when the specified event is triggered.

[SC]

[SC]

[VO]

And, remember how functions can be passed in as parameters? Well guess what? They can also be returned from other functions!

A function which either has a function as one of its arguments or returns a function is called a higher order function. They

This capability of functions allows us to use them in lots of interesting ways.

Again, notice how I can compose with functions, making

const addOne = (num) => num + 1

const myNumber = 10
const newNumber = addOne(myNumber) // 11

[VO]
At the other extreme, look at this javascript code. We have, first of all a function. It's a pure function and it's a pretty simple function: addOne. It takes in a number and adds one to it.
Now, I should say -- a benefit of imperative code is, it's very easy to see what's going on here, right?

[SC]

const addOne = (num) => num + 1

const numbers = [1,6,3,7]
const newNumbers = []

for(let i = 0; i < numbers.length; i++){
newNumbers[i] = addOne(numbers[i])
}

console.log(numbers)
console.log(newNumbers)

[VO]
And if I want to add one to every item in an array of numbers, and make a new array with the new numbers? I can use a for loop.

This is an imperative approach. It's very explicit and easy to read. But...for loops are also the biggest single source of errors in all of computer programming!

[SC]

const numbers = [1,6,3,7]
const newNumbers = numbers.map((num) => num + 1)
[VO]
And, at least in javascript -- thanks to it's support for higher order functions -- there's a better way.
