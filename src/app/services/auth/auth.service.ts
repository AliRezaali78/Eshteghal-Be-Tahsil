import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { BadRequest } from 'src/app/common/errors/bad-request.error';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6Iti52YTbjCIsImxhc3RuYW1lIjoi2LHYttin2LnZhNuMIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE1MTYyMzkwMjJ9.aBEV8BYbhPxJQuWCvvn_jw-0zFvaJKjAM1h9f0pR-Kg";
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
      return throwError(new BadRequest()).pipe(delay(2000));
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    let jwt = new JwtHelperService();
    let token = localStorage.getItem('token');
    if (!token) return false;
    return !jwt.isTokenExpired(token);
  }

  get currentUser() {
    let jwt = new JwtHelperService();
    let token = localStorage.getItem('token');
    if (!token) return false;
    return jwt.decodeToken(token);
  }
}
