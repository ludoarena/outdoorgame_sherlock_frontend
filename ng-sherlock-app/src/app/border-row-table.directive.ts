import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[userBorderRowTable]',
})
export class BorderRowTable {
  constructor(private el : ElementRef) {
    this.setBorder("#f5f5f5");
  }

  @Input('userBorderRowTable') borderColor?: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || '#009688');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  setBorder(color : string) {
    this.el.nativeElement.style.border = `solid 2px ${color}`;
  }
}
