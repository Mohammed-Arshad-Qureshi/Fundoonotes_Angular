import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {

  @Input() NotesList:any;
  // @Output() messageDisplaytoGetAllnotes = new EventEmitter<string>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("this is form Display:note" ,this.NotesList);
  }

}
