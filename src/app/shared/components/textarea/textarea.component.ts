import { Component, OnInit, Input } from '@angular/core';
import { FieldConfig } from '../../../application-form/form-configuration/field-config';
import { FormConfig } from '../../../application-form/form-configuration/form-config';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  @Input() name: string;
  @Input() form: FormConfig;
  field: FieldConfig;
  ngOnInit(): void {
    this.field = this.form.getFieldConfig(this.name);
  }

  isFieldValid(): boolean {
    let field = this.form ? this.form.form.get(this.name) : null;

    let isValid = field ? !field.invalid && field.dirty : false;
    return isValid;
  }
}
