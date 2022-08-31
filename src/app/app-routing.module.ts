import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMeetingComponent } from './components/add-meeting/add-meeting.component';
import { MeetingComponent } from './components/meeting/meeting.component';
const routes: Routes = [
  { path: 'add-meeting', component: AddMeetingComponent },
  { path: 'view-meeting', component: MeetingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
