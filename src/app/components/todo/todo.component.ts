import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

import { ITodo } from 'src/app/models/todo.interface';
import { TosoService } from 'src/app/services/toso.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() set todo(todo: ITodo) {
    this._todo = todo;

  };

  get todo() {
    return this._todo
  }
  private _todo: ITodo

  constructor(private todoService:TosoService) { }

  ngOnInit(): void {
  }

  public onCompleteTodo(todo: ITodo): void {
    // todo.isCompleted = true;
    this.todoService.onTodoAction(todo.id, 'isCompleted');
  }

  public onArchived(): void {
    this.todo.isArchived = true;
    this.todoService.onTodoAction(this.todo.id, 'isArchived');
  }


}
