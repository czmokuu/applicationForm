import { Component, OnInit, Input } from '@angular/core';
import { FormConfig } from '../../../application-form/form-configuration/form-config';
import { FieldConfig } from '../../../application-form/form-configuration/field-config';
import { CustomValidator } from '../../../application-form/form-configuration/validators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() name: string;
  @Input() form: FormConfig;
  field: FieldConfig;
  ngOnInit(): void {
    this.field = this.form.getFieldConfig(this.name);
  }
}
