import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NationalCodeValidators } from 'src/app/common/validators/national-code.validators';
import { NumberValidators } from 'src/app/common/validators/number.validators';

@Component({
  selector: 'manual-signup',
  templateUrl: './manual-signup.component.html',
  styleUrls: ['./manual-signup.component.scss'],
  providers: [NationalCodeValidators]

})
export class ManualSignupComponent implements OnInit {
  form;
  majors = [
    { id: 1, value: "کامپیوتر - نرم افزار کامپیوتر" },
    { id: 2, value: "الکترونیک" },
    { id: 3, value: "برق" },
  ]
  constructor(private fb: FormBuilder, private nationalCodeValidators: NationalCodeValidators) { }

  ngOnInit() {
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
    });
  }
}
