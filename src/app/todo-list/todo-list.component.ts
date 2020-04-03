import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../shared/models/todo.model';
import { ToDoService } from '../shared/services/todo.service';
import { Subscription } from 'rxjs';

  // Font Awesome Library
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  // Font Awesome Library
  faTasks = faTasks;
  faCheck = faCheck;
  faRedo = faRedo;
  faTrash = faTrash;


  s1: Subscription;
  toDoList: ToDoList[] = [];
  showTodoAdd:boolean = false;
  showTodoItem:boolean = false;
  showTodoItemID:number;

  constructor(
    private toDoService: ToDoService
  ) { }
  
  ngOnInit(){
    this.renderTodoList();
  }

  toggleTask(listID: number){
    this.toDoService.get(`todolist/${listID}`).subscribe((currentTask: ToDoList) => {
      currentTask.isOpen = !currentTask.isOpen;
      this.toDoService.put(`todolist/${listID}`, currentTask).subscribe(() => {
        this.renderTodoList();
      });
    })
  }

  toggleShowTodoAdd(){
    this.showTodoAdd = !this.showTodoAdd;
  }

  toggleShowTodoItem(listID: number){
    this.showTodoItemID = listID;
    this.showTodoItem = !this.showTodoItem;
  }

  // toggled = new Array<boolean>(this.toDoList.length);
  // toggleDesc(index: number) {
  //   this.toggled[index] = !this.toggled[index];
  //   console.log(this.toggled);
  // }

  renderTodoList(){
    this.s1 = this.toDoService.getToDoList()
    .subscribe((toDoList: ToDoList[]) => {
      this.toDoList = toDoList;
    });
  }

  deleteToDoListItem(listID:number) {
    this.toDoService.delete(`todolist/${listID}`).subscribe(
      ()=>{
        console.log(`${listID} deleted`);
        this.renderTodoList();
      },
      (err) => console.log(err)
    );
  }

  ngOnDestroy() {
    if(this.s1) {
      this.s1.unsubscribe();
    }
  }

}
