import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutomasionComponent } from './automasion/automasion.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/guards/auth-guard.service';
import { NewRequestComponent } from './main/student/new-request/new-request.component';
import { RequestsComponent } from './main/student/requests/requests.component';
import { ProfileComponent } from './main/profile/profile.component';
import { ShowRequestComponent } from './main/student/show-request/show-request.component';
import { StudentGuard } from './services/guards/student-guard.service';
import { AdminGuard } from './services/guards/admin-guard.service';
import { StudentsComponent } from './main/admin/students/students.component';
import { ReviewRequestsComponent } from './main/admin/review-requests/review-requests.component';
import { NewStudentComponent } from './main/admin/new-student/new-student.component';

const routes: Routes = [
  {
    path: "main", component: MainComponent, canActivate: [AuthGuard], children: [
      { path: "profile", component: ProfileComponent },

      { path: "new-request", component: NewRequestComponent, canActivate: [StudentGuard] },
      { path: "requests/:id", component: ShowRequestComponent, canActivate: [StudentGuard] },
      { path: "requests", component: RequestsComponent, canActivate: [StudentGuard] },

      { path: "students", component: StudentsComponent, canActivate: [AdminGuard] },
      { path: "new-student", component: NewStudentComponent, canActivate: [AdminGuard] },
      { path: "review-requests", component: ReviewRequestsComponent, canActivate: [AdminGuard] },

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
