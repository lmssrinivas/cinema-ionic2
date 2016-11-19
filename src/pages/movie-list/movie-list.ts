import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the MovieList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-movie-list',
  templateUrl: 'movie-list.html'
})
export class MovieList {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MovieList Page');
  }

}
