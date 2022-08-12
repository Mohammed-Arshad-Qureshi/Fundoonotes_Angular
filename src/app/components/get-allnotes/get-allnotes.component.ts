import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-allnotes',
  templateUrl: './get-allnotes.component.html',
  styleUrls: ['./get-allnotes.component.scss']
})
export class GetAllnotesComponent implements OnInit {
  notesArray: any;
  message: any;
  public subscription: any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes(){
    this.note.getAllNotesService().subscribe((request:any) => {
      console.log("request data ",request);
      this.notesArray = request.data;
      console.log("noteArray",this.notesArray);
       this.notesArray.reverse();
      console.log(this.notesArray.reverse());
      return this.notesArray;
    })
  }

}
