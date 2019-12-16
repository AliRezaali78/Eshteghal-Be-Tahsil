import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualSignupComponent } from './manual-signup.component';

describe('ManualSignupComponent', () => {
  let component: ManualSignupComponent;
  let fixture: ComponentFixture<ManualSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
