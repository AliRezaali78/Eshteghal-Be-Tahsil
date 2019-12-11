import { fadeIn } from './../../../common/animations/fade.animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
  animations: [fadeIn]
})
export class RequestsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'option', 'to', 'status', 'actions'];
  requests = [
    { id: 1, option: 'مرکز', to: 'مرکز تست', status: '1' },
    { id: 2, option: 'مرکز', to: 'مرکز تست', status: '2' },
    { id: 3, option: 'سازمان', to: 'سازمان تست', status: '3' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
