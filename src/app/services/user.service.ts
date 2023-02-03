import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Todo } from '../models/todo';

const API_URL = 'https://jsonplaceholder.typicode.com/'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_URL + 'todos');
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(API_URL + 'todos/' + id);
  }
}
