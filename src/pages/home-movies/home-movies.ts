import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieService} from "../../providers/movies.service";
import {MovieList} from "../movie-list/movie-list";

@Component({
  selector: 'page-home-movies',
  templateUrl: 'home-movies.html',
  providers:[MovieService]

})
export class HomeMovies {

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
