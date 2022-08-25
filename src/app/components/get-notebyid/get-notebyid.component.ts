import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-notebyid',
  templateUrl: './get-notebyid.component.html',
  styleUrls: ['./get-notebyid.component.scss']
})
export class GetNotebyidComponent implements OnInit {
  notesArray:any;
  getnoteid:any;
  constructor(private note:NoteService,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe(params => {
      this.getnoteid = params['id'];
      console.log("this is the id form get not by id",this.getnoteid);
      });

      this.getAllNotes();
      
  }

  ngOnChnages():void{

  }



  getAllNotes(){
    this.note.getAllNotesService().subscribe((request:any) => {
      console.log("request data ",request);
      this.notesArray = request.data;
      console.log("noteArray",this.notesArray);
       this.notesArray.reverse();
       this.notesArray = this.notesArray.filter((x:any) => x.isTrash == false && x.isArchive == false && x.noteId == this.getnoteid);
       console.log("after filtering",this.notesArray);
      return this.notesArray;
      
    })
  }
  receivemessageTrashtoDisplay($event:any){
    this.getAllNotes();
  }
}
