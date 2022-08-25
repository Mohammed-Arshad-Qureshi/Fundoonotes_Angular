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

  // create note
  createnoteservice(reqdata: any) {
    console.log(this.token);
    console.log(reqdata);
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.postService('/Note/AddNote', reqdata, true, headers);
  }

  // get all notes
  getAllNotesService() {
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.getService('/Note/GetAllNotes', true, headers);
  }


  // update note
  editnoteservice(noteId: number, reqdata: any) {
    console.log("note servie", reqdata)
    console.log("note id", noteId)

    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.putService(`/Note/UpdateNote/${noteId}`, reqdata, true, headers);
  }


  // Delete or trash note
  deletenote(noteId: number) {
    console.log("note id", noteId)

    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }

    return this.httpService.deleteService(`/Note/TrashNote/${noteId}`,true,headers);
  }

  //Archive note
  archivenote(noteId: number) {
    console.log("note id", noteId)

    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }

    return this.httpService.deleteService(`/Note/ArchiveNote/${noteId}`,true,headers);
  }


  deleteforever(noteId: number) {
    console.log("note id", noteId)

    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }

    return this.httpService.deleteService(`/Note/DeleteNote/${noteId}`,true,headers);
  }


  getAllnoteColorsService(noteId:number){
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.getService(`/Note/GetALlColors/${noteId}`, true, headers);
  }

  updateColorsService(noteId:number,reqData:any){
    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.putService(`/Note/UpdateColor/${noteId}`, reqData, true, headers);

  }

}