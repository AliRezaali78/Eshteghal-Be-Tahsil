import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'automasion-login',
  templateUrl: './automasion-login.component.html',
  styleUrls: ['./automasion-login.component.css']
})
export class AutomasionLoginComponent implements OnInit {

  loading = false;
  constructor() { }

  ngOnInit() {
  }

  login(form) {
    this.loading = true;
  }
}
