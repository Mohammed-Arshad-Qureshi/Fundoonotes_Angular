import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/noteService/note.service';

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
  constructor(private formBuilder: FormBuilder, private note: NoteService) { }

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
    console.log(this.createnoteForm.value)

    let reqData = {
      title: this.createnoteForm.value.title,
      description: this.createnoteForm.value.description,
      bgcolor : this.createnoteForm.value.bgcolor
    }

    this.note.createnoteservice(reqData).subscribe((response:any)=>{
      console.log(response);
    })
  }

}
