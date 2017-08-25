import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamelistComponent } from './namelist.component';
import { PhoneBookService } from "../phonebook.service";
import{FormsModule}from'@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    NamelistComponent
  ],
  providers:[
    PhoneBookService
  ],
  declarations: [NamelistComponent]
})
export class NamelistModule { }
