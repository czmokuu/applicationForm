import { Component, OnInit, Input } from '@angular/core';
import { FormConfig } from '../../../application-form/form-configuration/form-config';
import { FieldConfig } from '../../../application-form/form-configuration/field-config';

@Component({
  selector: 'app-radiobuttons',
  templateUrl: './radiobuttons.component.html',
  styleUrls: ['./radiobuttons.component.scss']
})
export class RadiobuttonsComponent implements OnInit {


  @Input() name: string;
  @Input() form: FormConfig;
  @Input() options: Array<string>;
  field: FieldConfig;
  ngOnInit(): void {
    this.field = this.form.getFieldConfig(this.name);
  }
}
