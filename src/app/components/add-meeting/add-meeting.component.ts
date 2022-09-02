import { Component, OnInit, Output } from '@angular/core';
import { Meeting } from 'src/app/Meeting';
import { MeetingService } from 'src/app/services/meeting.service';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.css']
})
export class AddMeetingComponent implements OnInit {
  jam!: string;
  sampai!: string;
  tanggal!: string;
  judul!: string;
  deskripsi!: string;
  newMeetings!: Meeting[];

  constructor(private meetingService: MeetingService) { }

  ngOnInit(): void {
    this.meetingService.getMeetings().subscribe(
      (meetings) => {
      this.newMeetings = meetings;
      }
    );
  }
  onSubmit() {
    if (!this.jam) {
      alert('Mohon isi kolom jam!');
      return;
    }
    if (!this.sampai) {
      alert('Mohon isi kolom sampai!');
      return;
    }

    if (!this.tanggal) {
      alert('Mohon isi kolom tanggal!');
      return;
    }

    if (!this.judul) {
      alert('Mohon isi kolom judul!');
      return;
    }

    if (!this.deskripsi) {
      alert('Mohon isi kolom deskripsi!');
      return;
    }
    const newMeeting: Meeting = {
      jam: this.jam,
      sampai: this.sampai,
      tanggal: this.tanggal,
      judul: this.judul,
      deskripsi: this.deskripsi,
    }  
    
    this.newMeetings.push(newMeeting);
    this.meetingService.setMeetings(this.newMeetings);
    alert('Meeting berhasil ditambahkan!')
    return;
  }
}
