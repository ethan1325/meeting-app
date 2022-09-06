import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Meeting } from '../Meeting';
import { MEETINGS } from '../mock-meetings';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private meetings: BehaviorSubject<Meeting[]> = new BehaviorSubject<Meeting[]>([]);
  constructor() { 

  }

  // setMeetings(meeting: Meeting[]){
  //   console.log(meeting);
  // }

  getMeetings(): Observable<Meeting[]> {
    return this.meetings;
  }
}
