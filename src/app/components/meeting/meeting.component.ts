import { Component, OnInit } from '@angular/core';  
import { MeetingService } from 'src/app/services/meeting.service';
import { Meeting } from 'src/app/Meeting';
import { MEETINGS } from 'src/app/mock-meetings';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  meetings: Meeting[] = [];

  constructor(private meetingService: MeetingService) { }

  ngOnInit(): void {
    this.meetingService.getMeetings().subscribe((meetings) => this.meetings = meetings);
  }

}
