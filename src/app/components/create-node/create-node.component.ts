import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/noteService/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-node',
  templateUrl: './create-node.component.html',
  styleUrls: ['./create-node.component.scss']
})
export class CreateNodeComponent implements OnInit {
  createnoteForm!: FormGroup;
  submitted = false;
  isMenuOpened: boolean = false;
  ispined: boolean = false;
  valdata:any;
  constructor(private formBuilder: FormBuilder, private note: NoteService,private snackbar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.createnoteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      bgcolor: 'green'

    })
  }

  openMenu(): void {
    this.isMenuOpened = true;
  }
  closeMenu(): void {
    this.isMenuOpened = false;
  }

  onSubmit() {
    console.log("create note",this.createnoteForm.value)

    let reqData = {
      title: this.createnoteForm.value.title,
      description: this.createnoteForm.value.description,
      bgcolor : this.createnoteForm.value.bgcolor
    }

    this.note.createnoteservice(reqData).subscribe((response:any)=>{
      console.log("dsfdsf",response);
      this.valdata = response;
      console.log(this.valdata);
    })
    
  }

}
