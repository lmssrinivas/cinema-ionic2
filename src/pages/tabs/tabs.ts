import { Component } from '@angular/core';

import {Teams} from "../teams/teams.page";
import {TeamDetail} from "../team-detail/team-detail.page";
import {Tournaments} from "../tournaments/tournaments.page";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Teams;
  tab2Root: any = TeamDetail;
  tab3Root: any = Tournaments;

  constructor() {

  }
}
