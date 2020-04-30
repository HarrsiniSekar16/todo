import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponentComponent } from './add-component/add-component.component';
import { AppComponent } from './app.component';
import { ViewallComponent } from './viewall/viewall.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
