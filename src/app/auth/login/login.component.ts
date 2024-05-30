import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { userDetails } from "../store/selector/auth.selector";
import { FormControl, FormGroup } from "@angular/forms";
import { validateUser } from "../store/action/auth.action";

@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.css']
    
})

export class login{
    public userDetails$;
    public loginForm:FormGroup;
    constructor(private st:Store<any>){

    }
    ngOnInit(){
        this.userDetails$ = this.st.select(userDetails);
        this.loginForm = new FormGroup({
            username:new FormControl(''),
            password: new FormControl('')
        });
    }

    submit(){
        console.log(this.loginForm.getRawValue())
        this.st.dispatch(validateUser(this.loginForm.getRawValue()))

    }
    
}
