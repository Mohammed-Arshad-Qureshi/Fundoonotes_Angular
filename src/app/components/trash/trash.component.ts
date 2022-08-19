import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';


@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  notesArray:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }


  getAllNotes() {
    this.note.getAllNotesService().subscribe((request: any) => {
      console.log("request data ", request);
      this.notesArray = request.data;
      console.log("noteArray :::: ", this.notesArray);
      this.notesArray.reverse();true
      this.notesArray = this.notesArray.filter((x: any) => x.isTrash == true);
      console.log("after filtering", this.notesArray);
      return this.notesArray;


    })
  }

  receivedmessagetoDisplay($event:any){
    console.log("trash component",$event);
    this.getAllNotes();
  }


}
