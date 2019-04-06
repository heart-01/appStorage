import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GetvaluePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-getvalue',
  templateUrl: 'getvalue.html',
})
export class GetvaluePage {

  username:string; //สร้างตัวแปร username string
  studentID:string; //สร้างตัวแปร studentID string

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {

    this.storage.ready().then( //เรียกใช้งาน storage แล้ว
      ()=>{
        this.storage.get('username').then(  //รับค่าข้อมูล storage username แล้วนำมาใส่ในตัวแปร username
          (valName)=>{  //สร้างพารามิเตอร์ valName มารับแล้วมาส่งค่าให้ username
            this.username=valName;
          }
        );
      }
    );

    this.storage.ready().then( //เรียกใช้งาน storage แล้ว
      ()=>{
        this.storage.get('studentID').then(  //รับค่าข้อมูล studentID แล้วนำมาใส่ในตัวแปร username
          (valID)=>{  //สร้างพารามิเตอร์ valID มารับแล้วมาส่งค่าให้ studentID
            this.studentID=valID;
          }
        );
      }
    );



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetvaluePage');
  }

}
