
updated CampsitesList.js:

            import { useSelector } from 'react-redux';
            import {
                Col, Row,
            } from 'reactstrap';
            import CampsiteCard from "./CampsiteCard";
            import { selectAllCampsites } from './campsitesSlice';

            const CampsitesList = () => {
            
                    const campsites = useSelector(selectAllCampsites);
                    
                    console.log(campsites);
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




updated campsitesSlice.js

            import { createSlice, current } from '@reduxjs/toolkit';
            import { CAMPSITES } from '../../app/shared/CAMPSITES';


            const initialState = {
                data: CAMPSITES,
            }


            const campsitesSlice = createSlice({
                name: 'campsites',
                initialState,
                reducers: {
                    logMe: (state, action) => {
                        console.log(current(state.data));
                    }
                },
            })

            export const campsitesReducer = campsitesSlice.reducer;

            export const { logMe } = campsitesSlice.actions;

            export const selectAllCampsites = (state) => {
                console.log(state);
                return state.campsites.data 
            }  

            export const selectCampsiteById = id => state => {
                return state.campsites.data.find( el => el.id === parseInt(id))  
            }  


            export const selectFeaturedCampsite =  state => {
                return state.campsites.data.find(campsite => campsite.featured)
            }



1. add useSelector to CampsitesList
2. in selectAllCampsites change from using data directly to using 
    state.campsites.data
3. bring state in to selectAllCampsites
4. now change selectCampsiteById -- (higher order function)
    notice CampsiteDetailPage doesn't get a campsite
    let's see what it does get...oh, neat a function
5.  just for fun let's invoke that function.  whoops undefined. 
6. we need useSelector(), WHICH SUPPLIES STATE -- add useSelector
7. rewrite selectFeaturedCampsite
8. try adding useSelector in selectFeatured.  whoops problem. 
9. instead, we'll bring in state
10. then use useSelector in AnimatedMenu
11. the selector that needs it will have it, the other ones still work, but...they're not in our redux state yet!  It's time to add them.  Can you do it?  Try taking what you learned here and doing it on your own.
promotions
partners
you'll need
1. to create a slice and export a reducer for each of them
2. update the store with the info from the new reducer
3. update the selectors
4. update the components that use the selectors
5. update this selectFeatured to bring state in to each

I'll start by breaking your site and adding state to each of these selectors.  

Now go fix it.  When they've been added to redux it should work as before!

 then I'll come back and code through the changes with you.  good luck.