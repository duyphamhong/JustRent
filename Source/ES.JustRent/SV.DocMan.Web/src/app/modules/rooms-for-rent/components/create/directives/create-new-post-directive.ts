import { Directive, ElementRef, ViewContainerRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCreateNewPost]'
})
export class CreateNewPostDirective {
     kinds : any[] = [{
        value : 1,
        viewValue : "hihi"
      },
      {
        value : 1,
        viewValue : "hihi"
      },
      {
        value : 1,
        viewValue : "hihi"
      }]
    constructor(private el: ElementRef
    ) {
        el.nativeElement.HostBinding
        console.log(el.nativeElement);
    }
}