features/campsitesSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES';


const initialState = {
    data: CAMPSITES,
}


const campsitesSlice = createSlice({
    name: 'campsites',
    initialState,
    reducers: {},
})

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = () => {
    return CAMPSITES 
}  

export const selectCampsiteById = id => {
    return CAMPSITES.find( el => el.id === parseInt(id))  
}  

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())]
}

export const selectCampsitesAboveElevation = (elevation) => {
    return CAMPSITES.filter(campsite => campsite.elevation > elevation)
}

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find(campsite => campsite.featured)
}


    1. import createSlice
    2. create initialState, set data to CAMPSITES
    (mention that next week it will become an async fetch?)
    2. create the slice
    3. export reducer
    4. add reducer to store
    

    (upodate selectors in next exercise)