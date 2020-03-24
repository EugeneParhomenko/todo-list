import { NgModule } from "@angular/core";
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { ToDoService } from '../shared/services/todo.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TodoListItemComponent
    ],
    providers: [
        ToDoService
    ]
})

export class TodoListModule {}