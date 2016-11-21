import { Component } from '@angular/core';

import {TeamDetail} from "../team-detail/team-detail.page";
import {HomeMovies} from "../home-movies/home-movies";
import {Profile} from "../profile/profile";
import {HomeTv} from "../home-tv/home-tv";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeMovies: any = HomeMovies;
  homeTv: any = HomeTv;
  teamDetails: any = TeamDetail;
  profile: any = Profile;

  constructor() {

  }
}
