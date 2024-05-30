import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects"
import { navigateUsr, validateUser } from "../action/auth.action";
import { Action, Store } from "@ngrx/store";
import { of } from "rxjs";
import {exhaustMap, tap} from 'rxjs/operators';
import { Router } from "@angular/router";
import { updateLoginStatue } from "src/app/sharedState/store/action/shared.action";
@Injectable()
export class authEffect{
    constructor(private action:Actions, private rout: Router, private store:Store){

    }
    validateusr$ = createEffect(()=>{
        return this.action.pipe(ofType(validateUser),exhaustMap((data)=>{
                 if(data.password && data.username){
                    this.store.dispatch(updateLoginStatue({isLoggedIn:true}))
            //this.rout.navigateByUrl("books")
                    return of(navigateUsr({url:"books"}))
                 }   

                 return of(navigateUsr({url:"#"}))
                 
            //return of(true);
        }))
    });


   navigateUsr$ = createEffect(()=>{
    return this.action.pipe(ofType(navigateUsr), tap((data:any)=>{
        //setTimeout(()=>{ 
        this.rout.navigateByUrl(data.url);
    //},1000)
    }))
   }, { dispatch: false })

}

