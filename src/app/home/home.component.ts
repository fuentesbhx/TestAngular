import { Component } from '@angular/core';
import { Todo } from '../models/todo';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  todo: Todo[] | undefined;
  
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.showTodo();
  }

  showTodo() {
    this.userService.getTodo()
      .subscribe((data: Todo[]) => this.todo = data);
  }
}
