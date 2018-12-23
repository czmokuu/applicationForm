import { Component, OnInit, Input } from '@angular/core';
import { FieldConfig } from '../../../application-form/form-configuration/field-config';
import { FormConfig } from '../../../application-form/form-configuration/form-config';

@Component({
  selector: 'app-file-chooser',
  templateUrl: './file-chooser.component.html',
  styleUrls: ['./file-chooser.component.scss']
})
export class FileChooserComponent implements OnInit {

  @Input() name: string;
  @Input() form: FormConfig;
  @Input() acceptedFormFiles: Array<string> = ['.pdf,.doc,.rtf,.txt'];
  field: FieldConfig;
  ngOnInit(): void {
    this.field = this.form.getFieldConfig(this.name);
  }


  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      debugger
      // let formData:FormData = new FormData();
      // formData.append('uploadFile', file, file.name);
      // let headers = new Headers();
      // /** In Angular 5, including the header Content-Type can invalidate your request */
      // headers.append('Content-Type', 'multipart/form-data');
      // headers.append('Accept', 'application/json');

    }
  }

}
