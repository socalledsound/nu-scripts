React-W2-04-APPLICATION-STATE

does this need more code examples?  more on state outside of the context of react?

---
##### SC
State
##### VO

Welcome back.

---
##### SC


image: screen shot of campsitesList after workshop

##### VO

So far, this nucampsite that we've been building is a static site, meaning that it doesn't have any way to respond to user input and it doesn't change in any way, over time; we just display an array of campsites in a gallery.

That's all going to change this week.  

---

##### SC

image: screen shot of CampsitesPage with CampsitesLIst on left and CampsiteDetail on right.

##### VO
And we're going to start by making this list of campsites more dynamic.  We'll add a way for users to select a campsite by clicking on it in our CampsitesList, and we'll display the selected camspite over here, to the side, as you can see.

---

##### SC

show campsites page code with focus outlines where described

is

const selectedCampsite

...then where we pass it in as a prop
##### VO

But in order to do this, we'll need a way to keep track of the currently selected campsite.  We'll want to store it in a variable named selectedCampsite.  

Then, we can pass the data for  that currently selected campsite into a react component and render it on the screen.

This selectedCampsite variable that we're going to create will be an example of a stateful variable.


---

##### SC

what is state?  And what is a stateful variable?

##### VO

But what is state?  And what is a stateful variable?  In this video, we'll answer those questions and also describe how we handle state in a React application.

---

##### SC

stateful variables keep track of changes in an application


##### VO

A stateful variable is a variable whose value changes over time, to reflect updates as they happen in your application.  

---

##### SC

stateful variables keep track of changes in an application

State is the status of those stateful variables at any given point in time.

##### VO
And state is the status of those stateful variables at any given point in time.


---

##### SC

show a button on the left side with a dark color

let buttonClicked = false;

##### VO

For instance, if you have a variable named buttonClicked... 

---

##### SC

show a button on the left side with a light color

let buttonClicked = true;

##### VO

and you update it to true after a button has been clicked, that buttonClicked variable is a stateful variable which keeps track of the state of a button.

---

##### SC

application state is the state of an application

##### VO

We can talk about 'global' or 'application' state, which will be those stateful variables which are shared between different part of a program, or in the case of React, between different components.
 


---

##### SC

local state is the state of a specific component

##### VO

And, we can also talk about local state, like the state of a button, which might be a component in a React application.

---

##### SC

state for a Button component

const state = {
    clicked: false
}

##### VO


In React, state always refers to a state object, which can be either a local state object, which is maintained in the scope of a specific component...

---

##### SC

application state

const state: {
    currentUser: 'Sam'
}

##### VO

Or it can be a state object that maintains the state of our entire application, which will 
be maintained inside the scope of the store of our application.  

Complex global state in React is usually handled by a state library, such as redux, which you'll be learning about in depth in week 4.  But depending on the complexity of our application, you may or may not have a need for global application state manager like redux.

---

##### SC

keep state as local as possible!

##### VO

One very important thing to keep in mind as you design your application is that it's a good idea to always try to and locate state as close to the place where you're going to use it.  In other words, keep state as local as you can.  


---

##### SC

STATE IN REACT

focus arrow on first line

    state in React is immutable


##### VO

In React, the state object, whether it's local or global, is always immutable.  


---

##### SC

STATE IN REACT

focus arrow on second line

    state in React is immutable...
    rather than modifying the old state, we create a new state

    on left side show
    let buttonClicked = true
    with red circle with line through it over the top


    on right side show 
    const state = {
        buttonClicked: true
    }

##### VO

This means that, instead of using let variables like we did with our buttonClicked variable before, we'll create a state object.  And, rather than updating this state object when we want to change the state of our application, we'll create an entirely new state object.


---

##### SC

STATE IN REACT

focus arrow on third line

    state in React is immutable
    rather than modifying the old state, we create a new state
    state can only be modified via specific state-setting functions
    

##### VO

And, in React, we can't update state directly.  We can only update it using specific functions.  


---

##### SC

    React.useState() is used to manage local state

##### VO

To manage local state, we'll use React Hooks, and in particular, the useState hook, which you'll learn about soon.


---

##### SC

focus arrow on this line
the store maintains global application state




##### VO

Our global application state will be maintained in something called a store.


--- 

##### SC

open app folder and click on the store.js file


##### VO

Since we used the redux template to configure our nucampsite, we already have a store, even though we're not using it yet.

