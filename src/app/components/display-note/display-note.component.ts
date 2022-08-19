import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EditNoteComponent } from '../edit-note/edit-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  msg:any;
  @Input() NotesList:any;
  @Output() messagetoDisplay = new EventEmitter<string>();
  // @Output() messageDisplaytoGetAllnotes = new EventEmitter<string>();
post:any;
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
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
