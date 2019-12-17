import { NavigationBarService } from './../../../../services/navigation-bar.service';
import { ExcelService } from './../../../../services/excel.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FileChangedEventArgs } from 'src/app/input-file/input-file.component';

@Component({
  selector: 'excel-signup',
  templateUrl: './excel-signup.component.html',
  styleUrls: ['./excel-signup.component.scss']
})
export class ExcelSignupComponent {

  @ViewChild('excelFile', { static: false }) excelFile: ElementRef;
  @ViewChild('userTable', { static: false }) userTable;

  users: User[] = [];
  uploadValue = 0; // percentage
  form: FormGroup;
  validFile = false;
  file: File;
  uploading: boolean;
  regexPattern = "(.*?)\.(sheet)$";

  constructor(fb: FormBuilder, private excelService: ExcelService, private serviceBar: NavigationBarService) {
    this.form = fb.group({ inputFile: [''] });
  }

  get inputFile(): FormControl {
    return this.form.get('inputFile') as FormControl;
  }

  show() {
    const reader = new FileReader();
    reader.onload = (event) => {
      this.serviceBar.start();
      const data = reader.result;
      let jsonData = this.excelService.exportAsJsonData(data);
      this.mapPersianDatasToUserDatas(jsonData, this.users);
      this.userTable.setUsers(this.users);
      this.serviceBar.end();
    };

    reader.readAsBinaryString(this.file);
  }

  mapPersianDatasToUserDatas(jsonData: any, users: User[]) {
    for (const data of jsonData.data) {
      let user: User = new User();
      user.persianDataMapToUser(data);
      users.push(user);
    }
  }

  onExcelChanged($event: FileChangedEventArgs) {
    this.file = $event.file;
    this.validFile = $event.valid;
  }

}


