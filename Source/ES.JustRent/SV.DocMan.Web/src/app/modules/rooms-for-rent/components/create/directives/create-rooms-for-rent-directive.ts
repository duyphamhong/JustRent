import { Directive, ElementRef, ViewContainerRef, TemplateRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCreateRoomsForRent]'
})
export class CreateRoomsForRentDirective implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    constructor(private el: ElementRef,
        private templateRef : TemplateRef<any>   ,
        private viewContainer : ViewContainerRef 
    ) {
    }
    @Input() set appCreateRoomsForRent(isHidden : boolean){
        if(isHidden){
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
}