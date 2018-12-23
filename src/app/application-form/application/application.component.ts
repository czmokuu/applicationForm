import { Component, OnInit } from '@angular/core';
import { CreateApplicationForm } from './application-form.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  sexOptions = ['male','female'];
  constructor(private createApplicationService: CreateApplicationForm) {

  }

  ngOnInit() {
  }

}
