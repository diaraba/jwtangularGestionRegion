import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiondetailsComponent } from './regiondetails.component';

describe('RegiondetailsComponent', () => {
  let component: RegiondetailsComponent;
  let fixture: ComponentFixture<RegiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegiondetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
