import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';
import { __param, __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any;
  constructor(private httpService : HttpService) {
    this.token = localStorage.getItem("token")
   }


  //  registration
   registration(reqdata: any){
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpService.postService('/User/AddUser',reqdata,false,header)
   }


// login
   login(reqdata: any){
    console.log(reqdata);
    
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpService.postService('/User/LoginUser',reqdata,false,header);

   }

   //Sending_email
   email(reqdata: any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpService.postService(`/User/ForgetUser/${reqdata.Email}`, reqdata,false,header);

   }
}
