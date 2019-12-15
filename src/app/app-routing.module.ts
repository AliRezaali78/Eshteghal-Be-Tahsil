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

const routes: Routes = [
  {
    path: "main", component: MainComponent, canActivate: [AuthGuard], children: [
      { path: "new-request", component: NewRequestComponent },
      { path: "requests", component: RequestsComponent },
      { path: "requests/:id", component: ShowRequestComponent },
      { path: "profile", component: ProfileComponent },

      { path: "students", component: NotFoundComponent },
      { path: "new-student", component: NotFoundComponent },
      { path: "review-requests", component: NotFoundComponent },
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
