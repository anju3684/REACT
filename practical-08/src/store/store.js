import { configureStore } from "@reduxjs/toolkit"
import { signUpformReducer } from "./signUpform"

export const store=configureStore({
    reducer:{
        signUpform:signUpformReducer,
    },
});