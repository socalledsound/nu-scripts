https://css-tricks.com/an-illustrated-and-musical-guide-to-map-reduce-and-filter-array-methods/

[SC]

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
