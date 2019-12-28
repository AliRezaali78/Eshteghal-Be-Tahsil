import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/share/share.module';
import { DeleteDialogBoxComponent } from './delete-dialog-box/delete-dialog-box.component';
import { ReviewRequestsComponent } from './review-requests/review-requests.component';
import { AcceptRequestDialogBoxComponent } from './review-requests/request-dialog-boxs/accept-dialog/accept-request-dialog-box.component';
import { RejectRequestDialogBoxComponent } from './review-requests/request-dialog-boxs/reject-dialog/reject-request-dialog-box.component';
import { ShowReviewRequestComponent } from './review-requests/show-review-request/show-review-request.component';
import { SignupRequestsComponent } from './signup-requests/signup-requests.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ExcelSignupComponent } from './student-form/excel-signup/excel-signup.component';
import { ManualSignupComponent } from './student-form/manual-signup/manual-signup.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
    declarations: [
        DeleteDialogBoxComponent,
        ReviewRequestsComponent,
        AcceptRequestDialogBoxComponent,
        RejectRequestDialogBoxComponent,
        ShowReviewRequestComponent,
        SignupRequestsComponent,
        StudentFormComponent,
        ExcelSignupComponent,
        ManualSignupComponent,
        StudentsComponent
    ],
    imports: [ShareModule],
})
export class AdminModule { }