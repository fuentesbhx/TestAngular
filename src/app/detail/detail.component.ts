import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models/todo';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
    todo: Todo | undefined;

    constructor(private userService: UserService, private route: ActivatedRoute) {
    }

    ngOnInit() {
      const routeParams = this.route.snapshot.paramMap;
      const todoIdFromRoute = Number(routeParams.get('id'));
      this.showTodoById(todoIdFromRoute);
    }

    showTodoById(id: number) {
      this.userService.getTodoById(id)
      .subscribe((data: Todo) => this.todo = {
        id: data.id,
        userId: data.userId,
        title: data.title,
        completed: data.completed
      });
      console.log(this.todo);
    }
}
