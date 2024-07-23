import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from "@angular/router";
import { booklist } from "./booklist/booklist.component";
import {HttpClientModule} from '@angular/common/http'
import { bookService } from "./booklist/books.service";
import { StoreModule } from "@ngrx/store";
import { booksReducer } from "./store/reducers/book.reducer";
import { EffectsModule } from "@ngrx/effects";
import { bookEffects } from "./store/effects/bookEffects";
import { books } from "./books.component";
import { addBook } from "./addbook/addBook.comp";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { editBook } from "./editbook/edit.book.component";

const path:Routes = [{
     path:'',
     component:books,
     children:[{
        path:'',
        redirectTo:'list'
     },
    {
        path:'list',
        component:booklist
    },
    {
        path:'addbook',
        component:addBook
    },
    {
        path:'editbook/:id',
        component:editBook
    }]
    
},
]

@NgModule({
    declarations:[books,booklist,addBook,editBook],
    imports:[CommonModule,RouterModule.forChild(path),
        HttpClientModule,
        FormsModule,ReactiveFormsModule,
        StoreModule.forFeature('books',booksReducer),
        EffectsModule.forFeature([bookEffects]),
    ],
    exports:[],
    providers:[bookService],
    
})

export class booksModule{

}
