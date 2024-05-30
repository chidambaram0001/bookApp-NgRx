import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { sharedReducer } from './sharedState/store/reducers/shared.reducer';
import { authGurd } from './auth.gurd';
import { routeSerializer } from './route.serilizer';

const pathModule:Routes = [{
  path:'',
  loadChildren:()=>import('./auth/auth.module').then(auth=>auth.authModule)
},
{
  path:'books',
  loadChildren:()=>import('./books/books.module').then(book=>book.booksModule),
  canLoad: [authGurd]
}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot(),
    StoreModule.forRoot({'sharedData':sharedReducer} ),
    RouterModule.forRoot(pathModule),
    StoreDevtoolsModule.instrument({logOnly: !isDevMode()}),
    StoreRouterConnectingModule.forRoot({serializer:routeSerializer})
  ],
  providers: [authGurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
