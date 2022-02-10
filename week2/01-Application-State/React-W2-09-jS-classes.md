React-W2-10-jS-class-syntax

---
unresolved questions:

    - should i get into the whole prototypal inheritance discussion?
    - is this too long?   it's hard to tell, there's a lot of code in here 
    - should I do a rough record and check it?  or make the video and edit from there? 
    -- it's obv a complex topic
    - do we want to put the code from this video (User-> AnonymousSpecialUser) into the gh repo?

---


##### SC

Javascript Class Syntax



##### VO

Welcome back. 

---


##### SC

class User {

}

##### VO

In this video, I want to review the class syntax in javascript.

The class syntax is a relatively new language feature in javascript, which was added with ecmascript in an attempt to give javascript developers a more elegant syntax for creating classes.


---


##### SC
asnimate in second line of text

What is a class?

A class is a blueprint for constructing objects which are instances of that class.

##### VO
But, first of all, if you don't already know, you may find yourself wondering -- what actually is a class?

In javascript and in many other programming languages, a class is a blueprint for constructing objects, which are instances of that class.


---


##### SC

slide that shows the mold for a figuring on one side and several figurines each with a different colors on the other side


##### VO

Using a class definition we can create distinct versions of something, like casting a figurine from a mold.  Each of those versions might have different colors, but they would have the same fundamental characteristics.


---

##### SC


grapic showing User on left
and
user1 { id, displayName, email, password }
user2 { id, displayName, email, password }
user3 { id, displayName, email, password }
user4 { id, displayName, email, password }
objects on right

##### VO

And similarly, we can use molds like this, or, if you prefer, class definitions, to crank out versions of a data strcture, like for instance, a User.

As you can see here, each of the users that we make using a User class will be objects that have an id, a displayName, an associated email, and a password, but the values that each of those objects have will be distinct from one another.

---

##### SC

Object Oriented Programming 


##### VO
Classes, and the objects that they create, are the key building blocks of the object oriented programming paradigm.


---

##### SC

focus outline on each as it is announced

left side:
Object Oriented Programming  
    code re-usability
    encapsulation of data
    compose complex structures from simple ones


right side:
Functional Programming
    code reusability
    encapsulation of data
    compose complex structures from simple ones


##### VO
The Object Oriented approach offers us many benefits as we think about how to structure our programs and its been widely used to write software in many languages over many years.

It is often contrasted with the functional programming paradigm that we've already discussed, but actually, the two have a lot in common.

Both of these paradigms are available to us in javascript and they are both incredibly useful.

Each of them offers us a way to re-use code, and each offers us a way to encapsulate data, so that it's not available outside of its local scope.

And each paradigm offers us the ability to begin with simple, composable units that we can then use to build more complex structures.

So, while many out there on the internetz will take one side or another, there really isn't any need to. 

Both of these paradigms are incredibly useful tools to have in your tool belt.  

---

##### SC

focus outline on inheritance

left side:
Object Oriented Programming  
    code re-usability
    encapsulation of data
    compose complex structures from simple ones
    INHERITANCE


right side:
Functional Programming
    code reusability
    encapsulation of data
    compose complex structures from simple ones


##### VO

But, there is one major place where these paradigms differ, and it can be summed up with a simple word : inheritance.

And it's really with this word, or idea, that the two paradigms part ways.

This simple word, and the program structures that it enables, are at the root of React's switch from class-based components to function components/

But to understand what inheritance is, and why -- like side effects --  we should generally avoid or at least be very careful with it -- we'll first have to explore classes and the class syntax in javascript.

---

##### SC


##### VO



##### SC

class User {

}


##### VO
In javascript, we define a class using the class keyword.  By convention, class names are capitalized.  So to define a User class, we can say class User, and then write some curly braces. 

---


##### SC
class User {
    constructor(){

    }
}

##### VO
Inside the body of our class definition, we can add methods that belong to that class.  The constructor method is a special method for creating and initializing the object that will be returned by a class definition.  


And if we don't explicitly add the constructor method, javascript will automatically assign one if we don't, because....the whole point of classes is to construct instances of that class.


---


##### SC

focus on 
1. the input parameters
2. the this assignments

class User {
    constructor(id, displayName, email, password){
        this.id = id;
        this.displayName = displayName;
        this.email = email;
        this.passwrod = password;
    }
}

##### VO

Remember?  Classes are blueprints that are used to create objects, which are INSTANCES of that class.

Let's do that now.

1. We can add input parameters to our constructor function, just as we would to any other function.

And then we can 

2. assign those input parameters to properties of the object using the 'this' keyword. 

