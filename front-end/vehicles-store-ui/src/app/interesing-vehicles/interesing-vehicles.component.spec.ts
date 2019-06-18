import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresingVehiclesComponent } from './interesing-vehicles.component';

describe('InteresingVehiclesComponent', () => {
  let component: InteresingVehiclesComponent;
  let fixture: ComponentFixture<InteresingVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteresingVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteresingVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
