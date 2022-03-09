React-W4-11-createSlice

https://github.com/socalledsound/rtk-todo

https://redux-toolkit.js.org/api/createslice

--- 

##### SC

createßlice

##### VO

Welcome back.


--- 

##### SC

the store is the repository of all of the data in our redux application

##### VO

Previously, we've looked at this thing called a store, which we can use to 'store' data in our redux application.  


--- 

##### SC

import { configureStore } from '@reduxjs/toolkit';

##### VO


And we've looked at how we can configure that store, by using the configureStore function that redux toolkit provides.

--- 

##### SC

focus outline around empty congfig object

export const store = configureStore( {} );

##### VO

The confugureStore function takes in a configuration object.


--- 

##### SC

export const store = configureStore({
reducer: {
    counter: counterReducer,
},
});

##### VO

That configuration object has a key called reducer, which is itself an object, composed of one or more keys that reference a reducer.

The default application that template redux creates for us has one of those keys, 'countr' and it references a 'counterReducer', which is exported from
the counterSlice.js file in the counter feature.



--- 

##### SC

diagram of state and slices

a slice is section of state which is dedicated to managing the data for a specific feature



##### VO

We've already talked about this notion of slices -- a slice is a specific section of our application state which is dedicated to managing the data for a specific feature.

--- 

##### SC

focus outline around each slice file in the vs code file browser

##### VO

And we already have our data organized into slices.  We have a campsitesSlice, a partnersSlice, a promotionsSlice and a commentsSlice.

--- 

##### SC


diagram showing slices seperated by some space



##### VO

But, at this point, these aren't really slices, because they're not actually organized into a coherent whole at any point.  They're more like independent entities.  

--- 

##### SC

focus outline around empty object

const exampleSlice = createSlice( {} );


##### VO


In order to bring them all together into our redux store, we're going to use a function that redux toolkit supplies called createSlice, which will take in a configuration object.

--- 

##### SC
focus arrow follows the text

const exampleSlice = createSlice( {
    name: 'example',
    initialState: {data: [{id:0, name:'thing1'}], isNice: true },
    reducers: {
            //reducers for this slice go here
    },
} );

##### VO

That configuration object will have a name and an initialState and then it may also have some reducers.

--- 

##### SC

focus outline follows the text

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {id: 0, name: 'milk'}, 
    {id: 1, name: 'coffee'},
    {id: 2, name: 'mochi'},
  ]
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,

})



##### VO
For instance, if we wanted to move the logic from the todo app that we looked at in the useReducer video into a todoSlice, it would look like this.

We'd start by importing createSlice from redux toolkit, and then we'd create our initial state, just like we did before.

Then we'd declare a todoSlice variable and set it equal to the return value of createSlice.

Next, we'd give it a name, and then we'd set the initialState key to that initialState object.

And since the key and the value are the same, we can just write initialState, which is a nice shorthand.


--- 

##### SC

focus outline around reducers

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {id: 0, name: 'milk'}, 
    {id: 1, name: 'coffee'},
    {id: 2, name: 'mochi'},
  ]
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItem : (state, action) => {
                 return {
                    ...state,
                    items: state.items.concat([{id: state.items.length, name: action.payload}])
                    }
        },
        removeItem: (state, action) => {
                 return {
                    ...state,
                    items: state.items.filter(item => item.id !== action.payload.id)
                }
        }
    }

})



##### VO



Next we can declare our case reducer functions.  

These 'case reducer functions' are a kind of sort of nifty way of abstracting the switch statement that we've seen in all of our previous examples that use reducers.

Each of them takes in state and an action, and it returns a new state object.


--- 

##### SC

const listReducer = (state, action) => {
  console.log(action);
  switch(action.type){
    case 'ADD_ITEM' :
      return {
        ...state,
        items: state.items.concat([{id: state.items.length, name: action.payload}])
      }
  case 'REMOVE_ITEM' :
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      }
  default: 
    return state;
  }

}



##### VO

Remember, with useReducer, we had a reducer function that looked like this.  It took in state and an action, and then we had a switch statement that made the appropriate changes to state, and each case returned a new state object.



--- 

##### SC

focus outline around the return value of each action creator at the appropriate time

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {id: 0, name: 'milk'}, 
    {id: 1, name: 'coffee'},
    {id: 2, name: 'mochi'},
  ]
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItem : (state, action) => {
                 return {
                    ...state,
                    items: state.items.concat([{id: state.items.length, name: action.payload}])
                    }
        },
        removeItem: (state, action) => {
                 return {
                    ...state,
                    items: state.items.filter(item => item.id !== action.payload.id)
                }
        }
    }

})



##### VO

These functions that we're declaring inside the reducers object are similar, in that they take in state and an action, but rather than creating cases, we just create these functions that specify how we want to handle state for the specified action.

Now I want you to pay particular attention to the return value here, which is an object that folds in the complete state and then sets the value of a specific key, which is how we immutably update state.

