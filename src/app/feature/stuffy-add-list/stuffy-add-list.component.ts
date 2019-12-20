import { Component, OnInit } from '@angular/core';
import { Stuffy } from 'src/app/model/stuffy.class';

@Component({
  selector: 'app-stuffy-add-list',
  templateUrl: './stuffy-add-list.component.html',
  styleUrls: ['./stuffy-add-list.component.css']
})
export class StuffyAddListComponent implements OnInit {
  //create empty array of stuffy
  stuffies: Stuffy[] = [];
  stuffy: Stuffy = new Stuffy();
  title: string = "Stuffies-R-Us"
  // id: number;
  // type: string = "";
  // color: string = "";
  // size: string = "";
  // limbs: number;

  constructor() { }

  ngOnInit() {
    this.stuffy= new Stuffy();
  }

  addStuffy(): void {
    //create instance of stuffy
    // let stuffy: Stuffy = new Stuffy(this.id, this.type, this.color, 
    //   this.size, this.limbs)
      //add stuffy
      this.stuffies.push(this.stuffy);
      //revert back to default value
      // this.id = 0;
      // this.type = "";
      // this.color="";
      // this.size="";
      // this.limbs = 0;
      this.stuffy= new Stuffy();
  }

}
