import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        alert("برای رفع مشکل با پشتیبانی ارتباط برقرار کنید");
    }

}