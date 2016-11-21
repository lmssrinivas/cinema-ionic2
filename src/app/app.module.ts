import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {TabsPage} from '../pages/tabs/tabs';
import {TeamDetail} from "../pages/team-detail/team-detail.page";
import {HomeMovies} from "../pages/home-movies/home-movies";
import {Profile} from "../pages/profile/profile";
import {MovieList} from "../pages/movie-list/movie-list";
import {MovieDetails} from "../pages/movie-details/movie-details";
import {TvShowModule} from "../pages/home-tv/tv-show.module";

@NgModule({
  declarations: [
    MyApp,
    HomeMovies,
    MovieDetails,
    MovieList,
    TeamDetail,
    Profile,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    TvShowModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeMovies,
    MovieDetails,
    MovieList,
    TeamDetail,
    Profile,
    TabsPage
  ],
  providers: []
})
export class AppModule {
}
