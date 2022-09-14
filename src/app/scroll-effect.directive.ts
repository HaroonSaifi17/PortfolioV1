import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
  selector: '[appScrollEffect]',
})
export class ScrollEffectDirective implements OnInit {
  constructor(private element: ElementRef) {}

  private intersectionObserver: IntersectionObserver

  ngOnInit() {
    const options = {
      rootMargin: '0px 0px -200px 0px',
      threshold: 0,
    }
    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
          entry.target.classList.add("scroll-effect");
          entry.target.classList.add("scroll-effect-anmtn");
        if (entry.isIntersecting) {
          entry.target.classList.remove("scroll-effect");
          this.intersectionObserver.unobserve(entry.target)
        }
      })
    }
    this.intersectionObserver = new IntersectionObserver(callback, options)
    this.intersectionObserver.observe(this.element.nativeElement)
  }
}
