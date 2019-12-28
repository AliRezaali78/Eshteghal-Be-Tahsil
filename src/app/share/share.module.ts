import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { RECAPTCHA_LANGUAGE, RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { CustomFormsModule } from 'ng2-validation';
import { ToastrModule } from 'ngx-toastr';

import { B4SpinnerComponent } from './components/b4-spinner/b4-spinner.component';
import { InputFileComponent } from './components/input-file/input-file.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PersianDatepickerComponent } from './components/persian-datepicker/persian-datepicker.component';
import { TableSpinnerComponent } from './components/table-spinner/table-spinner.component';
import { PersianDatePipe } from './pipes/persian-date.pipe';
import { PersianNumberPipe } from './pipes/persian-number.pipe';
import { AuthInterceptor } from './services/auth.interceptor.service';
import { PersianNumberService } from './services/persian-services/persian-number.service';
import { MaterialsModule } from './modules/materials.module';

@NgModule({
    declarations: [
        PersianDatePipe,
        PersianNumberPipe,
        PersianDatepickerComponent,
        InputFileComponent,
        TableSpinnerComponent,
        NotFoundComponent,
        B4SpinnerComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
        RecaptchaFormsModule,
        RecaptchaModule,
        HttpClientModule,
        MaterialsModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter
            }
        }),
        ToastrModule.forRoot(),
    ],
    exports: [
        PersianDatepickerComponent,
        InputFileComponent,
        TableSpinnerComponent,
        NotFoundComponent,
        B4SpinnerComponent,

        MaterialsModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
        RecaptchaFormsModule,
        RecaptchaModule,
        HttpClientModule,

        PersianDatePipe,
        PersianNumberPipe,
    ],
    providers: [
        // { provide: ErrorHandler, useClass: AppErrorHandler },
        PersianNumberService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: RECAPTCHA_LANGUAGE, useValue: 'fa' }
    ],
})
export class ShareModule { }

export function tokenGetter() {
    return localStorage.getItem('token');
}