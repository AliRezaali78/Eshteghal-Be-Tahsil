import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './modules/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { RecaptchaFormsModule, RecaptchaModule, RECAPTCHA_LANGUAGE } from 'ng-recaptcha';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { PersianDatePipe } from './pipes/persian-date.pipe';
import { PersianNumberPipe } from './pipes/persian-number.pipe';
import { PersianDatepickerComponent } from './components/persian-datepicker/persian-datepicker.component';
import { InputFileComponent } from './components/input-file/input-file.component';
import { TableSpinnerComponent } from './components/table-spinner/table-spinner.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { B4SpinnerComponent } from './components/b4-spinner/b4-spinner.component';
import { AuthInterceptor } from './services/auth.interceptor.service';
import { PersianNumberService } from './services/persian-services/persian-number.service';

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
        PersianDatepickerComponent,
        InputFileComponent,
        TableSpinnerComponent,
        NotFoundComponent,
        B4SpinnerComponent,

        BrowserModule,
        BrowserAnimationsModule,
        MaterialsModule,
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