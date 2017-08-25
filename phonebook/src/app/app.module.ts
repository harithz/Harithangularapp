import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NamelistComponent } from './namelist/namelist.component';
import { PhoneBookService } from "./phonebook.service";
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NamelistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule 
  ],
  exports: [
    NamelistComponent
  ],
  providers:[
    PhoneBookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
