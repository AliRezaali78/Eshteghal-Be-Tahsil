import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutomasionComponent } from './automasion/automasion.component';
import { ShowReviewRequestComponent } from './main/admin/review-requests/show-review-request/show-review-request.component';
import { SignupRequestsComponent } from './main/admin/signup-requests/signup-requests.component';
import { StudentFormComponent } from './main/admin/student-form/student-form.component';
import { StudentsComponent } from './main/admin/students/students.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './main/profile/profile.component';
import { NewRequestComponent } from './main/student/new-request/new-request.component';
import { RequestsComponent } from './main/student/requests/requests.component';
import { ShowRequestComponent } from './main/student/show-request/show-request.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminGuard } from './services/guards/admin-guard.service';
import { AuthGuard } from './services/guards/auth-guard.service';
import { ReviewRequestsComponent } from './main/admin/review-requests/review-requests.component';

const routes: Routes = [
  {
    path: "main", component: MainComponent, canActivate: [AuthGuard], children: [
      { path: "profile", component: ProfileComponent },

      { path: "new-request", component: NewRequestComponent, canActivate: [] },
      { path: "requests/:id", component: ShowRequestComponent, canActivate: [] },
      { path: "requests", component: RequestsComponent, canActivate: [] },

      { path: "students", component: StudentsComponent, canActivate: [AdminGuard] },
      { path: "student-form/:id", component: StudentFormComponent, canActivate: [AdminGuard] },
      { path: "student-form", component: StudentFormComponent, canActivate: [AdminGuard] },

      { path: "review-requests/:id", component: ShowReviewRequestComponent, canActivate: [AdminGuard] },
      { path: "review-requests", component: ReviewRequestsComponent, canActivate: [AdminGuard] },

      { path: "signup-requests", component: SignupRequestsComponent, canActivate: [AdminGuard] },


      { path: "not-found", component: NotFoundComponent },

    ]
  },
  { path: "", component: AutomasionComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
