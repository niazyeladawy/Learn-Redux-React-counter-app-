import { createSlice } from '@reduxjs/toolkit';

const initState = {isLogged: false };

const authSilce = createSlice({
    name:"auth",
    initialState:initState,
    reducers:{
        login:(state  )=>{
            state.isLogged = true;
        },
        logout:(state  )=>{
            state.isLogged = false;
        },
    }
});


export default authSilce.reducer;
export const {login,logout} = authSilce.actions;
