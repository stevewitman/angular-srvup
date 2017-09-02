import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeImageList = [
    {image: "assets/images/nature/1.jpg", title: "Image 1", link: "videos/videos-1"},
    {image: "assets/images/nature/2.jpg", title: "Image 2", link: "videos/videos-2"},
    {image: "assets/images/nature/3.jpg", title: "Image 3", link: "videos/videos-3"},
    {image: "assets/images/nature/4.jpg", title: "Image 4", link: "videos/videos-4"},
    {image: "assets/images/nature/5.jpg", title: "Image 5", link: "videos/videos-5"},
    {image: "assets/images/nature/6.jpg", title: "Image 6", link: "videos/videos-6"},
  ]

  constructor(private router: Router) { }

  ngOnInit() {
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
