import { createAction, props } from "@ngrx/store";

export const updateLoginStatue = createAction('updateLoginStatus',props<any>());
