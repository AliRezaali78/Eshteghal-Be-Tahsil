import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../common/animations/fade.animation';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  animations: [
    fadeIn
  ]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
