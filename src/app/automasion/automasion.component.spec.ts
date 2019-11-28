import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomasionComponent } from './automasion.component';

describe('AutomasionComponent', () => {
  let component: AutomasionComponent;
  let fixture: ComponentFixture<AutomasionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutomasionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
