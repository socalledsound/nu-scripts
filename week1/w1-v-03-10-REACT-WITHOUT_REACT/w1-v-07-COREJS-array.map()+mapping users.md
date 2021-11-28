## w1 - v7 - arrays and immutability

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

But we can do even better by taking these very similar objects and putting them into an array.

[SC]

const users = [
{
name: 'Chris',
col: generateRandomColor(),
textSize: 2,
marginTop: 20
},
{
name: 'Naomi',
col: generateRandomColor(),
textSize: 2,
marginTop: 5
},
{
name: 'Zen',
col: generateRandomColor(),
textSize: 2,
marginTop: 5
}
]

[VO]
More often than not, the data in a React app will be structured just like this.

Objects give us a way to organize multiple related keys into a single entity, and Arrays give us an extendable space in which to store those objects.

[SC]
MDN Array page
[VO]
And perhaps most importantly, arrays give us a large and incredibly useful set of methods for working with collections of data.

You can see all of those methods here on the left of the MDN page devoted to the Array.

If you want to become a superstar javascript developer, the absolute best first step you can take is to learn all of these methods and learn them well.

Throughout this course, we'll get to learn and use a number of these methods.

[SC]

[VO]
But here in this video, I'm going to focus on just one: Array.map(), which you will use again and again in React, any time you want to create multiple elements. It's incredibly useful, but also somewhat tricky, so really take your time with this one, and understand it well.

[SC]

    const numbers = [0, 5, 10]
    const newNumbers = numbers.map((number) => number + 1)
    //[1,6,11]

[VO]
Array.map() is a method that we can all on any array. It's a non-mutating array method, which means that it returns a new array, rather than changing the original array. The new array is created by running each item in the array through a function that we supply, like this.

Notice how we pass an arrow function in to the Array.map() method? The input parameter of that function comes from the arrow itself.

[SC]

    const numbers = [0, 5, 10]
    const newNumbers = numbers.map((item, index) => item + index)
    //[0,6,12]

[VO]
We can also optionally get the index of the current item, and use that in our function body as well, like this.

[SC]

    const numbers = [0, 5, 10]
    numbers.map((item, currentIdx) => item + currentIdx)
    //[0,6,12]

[VO]
We can call that inpout parameters anything we want; we just have to be sure to use the name that we supply in the body of our function.
Here, I've changed the name of the parameter to item, and idx to currentIdx, but it will work the same as before.

[SC]
numbers.map((item, index) => {
console.log(item, index)
return item + index
})
[VO]
And, we can also pass in a more complex, multiline function, as long as we remember to return a value from the function.

[SC]
[VO]
const numbers = [0, 5, 10]
const newNumbers = numbers.map((number) => {
number + 1
})
//[undefined, undefined, undefined]

If we don't return anything from the function that we supply to Array.map(), then the value returned from the mapping function will be undefined.

[SC]

const newNumbers = numbers.map((number, idx) => number + idx)

[VO]

Now, In order to use this method, and the other methods like it that we'll learn soon, all you really need to know is this syntax. But, if you want to learn more about how Array.map() works,
I've made an extra optional video at the end of this unit in which we implement our own Array class and build Array.map() from scratch.

But first, let's get a little practice with mapping an array.

[SC]

[VO]

which

in order to really understand what's going on here, and to understand why we call this array method a 'higher order function', in the next video I'd like to show you how to implement your own Array class, complete with a map method. I'll see you there.

And

And I think that a lot of people feel that way when they encounter these 'higher order' array methods for the first time.

[SC]

[VO]

To help you understand this better, I want to

[SC]
[VO]

[SC]
[VO]

[SC]
[VO]

If you want to actually see how this array method works, there's a video in 'extra material', where I actually show you how to create your own Array class, and we go through it step by step. But for now, let's just take a closer look at Array.map and make sure we understand what's going on here.

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

.

[SC]

[VO]

[SC]

    IMMUTABLE

[VO]

In functional programming generally, and in react specifically, we're particularly concerned with IMMUTABLE array methods.

[SC]
const vs let
[VO]

Remember how I said that we wanted to default to declaring all of our variables with const instead of let?

And remember how I said that the reason for that was so that we would know if the value of our variable was being changed?

And I said that in functional programming, we always want to avoid mutating our data.

[SC]

const ten = 10

const eleven = ten + 1

[VO]

If we want to derive a new value for a constant variable, we can create a new variable.

Let's say we have a variable named 10. And we want to add 1 to it.

As you can see here....if we add 1 to 10....we really should think about renaming the variable.

Amd since this variable was declared as a constant, we HAVE to change the variable name in order to update the variable!

[SC]

[VO]
And this is also true of our Arrays. In functional programming and in React, we always want to make sure that we avoid mutating our array data. Which means, when we change an array, we want to make a new copy of it.

const was 'immutable'? In other words, it won't change.

You probably already know Array.push(), which lets us add an item to an array.

[SC]

[VO]
And maybe you know Array.slice(), which returns a new Array, composed of the elements

[SC]

[VO]

But in this video, I want to focus on a set of Array methods which are 'higher order functions'. You'll use these methods a lot in React code.

A higher order function is a function which either takes in a function as a parameter and does something with it, or has a function as its return value.

[SC]

[VO]

So, with an array method like Array.filter(), we pass in a function, take each element in the array, and evaluate it using that function.

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
