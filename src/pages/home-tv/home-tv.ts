import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieService} from "../../providers/movies.service";
import {MovieList} from "../movie-list/movie-list";

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
    this.getGenres();
  }


  goToMovies(genre){

    let data = {
      genre : genre
    };
    this.navCtrl.push(MovieList,data);
  }

  getGenres(){

    this.movieService.getGenres().subscribe(
      response => {
        this.genreList = response.genres;
      }
    )
  }

}
