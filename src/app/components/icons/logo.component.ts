import { Component } from '@angular/core'

@Component({
  selector: 'app-logo',
  template: `
    <svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 84 96"
    >
      <g transform="translate(-8.000000, -2.000000)">
        <g transform="translate(11.000000, 5.000000)">
          <path class="path"
            d="M31.4,30v30v-15h15v-15v30"
          />
          <polygon class="polygon"
            fill="transparent"
            points="39 0 0 22 0 67 39 90 78 68 78 23"
          />
        </g>
      </g>
    </svg>
  `,
  styles:[`
#logo{
   height:40px;
   width:40px;
}
.path{
  fill:transparent;
  stroke:var(--green);
  stroke-width:5;
}
.polygon{
  fill:transparent;
  stroke:var(--green);
  stroke-width:5;
  stroke-linecap:round;
  stroke-linejoin:round;
}
`]
})
export class LogoComponent {}
