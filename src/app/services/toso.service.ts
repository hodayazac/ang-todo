import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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
    return this._todoSubject.asObservable()

  }
  public getSelectedTodo():Observable<ITodo>{
    return this._singleTodoSubject.asObservable()
  }
  public setselectedTodo(todo:ITodo){

    this._singleTodoSubject.next(todo)
    
  }
  public addNewTodo(newTodo:ITodo):void{
    console.log(newTodo)
    const exiistingTodo:ITodo[]=this._todoSubject.value 
    exiistingTodo.push(newTodo)
    this._todoSubject.next(exiistingTodo)
  }
}
