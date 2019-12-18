import { Component, OnInit, Input } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input("sidenavRef") sidenav;
  @Input("user") currentUser;

  constructor(private sideNavService: SidenavService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.sidenav.toggle();
    this.sideNavService.switch.next();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
