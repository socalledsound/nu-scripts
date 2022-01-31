


---


##### SC

Hooks -- useState hook

##### VO
Welcome back.


---


##### SC

show sc from last video at the end, where we click on the campsite, it updates in the console, but nothing happens.

##### VO

In the last video, we ran into a problem with our app.  We set up an onclick handler, and then we clicked it and our console told us that we were successfully able to select a new random campsite and we updated our selected campsite variable and then.....nothing happend on the screen.

---


##### SC

state = {
    
}

##### VO

To understand why this is so, we need to revisit what we know about the virtual dom.  Do you remember a few videos ago, when we talked about React's rendering process, and I said that each time we create a change to the state of our application, react makes new snapshot of the state of our app, diffs the changes against the old snapshot of the previous state of our app....


---

##### SC
show reconciliation slide from virtual dom video

##### VO

 and then sends a list of those changes to ReactDOM.render?

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


##### SC

##### VO

---
##### SC

const fakeHook = (val) => {
    let state = val
    const func = (newVal) => {
        state = newVal
    }
    return [state, func]

}

##### VO