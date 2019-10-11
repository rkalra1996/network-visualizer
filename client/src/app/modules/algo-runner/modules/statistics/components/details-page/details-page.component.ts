import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'algo-runner-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  name: any;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(map(p => p.id)).subscribe(data=>{
      this.initializeData(data);
    })
  }
  initializeData(data) {
    this.name=data;
  }

}
