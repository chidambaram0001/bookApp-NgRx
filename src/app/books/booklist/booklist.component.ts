import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { getBooks } from "../store/selector/boot.selector";

@Component({
    selector:"booklist",
    templateUrl:"./booklist.html",
    styleUrls:['./booklist.css']
})

export class booklist{
    public bookList$;
    constructor(private st:Store<any>){

    }

    ngOnInit(){
        this.bookList$ = this.st.select(getBooks);
        this.bookList$.subscribe(st=>console.log(st))
    }
}
