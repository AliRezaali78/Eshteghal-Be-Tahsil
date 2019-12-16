import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'signup-requests',
  templateUrl: './signup-requests.component.html',
  styleUrls: ['./signup-requests.component.scss']
})
export class SignupRequestsComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('برسی درخواست های ثبت نام')
  }

  ngOnInit() {
  }

}