Our store is inside our app folder, with our application's data.

That store.js is the central repository of our application's state.  We're not using it yet, because our data is static -- we're not fetching it from a server -- and we're not sharing any stateful variables between components.


--- 

##### SC

store.js focus outline around 

{
    counter: counterReducer
}

##### VO


But you can see here that the default store is keeping track of a counter that came as part of the template.  And you can also see that the value of that counter is being set by something called a counterReducer.

---

##### SC

focus arrow on second line
    the store maintains global application state
    reducer functions are used to update application state

##### VO

Reducer functions are used to manage global application state -- state which is shared between components.


--- 

##### SC

store.js focus outline around 
import counterReducer from '../features/counter/counterSlice';


##### VO

We'll explore reducer functions in week 4, but for now, just notice that, at the top of our store.js page, you can see that our store is importing a counterReducer from a file inside the counter feature called counterSlice.

---

##### SC

focus arrow on third line
    the store maintains global application state
    reducer functions are used to update application state
    each feature corresponds to a slice


##### VO

For each feature in our application, we'll create a corresponding portion of our global application state which we'll call a slice, and, if we want to pass any stateful data back to our store, we'll export a reducer for that slice. 


--- 

##### SC

A Slice is the part of an application's state relevant to a specific feature

(show a pie chart here with state as a circle and then several pie slices?)

##### VO

A slice is, basically, the portion or slice of an application's state that pertains to a specific feature.

Using slices, we can locate that logic close to the components that use it -- keeping it just a little more local! -- while also making the results of the logic accessible to our entire application.


---

##### SC

focus outline around camspitesSlice when we start talking about it

list slices:

    campsitesSlice
    partnersSlice
    promotionsSlice
    commentsSlice
    userSlice

    (show pie chart again but with  each slice labeled?)

##### VO

Ultimately, we're going to be making a slice for each of the datasets that we have in our shared folder, and another one to manage state for a currently logged in user.

In the next exercise, we're going to start creating our first slice, our campsitesSlice.  We're not going to integrate redux just yet, so we won't need to write a reducer.  

---

##### SC

import { CAMPSITES } from '../../app/shared/CAMPSITES';

##### VO

Instead, for now, we'll just bring our CAMPSITES array into our campsitesSlice, 

##### SC

import { CAMPSITES } from '../../app/shared/CAMPSITES';


export const selectAllCampsites = () => {
    return CAMPSITES 
}  

export const selectCampsiteById = id => {
    return CAMPSITES.find( el => el.id === parseInt(id))  
}  

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())]
}

export const selectCampsitesAboveElevation = (elevation) => {
    return CAMPSITES.filter(campsite => campsite.elevation > elevation)
}


##### VO
And then we'll write a few selector functions, which we can use to select specific portions of the data stored in our campsitesSlice.

---

##### SC

export const selectCampsitesAboveElevation = (elevation) => {
    return CAMPSITES.filter(campsite => campsite.elevation > elevation)
}


##### VO

As you can see in this example, selectors are just functions that return specific pieces of data.  Here, we have a selector which filters out an campsites with an elevation above the value that is passed in as an input parameter.

We might use a selector like this if we wanted to give users the ability to screen out certain campsites, perhaps using a search bar.


##### SC

graphic

    Seperation of concerns

state / data           view / components


##### VO

This approach -- using slices and selectors, might seem like a lot of extra work at first, but it's an extremely important bit of extra work, sort of like laying a decent foundation for a house before you start building it.

This way, we can keep any reference to our data here, in the slice.

If we decide to alter or replace our CAMPSITES data, we only need to update it here, in the slice.

Any time we want to select a new portion of that campsites data, we'll come here and write a new selector function.

And if we have two or even twenty components that need to have access to the CAMPSITES data, they will all come here -- to this slice -- for that data.

So this file will become the single source of truth for everything campsite related, and we'll know, if something is going wrong with our campsites data, it will be here, not in one of our many campsites related components, which can then focus on what their job, which is taking data and rendering it to the screen.

Make sense?


---

##### SC

    STATE

the state of our application is the current status of all of the stateful variables in our application


##### VO

Now  -- I know that this video had a lot of pretty high level and abstract information!  So let's review the important things you should take away from this video.

