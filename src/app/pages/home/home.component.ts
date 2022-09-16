import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  Timer: boolean = true
  ngOnInit(): void {
    setTimeout(() => { this.Timer = false }, 1500)
  }

}
