import { debounce } from 'rxjs/operator/debounce';

import { FilterCriteria } from './../beer/Models/Models';
import { Observable } from 'rxjs/Observable';
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
    form: FormGroup;
    isDesc: boolean = false;
    column: string = 'id';
    direction: number;
    data: Datum[];
    search: FilterCriteria;
    public constructor(private router: Router, private service: BeerService) {

    }

    ngOnInit() {
        this.search = new FilterCriteria();
        this.searchBeer();
        //this.service.getBeers(this.search).subscribe(x => { this.data = x.data; });
    }
    searchBeer() {
        this.service.getBeers(this.search).subscribe(x => { this.data = x.data; console.log(this.data); });
    }
    onSort(colName: string) {
        this.isDesc = !this.isDesc; //change the direction    
        this.column = colName;
        this.direction = this.isDesc ? 1 : -1;
        this.search.sortColumn = this.column;
        this.search.sortDirection = this.direction === 1 ? 'Asc' : 'Desc';
        this.searchBeer();
        console.log(JSON.stringify(this.search));
    }
    onSearch(ids: string, name: string) {

        if (name.length > 0) {
            this.search.name = name;
            this.searchBeer();
        }
        else if (ids.length > 0) {
            this.search.ids = ids;
            this.searchBeer();
        }
        else {
            this.searchBeer();
        }

    }
    navigateToDetail(id: string) {
        console.log(id);
    }
    searchBeerByName(value: string) {
        if (value != null && value.length > 4) {
            debugger;
            this.service.getBeersByName(this.search).subscribe(x => { this.data = x.data; console.log(this.data); });
        }
    }

}
