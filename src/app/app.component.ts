import { Component , OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title:string = 'Haroon Saifi'
   Timer:boolean= true
  ngOnInit(): void {
      setTimeout(()=>{this.Timer=false},1000)
  }
}
