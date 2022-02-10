React-W2-11-exercise-CampsitesPageCC


---


##### SC

exercise: writing a class-based component

##### VO
Welcome back.
---


##### SC

function component vs class component comparison chart


##### VO
In the last video, we compared function components and class components, looked at the syntax for each and talked about how we can convert function components into class components and class components into function components.

In this video, we're going to write a class based version of our CampsitesPage component, from scratch, to make sure that you've got a good grip on that syntax.

---


##### SC

screencast this with appropriate focus outline

##### VO

So let's start by making a new file on our pages folder.  So select that folder in the file browser and then click the little add page icon right here to make a new file.  We'll call it CampsitesPageCC.js.  


Next, I want you to control click on the CampsitesPage.js file and then select 'open to the side'.  
---


##### SC

showing two files.

##### VO
So now your vs code should be in a split pane view, like mine is, with the CampsitesPage that we've already written to the right, like you can see on my screen.
---


##### SC
import { Component } from 'react'
##### VO
At the top of CampsitesPageCC.js, we'll start by importing the Component class from React.
---


##### SC
import { Component } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import { selectCampsiteById } from '../features/campsites/campsiteSlice';
##### VO

Then, we can just copy over, all of our other imports -- EXCEPT FOR THE USESTATE IMPORT -- nothing there will change.

---


##### SC

class

##### VO

Now, we're going to make a new class so we'll start with the class keyword.

---


##### SC

focus outline around class CampsitesPageCC as it's being written and then on the export

import { Component } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import { selectCampsiteById } from '../features/campsites/campsiteSlice';

class CampsitesPageCC extends Component {

}
export default CampsitesPageCC;
##### VO

We'll call this class CampsitesPageCC and it will extend Component, which we previously imported from React.  Then we'll write some curly braces and at the bottom, after the second curly brace we'll write export default CammpsitesPageCC.

---


##### SC

import { Component } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import { selectCampsiteById } from '../features/campsites/campsiteSlice';

class CampsitesPageCC extends Component {

    render(){
        
    }

}
export default CampsitesPageCC;


##### VO

next, we need to add our render method.  So inside the body of the function I'll just write render and then some parentheses and then two curly braces which will be the body of this method.

---


##### SC
import { Component } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import { selectCampsiteById } from '../features/campsites/campsiteSlice';

class CampsitesPageCC extends Component {

    render(){
        return (
            <Container>
                <Row>
                    <Col md="7" sm="5">
                        <CampsitesList selectCampsiteID={selectCampsiteID}/>
                    </Col>
                    <Col md="5" sm="7">
                        <CampsiteDetail campsite={selectedCampsite}/>
                    </Col>
                </Row>
            </Container>
        );
    }

}
export default CampsitesPageCC;
##### VO

This render method will have a return statement and the return statement will be exactly the same return statement from our CampsitesPage.js file.

So I'll just copy and paste that in.

And just like that, we're almost done!  Except of course, that the tricky bit is what's left.  
---


##### SC
show CampsitesPage.js

focus outline
1. on campsiteID in const [campsiteID, selectCampsiteID] = useState(0);
2. on selectCampsiteID in const [campsiteID, selectCampsiteID] = useState(0);
3. on selectCampsiteID in <CampsitesList selectCampsiteID={selectCampsiteID}/>

##### VO

Let's take a close look at what we need to do to convert the logic of our CampsitesPage into the class syntax.  

1. We need to use state, but instead of using the useState hook, we're going to actually use a state object.
And so this campsiteId variable is going to be a key on a state object in our CampsitesPageCC

2. And then we also need to create this selectCampsiteID click handler, 
3. which we will then pass in to CamspitesList, just as we're already doing in our function component.

And then we will just need to properly use the this keyword where appropriate, use this.setState to update our state and also remember to be aware of function scope.

Ready?  Let's get to it.

---


##### SC

FOCUS OUTLINE AROUND state object


import { Component } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import { selectCampsiteById } from '../features/campsites/campsiteSlice';

class CampsitesPageCC extends Component {

    state = { 
        campsiteID: 0,
     }

    render(){
        return (
            <Container>
                <Row>
                    <Col md="7" sm="5">
                        <CampsitesList selectCampsiteID={selectCampsiteID}/>
                    </Col>
                    <Col md="5" sm="7">
                        <CampsiteDetail campsite={selectedCampsite}/>
                    </Col>
                </Row>
            </Container>
        );
    }

}
export default CampsitesPageCC;

##### VO

So in my CampsitesPageCC, I'm going to start by declaring a state object.  This is a kind of shorthand that we can use in a React component, we can just write state equals and then the curly braces and in that object we'll have a key named campsiteID which we'll set to a default value of 0.

