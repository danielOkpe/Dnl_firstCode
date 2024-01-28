import { User } from "../user";

export class Task{
    taskName : string;
    taskDate : string;
    taskHour : string;
    taskUser : User; 
    id : Number;
    completed : boolean = false;
}