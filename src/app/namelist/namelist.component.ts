import { Component, OnInit } from '@angular/core';
import { PhoneBookService } from "../phonebook.service";
import { Http,RequestOptions } from "@angular/http";
import{FormsModule}from'@angular/forms';
@Component({
  selector: 'app-namelist',
  templateUrl: './namelist.component.html',
  styleUrls: ['./namelist.component.scss']
})
export class NamelistComponent implements OnInit {
  list =[];


  constructor(public http: Http,private PhoneBookService: PhoneBookService) {   }

  Add(values){
    console.log(values);
  this.http.put("https://harithsailsjs.herokuapp.com/contact/",values).map(res=> res).subscribe();
    
  }

  makeRequest(): void {
   
     this.http.get("https://harithsailsjs.herokuapp.com/contact").map(res=> res.json()).subscribe(data =>{ this.list= data });
  
  }
  ngOnInit() {
    
  }

}
