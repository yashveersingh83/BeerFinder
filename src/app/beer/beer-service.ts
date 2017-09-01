import { Datum } from './Models/Models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BeerResult, FilterCriteria } from 'app/beer/Models/Models';

@Injectable()
export class BeerService {
    private API_PATH = 'http://api.brewerydb.com/v2/';
    private API_KEY = '3b567de01b846b38b2fffeba0b18e908';
    headers = new Headers({ 'Content-Type': 'application/json' });
    //options = new RequestOptions({ headers: this.headers });
    constructor(private http: Http) { }

    public getBeers(criteria: FilterCriteria): Observable<BeerResult> {
        let request = this.API_PATH + 'beers/';
        request = request + '?key=' + this.API_KEY;
        if (criteria.name.length > 0) {
            request = request + '&&name=' + criteria.name;
        }
        if (criteria.ids.length > 0) {
            request = request + '&&ids=' + criteria.ids;
        }
        request = request + '&&order=' + criteria.sortColumn;
        request = request + '&&sort=' + criteria.sortDirection;


        console.log(' Current Request  ' + request);
        return this.http.get(request)
            .map(res => res.json() || [])
            .catch(this.handleError);
    }
    public getBeersByName(criteria: FilterCriteria): Observable<BeerResult> {
        let request = this.API_PATH + 'search/';
        request = request + '?key=' + this.API_KEY;
        if (criteria.name.length > 0) {
            request = request + '&&q=' + criteria.name;
        }
        request = request + '&&type=beer';
        console.log(' Search api  Request  ' + request);
        return this.http.get(request)
            .map(res => res.json() || [])
            .catch(this.handleError);
    }
    public getBeerById(ids: string = ''): Observable<Datum> {
       
        let request = this.API_PATH + 'beer/';

        if (ids.length > 0) {
            request = request + ids;
        }
        request = request + '?key=' + this.API_KEY;
        console.log(' Current Request  ' + request);
        return this.http.get(request)
            .map(res => res.json().data || [])
            .catch(this.handleError);
    }


    public validateApiKey(): Observable<Response> {
        return this.http.get(this.API_PATH + '?key=' + this.API_KEY)
            .catch(this.handleError);
    }
    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
