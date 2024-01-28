import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { users } from '../user-list';
import { Task } from './task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  user: User; // utilisateur de la tache
  userA: User | undefined; // variable de transition
  userList: Array<User>; // Liste d'utilisateur
  use: string | null = this.route.snapshot.paramMap.get('firstName'); // récupérer l'utilisateur à partir de son 'firstName'
  leng: Number | undefined; // taille de la liste de taches

  // constructeur
  constructor(
    private route: ActivatedRoute,
    private router: Router // permet de naviguer vers une autre page //private userService : UserService
  ) {}

  // Ce qui se passe à l'initiation de la page
  ngOnInit(): void {
    console.log(users);

    this.userList = users;

    if (this.userList) {
      this.userA = this.userList.find((user) => user.firstName == this.use);
      if (this.userA) {
        this.user = this.userA;
      }
    }

    this.leng = this.user?.tasksList.length;
  }

  // Aller à la page d'édition de la tache
  goToCalendar() {
    this.router.navigate(['task-manager/tasks', this.use, 'add']);
  }

  // Revenir à la page d'avant
  goBack() {
    history.back();
  }

  // Suppression de la tache
  delTask(id: number) {
    this.user?.tasksList.splice(id, 1);
  }

  // Validation de la tache
  ValidTask($event: Event, task: Task, id: Number) {

    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      task.completed = true;
      (
        document.getElementById(id.toString()) as HTMLElement
      ).style.backgroundColor = 'green';

      console.log(task);
    } else {
      task.completed = false;
      (
        document.getElementById(id.toString()) as HTMLElement
      ).style.backgroundColor = '';

      console.log(task);
    }
  }
}
