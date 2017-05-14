import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UsersPage} from '../users/users';
import {ShopPage} from '../shop/shop';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

usrPage = UsersPage; // shortcut to push, doesnt use NavController

  constructor(public navCtrl: NavController) {

  }
   
  goShop() {
    this.navCtrl.push(ShopPage);
  }

}
