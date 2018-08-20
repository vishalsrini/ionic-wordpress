import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from '../home/home.service';

import * as sparkmd5 from 'spark-md5';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  authors: any;

  constructor(public navCtrl: NavController, private _service: Service) {
    this._service.fetchAuthorDetails().subscribe(response => {
      this.authors = response.authors;
    })
  }

  getAuthor(slug: string) {
    let hashcode: any = sparkmd5.hash(slug);
    return 'https://www.gravatar.com/avatar/'+hashcode +'?d=identicon';
  }

}
