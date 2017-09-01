import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BeerService } from 'app/beer/beer-service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDetailComponent } from './beer-detail.component';

describe('BeerDetailComponent', () => {
  let component: BeerDetailComponent;
  let fixture: ComponentFixture<BeerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDetailComponent ] ,
      imports: [CommonModule,
        HttpModule,
        RouterTestingModule,
        ReactiveFormsModule],
      providers: [ {provide: BeerService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
