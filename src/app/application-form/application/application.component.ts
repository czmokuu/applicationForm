import { Component } from '@angular/core';
import { CreateApplicationForm } from './application-form.service';
import { ApplicationResource } from '../resurce.service';
import { NotificationService } from '../../shared/notification/notification.service';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent  {

  sexOptions = ['male', 'female'];

  constructor(private createApplicationService: CreateApplicationForm,
    private applicationResource: ApplicationResource,
    private notificationService: NotificationService) {

  }

  apply() {
    let applicationForm = this.createApplicationService.createApplicationFormDto();
    this.applicationResource.apply(applicationForm).subscribe(() => {
      this.notificationService.sendSuccess(`Success! Your application has been send.`);
    })
  }

}
