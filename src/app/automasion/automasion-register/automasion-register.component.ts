import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'automasion-register',
  templateUrl: './automasion-register.component.html',
  styleUrls: ['./automasion-register.component.css']
})
export class AutomasionRegisterComponent implements OnInit {
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      studentCode: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14), CustomValidators.number]],
      nationalCode: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), CustomValidators.number]]
    });
  }

  ngOnInit() {
  }

}
