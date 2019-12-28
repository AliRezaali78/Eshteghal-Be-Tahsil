import { FormControl } from '@angular/forms';
import { Subscription, merge } from 'rxjs';
import { fadeIn } from './../../../common/animations/fade.animation';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user.model';
import { startWith, switchMap, map, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { DeleteDialogBoxComponent } from './delete-dialog-box/delete-dialog-box.component';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  animations: [fadeIn]

})
export class StudentsComponent implements OnInit, OnDestroy {
  isLoading = false;
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

  searchControl = new FormControl();
  searchOption: string = "nameAndLastname";

  sortSub: Subscription;
  searchSub: Subscription;
  mergeSub: Subscription;
  dialogSub: Subscription;

  constructor(private titleService: Title, private dialog: MatDialog) {
    titleService.setTitle('دانشجویان')
  }

  ngOnInit() {
    this.dataSource.data = this.students;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.sortSub = this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.searchSub = this.search();
    this.mergeSub = this.sortAndPaging()

  }



  private search(): Subscription {
    return this.searchControl.valueChanges.pipe(
      tap(() => { this.isLoading = true; this.paginator.pageIndex = 0 }),
      distinctUntilChanged(),
      debounceTime(500),
      map((value: string) => {
        return { value: value.toLocaleLowerCase(), by: this.searchOption }
      })
    ).subscribe(data => {
      this.isLoading = false;
      console.log(data)
    });
  }

  private sortAndPaging(): Subscription {
    return merge(this.sort.sortChange, this.paginator.page).pipe(tap(() => this.isLoading = true)).subscribe(data => {
      this.isLoading = false;
      console.log(data);
    });
  }

  openDeleteDialog(studentCode) {
    const dialogRef = this.dialog.open(DeleteDialogBoxComponent);
    this.dialogSub = dialogRef.afterClosed().subscribe(response => {
      this.dialogSub.unsubscribe();
      if (response == "yes")
        console.log('yes', studentCode);
    });
  }


  ngOnDestroy() {
    this.sortSub.unsubscribe();
    this.searchSub.unsubscribe();
    this.mergeSub.unsubscribe();

  }

}
