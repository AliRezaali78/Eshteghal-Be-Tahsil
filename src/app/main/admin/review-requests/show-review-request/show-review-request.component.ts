import { fadeIn } from './../../../../common/animations/fade.animation';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { RejectRequestDialogBoxComponent } from '../request-dialog-boxs/reject-dialog/reject-request-dialog-box.component';
import { AcceptRequestDialogBoxComponent } from '../request-dialog-boxs/accept-dialog/accept-request-dialog-box.component';

@Component({
  selector: 'show-review-request',
  templateUrl: './show-review-request.component.html',
  styleUrls: ['./show-review-request.component.scss'],
  animations: [fadeIn]
})
export class ShowReviewRequestComponent implements OnInit {

  request = {
    option: 'مرکز', to: 'تست', status: 1,
    description: `تست تست تست
     تست تست
  `
  }

  constructor(private titleService: Title, private dialog: MatDialog) {
    titleService.setTitle('نمایش درخواست');
  }

  ngOnInit() {
  }

  reject() {
    let dialog = this.dialog.open(RejectRequestDialogBoxComponent,
      { data: { description: '' } }).afterClosed().subscribe(response => {
        dialog.unsubscribe();
        console.log(response);
      });
  }

  accept() {
    let dialog = this.dialog.open(AcceptRequestDialogBoxComponent).afterClosed()
      .subscribe(response => {
        dialog.unsubscribe();
        console.log(response);
      });
  }

}
