import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-node',
  templateUrl: './create-node.component.html',
  styleUrls: ['./create-node.component.scss']
})
export class CreateNodeComponent implements OnInit {
isMenuOpened: boolean=false;
ispined: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  openMenu():void{
    this.isMenuOpened = true;
  }
  closeMenu():void{
    this.isMenuOpened = false;
  }

}
