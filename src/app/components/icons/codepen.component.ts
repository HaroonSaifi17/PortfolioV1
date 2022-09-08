import { Component } from '@angular/core'

@Component({
  selector: 'app-codepen',
  template: `
 <svg class="svg_logo"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
    <line x1="12" y1="22" x2="12" y2="15.5"></line>
    <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
    <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
    <line x1="12" y1="2" x2="12" y2="8.5"></line>
  </svg>
  `
})
export class CodepenComponent {}
