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