import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  notesArray: any;
  constructor(private note: NoteService) { }

  ngOnInit(): void {
    console.log("Archive data");
    this.getAllNotes()
  }

  getAllNotes() {
    this.note.getAllNotesService().subscribe((request: any) => {
      console.log("request data ", request);
      this.notesArray = request.data;
      console.log("noteArray :::: ", this.notesArray);
      this.notesArray.reverse();
      this.notesArray = this.notesArray.filter((x: any) => x.isTrash == false && x.isArchive == true);
      console.log("after filtering", this.notesArray);
      return this.notesArray;


    })
  }

  receivedmessagetoDisplay($event:any){
    console.log("archive component",$event);
    this.getAllNotes();
  }

}
