import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatProgressBar } from '@angular/material';
import { FileChangedEventArgs } from 'src/app/share/components/input-file/input-file.component';

@Component({
  selector: 'change-profile-img',
  templateUrl: './change-profile-img.component.html',
  styleUrls: ['./change-profile-img.component.scss']
})
export class ChangeProfileImgComponent {
  @ViewChild('imageFile', { static: true }) imageFile: ElementRef;
  uploadValue = 0;
  form: FormGroup;
  validFile = false;
  file: File;
  uploading: boolean;
  regexPattern = "(.*?)\.(jpg|png|jpeg)$";

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      inputFile: ['']
    })
  }

  get inputFile(): FormControl {
    return this.form.get('inputFile') as FormControl;
  }

  onImageChanged($event: FileChangedEventArgs) {
    this.file = $event.file;
    this.validFile = $event.valid;
  }

  uploadImage() {
    this.form.disable();
    this.uploading = true;
    setInterval(() => {
      if (this.uploading && this.uploadValue < 100)
        this.uploadValue += 2;
      else {
        this.uploadValue = 0;
        this.uploading = false;
        this.validFile = false;
        this.form.reset();
        this.form.enable();
      }
    }, 200)
    //when uploaded call profile service subject.next() to inform profile image to change
  }

}
