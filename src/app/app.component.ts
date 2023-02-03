import { Component, OnInit} from '@angular/core'
import eruda from 'eruda'
import { LoaderDelayService } from './servicesAndDirectives/loader-delay.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
constructor(loaderDelay:LoaderDelayService){
    loaderDelay.loader()
    eruda.init()
  }
  Timer: boolean = true
  ngOnInit(): void {
    setTimeout(() => { this.Timer = false },1500)
  }
}
