 import {CUSTOM_ELEMENTS_SCHEMA, Component, NgModule} from '@angular/core';
 import { NavController} from '@ionic/angular';
 import { Geolocation, Position } from '@capacitor/geolocation';

 @Component({
    selector: 'page-mapa',
    templateUrl: 'mapa.html'
    
 })
 

 export class HomePage{
    constructor(public navCtrl: NavController, public geolocation: Geolocation){

    }


    ngAfterViewInit(){

        this.geolocationNative();
    }
 
    geolocationNative(){

        this.geolocation.getCurrentPosition((position: GeolocationPosition) =>{

            console.log;
        })
    }

}
 
