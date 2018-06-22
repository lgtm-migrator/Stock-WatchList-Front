import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './routes/app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import {
	MatToolbarModule,
	MatSidenavModule,
	MatButtonModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatFormFieldModule,
	MatSnackBarModule
} from '@angular/material';
import { NewListComponent } from './new-list/new-list.component';
import { HelpComponent } from './help/help.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NewListComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
	MatSidenavModule,
	MatButtonModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatFormFieldModule,
	MatSnackBarModule,
	AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
