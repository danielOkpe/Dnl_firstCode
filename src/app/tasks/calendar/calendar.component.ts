import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';
import { users } from 'src/app/user-list';
import {
  FormControl,
  FormGroup,
  FormControlName,
  AbstractControl,
  FormBuilder,
} from '@angular/forms';
import { Task } from '../task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  @Input() user: User;
  userA: User | undefined;
  userList: Array<User>;
  task: Task;

  d: Date = new Date();

  taskName: string;
  taskDate: Date;
  taskHour: Date;
  public mainFormGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private fb: FormBuilder //private   userService : UserService
  ) {}

  ngOnInit(): void {
    this.mainFormGroup = this.fb.group({
      tname: '',
      tdate: [null, this.dateValidator],
      thour: [null, this.dateValidator],
    });

    this.taskService.task = new Task();
    this.userList = users;
    const userFname: string | null =
      this.route.snapshot.paramMap.get('firstName');

    this.userA = this.userList.find((user) => user.firstName == userFname);
    if (this.userA) {
      this.user = this.userA;
    }

    console.log(this.user);
  }

  goBack() {
    history.back();
  }

  onSubmit() {
    this.task = this.taskService.task;
    this.taskService.setTaskName(this.mainFormGroup.controls['tname'].value);
    this.taskService.setTaskDate(this.mainFormGroup.controls['tdate'].value);
    this.taskService.setTaskHour(this.mainFormGroup.controls['thour'].value);
    this.taskService.setTaskUser(this.user);
    this.taskService.setTaskId(this.user.tasksList.length + 1);
    console.log(this.task);
    console.log(this.user);
    this.user?.tasksList.push(this.task);
    this.router.navigate(['task-manager/tasks', this.user?.firstName]);
    console.log(this.mainFormGroup.controls['thour'].value);
  }

  dateValidator(_c: AbstractControl): { [key: string]: boolean } | null {
    if (
      _c.value != null &&
      (new Date(_c.value).getFullYear() < new Date().getFullYear() ||
        new Date(_c.value).getMonth() < new Date().getMonth() ||
        new Date(_c.value).getDate() < new Date().getDate())
    ) {
      return { dateError: true };
    } else {
      return null;
    }
  }

  
}