The 'this' keyowrd is an important and sometimes frustrating our confusing idea in javascript, with certain nuances that we'll touch on in a minute.  For now, just not that we can use it to assign input parameters to properties and let's use this User class to make some users.


---


##### SC

const user1 = new User(01948, 'sam', 'toggle@bits.edu', '******');


##### VO

And we can create an instance of a class using the new keyword, which we can assign to a variable, if we want to.

So I'll just create a const named user1 and set it equal to new User() and then pass in the data that I know that User class wants, an id, a displayName, an email and a password.


---
##### SC
const user1 = new User(1948, 'sam', 'toggle@bits.edu', '******');
const user2 = new User(2938, 'lucky', 'something@aol.com', 'hello$MOM');
const user3 = new User(33092, 'someone', 'hello@hotmail.com', '@@Ysha');
const user4 = new User(998372, 'scripter', 'admin@google.info', 'ohboy345');

##### VO
And then each time I want to create a new instance of a User, I can invoke that class using the new keyword and pass in the data that I want to associate with that instance of a User.



---


##### SC

focus on logInfo method

log info is a method of the User class

class User {
    constructor(id, displayName, email, password){
        this.id = id;
        this.displayName = displayName;
        this.email = email;
        this.password = password;
    }

    logInfo(){
        console.log('id: ', this.id);
        console.log('displayName: ', this.displayName);
        console.log('email: ', this.email);
    }



}

##### VO
We can also add methods to a class, functions that belong to that class.  Here you can see that I've written a logInfo method that will log the id, displayname and email associated with a user.

Notice that I'm using the this keyword before each of the properties that I want to log to the console.


---


##### SC

user1.logInfo();
// logs:
// id:  1948
// displayName:  sam
// email:  toggle@bits.edu
user2.logInfo();
// logs:
// id:  2938
// displayName:  lucky
// email:  something@aol.com
user3.logInfo();
// logs:
// id:  33092
// displayName:  someone
// email:  hello@hotmail.com
user4.logInfo();  
// logs:
// id:  998372
// displayName:  scripter
// email:  admin@google.info

##### VO

Then, I can call the logInfo method for each of my previously created users and log their specific info.
---


##### SC

class User {
    constructor(id, displayName, email, password){
        this.id = id;
        this.displayName = displayName;
        this.email = email;
        this.password = password;
    }

    logInfo(){
        console.log('id: ', this.id);
        console.log('displayName: ', this.displayName);
        console.log('email: ', this.email);
    }

    logThis(){
        console.log('this is this');
        console.log(this);
    }

}
##### VO

Now, let's try a little experiment, and play with that 'this' keyword a little bit.

We'll make a new method called logThis, that will log this for a User.

And, just for kicks, we'll add a little message inside there that will run when we invoke that function.

---


##### SC

user1.logThis();

##### VO

And then invoke it and we see that
---


##### SC


##### VO

The 'this' of user 1 is a User with the properties that we've previously set.

Notice that there are no methods shown here, which is a little bit interesting.

---


##### SC

const newScope = (cb) => {
    cb()
}

##### VO
Now let's get just a teensy bit tricky.  We'll create a new function called newScope, which will just be an arrow function that takes in a callback function as cb and then invokes it, in the body of that function.  And I'm calling it new scope, because what  we're doing here is effectively defining a new scope for the callback function that we pass in.

This question of scope and this is very, very somewhat tricky in javascript, but I'm going to try to simplify it and only present to you the key salient detail that you need to take away, so bear with me.


---


##### SC

newScope(user1.logThis);



##### VO

If we invoke newScope and pass in user1.logThis as a callback function, it will invoke user1.logThis...

---


##### SC


this is this
undefined


##### VO


and we see that first message but then it fails to find 'this'.  And this is a potentially cataclysmic problem, actually.

--- 

##### SC

newScope(user1.logInfo);

##### VO

Let's try loggin user1's info from inside this new scope.  

---


##### SC


/Users/ck/Desktop/User/User.js:12
        console.log('id: ', this.id);
                                 ^

TypeError: Cannot read properties of undefined (reading 'id')
    at logInfo (/Users/ck/Desktop/User/User.js:12:34)
    at newScope (/Users/ck/Desktop/User/User.js:53:5)
    at Object.<anonymous> (/Users/ck/Desktop/User/User.js:58:1)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47


##### VO


Again, undefined.  This this stuff is enough to make me cry.  Sam has disappeared from my application and it just crashed.

Inside the scope of our 

And the reason why this is such an important problem in javascript is because it isn't a rare occurence -- it happens ALL THE TIME.  

---


