   React-W3-04-useEffect


   n.b.: I have an example for this (and also for useRef), which could and perhaps should be an exercise video?  
   or could simply be added/discussed for more context.
   but since we're in this stretch goal mode, I'll leave that out for now 
   and we can revisit if and when you see fit.

--- 

##### SC

useEffect

##### VO
Welcome back.

--- 

##### SC

Hooks give our function components additional capabilities

useState === state


##### VO

Last week, you learned that Hooks are functions that we can use to extend the FUNCTIONALITY of our function components.



You've already learned the useState hook, which lets function components utilize state.


--- 

##### SC
Hooks give function components additional capabilities

useState === state

useEffect === effects???


##### VO

In this video, you'll learn about the useEffect hook, which you might guess, is about using effects?

--- 

##### SC

Hooks give function components additional capabilities

useState === state

useEffect === SIDE effects

##### VO
But not just any effects.  These are the loved and dreaded side effects that you're probably tired of hearing about by now.


--- 

##### SC

a side effect occurs when a function relies on or modifies something outside of its scope




##### VO

Remember?  A side effect occurs when a function relies on or modifies something outside of its scope.



--- 

##### SC

React components are functions which :
    1. take in props 
    2. return JSX

##### VO

React components are functions which always take in props and return some jsx.  


--- 

##### SC

examples of side effects in a React component:

    direct DOM manipulation
    timer functions -- setTimeout, setInterval
    fetching data from external sources

##### VO

And side effects in react components are any processes which don't directly affect the rendering of that component.

Some examples of this are direct DOM manipulation -- DOM manipulation which isn't handled by ReactDOM.render -- calls to timer functions like setTimeout or setInterval, or API requests. 

--- 

##### SC

React handles the rendering of components

##### VO

It's important to remember in this context that we don't directly control if or when a component is rendered. React handles that for us.


--- 

##### SC

use Effect runs side effects outside of React's normal rendering process


##### VO

But we probably don't want to start a new timing functon or make a new API request every time something in our application's state tree changes.  So we need some way to run our side effects OUTSIDE or the normal rendering process.  And that's where useEffect comes in. 





--- 

##### SC

useEffect(callbackFunction, [dependency1, dependency2])

##### VO

UseEffect is a hook which takes two arguments.  The first is a function.  Inside the body of this function, we run our side effect.

The second is an array of dependencies, which we can use to control when the side effect runs.

Le'ts look at a few examples to see how that works.
--- 

##### SC

const SomeComponent = () => {

useEffect(() => {
    setTimeout(peaceOnEarth, 10000000);
})

return (
    <>
    </>
)

}




##### VO
 Here, we have a side effect, a call to set Timeout, which is going to run a function called peaceOnEarth to run, 10 million seconds from now.

 So we pass it in to use effect, inside the body of an arrow function.

 Notice that there are no dependencies listed.  This means that this side effect is going to run each time the Component renders.

 No beuno.

 That's going to be a lot of peace on earth....and, eventually it could be come enough to crash our browser.


--- 

##### SC

focus arrow on dependency array

const SomeComponent = () => {

useEffect(() => {
    setTimeout(peaceOnEarth, 10000000);
}, [])

return (
    <>
    </>
)

}

##### VO

But we can use the dependency array to fix this.  If we pass in an empty array as a dependency, then our side effect will only run once -- when the component is first rendered.

This is, needless to say, extraordinarily useful!  I mean, peace on earth is wonderful, but, whatever magic that function is responsible for really only needs to run once.  

--- 

##### SC

focus arrow on dependency array

const SomeComponent = () => {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    if(toggled){
      setTimeout(peaceOnEarth, 2000);
    }
   
  }, [toggled])



  return (
    <button onClick={() => setToggled(true)}>click for peace on earth</button>
  );

}

}


##### VO

We can also, of course, provide a dependency to the dependency array.  

If we do, then or effect will run only when that specific value in the dependency array changes.

In this case, our effect will run just once, the first time the button is clicked.

The value of toggled WILL change when the component first mounts, when it is initialized to false, but since we have a conditional statement that checks for a truthy value of toggle, the setTimeout won't run that first time.  

Then, if the button is clicked, toggled will become true, and the setTimeout will run, on that ten million second delay.

But on any further clicks from users impatient for peaceOnEarth to start already, the value of toggled won't change, since the setToggled function in the click handler always sets the value of toggled to be true.  So the effect won't run again.




--- 

##### SC

useEffect dependency array:
 -- no array means run the effect any time the component is rendered
 -- empty array means run the effect ONLY the first time the component is rendered
 -- if one or more dependencies are listed, useEffect will run when one of those values changes


##### VO

So the depenency array gives us a lot of control over when our side effect will run, and this control is really the essence of the useEffect hook. 

If we don't pass any dependency array in, it will run every time the component is rendered.

If we pass an empty array, it will run only once, when the component is first rendered, and it won't run on subsequent updates.

And if we pass one or more dependencies, then our useEffect will run each time one of those dependencies changes.




--- 

##### SC

useEffect is loosely analagous to class based components' life-cycle methods:
componentDidMount
componentDidUpdate
componentWillUnmount

##### VO

This ability to step outside of the normal rendering process and control if and when a side effect will run is, again, the essence of the useEffect hook.

And that's why you'll often hear it described as a hook that gives us access to the same behavior that the life-cycle methods in class based components give us.

In class based components, we have a method named componentDidMount, which runs....when the component mounts the first time, like the empty dependency array does.

There's another method called componentDidUpdate, which similar to the dependency array with specific dependencies, allows us to run some code only when specific values from our state tree change.


And finally, there's a method called componentWillUnmount, which we can use to clean up any processes that we don't need to run any more when the component has reached the end of it's lifecycle.  

We can also do that with useEffect.


--- 

##### SC

focus arrow on returned function

useEffect(() => {

    //do something

    return () => {
        // clean something up
    }
})

##### VO

TO cleanup a side effect with useEffect, we need to return a function from the callback function that we pass in to useEffect.  useEffect will then run that function in one of two cases: either after the component unmounts or, if useEffect before running the useEffect runs again.



--- 

##### SC

focus arrow on dependency array

const SomeComponent = () => {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    let peace
    if(toggled){
      peace = setTimeout(peaceOnEarth, 2000);
    }
   
    return () => {
      clearTimeout(peace)
    }


  }, [toggled])



  return (
    <button onClick={() => setToggled(true)}>click for peace on earth</button>
  );

}

}


##### VO
So, to clean call clearTimeout on our setTimeout, we just have to store that timeout in a variable and then call clearTimeout in the body of our clean-up function.




