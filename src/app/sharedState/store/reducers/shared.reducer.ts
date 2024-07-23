import { createReducer, on } from "@ngrx/store";
import { sharedState } from "../../shared.state";
import { updateLoginStatue } from "../action/shared.action";

export function sharedReducer(state, action){

    return createReducer(sharedState, on(updateLoginStatue,(state,action)=>{
        return {...state, isLoggedIn:action.isLoggedIn}
    }))(state,action)

}


