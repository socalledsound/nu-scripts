React-W2-10-jS-class

MyArray example here

// filter takes an array and function as argumentfunction filter(arr, filterFunc) {    const filterArr = []; // empty array        // loop though array    for(let i=0;i<arr.length;i++) {        const result = filterFunc(arr[i], i, arr);        // push the current element if result is true        if(result)             filterArr.push(arr[i]);     }    return filterArr;}

---


##### SC

##### VO

Welcome back.  

---


##### SC


##### VO
In the last video, you learned about class components, and some of the ways that they're similar to and also different from function components.

You also learned that, since the introduction of hooks, there's really no need to use class-based components.

We won't be using any class based components in our nucampsite.

But, since Hooks are pretty new, there's a very decent chance that you will encounter class based components in your career as a React developer, so it's probably a good idea to learn that syntax.

Also, although React Components are no longer in wide use, there are still some good use cases for classes in javascript!

Now, classes and the object-oriented style of programming with which they are associated are a pretty big and somewhat controversial topic, and well worth exploring.  

But in this video, we're going to focus on teaching you only what you need to know to understand how React's class-based components work.

So, let's take a look at the class syntax in javascript.  

And in the next video, we'll create a class based version of our CampsitesPage component, to give you some exposure to that syntax.




---

##### SC

a javascript class is a blueprint for creating objects

##### VO

Classes in javscript are, essentially, functions that define the blueprint for constructing objects.




---

##### SC

class User

##### VO

For example, we could create a User class.

We'll start with the keyword class and then


---

##### SC


##### VO

But rather than talking in hypotheticals, why don't we look at a real

So, for instance, if we know that we're going to have a User have a have a bunch of users that we want to keep track of, create an 

We can create a class using the class keyword.  By convention, we always start the name of a class with a capital letter.

We define the class between some curly braces, like this.  This class doesn't have a definition yet, but we can log it to the console and see that, yep, it's a Class.

And if we console.log(typeof MyClass) we'll see that, sure enough... MyClass is a function.  


---


##### SC

class MyClass {
    


}

##### VO




---


##### SC

##### VO


---


##### SC

##### VO
---
##### SC

class User {

}


##### VO

One helpful way to use classes in your code is as a way to help manage data in your app.

For instance, if we need to create a new user in our app, we might first make a User class. 


--- 

##### SC

##### VO

Remember last week, when we talked about Array.map() and I mentioned that Array.map was a method of the Array class, and we looked 


---


##### SC
class User {
    constructor(){
        
    }
}
##### VO


All classes have, by definition, access to something called a constructor method.




---


##### SC

##### VO

---


##### SC

##### VO

---


##### SC

##### VO

---


##### SC

##### VO

---


##### SC

##### VO

---


##### SC

##### VO
