import { Component } from '@angular/core';
import { Meeting } from './Meeting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private meetings: Meeting[] = [];
  get data(): Meeting[] {
    return this.meetings;
  }

  set data(meetings: Meeting[]) {
    this.meetings = meetings;
  }
}
