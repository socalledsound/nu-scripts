React-W2-06-EXERCISE-CampsitesPage

---


##### SC

##### VO

Welcome back.  


---


##### SC


show campsitesSlice.js

##### VO



In the last video, we created a campsitesSlice -- a central space for handling everything in the state of our application that pertains to campsites.  We imported our CAMPSITES arrayinto that slice and we exported some selector functions that we can use to get specific pieces of data from that slice.

And then we used the selectAllCampsite selector in our campsitesList, instead of directly importing the array of campsites.

And, at the end of the video, we created a new selector that picks a random campsite from our array of campsites.

---


##### SC

show screengrab of site at the end of this exercise

##### VO


In this video, we're going make a CampsitesPage that shows the CampsitesList on one half of the page and then uses that selectRandomCamspite function and shows the campsute that it returns on the other side of the page.

---


##### SC

import {
    Container,
    Row,
    Col,
    Button,
} from 'reactstrap';

##### VO

So, let's start by adding a CampsitesPage.js file in the pages folder of our app.

Go ahead an click on that file, and let's get started writing our CampsitesPage.

First, we're going to import some reactstrap components.

So at the top we'll say 'import..... etc.'




---


##### SC

show screengrab of the site at the end of the exercise, and place fuschia outlines around the two entire section where the CampsitesPage is displayed

##### VO

Now, before we actually write the code, let's talk about how we're going to use these components.

You can see here that we're going to have a Row, that takes up the full width of the screen.

---


##### SC

show screengrab of the site at the end of the exercise, place a fuschia outline around the the CampsitesList and another around the CampsiteDetail

##### VO

And then we're going to break that row up into two columns.  We'll put the CampsitesList in one column and a new CampsiteDetail component inside the other column.

---


##### SC

const CampsitesPage = () => {

}

export default CampsitesPage;

##### VO

Ok, now let's get started writing that CampsitesPage component.

Down below our import of the reactstrap components, we'll write const CampsitesPage and that's going to be a functional component, so we'll just write an arrow function.

And let's be sure to export default CampsitesPage at the bottom.


---


##### SC

    const CampsitesPage = () => {
        return (
            <Container>
            
            </Container>
        )
    }

    export default CampsitesPage;

##### VO

And, first, that's going to return a Container.


---


##### SC

    const CampsitesPage = () => {
        return (
            <Container>
                <Row>
                    <Col md="7" sm="5">
                    </Col>
                    <Col md="5" sm="7">
                    </Col>
                </Row>
            </Container>
        )
    }

    export default CampsitesPage;

##### VO

Inside that Container, we'll have a Row, and inside that Row we'll have two Cols. Each one will have two props, to set the proportion of the Row that it takes up at different breakpoints.  

So the first one, which will hold our CampsitesList, will have a prop of md and we'll set that equal to 7 and then another one of sm which we'll set equal to 5.

The second one will have a prop of md which we'll set equal to 5 and a prop of sm which we'll set equal to 7.

So you can see that in either case, the two columns will take up the full 12 units of width in a bootstrap Row, but if the screen is a small size screen we'll give a bit more room for the CampsiteDetail component which we're going to write soon.

---


##### SC
 
code at the end of this chunk: (follow the script for the order)

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
    
    const selectedCampsite = selectRandomCampsite();

    return (
        <Container>
            <Button onClick={() => toggleCampsite()}>select random</Button>
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

Now that we've got two columns, let's add our CampsitesList to the first column and a CampsiteDetail to the second column.

CampsiteDetail will take in a single prop, which we'll call campsite and we'll set it equal to a javascript variable named selectedCampsite.

Now we need to create that variable, so inside our CampsitesPage fucnction we'll create a new constant named sselectedCampsite and we'll set that equal to the return value of the selector that we wrote in the last video, so we'll write selectRandomCampsite and some parenthese after that function to invoke it.

And at the top of page we'll import curly braces selectRandomCampsite from '../features/campsites/campsiteSlice'.

And while we're here let's import our CampsitesList and the CampsiteDetail component that we're using in this page.

But of course that doesn't exist yet!  

So let's go and write that now.



---


##### SC

creating file

##### VO

It's going to be part of our campsites feature, so go to your features/campsites/ folder and create a new file named CampsiteDetail.js
---


##### SC

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    Col,
} from 'reactstrap';

