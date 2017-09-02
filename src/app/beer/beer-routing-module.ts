
import {NgModule}     from '@angular/core';
import { RouterModule } from '@angular/router';
import { BeerListComponent } from "app/beer/beer-list/beer-list.component";
import { BeerDetailComponent } from "app/beer/beer-detail/beer-detail.component";
import { BeerComponent } from "app/beer/beer-list/beer-component";
import { BeertablelistComponent } from "app/beertablelist/beertablelist.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: BeerComponent,
                children: [       
                {path:'' ,  component: BeertablelistComponent  }         ,
                {path:'list' ,  component: BeerListComponent  }         ,
                 {path: ':id' ,  component: BeerDetailComponent  }

                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class BeerRoutingModule {
}