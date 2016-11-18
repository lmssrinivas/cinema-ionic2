/**
 * Created by mlingolu on 11/18/16.
 */

import {Injectable} from "@angular/core";
import {Events}     from "ionic-angular";
import {Storage}    from "@ionic/storage";

@Injectable()
export class  UserService{

  constructor( public storage : Storage, public events :  Events) {

  }

  loginUser(userName) {

  }
}
