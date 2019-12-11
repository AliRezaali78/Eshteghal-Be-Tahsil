import { fadeIn } from './../../../common/animations/fade.animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'show-request',
  templateUrl: './show-request.component.html',
  styleUrls: ['./show-request.component.scss'],
  animations: [fadeIn]
})
export class ShowRequestComponent implements OnInit {
  request = {
    option: 'مرکز',
    to: 'به مرکز تست',
    description: `با سلام و خسته نباشید 
   من یک گواهی اشتغال می خواستم`,
    status: 3,
    adminDescription: 'به علت مناسب نبودن توضیحات'
  };
  constructor() { }

  ngOnInit() {
  }

}
