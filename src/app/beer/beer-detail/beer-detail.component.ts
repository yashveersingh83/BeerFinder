import { Subscription } from 'rxjs/Rx';
import { BeerService } from 'app/beer/beer-service';
import { Router ,ActivatedRoute } from '@angular/router';
import { Datum } from 'app/beer/Models/Models';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit ,OnDestroy {
  detail:Datum;
  private sub: Subscription;
  errorMessage:string;
  constructor(  private router:Router , private route: ActivatedRoute,  private service: BeerService ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(
      params => {
          let id = params['id'];

          this.service.getBeerById(id).subscribe(
              r => {
              this.detail = r;
              console.log(r);
              },
              error => this.errorMessage = <any>error);
      });
  }

  onBackClick()
  {
    this.router.navigate(['/beers']);
  }

  ngOnDestroy()
  {
      this.sub.unsubscribe();
  }

}
