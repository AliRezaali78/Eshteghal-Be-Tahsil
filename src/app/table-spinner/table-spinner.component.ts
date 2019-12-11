import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-spinner',
  templateUrl: './table-spinner.component.html',
  styleUrls: ['./table-spinner.component.scss']
})
export class TableSpinnerComponent implements OnInit {
  @Input('isLoading') isLoading;
  constructor() { }

  ngOnInit() {
  }

}
