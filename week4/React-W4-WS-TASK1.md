task 1 userSlice 

new feature: user

features/user/userSlice.js

1. import createSlice
import { createSlice } from '@reduxjs/toolkit';

2. create initialState,set currentUser to null
const initialState = {
    currentUser: null,

}

3. create userSlice, pass in initialState, create an action case that takes in an action of type setCurrentUser and sets currentUser to the action.payload

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return {
                ...state,
                currentUser : action.payload
            }
        }
    },
})

4. create a selecrtoer that selects the current user from state
export const selectCurrentUser = (state) => state.user.currentUser 

5. export setCurrentUser action
export const { setCurrentUser } = userSlice.actions

6. export userReducer
export const userReducer = userSlice.reducer;

7. 
add userReducer to the store


        import { configureStore } from '@reduxjs/toolkit';
        import logger from 'redux-logger'
        import { campsitesReducer } from '../features/campsites/campsitesSlice';
        import { partnersReducer } from '../features/partners/partnersSlice';
        import { promotionsReducer} from '../features/promotions/promotionsSlice';
        import { commentsReducer } from '../features/comments/commentsSlice';
        import { userReducer } from '../features/user/userSlice';

        export const store = configureStore({
        reducer: {
            campsites: campsitesReducer,
            partners: partnersReducer,
            promotions: promotionsReducer,
            comments: commentsReducer,
            user : userReducer,
        },
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat([logger])
        });
