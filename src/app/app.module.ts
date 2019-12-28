import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutomasionModule } from './automasion/automasion.module';
import { DeleteDialogBoxComponent } from './main/admin/delete-dialog-box/delete-dialog-box.component';
import {
  AcceptRequestDialogBoxComponent,
} from './main/admin/review-requests/request-dialog-boxs/accept-dialog/accept-request-dialog-box.component';
import {
  RejectRequestDialogBoxComponent,
} from './main/admin/review-requests/request-dialog-boxs/reject-dialog/reject-request-dialog-box.component';
import { ReviewRequestsComponent } from './main/admin/review-requests/review-requests.component';
import { ShowReviewRequestComponent } from './main/admin/review-requests/show-review-request/show-review-request.component';
import { SignupRequestsComponent } from './main/admin/signup-requests/signup-requests.component';
import { ExcelSignupComponent } from './main/admin/student-form/excel-signup/excel-signup.component';
import { ExcelTableComponent } from './main/admin/student-form/excel-signup/excel-table/excel-table.component';
import { ManualSignupComponent } from './main/admin/student-form/manual-signup/manual-signup.component';
import { StudentFormComponent } from './main/admin/student-form/student-form.component';
import { StudentsComponent } from './main/admin/students/students.component';
import { MainNavComponent } from './main/main-nav/main-nav.component';
import { NavbarComponent } from './main/main-nav/navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ChangePasswordComponent } from './main/profile/change-password/change-password.component';
import { ChangeProfileImgComponent } from './main/profile/change-profile-img/change-profile-img.component';
import { ProfileInformationComponent } from './main/profile/profile-information/profile-information.component';
import { ProfileComponent } from './main/profile/profile.component';
import { NewRequestComponent } from './main/student/new-request/new-request.component';
import { RequestsComponent } from './main/student/requests/requests.component';
import { ShowRequestComponent } from './main/student/show-request/show-request.component';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainNavComponent,
    NewRequestComponent,
    RequestsComponent,
    ProfileComponent,
    ChangePasswordComponent,
    ProfileInformationComponent,
    ChangeProfileImgComponent,

    ShowRequestComponent,
    StudentFormComponent,
    StudentsComponent,
    ReviewRequestsComponent,
    SignupRequestsComponent,
    ManualSignupComponent,
    ExcelSignupComponent,
    ExcelTableComponent,
    NavbarComponent,
    DeleteDialogBoxComponent,
    AcceptRequestDialogBoxComponent,
    RejectRequestDialogBoxComponent,
    ShowReviewRequestComponent
  ],
  imports: [
    ShareModule,
    AutomasionModule,
    AppRoutingModule,
  ],
  providers: [

  ],
  entryComponents: [
    DeleteDialogBoxComponent,
    AcceptRequestDialogBoxComponent,
    RejectRequestDialogBoxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

