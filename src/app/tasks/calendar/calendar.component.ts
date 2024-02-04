import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';
import { users } from 'src/app/user-list';
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators,
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
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.mainFormGroup = this.fb.group({
      tname: ['', Validators.required],
      dateHourGroup: this.fb.group(
        {
          tdate: [null, this.dateValidator],
          thour: [null],
        },
        { validators: [this.hourValidator] }
      ),
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
    this.taskService.setTaskDate(
      this.mainFormGroup.get('dateHourGroup.tdate')?.value
    );
    this.taskService.setTaskHour(
      this.mainFormGroup.get('dateHourGroup.thour')?.value
    );
    this.taskService.setTaskUser(this.user);
    this.taskService.setTaskId(this.user.tasksList.length + 1);
    console.log(this.task);
    console.log(this.user);
    this.user?.tasksList.push(this.task);
    this.router.navigate(['task-manager/tasks', this.user?.firstName]);
  }

  dateValidator(_c: AbstractControl): { [key: string]: boolean } | null {
    if (
      _c.value != null &&
      (new Date(_c.value).getFullYear() < new Date().getFullYear() || //si l'année chois < l'année actuelle
        new Date(_c.value).getMonth() < new Date().getMonth() || //si le mois chois < le mois actuelle
        new Date(_c.value).getDate() < new Date().getDate()) //si le jour chois < le jour actuelle
    ) {
      return { dateError: true };
    } else {
      return null;
    }
  }

  hourValidator(_c: AbstractControl): { [key: string]: boolean } | null {
    const validDate = _c.get('tdate');
    const validHour = _c.get('thour');
    if (
      validDate?.valid &&
      new Date(validDate?.value).getDate() == new Date().getDate() && // -------------
      new Date(validDate?.value).getMonth() == new Date().getMonth() && // ------------
      new Date(validDate?.value).getFullYear() == new Date().getFullYear() && // si la date choisi avant cSorrespond à la date d'aujourd'hui
      (new Date(validDate.value + ' ' + validHour?.value).getHours() < // --------
        new Date().getHours() ||
        (new Date(validDate.value + ' ' + validHour?.value).getHours() == // --------
          new Date().getHours() && // ------------
          new Date(validDate.value + ' ' + validHour?.value).getMinutes() < // -------------
            new Date().getMinutes())) // si l'heure choisi est inférieur à l'heure actuelle
    ) {
      return { hourError: true };
    } else {
      return null;
    }
  }
}
