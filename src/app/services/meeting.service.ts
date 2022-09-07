import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Meeting } from '../Meeting';
import { MEETINGS } from '../mock-meetings';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private meetings: BehaviorSubject<Meeting[]> = new BehaviorSubject<Meeting[]>([
    {
      jam: '1 PM',
      sampai: '2 PM',
      tanggal: '1 September',
      judul: 'First Meeting',
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quaerat similique aliquid, suscipit cumque velit! Repellat quam dignissimos veritatis sit, natus consequatur dicta hic doloremque laudantium odit saepe doloribus ab!',
    },
    {
      jam: '1 PM',
      sampai: '2 PM',
      tanggal: '2 September',
      judul: 'Second Meeting',
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quaerat similique aliquid, suscipit cumque velit! Repellat quam dignissimos veritatis sit, natus consequatur dicta hic doloremque laudantium odit saepe doloribus ab!'
    },
    {
      jam: '1 PM',
      sampai: '2 PM',
      tanggal: '3 September',
      judul: 'Third Meeting',
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quaerat similique aliquid, suscipit cumque velit! Repellat quam dignissimos veritatis sit, natus consequatur dicta hic doloremque laudantium odit saepe doloribus ab!'
    },
    {
      jam: '1 PM',
      sampai: '2 PM',
      tanggal: '4 September',
      judul: 'Fourth Meeting',
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quaerat similique aliquid, suscipit cumque velit! Repellat quam dignissimos veritatis sit, natus consequatur dicta hic doloremque laudantium odit saepe doloribus ab!'
    },
    {
      jam: '1 PM',
      sampai: '2 PM',
      tanggal: '5 September',
      judul: 'Fifth Meeting',
      deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quaerat similique aliquid, suscipit cumque velit! Repellat quam dignissimos veritatis sit, natus consequatur dicta hic doloremque laudantium odit saepe doloribus ab!'
    }
  ]);
  constructor() {

  }

  // setMeetings(meeting: Meeting[]){
  //   console.log(meeting);
  // }

  getMeetings(): Observable<Meeting[]> {
    return this.meetings;
  }
}
