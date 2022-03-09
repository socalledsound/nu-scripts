    coding those changes for each of those slices
    1. import createSlice
    2. create the slice
    3. update selectors to bring in state
    4. add reducer to store.js
    5. use useSelector in PartnersList

features/partners/partnersSlice.js

    import { createSlice } from '@reduxjs/toolkit';
import { PARTNERS } from '../../app/shared/PARTNERS';

const initialState = {
    data: PARTNERS,
}

const partnersSlice = createSlice({
    name: 'partners',
    initialState,
})

export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = state => state.partners.data;

export const selectFeaturedPartner = state => state.partners.data.find(partner => partner.featured);


features/promotions/promotionsSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { PROMOTIONS } from '../../app/shared/PROMOTIONS';

const initialState = {
    data: PROMOTIONS,
}

const promotionsSlice = createSlice({
    name: 'promotions',
    initialState,
})

export const promotionsReducer = promotionsSlice.reducer;

export const selectFeaturedPromotion = state => state.promotions.data.find(promotion => promotion.featured);


store.js:

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer} from '../features/promotions/promotionsSlice';


export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
  },
  middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat([logger])
});


