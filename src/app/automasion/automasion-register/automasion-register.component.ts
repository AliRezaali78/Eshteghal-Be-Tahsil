import { fadeInOut, fadeIn, fadeInOutCustom } from './../../common/animations/fade.animation';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Event } from '@angular/router';

@Component({
  selector: 'automasion-register',
  templateUrl: './automasion-register.component.html',
  styleUrls: ['./automasion-register.component.css'],
  animations: [
    fadeInOutCustom
  ]
})
export class AutomasionRegisterComponent implements OnInit {
  form: FormGroup;
  sk = "6LduRcQUAAAAAJW6-ot5RJBEt-5IfsSevCFxfbev";
  loading = false;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      father: ['', Validators.required],
      studentCode: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14), CustomValidators.number]],
      nationalCode: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), CustomValidators.number]],
      reCaptcha: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  get showCaptcha() {
    return (this.form.get('name').valid &&
      this.form.get('lastname').valid &&
      this.form.get('studentCode').valid &&
      this.form.get('father').valid &&
      this.form.get('nationalCode')).valid ? true : false;

  }


  resetCaptcha() {
    this.form.get('reCaptcha').reset();
  }

  register() {
    this.loading = true
    this.form.disable();
  }


}
