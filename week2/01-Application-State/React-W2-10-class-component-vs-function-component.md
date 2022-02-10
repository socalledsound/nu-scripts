React-W2-10-class-component-vs-function-component


---

##### SC

class components vs function components

##### VO
Welcome back.
---


##### SC

class MyComponent extends React.Component {

}

##### VO
In the last video, we talked a little bit about object oriented programming and you learned the class syntax in javascript.

In this video, I want to explore class-based components in React, and compare them to the function components that you know and love.

--- 
##### SC

https://reactjs.org/docs/components-and-props.html

##### VO

And I want to be by saying that while React is not overtly opinionated on the question of whether we should use class-based components or not, the React team encourages the use of function components over class based components.   The vast majority of developers agree, and there is really no need to write class-based components at this point in time.  

We won't be incorporating any into the nucampsite that we're building.

But, all the same, it's very likely that you will encounter class-based React components in your career, or out there on the internets....or even, as you can see here, in the documentation for React.

So it's important that you learn this syntax, and are able to not only write components using this syntax, but understand the advantages and disadvantages of this syntax and get comfortable converting class based components into function components and vice versa.

And, although many would have us choose either a functional style of programming or a class-based object oriented style, there's a place for both in our toolkit.


---


##### SC

show the page with the two buttons.  



##### VO

Here, you can see a function component and a class based component.  They're exactly the same in the web browser.

They both have the same text that says click me and shows the current value of 'toggled'.

And if I click on either of them, the value of toggled changes.

So that's the first thing to know about function components and class components:  at the end of the day, what they produce is generally pretty much exactly the same.


---


##### SC

two components side by side one is function, the other class
    not super important to be able to read it, this is more for a comparison of size
    later, we'll switch to showing one at a time

function left side -- 

import { useState } from 'react';

const SimpleButtonFC = ({text}) => {
    
    const [ toggled, setToggled ] = useState(false);

    return (
        <div className='example'
            onClick={() => setToggled(!toggled)}
        >
            <p>{text} </p>
            -----
            <p>{`toggled: ${toggled}`}</p> 
        </div>
    )
}

export default SimpleButtonFC

RIGHT SIDE:

import { Component } from 'react';

class SimpleButtonCC extends Component {

    constructor(props){
        super(props);
        this.state = {
            toggled: false,
        }
    }

    setToggled = () => {
        const { toggled } = this.state;  
        this.setState({toggled: !toggled});
    }

    render(){
        const { text } = this.props;
        const { toggled } = this.state;
        return (
            <div className='example'
               onClick={this.setToggled}
            >
            <p>{text} </p>
            -----
            <p>{`toggled: ${toggled}`}</p> 
        </div>
        )
    }

}

export default SimpleButtonCC



##### VO

Where we can start to see the differences, of course, is if we look at the code that was used to generate these buttons.

Here, you're looking at a pretty straightforward function component on the left, and a class-based version of that component on the right.

The two components render exactly the same thing, which is that button that says click me, and has a clickHandler attached to it that changes the value of toggled.

And the first thing that you will no doubt notice is that the function component is shorter.  Like, a lot shorter.  

In fact, it's about half as long as the class component.

There are a few things we can do to make the class component a little bit shorter but....this is, basically, always going to be true.

Function components are shorter and easier to write, and, I think, easier to read, too.

And then the other obvious difference is that one is an arrow function, while the other is a class definition that extends a base React.Component class that we import at the top.

---


##### SC

focus outline around return statements of those components


##### VO
And then the other thing that you might notice is that both of these components return jsx which is almost identical -- although they do so a little bit differently.

Do you see how the return statement of the class-based component is inside a render method?  

Every class based component must have a render method and it must return some valid jsx.  

Also, that render method always takes in props, but in a class component, those aren't just any old props, those are THIS.props.

We'll take a closer look at that render method in a second.

---

##### SC
function App() {
  return (
    <div className="App">
        <SimpleButtonFC text="click me "/>
        <SimpleButtonCC text="click me "/>
    </div>
  );
}

##### VO
But first, let's notice that, we pass those props in in identical fashion for both function components and class based components.

---


##### SC
focus arrow as we go down the list

FUNCTION        vs      CLASS
less code               more code
function                sub class of React.Component
returns jsx             render method returns jsx
takes in props          takes in props
props                   this.props             

##### VO

So, let's just look at how these components compare, so far.

1. We know that function components almost always take less code to do the same thing.

