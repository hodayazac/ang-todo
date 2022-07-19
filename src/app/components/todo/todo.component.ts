import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TosoService } from 'src/app/services/toso.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  public todo:ITodo;

  constructor( private todoService:TosoService) { }
  private subscription:Subscription=new Subscription

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSelectedTodo().subscribe(data=>{
        this.todo=data;

      })
    )
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  public onCompleteTodo(todo:ITodo):void{
    todo.isCompleted=true

  }
  public onArchived(todo:ITodo):void{
    todo.isArchived=true;
   
   
  }



}
