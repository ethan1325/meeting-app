import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { MeetingItemComponent } from './components/meeting-item/meeting-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    ButtonComponent,
    MeetingComponent,
    MeetingItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
