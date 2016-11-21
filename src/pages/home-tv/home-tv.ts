import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieService} from "../../providers/movies.service";
import {TvshowDetails} from "./tvshow-details/tvshow-details";

@Component({
  selector: 'page-home-tv',
  templateUrl: 'home-tv.html',
  providers:[MovieService]
})
export class HomeTv {


  genreList : any ;
  tvShowsList : any ;

  constructor(public navCtrl: NavController, public movieService: MovieService) {
    this.getGenres();
    this.getTvShows();
  }


  goToTvShowDetails(show){

    this.navCtrl.push(TvshowDetails,{
      show:show
    });
  }

  getGenres(){

    this.movieService.getTvShowsGenres().subscribe(
      response => {
        this.genreList = response.results;
      }
    )
  }

  getTvShows(){

    this.movieService.getTvShows().subscribe(
      response => {
        this.tvShowsList = response.results;
      }
    )
  }

}
