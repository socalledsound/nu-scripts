
React-W5-08-useEffect-fetch

HOW SHOULD WE MAKE THIS CODE AVAILABLE TO STUDENTS?  SHOULD THIS BE MORE OF AN EXERCISE VIDEO?

         request 10 poke: ‘https://pokeapi.co/api/v2/pokemon?limit=10'


code for example --  #1 with promise 

import { useState, useEffect } from 'react';
import './App.css';

const request = `https://pokeapi.co/api/v2/pokemon?limit=10`;
// const badRequest = `https://pokeapi.co/api/v10/pokemon?limit=10`;

function App() {
  const [isLoading, setLoading] = useState(null);  // pending
  const [data, setData ] = useState(null);         // fulfilled
  const [error, setError] = useState(null);        // rejected

  useEffect(() => {
    setLoading(true);
    fetch(request)
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          setData(data);
          setLoading(false);
        }, 5000)
          
        return null
      })
      .catch(err => {
        setLoading(false)
        setError(err.toString())
        return
      })
  }, [])


if(data){
  console.log(data.results)
}
if(error){
  console.log(error);
}
 
  return (
    <div className="App">
            {
        isLoading && 
        <div>
          <h1>loading.....</h1>
        </div>
      }
      {
      error &&
        <div>
          <h1>whoopsie!: that was a bad request</h1>
          <p>{error}</p>
        </div>
      }
      {
        data &&
        // data.results.length > 0 &&
        <div>
          <h1>top 10 poke</h1>
            {
              data.results.map((item, idx) => <div key={idx}>{item.name}</div>)
            }
        </div>
      }
    </div>
  );
}

export default App;




#2 with async await :

import { useState, useEffect } from 'react';
import './App.css';

const request = `https://pokeapi.co/api/v2/pokemon?limit=10`;
// const badRequest = `https://pokeapi.co/api/v10/pokemon?limit=10`;

function App() {
  const [isLoading, setLoading] = useState(false); 
  const [data, setData ] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    setLoading(true);
    const asyncFetch = async () => {
    try{
      const response = await fetch(request);
      const data = await response.json();  
      setTimeout(() => {
        setLoading(false);
        setData(data);    
      }, 5000);
      
    }
    catch(err){
      setLoading(false);
      setError(err.toString());
    }

  }
  asyncFetch()
        
  }, [])
  console.log(isLoading)

if(data){
  console.log(data.results)
}
if(error){
  console.log(error);
}
 
  return (
    <div className="App">
            {
        isLoading && 
        <div>
          <h1>loading.....</h1>
        </div>
      }
      {
      error &&
        <div>
          <h1>whoopsie!: that was a bad request</h1>
          <p>{error}</p>
        </div>
      }
      {
        data &&
        <div>
          <h1>top 10 poke</h1>
            {
              data.results.map((item, idx) => <div key={idx}>{item.name}</div>)
            }
        </div>
      }
    </div>
  );
}

export default App;



--- 

##### SC

fetching data with useEffect

##### VO
Welcome back.

--- 

##### SC

API requests are side effects
    -- the status of the data is unknown
    -- the API is outside of our application scope


##### VO

Over the last few videos, you've learned a lot about asynchronous data requests in javascript.  

These functionalities are, needless to say, the core of websites everywhere.

The user sees shiny buttons and memes about cats but, underneath it all is a great big pile of JSON that is being served and accessed, primarily using these RESTful APIs that you've just been learning about.

And all of these data requests are side effects.  Our application has no idea what this data is, or whether the fetching of this data will succeed, and the API exists completely outside of the scope of our application.


--- 

##### SC

A Promise is an object which may be in one of three possible states:
    pending
    fulfilled
    rejected


##### VO

You learned about Promises, those objects with three possible states: pending, fulfulled, or rejected.  



--- 

##### SC

UI for fetching data must have three possible states

1. 'pending' -- Loading message
2. 'fulfilled'  --- display the data
3. 'rejected' -- display the error message

##### VO

Those three states must also be reflected in our user interface -- so, with any page that fires off a data request, we'll have three possible states for our user interface.  

First, a pending state, which our app will enter when the request is initiatd.  Then, if the request was successful, our app will leave the 'pending' state and enter a 'fulifilled' state.  Or, if the request fails, we'll leave the pending state and enter a 'rejected' state.   

--- 

##### SC

show the web page in action, pause on the loading state until the text gets to the fulfillment; also show the error message

##### VO

In this video, I'll show you an example of a simple API call, and an interface that is designed to reflect those three states.  

As you can see now, our page will have a loading state, which will be initiated when the page loads and the request for data is initiated, and then if the request is successful, it will display the results of that request.

Or, if the request fails, we'll get an error message that shows the error.


--- 

##### SC

  const [isLoading, setLoading] = useState(null);  // pending
  const [data, setData ] = useState(null);         // fulfilled
  const [error, setError] = useState(null);        // rejected

##### VO

We'll have three instances of state, one for each possible state of our promise.  



--- 

##### SC


return (
    <div className="App">
            {
        isLoading && 
        <div>
          <h1>loading.....</h1>
        </div>
      }
      {
      error &&
        <div>
          <h1>whoopsie!: that was a bad request</h1>
          <p>{error}</p>
        </div>
      }
      {
        data &&
        // data.results.length > 0 &&
        <div>
          <h1>top 10 poke</h1>
            {
              data.results.map((item, idx) => <div key={idx}>{item.name}</div>)
            }
        </div>
      }
    </div>
  );



##### VO

And for each of those stateful variables, we'll have a piece of UI that we render condtionally.

So if isLoading is true, then we'll render a ...loading message, and if the data has been received, we'll render the data.  And if there's an error, then we'll render that error message.

--- 

##### SC

