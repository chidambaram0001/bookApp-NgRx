import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class bookService{
    constructor(private httpAPI:HttpClient){

    }
    getBooks(){
        return this.httpAPI.get('https://freetestapi.com/api/v1/books');
    }
    getBookDetails(id){
        return this.httpAPI.get('https://freetestapi.com/api/v1/books/'+id)
    }
   
}
