import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BeerResult } from "app/beer/Models/Models";

@Injectable()
export class BeerService {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: Http) {}

  getBeers(name :string ='', sort:string=''): Observable<BeerResult> {
  
     var  request =this.API_PATH ;
      if (  name.length>0 )
      {
          request =request+ 'name='+ name;
      }
          return this.http.get(`${this.API_PATH}`)
      .catch(() => {        
          return this.http.get('/assets/beer-static.json');
       
      })
      .map(res => res.json() || []);
  }
}
