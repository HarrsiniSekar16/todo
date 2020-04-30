import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { IResponse } from '../IResponse';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.scss']
})

// class to view all the components and get the necesary methods
export class ViewallComponent implements OnInit {
  @Input() showBtn: any;
  @Output() show = new EventEmitter<string>();
  constructor(private service: AppServiceService) { 
  }
  viewall: any = [];
  expandView: boolean = false;
  view: any;
  ngOnInit(): void {
    this.getAlltodo();
  }
  // method to get all the todo
  getAlltodo() {
    this.service.get('TD-All').subscribe(x => {
    this.viewall = x;
    this.viewall.reverse();
    });
  }
  // method to emit the values
  emit() {
    this.show.emit("View");
  }
  // method to view the entire details
  expand(x: any) {
    this.expandView = true;
    this.view = x;
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  spanClick(){
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  // method to delete the todo
  delete(x: IResponse) {
    event.stopPropagation();
    let arr = [];
    arr.push(x.id);
    this.service.delete<IResponse>('TD-Del', arr).subscribe(y=>{
      this.getAlltodo();
    });
  }
  // method to complete the todo
  complete(x: any) {
    event.stopPropagation();
    let arr = [];
    arr.push(x.id);
    let body = Object(x);
    body.isCompleted = true;
    this.service.put<IResponse>('TD-Put', body, arr).subscribe(y =>{
      body.modifiedDate = y.modifiedDate;
    });
  }
  // method to incomplete the todo
  inComplete(x: any) {
    event.stopPropagation();
    let arr = [];
    arr.push(x.id);
    let body = Object(x);
    body.isCompleted = false;
    this.service.put<IResponse>('TD-Put', body, arr).subscribe(y =>{
      body.modifiedDate = y.modifiedDate;
    });
  }
}
