React-W4-13-useSelector-and-state

--- 

##### SC

useSelector

##### VO

Welcome back


--- 

##### SC
show campsitesSlice

focus arrow follows text.


##### VO


In the last video, you created your campsitesSlice, and from that slice you exported a reducer.  



--- 

##### SC

focus arrow on campsites

    import { configureStore } from '@reduxjs/toolkit';
    import logger from 'redux-logger'
    import { campsitesReducer } from '../features/campsites/campsitesSlice';

    export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([logger])
    });

##### VO
Then, you added that reducer to the store.  And in so doing, we made a slice of our global state, called campsites.

--- 

##### SC

focus arrow on campsites

    import { configureStore } from '@reduxjs/toolkit';
    import logger from 'redux-logger'
    import { campsitesReducer } from '../features/campsites/campsitesSlice';

    export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([logger])
    });

    console.log(store.getState());

##### VO

And, in our store.js, if call store.getState() and log that value....

--- 

##### SC
show console with:
        {campsites: {…}}
        campsites:
        data: Array(4)
        0: {id: 0, name: 'React Lake Campground', image: '/static/media/react-lake.05bcb300b6ee37035a7c.jpg', elevation: 1233, featured: false, …}
        1: {id: 1, name: 'Chrome River Campground ', image: '/static/media/chrome-river.59bc51bda08040bae159.jpg', elevation: 877, featured: false, …}
        2: {id: 2, name: 'Breadcrumb Trail Campground', image: '/static/media/breadcrumb-trail.48aaedf7dfa61a00a5b1.jpg', elevation: 2901, featured: false, …}
        3: {id: 3, name: 'Redux Woods Campground', image: '/static/media/redux-woods.371a075ae70280bee9e3.jpg', elevation: 42, featured: true, …}
        length: 4
        [[Prototype]]: Array(0)
        [[Prototype]]: Object
        [[Prototype]]: Object
        constructor: ƒ Object()
        hasOwnProperty: ƒ hasOwnProperty()
        isPrototypeOf: ƒ isPrototypeOf()
        propertyIsEnumerable: ƒ propertyIsEnumerable()
        toLocaleString: ƒ toLocaleString()
        toString: ƒ toString()
        valueOf: ƒ valueOf()
        __defineGetter__: ƒ __defineGetter__()
        __defineSetter__: ƒ __defineSetter__()
        __lookupGetter__: ƒ __lookupGetter__()
        __lookupSetter__: ƒ __lookupSetter__()
        __proto__: (...)
        get __proto__: ƒ __proto__()
        set __proto__: ƒ __proto__()


##### VO


 we can see that, sure enough, we've got our campsites in our store.

But guess what? We're not actually using THAT data in our app yet.


--- 

##### SC

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

##### VO


If we look at our CampsitesList, for instance, where we show all of the campsites, we've got this selector named selectAllCampsites, that selects all of the campsites.

--- 

##### SC

export const selectAllCampsites = () => {
    return CAMPSITES 
}  

##### VO

But, back in our campsitesSlice, if we look at that selector, we can see that it still points to the hard coded data, NOT the data in our redux store.

--- 

##### SC

export const selectAllCampsites = () => {
    return state.campsites.data 
}  

##### VO

Instead, what we need to do is make this selector select the data from our redux store.  So, instead of returning the CAMPSITES data, well return a value from state.  As we just saw, we've got a key named camspites in there....
--- 

##### SC

const initialState = {
    data: CAMPSITES,
}

##### VO

...and that campsites object in turn has a key named data, because we wrote that in our initialState, up above.  Right? 


--- 

##### SC


export const selectAllCampsites = () => {
    return state.campsites.data 
}  

##### VO

So let's try updating this selector, to get the data from redux, as I said above.

--- 

##### SC
show

    Compiled with problems:X

    ERROR


    src/features/campsites/campsitesSlice.js
    Line 19:17:  'state' is not defined  no-undef
    Line 20:12:  'state' is not defined  no-undef

    Search for the keywords to learn more about each error.

##### VO
And I'll just save this and......whoopsie daisie.  As you can see, 'state' is not defined.  

And of course, I made that error on purpose, because this sort of thing can be a little confusing when you're new to redux.


--- 

##### SC

export const selectAllCampsites = (state) => {
    console.log(state);
    return state.campsites.data 
}  

##### VO

What we need is a way to supply the current state of our store to this function.  So we'll start by accepting it as an input parameter.  But, if we log that value in the console, we can see that it's still undefined, and our app is still broken.


--- 

##### SC

React Redux
    useSelector()
    useDispatch()
    Provider

##### VO

This is where the hook named useSelector comes in.  Use selector is exported from the react-redux library, a library whose sole purpose is to give us a way to connect react and redux together. 

React redux has another hook named useDispatch, which we'll see soon, and we've already seen another key piece of the react redux library, the Provider component, that we wrapped around our application, remember?


--- 

##### SC

<Provider store={store}>
    <App />
</Provider>


##### VO

So, we pass our store into the Provider, and wrap it around our App.  


--- 

##### SC

import { useSelector } from 'react-redux';

##### VO

And then at any point in our App where we want to access a piece of our state, we use useSelector().  We start by importing useSelector from react-redux.


--- 

##### SC

 const campsites = useSelector(selectAllCampsites);

##### VO

And then we pass our selector in to useSelector, and it passes state in to our selector as an input parameter.


--- 

##### SC

export const selectAllCampsites = (state) => {
    console.log(state);
    return state.campsites.data 
}  


##### VO

And then we just need to update our selector to take in that parameter that useSelector provides, and we can access the current state of our store, right in our selector.


--- 

##### SC

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


##### VO

In the next video, we'll update all of our campsite selectors to point at our redux store, and we'll bring in useSelector in the appropriate places in our application.

I'll see you there.