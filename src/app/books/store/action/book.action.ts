import { createAction, props } from "@ngrx/store";

export const addAllBooks = createAction('addAll',props<any>());

export const addBookToList = createAction('add',props<any>());

export const getBookDetails = createAction('getBook',props<any>());

export const editBookList = createAction('editBook',props<any>());
