import { ExcelService } from './../../../../services/excel.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'excel-signup',
  templateUrl: './excel-signup.component.html',
  styleUrls: ['./excel-signup.component.scss']
})
export class ExcelSignupComponent {
  users: User[] = [];
  @ViewChild('excelFile', { static: false }) imageFile: ElementRef;
  uploadValue = 0; // percentage
  form: FormGroup;
  validFile = false;
  file: File;
  uploading: boolean;

  constructor(fb: FormBuilder, private excelService: ExcelService) {
    this.form = fb.group({
      inputFile: ['']
    })
  }
  get inputFile(): FormControl {
    return this.form.get('inputFile') as FormControl;
  }

  show() {
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = reader.result;
      let jsonData = this.excelService.exportAsJsonData(data);
      this.mapPersianDatasToUserDatas(jsonData, this.users);
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

  onExcelChanged() {
    this.file = this.imageFile.nativeElement.files[0] as File;
    if (!this.file) return;
    this.inputFile.setValue(this.file.name);
    if (!this.isExcel(this.file)) return;
    this.validFile = true;
  }


  isExcel(file: File) {
    let regex = new RegExp("(.*?)\.(sheet)$");
    let valid = regex.test(file.type);
    if (!valid)
      this.inputFile.setErrors({ isNotExcel: true });
    return valid;
  }

}


