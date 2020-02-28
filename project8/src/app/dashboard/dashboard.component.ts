import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title:string;
  tagLine:string;

  constructor() {
    this.title="Angular rounting and Bootstrap Usage";
    this.tagLine="A simple SPA"
   }

  ngOnInit() {
  }

}
