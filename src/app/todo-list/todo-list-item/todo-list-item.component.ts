import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDoService } from 'src/app/shared/services/todo.service';
import { Subscription } from 'rxjs';
import { ToDoList } from 'src/app/shared/models/todo.model';

  // Font Awesome Library
  import { faTasks } from '@fortawesome/free-solid-svg-icons';
  import { faCheck } from '@fortawesome/free-solid-svg-icons';
  import { faRedo } from '@fortawesome/free-solid-svg-icons';
  import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit, OnDestroy {

  @Input() showTodoItemID:number;
  @Output() toggleShowTodoItem = new EventEmitter<any>();
  @Output() toggleTask = new EventEmitter<any>();

  // Font Awesome Library
  faTasks = faTasks;
  faCheck = faCheck;
  faRedo = faRedo;
  faTrash = faTrash;

  isChangeTask:boolean = false;
  s1:Subscription;
  toDoListItem:ToDoList;

  constructor(
    private toDoService: ToDoService
  ) { }

  renderTodoListItem(listID:number){
    this.s1 = this.toDoService.getToDoListItem(listID)
    .subscribe((toDoListItem: ToDoList) => {
      this.toDoListItem = toDoListItem;
      console.log(this.toDoListItem);
    });
  }

  closeTodoItem(){
    this.toggleShowTodoItem.emit();
  }

  toggleTaskItem(){
    this.toggleTask.emit();
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  ngOnInit() {
    this.renderTodoListItem(this.showTodoItemID);
  }

  ngOnDestroy() {
    if(this.s1) {
      this.s1.unsubscribe();
    }
  }

}
