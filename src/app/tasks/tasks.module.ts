import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { ReactiveFormsModule } from '@angular/forms';

const tasksRoutes : Routes = [
  {path: 'task-manager/tasks/:firstName/add', component: CalendarComponent},
  {path: 'task-manager/tasks/:firstName', component : TasksComponent}
];

@NgModule({
  declarations: [
    CalendarComponent,
    TasksComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(tasksRoutes)
  ]
})
export class TasksModule { }
