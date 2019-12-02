import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { BadRequest } from 'src/app/common/errors/bad-request.error';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6Itit2LPZhiIsImxhc3RuYW1lIjoi2LHYttin24zbjCIsImZhdGhlciI6Itin2K3ZhdivIiwibWFqb3IiOiLaqdin2YXZvtuM2YjYqtixIC0g2YbYsdmFINin2YHYstin2LEg2qnYp9mF2b7bjNmI2KrYsSIsImxldmVsIjoi2qnYp9ix2K_Yp9mG24wiLCJ0eXBlIjoi2LTYqNin2YbZhyIsImFkbWluIjpmYWxzZSwiaWF0IjoxNTE2MjM5MDIyfQ.vkzU8zp9DBupDDrgMEiDA4WIanaavum9g9Rm9FG_CXI";
  constructor(private jwt: JwtHelperService) { }

  login(credentials) {
    if (credentials.username.toLowerCase() === "admin" && credentials.password.toLowerCase() === "admin")
      return of({ token: this.fakeToken }).pipe(delay(2000), map(resp => {
        if (resp && resp.token) {
          localStorage.setItem('token', resp.token);
          return true;
        } else return false;
      }));
    else
      return throwError(new BadRequest()).pipe(delay(2000));
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return !this.jwt.isTokenExpired();
  }

  get currentUser() {
    return this.jwt.decodeToken();
  }
}
