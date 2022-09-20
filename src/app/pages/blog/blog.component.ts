import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  Lightstyles = [
    { name: 'dark-navy', value: 'white' },
    { name: 'navy', value: 'white' },
    { name: 'light-navy', value: 'white' },
    { name: 'lightest-navy', value: 'white' },
    { name: 'slate', value: 'black' },
    { name: 'light-slate', value: 'darkgrey' },
    { name: 'lightest-slate', value: 'grey' },
    { name: 'green', value: '#0a192f' },
  ]
  constructor() { }

  ngOnInit(): void {
    this.lightTheme()
  }

  lightTheme(): void {
    this.Lightstyles.forEach((data) => {
      document.documentElement.style.setProperty(`--${data.name}`, data.value)
    })
  }
}
