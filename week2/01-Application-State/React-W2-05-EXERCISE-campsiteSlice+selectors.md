React-W2-05-EXERCISE-campsiteSlice+selectors

EXERCISE

-- write selectors

-- use selectAllCampsites selector in CampsitesList

-- refactor CamspiteCard to use destructuring


---


##### SC



##### VO
Welcome back.

In the last video, I talked a bit about state.  I outlined some important practices and considerations for implementing state in any piece of software and also discussed some considerations for implmenting state in a react application, and laid out the path that we're going to follow to introduce it into our nucampsite.

---


##### SC
make campsitesSlice.js
##### VO


In this video,  we're going to get ready to implement this CampsitesPage that we're about to build, by creating a camspitesSlice.

So let's start by making a campsitesSlice.js file.



---


##### SC

import { CAMPSITES } from '../../app/shared/CAMPSITES';


##### VO
Then at the top of this file, we'll import the CAMPSITES data from our shared folder. 

---


##### SC

export const selectAllCampsites = () => {
    return CAMPSITES 
}  

##### VO

And we'll write a simple selector that selects all of the campsites in the array of campsites.

We're going to export this selector so we'll start with the key word export and then const selectAllCampsites, which will be an arrow function wjich simply returns the entire array of campsites.

---


##### SC

import {
    Col, Row,
} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsiteSlice';

const CampsitesList = () => {
   
        const campsites = selectAllCampsites();

        return (     
            <Row className="ms-auto">
                {            
                    campsites.map((campsite) => {
                        return (
                            <Col md="5" className="m-4" key={campsite.id} >
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

Now, in our CampsitesList, we'll import the selectAllCampsites selector and use it to set a variable named campsites to the return value of our selector.

Now, looking at all of this, you could reasonably make the claim that we haven't gained much with this new slice idea.  

But stay with me!  As we continue building out our site the advantages will become more apparent.




---


##### SC


-- focus outline while you go through each step....

    import {
        Card,
        CardImg,
        CardImgOverlay,
        CardTitle,
    } from 'reactstrap';

    
    const CampsiteCard = ({campsite}) => {
        const { name, image } = campsite;
    return (
        <Card>
                <CardImg
                    width='100%'
                    src={image}
                    alt={name}
                />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
        </Card>
    );
    }
    export default CampsiteCard


##### VO
Now, before we go any further, I want you to open up the CampsiteCard component.  Let's clean this up a bit, using the destructuring syntax that you just learned.

So instead of bringing in props, we'll destructure campsite from our props in the input parameter.

And then we'll destructure the two properties of the campsiute that we'll need, and use those new variables in the appropriate places, in place of props.campsute.image and props.campsite.name


---




##### SC

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())]
}


##### VO
And now we're almost ready to start writing the CampsitesPage, but before we do, I want to write one more selector.

We're again going to export this selector, so let's start with export const and then we're going to call this one selectRandomCampsite, because that's exactly what it's going to do.

And it's going to be an arrow function which returns a single campsite, chosen at random?  Do you remember how to do this?  Go ahead and pause the video now and see if you can do it on your own, and then I'll come back and write it.

---


##### SC


export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())]
}

##### VO

Did you get it?

I'll show you how I'll do it now.  

This arrow function is going to return CAMPSITES [] at Math.floor() -- because, remember, we want an integer value of CAMPSITES.length * Math.random().

And that's that.  

---


##### SC

show a screengrab of the CampsitesPage after video 6

##### VO
In the next video, we'll use this selector, to show a random campsite, on the new CampsitesPage that we're about to write.  I'll see you there.

---


##### SC

##### VO


---


##### SC

##### VO