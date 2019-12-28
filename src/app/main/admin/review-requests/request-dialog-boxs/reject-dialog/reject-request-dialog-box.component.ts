import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'reject-request-dialog-box',
  templateUrl: './reject-request-dialog-box.component.html',
})
export class RejectRequestDialogBoxComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}
