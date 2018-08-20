import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { Service } from './home.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  latestPosts: any[];

  constructor(public navCtrl: NavController, public _service: Service) {
    this._service.fetchLatestBlogPost().subscribe(response => {
      this.latestPosts = response.posts;
    })
  }

  openDetails(postId: number) {
    this.navCtrl.push('post-detail', { postId });
  }

}
