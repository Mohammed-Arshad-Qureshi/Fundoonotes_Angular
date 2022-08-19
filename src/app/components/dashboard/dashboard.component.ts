import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedMenu:any='Home';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goTo(paramText:string){
    this.selectedMenu = paramText;
    console.log(this.selectedMenu);
  }

  logout(){
   localStorage.removeItem('token');
   this.router.navigateByUrl('/login');
  }
}
