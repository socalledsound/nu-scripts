

--- 

##### SC
a stateful reducer

##### VO

Welcome back.

--- 

##### SC

Array.reduce(reducer, initialState)

##### VO

In the last video, we looked at the very powerful Array.reduce method, which takes in a reducer function and an initial state.


--- 

##### SC
focus outline on initialState

    const initialState = {
        toggled: false, 
        currentUser: true
        };

    const data = arr.reduce(reducer, initialState);

##### VO

And we saw that that initialState can be any data type that we want, for instance, an object, with several keys.


--- 

##### SC
focus arrow on ...state

    const initialState = {
        toggled: false, 
        currentUser: true
        };


const newState = [action1, action2, action3].reduce((state, action) => {
    if(action.type === 'TOGGLE){
        return {
            ...state,
            toggled: true,
        }
    }


}, initialState)

##### VO

And another important thing that we saw, is that we can spread the values of our acccumulator -- which we can call anything we want, remember, so let's just call it state, for this example -- we can spread the values of that accumulator in, and update just one of the values in the initial value, which in this case is an object named initialState.

So what you're looking at here is a reducer function, which takes in an array of actions, and modifies an initialState, to return....a new State.  The return value of this reducer will be a newState.  

Does that sound at all familiar?  

--- 

##### SC

Redux:

    dispatch actions to the store and use one or more reducers to return a new copy of state.

##### VO

Remember, in redux, we dispatch actions to a central store, which contains the state of our application, and then we use one or more reducers to create a new state.


--- 

##### SC


const initialState = {
   coins: 0,
   health: 100,
}



##### VO

So, in this video, what I want to do, as a prologue to working with redux, is to show you how we can implent a reducer that more closely mirrors how reducers behave in redux.

We'll start with an initialState object, that has keys for coins and health.  Sort of like your typical Super Mario character, right?

We'll leave mushrooms and moving around and princesses and all the rest out, and just distill it to the basics: getting paid and staying alive.


--- 

##### SC

{
    type: 'ADD_COINS',
    payload: 20,
}

##### VO

If you've been paying attention the last few videos, then you already know that we're going to update this initial state by dispatching an action.  And that action will have a type, and possibly also a payload. Here's just such an action.  It has a type of addCoins and a payload of 20.



--- 

##### SC

{
    type: 'SUBTRACT_HEALTH',
    payload: 5,
}

##### VO

And here's another one, that subtracts health.  It's funny how adding coins and subtracting health so often seem to go hand in hand, isn't it?  But, I digress.



--- 

##### SC


[{type: 'ADD_COINS', payload: 20}, {type: 'SUBTRACT_HEALTH', payload: 5}]

##### VO

Now, let's put these action into an array...because Arrays are super nice.   


--- 

##### SC

const initialState = {
   coins: 0,
   health: 100,
}

const currentState = [{type: 'ADD_COINS', payload: 20}, {type: 'SUBTRACT_HEALTH', payload: 5}].reduce(marioReducer, initialState)

##### VO

 Oh, and they have array methods, too.  Like, Array.reduce.

Now, remembering that there should always be a single state, and it should be immutable, we can update our initial state by creating a new copy of our intial state, and setting it equal to a call of array.reduce on those actions that we already created.

We'll need to pass two things in our call to Array.reduce: a marioReducer, which will be, essentially, all of the logic that handles how this coin/health game works, and also our initialState.



--- 

##### SC

const marioReducer = (state, action) => {

}


##### VO
And that reducer will take in two values.  First, the accumulator, which we can call state, and second, each item in the array.  In other words, each specific action.


--- 

##### SC


const marioReducer = (state, action) => {
    console.log(action)
}

##### VO

We can start by just logging those actions to the console.


--- 

##### SC

