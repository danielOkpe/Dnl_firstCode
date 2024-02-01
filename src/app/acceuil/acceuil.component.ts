import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from '../communication.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { users } from '../user-list';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
})
export class AcceuilComponent implements OnInit {
  click: boolean;
  userS: User[] = users;
  //i: number;

  constructor(
    private route: Router,
    private clickService: CommunicationService,
    public userService: UserService
  ) {}

  ngOnInit() {
    console.log(this.userService.user);
    this.addUser();
    console.log(users);
    console.log( new Date());
  }

  addUser() {
    if (this.clickService.getIsClick() == true) {
      users.push(this.userService.user);
      console.log(users);

      this.userService.user = new User();
      this.clickService.setIsClick(false);
    }
  }

  goToForm() {
    this.route.navigate(['task-manager/form']);
  }

  goToTasks(user: User) {
    this.route.navigate(['task-manager/tasks', user.firstName]);
  }

  delUser(id: number) {
    users.splice(id - 1, 1);
    console.log(users);
  }
}
