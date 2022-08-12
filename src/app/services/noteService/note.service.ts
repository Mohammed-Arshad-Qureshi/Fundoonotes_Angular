import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';
import { __param, __values } from 'tslib';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }

  createnoteservice(reqdata: any) {
    console.log(this.token);
    console.log(reqdata);
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer "+this.token
      })
    }
    return this.httpService.postService('/Note/AddNote', reqdata, true, headers);
  }

  getAllNotesService(){
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer "+this.token
      })
    }
    return this.httpService.getService('/Note/GetAllNotes', true, headers);
  }
}
