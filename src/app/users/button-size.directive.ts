import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hooverButtonSize]'
})
export class ButtonSizeDirective {
private defaultHeight : number =this.el.nativeElement.style.height ;
private defaultWidth : number = this.el.nativeElement.style.width;
  constructor(private el : ElementRef,
    ) { 
       
    this.setHeight(this.defaultHeight);
    this.setWidth(this.defaultWidth);
    console.log(this.el.nativeElement);

    /*if( this.el.nativeElement ===  HTMLElement){
      this.el.nativeElement.style.cursor = 'pointer';
    }else{
      this.el.nativeElement.style.cursor = 'default';
    
    }*/  }

  @HostListener('mouseenter') onMouseEnter(){
this.setHeight(this.defaultHeight+10);
this.setWidth(this.defaultWidth+10);
/*

*/
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setHeight(this.defaultHeight);
    this.setWidth(this.defaultWidth);


  }

  setHeight(height : number){
    this.el.nativeElement.style.height = `${height}`;
  }
  setWidth(width : number){
    this.el.nativeElement.style.width = `${width}`;
  }

  

}
