import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';

const appRoute:Routes=[
  {
    path:"",component:ViewcontactComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
