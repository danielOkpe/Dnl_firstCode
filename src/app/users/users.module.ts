import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonSizeDirective } from './button-size.directive';

const usersRoutes : Routes = [
  {path: 'task-manager/form', component: FormComponent},
];

@NgModule({
  declarations: [
    FormComponent,
    ButtonSizeDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(usersRoutes),
  ]
})
export class UsersModule { }
