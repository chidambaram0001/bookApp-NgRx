import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import {addBookToList} from"../store/action/book.action"
import { Router } from "@angular/router";
import { getBookDetails } from "../store/selector/boot.selector";
@Component({
    selector:'addBook',
    templateUrl:'./addBookcomp.html'

})

export class addBook{
    public addBook:FormGroup;

    constructor(private store:Store<any>,private rt:Router){
        this.addBook = new FormGroup({
            title: new FormControl('', [Validators.required]),
            author: new FormControl('',[Validators.required]),
            description: new FormControl('', [Validators.required]),
            publication_year: new FormControl('', [Validators.required]),
            genre: new FormControl([], [Validators.required]),
            id: new FormControl(Math.floor(Math.random()*50)+51),
            cover_image: new FormControl('')
        })

        console.log(this.rt.parseUrl(this.rt.url).fragment);
    }

    ngOnInit(){
        // this.store.select(getBookDetails).subscribe((data)=>{
        //     if(Object.keys(data).length > 0){
        //         this.addBook.setValue(data)
        //     }
        // })
    }

    addBookList(){
        
        this.updateTouched(this.addBook);
        if(this.addBook.status == 'VALID'){
            this.store.dispatch(addBookToList({book:[this.addBook.getRawValue()]}));
            this.rt.navigateByUrl('books')
        }
        
        
        


    }

    updateTouched(formObj){
        Object.keys(formObj.controls).forEach((t)=>{
            const control = formObj.get(t); 
            if(control instanceof FormControl){
                control.markAsTouched();
            }else if(control instanceof FormGroup){
                this.updateTouched(control);
            }else  if(control instanceof FormArray){
                const controlArray = formObj.get(control); 
                Object.keys(controlArray).forEach((item)=>{
                    this.updateTouched(item)
                })
            }
        })
    }
}
