import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { RECAPTCHA_LANGUAGE, RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { CustomFormsModule } from 'ng2-validation';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutomasionLoginComponent } from './automasion/automasion-login/automasion-login.component';
import { AutomasionRegisterComponent } from './automasion/automasion-register/automasion-register.component';
import { AutomasionComponent } from './automasion/automasion.component';
import { B4SpinnerComponent } from './b4-spinner/b4-spinner.component';
import { PersianDatePipe } from './common/pipes/persian-date.pipe';
import { PersianNumberPipe } from './common/pipes/persian-number.pipe';
import { MainNavComponent } from './main/main-nav/main-nav.component';
import { MainComponent } from './main/main.component';
import { ChangePasswordComponent } from './main/profile/change-password/change-password.component';
import { ChangeProfileImgComponent } from './main/profile/change-profile-img/change-profile-img.component';
import { ProfileInformationComponent } from './main/profile/profile-information/profile-information.component';
import { ProfileComponent } from './main/profile/profile.component';
import { NewRequestComponent } from './main/student/new-request/new-request.component';
import { RequestsComponent } from './main/student/requests/requests.component';
import { MaterialsModule } from './common/modules/materials.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthInterceptor } from './services/auth.interceptor.service';
import { PersianNumberService } from './services/persian-services/persian-number.service';
import { ShowRequestComponent } from './main/student/show-request/show-request.component';
import { TableSpinnerComponent } from './table-spinner/table-spinner.component';
import { StudentsComponent } from './main/admin/students/students.component';
import { ReviewRequestsComponent } from './main/admin/review-requests/review-requests.component';
import { SignupRequestsComponent } from './main/admin/signup-requests/signup-requests.component';
import { ManualSignupComponent } from './main/admin/student-form/manual-signup/manual-signup.component';
import { StudentFormComponent } from './main/admin/student-form/student-form.component';
import { ExcelSignupComponent } from './main/admin/student-form/excel-signup/excel-signup.component';
import { InputFileComponent } from './input-file/input-file.component';
import { ExcelTableComponent } from './main/admin/student-form/excel-signup/excel-table/excel-table.component';
import { NavbarComponent } from './main/main-nav/navbar/navbar.component';
import { DeleteDialogBoxComponent } from './main/admin/delete-dialog-box/delete-dialog-box.component';
import { AcceptRequestDialogBoxComponent } from './main/admin/review-requests/request-dialog-boxs/accept-dialog/accept-request-dialog-box.component';
import { RejectRequestDialogBoxComponent } from './main/admin/review-requests/request-dialog-boxs/reject-dialog/reject-request-dialog-box.component';
import { PersianDatepickerComponent } from './persian-datepicker/persian-datepicker.component';
@NgModule({
  declarations: [
    AppComponent,
    AutomasionComponent,
    AutomasionLoginComponent,
    AutomasionRegisterComponent,
    MainComponent,
    NotFoundComponent,
    MainNavComponent,
    NewRequestComponent,
    RequestsComponent,
    ProfileComponent,
    ChangePasswordComponent,
    ProfileInformationComponent,
    B4SpinnerComponent,
    ChangeProfileImgComponent,
    PersianDatePipe,
    PersianNumberPipe,
    ShowRequestComponent,
    TableSpinnerComponent,
    StudentFormComponent,
    StudentsComponent,
    ReviewRequestsComponent,
    SignupRequestsComponent,
    ManualSignupComponent,
    ExcelSignupComponent,
    InputFileComponent,
    ExcelTableComponent,
    NavbarComponent,
    DeleteDialogBoxComponent,
    AcceptRequestDialogBoxComponent,
    RejectRequestDialogBoxComponent,
    PersianDatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    RecaptchaFormsModule, RecaptchaModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    ToastrModule.forRoot(),
  ],
  providers: [
    PersianNumberService,
    // { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: RECAPTCHA_LANGUAGE, useValue: 'fa' }
  ],
  entryComponents: [
    DeleteDialogBoxComponent,
    AcceptRequestDialogBoxComponent,
    RejectRequestDialogBoxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function tokenGetter() {
  return localStorage.getItem('token');
}