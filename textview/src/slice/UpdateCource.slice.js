import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios'

export const updateCource = createAsyncThunk("update/cource",async ({id,formv}) => {
    const responce = await axios.put(`http://localhost:3600/cources/${id}`,formv);
    return responce.data;
})

export const UpdateCourceSlice = createSlice({
    name : "cources",
    initialState : {
        data : null,
        error : null,
        loading :false
    },
    reducers : {},
    extraReducers:(builder) => {
        builder.addCase(updateCource.pending,(state) => {
            state.loading=true
        })
        .addCase(updateCource.fulfilled,(state,action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(updateCource.rejected,(state,action) => {
            state.error = action.error;
        })
    }
})

export default UpdateCourceSlice.reducer;
