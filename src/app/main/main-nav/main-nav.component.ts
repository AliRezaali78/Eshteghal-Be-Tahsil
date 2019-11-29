import { Component, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  sidenavState: boolean = true;
  rippleColor = "#04709e61";
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router) {
  }

  get currentUser() {
    return this.authService.currentUser;
  }

  toggleSideNav() {
    this.sidenav.toggle();
    this.sidenavState = this.sidenav.opened;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
