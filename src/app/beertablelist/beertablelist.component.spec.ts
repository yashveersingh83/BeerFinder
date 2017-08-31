import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeertablelistComponent } from './beertablelist.component';

describe('BeertablelistComponent', () => {
  let component: BeertablelistComponent;
  let fixture: ComponentFixture<BeertablelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeertablelistComponent ]
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
