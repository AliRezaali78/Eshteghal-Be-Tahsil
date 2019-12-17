import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  @Output('fileChanged') fileChanged = new EventEmitter<FileChangedEventArgs>();
  @Input('control') control: FormControl;
  @Input('regex') regexPattern: string;
  @Input('placeholder') placeholder: string;
  @Input('hint') hint: string;
  @Input('isNotValidFileError') isNotValidFileError: string;
  validFile = false;
  file: File;

  constructor() { }


  onChanged() {
    this.file = this.fileInput.nativeElement.files[0] as File;
    if (!this.file) return;
    this.control.setValue(this.file.name);
    if (!this.isValidFile(this.file)) return;
    this.validFile = true;

    this.fileChanged.emit({ file: this.file, valid: this.validFile });
  }

  isValidFile(file: File) {
    let regex = new RegExp(this.regexPattern);
    let valid = regex.test(file.type);
    if (!valid)
      this.control.setErrors({ isNotValidFile: true });
    return valid;
  }
}

export interface FileChangedEventArgs {
  file: File,
  valid: boolean
}
