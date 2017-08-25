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
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    NamelistComponent,
    FormsModule 
  ],
  exports: [
 
  ],
  providers:[
    PhoneBookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
