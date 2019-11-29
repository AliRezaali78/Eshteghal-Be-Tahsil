import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6Iti52YTbjCIsImxhc3RuYW1lIjoi2LHYttin2LnZhNuMIiwiaWF0IjoxNTE2MjM5MDIyfQ.uTCV8Us_4ONtixc5_-_laWr_0ZMXi1TUkoqzoSKkmu8";
  constructor() { }

  login(credentials) {
    if (credentials.username.toLowerCase() === "admin" && credentials.password.toLowerCase() === "admin")
      return of({ token: this.fakeToken }).pipe(delay(2000), map(resp => {
        if (resp && resp.token) {
          localStorage.setItem('token', resp.token);
          return true;
        } else return false;
      }));
    else
      return throwError({ badInput: true }).pipe(delay(2000));
  }
}
