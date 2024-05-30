import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {ROUTER_NAVIGATED, ROUTER_NAVIGATION, RouterNavigatedAction, RouterNavigationPayload, RouterState, routerNavigatedAction} from '@ngrx/router-store'
import { exhaustMap, filter, map, switchMap } from "rxjs/operators";
import { bookService } from "../../booklist/books.service";
import { addAllBooks, getBookDetails } from "../action/book.action";


@Injectable()
export class bookEffects{
    constructor(private act:Actions, private bookService: bookService){

    }
    navigtionCutter$ = createEffect(()=>{
        return this.act.pipe(
            ofType(ROUTER_NAVIGATED),
            filter((r:any)=>{
            return r.payload.routerState.url.startsWith('/books');
        }),
        switchMap(()=>{
            return this.bookService.getBooks().pipe(map((data)=>{
                return addAllBooks({books:data});
            }))
        })

        )
    })

    bookDetails$ = createEffect(()=>{
        var bookId;
        return this.act.pipe(ofType(ROUTER_NAVIGATION), filter((routeObj:any)=>{
            
            return bookId = routeObj.payload.routerState.params['id'];
        }), switchMap(()=>{
            return this.bookService.getBookDetails(bookId).pipe(map((data)=>{
                return getBookDetails({book:data});
            }));
        }))
    })

}
