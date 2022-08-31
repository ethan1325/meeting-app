import { Component, OnInit } from '@angular/core';
import { Meeting } from 'src/app/Meeting';

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

  constructor() { }

  ngOnInit(): void {
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
    const newMeeting = {
      jam: '1 PM',
      sampai: '2 PM',
      tanggal: '1 September',
      judul: 'First Meeting',
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quaerat similique aliquid, suscipit cumque velit! Repellat quam dignissimos veritatis sit, natus consequatur dicta hic doloremque laudantium odit saepe doloribus ab!',
    }
    return;
  }
}
