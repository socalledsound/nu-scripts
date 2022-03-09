
React-W4-06-useReducer

code for example: https://github.com/socalledsound/usereducer-todo

--- 

##### SC

Hooks: useReducer

##### VO
Welcome back.

--- 

##### SC


 const marioReducer = (state, action) => {
    console.log(action);
    switch(action.type){
       
        case 'ADD_COINS':
            return{
                ...state,
                coins: state.coins + action.payload,
            }

        case 'SUBTRACT_COINS':
            return{
                ...state,
                coins: state.coins - action.payload,
            }

        case 'ADD_HEALTH':
            return{
                ...state,
                health: state.health + action.payload,
            }

        case 'SUBTRACT_HEALTH':
            return{
                ...state,
                health: state.health - action.payload,
            }
        default :
            return state
    }
    
}


##### VO

In the last video, we looked at how we can write a reducer function that updates state for us.  Our reducer function takes in the current state, and an action, and uses some sort of conditional logic -- often a switch statement -- to interpret the action and then return an updated copy of the original state.







--- 

##### SC



    const initialState = {
        coins: 0,
        health: 100,
    }
    

    const actionsArray = [{type: 'ADD_COINS', payload: 20}, {type: 'SUBTRACT_HEALTH', payload: 5}];

    const currentState = actionsArray.reduce(marioReducer, initialState)
    console.log(currentState);
    // 


##### VO

And in that example we started with an array of actions and called array.reduce on that array of actions, passing in our reducer function and an initial state and producing a current state.

--- 

##### SC

show todo list in action

##### VO

But that example didn't have any visual component and it wasn't using React.  So in this video, let's take this notion of reducer functions one step further, and look at how we can use them in a bona fide React application.  

Here, you're looking at a simple list of items.  And this could be a shopping list or a list of things that someone likes, or a list of things that they're allergic to....it doesn't really matter.  A list like this could be the basis for many different types of app.  And you're welcome to use the code from this exercise as the basis for making your own shopping/moving/organzing/todo-ing application!

But, managing lists like this, whether they're lists of emails or users or items in a shopping cart, is a very common requirement for an application.  You've already learned how to  use array.map to create lists like this one but the important thing to notice here is that I can add an item, by typing in this box, and then pressing the + button

And I can remove one by pressing the x next to the item.


--- 

##### SC


show reducer:


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
And if we look at the code, you can see that the core logic of this process is....a reducer function, just like the one we were looking at in the last example.

This reducer function waits for an action, and if it recognizes the action, it updates the state of our application.

You can see that there are cases for ADD_ITEM and REMOVE_ITEM, and each case updates the state of our application in an appropriate way when that message is received.


--- 

##### SC

focus on:

            case 'ADD_ITEM' :
            return {
                ...state,
                items: state.items.concat([{id: state.items.length, name: action.payload}])
            }

##### VO

If the action has a type of 'ADD_ITEM', then we first spread the current state in, and then we set the items key equal to a new array, which will be the result of calling state.items.concat() and passing in an array that we wish to concatenate with our old array, which will be an array with just one new item in it.



--- 

##### SC

Array.concat() takes in an array as a parameter and combines it with the array that it is called on to create a new, concatenated array

##### VO

Array.concat() is a sort of like the immutable cousin of Array.push(), because rather than simply pushing a new item to our array, it generates a new array from a combination of the old array and the array that you pass in.  


--- 

##### SC

focus on:

        case 'REMOVE_ITEM' :
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }

##### VO

And if the action has a type of 'REMOVE_ITEM, then we once again spread state in, and then we once again update the items key, but this time, we use the array.filter method to return all of the items in the array that have an id that isn't the same as the one which is set as the payload key of the action.  In other words, we remove the item that matches the action.payload.

--- 

##### SC

focus on:

        default: 
            return state;

##### VO

And then of course, there's a default state, which simply returns state if the action.type isn't recognized.

--- 

##### SC

show the two reducers side by side


##### VO

And I hope you can see the similarities between this example and the one that we looked at in the previous video -- it's very similar, just, more useful.  This is the basic structure of most reducers in redux.  We take in state, and an action, and then we return a new version of state.  

As we start to build out our nucampsite, we'll be writing structures like this to manage the global state of our nucampsite, with the help of redux toolkit.


--- 

##### SC

focus outline follows text

useReducer

    useReducer(reducer, initialState)

##### VO

But in this video I want to show you the useReducer hook, which let's us use the same sort of state management WITHOUT redux.  

Similar to array.reduce, useReducer takes in a reducer function, and an initalState.

--- 

##### SC

focus outline follows text

useReducer

    const [state, dispatch] = useReducer(reducer, initialState)

##### VO

And, similar to useState, useReducer returns an array that contains a stateful variable and a function that we can use to update that function.

Here, you can see that I'm calling the stateful variable just 'state', and the update method is called dispatch.

--- 

##### SC

const initState = {
  items: [
    {id: 0, name: 'milk'}, 
    {id: 1, name: 'coffee'},
    {id: 2, name: 'mochi'},
  ],
  currentUser: {id: '0010293', username: 'sam'},
};


##### VO

The initialState variable is an object, with several keys.

And, the nice thing about this approach is that we could expand this, with more action cases in our reducer and more stateful variables, if we wanted to.  



--- 

##### SC

ACTION

    {type: 'DO_SOMETHING', payload: data}


##### VO

Now, just by way of review, remember that to follow this FLUX inspired model that both Redux and this useReducer hook are descended from, we're going to use the dispatch method to dispatch an action.

