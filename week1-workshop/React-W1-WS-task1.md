repo wk1-ws-task1

1. make new folder called campsites in features folder.  make a new file in features/campsites called CampsiteCard.js
2. 
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
} from 'reactstrap';

3. create CamspiteCard component. bring in props

const CampsiteCard = (props) => {
    return (
    );
}
4. Outline steps
  a. add Card


    const CampsiteCard = (props) => {
        return (
            <Card>

            </Card>
        );
    }

  b. add CardImg


    const CampsiteCard = (props) => {
        return (
            <Card>
                <CardImg
                    width='100%'
                    src={props.campsite.image}
                    alt={props.campsite.name}
                />
            </Card>
        );
    }

  c. CardImgOverlay with CardTitle
const CampsiteCard = (props) => {
        return (
            <Card>
                <CardImg
                    width='100%'
                    src={props.campsite.image}
                    alt={props.campsite.name}
                />
                  <CardImgOverlay>
                    <CardTitle>{props.campsite.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }


5. export CampsiteCard
export default CampsiteCard





6. import it into App component
import CampsiteCard from './features/campsites/CampsiteCard.js';
7. import CAMPSITES into app component
import { CAMPSITES } from './app/shared/CAMPSITES';


9. use CampsiteCard below Header in return of App component and pass CAMPSITES[0] in as a prop named campsite


function App() {
  return (
    <div className="App">
      <Navbar dark color="primary" sticky="top" expand="md">
        <Container >
          <NavbarBrand href="/">
              <img src={NucampLogo} alt="nucamp logo"/>
          </NavbarBrand>
        </Container>   
      </Navbar>
      <CampsiteCard campsite={CAMPSITES[0]} />
    </div>
  );
}


10. Notice that you can show a different campsite by changing the index that we pass in to CAMPSITES -- ie 1, 2 or 3.
 <CampsiteCard campsite={CAMPSITES[1]} />

finished codes:

CamspiteCard.js

  import {
      Card,
      CardImg,
      CardImgOverlay,
      CardTitle,
  } from 'reactstrap';


const CampsiteCard = (props) => {
    return (
        <Card>
                <CardImg
                    width='100%'
                    src={props.campsite.image}
                    alt={props.campsite.name}
                />
                <CardImgOverlay>
                    <CardTitle>{props.campsite.name}</CardTitle>
                </CardImgOverlay>
        </Card>
    );
}
export default CampsiteCard


App.js

import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
import CampsiteCard from './features/campsites/CampsiteCard.js';
import './App.css';
import { CAMPSITES } from './app/shared/CAMPSITES';


function App() {
  return (
    <div className="App">
      <Navbar dark color="primary" sticky="top" expand="md">
        <Container>
          <NavbarBrand className="mr-auto" href="/">
              <img className="navbar-logo" src={NucampLogo} alt="nucamp logo"/>
          </NavbarBrand>
        </Container>
      </Navbar>
      <CampsiteCard campsite={CAMPSITES[0]} />
    </div>
  );
}

export default App;