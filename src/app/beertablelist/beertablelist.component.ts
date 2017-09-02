import { Subscription } from 'rxjs/Rx';
import { debug } from 'util';
import { debounce } from 'rxjs/operator/debounce';

import { FilterCriteria } from './../beer/Models/Models';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, transition } from '@angular/core';
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
    isDesc: boolean = false;
    column: string = 'name';
    direction: number;
    data: Datum[];
    search: FilterCriteria;
    isVisible = false;
    public constructor(private router: Router, private service: BeerService) {

    }

    ngOnInit() {
        this.search = new FilterCriteria();
        this.searchBeer();
        //this.service.getBeers(this.search).subscribe(x => { this.data = x.data; });
    }
    searchBeer() {

        this.service.getBeersByFilter(this.search).
            subscribe(x => {
                this.data = x.data;
                this.isVisible = true;
                console.log(this.data);
            })
            ;

    }
    onSort(colName: string) {
        this.isDesc = !this.isDesc; //change the direction    
        this.column = colName;
        this.direction = this.isDesc ? 1 : -1;
        this.search.sortColumn = this.column;
        this.search.sortDirection = this.direction === 1 ? 'Asc' : 'Desc';
        this.onSearch(this.search.colName, this.search.value);
        console.log(JSON.stringify(this.search));
    }
    // onSearch(ids: string, name: string) {

    //     if (name.length > 0) {
    //         this.search.colName = name;
    //         this.searchBeer();
    //     }
    //     else if (ids.length > 0) {
    //         // this.search.ids = ids;
    //         this.searchBeer();
    //     }
    //     else {
    //         this.searchBeer();
    //     }

    // }
    navigateToDetail(currentRow: Datum) {

        this.router.navigate(['/beers', currentRow.id]);
    }
    onSearch(colName: string = '', value: string) {
        this.isVisible = false;
        this.search.colName = colName;
        if (value != null && value.length > 0) {
            this.search.value = value.trim();
        }
        if (colName === 'name') {

            this.service.getBeersByName(this.search).subscribe(x => {
            this.data = x.data;
                this.isVisible = true;
                console.log(this.data);
            });
        }

        else {

            this.searchBeer();
        }
    }

}
