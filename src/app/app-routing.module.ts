import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutomasionComponent } from './automasion/automasion.component';
import { MainComponent } from './main/main/main.component';

const routes: Routes = [
  { path: "", component: AutomasionComponent },
  { path: "main", component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
