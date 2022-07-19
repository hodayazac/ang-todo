import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TosoService } from 'src/app/services/toso.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  public todos: Array<ITodo> = [];
  private subscription: Subscription = new Subscription()

  constructor(private todoService: TosoService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getTodos().subscribe(data => {
        console.log(data)
        this.todos = data
      })
    )
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  } 
  onTodoClick(todo: ITodo, index: number): void {
    this.todoService.setselectedTodo(todo)
    this.todos.forEach(todo => {
      if (todo.selected)
        todo.selected = false;
    })
    this.todos[index].selected = true;

  }

}
