import { BeerService } from 'app/beer/beer-service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeertablelistComponent } from './beertablelist.component';
import { ReactiveFormsModule } from "@angular/forms";

describe('BeertablelistComponent', () => {
  let component: BeertablelistComponent;
  let fixture: ComponentFixture<BeertablelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeertablelistComponent ],
      imports: [CommonModule,HttpModule,RouterTestingModule,ReactiveFormsModule],
      providers: [ {provide: BeerService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeertablelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
