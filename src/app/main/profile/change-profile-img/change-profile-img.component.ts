import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'change-profile-img',
  templateUrl: './change-profile-img.component.html',
  styleUrls: ['./change-profile-img.component.scss']
})
export class ChangeProfileImgComponent {
  @ViewChild('imageFile') imageFile: ElementRef;
  form: FormGroup;
  validFile = false;
  file: File;
  uploading: boolean;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      inputFile: ['']
    })
  }

  get inputFile(): FormControl {
    return this.form.get('inputFile') as FormControl;
  }

  onImageChanged() {
    this.file = this.imageFile.nativeElement.files[0] as File;
    if (!this.file) return;
    this.inputFile.setValue(this.file.name);
    if (!this.isimage(this.file)) return;
    this.validFile = true;
  }

  uploadImage() {
    this.form.disable();
    this.uploading = true;
  }

  isimage(file: File) {
    let regex = new RegExp("(.*?)\.(jpg|png|jpeg)$");
    let valid = regex.test(file.type);
    if (!valid)
      this.inputFile.setErrors({ isNotImage: true });
    return valid;
  }
}
