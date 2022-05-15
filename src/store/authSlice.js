import { createSlice } from '@reduxjs/toolkit';

const initState = {isLogged: false };

const authSilce = createSlice({
    name:"auth",
    initialState:initState,
    reducers:{
        login:(state  )=>{
            state.isLogged = !state.isLogged;
        },
    }
});


export default authSilce.reducer;
export const {login} = authSilce.actions;
