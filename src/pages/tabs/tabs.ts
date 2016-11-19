import { Component } from '@angular/core';

import {Teams} from "../teams/teams.page";
import {TeamDetail} from "../team-detail/team-detail.page";
import {HomeTv} from "../home-tv/home-tv";
import {Profile} from "../profile/profile";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTv: any = HomeTv;
  teams: any = Teams;
  teamDetails: any = TeamDetail;
  profile: any = Profile;

  constructor() {

  }
}
