import * as console from 'console';
import { BeerService } from 'app/beer/beer-service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeertablelistComponent } from './beertablelist.component';
import { ReactiveFormsModule ,FormsModule} from "@angular/forms";

describe('BeertablelistComponent', () => {
  let component: BeertablelistComponent;
  let fixture: ComponentFixture<BeertablelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeertablelistComponent ],
      imports: [CommonModule,HttpModule,RouterTestingModule,FormsModule,ReactiveFormsModule],
      providers: [BeerService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeertablelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create BeertablelistComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have search panel with heading Search Beers', () => {
    const result = fixture.nativeElement.querySelector('#searchPanel');
    expect(result.innerHTML).toEqual('Search Beers');
  });

  it('should have  panel with heading Beer Lists', () => {
    const result = fixture.nativeElement.querySelector('#listPanel');
    expect(result.innerHTML).toEqual('Beer Lists');
  });

  it('should have table with 8 columns ', () => {
    const result = fixture.nativeElement.querySelector('#tblList thead tr');
    if(result!=null )
      {
        expect(fixture.nativeElement.querySelector('#tblList thead tr').children.length).toEqual(8);
      }
  });
  it('should have search button ', () => {
    const result = fixture.nativeElement.querySelector('#btnSearch');
    if(result!=null )
      {
        expect(result.innerHTML).toEqual('Search');
      }
  });

});
