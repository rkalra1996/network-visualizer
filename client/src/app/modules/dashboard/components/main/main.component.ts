import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public clickedEvent: String;

  constructor() { }

  ngOnInit() {
  }
  
  childEventClicked(event: String) {
    this.clickedEvent = event;
  }

}
