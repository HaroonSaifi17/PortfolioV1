import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class LoaderDelayService {
  loaderDelay: number = 2000
  loaderDelay1: string = '2400ms'
  constructor() {}
  loader(): void {
    setTimeout(() => {
      this.loaderDelay = 0
    }, 3000)
  }
}
