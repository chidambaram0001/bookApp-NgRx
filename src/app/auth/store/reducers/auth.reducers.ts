import { createReducer } from "@ngrx/store";
import { AuthStatus } from "../auth.state";

export function userReducer(action,state){
    return createReducer(AuthStatus)(action,state)
}
