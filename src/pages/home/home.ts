import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { GetvaluePage } from '../getvalue/getvalue';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage:Storage) {
    storage.ready().then( //เรียกใช้งาน storage แล้ว
      ()=>{
      //set data to local storage
      storage.set("username",'Siwat.1');
      storage.set("studentID",'123456789');
      }
    );   
  }

  gotoGetValue(){
    this.navCtrl.push(GetvaluePage);
  }

}
