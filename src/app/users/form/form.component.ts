import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user';
import { Router } from '@angular/router';
import { CommunicationService } from 'src/app/communication.service';
import { UserService } from 'src/app/user.service';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { users } from 'src/app/user-list';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() user: User;
  firstName: string;
  lastName: string;
  mail: string;
  public mainFormGroup: FormGroup;
  isSubmitValid : boolean = false;

  users: User[];

  ngOnInit(): void {
    this.mainFormGroup = new FormGroup({
      fname: new FormControl(),
      lname: new FormControl(),
      mail: new FormControl(),
    });
    console.log(typeof HTMLButtonElement);
  }

  constructor(
    private route: Router,
    private clickService: CommunicationService,
    private userService: UserService
  ) {}

  onSubmit() {
    this.userService.setUserFirstName(
      this.mainFormGroup.controls['fname'].value
    );
    this.userService.setUserLastName(
      this.mainFormGroup.controls['lname'].value
    );
    this.userService.setUserMail(this.mainFormGroup.controls['mail'].value);
    this.userService.setUserId(users.length + 1);

    this.route.navigate(['task-manager']);
    this.clickService.setIsClick(true);
  }

submitColorValid(){
if(this.mainFormGroup.valid){
(document.getElementById('sub') as HTMLElement).style.color = 'black';
(document.getElementById('sub') as HTMLElement).style.cursor = 'pointer';
}else{
  (document.getElementById('sub') as HTMLElement).style.color = 'rgba(211, 211, 211, 0.717)';
  (document.getElementById('sub') as HTMLElement).style.cursor = 'default';
  (document.getElementById('sub') as HTMLElement).style.height = '45px';
  (document.getElementById('sub') as HTMLElement).style.width = '170px';


}
}

  goBack() {
    history.back();
  }
}
