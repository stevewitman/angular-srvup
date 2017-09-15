import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideoService } from '../videos/videos.service';
import { VideoItem } from '../videos/video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit {
  private req: any;
  title = "Video List"
  // todayDate;
  videoList: [VideoItem];

  constructor(private _video: VideoService) { }

  ngOnInit() {
    this.req = this._video.list().subscribe(data => {
      this.videoList = data as [VideoItem];
    })
  }

  ngOnDestroy() {
    this.req.unsubscribe()
  }

}
