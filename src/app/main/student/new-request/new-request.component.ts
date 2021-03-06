import { fadeIn } from '../../../share/animations/fade.animation';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss'],
  animations: [fadeIn]
})
export class NewRequestComponent implements OnInit {
  option = "مرکز";
  sk = "6LduRcQUAAAAAJW6-ot5RJBEt-5IfsSevCFxfbev";
  constructor(private titleService: Title) {
    titleService.setTitle('درخواست جدید')
  }

  ngOnInit() {
  }

  get optionPlaceholder() {
    return this.option === 'سازمان' ? 'سازمان' : 'مرکز'
  }

  sendRequest(form) {
    console.log(form.value);
  }

}
