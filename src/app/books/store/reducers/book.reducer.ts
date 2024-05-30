import { createReducer, on } from "@ngrx/store";
import {bookInit} from '../book.state';
import { addAllBooks, addBookToList, editBookList, getBookDetails } from "../action/book.action";
export function booksReducer(state, action){
    return createReducer(bookInit, on(addAllBooks,(state,action)=>{
        if(state.books.length > 0){
            return state;   
        }

        return{
            ...state,
            books:action.books
        }
        
    }),on(addBookToList,(state,action)=>{
        return{
            ...state,
            books:[...state.books, ...action.book]
            
        }
    }), on(getBookDetails,(state,action)=>{
       
        return {...state,
            currentBook: {...action.book}
        }
    }), on(editBookList,(state,action)=>{
        let stateBooks=[...state.books]
        let idx = stateBooks.findIndex(val=>val.id == action.book.id)
        stateBooks.splice(idx,1)
        stateBooks.splice(idx,0,action.book)
        return{
            ...state,
            books : stateBooks
        }
    }))(state,action)
}
