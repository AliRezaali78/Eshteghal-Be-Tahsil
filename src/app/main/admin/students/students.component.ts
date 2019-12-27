import { fadeIn } from './../../../common/animations/fade.animation';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  animations: [fadeIn]

})
export class StudentsComponent implements OnInit {
  defaultImage = "assets/images/profile-placeholder.png";
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['imageUrl', 'nameAndLastname', 'father', 'nationalCode', 'studentCode', 'major', 'startDate', 'level', 'type', 'actions'];
  students = [
    {
      imageUrl: '',
      name: 'حسن',
      lastname: 'رضایی',
      father: 'احمد',
      nationalCode: '999999999',
      studentCode: '999999999',
      major: 'نرم افزار - کامپیوتر',
      startDate: '97-98',
      startDateOption: 'نیمسال دوم تحصیلی',
      level: 'کاردانی',
      type: 'شبانه',
    },
    {
      imageUrl: '',
      name: 'حسن',
      lastname: 'رضایی',
      father: 'احمد',
      nationalCode: '999999999',
      studentCode: '999999999',
      major: 'نرم افزار - کامپیوتر',
      startDate: '97-98',
      startDateOption: 'نیمسال دوم تحصیلی',
      level: 'کاردانی',
      type: 'شبانه',
    },
    {
      imageUrl: '',
      name: 'حسن',
      lastname: 'رضایی',
      father: 'احمد',
      nationalCode: '999999999',
      studentCode: '999999999',
      major: 'نرم افزار - کامپیوتر',
      startDate: '97-98',
      startDateOption: 'نیمسال دوم تحصیلی',
      level: 'کاردانی',
      type: 'شبانه',
    },
  ];
  constructor(private titleService: Title) {
    titleService.setTitle('دانشجویان')
  }

  ngOnInit() {
    this.dataSource.data = this.students;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
