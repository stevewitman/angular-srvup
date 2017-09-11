import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { VideoService } from '../videos/videos.service';
import { VideoItem } from '../videos/video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VideoService]
})
export class HomeComponent implements OnInit {

  private req: any;

  homeImageList: [VideoItem] = [] as [VideoItem]

  constructor(private http: Http, private router: Router, private _video: VideoService) { }

  ngOnInit() {
    this.req = this._video.list().subscribe(data => {
      data.filter(item => {
        if (item.featured) {
          let dataItem = item;
          this.homeImageList.push(item);
        }
      })
    })
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

  preventNormal(event: MouseEvent, image: any) {
    if (!image.prevented) {
      event.preventDefault();
      // image.setAttribute("href", "/videos");
      image.link = "/videos"
      image.prevented = true;
      this.router.navigate(['./videos'])
    }
  }

}
