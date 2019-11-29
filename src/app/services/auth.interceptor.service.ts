import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let token = localStorage.getItem('token');
        const modifiedRequest = req.clone({ headers: req.headers.append('Authorization', 'Bearer ' + token) })
        return next.handle(modifiedRequest);
    }
}