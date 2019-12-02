import { Component, Input, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit, OnDestroy {
  sub: Subscription;
  @ViewChild('sidenav') sidenav: MatSidenav;
  sidenavState: boolean = true;
  rippleColor = "#04709e61";
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private sideNavService: SidenavService,
    private router: Router) {

  }

  ngOnInit() {
    this.sub = this.sidenav.openedChange.subscribe((data) => this.sidenavState = data);
  }

  get currentUser() {
    return this.authService.currentUser;
  }

  toggleSideNav() {
    this.sidenav.toggle();
    this.sideNavService.switch.next();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
