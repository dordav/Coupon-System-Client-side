import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { Http } from '@angular/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _router: Router, private _http : Http) { }


  /**
 * @ngdoc method
 * @name logout()
 * @description
 * This method will display a boolean question to the user.
 * according to the answer this method will invoke an async ("get"-method) method,
 * and redirect the user to the login page or cancel the execution of "logout" process
 **/
  logout(){
    Swal({
      title: 'Are you sure you want to logout?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.value) {
        this._http.get("http://localhost:8080/customer/logout")
        .subscribe(
        (resp )=>{
          console.log(resp.json());
        },(err)=>{
          console.log(err.json());
        }
        )  
          window.location.href = 'http://localhost:8080/login.html';
          
        }
    })

  }

  ngOnInit() {
  }

}
