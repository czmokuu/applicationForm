import { Validators } from "@angular/forms";
import { CustomValidator } from "../form-configuration/validators";


export const requiredValidator: CustomValidator = {
    name: 'required',
    validator: Validators.required,
    message: 'Field required'
}