import { NgModule } from '@angular/core';

import { ShareModule } from '../share/share.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
    declarations: [
        MainNavComponent,
        ProfileComponent
    ],
    imports: [
        ShareModule,
        AdminModule
    ],
})
export class MainModule { }