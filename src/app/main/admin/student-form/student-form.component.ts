import { fadeIn } from '../../../share/animations/fade.animation';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';

@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
  animations: [fadeIn]
})
export class StudentFormComponent implements OnInit {
  @ViewChild('tabs', { static: true }) tabs: MatTabGroup;
  tabText = "ثبت"
  subs: Subscription;
  constructor(private sidenav: SidenavService, private titleService: Title, private route: ActivatedRoute) {
    titleService.setTitle('ثبت اطلاعات دانشجو');
  }

  ngOnInit() {
    this.subs = this.sidenav.switch.pipe(delay(500)).subscribe(() => {
      this.tabs.realignInkBar();
    })
    let id = this.route.snapshot.paramMap.get('id');
    if (id) this.tabText = 'ویرایش';
  }



}
