
--- 

##### SC

when do we need redux?

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

But what happens if this app gets a little bigger?  Let's say we add a Login page, and a currentUser item in state.  And, just for fun, maybe a shopping cart, that's linked to this list in some way, so users can buy the things on the list and we can make some money.

Now, our state is a little bit more complex.  And, most likely, each of these components needs to know who the current user is, and the shopping cart needs to know what the list items are, too, and we also need to make sure that the dispatch method can get where it needs to get.

--- 

##### SC

  prop diagram with arrows.  use animated arrow to go from the app

  App --> List --> ListItem

##### VO

We don't necessarily need to change much, because, as we've just seen, we can use props to pass the data and the dispatch method, from our App.js, where our logic is located, to the components that need that logic, right?

So, we can just pass the prop from the App component, through the parent List component, and to it's destination, the ListItem.   

But the problem, here, is that now, all of these components, the App and the List and the ListItem, are more or less fixed in place.  

This is known as 'coupling' components.  We generally want to avoid coupling components, becase, now, the ListItem is depending on the List to get its props, which is depending on the App.  


--- 

##### SC


 App --> HomePage --> List --> ListItem

##### VO

And if we start adding more layers to this -- maybe we have a HomePage, and the List is part of that -- then this coupling gets even worse.  

Because now if we want to change the Homepage, or the List, or modify or move the ListItem, then this fragile, prop-dependent architecture will be vulnerable to any of those changes.


--- 

##### SC

Prop Drilling:
    passing data from one component to another 
    by passing it through compoennts that do not use that data


##### VO


This is a very common problem, as a small app turns into a bigger app.  In fact it's so common that it's an anti-patterns in react, and it's called 'prop-drilling'.

Prop drilling is, literally, drilling a prop down through several layered components to get to a destination, far from it's origiin.

As a basic rule of thumb, if you find yourself passing props through two or more children...it's usually a good idea to look for another solution.

--- 

##### SC

diagram showing redux distributing data 



##### VO

And THAT'S when you need redux, or another state management library.

Using redux, we can distribute our the data in our store to any component in our app, without using props.

And we can also distribute the dispatch method, to any component that needs it, again, without drilling props.

How does redux do this?  That's the subject of the next video.  I'll see you there.
