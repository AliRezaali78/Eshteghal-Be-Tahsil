import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NationalCodeValidators } from 'src/app/common/validators/national-code.validators';
import { NumberValidators } from 'src/app/common/validators/number.validators';

import { fadeInOutCustom } from './../../common/animations/fade.animation';

@Component({
  selector: 'automasion-register',
  templateUrl: './automasion-register.component.html',
  styleUrls: ['./automasion-register.component.css'],
  animations: [
    fadeInOutCustom
  ],
  providers: [NationalCodeValidators]
})
export class AutomasionRegisterComponent {
  form: FormGroup;
  sk = "6LduRcQUAAAAAJW6-ot5RJBEt-5IfsSevCFxfbev";
  loading = false;
  success = false;
  invalidRegister = false;
  majors = [
    { id: 1, value: "کامپیوتر - نرم افزار کامپیوتر" },
    { id: 2, value: "الکترونیک" },
    { id: 3, value: "برق" },
  ]
  constructor(private fb: FormBuilder, private nationalCodeValidators: NationalCodeValidators) {
    this.form = this.createForm();
  }

  createForm() {
    return this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      father: ['', Validators.required],
      studentCode: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14),
      NumberValidators.shouldBeNumber]],
      nationalCode: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
      NumberValidators.shouldBeNumber, this.nationalCodeValidators.shouldBeNationalCode.bind(this.nationalCodeValidators)]],
      major: ['', Validators.required],
      level: ['', Validators.required],
      type: ['', Validators.required],
      reCaptcha: ['', Validators.required]
    });
  }

  get showCaptcha(): boolean {
    return (this.form.get('name').valid &&
      this.form.get('lastname').valid &&
      this.form.get('studentCode').valid &&
      this.form.get('father').valid &&
      this.form.get('nationalCode')).valid &&
      this.form.get('major').valid &&
      this.form.get('level').valid &&
      this.form.get('type').valid ? true : false;
  }


  resetCaptcha() {
    this.form.get('reCaptcha').reset();
  }

  register() {
    this.loading = true
    this.form.disable();
  }


}
