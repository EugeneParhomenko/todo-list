import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ToDoList } from '../models/todo.model';
import { Observable } from 'rxjs';

@Injectable()
export class ToDoService {

    private serverUrl = 'http://localhost:3200/';

    constructor(public http: HttpClient) {
    }

    
    getToDoList(){
        return this.http.get(this.getUrl('todolist'));
    }

    addToDoList(toDoList: ToDoList):Observable<ToDoList> {
        return this.post('todolist', toDoList)
    }

    updateToDoList(toDoList: ToDoList):Observable<any> {
        return this.put(`todolist/${toDoList.id}`, toDoList)
    }

    getToDoListItem(listID:number){
        return this.http.get(this.getUrl(`todolist/${listID}`));
    }



    get(url: string = ''){
        return this.http.get(this.getUrl(url));
    }

    put(url: string, data: any = {}): Observable<any>{
        return this.http.put(this.getUrl(url), data);
    }

    post(url: string = '', data: any = {}): Observable<any> {
        return this.http.post(this.getUrl(url), data);
    }

    delete(url: string = ''): Observable<any> {
        return this.http.delete(this.getUrl(url));
    }

    private getUrl(url: string = ''):string {
        return this.serverUrl + url;
    }
    

}