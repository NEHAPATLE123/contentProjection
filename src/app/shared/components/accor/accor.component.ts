import { Component, OnInit } from '@angular/core';
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {faCaretUp} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-accor',
  templateUrl: './accor.component.html',
  styleUrls: ['./accor.component.scss']
})
export class AccorComponent implements OnInit {

  isExpanded : boolean = false;

  carotDown = faCaretDown;
  carotUp = faCaretUp;

  constructor() { }

  ngOnInit(): void {
  }

  // onCollapse(){
  //   this.isExpanded =  !this.isExpanded;
   
  // }

  // carotDownup(){
  //   this.carotDown = this.carotUp
  // }
}
