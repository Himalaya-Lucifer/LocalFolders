import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../slice/counter.slice"
import CourcesReducer from '../slice/GetCources.slice'
import CourceReducer from '../slice/GetCource.slice'
import PostReducer from '../slice/PostCource.slice'
import UpdateReducer from '../slice/UpdateCource.slice'

export const store = configureStore( {
    reducer : {
        counter_val : CounterReducer,
        cources_val : CourcesReducer,
        cource_val : CourceReducer,
        post_val : PostReducer,
        update_val : UpdateReducer
        
    }
})
