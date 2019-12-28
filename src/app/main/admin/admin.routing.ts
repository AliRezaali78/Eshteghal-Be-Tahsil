import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { AdminGuard } from 'src/app/share/services/guards/admin-guard.service';
import { StudentFormComponent } from './student-form/student-form.component';
import { ShowReviewRequestComponent } from './review-requests/show-review-request/show-review-request.component';
import { ReviewRequestsComponent } from './review-requests/review-requests.component';
import { SignupRequestsComponent } from './signup-requests/signup-requests.component';
import { NotFoundComponent } from 'src/app/share/components/not-found/not-found.component';
import { MainComponent } from '../main.component';
import { AuthGuard } from 'src/app/share/services/guards/auth-guard.service';

const routes: Routes = [{
    path: "main", component: MainComponent, canActivate: [AuthGuard], children: [
        { path: "students", component: StudentsComponent, canActivate: [AdminGuard] },
        { path: "student-form/:id", component: StudentFormComponent, canActivate: [AdminGuard] },
        { path: "student-form", component: StudentFormComponent, canActivate: [AdminGuard] },
        { path: "review-requests/:id", component: ShowReviewRequestComponent, canActivate: [AdminGuard] },
        { path: "review-requests", component: ReviewRequestsComponent, canActivate: [AdminGuard] },
        { path: "signup-requests", component: SignupRequestsComponent, canActivate: [AdminGuard] },
        { path: "not-found", component: NotFoundComponent },
    ]
}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
