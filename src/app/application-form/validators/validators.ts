import { Validators } from "@angular/forms";
import { CustomValidator } from "../form-configuration/validators";


export const requiredValidator: CustomValidator = {
    name: 'required',
    validator: Validators.required,
    message: 'Field required'
}

export const emailValidator: CustomValidator = {
    name: 'email',
    validator: Validators.email,
    message: 'You have to provide correct e-mail address.'
}


export class ValidatorsConfigurable {

    static regexValidator(regexp: RegExp | string) {
        let validatorWithPatter: CustomValidator = {
            name: 'pattern',
            validator: Validators.pattern(regexp),
            message: 'You have to provide correct dutch zipcode (e.g  1234 ab)'
        }

        return validatorWithPatter;
    }
}