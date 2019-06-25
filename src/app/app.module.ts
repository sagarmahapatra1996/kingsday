import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatToolbarModule, MatCardModule, MatMenuModule,
  MatSelectModule, MatProgressBarModule,
  MatIconModule, MatExpansionModule, MatInputModule, MatFormFieldModule, MatOptionModule} from '@angular/material';
import { VideosComponent } from './videos/videos.component';
import { ImagesComponent } from './images/images.component';
import { HeaderComponent } from './header/header.component';
import { TimerComponent } from './timer/timer.component';
import { HomeComponent } from './home/home.component';
import { HeaderLiveComponent } from './header-live/header-live.component';
import { WishesComponent } from './wishes/wishes.component';
import { HeaderRedirectHomeComponent } from './header-redirect-home/header-redirect-home.component';
import { AuthguardService } from './authguard.service';
import { LoginActivate } from './timer/canroute';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    ImagesComponent,
    HeaderComponent,
    TimerComponent,
    HomeComponent,
    HeaderLiveComponent,
    WishesComponent,
    HeaderRedirectHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatOptionModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule, EmbedVideo.forRoot()
  ],
  providers: [AuthguardService, LoginActivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
