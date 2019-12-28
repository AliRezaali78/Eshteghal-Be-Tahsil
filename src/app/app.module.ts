import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutomasionModule } from './automasion/automasion.module';
import { DeleteDialogBoxComponent } from './main/admin/delete-dialog-box/delete-dialog-box.component';
import {
  AcceptRequestDialogBoxComponent,
} from './main/admin/review-requests/request-dialog-boxs/accept-dialog/accept-request-dialog-box.component';
import {
  RejectRequestDialogBoxComponent,
} from './main/admin/review-requests/request-dialog-boxs/reject-dialog/reject-request-dialog-box.component';
import { MainModule } from './main/main.module';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ShareModule,
    AutomasionModule,
    MainModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    ToastrModule.forRoot(),
  ],
  providers: [

  ],
  entryComponents: [
    DeleteDialogBoxComponent,
    AcceptRequestDialogBoxComponent,
    RejectRequestDialogBoxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function tokenGetter() {
  return localStorage.getItem('token');
}
