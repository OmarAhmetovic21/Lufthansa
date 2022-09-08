import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCodesComponent } from './city-codes.component';

describe('CityCodesComponent', () => {
  let component: CityCodesComponent;
  let fixture: ComponentFixture<CityCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
