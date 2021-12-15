## w1 - v7 - arrays --

[SC]
const user1 = {
name: 'Chris',
col: generateRandomColor(),
textSize: 2,
marginTop: 20
}

const user2 = {
name: 'Naomi',
col: generateRandomColor(),
textSize: 2,
marginTop: 5
}

const user3 = {
name: 'Zen',
col: generateRandomColor(),
textSize: 2,
marginTop: 5
}
[VO]

In the last video, we organized our program data into objects, which help us make our code a lot cleaner and easier to understand.

Now, it's time to take these very similar objects and organize them using a specific type of object, an array.

[SC]
const users = {
0 : {
name: 'Chris',
col: generateRandomColor(),
textSize: 2,
marginTop: 20
},
1: {
name: 'Naomi',
col: generateRandomColor(),
textSize: 2,
marginTop: 20
},
2: {
name: 'Zen',
col: generateRandomColor(),
textSize: 2,
marginTop: 20
},
}
[VO]
An array is basically just an object with sequentially numbered keys, something like this.

Now, this code works similar to an array but arrays aren't usually written like this, and it's not a good idea to write arrays like this.

[SC]

const users = [user1, user2, user 3]

[VO]
Usually, we write arrays inside square brackets, which is more concise and also communicates quite effectively that this is an array.

Also, if we declare our array as a proper array, javascript provides us with a number of useful array methods for manipulating arrays.

[SC]
const users = []
users.push(user1)
// [user1]
[VO]
You're probably familiar with array methods like push, which lets us add
[SC]
const users = [user1, user2]
users.pop()
// [user1]
[VO]
and array.pop() removes the last item in the array.

[SC]

[VO]
Array.slice()

[SC]

const numbers = [0,5,10]
const newNumbers = numbers.map(number => number \* 10)
// [0, 50, 100]

[VO]
In this video, I want to introduce you to an array method called .map(), which you will use again and again in React, any time you want to create multiple elements. It's incredibly useful, but also somewhat tricky, so really take your time with this one, and understand it well.

[SC]

    const numbers = [0, 5, 10]
    const newNumbers = numbers.map((number) => number + 1)
    //[1,6,11]

[VO]
Array.map() is a method that we can all on any array. It returns a new array, which is created by running each item in the array through a function that we supply, like this.

[SC]

numbers.map((number) => number + 1)

[VO]
Notice how we pass an arrow function in to the Array.map() method?

[SC]
numbers.map((item) => item + 1)
[VO]
We can call that argument anything we want; we just have to be sure to use the name that we supply in the body of our function.
Here, I've changed the name of the parameter to item, but it will work the same as before.

[SC]
numbers.map((item) => {
console.log(item)
return item + 1
})
[VO]
We can also pass in a more complex, multiline function, as long as we remember to return a value from the function.

[SC]
[VO]
const numbers = [0, 5, 10]
const newNumbers = numbers.map((number) => {
number + 1
})
//[undefined, undefined, undefined]

If we don't return anything from the function that we supply to Array.map(), then the value returned from the mapping function will be undefined.

[SC]

numbers.map((number) => number + 1)

[VO]

When I first saw this syntax, I was a little confused. Where does Array.map get the 'number' parameter from? If you want to actually see how this array method works, there's a video in 'extra material', where I actually show you how to create your own Array class, and we go through it step by step. But for now, let's just take a closer look at Array.map and make sure we understand what's going on here.

[SC]
numbers.map(myFunction)
[VO]
We've already learned that Array.map takes in a function and uses it to transform each element in the array.

[SC]

const arrayDotMap = (func) => {
const myArray = [0, 5, 10]
const newArray = []
for(i = 0; i < myArray.length; i++){
newArray[i] = func(myArray[i], i)
}
return newArray
}

[VO]
And this is how it works.

[SC]

    const addOne = (x) => x + 1
    const addOneAndAMutiplyByZero = (func, num) => func(num) * 0
    addOneAndAMutiplyByZero(addOne, 10)
    //0

[VO]
But can also be passed in to other functions as parameters.

[SC]
const mutliplyBy = (x) => (y) => x _ y
const multiplyByThree = multiplyBy(3)
// (y) => 3 _ y
[VO]
And functions can also be returned from other functions!

We can use this first class citizen status of javascript functions in all kinds of interesting ways.

[SC]
const modifyA = (func) => {
const a = 10
return func(a)
}

modifyA((x) => x + 1)

[VO]
Let's

[SC]

[VO]
Array.map is one of a number of really useful array methods that function in this way.
[SC]
[VO]

[SC]
[VO]

map = (function) => {
const arr = []
for(let i = 0; i < lengthOfArray; i++){
arrayData[i]
}

    return arr

}

It's a classic example -- perhaps the most classic example -- of 'declarative' programming in practice.

There are several useful Array methods that are 'higher order functions'.

Each of these Array methods takes in a function and performs an operation on each item in the array using that function.

[SC]
const numbers = [0, 5, 10]
const selectedNum = nums.filter((item) => item > 9)

[VO]

[SC]

[VO]
Remember how I described React in the first video?

[SC]
login page
[VO]
React encourages you to look at this interface and see not just a web page, but a collection of potentially re-usable components, which are organized into a web page.

For instance, we can see take even this simple login page and divide it up into smaller parts. There's going to be a div which contains a form, and then that form contains two text fields and a submit button.

[SC]
register page
[VO]

    And this register page is going to be very similar, except of course that it has a few more text fields.

[SC]

[VO]

What React encourages us to do, is to break
