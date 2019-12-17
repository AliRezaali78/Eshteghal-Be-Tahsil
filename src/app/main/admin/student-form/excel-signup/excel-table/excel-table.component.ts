import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'excel-table',
  templateUrl: './excel-table.component.html',
  styleUrls: ['./excel-table.component.scss']
})
export class ExcelTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'lastname', 'father', 'nationalCode', 'studentCode', 'major', 'startDate', 'level', 'type'];
  @Input('users') users;
  constructor() { }

  ngOnInit() {
    this.dataSource.data = this.users;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  setUsers(userData) {
    this.dataSource.data = userData;
  }

}
