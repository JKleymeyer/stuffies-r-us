import { Component, OnInit } from '@angular/core';
import { StuffyService } from 'src/app/service/stuffy.service';
import { Stuffy } from 'src/app/model/stuffy.class';
import { JsonResponse } from 'src/app/model/json-response.class';

@Component({
  selector: 'app-stuffy-list',
  templateUrl: './stuffy-list.component.html',
  styleUrls: ['./stuffy-list.component.css']
})
export class StuffyListComponent implements OnInit {
  title: string = "Stuffy-List";
  stuffies: Stuffy[] = [];
  jr: JsonResponse;

  constructor(private stuffySvc: StuffyService) { }

  ngOnInit() {
    console.log("Calling Stuffy Service List...");
    this.stuffySvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.stuffies = this.jr.data as Stuffy[];
      console.log(this.stuffies);
    });
  }

}
