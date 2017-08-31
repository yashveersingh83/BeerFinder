import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BeerService } from "app/beer/beer-service";
import { Datum } from "app/beer/Models/Models";
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-beertablelist',
  templateUrl: './beertablelist.component.html',
  styleUrls: ['./beertablelist.component.css']
})
export class BeertablelistComponent implements OnInit {
  form:FormGroup;
 isDesc: boolean = false;
  column: string = 'id';
  direction: number;
 data:Datum[]; 
  public constructor(private router:Router , private service :BeerService ) {
    
  }

  ngOnInit() {
      this.form = new FormGroup({
            id: new FormControl(),
            name: new FormControl(),
           
        });

    this.service.getBeers().subscribe( x=> { this.data = x.data; } );
  }
onSort(colName:string )
{
    this.isDesc = !this.isDesc; //change the direction    
    this.column = colName;
    this.direction = this.isDesc ? 1 : -1;
    console.log(colName);
}
onSearch()
{
  
    console.log(' ' + JSON.stringify(this.form.value));
}

}
