import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MovieService} from "../../providers/movies.service";
import {MovieDetails} from "../movie-details/movie-details";

@Component({
  selector: 'page-movie-list',
  templateUrl: 'movie-list.html',
  providers:[MovieService]
})
export class MovieList {

  movieList :any= [];
  genre :any= {};

  constructor(
    public navCtrl: NavController,
    private navParams : NavParams,
    public movieService : MovieService
  ) {
    this.genre = navParams.get('genre');
    this.getMovieList(this.genre.id);
  }

  getMovieList(genreId){

      this.movieService.getMovies(genreId).subscribe(response => {

        this.movieList = response.results;

      })
  }

  goToMovieDetails(movie){
    let data = {
      movie : movie
    };
    this.navCtrl.push(MovieDetails, data)
  }
}
