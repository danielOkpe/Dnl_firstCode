import { Task } from "./tasks/task";

export class User{
    id : number;
    firstName : string;
    lastName  : string;
    mail      : string;
    tasksList :  Array<Task> = new Array<Task>();
}