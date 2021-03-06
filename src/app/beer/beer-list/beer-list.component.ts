import { FilterCriteria } from './../Models/Models';


import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BeerService } from "app/beer/beer-service";
import { Datum } from "app/beer/Models/Models";
import { Observable } from "rxjs/Observable";
import { RowContentComponent } from "app/beer/beer-list/rowcontent-component";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  public rows:Array<any> = [];
  public columns:Array<any> = [
    {title: 'Id', name: 'id', filtering: {filterString: '', placeholder: 'Filter by id'}},
    {title: 'Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},   
     {title: 'ABV', name: 'abv', sort: ''},
     {title: 'IBU', name: 'ibu', sort: ''},
  ];
  public page:number = 1;
  public itemsPerPage:number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;
  public rowsToRender:number = 35;
  public rowInputs = {
                      things : 'This is an Input',
                      otherThings : 'So is this!'
                    }
  public rowComponent = RowContentComponent;
  search:FilterCriteria;
  errorMessage : string;
  public config: any = {
     paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered'],
     height: '50vh',
    renderMoreAt : 0.85,
    infiniteScroll : true
  };

  private data: Datum[] = [];

  public constructor(private router:Router , private service :BeerService ) {
   
  }

  public ngOnInit():void {
    this.search = new FilterCriteria();
    this.onChangeTable(this.config);
  }

  public changePage(page:any, data:Array<any> = this.data):Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data:any, config:any):any {
    let filteredData:Array<any> = data;
    this.columns.forEach((column:any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item:any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item:any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray:Array<any> = [];
    filteredData.forEach((item:any) => {
      let flag = false;
      this.columns.forEach((column:any) => {
        if (item[column.name].match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

 

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {

    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

       this.service.getBeers(  this.search  )
         .subscribe(beers => {
            this.data = beers.data;
            console.log(this.data );
           let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);

    if(sortedData.length > this.rowsToRender && config.infiniteScroll){
      this.rows = sortedData.slice(0, this.rowsToRender);
      this.length = this.rows.length;
    }else{
      this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
      this.length = sortedData.length;
    }
        },error => this.errorMessage = <any>error)
    // if (config.filtering) {
    //   Object.assign(this.config.filtering, config.filtering);
    // }

    // if (config.sorting) {
    //   Object.assign(this.config.sorting, config.sorting);
    // }

    // let filteredData = this.changeFilter(this.data, this.config);
    // let sortedData = this.changeSort(filteredData, this.config);
    // this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    // this.length = sortedData.length;
  }

  public onScrollDown(){
    this.rowsToRender += 25;
    this.onChangeTable(this.config);
  }

  public expanderClicked(row: any){
    this.rowInputs.things = row;
      console.log(row);
  }

  editRow(changeData:any){
    console.log(changeData);
    // here you would maybe make some http request or do validation
    for(let change of changeData){
      if(change.newValue !== ""){
        this.rows[change.rowIndex][change.columnChanged] = change.newValue;
      }
    }
  }

  public onCellClick(data: any): any {
    console.log(data);
  }

  

 

  onClick() {

    this.router.navigate(['/beers', 1]);
  }
 }






