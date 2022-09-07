import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { MeetingItemComponent } from './components/meeting-item/meeting-item.component';
import { AddMeetingComponent } from './components/add-meeting/add-meeting.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpdateMeetingComponent } from './components/update-meeting/update-meeting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    ButtonComponent,
    MeetingComponent,
    MeetingItemComponent,
    AddMeetingComponent,
    NavbarComponent,
    UpdateMeetingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
