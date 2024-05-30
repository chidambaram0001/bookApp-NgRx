import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { getloggedInData } from "./sharedState/store/selector/shared.selector";
import { map, switchMap, take, tap } from "rxjs/operators";


@Injectable()

export class authGurd {
    public navigate:boolean = false;
    constructor(private store:Store, private r:Router){
        this.store.select(getloggedInData).subscribe(m=>{
            this.navigate = m
        })
    }
    canLoad(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
          if(this.navigate){
            return true;
          }
          this.r.navigateByUrl('#')
          //return true;
        
       
        //return true;

        //return this.store.select(getloggedInData)
    }
}
