import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { NavigationBarService } from './services/navigation-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  sub: Subscription;
  constructor(private router: Router, private serviceBar: NavigationBarService) { }
  ngOnInit() {
    this.sub = this.navigationHandle();
  }

  get navigating() {
    return this.serviceBar.isLoading;
  }

  navigationHandle() {
    return this.router.events.pipe(filter(
      event =>
        event instanceof NavigationStart ||
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
    )
    ).subscribe(e => {
      if (e instanceof NavigationStart) {
        this.serviceBar.start();
        return;
      }
      this.serviceBar.end();
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
