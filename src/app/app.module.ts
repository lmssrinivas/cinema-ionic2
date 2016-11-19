import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {TabsPage} from '../pages/tabs/tabs';
import {TeamDetail} from "../pages/team-detail/team-detail.page";
import {Teams} from "../pages/teams/teams.page";
import {MoviesPage} from "../pages/movies/movies.page";
import {HomeTv} from "../pages/home-tv/home-tv";
import {Profile} from "../pages/profile/profile";

@NgModule({
  declarations: [
    MyApp,
    MoviesPage,
    HomeTv,
    TeamDetail,
    Teams,
    Profile,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MoviesPage,
    HomeTv,
    TeamDetail,
    Teams,
    Profile,
    TabsPage
  ],
  providers: []
})
export class AppModule {
}
