import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutomasionComponent } from './automasion/automasion.component';
import { MainComponent } from './main/main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/guards/auth-guard.service';

const routes: Routes = [
  { path: "main", component: MainComponent, canActivate: [AuthGuard] },
  { path: "", component: AutomasionComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
