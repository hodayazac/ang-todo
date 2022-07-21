import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, single, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TosoService {
 
  private todos:ITodo[]=[]

  private _todoSubject:BehaviorSubject <Array<ITodo>>=new BehaviorSubject(this.todos)
  private _singleTodoSubject:BehaviorSubject<ITodo>=new BehaviorSubject(this.todos.length ? this.todos[0]:null)

  constructor() { }

  public getTodos():Observable<Array<ITodo>>{
    if (!this._todoSubject.value.length) {
      const todosString = localStorage.getItem('todos');
      if (todosString) {
        const existingTodos: Array<ITodo> = JSON.parse(todosString);
        existingTodos[0].selected = true;
        this._todoSubject.next(existingTodos);
        this._singleTodoSubject.next(existingTodos[0]);
      }

    }
    return this._todoSubject.asObservable()

  }
  public getSelectedTodo():Observable<ITodo>{
    return this._singleTodoSubject.asObservable()
  }
  public setselectedTodo(todo:ITodo){

    this._singleTodoSubject.next(todo)
    
  }
  public addNewTodo(newTodo:ITodo):void{
    console.log(newTodo);
    const existingTodos: Array<ITodo> = this._todoSubject.value;
    existingTodos.push(newTodo);
    this._todoSubject.next(existingTodos);
    localStorage.setItem('todos', JSON.stringify(existingTodos));
  }
  public onCompleteTodo(todoId:string):void{
    const existingTodos:ITodo[]=this._todoSubject.value;

    const todoIndex=existingTodos.findIndex(singleTodo=>singleTodo.id = todoId)
    existingTodos[todoIndex].isCompleted=true;
    this._todoSubject.next(existingTodos)
    localStorage.setItem("todos", JSON.stringify(existingTodos))

  }
 public onTodoAction(todoId: string, action: string): void {
    const existingTodos: Array<ITodo> = this._todoSubject.value;

    const todoIndex = existingTodos.findIndex(
      (singleTodo) => singleTodo.id === todoId
    );
    existingTodos[todoIndex][action] = true;
    this._todoSubject.next(existingTodos);
    localStorage.setItem('todos', JSON.stringify(existingTodos));
  }
}
