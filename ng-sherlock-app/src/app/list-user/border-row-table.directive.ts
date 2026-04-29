import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[userBorderRowTable]',
})
export class BorderRowTable {

  private initialColor : string = "#f5f5f5";
  private defaultColor : string = "#009688";

  constructor(private el : ElementRef) {
    this.setBorder(this.initialColor);
  }

  @Input('userBorderRowTable') borderColor?: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setBorder(color : string) {
    this.el.nativeElement.style.border = `solid 2px ${color}`;
  }
}
