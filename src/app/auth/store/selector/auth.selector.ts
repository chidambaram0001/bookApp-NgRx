import { createFeatureSelector, createSelector } from "@ngrx/store";

export const user = createFeatureSelector<any>('user');

export const userDetails = createSelector(user,(state)=>{
    return state.userDetails
})
