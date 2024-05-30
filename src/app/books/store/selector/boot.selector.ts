import { createFeatureSelector, createSelector } from "@ngrx/store";

export const allBooks = createFeatureSelector<any>('books');

export const getBooks = createSelector(allBooks,(state)=>{
    return state.books;
});

export const getBookDetails = createSelector(allBooks,(state)=>{
    return state.currentBook;
});
