import { NgModule } from '@angular/core';

import { ShareModule } from '../share/share.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
        MainNavComponent,
        ProfileComponent
    ],
    imports: [
        ShareModule,
    ],
})
export class MainModule { }