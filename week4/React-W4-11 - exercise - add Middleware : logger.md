-- getDefaultMiddleware
    short and easy but be sure to remind them what getDefaultMiddleware does
    (was talked about in the last video)
    and notice that it's one of these nifty FP compositions

app/store.js


import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat([logger])
});




1. import getDefaultMiddleware
2. import logger
3. concatenate logger with default middleware

