import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  open_menu: string = '';
  close_line1: string = '';
  close_line2: string = '';
  openBlurBox: string = '';

  constructor() {}

  ngOnInit(): void {}
  oc(): void {
    if (this.open_menu == '') {
      this.open_menu = 'open_nav_menu';
      this.close_line1 = 'line1_close';
      this.close_line2 = 'line2_close';
      this.openBlurBox = 'open_blur_box';
      return;
    }

    this.open_menu = '';
    this.close_line1 = '';
    this.close_line2 = '';
    this.openBlurBox = '';
  }
}
