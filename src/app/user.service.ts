import { Injectable } from '@angular/core';
import { User } from './user';
import { users } from './user-list';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : User = new User();

  
    
  setUserFirstName(firstName : string){
   this.user.firstName= firstName;
  }
  

  setUserLastName(lastName : string){
    this.user.lastName= lastName;
   }

   setUserMail(email : string){
    this.user.mail= email;
   }

   setUserId(id : number){
    this.user.id = id;
   }

   
  constructor() { }
}
