import { Component, OnInit } from '@angular/core';
import { CouponsMethodsService } from '../../../services/coupons-methods.service'
import { coupon } from '../coupon'
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {



  public coupon: coupon = new coupon(0, "", "", "", 0, 0, "", 0, "")
  public coupon2: coupon = new coupon(0, "", "", "", 0, 0, "", 0, "")


  constructor(private _coupserv: CouponsMethodsService,
    private _activatedroute: ActivatedRoute,
    private _http: Http) { }


  id: number;
  show: boolean = false;

  /**
 * @ngdoc method
 * @name swalwarning()
 * @param err: any 
 * @description
 * This is method gets a err: any
 *  and display a specific alert accordingly
 **/
  swalwarning(err: any) {
    Swal({
      type: 'error',
      title: 'Oops...',
      text: err + '!',
      footer: '<a href>Why do I have this issue?</a>'
    })
  }

  /**
* @ngdoc method
* @name swalDone()
* @param title: string 
* @param text : string
* @description
* This is method gets a  title: string & text : string
*  and dispaly a specific alert accordingly
**/
  swalDone(title: string, text: string) {
    if (title.length == 0) {
      Swal({
        title: 'done!',
        text: '',
        animation: false
      })
    } else {
      Swal({
        title: title,
        text: text,
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false
      })
    }
  }

  /**
* @ngdoc Async method
* @name getcoupon()
* @param id:number
* @description
* This is method gets ID (number)  and by fire an "ajax" ("get"-method),
* sends the ID over Http protocol.
* Then by async (Observable) method named "subscribe" catch  the response 
* and put it into local object.
**/
  getcoupon(id: number) {
    if (!(this.coupon2.id > 0)) {
      this.swalwarning("Wrong ID");
      this._http.get("http://localhost:8080/company/getcoupon/" + id).
        subscribe(
          // handle with the returned result
          (resp) => {
            this.swalDone("", "");
            this.coupon2 = resp.json();
          }, (err) => {
            console.log(err);
            this.swalwarning(err._body)
          }
        );
    }
    this.initcoup();
  }

  /**
 * @ngdoc method
 * @name initcoup()
 * @description
 * This method initial attributes of coupon object
**/
  initcoup() {
    this.coupon2.id = 0;
    this.coupon2.title = '';
    this.coupon2.start_date = '';
    this.coupon2.end_date = '';
    this.coupon2.amount = 0;
    this.coupon2.massage = '';
    this.coupon2.price = 0;
    this.coupon2.image = '';
    this.coupon2.type = 0;

  }

  /**
   * @ngdoc method
   * @name updatecoup()
   * @param coupon:coupon
   * @description
   * This is method act as transfer station, it gets a coupon
   *  and apply other method on the service , named "updatecoupon"
   **/
  updatecoup(coupon2: coupon) {
    this._coupserv.updatecoupon(this.coupon2)

  }


  ngOnInit() {
    this.id = this._activatedroute.snapshot.params['id'];
    console.log(this.id)
    if (this.id > 0 && this.id != null) {
      this.getcoupon(this.id);
      this.coupon2.id = this.id;
      this.show = true;
    }


  }

}
