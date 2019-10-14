import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDrop]'
})
export class DropdownDirective {
  @HostBinding('class.open') dropOpen = false;
  @HostListener('click') dropdownToggle() {
    this.dropOpen = !this.dropOpen;
  }
  constructor(private elRef: ElementRef) { }
}
