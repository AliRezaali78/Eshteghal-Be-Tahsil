import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/share/services/guards/auth-guard.service';

import { MainComponent } from '../main.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { RequestsComponent } from './requests/requests.component';
import { ShowRequestComponent } from './show-request/show-request.component';

const routes: Routes = [
    {
        path: "main", component: MainComponent, canActivate: [AuthGuard], children: [
            { path: "new-request", component: NewRequestComponent, canActivate: [] },
            { path: "requests/:id", component: ShowRequestComponent, canActivate: [] },
            { path: "requests", component: RequestsComponent, canActivate: [] },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule { }
