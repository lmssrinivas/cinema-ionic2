/**
 * Created by mlingolu on 11/20/16.
 */
import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {TvshowDetails} from "./tvshow-details/tvshow-details";
import {HomeTv} from "./home-tv";


@NgModule({
  declarations: [
    TvshowDetails,
    HomeTv
  ],
  imports: [
    IonicModule,
  ],

  entryComponents: [
    TvshowDetails,
    HomeTv
  ],
  providers: []
})
export class TvShowModule {
}
