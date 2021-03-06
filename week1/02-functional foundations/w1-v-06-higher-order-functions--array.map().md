https://css-tricks.com/an-illustrated-and-musical-guide-to-map-reduce-and-filter-array-methods/
https://dmitripavlutin.com/javascript-array-from-applications/
https://www.freecodecamp.org/news/array-map-explained-in-4-levels-of-difficulty/
https://dev.to/adnanbabakan/declarative-programming-with-javascript-2h97
react = mapping data into react elements


[SC]

[VO]
Welcome back.

In the last video I talked somewhat abstractly about some of the differences between declarative and imperative programming, and one of the key things that I mentioned was that imperative code is lower level, more step by step, while decalarative programming is higher level, and tends to abstract away the details.

But how does this work exactly?

In this video, I want to show you.



To get started, we're going to be in the funcitonal foundations folder again, but this time we'll be in the 03-mapping-messages folder.


[SC]

const messages = [
    'how are you doing',
    'what are you up to',
    'would you like to get a bite later',
]

[VO]

What we're ging to do is code an array transformation.

We're going to take an array of messages and 

[SC]
const sweetMessages = [
        'how are you doing, sweetie?',
        'what are you up to, sweetie?',
        'would you like to get a bite later, sweetie?',
]

[VO]
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

So, for instance, wit our sweet messages, we can make a variable named sweetMessage and set that = to the backticks and then inside there we'll put a dollar sign and then the curly braces and inside the curly braces we'll say messages[0] to get the first element in that array


and then outside the curly braces we can say ',sweetie?'.


 

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
 
@3:20
# enter the stuff here





That callback function is usually written as an arrow function. That callback function will run for each element of the array and whatever gets returned from the callback function will replace the old contents of the array in the new array that gets returned.  And that's the mapping process, it's basically a conversion of an array of values into a new set of values.

Like, for instance, a conversion of an array of messages into an array of sweetMessages.


That function can take from one to three parameters.

And each of these parameters is coming from the instance of an array that is....our array.  If that makes sense.

And the array will supply our callback function with those three parameters for each element in the array.

So, this first parameter, which I've named el here, will be available inside the body of the function.  That function will run for each element in the array, so the first time it runs it will log a, the second time it runs the value of el will be b, so b will be logged, and the third time, c.

This second parameter is also available in the function and it will bring the index of that particular element into the function, so the first time it will be 0 and then 1 and then 2.

The third parameter will always be the entire array.  As I said, I can vaguely imagine a few cases where that might be useful but I haven't ever used it.

The first parameter will be the contents of that element in the array.

The second parameter -- which is optional -- will be the index number of that element in the array.

And the third parameter, which is also optional and is rarely used, in fact I don't think I've ever used it -- is the entire array.

Those parameters are then available in the body of the callback function.



Amd speaking of using it, let's use it now to map opver our array of messages and return an array of sweet messages.





#


#
SO that's a lot short, it's more succint and less prone to errors because we don't hjav



and that for loop is in the map method

so let's take a quick look at a simplified implementation of a map method.

Now in reality, this map method is part of a javascript class, but we haven't learned that syntax yet so I've written it as a kind of pseudo code, just to illustrate how that callback function works in the map method, because I think it kind of helps clear up the magical part of the map method.

And you can see that the map method takes in the callback function and invokes it inside the body of the for loop, passing in those parameters that are available to you when you call Array.map.

And, notice that that for loop is still there.

But since we've got this function named map, which comes with an API that explains what the function needs and what it does, we can skip writing that for loop ourselves.  And I think that's pretty nifty.

Now before we go, I do want to mention that Array.map() has a brother, who's kind of the black sheep in the family and so doesn't get talked about as much.  

And that brother is a method called Array.forEach(),  which is almost exactly like Array.map(), except that it doesn't return a new Array.

In fact, as you can see here, it doesn't return anything at all.

And if you've been doing your homework then I think you know what that means.  Array.forEach generates side effects.  And the reason that I'm mentioning this now is that it's actually kind of useful to use it in those situations where you want to generate a side effect, as a way of letting anyone who is reading your code base know both that a side effect is occuring and that you know a side effect is occurring.  
 
And this sort of distinction is exactly the type of quesiton that tends to come up in job interviews, as senior developers try to find out just how knowledgeable you really are about javascript, so it's a good thing to know and remember.

Now, go take a break. Congratulations on making it this far!  You've learned some hard stuff and you're just about ready to start coding in React.   

When you're done breaking, head over to the Array.map() challenge page.  You'll see there that there's also a challenge for Array.forEach().  Again, I can't recommend enough that you get comfortable with these methods and start using them in your own code.  They are going to be extremely useful in your React projects.

I'll see you in the next video.

<!-- In the next video, we'll review the role of the DOM in javascript.  The DOM is, basically how we can use javascript to make pretty pictures on web pages, so this course is about to get a lot more fun.  

I'll see you soon. -->








#














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
        console.log('????')
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
