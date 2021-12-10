[SC]
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[VO]
You're looking at the MDN page for the Array, which is a pretty definitive discussion of all of the characteristics of a javascript array.

On the left, you can see the properties and methods of the array, and in the middle of the page you can see a description.

[SC]
"The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects."
[VO]
And the very first thing in the description is this:

[SC]
The JavaScript Array class
[VO]
But what does this actually mean?

And more importantly, what's a class?

[SC]

    1) a class is a function that returns an object

[VO]
I could probably spend a dozen or more videos teaching you all about classes and object oriented programming in javascript, but, really, I can boil it down to just a few important things.

First, in javascript, classes are functions that return objects.

[SC]

    2) class-based components are a thing

[VO]
Second, in older React code, you will see a lot of classes, and if you're working with an older code base, or doing a google search for how to do something in React, you will probably come across class-based components.

[SC]

    3) class based components are (largely) a thing (of the past)

[VO]

However, since the introduction of react Hooks, class-based components have been all but eliminated.

So, when we start writing React components, I'll show you how to write class-based components, but we won't really use them much in the course.

[SC]
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[VO]
HOWEVER, that doesn't mean that javascript classes aren't important! Object oriented javascript is an important and powerful flavor of javascript and key aspects of the language are constructed using classes.

So, although we're going to favor the functional programming paradigm, which uses functions rather than classes and objects as the fundamental organizing principle, it's still important to understand what a class is and how to create and invoke one.

And, it will also really help us understand how these advanced array methods work, so, without further ado, let's dive into writing our own Array class.

[SC]
class SimplifiedArray {
constructor(){
this.length = 0
this.data = {}
}

    map(){

    }

    push(item){
        this.data[this.length] = item
        this.length++
    }

}

[VO]

A class definition starts with the class keyword. That's followed by the class name, which by convention starts with a capital letter.

So we'll start our Array class by writing class MyArray{}

[SC]

    class SimplifiedArray {
        constructor(length){
            this.length = length
            this.data = {}
            }
    }

[VO]
Most of the time, a class will also have a constructor function, which initializes the object that the class returns. That constructor can accept input parameters, and is also where we can initialize class properties, using the this keyword.

Here you can see that I'm initializing two properties this.length and this.data, and assigning an input parameter named length to

[SC]
const exampleArray = new SimplifiedArray(10)
console.log(exampleArray.length) // 10
console.log(exampleArray.data) // {}
[VO]
Now, I can create an instance of the MyArray class with a length of 10 by using the new keyword.

Then, I can access the properties of my class instance using dot notation, just like with any other object.

[SC]

    class SimplifiedArray {
        constructor(length){
        this.length = length
        this.data = {}
        }

        map(){

        }

        push(item){
            this.data[this.length] = item
            this.length++
        }

    }

[VO]
Classes can also have methods. So If I want to write a push method to add data to my NewArray, I can do so like this.

I'll declare a function named push inside the body of my MyArray class.

In that function I'll update my data object with a new key that will be the current length of and set it equal to the item that I'm adding, and then increment the length of the array.

As you can see, inside class methods, we access the properties of that class using the 'this' key word.

The this keyword is a way of acessing the properties and methods of a class, inside the class definition.

[SC]
const exampleArray = new SimplifiedArray(0)
const anotherExampleArray = new SimplifiedArrayy(10)
const yetAnotherArray = new SimplifiedArrayy(100)
[VO]

Now, the key thing to remember is that a class definition is like a blueprint. I can make a bunch of different SimplifiedArray instances.

[SC]
const exampleArray = new SimplifiedArray(0)
console.log(exampleArray.length) // 0
console.log(exampleArray.data) // {}
const anotherExampleArray = new SimplifiedArrayy(10)
console.log(anotherExampleArray.length) // 10
console.log(anotherExampleArray.data) // {}
const yetAnotherArray = new SimplifiedArrayy(100)
console.log(yetAnotherArray.length) // 100
console.log(yetAnotherArray.data) // {}

[VO]
And each one of them will have their own length and data properties.

[SC]

     class SimplifiedArray  {
        constructor(length){
        this.length = length
        this.data = {}
        }

        push(item){
            this.data[this.length] = item
            this.length++
            console.log(this.length)
             console.log(this.data)
        }

    }

[VO]
And when I use 'this' inside the class blueprint, it is the this inside of each of the class instances; it will

[SC]
const exampleArray = new SimplifiedArray(0)
exampleArray.push('hi')
// {0: 'hi'}
const anotherExampleArray = new SimplifiedArrayy(0)
anotherExampleArray.push('another example')
// {0: 'another example'}
const yetAnotherArray = new SimplifiedArrayy(0)
yetAnotherExampleArray.push('wow that could actually be kind of powerful')
// {0: 'wow that could actually be kind of powerful'}
[VO]
So if I console.log the data inside of the push method, then any time I run the push method on any instance of the SimplifiedArray class, it will log the length of THAT INSTANCE of the SimplifiedArray class.

[SC]

    class SimplifiedArray  {
        constructor(length){
        this.length = length
        this.data = {}
        }

       map(func){

        }

        push(item){
            this.data[this.length] = item
            this.length++
            console.log(this.length)
            console.log(this.data)
        }

    }

[VO]
Ok, so with the basic syntax of classes out of the way, let's do what we came here to do, whichis to understand how Array.map works.

And, honestly, I think it's pretty neat. So, we know that Array.map takes in a function, like this.

[SC]

    class SimplifiedArray {
        constructor(length){
        this.length = length
        this.data = {}
        }

        map(func){
            const newArr = []

            return newArr
        }

        push(item){
            this.data[this.length] = item
            this.length++
            console.log(this.length)
             console.log(this.data)
        }

    }

[VO]
And we know that it's going to return a new array, like this. I know, I know this is kind of cheating, to use an array, but I'm going to cheat, in the interest of keeping things more straightforward.

And this isn't a real implementation of map, it's oversimplified. But all the same, I think it might be instructive, and will clear up some of the confusion around how array.map actually works.

[SC]

        map(func){
            const newArr = []
              for(let i = 0; i < this.length; i++){
                  newArr[i] = func(newArr[i], i)
              }

            return newArr
        }

[VO]

And what we're going to do is,
