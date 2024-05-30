import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { getBookDetails } from "../store/selector/boot.selector";
import { editBookList } from "../store/action/book.action";
import { Router } from "@angular/router";

@Component({
    selector:'editBook',
    templateUrl:'./edit.book.html'
})

export class editBook{
    public addBook:FormGroup;
    constructor(private store:Store<any>, private rt:Router){
        this.addBook = new FormGroup({
            title: new FormControl('', [Validators.required]),
            author: new FormControl('',[Validators.required]),
            description: new FormControl('', [Validators.required]),
            publication_year: new FormControl('', [Validators.required]),
            genre: new FormControl([], [Validators.required]),
            id: new FormControl(''),
            cover_image: new FormControl('')
        })
    }

    ngOnInit(){
        this.store.select(getBookDetails).subscribe((data)=>{
            if(Object.keys(data).length > 0){
                this.addBook.setValue(data)
            }
        })
    }
    editBook(){
        this.store.dispatch(editBookList({book:this.addBook.getRawValue()}));
        this.rt.navigateByUrl('books')
    }
}
