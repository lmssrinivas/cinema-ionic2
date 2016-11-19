import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {TabsPage} from '../pages/tabs/tabs';
import {TeamDetail} from "../pages/team-detail/team-detail.page";
import {Teams} from "../pages/teams/teams.page";
import {HomeTv} from "../pages/home-tv/home-tv";
import {Profile} from "../pages/profile/profile";
import {MovieList} from "../pages/movie-list/movie-list";
import {MovieDetails} from "../pages/movie-details/movie-details";

@NgModule({
  declarations: [
    MyApp,
    HomeTv,
    MovieList,
    MovieDetails,
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
    HomeTv,
    MovieList,
    MovieDetails,
    TeamDetail,
    Teams,
    Profile,
    TabsPage
  ],
  providers: []
})
export class AppModule {
}
