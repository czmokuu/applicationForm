
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "./field-config";
import { CustomValidator } from "./validators";

export abstract class FormConfig {
    abstract get form(): FormGroup;
    abstract getFieldConfig(name: string): FieldConfig;
    abstract ifShowErrors(field: string, validator: CustomValidator): boolean;
    abstract getErrorMessage(field: FieldConfig);
    abstract isFieldValid(name: string): boolean;
}