import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject,Output,EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  @Output() messagetoDisplay = new EventEmitter<string>();
  notedata: any;
  editnote!: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogbox: MatDialogRef<EditNoteComponent>, private note: NoteService,private snackbar:MatSnackBar,private router:Router) { }


  ngOnInit(): void {
    this.notedata = this.data.selectednote;
  }

  closenote(title: string, description: string) {
    let noteId = this.notedata.noteId;
    let reqData = {
      title: title,
      description: description,
      bgcolor: "white"
    }

    this.note.editnoteservice(noteId,reqData).subscribe((response: any) => {
      console.log(response);
      this.messagetoDisplay.emit(response);

    })

    this.dialogbox.close();
    this.snackbar.open("Note Updated Successfully","",{
      duration:2000,
    });



  }
}