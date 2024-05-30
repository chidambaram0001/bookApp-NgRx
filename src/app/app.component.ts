import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { getloggedInData } from './sharedState/store/selector/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'Books-Maintaince-App';
  public disableLoginNav:boolean = false;
  constructor(private st:Store<any>){

  }
  ngOnInit(){
    this.st.select(getloggedInData).subscribe((t)=>{
      if(t){
        this.disableLoginNav = true;
      }
    
    });
  }

}
