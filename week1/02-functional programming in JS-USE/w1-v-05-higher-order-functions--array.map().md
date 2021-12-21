https://css-tricks.com/an-illustrated-and-musical-guide-to-map-reduce-and-filter-array-methods/
https://dmitripavlutin.com/javascript-array-from-applications/
https://www.freecodecamp.org/news/array-map-explained-in-4-levels-of-difficulty/
https://dev.to/adnanbabakan/declarative-programming-with-javascript-2h97
react = mapping data into react elements

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
