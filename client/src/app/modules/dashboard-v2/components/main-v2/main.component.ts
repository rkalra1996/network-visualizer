import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public clickedEvent: String;
  public totalTypesArray = [];
  public newNodeCreated: String;
  constructor() { }

  ngOnInit() {
  }
  
  childEventClicked(event: String) {
    this.clickedEvent = event;
  }
  childEventClicked2(event: String) {
    this.newNodeCreated = event;
  }

  sendTypes(event) {
    if (!!event && event.length > 0) {
      console.log('sending types', event);
      this.totalTypesArray = event;
    }
  }

}
