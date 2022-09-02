import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMeetingComponent } from './components/add-meeting/add-meeting.component';
import { MeetingComponent } from './components/meeting/meeting.component';
const routes: Routes = [
  { path: '', redirectTo: 'add-meeting', pathMatch: 'full' },
  { path: 'view-meeting', component: MeetingComponent },
  { path: 'add-meeting', component: AddMeetingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
