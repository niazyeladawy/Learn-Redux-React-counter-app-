import { createSlice } from '@reduxjs/toolkit';

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
        
    }
});


export default counterSilce.reducer;
export const {increase, decrease} = counterSilce.actions;
