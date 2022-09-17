import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  Name: string
  boolean: boolean = false
  open_menu: string = ''
  close_line1: string = ''
  close_line2: string = ''
  openBlurBox: string = ''
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
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((url) => {
      this.Name = this.router.url.toString().substring(1, 5)
    })
    setTimeout(() => {
      this.boolean = this.Name == 'blog'
      if (this.boolean) {
        this.lightTheme()
      }
    }, 0.000001)
  }
  slide(): void {
    if (this.open_menu == '') {
      this.open_menu = 'open_nav_menu'
      this.close_line1 = 'line1_close'
      this.close_line2 = 'line2_close'
      this.openBlurBox = 'open_blur_box'
      return
    }
    this.open_menu = ''
    this.close_line1 = ''
    this.close_line2 = ''
    this.openBlurBox = ''
  }
  darkTheme(): void {
    this.Darkstyles.forEach((data) => {
      document.documentElement.style.setProperty(`--${data.name}`, data.value)
    })
  }
  lightTheme(): void {
    this.Lightstyles.forEach((data) => {
      document.documentElement.style.setProperty(`--${data.name}`, data.value)
    })
  }
  navigate(fregment: string): void {
    this.router.navigateByUrl('' + fregment)
  }
}
