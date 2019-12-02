import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutomasionComponent } from './automasion/automasion.component';
import { MainComponent } from './main/main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/guards/auth-guard.service';
import { NewRequestComponent } from './student/new-request/new-request.component';
import { RequestsComponent } from './student/requests/requests.component';

const routes: Routes = [
  {
    path: "main", component: MainComponent, canActivate: [AuthGuard], children: [
      { path: "new-request", component: NewRequestComponent },
      { path: "requests", component: RequestsComponent },
      {
        path: "profile", component: ProfileComponent, children: [
          { path: "change-password", component: ChangePasswordComponent },
        ]
      },
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
