import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroSectionComponent } from './components/sections/hero-section/hero-section.component';
import { AboutMeComponent } from './components/sections/about-me/about-me.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { GithubComponent } from './components/icons/github.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroSectionComponent,
    AboutMeComponent,
    ContactComponent,
    FooterComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
