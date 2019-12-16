import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';
import { MatTabGroup } from '@angular/material/tabs';
import { delay } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {
  @ViewChild('tabs', { static: true }) tabs: MatTabGroup;
  subs: Subscription;
  constructor(private sidenav: SidenavService, private titleService: Title) {
    titleService.setTitle('ثبت اطلاعات دانشجو')
  }

  ngOnInit() {
    this.subs = this.sidenav.switch.pipe(delay(500)).subscribe(() => {
      this.tabs.realignInkBar();
    })
  }

}
