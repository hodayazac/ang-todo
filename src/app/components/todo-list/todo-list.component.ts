import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';
import { TosoService } from 'src/app/services/toso.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Array<ITodo> = [];


  constructor(private todoService: TosoService) { }

  ngOnInit(): void {
  
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
