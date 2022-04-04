import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DileepCalendar } from 'src/calendar/dileep-calendar';

@NgModule({
  declarations: [
    AppComponent,
    DileepCalendar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
