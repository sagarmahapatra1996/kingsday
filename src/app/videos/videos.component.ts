import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  iFrameHtml: any;
  danceHTML: any;
  memoriesHTML: any;
  infyDanceHTML: any;
  danceYouTubeUrl = 'https://www.youtube.com/watch?v=G6UNut9tbMc';
  danceShowUrl = 'https://www.youtube.com/watch?v=Uoag38pH_IY';
  memoriesUrl = 'https://www.youtube.com/watch?v=iGeFwSWjLaw';
  infyDanceUrl = 'https://www.youtube.com/watch?v=V8rb5T07Abg';
  ngOnInit() {
  }
  constructor(private embedService: EmbedVideoService) {
    this.iFrameHtml = this.embedService.embed(this.danceYouTubeUrl, {
      query: { portrait: 0, color: '333' },
      attr: { width: 800, height: 400 }
    });
    this.danceHTML = this.embedService.embed(this.danceShowUrl, {
      query: { portrait: 0, color: '333' },
      attr: { width: 800, height: 400 }
    });
    this.memoriesHTML = this.embedService.embed(this.memoriesUrl, {
      query: { portrait: 0, color: '333' },
      attr: { width: 800, height: 400 }
    });
    this.infyDanceHTML = this.embedService.embed(this.infyDanceUrl, {
      query: { portrait: 0, color: '333' },
      attr: { width: 800, height: 400 }
    });
  }
}
