import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterregionComponent } from './ajouterregion.component';

describe('AjouterregionComponent', () => {
  let component: AjouterregionComponent;
  let fixture: ComponentFixture<AjouterregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterregionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
