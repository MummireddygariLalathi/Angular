import { Component, OnInit } from '@angular/core';
import {Task} from '../models/task';
import {TaskService} from '../services/task.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  private task:Task;
  private isNew:boolean;
  private sDateStr:string;
  private eDateStr:string;

  constructor(
    private taskServ:TaskService,
    private routeData:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.routeData.params.subscribe(
      (params)=>{
        let taskId=params['tid'];
        if(taskId==undefined){
          this.isNew=true;
          this.task=new Task();
          this.sDateStr=(new Date()).toISOString().substr(0,10);
          this.eDateStr=(new Date()).toISOString().substr(0,10);
        }else{
          this.task=this.taskServ.get(taskId);
          this.isNew=false;
          this.sDateStr=this.task.startDate.toISOString().substr(0.10);
          this.eDateStr=this.task.endDate.toISOString().substr(0.10);

        }
      }
    );
  }
  dateUpdate(){
    this.task.startDate=new Date(this.sDateStr);
    this.task.endDate=new Date(this.eDateStr);
  }
  save(){
    if(this.isNew){
      this.taskServ.add(this.task);
    }else{
      this.taskServ.update(this.task);
    }
    this.router.navigateByUrl("/list")
  }

}
