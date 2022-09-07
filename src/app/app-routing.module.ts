import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMeetingComponent } from './components/add-meeting/add-meeting.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { UpdateMeetingComponent } from './components/update-meeting/update-meeting.component';
const routes: Routes = [
  { path: '', redirectTo: 'add-meeting', pathMatch: 'full' },
  { path: 'view-meeting', component: MeetingComponent },
  { path: 'add-meeting', component: AddMeetingComponent },
  { path: 'view-meeting/update-meeting/:id', component: UpdateMeetingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
