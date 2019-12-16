import { Component, OnInit, ViewChild } from '@angular/core';

import { fadeIn } from './../../../common/animations/fade.animation';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
  animations: [fadeIn]
})
export class RequestsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'option', 'to', 'status', 'actions'];
  requests = [
    { id: 1, option: 'مرکز', to: 'مرکز تست', status: '1' },
    { id: 2, option: 'مرکز', to: 'مرکز تست', status: '2' },
    { id: 3, option: 'سازمان', to: 'سازمان تست', status: '3' },
    { id: 4, option: 'سازمان', to: 'سازمان تست', status: '3' },
    { id: 5, option: 'سازمان', to: 'سازمان تست', status: '3' },
    { id: 6, option: 'سازمان', to: 'سازمان تست', status: '3' },
    { id: 7, option: 'سازمان', to: 'سازمان تست', status: '3' },
    { id: 8, option: 'سازمان', to: 'سازمان تست', status: '3' },
  ];
  constructor(private titleService: Title) {
    titleService.setTitle('درخواست های جاری')
  }


  ngOnInit() {
    this.dataSource.data = this.requests;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

}
