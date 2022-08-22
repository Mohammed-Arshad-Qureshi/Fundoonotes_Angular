import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addlabel',
  templateUrl: './addlabel.component.html',
  styleUrls: ['./addlabel.component.scss']
})
export class AddlabelComponent implements OnInit {
  data:any;
  val:any;
  @Output() messagetoDisplay = new EventEmitter<string>();
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
  }

  closelabel(){
    console.log(this.data);
    this.messagetoDisplay.emit(this.data);
  }
}
