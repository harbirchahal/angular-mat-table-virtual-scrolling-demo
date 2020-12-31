import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './shared';
import { PeopleTableComponent, PeopleViewportComponent } from './components';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    PeopleTableComponent,
    PeopleViewportComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
