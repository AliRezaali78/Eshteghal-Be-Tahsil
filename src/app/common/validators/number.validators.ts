import { AbstractControl, ValidationErrors } from '@angular/forms';

export class NumberValidators {
    static shouldBeNumber(control: AbstractControl): ValidationErrors | null {
        let value = control.value;
        let regex = new RegExp("^[۱۲۳۴۵۶۷۸۹۰0-9]+$");
        let valid = regex.test(value);
        if (!valid)
            return { NAN: true };
        return null;
    }
    static shouldBeStartDate(control: AbstractControl): ValidationErrors | null {
        let value = control.value as string;
        let regex = new RegExp("^[-۱۲۳۴۵۶۷۸۹۰0-9]+$");
        let valid = regex.test(value);
        if (!valid)
            return { NAN: true };
        if (value.indexOf('-') === -1)
            return { NAN: true };
        if (value.substr(value.indexOf('-') + 1) === '')
            return { NAN: true };
        return null;
    }
}


