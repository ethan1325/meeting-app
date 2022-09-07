import { Component, OnInit } from '@angular/core';
import { Meeting } from 'src/app/Meeting';
import { MeetingService } from 'src/app/services/meeting.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-meeting',
  templateUrl: './update-meeting.component.html',
  styleUrls: ['./update-meeting.component.css']
})
export class UpdateMeetingComponent implements OnInit {
  jam!: string;
  sampai!: string;
  tanggal!: string;
  judul!: string;
  deskripsi!: string;
  newMeetings!: Meeting[];
  id!: number;
  currentMeeting!: Meeting;


  constructor(private meetingService: MeetingService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.meetingService.getMeetings().subscribe(
      (meetings) => {
        this.newMeetings = meetings;
        this.activatedRoute.paramMap.subscribe(params => {
          this.id = parseInt(params.get('id')!);
          this.currentMeeting = meetings[this.id];
        });
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
    
    this.newMeetings[this.id] = newMeeting;
    alert('Meeting berhasil diupdate!');
    this.router.navigate(['/view-meeting'])
    return;
  }

}
