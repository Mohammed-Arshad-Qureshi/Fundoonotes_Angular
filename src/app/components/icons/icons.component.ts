import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notecard: any;
  id!: number;
  constructor(private note:NoteService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.notecard;
  }

  trashnote() {
    this.note.deletenote(this.notecard.noteId).subscribe((response: any) => {
      console.log(response);
      if(response != null)
      {
        this.snackbar.open("Note Deleted Successfully","",{
          duration:2000,
        });
      }
    })
  }


  archivenote(){
    this.note.archivenote(this.notecard.noteId).subscribe((response: any) => {
      console.log(response);
      if(response != null)
      {
        this.snackbar.open("Note Archive Successfully","",{
          duration:2000,
        });
      }
    })
  }
}
