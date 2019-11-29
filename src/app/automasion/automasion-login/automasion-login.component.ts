import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppError } from 'src/app/common/errors/app.error';
import { BadRequest } from 'src/app/common/errors/bad-request.error';

@Component({
  selector: 'automasion-login',
  templateUrl: './automasion-login.component.html',
  styleUrls: ['./automasion-login.component.css']
})
export class AutomasionLoginComponent implements OnInit {

  loading = false;
  invalidLogin: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signIn(form: FormGroup) {
    this.loading = true;
    this.authService.login(form.value).subscribe(result => {
      this.loading = false;
      if (result) {
        this.invalidLogin = false;
        this.router.navigate(['/main']);
      } else this.invalidLogin = true;
    }, (error: AppError) => {
      this.loading = false;
      this.handleError(error);
    });
  }

  private handleError(error: AppError) {
    if (error instanceof BadRequest)
      this.invalidLogin = true;
    else
      throw error;
  }
}