F`irst of all, what is state?  The State of our application is the current status of all of the stateful variables in our application.

And, eventually, we'll be using redux to help us manage our application state.


---

##### SC

    STATE

the state of our application is the collection of all stateful variables in our application
local state is the state of a specific component

##### VO

Local state refers to the state of a specific component, for instance, the status of a button on our interface.  

---


##### SC

 STATE
`
the state of our application is the collection of all stateful variables in our application
local state is the state of a specific component
keep state as local as possible

##### VO
 Depending on the needs of our application, we may or may not need to let the rest of our application know about whether a button has been clicked, but if possible, we should always try to keep our state as local as we can.


---


##### SC

 STATE

    In React

    the useState hook is used to update local state
    reducers are used to update global application state
    ....we never modify state directly

##### VO

In React, we'll use the useState hook to update local state


---


##### SC

 STATE

    In React

    the useState hook is used to update local state
    reducers are used to update global application state
    ....we never modify state directly

##### VO

And we'll use reducer functions to update our global application state. 

We never, ever, ever, ever, ever modify, or MUTATE state directly, because, first of all, React won't let us and second of all, this kind of mutation of state very often leads to bugs.


---

##### SC

 STATE

    A slice is the portion of our application's state that pertains to a specific feature

##### VO

And finally, all of the logic pertaining to state management for a specific feature is kept in something called a slice.  

---

##### SC

 STATE

    A slice is the portion of our application's state that pertains to a specific feature
    we can use selectors to select a specific portion of a slice.

##### VO

And we can use a type of function called a selector to select a specific portion of that slice. 


---

##### SC

graphic

    Seperation of concerns

state / data           view / components
##### VO

And finally, I mentioned that in everything state-related, we should strive to seperate the code that generates what we see on the screen -- what we call the view layer -- in other words, our React components, from the data and logic that it will display.


And I hope that that kinda sorta makes sense!  If not, don't fret too much, this idea of state is tricky, even for seasoned developers.  
---

##### SC

show finished CampsitesPage

##### VO



And I don't know about you, but I never feel like I understand something until I actually code it.

So let's do that.  In the next few videos, we'll build a CamspitesPage which will implement local state using the useState hook.

But before we do that, let's set up this campsiteSlice that I talked about in this video.  

IN the next video, we'll make that campsuitesSlice and also write a few selectors that we can then use in our CampsitesPage.  I'll see you there.


# END
# below here just dead ends and stuff I cut out
# END

# END



But, currently, our store IS keeping track of the state of the counter feature that you saw in our initial configuration video, even though we're not using it any more.

--- 

##### SC

show the initial configuration page with the Counter feature

##### VO

Remember the Counter feature?  Where we could click on various buttons and update a Counter?


--- 

##### SC

fuschia outline around 

 counter: counterReducer,

 which moves to 

import counterReducer from '../features/counter/counterSlice';


##### VO
The state of that Counter is being maintained, here in the store.  We have a few things to learn before you can fully understand what's happening here, but I want you to notice that the store is setting the state of the counter using something called counterReducer, which it's importing from a file inside of the counter feature called counterSlice.

--- 

##### SC

A Slice is the part of an application's state relevant to a specific feature

##### VO

A slice is, basically, the portion or slice of an application's state that pertains to a specific feature.

Using slices, we can locate that logic close to the components that use it -- keeping it just a little more local! -- while also making the results of the logic accessible to our entire application.



---

##### SC


##### VO


In an interactive website



---


##### SC

let lightSwitch

##### VO

But let's start with a simple example, which will hopefully help illustrate why React handles state in the way that it does.


One of my favorite examples of state is that of a light switch, which can be either on or off.

We can imagine this light switch in code by creating a lightSwitch variable and setting it equal to false -- or, off, in boolean terms. 

We'll write it as a let variable, because we're going to want to change it later.


---


##### SC
let lightSwitch = false;
const toggleSwitch = () => {
    lightSwitch = !lightSwitch
}


##### VO

Now, we can create a click handler -- or, let's call it a 'flip handler' in this case, because we have to flip light switches -- that will simply flip the value of this boolean variable back and forth, by setting the value of light switch to be 




---


##### SC

##### VO

---


##### SC

##### VO



seperation of concerns





the store


##### SC

const selectCampsiteByID = (id) => {
    return campsites.find(campsite => campsite.id === id)
}

const selectedCampsite = selectCampsiteBYID(0)
console.log(selectedCampsite)

##### VO

Soon, we'll write a campsite selector, if we wwant people



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

---


##### SC

##### VO

---