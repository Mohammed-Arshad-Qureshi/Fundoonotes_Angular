import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  msg:any;
  message:any;
  subscription: any;
  searchWord:any;
  @Input() NotesList:any;
  @Output() messagetoDisplay = new EventEmitter<string>();
  // @Output() messageDisplaytoGetAllnotes = new EventEmitter<string>();
post:any;
  constructor(public dialog: MatDialog,private dataService:DataService) { }
  ngOnInit(): void {
    this.subscription = this.dataService.searchNote.subscribe(message => {
      this.message = message;
      console.log("display card search data======", message.data[0]);
      this.searchWord=message.data[0]
      // this.getAllNotes();
    })
    console.log("this is form Display:note" ,this.NotesList);
  }

  openDialog(note:any){
    console.log(note);
   this.dialog.open(EditNoteComponent, {
    data:{
      selectednote:note
    }
    
   });
  }

  receivedmessagetoDisplay($event:any){
    this.msg=$event;
    console.log("display component:  ",this.msg);
    this.messagetoDisplay.emit(this.msg);

  }

}
