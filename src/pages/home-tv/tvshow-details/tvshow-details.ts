import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MovieService} from "../../../providers/movies.service";


@Component({
  selector: 'page-tvshow-details',
  templateUrl: 'tvshow-details.html',
  providers:[MovieService]
})
export class TvshowDetails {

  tvShowDetails : any ;
  selectedShow: any ;

  constructor(public navCtrl: NavController, public movieService: MovieService, private navParams : NavParams) {
    this.selectedShow = navParams.get('show');
    this.getTvShowDetails(this.selectedShow.id);
  }


  getTvShowDetails(showId){

    this.movieService.getTvShowDetails(showId).subscribe(
      response => {
        this.tvShowDetails = response;
      }
    )
  }


}
