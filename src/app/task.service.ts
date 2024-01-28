import { Injectable } from '@angular/core';
import { Task } from './tasks/task';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

task : Task;

setTaskName(taskName : string){
  this.task.taskName= taskName;
 }
 

 setTaskDate(taskDate : string){
   this.task.taskDate= taskDate;
  }

  setTaskHour(taskHour : string){
   this.task.taskHour= taskHour;
  }

  setTaskUser(taskUser : User){
    this.task.taskUser = taskUser;
  }

  setTaskId(taskId : number){
        this.task.id = taskId;
  }

  setTaskCompleted(){
    this.task.completed = true;
  }

  constructor() { }
}
