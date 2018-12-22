
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "./field-config";

export abstract class FormConfig {
    abstract get form(): FormGroup ;
    abstract getFieldConfig(name: string): FieldConfig;
}