2. Function components are regular javascript functions, whereas class components are sub classes of React.Component, so we need to import React.Component and then extend it to create our Component.

3. Function components directly return jsx while class based components have a render method that returns jsx

4. THey both take in props, in identical fashion.

5. But, in a function component those props are available directly as an object named props, while in a class based components that props object is called 'this.props'.

Let's take a closer look at the class-based version now.

---


##### SC
import { Component } from 'react';

class SimpleButtonCC extends Component {

    constructor(props){
        super(props);
        this.state = {
            toggled: false,
        }
    }

    setToggled = () => {
        const { toggled } = this.state;  
        this.setState({toggled: !toggled});
    }

    render(){
        const { text } = this.props;
        const { toggled } = this.state;
        return (
            <div className='example'
                onClick={this.setToggled}
            >
            <p>{text} </p>
            -----
            <p>{`toggled: ${toggled}`}</p> 
        </div>
        )
    }

}

export default SimpleButtonCC



##### VO


First of all, we see that, at the top, we start by importing the Component module from React.

Then, when we declare our class definition, and we use the extends keyword to extend that base class.

Now, we already know that one of the defining characteristics of a React component is that it always takes in props....but this is a class, not a function,
so we bring those in those props in our constructor method, and then we use the super() keyword because we're extending the base Component class and actually bringing in it's props.

And then, inside our constructor, we also initialize a state object.  This state object will be exclusive to this component, so, inside this class definition, we'll always refer to it with the this keyword.

Here, I'm initializing a key on that state object, which will be 'toggled', and I'm initializing it to false.

---


##### SC

    constructor(props){
        super(props);
        this.state = {
            toggled: false,
            initText: props.text,
        }
    }


##### VO
Inside the constructor function -- and only inside the constructor function, we also have access to this component's props directly.

Outside of the constructor function, they are always this.props, but inside the constructor, we can just call props, because props are what get passed in to this constructor function.

So here you can see that I'm making another key on the state object and I'm setting it equal to the value of props.text.

---


##### SC


    // constructor(props){
    //     super(props);
    //     this.state = {
    //         toggled: false,
    //         initText: props.text,
    //     }
    // }
    state = {
        toggled: false,
        initText: this.props.text,
    }


##### VO
But generally, this constructor function can be omitted.  Remember, if we don't write a constructor, javascript will just supply one.

The only really important thing that we're doing in this constructor at this point is defining the this.state object, anyway, so we can just delete this constructor and write state as an object....which we can then refer to as this.state.

SO now, this class definition is still big and bulky, but it's not quite as bad.

And there's one kind of nifty and nerdy thing to notice here -- even though we haven't invoked a constructor function and haven't called super on the props values, we still have access to this.props.  React is supplying them from outside the instance when we invoke it.

But also notice, we ONLY have access to this.props --  and not just 'props',  -- outside the constructor function.

---


##### SC


    render(){
        const { text } = this.props;
        const { toggled, initText } = this.state;
        console.log(initText);
        return (
            <div className='example'
                onClick={this.setToggled}
            >
            <p>{text} </p>
            -----
            <p>{`toggled: ${toggled}`}</p> 
        </div>
        )
    }


##### VO
Now let's take a closer look at the render method.

IN the render method, we have access to both this.props and this.state, each of which are object with keys that we can destructure.

And generally this is a good idea, to make the code more readable.

So the first thing we do in our render method is destructure the text key off of this.props and then destructure both toggled and initText off of state.

This initText value isn't really useful in this case, it's just an example to show that we can pull props off and store them in state if we want to.  And, as you can see, if I log it to the console, it's all working -- we pulled the text value off of this.props and stored it in this.state.

I'll delete that now to get it out of the way.

---


##### SC

    render(){
        const { text } = this.props;
        const { toggled } = this.state;
        return (
            <div className='example'
                onClick={this.setToggled}
            >
            <p>{text} </p>
            -----
            <p>{`toggled: ${toggled}`}</p> 
        </div>
        )
    }


##### VO

'toggled' -- or really, this.state.toggled -- is, however, a useful stateful value in this example.

In our render method, we destructure it off of our state object, and then display it's value inside the div.

And, as you can see, there's a click handler on the div, which is called this.setToggled.



---


##### SC

    setToggled = () => {
        const { toggled } = this.state;  
        this.setState({toggled: !toggled});
    }

##### VO