##### SC
const CampsitesPage = () => {
    
    const [campsiteID, selectCampsiteID] = useState(0);
    const selectedCampsite = selectCampsiteById(campsiteID);
   
    return (
        <Container>
            <Row>
                <Col md="7" sm="5">
                    <CampsitesList selectCampsiteID={selectCampsiteID}/>
                </Col>
                <Col md="5" sm="7">
                    <CampsiteDetail campsite={selectedCampsite}/>
                </Col>
            </Row>
        </Container>
    );
}


##### VO
In fact, we've already written code which could provoke this kind of error if we were using class-based components.

Remember our CampsitePage?

We pass a function named selectCampsiteID in to another function named CampsitesList, in other words, we pass it into a new scope.

And in fact, this sort of error often creeps up anywhere that classes and event handlers are comingled....so it's a pretty common problem, in an interactive website.

---


##### SC

focus outline around the bindings!

class User {
    constructor(id, displayName, email, password){
        this.id = id;
        this.displayName = displayName;
        this.email = email;
        this.password = password;
        this.logInfo = this.logInfo.bind(this);
        this.logThis = this.logThis.bind(this);
    }

    logInfo(){
        console.log('id: ', this.id);
        console.log('displayName: ', this.displayName);
        console.log('email: ', this.email);
    }

    logThis(){
        console.log('this is this');
        console.log(this);
    }

}



##### VO
But the very good news is that, if you're aware of this potential problem, it doesn't have to end as an argument against using classes in javascript, because we have two possible solutions to this 'this' problem.

And the first is to 'bind' the method to our class.

We can add these methods to our constructor, and BIND them to this this.  Boy that's a mouthful.  But, it works.


---


##### SC

User {
  id: 1948,
  displayName: 'sam',
  email: 'toggle@bits.edu',
  password: '******',
  logInfo: [Function: bound logInfo],
  logThis: [Function: bound logThis]
}

##### VO
And now if we run the code, we get the expected output, because the this has not changed -- the logThis and logInfo methods are bound to their original scope.

And additionally, we can see that in addition to the properties that we had already added to this this, this this now has two functions, or methods, that are bound to it.

---


##### SC

class User {
    constructor(id, displayName, email, password){
        this.id = id;
        this.displayName = displayName;
        this.email = email;
        this.password = password;
    }

    logInfo = () => {
        console.log('id: ', this.id);
        console.log('displayName: ', this.displayName);
        console.log('email: ', this.email);
    }

    logThis = () => {
        console.log('this is this');
        console.log(this);
    }

}

##### VO
And the even better news is that, since arrow functions were introduced, we have an even easier way to handle this this business.  

We can simply declare these methods as arrow functions, because arrow functions ALWAYS STAY BOUND TO THE SCOPE IN WHICH THEY WERE DEFINED.  This is a huge deal, as you can tell by how clearly I enunciated that.

So if I rewrite these methods as arrow functions and eliminate the bindings, we can see that...

---


##### SC
User {
  logInfo: [Function: logInfo],
  logThis: [Function: logThis],
  id: 1948,
  displayName: 'sam',
  email: 'toggle@bits.edu',
  password: '******'
}
##### VO
 sure enough, the code works flawlessly.  And you may also notice that those methods are no longer bound functions, but they are registered as methods of this class, in fact, even before the constructor function runs.  



---


##### SC
 And the very important moral to this somewhat lengthy sidetrack is --  when in doubt, always, always, always write your click handlers in class based React components as arrow functions!  And you will save yourself much heartache.

##### VO


---


##### SC

Inheritance: allows a child class to inherit properties and methods from a parent class

##### VO

Now I wish I could say that we're done with class syntax in javascript, I really do, but we've got one more big notion to cover and that notion is inheritance.

Remember, from the beginning of this video?  The thing that we should always avoid?  Well, let me be the bad uncle for a minute and show you how to smoke.  

Let's talk about inheritance.


---


##### SC

Inheritance: allows a child class to inherit properties and methods from a parent class

diagram with parent and children


##### VO
Inheritance is the ability for a child to inherit all of the properties and methods of a parent class.  Typically we'd want to do this to extend the parent class in a specific way.


---


##### SC

focus outline at the appropriate places

class AnonymousSpecialUser extends User {
    constructor(id, displayName, email, password){
        super(id, displayName, email, password);
        this.displayName = 'anonymous';
    }

    logSpecial(){
        console.log('i am very special, by the way');
    }
}

##### VO

And, fittingly enough, when we want a child class to inherit from a parent class, we will use the extends keyword.

So here, I'm writing a class called AnonymousSpecialUser that extends the User class.

