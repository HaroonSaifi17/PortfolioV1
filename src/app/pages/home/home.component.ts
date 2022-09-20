import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  Darkstyles = [
    { name: 'navy', value: '#0a192f' },
    { name: 'slate', value: '#8892b0' },
    { name: 'light-navy', value: '#112240' },
    { name: 'lightest-navy', value: '#233554' },
    { name: 'slate', value: '#8892b0' },
    { name: 'light-slate', value: '#a8b2d1' },
    { name: 'lightest-slate', value: '#ccd6f6' },
    { name: 'green', value: '#64ffda' },
  ]
  constructor() { }
  ngOnInit(): void {
      this.darkTheme()
  }
  darkTheme(): void {
    this.Darkstyles.forEach((data) => {
      document.documentElement.style.setProperty(`--${data.name}`, data.value)
    })
  }
}