Inside this.setToggled -- which is written as an arrow function, so that it's current scope and 'this' ness will be preserved when we pass it in to a new scope as a click handler -- we also begin by destructuring that toggled value.  

Then, we call a method that this component inherits from it's parent class, called this.setState.

In a class based component, you can only modify state using this.setState, you can't change -- or mutate -- state directly.

We pass an object in to this.setState, with the key that we wish to change and then the new value for that key, which in this case is the opposite of what toggled used to be.  So if it was true, it will now be false, and vice versa.

---


##### SC

the useState hook makes state available in function components

React recommends using distinct variable names, rather than a single state object when using useState


##### VO

Before we had hooks, there was no way to utilize local state in a function component, and so all instances of state in React components worked pretty much like this -- you instantiate a state object and then modify it using this.setState().

The useState hook provides us with a new syntax for utilizing state in a function component.

And a big difference that you should notice is that, rather than maintaining a single state object, we break each instance of state that we wish to have into a distinct variable, with a specific setter function.

This approach is actually much more modular, and it makes our components easier to test and also more re-usable.

---


##### SC

Hooks
    are a way to implement the extended functionality 
    useState lets function components use state
    useEffect lets function components use life cycle methods
    useRef lets function components use refs
    ...and so on


##### VO
Hooks, like the useState hook that you've already learned and the useEffect hook that you'll learn next week, were introduced as a way to bring the extra functionality that is available in class-based copmonents to function components.

The useState hook is a way to use the stateful powers of class-based components, useEffect will give us access to the so-called life-cycle methods, and useRef lets us use references, or direct references to specific DOM elements.

Before Hooks existed, when we needed any of these side-effect laden capabilities in a function component, we would convert it to a class based component.  

But, with hooks, we really don't need class components any more.

Hooks let us utilize the capabilities of class based components, without inheriting from a base class, and they let us pick and choose which of those behaviors we wish to implement.

In other words, with hooks, we favor composition over inheritance.

---


##### SC

focus arrow on points as delineated

FUNCTION        vs      CLASS
less code               more code
function                sub class of React.Component
returns jsx             render method returns jsx
takes in props          takes in props
props                   this.props  
useState                this.state, this.setState
use hooks               use methods inherited from React.Component
composition             inheritance  
    

##### VO
So, we can add a few important things to our list.

First of all, when we want to use state in a function component, we reach for the useState hook.

Whereas, when we are wrigin a class based component, we create a state object and update it using this.setState.

In general,hooks give us the capability to utitlize powerful and useful methods from React.Component -- like state, or lifecycle methods -- in function components.

And finally, using the combination of hooks and function components is a good example of favoring composition over inheritance, which is almost always preferable.


---


##### SC

import { Component } from 'react';

class SimpleButtonCC extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         toggled: false,
    //         initText: props.text,
    //     }
    // }
    state = {
        toggled: false,
        initText: this.props.text,
    }


    setToggled = () => {
        const { toggled } = this.state;  
        this.setState({toggled: !toggled});
    }

    render(){
        const { text } = this.props;
        const { toggled, initText } = this.state;
        console.log(initText);
        return (
            <div className='example'
                onClick={this.setToggled}
            >
            <p>{text} </p>
            -----
            <p>{`toggled: ${toggled}`}</p> 
        </div>
        )
    }

}

export default SimpleButtonCC


##### VO
Now, one of the things that you may be asked to do at some point by a future employer is to convert a class based code base into one that uses function components.  

So I want to quickly show you how we would go about converting the class-based component into a function component.



---


##### SC



class SimpleButtonCC extends Component {


        return (
            <div className='example'
                onClick={this.setToggled}
            >
            <p>{text} </p>
            -----
            <p>{`toggled: ${toggled}`}</p> 
        </div>
        )
    

}

export default SimpleButtonCC

##### VO


I'll start by deleting the import, and everything inside the class definition except the return statement of the render method.


---


##### SC



const SimpleButtonFC = ({text}) => {

        return (
            <div className='example'
                onClick={this.setToggled}
            >
            <p>{text} </p>
            -----
            <p>{`toggled: ${toggled}`}</p> 
        </div>
        )
    
}

export default SimpleButtonFC

##### VO
Then I'll rename this function to be SimpleButtonFC, for function component.

And I'll get rid of the class keyword and replace it with the const keyword and set this equal to an arrow function rather than a class definition.

We also need to remember to destucture the text prop as an input parameter.


---


##### SC


