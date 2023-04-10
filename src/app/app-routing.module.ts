import { NgModule } from '@angular/core';
import { RouterModule, Routes ,ExtraOptions } from '@angular/router';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
  {path:'',component:HomeComponent},
  {path:'blog',component:BlogComponent},
  {path:'blog/:id',component:BlogPageComponent}
  ]},
  {path:'login',component:AdminLoginComponent},
  {path:'**',redirectTo:''},
];
const extraOptions:ExtraOptions ={
  scrollPositionRestoration:'enabled',
  anchorScrolling:'enabled'
}

@NgModule({
  imports: [RouterModule.forRoot(routes,extraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
