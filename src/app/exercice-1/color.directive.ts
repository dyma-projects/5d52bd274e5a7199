import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @HostBinding() appColor? = 'orange';
  @HostListener('window:keyup', ['$event']) private changecolor(
    $e: KeyboardEvent
  ) {
    if ($e.code == 'ArrowUp') {
      console.log('UP', this.appColor);
      this.el.nativeElement.style.color = 'orange';
    } else if ($e.code == 'ArrowLeft') {
      console.log('LEFT', this.appColor);
      this.el.nativeElement.style.color = 'blue';
    } else if ($e.code == 'ArrowRight') {
      console.log('RIGHT', this.appColor);
      this.el.nativeElement.style.color = 'green';
    } else if ($e.code == 'ArrowDown') {
      console.log('DOWN', this.appColor);
      this.el.nativeElement.style.color = 'purple';
    }
  }

  constructor(private el: ElementRef) {}
}
