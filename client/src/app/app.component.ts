import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'network-visualizer';
  public clickedEvent: String;

  childEventClicked(event: String) {
    this.clickedEvent = event;
  }
}
