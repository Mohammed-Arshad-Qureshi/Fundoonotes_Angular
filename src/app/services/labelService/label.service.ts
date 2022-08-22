import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';
import { __param, __values } from 'tslib';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  token: any;
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  createlabelservice(noteId:number,reqData:any) {
    console.log(this.token);
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.postService(`/Label/AddLabel/${noteId}`,reqData,true,headers);
  }


  getAllLabelService(){
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.getService('/Label/GetAllLabels', true, headers);
  }


  getAllLabelbyidService(labelId:number){
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.getService(`/Label/GetAllLabelsByNote/${labelId}`, true, headers);
  }
}
