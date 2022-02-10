React-W2-08-EXERCISE-useState-CampsitesPage

---


##### SC
exercise: useState in CampsitesPage
##### VO
welcome back.


---


##### SC

focus outline:
 1. focus outline around onClick={() => toggleCampsite()}
 2.  focus outline around toggleCampsite()

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
    
    const [ selectedCampsite, toggleCampsite] = useState(selectRandomCampsite())

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
IN the last video you learned how to use useState to tell React that you want to create a stateful variable.  And I left you with a challenge, that I hope  you were able to complete!

1. 
Your challenge was to take the code where we left it at the end of the last video, and implement this click handler, 
2. 
so that our update function, toggle campsite, updates our selectedCampsite variable with a new random campsite.
---


##### SC



focus outline:
 1. focus outline around toggleCampsite()

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
    
    const [ selectedCampsite, toggleCampsite] = useState(selectRandomCampsite())

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

And to make this work, all we need to do is invoke that selectRandomCampsite function right here, inside the call to toggleCampsite.  Now, when that button is clicked, that selector will return a new random campsite, and toggleCampsite will use the return value to set a new selectedCamspite value.  

---


##### SC

show website with new random campsite each time you click, in repo as 
wk2-04A-useState-randomCampsite

##### VO



And, since we're using the useState hook, React will trigger a re-render and, you should see a new random campsite in your browser each time you click the button!  

Now, keep in mind, since there's only four campsites, the random campsite might sometimes be the same as the last campsite.  But, statistically, if you click a few times, you should see a new campsite appear.

And I hope that's working for you.  If not, compare your code to mind and just make sure that you 


---


##### SC

to use useState:
1. import { useState } from 'react';

2. useState must be invoked at the top level of a react component.

3. use destructuring assignment to convert the array that useState returns into first a stateful variable and second, a function that we can use to update that variable.


##### VO


first, imported useState at the top,
second, invoked useState inside the body of your component, at the top level
third, are using both the correct variable name and invoking the update function correctly.

---


##### SC

celebration emoji

##### VO

And let's just take a moment to recognize -- you just learned how to use the most used hook of all, the useState hook.

Congratulations!  And I hope that wasn't too bad.

---


##### SC

show website with new random campsite each time you click, in repo as 
wk2-04A-useState-randomCampsite

transition to 
wk2-04B-useState-selectedCampsite


##### VO

But, having said that....what we've done so far, while satisfying and fun, isn't all that useful.  

What we ACTUALLY want to do is give our users the ability to select a SPECIFIC campsite in the list at the left, by clicking on it.

Do you have an idea about how we can do that.  What should our first step be?  I want you to pause the video here and plan it out in your mind.  Or, even try coding it!  I'll be back in a sec to show you how I'll go about it.


---


##### SC
show campsitesSlice.

focus outline on selectRandomCampsite

import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES 
}   

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())]
}



##### VO

So, I don't know about you, but for me, the first thing I want to do is handle the logic that I'm going to need.  So let's take a look at our camspitesSlice and think about how to do this.  

Right now, we've got a way to select all of the campsites and a way to select a random campsite but what we want is a way to select a specific campsite.

---


##### SC

show campsites.js with focus arrow on id numbers at appropriate moment

export const CAMPSITES = [
    {
        id: 0,
        name: 'React Lake Campground',
        image: reactLakeImg,
        elevation: 1233,
        featured: false,
        description:
            'Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers.',
    },
    {
        id: 1,
        name: 'Chrome River Campground ',
        image: chromeRiverImg,
        elevation: 877,
        featured: false,
        description:
            'Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River.',
    },
    {
        id: 2,
        name: 'Breadcrumb Trail Campground',
        image: breadCrumbImg,
        elevation: 2901,
        featured: false,
        description:
            'Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground.',
    },
    {
        id: 3,
        name: 'Redux Woods Campground',
        image: reduxWoodsImg,
        elevation: 42,
        featured: true,
        description:
            "You'll never want to leave this hidden gem, deep within the lush Redux Woods.",
    },
];



##### VO
And if we look at that array of campsites, one thing that sticks out right away is that each of them has a unique id number.  So why don't we use that in the new selector that we're going to need?


---

##### SC

in campsites/campsitesSlice.js type this out

export const selectCampsiteById = id => {
    return CAMPSITES.find( campsite => campsite.id === parseInt(id))  
}  


##### VO

So, let's go back to our campsitesSlice.js file.

And in there, let's type first export, because we're going to export this, and then const selectCampsiteById.

This will be a function that will take in an id and then we want it to return a specific campsite that matches that Id.

So I'm gooing to call the find method on our campsites array, and then I'll pass in an evaluation function.

In that evaluation function, we'll pull off each campsite and then return the canmpsite if it's id is the same as the id that we pass in to our selector.

Sound easy enough, right? Now let's go to our CampsitesPage and see if this selector is working as we want it to.


---


##### SC

import { selectRandomCampsite } from '../features/campsites/campsiteSlice';

