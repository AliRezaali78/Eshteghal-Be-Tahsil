import { ErrorHandler, Inject, NgZone, isDevMode } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export class AppErrorHandler implements ErrorHandler {
    constructor(@Inject(ToastrService) private toastr: ToastrService, private ngZone: NgZone) { }
    handleError(error: any): void {
        this.ngZone.run(() => {
            this.toastr.error("برای رفع مشکل با پشتیبانی ارتباط برقرار نمایید", "خطا", {
                titleClass: 'text-right h6',
                messageClass: 'text-right mat-small',
                timeOut: 5000,
                progressBar: true,
                closeButton: true
            });
        });
        if (isDevMode())
            console.log(error);
    }

}