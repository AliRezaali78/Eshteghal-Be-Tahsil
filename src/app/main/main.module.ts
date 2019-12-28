import { NgModule } from '@angular/core';

import { ShareModule } from '../share/share.module';
import { AdminModule } from './admin/admin.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';
import { ProfileComponent } from './profile/profile.component';
import { StudentModule } from './student/student.module';
import { NavbarComponent } from './main-nav/navbar/navbar.component';
import { ProfileInformationComponent } from './profile/profile-information/profile-information.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { ChangeProfileImgComponent } from './profile/change-profile-img/change-profile-img.component';

@NgModule({
    declarations: [
        MainComponent,
        MainNavComponent,
        NavbarComponent,
        ProfileComponent,
        ProfileInformationComponent,
        ChangePasswordComponent,
        ChangeProfileImgComponent,
    ],
    imports: [
        ShareModule,
        AdminModule,
        StudentModule,
        MainRoutingModule
    ],
})
export class MainModule { }