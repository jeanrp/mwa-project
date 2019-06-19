import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appReturnSpecificCustomerByParam]'
})
export class ReturnSpecificCustomerByParamDirective implements OnInit {

  @Input() currentInterestType: string;
  @Input() interestTypeRequested: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
  }

  ngOnInit() {
    if (this.currentInterestType == this.interestTypeRequested)
      this.showElement();
    else
      this.hideElement();
  }

  showElement() {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'block');
  }

  hideElement() {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'none');
  }

}
