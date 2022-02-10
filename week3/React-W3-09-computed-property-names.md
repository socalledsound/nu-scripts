
Minae script - using it here as discussed with Jevon

JavaScript: ES6 Computed Property Names and Spread Syntax

Computed property names and the spread syntax are both new to JavaScript in ES6. Though they are presented here in a single lesson, and they both involve working with objects, they are two separate concepts. I will first discuss computed property names.

Computed property names allow you to pass in variables for use as property names when initializing an object.

Let's look at an example in the console. Please follow along with me and type in the same commands yourself. We'll start by declaring a variable, myProperty, and storing a string inside it.
Then we'll declare an object, myObject, and we'll give it a property. For the property identifier, we'll use square braces, then that variable we declared earlier. And we'll give it a value.
Now if we look inside myObject, you can see that the property identifier was created using the string stored in myProperty. 

const myProperty = "foo";
const myObject = { [myProperty]: "This is a test" }

So you can see how computed property names allow you to create objects more dynamically. You may have some code to create an object that doesn't know in advance what its property names will be, and will create them from variables that are passed to it. 

JavaScript Spread syntax


The JavaScript spread syntax can be used with both arrays in objects. In both cases, they allow you to pull out a copy of what's inside the array or object. While there are various reasons to need to do this, in this course, it will be so that we can create new arrays and objects. Later, you will see how this can be used in Redux. 

For example, here's an example with arrays. Let's say you have two arrays:
const landVehicles = ["sedan", "truck", "van"]
const waterVehicles = ["canoe", "sailboat", "submarine"]
And you want to combine them together into a new array. You can do that like this, using the spread syntax, which is these ellipses, the sets of three dots;  - so here, the items inside of these two arrays are spread out, then recombined into a new array by putting square brackets around both of these to create the new array. 
const vehicles = [...landVehicles , ...boatTypes];
And it doesn't always have to be two arrays. It could be an array and a string that you want to add to the array:
const moreLandVehicles = [...landVehicles, "tank"];
In fact, you could spread and recombine multiple arrays, along with any other kind of data that you can normally store in an array:
const mixNMatch = [...landVehicles, "banana", 3, 100, { someObjProperty: "someObjPropertyValue" }, ...waterVehicles]
As you can see, the contents of the two spread arrays were inserted into this new array along with the other string, number, and object items. 
We can also use the spread syntax with objects, and it gives us a very easy way to take multiple objects and combine them together. 

For example, let's say we have two objects:
const objOne = { color: "blue", height: 12 }
const objTwo = { material: "ceramic", width: 6 }
What the spread syntax does is pull out the key-value pairs of these objects, using three dots,   so that you can recombine them into a new object, like this:
const objOneAndTwoCombined = { ...objOne, ...objTwo }

What if you try to combine two objects that have properties in common? For example:
const objThree = { color: "red", width: 7 }
Remember objOne? Let's combine objOne and objThree together using the spread syntax:
const objOneAndThreeCombined= { ...objOne, ...objThree }
objOneAndThreeCombined - so you can see that the color of objThree overwrote the color of objOne.

The only reason it did that is because of the order in which they were combined. If we switched them:
const objThreeAndOneCombined = { ...objThree, objOne }
Then here, you can see that the color of objOne overwrote the color of objThree. 

You can also use the spread syntax to create a new object from an existing object, while updating one or more of its properties:
const objOneUpdatedHeight = { ...objOne, height: 300}
You see here, we spread out the properties from objOne, then updated the height, and put it all together into a new object, objOneUpdatedHeight. 

You will encounter both computed property names and the spread syntax in this week of your React course, and hopefully this has prepared you to do so. 

