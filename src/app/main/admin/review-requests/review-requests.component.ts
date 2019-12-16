import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'review-requests',
  templateUrl: './review-requests.component.html',
  styleUrls: ['./review-requests.component.scss']
})
export class ReviewRequestsComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('برسی درخواست ها')
  }

  ngOnInit() {
  }

}
