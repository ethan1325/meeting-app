import { Component, OnInit } from '@angular/core';
import { Meeting } from 'src/app/Meeting';
import { MEETINGS } from 'src/app/mock-meetings';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  meetings: Meeting[] = MEETINGS;

  constructor() { }

  ngOnInit(): void {
  }

}
