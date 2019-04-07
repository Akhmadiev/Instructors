import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    InstructorDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
