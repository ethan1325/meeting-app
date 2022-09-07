import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Meeting } from 'src/app/Meeting';
import { MEETINGS } from 'src/app/mock-meetings';

@Component({
  selector: 'app-meeting-item',
  templateUrl: './meeting-item.component.html',
  styleUrls: ['./meeting-item.component.css']
})
export class MeetingItemComponent implements OnInit {
  @Input() meeting!: Meeting;
  @Input() number!: number;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }
}
