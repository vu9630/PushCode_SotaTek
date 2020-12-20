import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent implements OnInit {
  profileForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      newTask: new FormControl('',[Validators.required, Validators.minLength(10)])
    });
  }
}
