features/CampsitesList.js

import { CAMPSITES } from '../../app/shared/CAMPSITES';
import {
    Col,
} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";

const CampsitesList = () => {
    if(CAMPSITES){
        return (       
            CAMPSITES.map((campsite) => {
                return (
                    <Col md='5' key={campsite.id} className='m-1'>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            }) 
        )
      } else {
          return null
      }
}

export default CampsitesList 


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

5. set up conditional return, so if there is no campsites array, it will return null

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