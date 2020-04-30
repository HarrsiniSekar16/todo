import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.scss']
})

// Add component class to declare all the methods required
export class AddComponentComponent implements OnInit {
  @Input() showBtn: any;
  @Output() show = new EventEmitter<string>();
  currentDate: string;
  
  constructor(private service: AppServiceService) { }
  addTodoForm: any;

  //initialises the form group and current date

  ngOnInit(): void {
    this.addTodoForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      dueDate: new FormControl(''),
      dueTime: new FormControl('')
    });
    this.currentDate = new Date().toISOString().split("T")[0];
  }
  // emits the value 
  emit() {
    this.show.emit("Add");
  }
  // Method to save the added todo
  save() {
    let date = this.addTodoForm.get('dueDate').value;
    let time = this.addTodoForm.get('dueTime').value;
    let UtcDate, dateSave, save;
    if (date) {
      UtcDate = new Date(date);
      if (time) {
        UtcDate.setHours(time.toString().substring(0, 2));
        UtcDate.setMinutes(time.toString().substring(3, 5));
        save = 1;
      }
      dateSave = UtcDate.toISOString();
    }
    let body = {
      title: this.addTodoForm.get('title').value,
      description: this.addTodoForm.get('description').value,
      dueDate:dateSave 
    };
    if(body.title != null && body.description != null && body.dueDate != null && save == 1 )  {
      this.service.post('TD-Post',body).subscribe(y =>{
        this.emit();
      });
    }
   
  }
}