run the code in node and highlight the output with a focus arrow

    const initialState = {
        coins: 0,
        health: 100,
    }
    
    const marioReducer = (state, action) => {
        console.log(action);
    }

    const actionsArray = [{type: 'ADD_COINS', payload: 20}, {type: 'SUBTRACT_HEALTH', payload: 5}];

    const currentState = actionsArray.reduce(marioReducer, initialState)




##### VO

I'm going to just run this in node.  And you can see that each one of those actions gets logged.

--- 

##### SC
 console.log(currentState);

##### VO

Now, if I also log the value of currentState, what do you think that value will be?

Think about it for a few seconds.  (pause)

Got it?  Ok let's check.

--- 

##### SC

undefined

##### VO
If you knew, and I mean really knew, not just guessed, that it would be undefined, then you are really starting to get these reducer functions.

--- 

##### SC

    const marioReducer = (state, action) => {
        console.log(action);
    }

##### VO



OF COURSE it's undefined, because we're not returning anything at all from our reducer function.


--- 

##### SC

    const marioReducer = (state, action) => {
        console.log(action);
        return 1;
    }

##### VO

Let's return 1 from the reducer.

--- 

##### SC

1

##### VO

And you can see that the value of our state will always be 1.  

Whatever we return from our reducer function will be the value of the accumulator, right?


--- 

##### SC

const marioReducer = (state, action) => {
    console.log(action);
    return state
}

##### VO

Now let's do something a bit more sensical and return state.  And we see...there's our initial state.  This is starting to get just a little bit useful.


--- 

##### SC

 switch(action.type){

##### VO

BUt what we really need, is some way to interpret these actions, and do something with them.  And the ideal control structure is a switch statement, which we can set up to handle each possible scenario.

We'll start by writing the switch, and it will look at the action.type.



--- 

##### SC
      case 'ADD_COINS':
            return{
                ...state
            }
        case 'SUBTRACT_COINS':
            return{
                ...state
            }

        case 'ADD_HEALTH':
            return{
                ...state
            }

        case 'SUBTRACT_HEALTH':
            return{
                ...state
            }

    }


##### VO

Next we'll make four possible cases: ADD_COINS, SUBTRACT_COINS, ADD_HEALTH, SUBTRACT_HEALTH.

And each one will return a new state object, that simply spreads state in, for now.

--- 

##### SC

        default :
            return {
                ...state
            }

##### VO
Or, actually, FIVE cases.  Because we need a default case, so that if an oddly formed message gets sent, we'll still return a copy of our current state.


--- 

##### SC

        case 'ADD_COINS':
            return{
                ...state,
                coins: state.coins + action.payload,
            }

##### VO

And now, we just have to write  the change that we wish to see in the world, for each case.  If someone somewhere wants to add coins, let's let them do it.



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

And for each type of message that we wish to receive, we can set up a different case.  If the message is to subtract, we'll subtract the coins, and so on.

--- 

##### SC

show output in the terminal


##### VO
And now we just have to save that, and run this again in node and....voila!  


We've written a reducer that takes in a string of actions and returns a new copy of state.



--- 

##### SC

Redux = FLUX + reducer functions

##### VO

And I hope that you're starting to see how this can be a very powerful pattern for managing more complex state.

Remember, we've already learned that Redux is an implementation of the FLUX model in which we use reducer functions to manage state.

Soon we'll write some of these reducers, with the help of redux toolkit.  

--- 

##### SC

useReducer hook

const [state, dispatch] = useReducer(reducer, initialState)


##### VO


But first, some good news.  You can ALSO use reducer functions in react, without redux, using the useReducer hook.  

The useReducer hook takes in a reducer function and an initial state object and provides us with an updatesd state and a dispatch method, for dispatching actions.

It's a great way to handle slightly more complicated state than useState allows for, without bringing redux into the picture.

And, I think it's also a great way to get ready for learning redux.


--- 

##### SC

show todo list in  browser
code repo:  https://github.com/socalledsound/usereducer-todo

##### VO

So, in the next video, I want to show you how we can use useReducer to manage the state of a simple todo list.

I'll see you there.

# end

