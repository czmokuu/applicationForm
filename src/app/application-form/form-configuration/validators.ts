import { ValidatorFn } from "@angular/forms";

export interface CustomValidator {
    name: string;
    validator: ValidatorFn;
    message: string;
  }