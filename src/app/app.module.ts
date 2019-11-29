import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomFormsModule } from 'ng2-validation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutomasionLoginComponent } from './automasion/automasion-login/automasion-login.component';
import { AutomasionRegisterComponent } from './automasion/automasion-register/automasion-register.component';
import { AutomasionComponent } from './automasion/automasion.component';
import { AppErrorHandler } from './common/errors/app-error-handler';
import { MainComponent } from './main/main/main.component';
import { MaterialsModule } from './materials-module/materials.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './services/auth.interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AutomasionComponent,
    AutomasionLoginComponent,
    AutomasionRegisterComponent,
    MainComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function tokenGetter() {
  return localStorage.getItem('token');
}