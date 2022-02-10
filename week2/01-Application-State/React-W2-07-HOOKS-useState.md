React-W2-07-HOOKS-useState
https://reactjs.org/docs/hooks-rules.html

https://overreacted.io/why-do-hooks-rely-on-call-order/


---
A FEW QUESTIONS LINGER IN MY MIND:
is this enough for now on hooks, generally?
should I be more thorough when introducing hooks, like, mention a list of all of the hooks? -- it seems to me that it might be more just offputting and overwhelming to get the big list, particularly because I don't have plans to talk about all of them.
 -- and on this topic -- 
    --should I plan to introduce hooks like useContext and useReducer before we go to redux?
    -- should I plan to teach them custom hooks, like a useModal hook, for instance?
do we need to explore other aspects of useState?
do I need to explicitly refer back to the state object I mentioned in the state video?
and, along those lines, clarify that useState can (but shouldn't) instantiate something like an object?
https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables

but, these thoughts aside, I think it's a pretty good introduction?
my current thinking is to just get started with useState here, and then provide some more context in the FP vs class component video.  
sound good?



---


##### SC

useState hook

##### VO
Welcome back.


---


##### SC

show sc from last video at the end, where we click on the campsite, it updates in the console, but nothing happens.

##### VO

In the last video, we ran into a problem with our app.  We set up an onclick handler, and then we clicked it and our console told us that we were successfully able to select a new random campsite and we updated our selected campsite variable and then.....nothing happend on the screen.

---


##### SC

show diffing slide from virtual DOM video

##### VO

To understand why this is so, we need to revisit React's rendering process.  

Do you remember a few videos ago, when we talked about the virtual DOM, and I said that each time we create a change to the state of our application, React makes new snapshot of the state of our app?  It then compares the new snapshot with the old one, or, as we say, 'diffs' the two snapshots...


---

##### SC
show reconciliation slide from virtual dom video

##### VO

 and then sends a list of those changes to ReactDOM.render?

---


##### SC

show sc from last video at the end, where we click on the campsite, it updates in the console, but nothing happens.

##### VO

And...clearly that isn't happening here.  When we click the select Random Campsite button, our  toggleCampsite function runs, we select a new random campsite, it logs to the console....but nothing changes on the screen.

---


##### SC

show opening react developer tools, scroll down to CamspiteDetail, ultimately with focus outline around CamspiteDetail's props

##### VO

We can get a clue about the reason for this if we take a peek inside our React developer tools.  Instead, of showing the console in my developer tools, I'll select 'Components', and in there I'll scroll down to CampsiteDetail, and click on that, and we can see down here, wwhere the outline is, what the value of the campsite prop is.

And here, when we click the select random campsite....nothing happens.

The reason for this is very simple.  React only re-renders a component when a variable that is part of React's state tree changes.  React isn't tracking this selectedCampsite variable, so no new snapshot is being created and no new render is occurring.

---


##### SC

useState is a hook that let's us hook into React's state

##### VO

There are a number of different ways we can do this, but the best way, in a case like this, is to use the useState hook.


---


##### SC

animate each line as voice over speaks it

Hooks are functions that let us use React features
useState gives us to access React's state
useEffect give us access to React's lifecycle methods
we can write custom hooks
external libraries often use custom hooks


    



##### VO

But first -- what's a hook?  A hook is a function that let's us tap into a feature in the React API.  

So, we can use the useState hook to tap into React's state

And we can use the useEffect hook to tap into React's lifecycle features, in other words, for orchestrating how updates happen over time.
We'll explore that next week when we learn how to create animations with react spring.

There are other hooks, but these are the most important hooks and you should definitely get a grip on these before you explore any others.

We can also write custom hooks, that let us create logic that we can re-use in multiple components.

And external libraries, such as react-router, often use hooks in just this way, to encapsulate certain features.

We'll see a few of these later this week!


But for now, let's keep it simple, and start with the useState hook.

---


##### SC

import { useState } from 'react';
##### VO
First of all, useState is part of the React library, so we need to import it any time we want to use it.


---

##### SC


use focus arrow to show first the variable and where we render it and then where you  can't write a hook, during last line

import { useState } from 'react';

const MyComponent = () => {

    const myVariable = 'hi there'

    return (
        <div>
            {myVariable}
        </div>
    )
}

export MyComponent

##### VO


Here you can see that we have a pretty simple component that is just going to render the text in this variable called 'myVariable'.

And I've given it a background color, so we can see it.

We're going to turn this into a stateful variable using the useState hook.

And, just note, that we can't write the useState up here, or anywhere outside of a component, or it won't work.



---

##### SC


function useState = (initialValue) => {
    // magic in here
    return [statefulVariable, uopdateFunction]
}

##### VO

useState is a function that will take in an intial value and then return an array which will consist of, first of all, a stateful variable, and secondly, a function that we can use to update that stateful variable.


---


##### SC

1. focus arrow on import

2. then focus outline around useState(intialValue)

3. then around the destructuring assignment of the array that is returned

4. then to the onClick prop on the div

import { useState } from 'react';

const MyComponent = () => {
    
    const [myVariable, clickHandler] = useState(initialValue);

    return (
        <div onClick={() => clickHandler('clicked!!!')}>
        {myVariable}
        </div>
    )
}

export MyComponent

##### VO

So, to use useState in a React component, we first import it

then, i'm going to set call useState and pass in an initial value

and i'll destructure the array that it returns into first, myVariable and secondly, a clickHandler that I can use to update myVariable.

and finally, i can use pass that clickHandler in as an onClick prop to my div, so when my div is clicked, I'll update the value stored in myVariable and the text will change

---


##### SC

Run the code in a react app and show it working

(or I can screencast that if that seems too hard!)

##### VO
And if I run this code in a browser, we can see that it works, and the text updates on the screen.




---


##### SC

show the diffing slide again

##### VO

So, we're using useState to set up a stateful variable in our component, and when that variable changes, react will create a new snapshot...


---


##### SC


show the reconciliation slide again

##### VO

which will ultimately force a new render to occur, and show the new text on the screen.

---


---


##### SC

to use useState:
1. import { useState } from 'react';

2. useState must be invoked at the top level of a React component.

3. use destructuring assignment to convert the array that useState returns into a stateful variable and an update function 

4. hooks cannot be called inside another javascript expression

##### VO
So, by way of review, the key points to remember with regard to the useState are:
 

first, we have to import useState to use it,
second, useState can only be invoked at the top level of a React Component.  So in other words, we can't call them from inside a for loop, or as part of a conditional expression like an if statement.
third, we use a destructuring assignment to get both a stateful variable that we can use in our component and a function that we can use to update that stateful variable.  

And remember -- as we said a few videos ago -- in React, we never ever ever update stateful variables directly!  So, we can only update that variable with the update function that useState returns, we can't try to modify it in any other way.



##### SC

show CampsitesPage again

##### VO

Now, I think you probably have everything you need to update our CampsitesPage using a hook.  So, try doing that on your own now!

---

##### SC

focus arrow on the import statement

import { useState } from 'react';


import {
    Container,
    Row,
    Col,
    Button,
} from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectRandomCampsite } from '../features/campsites/campsiteSlice';