And hopefully you remember that I mentioned that the constructor can be implicit in javascript and also in React?  That's what's happening here.


---


##### SC

FOCUS OUTLINE AROUND constructor method


import { Component } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import { selectCampsiteById } from '../features/campsites/campsiteSlice';

class CampsitesPageCCC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsiteID: 0,
        }
    }
    

    render(){
        return (
            <Container>
                <Row>
                    <Col md="7" sm="5">
                        <CampsitesList selectCampsiteID={selectCampsiteID}/>
                    </Col>
                    <Col md="5" sm="7">
                        <CampsiteDetail campsite={selectedCampsite}/>
                    </Col>
                </Row>
            </Container>
        );
    }

}
 
export default CampsitesPageCCC;



##### VO

You may also see class based react components that explicitly write the constuctor method and instantiate the state object in that constructor, in which case it would look like this.  Either way works.  



##### SC

FOCUS OUTLINE AROUND state object

import { Component } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import { selectCampsiteById } from '../features/campsites/campsiteSlice';

class CampsitesPageCC extends Component {

    state = { 
        campsiteID: 0,
     }

    render(){
        return (
            <Container>
                <Row>
                    <Col md="7" sm="5">
                        <CampsitesList selectCampsiteID={selectCampsiteID}/>
                    </Col>
                    <Col md="5" sm="7">
                        <CampsiteDetail campsite={selectedCampsite}/>
                    </Col>
                </Row>
            </Container>
        );
    }

}
export default CampsitesPageCC;

##### VO

But we'll stick with the simpler and less verbose version. 

---


##### SC

FOCUS OUTLINE OR ARROW:  selectCampsiteID method

import { Component } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
impor { selectCampsiteById } from '../features/campsites/campsiteSlice';

class CampsitesPageCC extends Component {

    state = { 
        campsiteID: 0,
     }

    selectCampsiteID = () => {
        
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col md="7" sm="5">
                        <CampsitesList selectCampsiteID={selectCampsiteID}/>
                    </Col>
                    <Col md="5" sm="7">
                        <CampsiteDetail campsite={selectedCampsite}/>
                    </Col>
                </Row>
            </Container>
        );
    }

}
export default CampsitesPageCC;

##### VO

Next, we're going to write that selecCampsiteID click handler.  It's going to be a method of this class.  So we'll jsut write selectCampsiteID, here between our render method and our state declaration.  

And we're going to write it as an arrow function, because - remember? - that way, the scope of this click handler will not change when we pass it into another function, which we will do when we pass it in to our CampsitesList component.


---


##### SC

FOCUS OUTLINE OR ARROW:  
1. writing this.setState({campsiteID: id})
2. writing input parameter: = (id) => 

import { Component } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import { selectCampsiteById } from '../features/campsites/campsiteSlice';

class CampsitesPageCC extends Component {

    state = { 
        campsiteID: 0,
     };

    selectCampsiteID = (id) => {
        this.setState({campsiteID: id});
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col md="7" sm="5">
                        <CampsitesList selectCampsiteID={selectCampsiteID}/>
                    </Col>
                    <Col md="5" sm="7">
                        <CampsiteDetail campsite={selectedCampsite}/>
                    </Col>
                </Row>
            </Container>
        );
    }

}
export default CampsitesPageCC;

##### VO

And that is particularly important because we are going to use the 'this' keyword in this function.

Inside the body of the method, we're going to call this.setState() and into this.setState we will pass an object with a key of campsiteID which we will set to id.

And then we need to bring that id in as a parameter.

---


##### SC

FOCUS OUTLINE OR ARROW:  
1. selectCampsiteID without arrow function
2. this.selectCampsiteID = this.selectCampsiteID.bind(this);

import { Component } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import { selectCampsiteById } from '../features/campsites/campsiteSlice';

class CampsitesPageCCC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsiteID: 0,
        };
        this.selectCampsiteID = this.selectCampsiteID.bind(this);
    }
    selectCampsiteID() {
        this.setState({campsiteID: id});
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col md="7" sm="5">
                        <CampsitesList selectCampsiteID={selectCampsiteID}/>
                    </Col>
                    <Col md="5" sm="7">
                        <CampsiteDetail campsite={selectedCampsite}/>
                    </Col>
                </Row>
            </Container>
        );
    }

}
 
export default CampsitesPageCCC;




##### VO

Now I should also mention -- because you may also see this syntax -- that, instead of writing this as an arrow function, we can 1. write it as a regular method and then 2. explicitly bind the scope of this method to this component, inside our constructor function.
---


##### SC

focus outline at the appropriate moment on
 <CampsitesList selectCampsiteID={selectCampsiteID}/>



