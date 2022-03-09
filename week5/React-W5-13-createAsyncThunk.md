React-W5-12-createAsyncThunk



--- 

##### SC

createAsyncThunk

##### VO

welcome back.

--- 

##### SC

focus arrow follows the text

Async Redux

    thunks: actions that contain an async function as the payload
    three possible states for external data: pending, fulfilled, rejected
    all of this logic can get repetitive - redux toolkit simplifies this
    


##### VO

In the last video, we looked at how Redux handles asynchronous data fetching.

I talked about thunks, which are, simply, actions that contain a payload that is an async function that returns a promise.  And I mentioned that in a typical redux implmentation, we will need to import the thunk library to handle these actions, but that with redux toolkit, that thunk middleware is part of the default middleware.

I also talked about the three states that an interface that depends on external data will inevitablly need to account for: pending, which will usually be represented by a loading message of some sort; fulfilled, which will be the web site as we want it to function after a successful request; and rejected, which will need to show an error message of some sort.

Each of those possible states neeeds to be represented in state, and we need to be able to dispatch an action from our interface to update that state appropriately.

And I mentioned that all of these possible states and actions with thunks can lead to an excessive amount of code, but that redux toolkit simplifies this code tremendously.

--- 

##### SC

createAsyncThunk(string, async function)


##### VO

The tool that it provides to us for managing all of this logic is called createAsyncThunk.  It's a function that accepts two input parameters.  First, a string, which it will use to create the action types, and second an asynchronous function that it will use to initiate the asynchronous request.  

As we'll see in a later video, this async function will also have access to the dispatch and getState methods of our store, if we want them, via the thunk API.  But we'll get to that later.

--- 

##### SC

show campsitesSlice at end of async campsites exercise

##### VO

In the next few exercises, we'll update each of our slices to receive their respective data from an external API, and we'll lean on this createAsyncThunk to help create the logic that we'll need to manage these requests.


--- 

##### SC

show live server/campsites endpoint

##### VO

  Of course, in our case, it will be an instance of live server running locally, but as far as our app is concerned, this API could be located thousands of miles away....the process is the same.

--- 

##### SC
campsitesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


##### VO

We'll start by importing createAsyncThunk into each slice that needs it.  In this case, I'm showing you the code for the campsitesSlice.


--- 

##### SC
campsitesSlice.js

import { baseUrl } from '../../app/shared/baseUrl';

....
baseUrl.js
export const baseUrl = 'http://localhost:3001/';


##### VO

Then, we'll import the baseUrl, which is just a string that we've stored in a file called baseUrl.

--- 

##### SC

export const fetchCampsites = createAsyncThunk();

##### VO

Then, we'll create our AsyncThunk.  createAsyncThunk is going to return an action, remember, and we're going to dispatch this action to initiate the data request.  So we need to export it.  

--- 

##### SC

export const fetchCampsites = createAsyncThunk('campsites/fetchCampsites', async function);


##### VO

The first thing that we'll pass in will be a string.  This string will contain the slice name and then a backslash and then the name of the action that we're creating.  

The second thing that we're going to pass in will be an async function

--- 

##### SC

export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites',
    async() => {
        const response = await fetch(baseUrl + 'campsites')
        return response.json()
    }
);

##### VO

And, if we want to we can reformat this a little to make it easier to read, by putting each of these parameters on seperate lines.

Our async function is going to be an arrow function.  Inside the body of that function, we'll create a variable called response, which will await a call to fetch.  WE're going to use that baseUrl that we imported, and also add campsites, or whichever slice of data we're trying to fetch.

--- 

##### SC

'http://localhost:3001/campsites'
'http://localhost:3001/partners'
'http://localhost:3001/promotions'
'http://localhost:3001/comments'

##### VO

And that's because, if you remember, our live server is set up to serve data at each of these addresses.  So we'll be doing a similar process for each slice, but in each case we'll fetch from a slightly different URL.

--- 

##### SC

focus arrow follows the text

export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites',
    async() => {
        const response = await fetch(baseUrl + 'campsites')
        return response.json()
    }
);


//createAsyncThunk(string, async function)


##### VO

When the response is returned from fetch, we'll call the .json() method on that resonse -- which will of course return a Promise -- and we will return that Promise from our function.

