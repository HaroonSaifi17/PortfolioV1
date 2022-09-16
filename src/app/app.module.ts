import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { HeroSectionComponent } from './components/sections/hero-section/hero-section.component'
import { AboutMeComponent } from './components/sections/about-me/about-me.component'
import { ContactComponent } from './components/sections/contact/contact.component'
import { FooterComponent } from './components/footer/footer.component'
import { GithubComponent } from './components/icons/github.component'
import { CodepenComponent } from './components/icons/codepen.component'
import { InstagramComponent } from './components/icons/instagram.component'
import { LinkedinComponent } from './components/icons/linkedin.component'
import { TwitterComponent } from './components/icons/twitter.component'
import { LogoComponent } from './components/icons/logo.component';
import { ScrollEffectDirective } from './scroll-effect.directive'
import { TriangleComponent } from './components/icons/triangle.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroSectionComponent,
    AboutMeComponent,
    ContactComponent,
    FooterComponent,
    GithubComponent,
    LogoComponent,
    CodepenComponent,
    InstagramComponent,
    LinkedinComponent,
    TwitterComponent,
    ScrollEffectDirective,
    TriangleComponent,
    LoaderComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
