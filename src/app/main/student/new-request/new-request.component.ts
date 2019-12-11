import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {
  option = "مرکز";
  sk = "6LduRcQUAAAAAJW6-ot5RJBEt-5IfsSevCFxfbev";

  constructor() { }

  ngOnInit() {
  }

  get optionPlaceholder() {
    return this.option === 'سازمان' ? 'سازمان' : 'مرکز'
  }

  sendRequest(form) {
    console.log(form.value);
  }

}
