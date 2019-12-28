import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';
@Pipe({ name: 'persianDate' })

export class PersianDatePipe implements PipeTransform {
    transform(value: any): any {
        if (!value) return '';
        return moment(value).locale('fa').format('YYYY/MM/DD');
    }
}