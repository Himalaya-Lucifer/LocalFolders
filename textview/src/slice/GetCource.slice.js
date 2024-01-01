import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchCource = createAsyncThunk("fetch/cource",async (action) => {
    const responce = await axios.get(`http://localhost:3600/cources/${action.id}`);
    return responce.data;
})

export const GetCourceSlice = createSlice({
    name : "cources",
    initialState : {
        data : null,
        error : null,
        loading :false
    },
    reducers : {},
    extraReducers:(builder) => {
        builder.addCase(fetchCource.pending,(state) => {
            state.loading=true
        })
        .addCase(fetchCource.fulfilled,(state,action) => {
            state.loading = false;
            console.log("post cource state",JSON.stringify(state));
            console.log("post cource action",action);
            state.data = action.payload;
        })
        .addCase(fetchCource.rejected,(state,action) => {
            state.error = action.error;
        })
    }
})

export default GetCourceSlice.reducer;
