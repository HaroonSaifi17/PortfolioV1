import { Component } from '@angular/core';
import { LoaderDelayService } from 'src/app/loader-delay.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})

export class HeroSectionComponent {
  loaderDelay:number
  loaderDelay1:string
  loaderDelay2:string
  loaderDelay3:string
  loaderDelay4:string

constructor(loaderDelay:LoaderDelayService){
  this.loaderDelay=loaderDelay.loaderDelay;
  this.loaderDelay1= this.loaderDelay + 100 + 'ms'
  this.loaderDelay2= this.loaderDelay + 200 + 'ms'
  this.loaderDelay3= this.loaderDelay + 300 + 'ms'
  this.loaderDelay4= this.loaderDelay + 400 + 'ms'
  }
}
