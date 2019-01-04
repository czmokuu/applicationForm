import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ApplicationComponent } from './application/application.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateApplicationForm } from './application/application-form.service';
import { ApplicationResource } from './resurce.service';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ApplicationComponent],
  exports: [ApplicationComponent],
  providers: [CreateApplicationForm, ApplicationResource]
})
export class ApplicationFormModule { }
