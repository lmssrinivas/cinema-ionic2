import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import {TeamDetail} from "../pages/team-detail/team-detail.page";
import {Teams} from "../pages/teams/teams.page";
import {Tournaments} from "../pages/tournaments/tournaments.page";

@NgModule({
  declarations: [
    MyApp,
    TeamDetail,
    Teams,
    Tournaments,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TeamDetail,
    Teams,
    Tournaments,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
