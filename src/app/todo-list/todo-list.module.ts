import { NgModule } from "@angular/core";
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListAddComponent } from './todo-list-add/todo-list-add.component';
import { ToDoService } from '../shared/services/todo.service';
import { TodoListComponent } from './todo-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TodoListItemComponent,
        TodoListAddComponent
    ],
    providers: [
        ToDoService
    ]
})

export class TodoListModule {}