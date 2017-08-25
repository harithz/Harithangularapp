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
  this.http.put("http://localhost:1337/Contact/",values).map(res=> res).subscribe();
    
  }

  makeRequest(): void {
   
     this.http.get("http://localhost:1337/Contact/").map(res=> res.json()).subscribe(data =>{ this.list= data });
  
  }
  ngOnInit() {
    
  }

}
