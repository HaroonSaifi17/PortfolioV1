import { Component } from '@angular/core'

@Component({
  selector: 'app-triangle',
  template: `
<svg height="10" width="10">
<polygon points="1,1 1,9 9,5" class="triangle" />
</svg>
`,
  styles:[
`.triangle {
  fill: transparent;
  stroke: var(--green);
  stroke-width: 1;
}`]
})

export class TriangleComponent {}
