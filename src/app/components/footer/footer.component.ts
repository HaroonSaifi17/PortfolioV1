import { Component } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  GithubLink: string = 'https://github.com/HaroonSaifi17'
  InstagramLink: string = 'https://www.instagram.com/mohd_haroon_saifi_/'
  TwitterLink: string = 'https://twitter.com/Haroon_Saifi_'
  LinkedinLink:string='#'
  CodepenLink:string='#'
  MailTo:string='mailto:haroonsaifi2001@gmail.com'

  constructor() {}
}
