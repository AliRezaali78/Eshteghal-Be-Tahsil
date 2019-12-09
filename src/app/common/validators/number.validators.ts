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
}


