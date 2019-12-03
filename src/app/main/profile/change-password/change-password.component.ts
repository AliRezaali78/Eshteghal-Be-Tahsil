import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      password: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['']
    }, { validators: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) {
    if (group.get("newPassword").value !== group.get("confirmPassword").value) {
      group.get('confirmPassword').setErrors({ notMatching: true });
      return { notMatching: true };
    }

    group.get('confirmPassword').setErrors(null);
    return null;
  }

  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

}
