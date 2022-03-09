React-W5-10-Async-Redux

https://redux-toolkit.js.org/api/getDefaultMiddleware

--- 

##### SC

Asynchronous Redux

##### VO

Welcome back.  Are you ready?  



--- 

##### SC

  const [data, setData ] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch(request)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => setError(err.toString()))
  }, [])

##### VO

In the last video, we looked at one fairly straightforward way of handling an API request -- we make the request, somewhere pretty close to where we want to consume the data, and then we wrap that request -- which will always be riddled with side effects -- in useEffect.  Then we store the results of this request


--- 

##### SC

fetching data is inherently unreliable

##### VO

In this video, we're going to step b

This week, we've talked quite a bit about the uncertainty of fetched data, and we've seen some nice ways in which javascript is equipped to handle the fact that, when we make an API request, we don't necessarily know when or even if we'll receive the data that we requested.





--- 

##### SC



##### VO



--- 

##### SC

redux toolkit simplifies asynchrounous state management!

##### VO

How we handle this uncertaintly in our React application is the subject of the rest of this week's content, and it's a place where redux toolkit really shines.  You'll get a fair amount of practice writing repetitive code to write this week, in order to handle the various possibilities that an API call represents, but redux toolkit will dramatically simplify this process.  


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