And that's the basic syntax for using createAsyncThunk.  It's a function that takes in a string and an async function that returns a promise.

--- 

##### SC

    const campsitesSlice = createSlice({
        name: 'campsites',
        initialState,
        reducers: {},
        extraReducers: {
            [fetchCampsites.pending]: (state, action) => {
                state.isLoading = true;   
            },
            [fetchCampsites.fulfilled]: (state, action) => {
                state.isLoading = false;
                state.errMsg = null;
                state.data = mapImageURL(action.payload); 
            },
            [fetchCampsites.rejected]: (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error;
            },
        },
    })

##### VO

Now, in our slice, we need to create each case reducer function.  Remember these are the functions that we use inside our slice to handle the logic for each dispatched action.

And, since we're using createAsyncThunk, we're going to use a special key in our slice, called extraReducers.  We'll set that equal to an object, which will have three keys.  And ach key will be a property that is computed off of that fetchCampsites action.

I know that this syntax is a little bit imposing, but it's not really that different from a regular case reducer function.

Just like with our previous pokemon API example, we'll have three possible states: pending, fulfilled and rejected.  These actions are dispatched from within our asyncThunk at the appropriate times.  So when the fetch begins, fetchCampsite.pending is dispatched, and received here.  So we'll set isLoading to true.

And then when the request is received, our asyncThunk will dispatch fetchCampsites.fulfilled and we'll set isLoading to false and update our slice's data.




--- 

##### SC



##### VO

You can see that we're also going to call a utility function called mapImageURL, and pass in the payload from our action.


--- 

##### SC


import { baseUrl } from '../app/shared/baseUrl';

export const mapImageURL = (arr) => {
    return arr.map(item => {
        return {
            ...item,
            image: baseUrl + item.image,
        }
    })
}



##### VO

mapImageUrl is going to take in our fetched data and modify each image url.

So here's another great use case for Array.map!  See how we take in the array of data and then we map over each item and add the baseurl to the url that's stored in the image?



--- 

##### SC



##### VO

We need to do this because, now that our data lives on a server somewhere, our images also live on that server.


--- 

##### SC

BEFORE:

"images/react-lake.jpg"


##### VO

So, before this mapping process, each image url looks like this. 

--- 

##### SC

AFTER: 

"http://localhost:3001/images/react-lake.jpg"

##### VO

And after the mapping process, each image url looks like this.


Nifty, right?  Array.map to the rescue.

--- 

##### SC

import { mapImageURL } from '../../utils/mapImageURL.js'

##### VO

IN the next exercise, you'll put that helper function in your utilities folder, and then import it into each slice that needs it.

--- 

##### SC

    const campsitesSlice = createSlice({
        name: 'campsites',
        initialState,
        reducers: {},
        extraReducers: {
            [fetchCampsites.pending]: (state, action) => {
                state.isLoading = true;   
            },
            [fetchCampsites.fulfilled]: (state, action) => {
                state.isLoading = false;
                state.errMsg = null;
                state.data = mapImageURL(action.payload); 
            },
            [fetchCampsites.rejected]: (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error;
            },
        },
    })

##### VO

Now, back to our cases.  You can see that there's one more case, which is, rejected.  and in that case, we'll again set isLoading to false, and then also update an errMsg property to hold the action.error.

--- 

##### SC

const initialState = {
    data: [],
    isLoading: false,
    errMsg: null,
}

##### VO

Now, speaking of that errMsg property, we also need to remember to update our initial state, with isLoading and errMsg properties, which we'll initialize to falsy values.


--- 

##### SC

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';

##### VO

Then, we need to go to our App.js, which is where we'll dispatch our action.  We'll import useEffect, useDispatch and our newly created async thunk


--- 

##### SC

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCampsites());
  }, [dispatch]);

##### VO

And then we'll dispatch fetch campsites from inside useEffect, when the app component loads.

--- 

##### SC

show fully functioning CampsitesList 

##### VO

In the next video, I'll walk you through each of these steps, and we'll also add some conditional rendering to our CampsitesList, so that it will display the loading spinner while the data is being fetched, and then the campsites data, as before, after the fetch has completed.

--- 

##### SC

show error CampsitesList 

##### VO

And, of course, if there's some sort of error, like for instance I forgot to boot up the server....then we'll get the error message.

I'll see you there.