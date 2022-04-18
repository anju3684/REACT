import { createSlice } from "@reduxjs/toolkit";
const initial={
    isLoggedin:false,
    userDetail:{
        Name:"",
        email:"",
        number:"",
        profile:""
    },
};


export const signUpform=createSlice({
    name:"signUpform",
    initialState:{
        isLoggedin:false,
        userDetail:{
            Name:"",
            email:"",
            number:"",
            profile:""
        },
    },
    reducers:{
        login:(state,action)=>{
                console.log('hello')
                localStorage.setItem("user",JSON.stringify(action.payload))
                return{
                    isLoggedin:true,
                    userDetail:{
                        Name:action.payload.Name,
                        email:action.payload.email,
                        number:action.payload.number,
                        profile:action.payload.profile
                    }
                }
            

        },
        logout:(state)=>{
            localStorage.clear();
            return initial;
        }
    }

})
export const {login,logout}=signUpform.actions
export const signUpformReducer=signUpform.reducer