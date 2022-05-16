import { createSlice } from '@reduxjs/toolkit';
import { logout } from './authSlice';

const initState = {value:0 };

const counterSilce = createSlice({
    name:"counter",
    initialState:initState,
    reducers:{
        increase:(state  , action)=>{
            state.value += action.payload;
        },
        decrease:(state  , action)=>{
            state.value -= action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(logout,(state,action)=>{
            state.value = initState.value;
        })
    }
});


export default counterSilce.reducer;
export const {increase, decrease} = counterSilce.actions;
