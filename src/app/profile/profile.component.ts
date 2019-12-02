import { fadeIn } from './../common/animations/fade.animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [fadeIn]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get image() {
    return "../../assets/images/profile-placeholder.png";
  }
}
