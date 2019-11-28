import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomasionRegisterComponent } from './automasion-register.component';

describe('AutomasionRegisterComponent', () => {
  let component: AutomasionRegisterComponent;
  let fixture: ComponentFixture<AutomasionRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomasionRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomasionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
