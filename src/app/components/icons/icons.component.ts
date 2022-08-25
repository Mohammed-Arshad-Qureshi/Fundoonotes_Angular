import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
import { LabelService } from 'src/app/services/labelService/label.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TrashComponent } from '../trash/trash.component';
import { ArchiveComponent } from '../archive/archive.component';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})

export class IconsComponent implements OnInit {
  labelArray: any;
  @Input() notecard: any;
  @Output() messagetoDisplay = new EventEmitter<string>();

  constructor(private note: NoteService, private snackbar: MatSnackBar, private route: ActivatedRoute, private label: LabelService) { }
  isTrashcomponenet: boolean = false;
  isArchivecomponent: boolean = false;
  openLabel: boolean = false;
  reqData: any;
  color: boolean = false;
  colors: any;

  ngOnInit(): void {
    let comp = this.route.snapshot.component;
    if (comp == TrashComponent) {
      this.isTrashcomponenet = true;
    }

    if (comp == ArchiveComponent) {
      this.isArchivecomponent = true;
    }

    this.getallcolors();

  }

  getallcolors() {

  }

  trashnote() {
    this.note.deletenote(this.notecard.noteId).subscribe((response: any) => {
      console.log("from icon component : ---", response);
      this.messagetoDisplay.emit(response);
      if (this.notecard.isTrash == false) {
        this.snackbar.open("Note Trash Successfully", "", {
          duration: 2000,
        });
      }
      else {
        this.snackbar.open("Note restored Successfully", "", {
          duration: 2000,
        });
      }
    })
  }


  archivenote() {
    this.note.archivenote(this.notecard.noteId).subscribe((response: any) => {
      console.log(response);
      this.messagetoDisplay.emit(response);
      if (this.notecard.isArchive == false) {
        this.snackbar.open("Note Archive Successfully", "", {
          duration: 2000,
        });
      }
      else {
        this.snackbar.open("Note UnArchive Successfully", "", {
          duration: 2000,
        });
      }
    })
  }

  deletenote() {
    this.note.deleteforever(this.notecard.noteId).subscribe((response: any) => {
      console.log("from icon component : ---", response);
      this.messagetoDisplay.emit(response);
      if (response != null) {
        this.snackbar.open("Note Deleted Successfully", "", {
          duration: 2000,
        });
      }
    })
  }

  addlabel() {
    console.log("add label clicked");
    this.openLabel = true;
    this.label.getAllLabelbyidService(this.notecard.noteId).subscribe((request: any) => {
      console.log("get all label by label id ", request.data);
      this.labelArray = request.data;
      console.log("get all constructor ", this.labelArray);
      return this.labelArray;
    })

  }

  closelable($event: any) {
    console.log("icon comp", $event);
    console.log(this.notecard.noteId);
    this.openLabel = false;
    let reqData = {
      labelname: $event
    }

    this.label.createlabelservice(this.notecard.noteId, reqData).subscribe((response: any) => {
      console.log("icon comp", response);
    })
  }

  colorpalet() {
    this.color = true;
    this.note.getAllnoteColorsService(this.notecard.noteId).subscribe((request: any) => {
      console.log("all colors displayed", request.data);
      this.colors = request.data;
    })

  }
  setColor(color: any) {
    console.log("taken color", color);
    console.log(this.notecard.noteId);
    let reqData = {
      bgcolor: color,
    }

    this.note.updateColorsService(this.notecard.noteId, reqData).subscribe((response: any) => {
      console.log("all colors displayed", response);
      this.messagetoDisplay.emit(response);

    })
  }
}
