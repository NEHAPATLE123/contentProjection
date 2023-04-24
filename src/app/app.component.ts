import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-content';

  
 array : Array<any> = [
  {
    header : "Angular 16",
    body : "Angular 16 was released last month (on 23rd march)"
  },
  {
    header : "Javscript",
    body : "Javascript is a lighted interpreted object"
  },
  {
    header : "Typescipt",
    body : "synthatic superset of javascipt which adds static typing"
  }
 ]

 keya: Array<string> = ["SrNo","name", "surname", "village", "education"]

 tableArray : Array<any> = [
  {
    SrNo: 1,
    name: "neha",
    surname: "patle",
    village: "soni",
    education: "BE(Civil)"
  },
  {
    SrNo: 2,
    name: "leena",
    surname: "patle",
    village: "soni",
    education: "BE(C)"
  },
  {
    SrNo: 3,
    name: "henna",
    surname: "patle",
    village: "soni",
    education: "BE(Civil)"
  },
  {
    SrNo: 4,
    name: "sania",
    surname: "patle",
    village: "soni",
    education: "BE(Civil)"
  }
 ]

 

}
