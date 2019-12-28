import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../share/animations/fade.animation';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  animations: [
    fadeIn
  ]
})
export class NotFoundComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('چیزی یافت نشد 404')
  }

  ngOnInit() {
  }

}
