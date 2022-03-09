React-W4-09-redux-middleware

https://redux-toolkit.js.org/api/getDefaultMiddleware


gh repo: https://github.com/socalledsound/rtk-simple-middleware

    store.js:
    import { configureStore } from '@reduxjs/toolkit';
    import middlewarez from './middlewarez';
    import counterReducer from '../features/counter/counterSlice';

    export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([middlewarez])
    });



    App.js:

    import React, { useEffect} from 'react';
    import { useDispatch } from 'react-redux';
    import './App.css';

    function App() {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch({type: 'hello'});
        dispatch({type: 'GOLDMINE'});
    }, [])


    return (
        <div className="App">
            hi there
        </div>
    );
    }

    export default App;

    middlewarez.js:
    const middlewarez = store => {
        return next => action => {
            console.log(action);

            switch(action.type){
                case 'GOLDMINE' :
                    console.log('you hit the jackpot!!!');
                    break; 
                default:
                    break;
            }

            next(action);
        }
    }

    export default middlewarez

--- 

##### SC

focus outline around middleware when appropriate

Redux Middleware

##### VO

Welcome back.

In this video, we're going to talk about redux middleware.

I know when I was starting out with Redux, this word, middleware, seemed a bit exciting and mysterious, and maybe even a bit intimidating.

But, it doesn't need to be.  


--- 

##### SC

    dispatch(action ) ==> Middleware ==> reducers

##### VO

Middleware is EXACTLY what it sounds like: it's some code that sits in the middle.  More specifically, in a redux website it sits between the dispatch of an action and the reducers that make up a redux implementation.


--- 

##### SC

Middleware is like useEffect for Redux


##### VO




--- 

##### SC

Logger
Thunk
Redux Sagas
Redux Observables
Audio Middleware



##### VO

Some of the most popular middleware are Logger, for logging values from redux to the console, and Thunk, for handling asynchronous data requests.

Other popular middleware include Redux Sagas and Redux Observables, two libraries that let you get much more involved in your handling of side effects.

But really, any process that wants or needs to run outside of React's rendering process is a good candidate for middleware.  For instance, if you want to access the Web Audio API, which is imperative, the best approach is to use middleware.  


--- 

##### SC

Middleware is like useEffect for Redux
    -- it lets us run side effects independently of our redux implementation



##### VO


Again, any time you want to run side effects, outside of React's normal rendering process, middleware is a good solution.


--- 

##### SC

focus arrow follows the text


const middlewarez = store => {
    return next => action => {
        console.log(action);

        next(action);
    }
}

export default middlewarez

##### VO

Here you can see an example of some basic middleware that will just log every action that gets dispatched to the console.

And it's not that complicated.  Notice that it takes in the store as a parameter and it returns a higher order function, that will accept a function called next and also any action that gets dispatched.

Inside the body of the function, we can do something with the action, like for instance logging it to the console, and then we just pass that action on, using the next function.

--- 

##### SC

focus outline around switch statement

const middlewarez = store => {
    return next => action => {
        console.log(action);

        switch(action.type){
            case 'GOLDMINE' :
                console.log('you hit the jackpot!!!');
                break; 
            default:
                break;
        }

        next(action);
    }
}

export default middlewarez

##### VO

And here's that same middleware, with a switch statement that will look for a specific action type.  If the type is of type 'GOLDMINE', then a special message will get logged.  And, eventually, when this software is at version 1.0, it will rain gold coins on the screen.  But, we're not there yet.

--- 

##### SC

import middlewarez from './middlewarez';

##### VO

To use this middleware, we need to go to our store.  We'll start by importing this middlewarez

--- 

##### SC


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: () => 
});


##### VO

And then we'll add a special middleware key to our store, the value of which will be a function.

--- 

##### SC


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => 
});

##### VO

This function will accept getDefaultMiddleware, from configureStore

--- 

##### SC

    export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([middlewarez])
    });

##### VO

And it will return the return value of getDefaultMiddleware -- which will get the default middleware -- and then concatenate it with any middleware that we want to add.

So we'll end up with a new array of middleware, which will include the middleware that we want to add, which in this case is the nifty little middleware that we were just looking at.

--- 

##### SC

in App.js focus outline around dispatch

    useEffect(()=> {
        dispatch({type: 'hello'});
        dispatch({type: 'GOLDMINE'});
    }, [])


##### VO

Now, I know that we haven't looked at how to dispatch actions with redux yet, don't worry, we'll go ovver that in detail soon.

But hopefully you remember from our discussion of redux that the two most important things that our store provides us with are, first, access to state,
and second, a means of updating that state with a dispatch method.

We can access that dispatch method in several different ways, but here I'm using the useDispatch hook, which we'll look at in depth in a few videos.

In use effect, I'm dispatching 

--- 

##### SC

show messages in the console

##### VO
voila!  you can see that in my console, each action is logged, and if the type is of type 'GOLDMINE', it also logs the special message.

--- 

##### SC

show store with logger middleware


##### VO

And that's middleware, in redux.  Not too bad, right?  At some point, you'll no doubt write your own, but you don't need to in this course.

But I hope that exploration demystifies it a bit, so that when you install redux logger in the next video, it will kinda sorta make sense.

I'll see you