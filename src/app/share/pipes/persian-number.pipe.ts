import { PersianNumberService } from '../../services/persian-services/persian-number.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'persianNumber' })
export class PersianNumberPipe implements PipeTransform {
    constructor(private perService: PersianNumberService) { }
    transform(value: any): any {
        if (!value) return '';
        return this.perService.toPersianNumber(value);
    }
}