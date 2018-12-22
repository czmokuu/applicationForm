import { ValidatorFn } from "@angular/forms";
import { CustomValidator } from "./validators";


export class FieldConfig {
  constructor(readonly label: string,
    readonly name: string,
    public value: any,
    public disabled: boolean,
    public validations: CustomValidator[],
    readonly placeholder: string
  ) {
  }

  get validators(): Array<ValidatorFn> {
    return this.validations ? this.validations.map(validator => validator.validator) : [];
  }
}