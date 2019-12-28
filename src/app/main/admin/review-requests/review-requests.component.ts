import { fadeIn } from '../../../share/animations/fade.animation';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { merge, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';

@Component({
  selector: 'review-requests',
  templateUrl: './review-requests.component.html',
  styleUrls: ['./review-requests.component.scss'],
  animations: [fadeIn]
})
export class ReviewRequestsComponent implements OnInit {
  isLoading = false;
  defaultImage = "assets/images/profile-placeholder.png";

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['nameAndLastname', 'studentCode', 'major', 'startDate', 'to', 'status', 'date', 'actions'];
  requests = [
    {
      id: 1,
      name: 'حسن',
      lastname: 'رضایی',
      studentCode: '999999999',
      major: 'نرم افزار - کامپیوتر',
      startDate: '97-98',
      startDateOption: 'نیمسال دوم تحصیلی',
      option: 'سازمان',
      to: 'تست',
      status: 1,
      date: Date.now()
    },
    {
      id: 2,
      name: 'حسن',
      lastname: 'رضایی',
      studentCode: '999999999',
      major: 'نرم افزار - کامپیوتر',
      startDate: '97-98',
      startDateOption: 'نیمسال دوم تحصیلی',
      option: 'سازمان',
      to: 'تست',
      status: 2,
      date: Date.now()
    },
    {
      id: 2,
      name: 'حسن',
      lastname: 'رضایی',
      studentCode: '999999999',
      major: 'نرم افزار - کامپیوتر',
      startDate: '97-98',
      startDateOption: 'نیمسال دوم تحصیلی',
      option: 'سازمان',
      to: 'تست',
      status: 3,
      date: Date.now()
    },
  ];

  searchControl = new FormControl();
  searchOption: string = "nameAndLastname";

  fromDateControl = new FormControl();
  tillDateControl = new FormControl();

  sortSub: Subscription;
  searchSub: Subscription;
  mergeSub: Subscription;
  dialogSub: Subscription;

  constructor(private titleService: Title) {
    titleService.setTitle('برسی درخواست ها')
  }

  ngOnInit() {
    this.dataSource.data = this.requests;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.sortSub = this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.searchSub = this.search();
    this.mergeSub = this.sortAndPaging()

  }

  public dateFilter() {
    console.log(JSON.stringify(this.fromDateControl.value), JSON.stringify(this.tillDateControl.value))
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

  ngOnDestroy() {
    this.sortSub.unsubscribe();
    this.searchSub.unsubscribe();
    this.mergeSub.unsubscribe();

  }

}
