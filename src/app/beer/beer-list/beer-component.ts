import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-beer-c',
  template: `<router-outlet></router-outlet>`,
  
})
export class BeerComponent implements OnInit {

  constructor(private router:Router) {
    }

  ngOnInit() {
  }

}
