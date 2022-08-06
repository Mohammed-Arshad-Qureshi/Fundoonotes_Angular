import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any;
  constructor(private httpService : HttpService) {
    this.token = localStorage.getItem("token")
   }

   registration(reqdata: any){
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpService.postService('/User/AddUser',reqdata,false,header)
   }

   login(reqdata: any){
    console.log(reqdata);
    
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpService.postService('/User/LoginUser',reqdata,false,header)

   }
}
