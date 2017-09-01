import { BusyModule } from 'angular2-busy';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BeerRoutingModule } from "app/beer/beer-routing-module";
import { BeerComponent } from "app/beer/beer-list/beer-component";
import { CommonModule } from "@angular/common";
//import { Ng2TableModule } from 'ng2-table/ng2-table';
import { BeerService } from "app/beer/beer-service";
import { PaginationModule } from 'ngx-bootstrap';
import { Ng2TableModule } from 'ng2-expanding-table';
import { RowContentComponent } from "app/beer/beer-list/rowcontent-component";
import { BeertablelistComponent } from "app/beertablelist/beertablelist.component";

@NgModule({
  declarations: [
     BeerComponent,
    BeerListComponent,BeertablelistComponent,
    BeerDetailComponent,RowContentComponent
   
  ],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    HttpModule ,BeerRoutingModule ,Ng2TableModule
    //,Ng2TableModule 
    ,PaginationModule.forRoot() 
  ],
  providers: [BeerService],
  entryComponents: [RowContentComponent]
 
})
export class BeerModule { }
