import {createSlice} from "@reduxjs/toolkit";

const intialState = {
    counter : 0
}

export const counterSlice = createSlice({
    name : "counter_name",
    initialState : intialState,
    reducers : {
        increase : (state) => {
            state.counter = state.counter+1;

        },
        decrease : (state) => {
            state.counter = state.counter-1;
        }
    } 
})

export const { increase, decrease } = counterSlice.actions
export default counterSlice.reducer;