import { selectCampsiteById } from '../features/campsites/campsiteSlice';


##### VO

So let's open up our CampsitesPage and import selectCampsiteById in place of selectRandomCampsite.

---


##### SC

 const [ selectedCampsite, toggleCampsite] = useState(selectCampsiteById(0))


##### VO
And then in our component, in our call to useState, we'll replace selectRandomCampsite() with selectCampsiteById and pass in a 0, to set the initial selectedCampsite value.
---


##### SC

    <Button onClick={() => toggleCampsite(selectCampsiteById(1))}>select campsite 1</Button>

##### VO
And then we just have to modify our Button's onClick prop so that it calls selectCampsiteById, and this time we'll pass in a 1 instead of a 0, and we can also change the text of this button to say select campsite 1, since that's what it will do.  

---


##### SC

screen grab with this code in the body of the component, click on the button, show that it's working.


import { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
} from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById } from '../features/campsites/campsiteSlice';

const CampsitesPage = () => {
    
    const [ selectedCampsite, toggleCampsite] = useState(selectCampsiteById(0))

    return (
        <Container>
            <Button onClick={() => toggleCampsite(selectCampsiteById(1))}>select campsite 1</Button>
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

And if we save that and look in our browser, sure enough....that's what we get!  So this is working.  Now we just have to figure out how to attach this clickhandler to each item in our campsitesList.  Any ideas?  Again, pause the video here, and see if you can do it.  Figuring this stuff out on your own, and just trying to figure it out on your own is the best way to grow as a developer.

---


##### SC

focus arrow first on the Button as we delete it and then on the import of the Button as we delete that as well

import { useState } from 'react';
import {
    Container,
    Row,
    Col,
  -- >     Button,
} from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById } from '../features/campsites/campsiteSlice';

const CampsitesPage = () => {
    
    const [ selectedCampsite, toggleCampsite] = useState(selectCampsiteById(0))

    return (
        <Container>
         -- >    <Button onClick={() => toggleCampsite(selectCampsiteById(1))}>select campsite 1</Button>
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

Ready?  Were you able to do it?  I hope so, but if not, don't sweat it.

So, the first thing that I'm going to do is I'm going to delete this Button, and also up at the top, delete the import of that Button, we're not going to need it any more.
---


##### SC

 const [campsiteID, selectCampsiteID] = useState(0);

##### VO

Next, let's rework this call to useState just a bit.  Before, it was storing a campsite, because we set the value using our selector directly.  But let's rewrite it so that it just stores an integer value, an ID, and rename the variable to be campsiteID.  And we'll rename the update function to be  called selectCampsiteID.  

Now, of course, we don't have to rename these variable names, we can call these things anything we want, but I always try to make sure that my variable names are written in a way that succinctly describes exactly what the variable does.  Details like this are small but very important, because you always want your code to be easily understandable by any stranger who reads it and isn't familiar with it....which, if you're anything like me, will be you, in a couple of hours time!


And then, instead of calling selectCampsiteById in our input parameter to useState, let's just pass in a 0.

---


##### SC
 
    const [campsiteID, selectCampsiteID] = useState(0);
    const selectedCampsite = selectCampsiteById(campsiteID);

##### VO
And just below that, we'll use our selector.  So here, we'll create a new constant named selectedCampsite and we'll set it equal to selectCampsiteById and we'll pass in that campsiteID.

And this should work exactly the same as before, because any time the campsiteID variable has a new value, this component will be re-rendered, and any code in this component will run again on that re-trigger.

---


##### SC

    updating this line in the code

    <CampsitesList selectCampsiteID={selectCampsiteID}/>


##### VO

Now, we need to get that campsiteID to update when we click on an image from our CampsitesList.  So what I'm going to do is simply pass the update function in as a prop to the CamspitesList. I'll call the prop selectCampsiteID and we'll pass in that selectCampsiteID update function as the value of that prop.

---


##### SC

focus outline on 

1. destructured selectCampsiteID prop

2. click handler on the COl

const CampsitesList = ({ selectCampsiteID }) => {
   
        const campsites = selectAllCampsites()

        return (     
            <Row className="ms-auto">
                {            
                    campsites.map((campsite) => {
                        return (
                            <Col md="5" className="m-4" key={campsite.id} onClick={() => selectCampsiteID(campsite.id)}>
                                <CampsiteCard campsite={campsite} />
                            </Col>
                        );
                    }) 
                }
            </Row>  
        )
      
}

export default CampsitesList 

##### VO

And then if we go inside that CampsitesList component, we can first destructure selectCampsiteID off of props in the input parameter, and then we'll use that in an onCLick prop that we'll assign to our Col.

So in that Col we'll say onClick={} and set that equal to an arrow function that returns a call to selectCampsiteID() and passes in campsite.id.

---


##### SC

show web page working: wk2-04B-useState-selectedCampsite

##### VO

And just like that, this should work.  If we save that and open up our web browser, you can see that we can now click on a campsite in our CamspitesList and have the details for that campsite display to the right.


---


##### SC

focus outline around each part of the diagram as it is discussed.  should I make this diagram?

Diagram

parent: CampsitesPage

event: CampsitesList

target : CampsiteDetail


##### VO

Now, before we go, I want to take a minute to look at what we did here.  It's a pretty common pattern in React, where we want to update a sibling component.  It's called 'Lifting state up', and I hope that, having just done it, the idea makes sense.  We have an event occuring in our CampsitesList that wants to make a change in a component that CampsitesList doesn't have direct access to.  So locate our stateful variable and it's update function in the closest component that has access to both the event and the target of that event, which in this case is our CampsitesPage.

---


##### SC

prop drilling graphic here.  ?  actually not sure what this should be yet but I have some ideas.  should I make this?

##### VO

This is a very useful technique in cases like this, where the event and the target of the event are located pretty close to each other, but this technique is also problematic because, now, all three of these components depend very closely on one another.  In a case like this, it's probably ok, but it's definitely something to keep an eye on, particularly if we start passing this update function down into another component, which is  called prop drilling, and definitely something to avoid.  If you find yourself drilling props through several components, it's usually a pretty good sign that you need to reach for a better solution, like, for instance, redux.

---


##### SC
show web page working: wk2-04B-useState-selectedCampsite
##### VO

But redux can wait for another day.  This web page works, and it's quite an improvement over where we were at the end of workshop.  So pat yourself on the back.  You've learned some pretty important things already this week!



---


##### SC

use a focus arrow as we go down this list/break into two several pages if necessary

destructuring assignment
array.filter / array.find
state
slices
selectors
useState hook
lifting state up

##### VO
You've learned about the destructuring assignment

and you've learned two new very useful array methods, array.filter and array.find

We've taken a look at this idea of state, and how React handles it.

You've learned about this very important idea of slices -- portions of state that relate to a specific feature.

And you've learned about selectors, functions that we can write in each slice to select specific parts of that slices's data.

You'll be getting lots of practice with these ideas as we continue building our site.

And perhaps most importantly, you've learned about the useState hook and used it to implement a stateful variable in our nucampsite.

And finally, as we implemented useState in our CampsitesPage, you also had an opportunity to see a very common pattern in React, where we 'lifted up state' to a parent component.

So, it's been a busy week already!  But it's about to get busier.

---


##### SC

functional programming vs object oriented programming graphic here
(?)

##### VO

In the next series of videos, we're going to dive into the much of one of the most controversial topics in javascript.

React has been and continues to be shaped by this topic, which is the endless debate between object-oriented and functional programming, between class constructions and composing with functions.

To really understand hooks -- and I'd even say, to really understand React -- it's important to understand this distinction, and why people are so passionate about it.

--- 
##### SC

animate in fuscia outline around 'class' near the top of this page:

https://reactjs.org/docs/hooks-intro.html

##### VO
You can see the undercurrents of this debate right there in the first line of the the 'introducing hooks' page of the react documentation, where it says that 'hooks let you use state and other React features without writing a class'.

---
##### SC
(list the upcomping topics and focus fuschia on each as it is discussed)

#### Class Components
    - the javascript class syntax
    - function components vs class components
    - exercise: CamspitesPage as a class component

##### VO

But what's a class?  And what do classes have to do with React?

In the next few videos, we'll explore the class syntax in javascript and React, talk about some of the differences and similarities between function components and class components, and finally, rewrite our CampsitePage as a class component.  

We won't ultimately use this component in our site, but I think the conversion will be helpful to your learning process, and provide you with the tools that you'll need if and when you ever need to navigate a code base that still uses class components.

And we'll start, in the next video, by understanding and reviewing what a class is and how we write them in javascript.  

I'll see you there.



# END





















---


##### SC

to use useState:
1. import { useState } from 'react';

2. useState must be invoked at the top level of a react component.

3. use destructuring assignment to convert the array that useState returns into first a stateful variable and second, a function that we can use to update that variable.


##### VO

As you were learning about useState, I mentioned that there are three fundamental things you always have to remember when useing useState.

first, we have to import useState to use it,
second, useState can only be used at the top level of React component
third, we use a destructuring assignment to get both a stateful variable that we can use in our component and a function that we can use to update that stateful variable.  


---


##### SC


focus outline around number 2

to use useState:
1. import { useState } from 'react';

2. useState must be invoked at the top level of a react component.

3. use destructuring assignment to convert the array that useState returns into first a stateful variable and second, a function that we can use to update that variable.


##### VO

Now the first one of these is clear enough, and the third one is really just a matter of syntax.  Since you're comfortable now with destructuring and you know useState is a function that returns an array, I hope that's pretty clear.

But....as we were going along, did you find yourself wondering -- why CAN'T we use useState in another function, one that isn't a React component?

Why can't we use useState inside a for loop or inside an if statement?


---


##### SC

what is a component, actually?

##### VO

To understand why it is that useState can only be called inside the body of a component, we need to dive just a little deeper into what a component actually is.

And in the next video, we'll do just that.

I'll see you there.