import { Component } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import { selectCampsiteById } from '../features/campsites/campsiteSlice';

class CampsitesPageCC extends Component {

    state = { 
        campsiteID: 0,
     };

    selectCampsiteID = (id) => {
        this.setState({campsiteID: id});
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col md="7" sm="5">
                        <CampsitesList selectCampsiteID={selectCampsiteID}/>
                    </Col>
                    <Col md="5" sm="7">
                        <CampsiteDetail campsite={selectedCampsite}/>
                    </Col>
                </Row>
            </Container>
        );
    }

}
export default CampsitesPageCC;
##### VO
  But the arrow syntax is shorter and sweeter and is generally used to bind the scope of click handlers in React, so we'll stick with that.

Now, one little place where we have to be extemely careful, as I mentioned before, is with the this keyword.  Can you see where our code is currently broken?  Can you fix it?  Look at where we're passing in this selectCampsiteID method into our CampsitesList.

---


##### SC


focus outline at the appropriate moment on
 <CampsitesList selectCampsiteID={this.selectCampsiteID}/>



import { Component } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import { selectCampsiteById } from '../features/campsites/campsiteSlice';

class CampsitesPageCC extends Component {

    state = { 
        campsiteID: 0,
     };

    selectCampsiteID = (id) => {
        this.setState({campsiteID: id});
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col md="7" sm="5">
                        <CampsitesList selectCampsiteID={this.selectCampsiteID}/>
                    </Col>
                    <Col md="5" sm="7">
                        <CampsiteDetail campsite={selectedCampsite}/>
                    </Col>
                </Row>
            </Container>
        );
    }

}
export default CampsitesPageCC;


##### VO
Yep.  THERE IS NO selectCampsiteID function...but there is a this.selectCampsiteID function.  So make sure you change that as I'm doing now.  Aren't classes fun?  

---


##### SC

##### VO
And now we're really almost there.  We just have to use our selectCampsitById selector in the appropriate place, and also pass it the value, from state, of the campsiteID that has been selected by our click handler.  Can you do it on your own?  Pause the video and take a shot at it now on your own, and then continue when you're ready.


---


##### SC

focus on:

    selectCampsiteID = (id) => {
        this.setState({campsiteID: id});
    }

##### VO

Ready?

Ok, so when this selectCampsiteID click handler runs and calls this.setState, this component will re-render, right?

Which means, that the render method will run again.

##### SC
as you write this code, focus on:
focus on:
1. const { campsiteID } = this.state;
2. const selectedCampsite = selectCampsiteById(campsiteID);

    render() { 
        const { campsiteID } = this.state;
        const selectedCampsite = selectCampsiteById(campsiteID);
        return ( 
            <Container>
            <Row>
                <Col md="7" sm="5">
                    <CampsitesList selectCampsiteID={this.selectCampsiteID}/>
                </Col>
                <Col md="5" sm="7">
                    <CampsiteDetail campsite={selectedCampsite}/>
                </Col>
            </Row>
        </Container>
         );
    }

##### VO

So, inside our render method, we're going to 

1. destructure campsiteID off of state, and it will always have the most recently set version of that stateful variable.

And then
2. we'll create a selectedCampsite variable and set it equal to a call to our selectCampsiteById selector, and we'll pass in that newest freshest campsiteID, and save our file

---

##### SC

in App.js

import CampsitesPageCC from './pages/CampsitesPageCC';


##### VO

And if we go to our App.js file, and import this new file 



---

##### SC

    import Header from './components/Header';
    import Footer from './components/Footer';
    import CampsitesPageClass from './pages/CampsitesPageClass';
    import './App.css';

    function App() {
    return (
        <div className="App">
            <Header />
                <CampsitesPageCC />
            <Footer />
        </div>
    );
    }

    export default App;

##### VO


and then replace CampsitesPage with CampsitesPageCC... it all should work, exactly as before.  

Whew, that was a lot of work for no progress!

But, I hope you learned a thing or two about classes, and if and when you encounter this syntax -- and you probably will!, in the real world! -- you'll know exactly what to do.


---

###### SC

show nucampsite at the end of week 2 with the links and breadcrumbs and all


##### VO

And now, it's time to switch gears.  This marks the end of this week's first unit, on state and the useState hook.

In the next unit, we will introduce React Router, we'll add site navigation, and we'll add more pages to this site!

You'll be learning some new hooks to add to your repertoire, which are part of the React Router library.

You'll learn about conditional rendering, we'll make a proper home page, and we'll be adding some more features to this site.

But first, let's take a break.  Stretch those legs and fingers a bit, and enjoy your success.  You've covered a lot of ground already this week!  

And when you're ready, come back and join me as we delve into single page applications and how we handle user navigation in them.

I'll see you there.




