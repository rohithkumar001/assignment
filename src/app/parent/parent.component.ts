import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-data';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  itemsList: Item[] = ITEMS;
  type:any;
  formData:FormGroup;
  desc: any;
  ite:any;
  arraydata:any[]=[];

    constructor() {
      this.itemsList = ITEMS;
      this.type = "Minor";
     }


  
  ngOnInit(): void {
    this.formData = new FormGroup({
      desc : new FormControl(),
      type : new FormControl(),
      ite : new FormControl()
  });
  }
  onSubmit(){ 

    console.log(this.formData.value);
    this.desc  = this.formData.value.desc
     this.type = this.formData.value.type
     this.ite = this.formData.value.item
     this.arraydata.push([this.formData.value.desc,this.formData.value.type,this.formData.value.ite])
     console.log(this.arraydata)
   }

}
