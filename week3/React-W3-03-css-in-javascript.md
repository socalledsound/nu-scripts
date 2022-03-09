note - i didn't mention styled components because we're not using it.  is that the right choice?



--- 

##### SC



##### VO

Welcome back.

In this video, we're going to talk about several different ways to use CSS in a react application. 


--- 

##### SC

Styling a React Component: option 1

1. write some css in a css file
2. import that css file into your React app
3. target a specific react element using the className or id props (if necessary)




##### VO

The most familiar and straightforward way to style a React component is the way that we've been doing it.

First, we write some css rules in a .css file.  Then, we import that css into our React app.

And finally, we use the className id prop if necessary to assign a classname or id to the react element that we wish to target.

--- 

##### SC

const buttonStyle = {
  marginLeft: '4rem';
  marginTop: '4rem';
  width: '12rem';
  height: '8rem';
  borderRadius: '0.8rem';
  border: 'none';
  fontSize: '2rem';
  color: 'white';
  backgroundColor: 'darkgray';
}

const MyButton = () => {
    return (
        <button style={buttonStyle}>click me</button>
    )
}

##### VO

But we can also write inline styles in React.  To do this, we use the style prop, which wants an object, with keys.

This is very similar to the way that we can style a dom element using a style object, and just like with the DOM, we write our css properties in camelCase, and we need to put the values of each property in quotes.

Typically, we'll declare that style object, outside of our component, as I've done here. 

Some developers really like this approach to styling, because it helps us keep our styles together with the component that they're used for.


--- 

##### SC

const MyButton = () => {
    return (
        <button style={{backgroundColor: 'grey' }}>click me</button>
    )
}

##### VO

Or, if we just have one or two properties, we can literally write them inline, being sure to write not just the curly braces which tell the interpreter that this will be a javascript value but ALSO the second set of curly braces that defines the style object.

--- 

##### SC
import { useState } from 'react';
import './MyButton.css';


const MyButton = () => {
  const [toggled, setToggled ] = useState(false);
    return (
        <button 
            onClick={() => setToggled(!toggled)}
            className='basic-button' 
            style={{backgroundColor:  toggled ? 'purple' : 'grey' }}
          >
          click me
        </button>
    )
}

##### VO

We can also mix and match, using a className for most of our css properties and just inlining certain properties.  The css cascade is still in effect in React, so inline styles will take precedence.

Often times, we may want to use local state combined with the ternary operator that you just learned, to set one of more styles.

Css in javascript allows us to write conditional stylings for react components in a very readable manner.


--- 

##### SC

import { useState } from 'react';
import './MyButton.css';


const MyButton = () => {
  const [toggled, setToggled ] = useState(false);
    return (
        <button 
            onClick={() => setToggled(!toggled)}
            className={ toggled ? 'toggled-button' : 'basic-button' }
          >
          click me
        </button>
    )
}




##### VO

And of course, you could also create a seperate class, and toggle the class name instead!

You have a lot of options when it comes to css and react!


--- 

##### SC

MyButton.module.css

myButton {
  margin-left: 4rem;
  margin-top: 4rem;
  width: 12rem;
  height: 8rem;
  border-radius: 0.8rem;
  border: none;
  font-size: 2rem;
  color: white;
  background-color: darkgray;
}


##### VO

And, speaking of options, there's also another hybrid approach that is very new, the css module system.  To use css modules, we first name our css file like this, where we write a file name, then .module then .css.



--- 

##### SC

import styles from './MyButton.module.css'

##### VO
Then, we can import a styles object from that css module file.



--- 

##### SC

import styles from './MyButton.module.css'

const MyButton = () => {
    return (
        <button className={styles.myButton}>click me</button>
    )
}

##### VO

And then we can use the specific style that we want as a classname.  This approach is, as I said, pretty new, but it offers one really big advantage, which is that we don't have to worry about naming clashes, as we do with regular css files.  


--- 

##### SC

focus arrow on each approach

we have many options:
  1. import css and use props with classnames
  2. use style objects
  3. use a combination of classnames and style objects
  4. use the css module system

##### VO

At this point in time, there really isn't a settled best practice on how to write css.  All of the approaches mentioned here are valid, and can be combined.

We can....
list each one of these options (above)

In this course, we're mostly going to stick with option 1, but when it comes to using React Spring, we'll be learning a little more heavily towards option number 3.

Experiment with the various options!  It's important to become familiar with all of them.





