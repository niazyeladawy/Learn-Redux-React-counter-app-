
import {configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import counterReducer from './counterSilce';



const store = configureStore({reducer:{counter:counterReducer,auth:authReducer}});

export default store;