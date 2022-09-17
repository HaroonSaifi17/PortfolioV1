import { NgModule } from '@angular/core';
import { RouterModule, Routes ,ExtraOptions } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'blog',component:BlogComponent}
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
