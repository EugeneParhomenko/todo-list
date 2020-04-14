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
  @Output() deleteToDoListItem = new EventEmitter<any>();

  // Font Awesome Library
  faTasks = faTasks;
  faCheck = faCheck;
  faRedo = faRedo;
  faTrash = faTrash;

  isChangeTask:boolean = false;
  isTaskLoad:boolean = false;
  s1:Subscription;
  s2:Subscription;
  toDoListItem:ToDoList;
  private btnText: string = '';

  private isOpen: boolean;

  constructor(
    private toDoService: ToDoService
  ) { }

  renderTodoListItem(listID:number){
    this.s1 = this.toDoService.getToDoListItem(listID)
    .subscribe((toDoListItem: ToDoList) => {
      this.toDoListItem = toDoListItem;
      this.isTaskLoad = true;
      this.isOpen = toDoListItem.isOpen;
      this.btnText = this.isOpen ? 'Закрыть' : 'Открыть заново';

    });
  }

  deleteTodoItem(taskID:number) {
    this.deleteToDoListItem.emit(taskID);
    this.closeTodoItem();
  }

  closeTodoItem(){
    this.toggleShowTodoItem.emit();
    this.isChangeTask = false;
  }

  toggleTaskChange(){
    this.isChangeTask = !this.isChangeTask;
  }

  toggleTaskItem(taskID:number){
    this.isOpen = !this.isOpen;
    this.btnText = this.isOpen ? 'Закрыть' : 'Открыть заново'
    this.toggleTask.emit(taskID);
  }

  onSubmit(form: NgForm){
    let {taskTitle, taskText, taskRate} = form.value;
    const task = new ToDoList(taskTitle, taskText, taskRate, this.toDoListItem.date, true, this.toDoListItem.id);

    this.s2 = this.toDoService.updateToDoList(task)
      .subscribe(() => {
        this.renderTodoListItem(this.showTodoItemID);
        this.isChangeTask = false;
      });
  }

  ngOnInit() {
    this.renderTodoListItem(this.showTodoItemID);
  }

  ngOnDestroy() {
    if(this.s1) {
      this.s1.unsubscribe();
    }
    if(this.s2) {
      this.s2.unsubscribe();
    }
  }

}
