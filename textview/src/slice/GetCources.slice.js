import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchCources = createAsyncThunk("fetch/cources",async () => {
    const responce = await axios.get("http://localhost:3600/cources");
    return responce.data;
})

export const GetCourcesSlice = createSlice({
    name : "cources",
    initialState : {
        data : null,
        error : null,
        loading :false
    },
    reducers : {},
    extraReducers:(builder) => {
        builder.addCase(fetchCources.pending,(state) => {
            state.loading=true
        })
        .addCase(fetchCources.fulfilled,(state,action) => {
            state.loading = false;
            console.log("post cource state",JSON.stringify(state));
            console.log("post cource action",action);
            state.data = action.payload;
        })
        .addCase(fetchCources.rejected,(state,action) => {
            state.error = action.error;
        })
    }
})

export default GetCourcesSlice.reducer;
