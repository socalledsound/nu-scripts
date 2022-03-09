React-W3-10-useRef

useRef creates a reference

the value of a reference persists between renderings
updating a reference doesn't trigger a re-render

can be used to access DOM elements directly by assigngin a ref prop

can be used to create a closure




--- 

##### SC

useRef

##### VO

Welcome back.  In this video, I want to talk a surprisingly useful hook named useRef.

--- 

##### SC

the useRef hook creates a reference 

a reference is a persisted, mutable object with a 'current' property.

##### VO

As it's name suggests, the useRef hook is used to create a reference.  A reference is a persisted, mutable object with a current property.



--- 

##### SC

references can be used to:
    access the DOM directly
    store data outside of React's state


##### VO

These references can be used in several really useful ways.  One of the most common -- and one that we'll experiment with in the next video -- is to access the DOM directly, outside of React's normal rendering process.

And they're also useful any time we want to store a piece of information outside of React's state.  

Changing a reference does not cause a component to re-render, and we don't have to wait for the next re-render for the updated value of a reference to be available inside a component.


--- 

##### SC

function App() {

  const value = useRef('chris is confused')
  let someValue = 'chris is confused';
  const [timesClicked, updateClicked ] = useState(0);

  const handleClick = () => {
    someValue = 'chris is awesome';
    value.current = 'chris is awesome';
    console.log(someValue, value.current);
    updateClicked(timesClicked + 1);
  }


  return (
    <div className="App">
      <div>reference: {value.current}</div>
      <div>someValue: {someValue}</div>
      <div>timesClicked: {timesClicked}</div>
      <button onClick={() => handleClick()}>click me</button>
    </div>
  );
}

##### VO

If for some reason, we want to persist a mutable value outside of the normal rendering process, we use a ref.  

Here, you can see, I've set up two mutable values at the top that both are initialized to say that 'chris is confused'.

The idea here is that we get a chance to click a button and change the text displayed to say that 'chris is awesome'.

--- 

##### SC

show this code running in browser with console open -- you can get it from:


##### VO

And if I run this code in the browser and open the console, you can see that each time I click, the console logs the correct message for each of these variables, that chris is indeed awesome.

However, only the ref properly displays on the page -- because after updateClicked runs, the let variable is re-initialized, whereas the ref is not.

Any time we want a value to persist, outside of state, refs are the way to go.




--- 

##### SC

function App() {

  const el = useRef()

  return (
    <div className="App">
      <div ref={el} >hi there</div>
    </div>
  );
}

##### VO

But by far the most common use for useRef is to manage or access DOM elements directly, outside of React's normal rendering process.

To do this, we can assign a reference object to a special prop named, appropriately enough, ref, as you see in this code.


--- 

##### SC

focus arrow follows text:

import { useRef, useState, useEffect } from 'react';
import './App.css';

const messageStyle = {
  backgroundColor: 'aqua', 
  color: 'white',
  width: '4rem',
  padding: '4rem', 
  marginTop: '4rem',
  borderRadius: '2rem', 
}

const buttonStyle = {
  backgroundColor: 'grey', 
  color: 'white',
  width: '8rem', 
  padding: '2rem',
  marginTop: '4rem',
  borderRadius: '2rem', 
  fontSize: '2rem',
  border: 'none',
}

const createRandomColor = () => `#${Math.floor(Math.random() * 2 ** 24).toString(16)}`

function App() {

  const el = useRef(null)
  const [ count, updateCount] = useState(0);

  useEffect(() => {
    console.log(el.current);
    console.log(el.props);
    el.current.style.backgroundColor = createRandomColor();
  }, [count])


  return (
    <div className="App">
      <div ref={el} style={messageStyle}>{count}</div>
      <button onClick={() => updateCount(count + 1)} style={buttonStyle}>click me</button>
    </div>
  );
}

export default App;



##### VO

When we assign the newly created ref to the ref prop of the div, the current property of the ref is set to the most recently rendered version of that element in the DOM.  And we can also use that ref to get or set values on the web page, outside of React.

Here, I've created a ref and assigned the same div from the previous example to that ref.

But now, we've got a stateful value, which will cause a re-render to occur each time the button is clicked and the stateful variable named count is updated.

Notice too that there's an instance of useEffect, with count as a dependency.

So each time the button is clicked, that effect will also run, and it will update the div stored in el.current with a new random background color.

And we're also logging the value of el.current on each click.



--- 

##### SC

show the console logging the element on each click - focus arrow on the changing inner text (the count variable)

##### VO
And that's the really interesting thing.  You can see in the console that each time we click, that ref updates to reflect the most recent state of that dom element. 



--- 

##### SC

  useEffect(() => {
    console.log(el.current);
    console.log(el.props);
    el.current.style.backgroundColor = createRandomColor();
    el.current.innerText = 'i am in control';
  }, [count])

##### VO

And, if we add one more line to that effect, resetting the innerText of that element, we can see that in fact we have taken control of this element from React's state, and control over what is shown in the browser.

--- 

##### SC

useRef allows us to access DOM nodes or React elements directly, AFTER the render method has been completed

##### VO

Using this reference, we can manipulate the DOM directly.

As we've previously discussed, this typically isn't a very good idea and not recommended by the React team.

But, all the same, React gives us the option.

--- 

##### SC

useRef() can be used to manage uncontrolled forms

##### VO


In the next video, we'll explore one common use case for this, which is in the implementation of an uncontrolled form.

What's an uncontrolled form?

Watch the next video to find out.

I'll see you there.


