import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor:string='transparent';
  @Input('appBetterHighlight') highlightColor:string='blue';
  // @HostBinding('style.backgroundColor')backgroundColor:string=this.defaultColor;
  // @HostBinding('style.backgroundColor')backgroundColor:string='transparent';
  @HostBinding('style.backgroundColor')backgroundColor:string;

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit() {
    this.backgroundColor=this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
  }

  @HostListener('mouseover')mouseover(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    // this.backgroundColor='blue';
    this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave')mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    // this.backgroundColor='transparent';
    this.backgroundColor=this.defaultColor;
  }

}
