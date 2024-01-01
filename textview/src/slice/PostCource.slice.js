import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios'

export const postCource = createAsyncThunk("post/cource",async (cource) => {
    const responce = await axios.post("http://localhost:3600/cources",cource);
    console.log("On post responce will be",responce.data);
    return responce.data;
})

export const PostCourceSlice = createSlice({
    name : "cources",
    initialState : {
        data : null,
        error : null,
        loading :false
    },
    reducers : {},
    extraReducers:(builder) => {
        builder.addCase(postCource.pending,(state) => {
            state.loading=true
        })
        .addCase(postCource.fulfilled,(state,action) => {
            state.loading = false;
            console.log("post cource state",JSON.stringify(state));
            console.log("post cource action",action);
            state.data = action.payload;
        })
        .addCase(postCource.rejected,(state,action) => {
            state.error = action.error;
        })
    }
})

export default PostCourceSlice.reducer;
