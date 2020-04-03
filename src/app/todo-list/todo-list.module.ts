import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { ToDoService } from '../shared/services/todo.service';
import { CommonModule } from '@angular/common';
import { MomentPipe } from '../shared/pipes/moment.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoListComponent } from './todo-list.component';
import { TodoListAddComponent } from './todo-list-add/todo-list-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FontAwesomeModule,
        FormsModule
    ],
    declarations: [
        TodoListItemComponent,
        TodoListComponent,
        TodoListAddComponent,
        MomentPipe
    ],
    exports: [
        TodoListItemComponent,
        TodoListComponent,
        TodoListAddComponent,
        FontAwesomeModule,
        MomentPipe
    ],
    providers: [
        ToDoService
    ]
})

export class TodoListModule {}