import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BanerComponent } from './baner/baner.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DataPickerComponent } from './components/data-picker/data-picker.component';
import { RadiobuttonsComponent } from './components/radiobuttons/radiobuttons.component';
import { MyDatePickerModule } from 'mydatepicker';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    FormsModule,
  ],
  declarations: [NavbarComponent, FooterComponent, BanerComponent, HeaderComponent, InputComponent, DataPickerComponent, RadiobuttonsComponent],
  exports: [NavbarComponent, FooterComponent, BanerComponent, HeaderComponent, InputComponent,DataPickerComponent]
})
export class SharedModule { }
