import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user';
import { users } from 'src/app/user-list';
import { FormControl, FormGroup, FormControlName } from '@angular/forms';
import { Task } from '../task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() user : User;
  userA :User | undefined ;
  userList : Array<User> ;
  task : Task;

  d : Date = new Date();

  taskName : string;
  taskDate : Date;
  taskHour : Date;
  public mainFormGroup : FormGroup; 


  constructor(  private route : ActivatedRoute,
    private router : Router,
    private taskService : TaskService,
    //private   userService : UserService
    ){}

    ngOnInit(): void {

      this.mainFormGroup = new FormGroup
    (
      {
        tname : new FormControl(),
        tdate : new FormControl(),
        thour : new FormControl()

      } 
    )
    
      this.taskService.task = new Task();
      this.userList = users;
      const userFname : string | null = this.route.snapshot.paramMap.get('firstName');
      
        this.userA = this.userList.find( user => user.firstName == userFname);
        if(this.userA){
          this.user = this.userA;
        }
      
      console.log(this.user);
    }

    goBack(){
      history.back();
    }

    onSubmit(){
      this.task = this.taskService.task;
      this.taskService.setTaskName(this.mainFormGroup.controls['tname'].value);
      this.taskService.setTaskDate(this.mainFormGroup.controls['tdate'].value);
      this.taskService.setTaskHour(this.mainFormGroup.controls['thour'].value);
      this.taskService.setTaskUser(this.user);
      this.taskService.setTaskId(this.user.tasksList.length+1);
      console.log(this.task);
      console.log(this.user);
      this.user?.tasksList.push(this.task);
      this.router.navigate(['task-manager/tasks',this.user?.firstName]);
    }

}
