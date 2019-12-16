import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  showBackImage = false;
  sub: Subscription;

  constructor(private router: Router, private titleService: Title) {
    titleService.setTitle('اشتغال به تحصیل - پنل کاربری')
  }

  ngOnInit() {
    this.showBackImage = this.router.isActive('/main', true);
    this.sub = this.router.events.subscribe(() => {
      this.showBackImage = this.router.isActive('/main', true);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