And if you remember, an action is just a plain old javascript object that has a type key and optionally has a payload key that contains some data.



--- 

##### SC

dispatching an action

dipatch({type: 'DO_SOMETHING', payload: data})


##### VO

So when we call dispatch -- the function that we'll use to update our state variable -- we'll dispatch an action, by passing in to our dispatch function.  

--- 

##### SC

add an item:

dispatch({type: 'ADD_ITEM, payload: item})


##### VO

In this example, if we want to add an item, we'll dispatch an action with a type of 'ADD_ITEM' and a payload of the item that we want to add.


--- 

##### SC


remove an item:

dispatch({type: 'REMOVE_ITEM, payload: item})


##### VO

And if we want to remove an  item, we'll dispatch an action with a type of REMOVE_ITEM and, again, a payload of the item that we want to remove.

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



##### VO

And in either case, that call to dispatch will dispatch that action to be reduced by our reducer function, which will receive that action, and update the state of our application accordingly.


--- 

##### SC

focus arrow on approproate button follows text

show working app with button clicks


##### VO

In either case, that action will be dispatched when the user clicks a button on the interface.

So, if a user clicks this button here, with the + icon on it, then the add item action will be dispatched.

And if a user clicks this button here, with the x on it, then the remove item action will be dispatched, and that specific item will be removed from the list.




--- 

##### SC

focus outline around dispatch, follow the text


            function App() {

            const [state, dispatch ] = useReducer(listReducer, initState)
            const { items, currentUser } = state;

            return (
                <div className="app-container">
                <div>
                    {
                    currentUser && 
                    <h5>{currentUser.name}</h5>
                    }

                </div>
                <div className="input-container">
                    <AddItem dispatch={dispatch}/>
                </div>
                <div className="list-container">
                    {
                    items && 
                    items.map(item => {
                        return (
                        <ListItem key={item.id} item={item} dispatch={dispatch}/>
                        )
                    })
                    }
                </div>
                </div>
            );
            }

##### VO

Now, if we look at our App component, we can see how we'll use this dispatch method in our app.

First, at the top of the component, we useReducer, which takes in our listReducer and our initial state, which we've already seen, and returns an array with the current state of our application and the dispatch method that we'll use to update that state.


And right here, you can see the AddItem component, and you can see that we pass dispatch in to it.

And then, below, you can see the ListItem component.  When we render our list of items, using array.map, we render each item using this ListItem component, and we pass the dispatch method in to each of those items.

--- 

##### SC

        import { useState } from 'react';

        const AddItem = ({dispatch}) => {


            const [inputValue, updateInput] = useState('');

            const handleInputChange = (e) => {
                updateInput(e.target.value);
            }

            const submitHandler = (e) => {
                e.preventDefault();
                dispatch({type: 'ADD_ITEM', payload: inputValue});
                updateInput('');
            }
            


            return ( 
                <form onSubmit={submitHandler}>
                <input type='text' value={inputValue} onChange={handleInputChange}/>
                <button type='submit'>+</button>
            </form>
            );
        }
        
        export default AddItem;

##### VO

Inside the AddItem component, you can see a very basic controlled form, similar to one that we saw last week, with one input and a submit button.

And when we click the submit button, we dispatch an action, with the information from the text input as a payload.



--- 

##### SC

focus outloine around ADD_ITEM

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


##### VO

And then of course when that action hits our reducer function, we create a new item for our list, by giving the item and id and setting the name of the item to be the payload of this action.


--- 

##### SC


        const ListItem = ({item, dispatch}) => {
            return (  
            
                    <div className='list-item'> 
                    <button className='remove-item-button' onClick={() => dispatch({type: 'REMOVE_ITEM', payload: item})}>X</button>
                    <p className='item-text'>{item.name}</p>
                    </div>
            );
        }
        
        export default ListItem;


##### VO

And similarly, in our ListItem component, when the remove item button is clicked, we call dispatch, and dispatch an action with a type of REMOVE_ITEM and a payload of that specific ListItem's item.  



--- 

##### SC

focus outline on id

{id: 0, name: 'milk'}


##### VO

And of course that item that we dispatch has an id associated with it, which we can use to filter it out, in our listReducer.  Or, really, in this case, filter all of the items that don't have that specific id, and return the result as a new list of items.


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

##### VO


And I want to point out that the thing that is nicest about this model, is all of our udate logic is in our reducer.  And that means that we're doing a pretty good job at seperating concerns -- in other words, the logic of our application is seperate from the code that renders the view.

If we want to update the logic in any way, it's all right here in our reducer.

We could drop in a completely different interface, without affecting our application logic, or data, in any way.  We'd just have to make sure that we dispatched the appropriate actions.

And if we want to add some more functionality, like for instance a button that deletes all of the items in the list....we can add that logic right here, and we just have to we make sure that any new button also has access to the dispatch method.


--- 

##### SC


show the todo app in the browser



##### VO

And this App, honestly, is pretty nice!  It works, just as it is, and with the current feature set and complexity of this app, I want to say there is absolutely no need for more complex state management.  



--- 

##### SC

YOU MAY NOT NEED REDUX.

##### VO

And, honestly if there's one and only one thing that you absolutely postively have to learn about redux, it's that, in many cases, you don't need it.

This quote on the screen now comes from the redux docs, and you can see that, right there in the docs, they remind you, hey-- you might not need redux.

And this also appliest to every single other state management library out there!

So how do you know when you need a state management library?

We'll talk about that in the next video.  I'll see you there.