Just like before, we bring in the id, displayName, email and password.  

Then, we use the super() method, which refers to the parent class, to rubber stamp all of those this assignments from the parent class.  

But, after the super assignment, I'm re-assigning the value of this.displayName to be anonymous, becuase this is an AnonymousSpecialUser.  And, I'm adding a method named logSpecial, which will serve to re-affirm that this user is very special indeed.


---


##### SC
const user5 = new AnonymousSpecialUser(1948, 'sam', 'toggle@bits.edu', '******');
user5.logThis();
user5.logSpecial();

##### VO
Now if we create a new AnonymousSpecialUser and pass in the data from user1, we can first call logThis -- which our AnonymousSpecialUser inherited from its parent class -- and also it's new special method, which should log our new special message to the console.  



---


##### SC
AnonymousSpecialUser {
  logInfo: [Function: logInfo],
  logThis: [Function: logThis],
  id: 1948,
  displayName: 'anonymous',
  email: 'toggle@bits.edu',
  password: '******'
}
i am very special, by the way

##### VO
And sure enough, our displayName is now 'anonymous', and this user has access to the special method that we just added. 


---


##### SC
user3.logSpecial();
##### VO
And by the way if we try to run this new special method on a non-special user, like user3 for instance....

---


##### SC
TypeError: user3.logSpecial is not a function
##### VO
We see that logSpecial is not a function, because user3 is not an AnonymousSpecialUser.

---


##### SC

a class is a blueprint for manufacturing objects.




##### VO

So, we've seen how we can use a class to create a blueprint for manufacturing objects.

---

##### SC

the resulting objects are members of that class:

they have the same properties and methods

##### VO
The resulting objects are members of that class, and share the same properties and methods

---

##### SC

each class member encapsulates their own values for those properties and methods


##### VO
but each class member contains -- or ENCAPSULATES -- their own unique values for those properties and methods.


---


##### SC

class User {
    constructor(id, displayName, email, password){
        this.id = id;
        this.displayName = displayName;
        this.email = email;
        this.password = password;
    }

    logInfo = () => {
        console.log('id: ', this.id);
        console.log('displayName: ', this.displayName);
        console.log('email: ', this.email);
    }

    logThis = () => {
        console.log('this is this');
        console.log(this);
    }

}


##### VO
As we saw with the User class....




---


##### SC

we can use 'this' to refer to a property or method within the scope of that specific class member.

focus outline on this

class User {
    constructor(id, displayName, email, password){
        this.id = id;
        this.displayName = displayName;
        this.email = email;
        this.password = password;
    }

    logInfo = () => {
        console.log('id: ', this.id);
        console.log('displayName: ', this.displayName);
        console.log('email: ', this.email);
    }

    logThis = () => {
        console.log('this is this');
        console.log(this);
    }

}

##### VO
We can use the this keyword to refer to a property or method within the scope of that specific class member.

---


##### SC

focus outline on extends

class AnonymousSpecialUser extends User {
    constructor(id, displayName, email, password){
        super(id, displayName, email, password);
        this.displayName = 'anonymous';
    }

    logSpecial(){
        console.log('i am very special, by the way');
    }
}



##### VO
And we can use the keyword extends to create a child-- or subclass -- of a class.  



---


##### SC

child classes can inherit properties and methods

parent => child

show User on one side and AnonymousSpecialUser on the other side

##### VO
A parent class can have more or one children, which inherit the methods and properties of its parent class.



---


##### SC
it would be nice to make a diagram that showed a parent and then nested children, similar to a DOM tree


##### VO
And those children can have children, which inherit from their parents and from their parents parents parents.



---

##### SC

highlight on changing on element

##### VO
But, what happens when we need to implement a change the code in this sub-class right here, which is a child of this class and a parent of this one here?

Maybe, nothing.  Or maybe.....this whole structure collapses into one big mess.

It will all depend on how much and in what ways the children or subclasses depend on the parent classes.


---

##### SC

'brittle' code is a byproduct of tightly coupled classes

##### VO

This has been the source of endless bugs and wasted hours in the world of programming over many years.  

When we use object oriented programming to create subclasses which depend on their parents, we create code that is tightly coupled, or brittle -- and susceptible to breaking.


---

##### SC

always favor composition over inheritance

##### VO

So they key thing to remember -- and this is true whether you're using an object-oriented style or a functional style -- is that you should always favor composition over inheritance. 

Small, re-usable pieces of code which can be combined to form larger structures are infinitely less brittle than the dependent children that the use of inheritance fosters.

---

##### SC

class MyComponent extends React.Component {

}

##### VO

