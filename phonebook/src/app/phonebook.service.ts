import { Injectable } from '@angular/core';
import { Http,RequestOptions } from "@angular/http";
@Injectable()
export class PhoneBookService {

  constructor(private htpp:Http) { }
  featchPhoneBook(){
    return this.htpp.get("https://phone-book-sailsx.herokuapp.com/Contact").map(res=> res.json())
    
  }
  addPerson(values){
    console.log(JSON.stringify(values))
    return this.htpp.put("https://phone-book-sailsx.herokuapp.com/",values).map(res=> res)
  }
  deletePerson(values){
    console.log(JSON.stringify(values))
    return this.htpp.delete("https://phone-book-sailsx.herokuapp.com/",new RequestOptions({body: values,})).map(res=> res)
  }
}
