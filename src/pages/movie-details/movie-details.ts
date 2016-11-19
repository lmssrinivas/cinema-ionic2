import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MovieService} from "../../providers/movies.service";


@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
  providers:[MovieService]
})
export class MovieDetails {
  movieDetails : any ;
  selectedMovie: any ;

  constructor(public navCtrl: NavController, public movieService: MovieService, private navParams : NavParams) {
    this.selectedMovie  = navParams.get('movie');
    this.getMovieDetails(this.selectedMovie.id);
  }


  getMovieDetails(movieId){

    this.movieService.getMovieDetails(movieId).subscribe(
      response => {
        this.movieDetails = response;
      }
    )
  }
}
