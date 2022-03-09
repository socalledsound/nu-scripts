# TASK 2
we're going to use map to turn campsites into a list of campsites, like we did with the hearts


1. import CAMPSITES
import { CAMPSITES } from '../../app/shared/CAMPSITES';


2. import reactstrap stuff
import {
    Col,
} from 'reactstrap';
3. import CampsiteCard
import CampsiteCard from "./CampsiteCard";

4. 
create statesless functional component nmamed CampsitesList

CUT THIS OUT FOR NOW
<!-- 5. set up conditional return, so if there is no campsites array, it will return null -->

6. if there is an array of campsites we're going to 

return (
                CAMPSITES.map((campsite) => {
                return (
                    <Col md='5' key={campsite.id} className='m-1'>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            }) 
)

explain that better, in detail


7. APP COMPONENT
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
import './App.css';
import CampsitesList from './features/campsites/CamspitesList';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary" sticky="top" expand="md">
        <Container>
          <NavbarBrand className='mr-auto' href='/'>
              <img className='navbar-logo' src={NucampLogo} alt='nucamp logo'/>
          </NavbarBrand>
        </Container>
      </Navbar>
      <CampsitesList />
    </div>
  );
}

export default App;

8. remove CAMPSITES import
9. import CampsitesList
10. use CampsitesList.  Note, no prop, since we brought the data into our CampsitesList.  Generally better to have data as close as possible to where you actually want to use it.  We'll discuss this more in coming weeks.


features/campsites/CampsitesList.js

import { CAMPSITES } from '../../app/shared/CAMPSITES';
import {
    Col,
} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";


import { CAMPSITES } from '../../app/shared/CAMPSITES';
import {
    Col, Row,
} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";

const CampsitesList = () => {
   
        return (     
            <Row className="ms-auto">
                {            
                    CAMPSITES.map((campsite) => {
                        return (
                            <Col md="5" className="m-4" key={campsite.id}>
                                <CampsiteCard campsite={campsite} />
                            </Col>
                        );
                    }) 
                }
            </Row>  
        )
      
}

export default CampsitesList 

export default CampsitesList 