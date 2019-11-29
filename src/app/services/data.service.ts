import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AppError } from 'src/app/common/errors/app.error';
import { NotFound } from 'src/app/common/errors/not-found.error';
import { BadRequest } from 'src/app/common/errors/bad-request.error';
import { NotAuthorized } from '../common/errors/not-authorized.error';
@Injectable()
export class DataService {

    constructor(private url: string, private http: HttpClient) {
    }

    getAll() {
        return this.http.get(this.url)
            .pipe(catchError(this.handleError));
    }

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .pipe(catchError(this.handleError));
    }

    update(resource) {
        return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource))
            .pipe(catchError(this.handleError));
    }

    delete(id) {
        return this.http.delete(this.url + '/' + id)
            .pipe(catchError(this.handleError));
    }

    public handleError(error: Response) {
        if (error.status == 404)
            return throwError(new NotFound());
        if (error.status == 400)
            return throwError(new BadRequest(error));
        if (error.status == 401)
            return throwError(new NotAuthorized());
        return throwError(new AppError(error));
    }
}
