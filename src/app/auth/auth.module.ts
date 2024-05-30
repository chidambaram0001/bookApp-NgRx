import { Component, NgModule, isDevMode } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { login } from "./login/login.component";
import {StoreModule} from '@ngrx/store'
import { userReducer } from "./store/reducers/auth.reducers";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { authEffect } from "./store/effects/authEffects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
const path:Routes = [{path:'',component:login}]

@NgModule({
    declarations:[login],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forFeature('user',userReducer), 
        EffectsModule.forFeature([authEffect]),
       
        RouterModule.forChild(path),
      

    ],
    exports:[],
    providers:[]
})

export class authModule{

}
