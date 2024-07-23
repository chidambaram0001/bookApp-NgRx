import { createFeatureSelector, createSelector } from "@ngrx/store";

export const sharedData = createFeatureSelector<any>('sharedData');

export const getloggedInData = createSelector(sharedData,(state)=>{
    return state.isLoggedIn;
})
