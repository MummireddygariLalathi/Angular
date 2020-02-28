import { Component, OnInit } from '@angular/core';
import {NumberSeriesService} from '../services/number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent  {
  lb:number;
  ub:number;
  isJobDone:boolean;
  result:number[];
  errorMsg:string;


  constructor(private numSerService:NumberSeriesService) {
    this.lb=0;
    this.ub=0;
    this.isJobDone=true;
  }
  generate(){
    this.result=[];
    this.errorMsg=null;
    this.isJobDone=false;
    let ob=this.numSerService.generateSeries(this.lb,this.ub);
    ob.subscribe(
      (num) => {this.result.push(num);},
      (errorMsg)=>{this.errorMsg=errorMsg; this.isJobDone=true;},
      ()=>{this.isJobDone=true;}
    );

  }

  

}