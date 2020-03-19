import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ToDoList } from '../models/todo.model';
import { Observable } from 'rxjs';

@Injectable()
export class ToDoService {

    private serverUrl = 'http://localhost:3200/';

    constructor(public http: HttpClient) {
    }

    private getUrl(url: string = ''):string {
        return this.serverUrl + url;
    }

    getToDoList() {
        return this.http.get(this.getUrl('todolist'));
    }

}