show https://pokeapi.co/


##### VO

We're going to use the pokemon API, which is just a RESTful API that serves up pokemon data.

--- 

##### SC

const request = ‘https://pokeapi.co/api/v2/pokemon?limit=10'

##### VO

We can get the first 10 listed pokemons with a request that looks like this.  

--- 

##### SC

const request = ‘https://pokeapi.co/api/v2/pokemon?limit=10'

    fetch(request)
      .then(response => response.json())


##### VO

We'll request our data using the Fetch API that you just learned about.

Our Fetch will return a Promise.

So, we'll call then() on the result, and then read that result using response.json()....

--- 

##### SC
    
    fetch(request)
      .then(response => response.json())
      .then(data => // store data in state)
      .catch(error => // store error in state)

##### VO

Which will return another Promise, so we'll call then again and then store that data in local state.  

And we'll add a .catch to catch any errors.


--- 

##### SC

focus arrow follows text

useEffect(() => {
    setLoading(true);
    fetch(request)
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          setData(data);
          setLoading(false);
        }, 5000)
      })
      .catch(err => {
          setError(err.toString())
           setLoading(false);
          })
}, [])


##### VO

All of this is of course one big bundle of side effects, so we'll run this process in useEffect, and we'll pass in an empty array as the array of dependencies, so this code only runs once, when the app first mounts, in other words, when the page loads for the first time.

Before we make the request to fetch, we'll call setLoading and set isLoading to true, which should display our loading message.  Then we'll make the fetch request, and, if the request is successful, we'll convert that json data into a usable format and call then again.

Now, inside of this second then statement, you can see that I've written an extra five second pause, using setTimeout, just to make this process a little slower.  So, after a five second pause, we'll set isLoading to false and set the data in the data variable.

If the request fails, then we'll take the resulting error message and set it as the error, and once again set isLoading to false.


--- 

##### SC

show code from the top of the page and focus arrow follow the text

##### VO


And here's the code all together.

This is just a basic App, created with create-react-app.

We start with our imports, we need the useState and useEffect hooks and also some css.
 
Then, you can see we've got both a request and a bad request, which is currently commented out.  It will fail, because it's badly written, since it's saying that we want to use the v10 API, which doesn't exist.

Inside our app we've got our three stateful varibles and then the effect that we were just looking at.


--- 

##### SC

if(data){
  console.log(data.results)
}
if(error){
  console.log(error);
}

##### VO


Next, just some console.log() action, so we can see those results in the console if they exist.  


--- 

##### SC


            return (
                <div className="App">
                {
                error &&
                    <div>
                    <h1>whoopsie!: that was a bad request</h1>
                    <p>{error}</p>
                    </div>
                }
                {
                    data &&
                    // data.results.length > 0 &&
                    <div>
                    <h1>top 10 poke</h1>
                        {
                        data.results.map((item, idx) => <div key={idx}>{item.name}</div>)
                        }
                    </div>
                }
                </div>
            );

##### VO

And, finally, a little JSX, which will render the UI accoring to the which state our app is currently in.

--- 

##### SC

show browser with names

##### VO

And, if I run this in the browser with the good request....you can see that we get the names of 10 Pokemon characters!


--- 

##### SC

Show browser with error

##### VO


And if I run it with the bad request.....you can see that we get an error.  Which is almost as amazing, but not quite.  The important thing, though, is that our error handling works, and we get the error message when we're supposed to.

So everything's working, and that's great, but I want to show you one more thing, and that's the nifty async await syntax that you also learned.

--- 

##### SC

focus arrow follows text


 useEffect(() => {
    setLoading(true);
    const asyncFetch = async () => {
    try{
      const response = await fetch(request);
      const data = await response.json();  
      setTimeout(() => {
        setLoading(false);
        setData(data);    
      }, 5000);
      
    }
    catch(err){
      setLoading(false);
      setError(err.toString());
    }

  }
  asyncFetch()
        
  }, [])



##### VO

So everything in the UI remains the same, but we just need to make a few changes to in our useEffect.

Just like before, the first thing we need to do is set isLoading to true, so the loading message displays.

Below that, we'll writ an async function, called asyncFetch -- inside this function, we can await promises.

And then we have a try catch statement.

IN the try block, there's a variable named response, which will await the call to fetch.

When that await has resolved, we create a new variable named data, which also awaits the result of running the json method on that response.

Next is the setTimeout function from before, which will just delay the loading of the data for another five seconds; but of course in a real app we'd just call setLoading and setData immediately.

Then, in the catch statement, which will fire if there's an error with the fetch, we set loading to false and set the error, just as before.

So, all in all, a very similar syntax.  Some find it cleaner, and in certain cases it certainly is.  In this case, and in many others, it doesn't actually help all that much, but all the same, it's good to know about.



--- 

##### SC

Show browser with success.

##### VO

And that's that!  We used useEffect to grab some data, and then conditionally render it to the screen. 


 Now, it's up to you to play with this data.  Make a gallery of poke, that actually shows the images of these poke! 

--- 

##### SC

show https://pokeapi.co/

##### VO

Or, explore the api a bit, and send a different API request.  Maybe search for all Poke that have a specific ability, pick two at random and dispaly them side by side.  The possibilities are endless.

In the next exercise, we'll set up a server for our nucampsite.

I'll see you there.






--- 

##### SC


##### VO

And you learned about the async await syntax, that in some cases helps us reason about Promises a little more clearly in some cases.  

Instead of calling the then method of our Promise, we simply execute it and await it's result, and rather than calling the catch method of our Promise, we can simply wrap the execution in a try/catch structure.

--- 

##### SC


##### VO

Both of these syntaxes are valid and have their proponents.  And, as far as react is concerned, they function nearly identically.  





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

