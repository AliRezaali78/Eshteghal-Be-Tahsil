import { fadeIn } from '../../common/animations/fade.animation';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { SidenavService } from '../../services/sidenav/sidenav.service';
import { MatTabGroup } from '@angular/material';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [fadeIn]
})
export class ProfileComponent implements OnInit, OnDestroy {
  @ViewChild('tabs') tabs: MatTabGroup;
  subs: Subscription;
  constructor(private auth: AuthService, private sidenav: SidenavService) {
  }

  ngOnInit() {
    this.subs = this.sidenav.switch.pipe(delay(500)).subscribe(() => {
      this.tabs.realignInkBar();
    })
  }

  get user() {
    return this.auth.currentUser;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}