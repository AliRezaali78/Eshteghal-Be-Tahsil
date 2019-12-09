import { PersianNumberService } from './../../services/persian-services/persian-number.service';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable()
export class NationalCodeValidators {

    constructor(private service: PersianNumberService) { }
    shouldBeNationalCode(control: AbstractControl): ValidationErrors | null {
        let value = control.value;
        let isPersianNum = this.service.isPersianNumber(value);
        if (isPersianNum)
            value = this.service.toEngNumber(value).toString();
        let valid = this.isValid(value);
        if (!valid)
            return { nationalCode: true };
        return null;
    }

    private isValid(nationalCode: string): boolean {
        return this.validate(nationalCode);
    }

    private validate(nationalCode: string): boolean {
        if (!nationalCode)
            return false;

        if (nationalCode.length !== 10)
            return false;

        switch (nationalCode) {
            case '0000000000':
            case '1111111111':
            case '2222222222':
            case '3333333333':
            case '4444444444':
            case '5555555555':
            case '6666666666':
            case '7777777777':
            case '8888888888':
            case '9999999999':
                return false;
        }

        var c = parseInt(nationalCode.charAt(9));
        var n = parseInt(nationalCode.charAt(0)) * 10 + parseInt(nationalCode.charAt(1)) * 9 + parseInt(nationalCode.charAt(2)) * 8 + parseInt(nationalCode.charAt(3)) * 7 + parseInt(nationalCode.charAt(4)) * 6 + parseInt(nationalCode.charAt(5)) * 5 + parseInt(nationalCode.charAt(6)) * 4 + parseInt(nationalCode.charAt(7)) * 3 + parseInt(nationalCode.charAt(8)) * 2;
        var r = n - Math.round(n / 11) * 11;

        if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r))
            return true;
        return false;
    }
}