import { Component, OnInit, Input } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { FieldConfig } from '../../../application-form/form-configuration/field-config';
import { FormConfig } from '../../../application-form/form-configuration/form-config';
@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.scss']
})
export class DataPickerComponent {


  @Input() name: string;
  @Input() form: FormConfig;
  field: FieldConfig;
  options: IMyDpOptions;
  constructor() {
    this.options = {
      dateFormat: 'dd.mm.yyyy',
    };
  }

  ngOnInit(): void {
    this.field = this.form.getFieldConfig(this.name);
  }

  isFieldValid(): boolean {
    let field = this.form ? this.form.form.get(this.name) : null;

    let isValid = field ? !field.invalid && field.dirty : false;
    return isValid;
  }


}
