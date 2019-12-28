import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';

import { NewRequestComponent } from './new-request/new-request.component';
import { RequestsComponent } from './requests/requests.component';
import { ShowRequestComponent } from './show-request/show-request.component';
import { StudentRoutingModule } from './student.routing';

@NgModule({
    declarations: [
        NewRequestComponent,
        RequestsComponent,
        ShowRequestComponent
    ],
    imports: [
        ShareModule,
        StudentRoutingModule
    ],
})
export class StudentModule { }