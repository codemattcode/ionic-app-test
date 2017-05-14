import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
    selector: 'page-user',
    template: `
        <ion-header>
            <ion-navbar>
                <ion-title>
                    {{name}}
                </ion-title>
            </ion-navbar>
        </ion-header>   
        <ion-content padding>
            <p>Hi, I'm {{name}}</p>  
            <button ion-button (click)="goBack()">Confirm</button> 
        </ion-content>
    `
})

export class UserPage implements OnInit {
    name:string;
    constructor(
        private navParams: NavParams,
        private navCtrl: NavController
        ){}

    ngOnInit(){
        this.name = this.navParams.get('userName');
    }
    goBack(){
        this.navCtrl.popToRoot();
    }
}