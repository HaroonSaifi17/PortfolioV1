import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { HeroSectionComponent } from './components/hero-section/hero-section.component'
import { AboutMeComponent } from './components/about-me/about-me.component'
import { ContactComponent } from './components/contact/contact.component'
import { FooterComponent } from './components/footer/footer.component'
import { BlogFooterComponent } from './components/blog-footer/blog-footer.component'
import { GithubComponent } from './icons/github.component'
import { CodepenComponent } from './icons/codepen.component'
import { InstagramComponent } from './icons/instagram.component'
import { LinkedinComponent } from './icons/linkedin.component'
import { TwitterComponent } from './icons/twitter.component'
import { LogoComponent } from './icons/logo.component';
import { ScrollEffectDirective } from './servicesAndDirectives/scroll-effect.directive'
import { TriangleComponent } from './icons/triangle.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogHeroSectionComponent } from './components/blog-hero-section/blog-hero-section.component';
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
    BlogComponent,
    BlogHeroSectionComponent,
    BlogFooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
