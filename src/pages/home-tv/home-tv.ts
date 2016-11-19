import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieService} from "../../providers/movies.service";

/*
  Generated class for the HomeTv page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home-tv',
  templateUrl: 'home-tv.html',
  providers:[MovieService]

})
export class HomeTv {

  movieList : any ;
  genreList : any ;

  constructor(public navCtrl: NavController, public movieService: MovieService) {
    this.getMovies();
    this.getGenres();
  }


  getMovies(){

    this.movieService.getMovies().subscribe(
      response => {
        this.movieList = response;
      }
    )
  }

  getGenres(){

    this.movieService.getGenres().subscribe(
      response => {
        this.genreList = response.genres;
      }
    )
  }

}
