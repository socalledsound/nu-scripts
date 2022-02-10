React-W1-13-components and props

https://medium.com/@dan_abramov/react-components-elements-and-instances-90800811f8ca


---
##### SC
title : components and props

##### VO

Welcome back.

---
##### SC

show App.js

##### VO

In the last video we focused on the JSX in the return expression of this App function.  And I mentioned that, in React, functions like this one, functions that return JSX --  are called Components.


---
##### SC

Components are the basic building blocks of React applications

Props are values that we can pass in to components

##### VO

Components are the basic building blocks of React applications.

We can pass data in to components using props, which is an object containing values that we can use inside that component.

In this video, I'll show you how to use -- and how not to use -- props.

---
##### SC

focus outline around

<App />

##### VO
At the end of the last video, we looked again at how we invoke that App component in our index.js file, and we saw that we invoke it by writing it as a JSX element.

---
##### SCprops

<div className='myDiv' />

##### VO

And perhaps you remember that when we write JSX like this...
---
##### SC


{
    type: 'div',
    props: {
        className: 'myDiv',
    }

}

##### VO
 We are creating a React element, which is a lightweight version of an HTML element, a javascript object, with a type, and props.


---
##### SC

<App />

##### VO

Similarly, when we invoke our App copmonent in our jsx, like this 

---
##### SC

{
    type: 'App',
    props: {},
}


##### VO
we're creating a React element, but with a type of 'App'.

The components that we write, these functions that always return jsx, also always take in props.  
If we don't pass in any props, then the props will just be an empty object, but it will be there.


---
##### SC

React Components take in props and return jsx

##### VO
And in fact, these are the two things -- and really, the only two things that define a function component in React.

They are functions that take in props and return JSX.


---

##### SC

index.js 
focus outline around
<App />


##### VO
Even though we aren't passing anything called props into our App Component when we invoke it, if we go to our App.js file

---
##### SC

show this in the console:
in App.js bring in props 
add then console.log(props).


##### VO
and bring in props, and then log that value to the console, we can see that we get an empty object.

We don't get 'undefined', as you might expect.

---
##### SC

props are provided by React when we invoke a component

##### VO

This props object is provided by React to any Component that we invoke, using JSX.


---
##### SC

go to inedx.js

<App msg="thank you, friends" />

##### VO

Let's go back to index.js and add a key on our props object now.

I'm going to write a prop named msg and give it a value of 'thank you, friends'.




---
##### SC

go to app component

##### VO

Then, inside our App Component, we can use that prop.

In place of the text that we have there now, I'll write some curly braces -- remember, that's how we include javascript in jsx -- and then say props.msg between those curly braces.


---
##### SC
show browser with text
##### VO
And if we go to our browser, we can see that the new prop that I just supplied to my component is being rendered on the screen..

---
##### SC
show console
##### VO 
and if we check the console we can see that now our props object has a key named msg with the value we supplied.

---
##### SC

we can pass any type of javascript data in as a prop if we use curly braces

<App myProp={javascriptVariable}>


##### VO

We can also pass in javascript variables as props.  We just have to set the prop name equal to some curly braces and write the javascript variable name inside the curly bracces.  This means that the values we pass in as props can be object, or arrays or even functions.


---
##### SC

##### VO

There is, however, one catch with props.  They are read only.  

So, if I go into my App component and I try to modify the prop that I passed in... my app will break.

And this is actually a great thing!  Because it means that props are immutable, and React will prevent us from unwittingly generating unwanted side effects elsewhere in our application.

---
##### SC

Props
1. individual props are available inside a component as keys of the props object
2. using curly braces, we can pass javascript variables in as props
3. props are read only


##### VO

So, to review: 

1. individual props are available inside a component as keys of the props object
2. using curly braces, we can pass javascript variables in as props
3. props are read only

---
##### SC

Show web page at end of i heart jsx

##### VO
And now, let's get to work.  This stuff will make a lot more sense if we actually get in there and build something.

IN the next exercise, we're going to build the page you see now.  And of course we'll use props and components and jsx and....React to do it.

I'll see you there.




#  end

