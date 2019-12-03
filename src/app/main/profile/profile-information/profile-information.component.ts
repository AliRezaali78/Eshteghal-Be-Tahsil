import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.scss']
})
export class ProfileInformationComponent {
  @Input('user') user;
  constructor() { }

  get image() {
    return "../../assets/images/profile-placeholder.png";
  }

}
