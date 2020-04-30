import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppServiceService } from './app-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddComponentComponent } from './add-component/add-component.component';
import { ViewallComponent } from './viewall/viewall.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddComponentComponent,
    ViewallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [AppServiceService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