Now, having said this....guess what?  To create a class-based component in React, we'll be using....the 'extends' keyword, to extend a base component class that is a module in the React library.

In other words, our class based component will be a child of React.Component and....we will be wading into the waters of inheritcnace.

Sounds fun, right?  

In the next video, let's talk about this.

We'll focus this discussion of composition and inheritance through the lens of React, learn a little more about program state and how best to manage it, and take a look at the similarities and differences between function components and class-based ones.

I'll see you there.



### end


---

##### SC


##### VO

Now, if you remember, at the beginning of this video I mentioned that 

---

##### SC

Inheritance

##### VO

This paradigm, that of inheritance, has been a useful -- and also an extremely 'abuseful' -- paradigm in programming over the last
fifty years.  

OR IF YOU PREFER

Inheritance is an extremely powerful tool but one that can be abused.




---


##### SC

Inheritance vs Composition

    


##### VO

This notion of inheritance has been a very important -- and controversial -- one in object oriented programming for many years now.

In fact, at the start of this video, when I said that classes are a controversial topic among javascript developers and among React developers,
really what I meant is that INHERITANCE, and its role in object oriented programming, is controversial.  

It's a powerful programming technique that offers numerous advantages -- but it's also a technique

---


##### SC


##### VO

But inheritance can also be tremendously useful.  




But before we look at those disadvantages



promotes code reusability


It's one method that programmers use to structure programs, and it does offer the very obvious advantage of promoting code reuse -- it can reduce code redundancy.

It can also be a way to ensure that the subclasses of a parent class follow a standard interface.

And finally his idea of classing and subclassing, facilitates the creations of libraries, in other words, collections of pieces of code that can access shared functionality via an API .


---


##### SC
class MyComponent extends React.Component {

}


##### VO
And in fact, the whole reason that we're here talking about classes is that React is just such a library.  And originally, the only way to use React was to write something like this.



---


##### SC



##### VO

Inheritance is one method that programmers use to 





# edit this stuff below


So, we've seen now how we can use a class to create a blueprint for manufacturing objects.



But now the bad news.  Remember at the beginning of this video when I said that classes in javascript were one of the most contentious topics in all of developer land?  Well this is the simple reason: inheritance.  Or, more specifically, the role that inheritance has historically played in the development of software.

Even, I should say, in the development of React.

But inheritance is problematic as a concept, mostly because it leads to tightly coupled pieces of software.

This AnonymousSpecialUser class that we just wrote is anonymous and special, but it is also entirely dependent upon the User class, and any changes that I make in the User class will be reflected in its child class.  This is not good.

---

##### SC

Inheritance vs Composition

##### VO

In the next video, we'll explore why, and we'll also explore the alternative approach, which is to compose our software from small, independent entities that generally try to do one thing and do it well, but can be combined into larger and more sophisticate entities.  Sound familiar?  Yes, that's right, it's all of the ideas that we've already been using, from the very beginning of this course.


---

##### SC

##### VO

We'll also take a closer look at how React has historically used class-based components, compare class components and function components and also look at some of the reasons why the React world has moved so forcefully away from class components, in favor of function components and hooks.

I'll see you there.


# end


 And, until the emergence and wide acceptance of hooks, the class syntax was much discussed -- and often times maligned -- among React developers.


---


##### SC

Class Component in React:

show

    class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
    }

from
https://reactjs.org/docs/components-and-props.html


##### VO


Even today, although Hooks are widely accepted and function components have become the defacto standard for writing React components, you're very likely to come across class-based React components in old code bases....or even in the React documentation, as you can see here on the components and props page in the react documentation.

And, whether we like the class-based syntax or not, the simple truth is that there are a lot of class based components out there in old code bases, so the chances are high that you'll encounter that syntax at some point, if you haven't already.

So, we want to make sure that you're comfortable with it, and comfortable writing components in either syntax, and converting components from one syntax to another.


At the end of this video, after you've learned what inheritance is, we'll discuss



---

##### SC

inheritance can lead to tight coupling

tightly coupled code is difficult to debug 
tightly coupled code is difficutly to modify
tightly coupled code is not re-usable


##### VO

This word, and the program structures that it enables, can be tremendously useful but they can also lead to code that is tightly coupled -- where

---

##### SC


always favor composition over inheritance

##### VO

But object oriented programming is so much more than inheritance and, really, the main thing to remember is to always favor composition over inheritance.  In this, functional programming and object oriented programming are completely aligned.   

We'll talk more about this idea soon, and see how we can favor composition over inheritcance in React.  

 But in order to really understand it, we'll have to explore the class syntax in javascript first.

---