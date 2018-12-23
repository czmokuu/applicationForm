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
    a = '/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i';

    static regexValidator(regexp: RegExp) {
        let validatorWithPatter: CustomValidator = {
            name: 'email',
            validator: Validators.pattern(regexp),
            message: 'You have to provide correct e-mail address.'
        }

        return validatorWithPatter;
    }
}