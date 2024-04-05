import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedCarComponent } from './rented-car.component';

describe('RentedCarComponent', () => {
  let component: RentedCarComponent;
  let fixture: ComponentFixture<RentedCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentedCarComponent]
    });
    fixture = TestBed.createComponent(RentedCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
