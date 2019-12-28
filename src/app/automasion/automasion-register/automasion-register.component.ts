import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NationalCodeValidators } from 'src/app/share/validators/national-code.validators';
import { NumberValidators } from 'src/app/share/validators/number.validators';

import { fadeInOutCustom } from '../../share/animations/fade.animation';
import { MajorsService } from 'src/app/share/services/majors.service';

@Component({
  selector: 'automasion-register',
  templateUrl: './automasion-register.component.html',
  styleUrls: ['./automasion-register.component.css'],
  animations: [
    fadeInOutCustom
  ],
  providers: [NationalCodeValidators]
})
export class AutomasionRegisterComponent implements OnInit {
  form: FormGroup;
  sk = "6LduRcQUAAAAAJW6-ot5RJBEt-5IfsSevCFxfbev";
  loading = false;
  success = false;
  invalidRegister = false;
  majors = [];
  constructor(
    private fb: FormBuilder,
    private nationalCodeValidators: NationalCodeValidators,
    private majorService: MajorsService) {
  }

  ngOnInit() {
    this.majors.push(...this.majorService.getMajors());
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
      startDate: ['', [Validators.required, NumberValidators.shouldBeStartDate]],
      startDateOption: ['', Validators.required],
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
