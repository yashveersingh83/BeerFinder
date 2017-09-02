import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router'; 

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
 import { WelcomeComponent } from "app/welcome/welcome.component";


 
const appRoutes: Routes = [
 
   { path: '',   component:WelcomeComponent },
   { path: 'beers',   loadChildren:'app/beer/beer-module#BeerModule' },

];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
     // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}