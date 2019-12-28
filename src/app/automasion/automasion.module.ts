import { NgModule } from '@angular/core';
import { AutomasionLoginComponent } from './automasion-login/automasion-login.component';
import { AutomasionRegisterComponent } from './automasion-register/automasion-register.component';
import { AutomasionComponent } from './automasion.component';
import { ShareModule } from '../share/share.module';

@NgModule({
    declarations: [
        AutomasionComponent,
        AutomasionLoginComponent,
        AutomasionRegisterComponent,
    ],
    imports: [
        ShareModule
    ],
    exports: [
        AutomasionComponent,
        AutomasionLoginComponent,
        AutomasionRegisterComponent
    ],
})
export class AutomasionModule { }