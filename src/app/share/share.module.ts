import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './modules/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { PersianDatePipe } from './pipes/persian-date.pipe';
import { PersianNumberPipe } from './pipes/persian-number.pipe';

@NgModule({
    declarations: [
        PersianDatePipe,
        PersianNumberPipe,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialsModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
        RecaptchaFormsModule,
        RecaptchaModule,
        HttpClientModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter
            }
        }),
        ToastrModule.forRoot(),
    ],
    exports: [
        PersianDatePipe,
        PersianNumberPipe,

        BrowserModule,
        BrowserAnimationsModule,
        MaterialsModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
        RecaptchaFormsModule,
        RecaptchaModule,
        HttpClientModule,
    ],
    providers: [
        // { provide: ErrorHandler, useClass: AppErrorHandler },

    ],
})
export class ShareModule { }

export function tokenGetter() {
    return localStorage.getItem('token');
}