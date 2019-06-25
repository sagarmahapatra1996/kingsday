import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { ImagesComponent } from './images/images.component';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { HomeComponent } from './home/home.component';
import { WishesComponent } from './wishes/wishes.component';
import { LoginActivate } from './timer/canroute';

const routes: Routes = [
  { path: 'videos', component: VideosComponent, canActivate: [LoginActivate] },
  { path: 'images', component: ImagesComponent, canActivate: [LoginActivate] },
  { path: 'home', component: HomeComponent, canActivate: [LoginActivate] },
  { path: 'wishes', component: WishesComponent, canActivate: [LoginActivate] },

  { path: '', component: TimerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
