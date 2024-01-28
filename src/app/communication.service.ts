import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  isClick : boolean = false; 
getIsClick() : boolean{
  return this.isClick;
}
setIsClick(click:boolean){
this.isClick = click;
}
  constructor() { }
}
