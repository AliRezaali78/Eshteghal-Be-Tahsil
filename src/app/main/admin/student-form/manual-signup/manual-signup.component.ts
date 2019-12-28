import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NationalCodeValidators } from 'src/app/common/validators/national-code.validators';
import { NumberValidators } from 'src/app/common/validators/number.validators';
import { MajorsService } from 'src/app/services/majors.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'manual-signup',
  templateUrl: './manual-signup.component.html',
  styleUrls: ['./manual-signup.component.scss'],
  providers: [NationalCodeValidators]

})
export class ManualSignupComponent implements OnInit {
  form: FormGroup;
  majors = [];
  loading = false;
  invalidRegister = false;
  constructor(
    private fb: FormBuilder,
    private nationalCodeValidators: NationalCodeValidators,
    private majorsService: MajorsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = this.createForm();
    this.majors.push(...this.majorsService.getMajors());
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      let user = new User({
        startDate: '96-97',
        startDateOption: 'نیمسال دوم تحصیلی',
        father: 'احمد',
        name: 'علی',
        lastname: 'رضاعلی',
        level: 'کاردانی',
        major: 'الکترونیک',
        nationalCode: '0000000000',
        studentCode: '11111111111111',
        type: 'شبانه',
        isActive: true
      });

      this.form.patchValue(user);
    }
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
      isActive: ['']
    });
  }

  register() {
    console.log(this.form.value);
    this.loading = true;
  }
}
