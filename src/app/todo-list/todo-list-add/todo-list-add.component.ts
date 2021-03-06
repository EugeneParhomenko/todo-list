import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToDoList } from 'src/app/shared/models/todo.model';
import { ToDoService } from 'src/app/shared/services/todo.service';
import { Subscription } from 'rxjs';

  // Font Awesome Library
import { faTasks } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-list-add',
  templateUrl: './todo-list-add.component.html',
  styleUrls: ['./todo-list-add.component.scss']
})
export class TodoListAddComponent implements OnInit, OnDestroy {
  
@Output() renderTodoList = new EventEmitter<any>();
@Output() toggleShowTodoAdd = new EventEmitter<any>();

  sub1: Subscription;

  // Font Awesome Library
  faTasks = faTasks;

  constructor(
    private toDoService: ToDoService
  ) { }

  onSubmit(form: NgForm){
    let {taskTitle, taskText, taskRate} = form.value;
    let date = new Date;
    const task = new ToDoList(taskTitle, taskText, taskRate, date, true);

    this.sub1 = this.toDoService.addToDoList(task)
      .subscribe(() => {
        form.setValue({
          taskTitle: '',
          taskText: '',
          taskRate: 1
        });
        this.renderTodoList.emit();
      });
  }

  ngOnInit(){
  }

  closeTodoAdd(){
    this.toggleShowTodoAdd.emit();
  }


  ngOnDestroy() {
    if(this.sub1) this.sub1.unsubscribe();
  }

}
