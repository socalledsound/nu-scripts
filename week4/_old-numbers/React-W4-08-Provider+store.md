

--- 

##### SC

configuring a store

##### VO

Welcome back.

--- 

##### SC

seperation of concerns
MVC vs FLUX


##### VO

This week so far you've learned about the importance of keeping your data seperate from the your view logic, otherwise known as 'seperation of concerns'.

And you've learned about the model view controller paradigm, or MVC and also the FLUX model, two very different means of enforcing that seperation of concerns.


--- 

##### SC

FLUX (REDUX): 
    store maintains global state
    store has a dispatch method
    to update state, we dispatch actions 
    the store maintains the logic to update state

    const action = {type: 'DO_SOMETHING'};
    store.dispatch(action)

##### VO

Redux is a version of the FLUX model, in which we have a single store of data that has a dispatch method that we can use to dispatch actions.

So, as we'll see in this video, in Redux, we will have a store, and it will have a dispatch method and we will dispatch actions to update that store.

--- 

##### SC

focus outline around reducer 

Redux = FLUX + reducers
    
const currentState = [action].reduce(reducer, initialState);


##### VO

But, as we've discussed, Redux further refines this model, using the concept of reducer functions to manage those updates.  
--- 

##### SC


Reducer functions: 

    const reducer = (state, action) => {
        switch(action.type){
            case: 'DO_SOMETHING :
                return {
                    ...state,
                    something: 'done'
                }
            default: 
                return state;
        }
        return {

    }




##### VO


Reducer functions are pure functions, which take in the current state and the action being dispatched and return a new state.


--- 

##### SC

const [state, dispatch] = useReducer(reducer, initialState);

##### VO

We've seen already how we can use these reducers without redux, using the useReducer hook, which takes in a reducer function and an initialState and returns the new state as well as a dispatch method to update that state, which provides us with a really nice, centralized architecture for expressing our application's logic.

--- 

##### SC

##### VO

And, in the last video, we saw how this can help us to seperate concerns, by keeping our logic seperate from our view.

We can make any changes that we want to the buttons that dispatch the actions that are necessary to update our application state, as long as we make sure that they have access to the dispatch function that dispatches those actions.


--- 

##### SC

show app.js from todo list, focus outline on dispatch

##### VO

And in our fairly small and simple application, that's not a big deal, we just pass the dispatch method in as a prop, and everything works quite seamlessly, and our logic is seperated from our view, and happiness reigns.  And as we said in the last video, this app doesn't need redux.  And that's a good thing, and a good thing to recognize.

--- 

##### SC

diagram (i can make this)

App
  LOGIC IS HERE: {currentUser, listItems, cartItems}

      components:
      Login
      ShoppingCart
      List



##### VO

But what happens if this app gets a little bigger.  Let's say we add a Login page, and a currentUser item in state.  And, just for fun, maybe a shopping cart, that's linked to this list in some way, so users can buy the things on the list and we can make some money.

Now, our state is a little bit more complex.  And, most likely, each of these components needs to know who the current user is, and the shopping cart needs to know what the list items are, too, and we also need to make sure that the dispatch method can get where it needs to get.

--- 

##### SC

  prop diagram with arrows.

##### VO

We don't necessarily need to change much, because, as we've just seen, we can use props to pass the data and the dispatch method, from our App.js, where our logic is located, to the components that need that logic.

--- 

##### SC


diagram showing the problems of prop drilling here

##### VO

But we've also seen that, in order to pass that state or dispatch method around, we need to use props, which has the big disadvantage of causing some very tight coupling between components.

--- 

##### SC
Prop Drilling:
    passing data from one component to another 
    by passing it through compoennts that do not use that data


##### VO


One of the worst anti-patterns in react is called 'prop-drilling', where we pass a prop from a parent component to a child's child  component or even a child's child's child's child's child's child....you get the idea.

As a rule of thumb, if you find yourself passing props through two or more children...it's usually a good idea to look for another solution.

--- 

##### SC

diagram showing redux distributing data 



##### VO

And redux is just such a solution.


In order to write more flexible apps, we need a way to loosely connect different components together, so that they can each access and update the data that is stored in our state, without simply inheriting that data, or that dispatch method, from a parent component.

And that's EXACTLY the ability that Redux provides us with.  

And, in fact, the function that provides us with that ability is called.....the PROVIDER.


--- 

##### SC

focus arrow follows the text

The Provider is a higher order component that extends the functionality of every component inside our App


      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>



##### VO

Similar to the BrowserRouter that we've already seen, the Provider is a higher order component that wraps around our entire App, extending the functionality of every component inside of our App.  It accepts a store as a prop. 

--- 

##### SC

show clicking through the index.js file

##### VO


Let's take a look at the index.js file for our nucampsite now.

In our index.js file, we can see that, because we used the redux template, we already have a Provider set up for us.  The redux toolkit gods have...provided for us.

--- 

##### SC

focus arrow follows the text

show index.js


import { store } from './app/store';
import { Provider } from 'react-redux';

      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>


##### VO



At the top of the file you can see that both a store and a Provider are imported for us, and then we pass that store into the Provider as a prop.

The Provider wraps around our entire App, and also around the BrowserRouter, and provides the store to our entire application.

--- 

##### SC


Provider
    
    store
        dispatch
        state

            

##### VO

And remember, this store is responsible for maintaining our global state.  And it also provides our application with a dispatch method so that we can dispatch actions to update that state. 

--- 

##### SC

show clicking through the store.js file

##### VO

 Let's take a look at our store now. It's in the app folder, inside the src folder.


--- 

##### SC

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


##### VO

Our store is currently exactly how create react app configured it for us.

You can see that we import a configureStore function from redux toolkit, and also a counterReducer from our counterSlice.

We'll look at that slice in a bit, as we prepare to create our own slices.

But for now, just notice that we create and export our store here, and our store is the return value of the configureStore function.

You can think of this store as a slightly more complicated version of the useReducer hook.

--- 

##### SC

    import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter } from 'react-router-dom';
    import { store } from './app/store';
    import { Provider } from 'react-redux';
    import App from './App';
    import './index.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap-social/bootstrap-social.css';
    import 'font-awesome/css/font-awesome.css';
    import 'typeface-lobster';
    import 'typeface-open-sans';

    // console.log(store.dispatch);
    // console.log(store.getState());

    ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
    );



##### VO

And in fact, if I go into my index.js file, I can see the dispatch method of the store, and also get the state, right there.


--- 

##### SC
see these things logged in the console

##### VO

And you can see there that dispatch is a method of the store, and also, the state is shown right there and it has a key on it named counter.


--- 

##### SC

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


##### VO

Looking again at our the configuration object that we pass in to the store, you can see that we have a reducer key, and it contains an object.

Each time we add a key to this object, we will create a key in our state.  And, each of these keys will be maintained by a reducer.


--- 

##### SC

focus outline follows the text

    export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        partners: partnersReducer,
        promotions: promotionsReducer,
        comments: commentsReducer,
        user : userReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([logger])
    });


##### VO

Here's what our store is going to look like when we're done with this website.

As you can see, we'll be removing the counter, becayuse we're not yusing it.

And we're going to add a key for each feature that we've built so far, as well as a new one, for a user feature that we're going to add this week in workshop!

We'll start, very soon, with the campsites feature.

But first....do you notice that key below the reducer key that says 'middleware'?

In the next video, I want to talk about middleware a little, and then we'll add the middleware that you see listed here, which is called logger, and will give us important insights into our redux application, by logging each and every action that gets dispatched, as well as the state of our application, before during and after the dispatch of that action.