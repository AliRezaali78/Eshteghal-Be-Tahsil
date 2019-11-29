import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutomasionComponent } from './automasion/automasion.component';
import { MainComponent } from './main/main/main.component';
import { AuthGuard } from './services/guards/auth-guard.service';

const routes: Routes = [
  { path: "", component: AutomasionComponent },
  { path: "main", component: MainComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
