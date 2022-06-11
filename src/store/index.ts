import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

interface UserModel {
    userData:object
}

const initialState:UserModel={
    userData: {}
}

export const UPDATE_USER = "UPDATE_USER"

interface UpdateUser {
    type: typeof UPDATE_USER
    payload:object
}

export type userActions = UpdateUser

const userReducers=(state=initialState, action:userActions)=>{
    switch(action.type){
        case UPDATE_USER:
            return {
                userData:state.userData = action.payload
            }
        default:
            return state
    }
}

const reducer = combineReducers({
    userData:userReducers
})

export interface userState {
    userData:UserModel
}

const store = configureStore({
    reducer,
})


export default store;