import { fadeIn } from './../common/animations/fade.animation';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [fadeIn]
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  get image() {
    return "../../assets/images/profile-placeholder.png";
  }
  get user() {
    return this.auth.currentUser;
  }
}
