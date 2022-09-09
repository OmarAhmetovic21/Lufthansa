import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLoungesComponent } from './all-lounges.component';

describe('AllLoungesComponent', () => {
  let component: AllLoungesComponent;
  let fixture: ComponentFixture<AllLoungesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLoungesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLoungesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
