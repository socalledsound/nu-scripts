React-W2-17-react-router - url parameters


---
### SC
react router hooks

### VO
welcome back.

---
### SC

show current state of the web site with links in the header and footer and navigate to various pages

### VO

So now we've come a long way!  We've got a website -- or, actually, a 'single page application' -- with working links in the header and footer.


---
### SC

show clicking on a link and modifying the url, focus arrow on 

### VO
And if we click on one of those links it modifies the url in the browser's address bar.

---
### SC
show App.js
focus outline on Routes

### VO
And we've set up some Routes using react router that will interpret the current URL and take us to the appropriate page.  So our basic routing is done, for now.

---
### SC
Show website at end of exercise 18, click on campsite directory item and focus outline on the number in the address bar

### VO

Our next step will be to set up a URL parameter.  Do you see here how when I click on an item in the campsite list, the browser takes me to a new page, a detailed look at a specific campsite?

And if I go back and click on a different item in the list, it takes me to a different page.



---
### SC

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='home' element={<HomePage/>}/>
            <Route path='contactus' element={< ContactPage />}/>
            <Route path='directory' element={<CampsitesDirectoryPage />}/>
            <Route path='directory/0' element={<CampsiteDetailPage campsiteId={0}/>}/>
            <Route path='directory/1' element={<CampsiteDetailPage campsiteId={1}/>}/>
            <Route path='directory/2' element={<CampsitedetailPage campsiteId={2}/>}/>
        </Routes>
          
        <Footer />
    </div>
  );
}

### VO
Now, one way to do this would be to go in to my Routes, and add a route for each detailed view, right?  But this would be, honestly, pretty lame.  It would be a lot of work, and it wouldn't scale well; any time we want to add a new campsite to our campsites data, we'd have to add a new route.  

---
### SC

focus on url param


function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='home' element={<HomePage/>}/>
            <Route path='contactus' element={< ContactPage />}/>
            <Route path='directory' element={<CampsitesDirectoryPage />}/>
            <Route path='directory/:campsiteId' element={<CampsiteDetailPage />}/>
        </Routes>
          
        <Footer />
    </div>
  );
}
### VO

Instead, we can set this up dynamically, with a url parameter.  It looks like this.  Instead of explicitly providing a numerical value for each route, we provide a sort of variable name -- a url parameter.  In this case, everything after the backslash will be available to us inside our CampsiteDetailPage as a parameter named campsiteId.  


---
### SC

useParams() is a hook that we can use to get parameter information from the address bar

### VO

And react router dom very helpfully provides us with a hook which we can use to get that parameter.

---
### SC

using useParams()
1. import useParams
import { useParams } from 'react-router-dom';
2. destructure the parameter value
const { campsiteId } = useParams();

### VO

To use it, all we need to do is first, import it, and then destructure the parameter name from the object that it provides.

---
### SC
import {
    Container,
    Row,
} from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsiteSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail'

const CampsiteDetailPage = () => {
   
    const { campsiteId } = useParams();
    const campsite = selectCampsiteById(campsiteId)

        return (
            <Container>
                <Row>
                    <CampsiteDetail campsite={campsite} />
                </Row>
            </Container>
        )
}

export default CampsiteDetailPage;

### VO

So in our CampsiteDetailPage, we'll first import useParams, at the top, and then invoke it inside our component, destructuring the campsiteId that we want to use.  

---
### SC

import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsiteCard = ({campsite}) => {
    const { id, name, image } = campsite;
  return (
    <Link to={`${id}`}>
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
    </Link>
  );
}
export default CampsiteCard
### VO

And the only other thing we need to do is to go in to our CampsiteCard, and set up a Link component that will add the id of the campsite to the browser url when it is clicked.   Easy, peasy, right?

---
### SC

show the browser with working site after exercise 18 again

### VO

In tyhe next exercise, I'll code through this process with you.  




### end




Minae Script old course:
REACT ROUTER PARAMETERS

In our web app currently, clicking on the campsites in the Directory is no longer showing the information for that campsite. 
In the next exercise, you'll learn to use parameters in React Router to access that information;.
First, you'll set it up so that When you click on a campsite, your React code will automatically grab the ID of the campsite and add it to the path, as you can see up here in the address bar. 
So these URLs are not hard coded, they are generated automatically based on the campsite data. 

Then, with React Router, the Route component will use this ID part of the URL, which here is 3 (or whatever number), Then it'll send the campsite object with that ID to the CampsiteInfo component and render the information for that campsite. 

To let the Route component know that this part after Directory is going to be a dynamic route parameter, we will use this attribute: path='/directory/:campsiteId'
This colon here will cause the Route component to grab whatever string occurs after directory, then store that string inside a Route parameter called campsiteId. 
That Route parameter is a property of the Route component's state. Specifically, it's stored inside a state object called "match", as a property named "params". 
We can look inside the React Devtools Components tool, and if I select this Route
component, then I can see it has a state, with a match object, and a params property, which is also an object. 
And in that is the campsiteId, with a value of "0" (or whatever). If I click on a different campsite, you can see how that changes.

Then, this stored campsiteId can be used to pull up the campsite object with that ID, and that object can then be passed into CampsiteInfo component. 

Now that you have an idea of what you will be doing, go ahead to the next exercise to put it into practice.