##### VO

NOw, let's write that component.  So, in CampsiteDetail.js we'll first import some reactstrap components.  We're going to need a Card, ..etc.
---


##### SC

    const CampsiteDetail = ({campsite}) => {
        const { image, name, description } = campsite;
        return (

        );
    }
    
    export default CampsiteDetail;

##### VO

Our CampsiteDetail component is going to be a function component, and remember, it's going to take in a campsite as a prop, so let's destructure that prop in the input parameter.

And then let's further destructure the image, name and description keys from that campsite prop.

---


##### SC

    const CampsiteDetail = ({campsite}) => {
        const { image, name, description } = campsite;
        return (
            <Col md='12' className='m-4'>
                    <Card>
                        <CardImg
                            top
                            src={image}
                            alt={name}
                        />
                        <CardBody>
                            <CardText>{description}</CardText>
                        </CardBody>
                    </Card>
    
            </Col>
        );
    }
    
    export default CampsiteDetail;

##### VO

IN the body of this function component we're going to return first a Col with props of...etc. etc...  describe it as you code it.

....And now we can just save this component, and we're almost there!

---


##### SC

selecting App.js

##### VO

We just have to go to our App component

---


##### SC

    import Header from './components/Header';
    import Footer from './components/Footer';
    import CampsitesPage from './pages/CampsitesPage';
    import './App.css';



    function App() {
    return (
        <div className="App">
            <Header />
            <CampsitesPage />
            <Footer />
        </div>
    );
    }

    export default App;
##### VO

And, between our Header and our Footer, replace our CampsitesList with CampsitesPage, and then up at the top, delete the import of CampsitesList and import our CampsitesPage.
---


##### SC

show the site, as itis at this point.

##### VO

And now, if you save it, and check your browser, you should see that we've succeeded at showing our CampsitesList on one half of the page and our CampsiteDetail on the other.

Which is great!

And you'll see that if you refresh the browser, it should show a different random campsite.  Sometimes it might repeat, since we only have four campsites, but if you refresh it a few times, you should see a different campsite appearing.


---

##### SC

show CampsitesPage code

##### VO

And if we look again at the code, we can see that each time we refresh the page, our CampsitePage runs, and our selectedCampsite variable is set to a new random campsite by our selectRandomCampsite selector.

---


##### SC

##### VO 

But remembner, we don't want a random campsite every time we refresh the page -- we want users to be able to select a campsite in the CampsitesList, and then we want to display that selectedCampsite in our CampsiteDetail.

And we'll get there!  I promise!  But we've got one more problem to overcome -- how React handles updates to state.




---


##### SC

    return (
        <Container>
            <Button>select random campsite</Button>
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


##### VO

But rather than telling you, I want to show you.  So, let's first make a button.  Remember, at the beginning of this video, when we imported the Button component from reacstrap?  I bet you were wondering when we were going to use that!  Well, here we are.

We're going to add a button, inside our Container, but outside our Row.  And we'll give it a text of select random campsite.

---


##### SC

show website with button

##### VO
So it should show up in our browser up above the row.




---


##### SC


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

Now, let's add an onClick prop to that button.  So let's write our click handler first.  

Inside our CampsitesPage component we're going to write a function called toggleCampsite and it's going to be an arrow function and in the body of that arrow function we're going to set selectedCampsite to the return value of selectRandomCampsite.

But whoops!  We also need to change selectedCampsite from a const to a let, just above.

And you know what, just for kicks, let's console.log() our selected campsite.

In our Button we'll pass in a prop of onClick and set that equal to some javascript, so we'll write the curly braces and then inside them we'll write an arrow function that returns an invocation of the click handler that we just wrote, toggleCampsite().

And that's that, right?  What we're expecting now is that when a user clicks on this button, this function will run, and the selectedCampsite variable will be updated, and then logged to the console.



---


##### SC

show browser with console click button notice that new random value is being logged but the screen is not updating


##### VO 
Let's save that now and open up our browser, and also open up our console in the developer tools.

And we see that, when I click the button....the browser DOESN"T UPDATE.  

BUT...if we look in the console.....selectedCampsite DOES UPDATE.

What gives?  Can you guess what's happening here?  

IN the next video, I'll explain, and also give you the answer to our troubles and that answer is....HOOKS.

I'll see you there.
