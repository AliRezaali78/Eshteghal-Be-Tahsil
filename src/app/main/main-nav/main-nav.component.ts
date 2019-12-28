import { USER_LINKS, ADMIN_LINKS } from './sidebar.links';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/share/services/auth/auth.service';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  sub: Subscription;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  rippleColor = "#04709e61";
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  userLinks = USER_LINKS;
  adminLinks = ADMIN_LINKS;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService) {
  }

  get currentUser() {
    return this.authService.currentUser;
  }

}