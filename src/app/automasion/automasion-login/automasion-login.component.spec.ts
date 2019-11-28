import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomasionLoginComponent } from './automasion-login.component';

describe('AutomasionLoginComponent', () => {
  let component: AutomasionLoginComponent;
  let fixture: ComponentFixture<AutomasionLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomasionLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomasionLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
