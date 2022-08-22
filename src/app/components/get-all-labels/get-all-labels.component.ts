import { Component, OnInit } from '@angular/core';
import { LabelService } from 'src/app/services/labelService/label.service';
@Component({
  selector: 'app-get-all-labels',
  templateUrl: './get-all-labels.component.html',
  styleUrls: ['./get-all-labels.component.scss']
})
export class GetAllLabelsComponent implements OnInit {
  constructor(private label: LabelService) { }
  labelArray:any;
  ngOnInit(): void {
    this.getalllabels();
    console.log("get all constructor ",this.labelArray);
  }

  getalllabels() {
    this.label.getAllLabelService().subscribe((request: any) => {
      console.log("get all label data ", request);
       this.labelArray = request.data;
      console.log("get all constructor ",this.labelArray);
      return this.labelArray;
    })

  }
}