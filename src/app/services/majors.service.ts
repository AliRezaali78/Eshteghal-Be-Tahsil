import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MajorsService {
  private _majors = [
    { id: 1, value: "کامپیوتر - نرم افزار کامپیوتر" },
    { id: 2, value: "الکترونیک" },
    { id: 3, value: "برق" },
  ]
  constructor() { }

  getMajors() {
    return this._majors.slice()
  }
}
