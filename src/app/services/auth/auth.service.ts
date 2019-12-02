import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { BadRequest } from 'src/app/common/errors/bad-request.error';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6Itit2LPZhiIsImxhc3RuYW1lIjoi2LHYttin24zbjCIsIm5hdGlvbmFsQ29kZSI6Itux27Pbttuz27jbuNuy27LbtNu0Iiwic3R1ZGVudENvZGUiOiLbsduz27bbs9u427jbstuy27TbtNu127bbt9u4IiwiZmF0aGVyIjoi2KfYrdmF2K8iLCJtYWpvciI6Itqp2KfZhdm-24zZiNiq2LEgLSDZhtix2YUg2KfZgdiy2KfYsSDaqdin2YXZvtuM2YjYqtixIiwibGV2ZWwiOiLaqdin2LHYr9in2YbbjCIsInR5cGUiOiLYtNio2KfZhtmHIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE1MTYyMzkwMjJ9.5UpFwTD5LGaQilpBGqJ9Kxeq2B5dv1bOT4QtXsVBRGU";
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
