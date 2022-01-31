React-W2-07-HOOKS-useState


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

##### VO

  


---


##### SC

useState is a hook that let's us hook into React's state

##### VO

The solution to this problem is to use the useState hook to hook into React's state.

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


And, for reasons that we'll explore soon, it can only be invoked from inside a React compmonent.  

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


##### SC

show CampsitesPage again

##### VO

Now, I think you probably have everything you need to update our CampsitesPage using a hook.  So, try doing that on your own now!

Don't spend too long on it if you're struggling, but....I believe in you!

And in the next video, I'll be back to show you how I'd do it.  


I'll see you there.
