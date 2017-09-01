import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  title = "Video List"
  videoList = [
    { 
      name: "Item 1",
      slug: "Item1"
    },
    { 
      name: "Item 2",
      slug: "Item2"
    },
    { 
      name: "Item 2",
      slug: "Item2"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