import { useState } from 'react';

const SimpleButtonFC = ({text}) => {

    const [toggled, setToggle ] = useState(false);

        return (
            <div className='example'
                onClick={this.setToggled}
            >
            <p>{text} </p>
            -----
            <p>{`toggled: ${toggled}`}</p> 
        </div>
        )
    

}

export default SimpleButtonFC

##### VO

Now we need to bring in state, so we'll import useState and then invoke it, passing in an initial value of false, and destructuring our toggled variable and the function setToggled off of the return value of that function.



---


##### SC


import { useState } from 'react';

const SimpleButtonFC = ({text}) => {

    const [toggled, setToggle ] = useState(false);

        return (
            <div className='example'
                onClick={() => setToggled(!toggled)}
            >
            <p>{text} </p>
            -----
            <p>{`toggled: ${toggled}`}</p> 
        </div>
        )
    

}

export default SimpleButtonFC

##### VO

and finally, we'll remove the this from setToggled in our click handler, pass in the new value that we want to set for setToggled, which will be the opposite of toggled, and wrap that function invocation inside an arrow function so that it doesn't execute until the div is clicked.

---


##### SC


shown CampsitesPageCC

##### VO
Got it?  Ok!  In the next exercise, we're going to write a class based component, to give you some practice with this syntax.   

You're going to take what you learned here and use it to write a class based version of the CampsitePage.



### end




---


##### SC

##### VO

An alternate syntax that you'll often see with class based components, is to simply omit the constructor function.

Remember how we talked about that in the last video?  If there is no constructor, it will be provided by the compiler, but we won't be able to pull in our props and assign them to local 'this' variables.






So I've got a little React stunb open now, and as you can see I just made a file called MyButton.js.

I'm going to write a simple class based component first

To create a class-based component, we first need to import the Component module from React.  It's a named export so we'll use the curly braces.


---


##### SC

import { Component } from 'react';

class MyButton extends Component {

}
export default MyButton

##### VO

Then, we can extend that base Component class --  the mother of all React Components -- with our own Component.  

For this example we're going to make a simple button. 

So we'll say class MyButton extends Component and then add some curly braces.

And, as with all class names -- and all React compoennts -- we want to make sure that the first character of the name is capitalized.

And then at the bottom, we need to remember to export default MyButton, same as we would with a function component.


---


##### SC


import { Component } from 'react';

class MyButton extends Component {


   render(){
       return (
            <button>
                click me
            </button>
       )
   }

}
export default MyButton


##### VO

Now, the first thing you learned about React components is -- they always return JSX.  

So, we'll need to return some JSX.  

IN a class component, that return statement needs to be written inside a render method.

So we need to say render(){} and then inside that render method, we'll return our jsx that has a button.

And for now, we'll just add some text that says click me.

---


##### SC

show this button in the browser

##### VO

And, if we go to the browser and check MyButton, we can see, sure enough, just as it would with a function component, 


---


##### SC

function vs class list differences




##### VO


And that's the first big difference between class-based components and function components.



Function components simply return JSX, whereas class based components return that jsx inside a render method.


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

---


##### SC

##### VO

---


##### SC

##### VO



--- 
##### SC
left side
function component


right side
class component
##### VO

Before Hooks, React projects often included both function copmonents and class components


I didn't mention it earlier when I introduced Hooks, because I wanted us to build something with the useState hook first, and because, honestly, hooks have become so much more than a way to access the features of classes -- they have outright replaced class-based components, in every way.

Hooks are another, better way to handle behavior and features that we can also create using class-based components.

it's possible to get by in React, and even, to a certain extent in javascript, without understanding quite what a class is or how best to use them.





arrow functions and scope

---


##### SC

##### VO


---


##### SC

##### VO


And it's the most truly unfortunate and painful aspect of working with classes in javascript.  As we'll learn in the next video, it's a practice which is thoroughly frowned upon by the React team and yet....it's a practice which is utilized in every single class based component in React.  




Huh?  




- talk here about the FP vs OO wars

---

that function components aren't really JUST functions, they're instances of React Components --  in other words, functions that return a React Element.

And you learned that 





### cut out:

uschia outline around return statement

focus arrow on each element as it is discussed


import { useState } from 'react';

const MyButtonFC = ({text}) => {
    
    const [ toggled, setToggled ] = useState(false);

    return (
        <button onClick={() => setToggled(!toggled)} 
                style={{backgroundColor: toggled ? 'purple' : 'grey'}}
        >
            {text}
        </button>
    )
}

