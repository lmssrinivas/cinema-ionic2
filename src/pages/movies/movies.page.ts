/**
 * Created by mlingolu on 11/18/16.
 */
import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {MovieService} from "../../providers/movies.service";

@Component({
  selector: 'movies',
  templateUrl: 'movies.page.html',
  providers:[MovieService]
})

export class MoviesPage {

  movieList : any ;

  constructor(public navCtrl: NavController, public movieService: MovieService) {
    this.getMovies();
  }


  getMovies(){

    this.movieService.getMovies().subscribe(
      response => {
          this.movieList = response;
      }
    )
  }
}
