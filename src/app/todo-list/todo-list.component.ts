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
  
  toggleTask(listID: number) {
    let newIsOpen:boolean;
    let currentTask = this.toDoService.get(`todolist/${listID}`);
    newIsOpen = currentTask["isOpen"];
    if(newIsOpen) {
      this.toDoService.put(`todolist/${listID}`, 'false'); 
    } else {
      this.toDoService.put(`todolist/${listID}`, 'true');
    }
  }
  
  ngOnInit() {
    this.s1 = this.toDoService.getToDoList()
      .subscribe((toDoList: ToDoList[]) => {
        this.toDoList = toDoList;
      });
  }

  ngOnDestroy() {
    if(this.s1) {
      this.s1.unsubscribe();
    }
  }

}
