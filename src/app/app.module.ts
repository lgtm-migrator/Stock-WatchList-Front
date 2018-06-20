import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './routes/app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import {
	MatToolbarModule,
	MatSidenavModule,
	MatButtonModule,
	MatIconModule,
} from '@angular/material';
import { NewListComponent } from './new-list/new-list.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NewListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
	MatSidenavModule,
	MatButtonModule,
	MatIconModule,
	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
