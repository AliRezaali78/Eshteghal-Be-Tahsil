import { Component, OnInit, Output, Input } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material";
import { JalaliMomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from "./jalali-moment-date-adapter/jalali-moment-date-adapter";
import { JALALI_MOMENT_FORMATS, MOMENT_FORMATS } from "./jalali-moment-date-adapter/jalali_moment_formats";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mat-persian-datepicker',
  templateUrl: './persian-datepicker.component.html',
  providers: [
    {
      provide: DateAdapter,
      useClass: JalaliMomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_LOCALE, useValue: "fa" }, // en-GB  fr
    {
      provide: MAT_DATE_FORMATS,
      deps: [MAT_DATE_LOCALE],
      useValue: JALALI_MOMENT_FORMATS
    },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ]
})
export class PersianDatepickerComponent implements OnInit {
  @Input('name') name = "mat-persian-date";
  @Input('label') label = "Persian Date";
  @Input('error') error = "فیلد تاریخ الزامی می باشد";
  @Input('hint') hint = "";
  @Input('control') dateControl: FormControl = new FormControl();
  constructor() {
  }

  ngOnInit() {

  }
  onKeydown($event, datePicker) {
    let key = $event.key.toLowerCase();
    if (key !== "tab") {
      datePicker.open();
    }
  }

  setValue(value) {
    this.dateControl.value._d.shamsi = value;
    // this.dateControl.value.toJSON = () => {
    //   return this.dateControl.value._d.shamsi;
    // }
  }
}
