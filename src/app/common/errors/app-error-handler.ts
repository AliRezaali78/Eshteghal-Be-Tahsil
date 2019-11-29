import { ErrorHandler, Inject, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export class AppErrorHandler implements ErrorHandler {
    constructor(@Inject(ToastrService) private toastr: ToastrService, private ngZone: NgZone) { }
    handleError(error: any): void {
        this.ngZone.run(() => {
            this.toastr.error("برای رفع مشکل با پشتیبانی ارتباط برقرار کنید", "خطا", {
                titleClass: 'text-right',
                messageClass: 'text-right',
                timeOut: 5000,
                progressBar: true,
                closeButton: true
            });
        });
        console.log(error);
    }

}