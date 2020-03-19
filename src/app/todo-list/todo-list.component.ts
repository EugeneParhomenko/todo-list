import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../shared/models/todo.model';
import { ToDoService } from '../shared/services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  s1: Subscription;
  toDoList: ToDoList[] = [];

  constructor(
    private toDoService: ToDoService
  ) { }
  
  
  ngOnInit() {
    this.s1 = this.toDoService.getToDoList()
      .subscribe((toDoList: ToDoList[]) => {
        this.toDoList = toDoList;
      })
  }

  ngOnDestroy() {
    if(this.s1) {
      this.s1.unsubscribe();
    }
  }

}
