import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelSignupComponent } from './excel-signup.component';

describe('ExcelSignupComponent', () => {
  let component: ExcelSignupComponent;
  let fixture: ComponentFixture<ExcelSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
