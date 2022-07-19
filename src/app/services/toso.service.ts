import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TosoService {
  private mock: ITodo[] = [
    { "id":1, "title": "Blue-breasted cordon bleu", "description": "Uraeginthus angolensis", "isCompleted": true, "isArchived": false, "endDate": "6/6/2022", selected:true },
    { "id":2,"title": "Royal tern", "description": "Thalasseus maximus", "isCompleted": false, "isArchived": false, "endDate": "6/26/2022" ,selected:false},
    { "id":3,"title": "Mountain lion", "description": "Felis concolor", "isCompleted": false, "isArchived": false, "endDate": "3/25/2022",selected:false },
    { "id":4,"title": "Whale, long-finned pilot", "description": "Globicephala melas", "isCompleted": true, "isArchived": false, "endDate": "4/4/2022" ,selected:false},
    {"id":5, "title": "Rhinoceros, black", "description": "Diceros bicornis", "isCompleted": false, "isArchived": true, "endDate": "8/19/2021",selected:false },
    { "id":6,"title": "Marten, american", "description": "Martes americana", "isCompleted": true, "isArchived": false, "endDate": "2/25/2022",selected:false },
    { "id":7,"title": "Rhea, gray", "description": "Rhea americana", "isCompleted": true, "isArchived": false, "endDate": "1/24/2022",selected:false },
    { "id":8,"title": "Kingfisher, pied", "description": "Ceryle rudis", "isCompleted": false, "isArchived": true, "endDate": "6/24/2022" ,selected:false},
  ]

  private _todoSubject:BehaviorSubject <Array<ITodo>>=new BehaviorSubject(this.mock)
  private _singleTodoSubject:BehaviorSubject<ITodo>=new BehaviorSubject(this.mock[0])

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
}