const CampsitesPage = () => {
    
    let selectedCampsite = selectRandomCampsite();
    
    const toggleCampsite = () => {
        selectedCampsite = selectRandomCampsite();
        console.log(selectedCampsite);
    }

    return (
        <Container>
            <Button onClick={() => toggleCampsite()}>select random campsite</Button>
            <Row>
                <Col md="7" sm="5">
                    <CampsitesList />
                </Col>
                <Col md="5" sm="7">
                    <CampsiteDetail campsite={selectedCampsite}/>
                </Col>
            </Row>
        </Container>
    );
}

export default CampsitesPage;


##### VO

remember, first we need to import useState at the top of the page.
---


##### SC

1. focus outline around area between arrows below, then delete it

    const CampsitesPage = () => {

    -- >  

        let selectedCampsite = selectRandomCampsite();
        
        const toggleCampsite = () => {
            selectedCampsite = selectRandomCampsite();
            console.log(selectedCampsite);
        }

    < --

        return (
            <Container>
                <Button onClick={() => toggleCampsite()}>select random campsite</Button>
                <Row>
                    <Col md="7" sm="5">
                        <CampsitesList />
                    </Col>
                    <Col md="5" sm="7">
                        <CampsiteDetail campsite={selectedCampsite}/>
                    </Col>
                </Row>
            </Container>
        );
    }

    export default CampsitesPage;



##### VO

1. What I want you to do is to first delete this block of code here 

and replace it with a call to useState.  


---

##### SC

1. focus outline around useState invocation
then on
2. onClick prop of the Button

    const CampsitesPage = () => {

        const [selectedCampsite, toggleCampsite ] = useState(selectRandomCampsite())

        return (
            <Container>
                <Button onClick={() => toggleCampsite()}>select random campsite</Button>
                <Row>
                    <Col md="7" sm="5">
                        <CampsitesList />
                    </Col>
                    <Col md="5" sm="7">
                        <CampsiteDetail campsite={selectedCampsite}/>
                    </Col>
                </Row>
            </Container>
        );
    }

    export default CampsitesPage;

    ##### VO

1. Your call to useState will return an array, which you should destructure.  

The first element in this array will be your selectedCampsite, and the second will be your click handler.

To set an initial value -- a random campsite -- you can just pass in your selectRandomCampsite selector, and invoke it.

2. 
But I'm going to leave it up to you to figure out how to finish implementing this click handler, so that it updates our selectedCampsite variable with a new random campsite.


Don't spend too long on it if you're struggling, but....I believe in you!

And in the next video, I'll be back to show you how I'd do it.  

And then we'll go one step further and, rather than just selecting a random campsite, we'll do something a little bit more helpful, and show a CampsiteDetail when an element in the CampsitesList is clicked.


I'll see you there.
