import { createAction, props } from "@ngrx/store";

export const validateUser = createAction('validateUsr',props<any>());

export const navigateUsr = createAction('navigateUsr',props<any>());
