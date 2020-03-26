import { NgModule } from "@angular/core";
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { ToDoService } from '../shared/services/todo.service';
import { CommonModule } from '@angular/common';
import { MomentPipe } from '../shared/pipes/moment.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TodoListItemComponent,
        MomentPipe
    ],
    exports: [
        MomentPipe
    ],
    providers: [
        ToDoService
    ]
})

export class TodoListModule {}