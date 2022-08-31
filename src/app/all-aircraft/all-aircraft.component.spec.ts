import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAircraftComponent } from './all-aircraft.component';

describe('AllAircraftComponent', () => {
  let component: AllAircraftComponent;
  let fixture: ComponentFixture<AllAircraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAircraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAircraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
