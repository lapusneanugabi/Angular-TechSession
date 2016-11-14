import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ 
    selector: '[highlight]' 
})
export class HighlightDirective {

    constructor(el: ElementRef, renderer: Renderer) {
        debugger
       renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
}
