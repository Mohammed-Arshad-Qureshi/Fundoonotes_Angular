import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-allnotes',
  templateUrl: './get-allnotes.component.html',
  styleUrls: ['./get-allnotes.component.scss']
})
export class GetAllnotesComponent implements OnInit {
  notesArray: any;
  message: any;
  public subscription: any;
  constructor(private note:NoteService,private router:Router) { }

  ngOnInit(): void {
    console.log("hello world");
    this.getAllNotes();
  }

  getAllNotes(){
    this.note.getAllNotesService().subscribe((request:any) => {
      console.log("request data ",request);
      this.notesArray = request.data;
      console.log("noteArray",this.notesArray);
       this.notesArray.reverse();
       this.notesArray = this.notesArray.filter((x:any) => x.isTrash == false && x.isArchive == false);
       console.log("after filtering",this.notesArray);
      return this.notesArray;
      
    })
  }

  receivemessageTrashtoDisplay($event:any){
    this.message = $event;
    console.log("get all notes component",this.message);
    this.getAllNotes();

  }

  messageupdate($event:any){
    this.getAllNotes();
  }

}
