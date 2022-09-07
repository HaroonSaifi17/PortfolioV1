import { Component } from '@angular/core'

@Component({
  selector: 'app-logo',
  template: `
    <svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 84 96"
      height="40px"
      width="40px"
    >
      <title>Logo</title>
      <g transform="translate(-8.000000, -2.000000)">
        <g transform="translate(11.000000, 5.000000)">
          <path
            fill="transparent"
            stroke="#64ffda"
            stroke-width="5"
            d="M31.4,30v30v-15h15v-15v30"
          />
          <polygon
            fill="transparent"
            id="Shape"
            stroke="#64ffda"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            points="39 0 0 22 0 67 39 90 78 68 78 23"
          />
        </g>
      </g>
    </svg>
  `,
  styles: ['svg:hover{stroke:green}'],
})
export class LogoComponent {}