export default MyButtonFC


##### VO

In the function component, we just return the JSX directly.

And you can see that it's a button with an onClick prop. 

And that button also has an inline style declaration that may look a bit odd.

This is a shorthand javascript expression called a ternary expression.

You'll learn all about these next week; for now, just know that it's going to check to see whether toggled is truthy or not.

If the value of toggled is true, then this expression will set the background color of our button to purple; if it's false, the background color will be grey.

And then below that, we display the value of the prop named text that gets passed in, in the body of the button.

That prop named text currently has the value of 'click me', so, in the browser, we see that text.


---


##### SC

fuschia outline around render method

focus arrow on each element as it is discussed


import { Component } from 'react';

class MyButtonCC extends Component {

    constructor(props){
        super(props);
        this.state = {
            toggled: false,
        }
    }

    setToggled = () => {
        const { toggled } = this.state;  
        this.setState({toggled: !toggled});
    }

    render(){
        const { text } = this.props;
        const { toggled } = this.state;
        return (
            <button 
                onClick={this.setToggled} 
                style={{backgroundColor: toggled ? 'purple' : 'grey'}}
            >
                {text}
            </button>
        )
    }

}

##### VO

In the class component, we have almost exactly the same return statement, but it's inside a render method.  

Much like a function component, this render method must return jsx.  

This render method will run each time React detects a change in the state of this application that affects this Component.

In other words, this render method will be invoked in much the same way that a function component will be invoked.

So, in a class-based component, you'll often see props values destructured inside a render method, as you see here.

And of course, since this is a class blueprint, we use the keyword this, not just for props, but also to refer to any methods, like in this case, our clickhandler, setToggled, which is
passed in to the button as THIS dot setToggled.

And notice, too that I've written setToggled as a 







In the first line of the render method you see another difference between function components and class components: the props of this class are not just props -- they're 'this.props'.  So, here, we destructure the text prop from this.props and then display that value, just as we did in the function component.

In the click handler, you can see that setToggled is also this.setToggled, and setToggled is a method of this class.  And you might also notice that it's an arrow function!  Which, if you remember, means that it will be bound to this this when we pass it in to the other this that we pass it into, that button element.

And the other big difference is of course that the toggled variable that we previously destructured from our useState hook is now a key of the this.state object which belongs to this component, so we destruture that and then use it as before.










And the third thing that you might notice is that, while each of these components has one instance of local state -- a boolean value named toggled -- they handle that state somewhat differently.

Let's take a closer look at each of these components and compare them.


---


##### SC

##### VO

And this is the first key difference between function components and class components in React





---


##### SC

##### VO




---


##### SC

focus outline around ternary 

import { useState } from 'react';

const MyButtonFC = () => {
    
    const [ toggled, setToggled ] = useState(false);

    return (
        <button onClick={() => setToggled(!toggled)} 
                style={{backgroundColor: toggled ? 'purple' : 'grey'}}
        >
            click me
        </button>
    )
}

export default MyButtonFC


##### VO

In the function component, we use the useState hook to handle state. 

So we import that at the top, and then we unpack the toggled variable and the setter function which is called setToggled.

And in the click handler

Most of what's here should look familiar, other than this expression that's currently outlined.

This little piece of javascript magic called a ternary experssion, and it's a short and powerful syntax for evaluating the truthiness of variables.  

You'll learn it next week, and it's generally the way we want to write this sort of construction in React.

Here, we're using it to change the background color when the user clicks on the button.

If toggled is true, then the backgroundColor will be purple; if toggled is false, then it will be grey.

But of course the important thing is that variable -- toggled.

Toggled is a stateful variable, so we're using the useState hook to initialize it, and also initialize the setter function, which we pass in to the onClick prop of our button, to toggle the toggled variable back and forth between true and false.




---


##### SC

focus outline follow the text

import { Component } from 'react';

class MyButtonCC extends Component {

    constructor(props){
        super(props);
        this.state = {
            toggled: false,
        }
    }

    setToggled = () => {
        const { toggled } = this.state;  
        this.setState({toggled: !toggled});
    }

    render(){
        const { toggled } = this.state;
        return (
            <button 
                onClick={this.setToggled} 
                style={{backgroundColor: toggled ? 'purple' : 'grey'}}
            >
                click me
            </button>
        )
    }

}

export default MyButtonCC