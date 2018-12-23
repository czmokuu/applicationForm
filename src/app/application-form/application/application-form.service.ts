import { Injectable } from "@angular/core";
import { FormConfig } from "../form-configuration/form-config";
import { FieldConfig } from "../form-configuration/field-config";
import { FormGroup, FormBuilder } from "@angular/forms";
import { requiredValidator, emailValidator, ValidatorsConfigurable } from "../validators/validators";
import { ApplicationDto } from "./application-dto";
import { CustomValidator } from "../form-configuration/validators";

@Injectable()
export class CreateApplicationForm extends FormConfig {

    private fieldsConfig = new Map<string, FieldConfig>();
    private postCodeRegexPatter = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;
    readonly form: FormGroup;

    constructor(private fb: FormBuilder) {
        super()
        this.fieldsConfig.set('name', new FieldConfig('', 'name', '', false, [requiredValidator], "Name"));
        this.fieldsConfig.set('surname', new FieldConfig('', 'surname', '', false, [requiredValidator], "Surname"));
        this.fieldsConfig.set('email', new FieldConfig('', 'email', '', false, [requiredValidator, emailValidator], "e-mail"));
        this.fieldsConfig.set('sex', new FieldConfig('', 'sex', '', false, [requiredValidator], "sex"));
        this.fieldsConfig.set('dateOfBirth', new FieldConfig('', 'dateOfBirth', '', false, [requiredValidator], "Date of birth"));

        this.fieldsConfig.set('country', new FieldConfig('', 'country', '', false, [requiredValidator], "Country"));
        this.fieldsConfig.set('street', new FieldConfig('', 'street', '', false, [requiredValidator], "Street"));
        this.fieldsConfig.set('postCode', new FieldConfig('', 'postCode', '', false, 
                                [requiredValidator,ValidatorsConfigurable.regexValidator(this.postCodeRegexPatter)], "Post code"));

        this.fieldsConfig.set('motivation', new FieldConfig('', 'motivation', '', false, [requiredValidator], ""));
        this.fieldsConfig.set('resume', new FieldConfig('Resume: ', 'resume', '', false, [requiredValidator], ""));
        this.fieldsConfig.set('cv', new FieldConfig('CV: ', 'cv', '', false, [requiredValidator], ""));
        this.fieldsConfig.set('portfolio', new FieldConfig('Portfolio: ', 'portfolio', '', false, [requiredValidator], ""));

        this.form = this.fb.group(
            this.initForm()
        )
    }

    isFieldValid(name:string): boolean {
        let field = this.form ? this.form.get(name) : null;

        let isValid = field ? !field.invalid && field.dirty : false;
        return isValid;
    }

    getFieldConfig(name: string): FieldConfig {
        if (this.fieldsConfig.has(name)) {
            return this.fieldsConfig.get(name);
        }
    }

    getErrorMessage(field: FieldConfig) {
        let messages = field.validations.filter((validator) => this.constructErrorMessage(validator, field.name));
        return messages[0] ? messages[0].message : "";
    }

    constructErrorMessage(validator: CustomValidator, filedName: string, ) {
        return this.ifShowErrors(filedName, validator) ? validator.message : '';
    }

    ifShowErrors(fieldName: string, validator: CustomValidator): boolean {
        let field = this.form.get(fieldName);
        return field.hasError(validator.name) && field.touched;
    }

    isValidForm(field, validation) {
        return this.form.get(field.name).hasError(validation.name) && this.form.get(field.name).touched
    }

    allDayChange(isAllDay: boolean) {
        let field = this.form.get('to');
        let fieldConfig = this.getFieldConfig('to');
        isAllDay ? field.setValidators([]) : field.setValidators(fieldConfig.validators);
        field.updateValueAndValidity();
        fieldConfig.disabled = isAllDay;
    }

    createApplication(): ApplicationDto {
        // let result = {};
        // this.fieldsConfig.forEach((item, key) => result[key] = item.value);

        // return DutyKindDto.create(result);
        return null
    }

    initForm(): Object {
        let formFields = {};
        let keys = Array.from(this.fieldsConfig.keys());
        keys.forEach(key => formFields[key] = ['', this.fieldsConfig.get(key).validators]);
        return formFields
    }

}