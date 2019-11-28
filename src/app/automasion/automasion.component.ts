import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'automasion',
  templateUrl: './automasion.component.html',
  styleUrls: ['./automasion.component.css']
})
export class AutomasionComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('اتوماسیون')
  }

}
