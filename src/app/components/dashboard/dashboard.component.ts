import { Component, OnInit } from '@angular/core';
import { LabelService } from 'src/app/services/labelService/label.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedMenu:any='Home';
  labelArray:any;
  value:any;
  check:any;
  canclebttn:boolean = false;
  constructor(private router:Router,private label: LabelService,private dataService:DataService) { }

  ngOnInit(): void {
    this.getalllabels();
  }

  goTo(paramText:string){
    console.log("goo to statement",paramText);
    this.selectedMenu = paramText;

    console.log(this.selectedMenu);
  }

  logout(){
   localStorage.removeItem('token');
   this.router.navigateByUrl('/login');
  }

  referesh(){
      window.location.reload();
    }

    getalllabels() {
      this.label.getAllLabelService().subscribe((request: any) => {
        console.log("response ", request);
         this.labelArray = request.data;
        console.log("get all label data from dashboard ",this.labelArray);
        return this.labelArray;
      })
    }

    searchTitle(event:any){
      console.log("input in search field == typing",event.target.value);
      this.check = event.target.value;
      if(this.check != '')
      {
        this.canclebttn = true;
      }
      else{
        this.canclebttn = false;
      }
      this.value = this.check;
      let Ddata={
        type:'search',
        data:[this.value]
      }
      this.dataService.changeData(Ddata)
    }

    cleardata(){
      this.check = '';
      this.canclebttn = true;

    }
}
