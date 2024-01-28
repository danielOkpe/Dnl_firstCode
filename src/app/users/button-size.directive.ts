import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hooverButtonSize]'
})
export class ButtonSizeDirective {
private defaultHeight : number =40 ;
private defaultWidth : number = 170;
  constructor(private el : ElementRef,
    ) { 
       
    this.setHeight(this.defaultHeight);
    this.setWidth(this.defaultWidth);
    console.log(this.el.nativeElement);
    this.el.nativeElement.style.cursor = 'pointer';

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
    this.el.nativeElement.style.height = `${height}px`;
  }
  setWidth(width : number){
    this.el.nativeElement.style.width = `${width}px`;
  }

  

}