--- 

##### SC

'Immer is a library that simplifies the process of writing immutable update logic'
---redux toolkit docs

(in other words, Immer converts our mutating logic into its immutable equivalent)



##### VO

But with redux toolkit, there's another option, which can be quite useful.  Internally, redux toolkit implements a library called Immer, which converts any state-mutating updates that we make inside a reducer into their immutable equivalents.


--- 

##### SC

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItem : (state, action) => {
           state.items.concat([{id: state.items.length, name: action.payload}]);
        },
        removeItem: (state, action) => {
            const filteredItems = state.items.filter(item => item.id !== action.payload.id);
            state.items = filteredItems;
        }
    }

})

##### VO

In other words, if we want to, we CAN perform mutating operations inside these reducers.  Here you can see these more mutable equivalents.  And you can see that, even in a case like this, it does save a little space, so this can be a nice thing to be able to do.


--- 

##### SC


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItem : (state, action) => {
           state.items.concat([{id: state.items.length, name: action.payload}]);
        },
        removeItem: (state, action) => {
            const filteredItems = state.items.filter(item => item.id !== action.payload.id);
            state.items = filteredItems;
        }
    }

})
console.log(todoSlice);

// todoSlice

{
    name: 'todo',
    reducer: (state, action) => newState,
    actions: {addItem, removeItem},
    caseReducers: {addItem, removeItem },
    getInitialState: () => initialState
}


##### VO

Now, when we call createSlice, and pass in this configuration object, it will take what we pass in and create a slice, which will be an object with a signature that looks like this.

It will have a name key, a key that contains a reducer function, and an action creator function for each key that we added to the reducer.  It will also have a key for the caseReducers that we specified and a function named getInitial state.


--- 

##### SC

(in the github repo linked above you can find the app for this, run it and show this in the console)

        name: 'todo', actions: {…}, caseReducers: {…}, reducer: ƒ, getInitialState: ƒ}
        actions: {addItem: ƒ, removeItem: ƒ}
        caseReducers: {addItem: ƒ, removeItem: ƒ}
        getInitialState: ƒ ()
        name: "todo"
        reducer: ƒ (state, action)
        [[Prototype]]: Object


##### VO
Here, you can see that todoSlice, logged to the console.

We won't generally have any use for the caseReducers or the name, or the getInitialState method.  



--- 

##### SC

focus outline around exports

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {id: 0, name: 'milk'}, 
    {id: 1, name: 'coffee'},
    {id: 2, name: 'mochi'},
  ]
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItem : (state, action) => {
           state.items.concat([{id: state.items.length, name: action.payload}])
        },
        removeItem: (state, action) => {
               return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
                }
        }
    }

})

export const todoReducer = todoSlice.reducer;

export const { addItem, removeItem } = todoSlice.actions;


##### VO

But we will want to pull the reducer off of that object and export it, and we'll also pull off and export each of those actions.



--- 

##### SC

import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

##### VO

And then we'll use the reducer in our store.  For each reducer that we make, we'll import that reducer into our store, and then specify a key on our store's reducer object, and set it's value equal to that reducer.

--- 

##### SC

    import { configureStore } from '@reduxjs/toolkit';
    import logger from 'redux-logger'
    import { campsitesReducer } from '../features/campsites/campsitesSlice';
    import { partnersReducer } from '../features/partners/partnersSlice';
    import { promotionsReducer} from '../features/promotions/promotionsSlice';
    import { commentsReducer } from '../features/comments/commentsSlice';
    import { userReducer } from '../features/user/userSlice';

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

So over the next few videos, we're going to just that, with our nucampsite.  We'll create a slice for each of our features, and export a reducer from that slice.

--- 

##### SC

import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES';


const initialState = {
    data: CAMPSITES,
}


const campsitesSlice = createSlice({
    name: 'campsites',
    initialState,
    reducers: {},
})

export const campsitesReducer = campsitesSlice.reducer;


##### VO


WE'll start in the next video, with our campsitesSlice.  As you can see here, we'll import createSlice, set up our initialState, and then create our slice.  And notice that, for now, we won't have any caseReducers and we won't be exporting any actions.  We'll just export our campsitesReducer.



--- 

##### SC

    import { configureStore } from '@reduxjs/toolkit';
    import logger from 'redux-logger'
    import { campsitesReducer } from '../features/campsites/campsitesSlice';

    export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([logger])
    });


##### VO

And then we'll add that campsites key in the store, and set it equal to the campsitesReducer.

So, we're essentially just passing that campsites data in to redux and storing it there.  But don't worry, soon we'll add some actual functionality to this slice, so be patient.

Now, if you think you can create that campsitesSlice on your own, given what we've just talked about in this video.....then go for it!  And if it breaks, or if you feel like you need a little more guidance, in the next video, I'll walk you through this process step by step.  I'll see you there.


--- 

##### SC



##### VO

