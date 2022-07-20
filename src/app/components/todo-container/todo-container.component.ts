import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TosoService } from 'src/app/services/toso.service';
import { NewTodoComponent } from '../new-todo/new-todo.component';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit, OnDestroy {
private subscription:Subscription=new Subscription();
 

  public todo:ITodo;
  public todos:ITodo[];
  
  constructor(public dialog:MatDialog,  private todoService:TosoService){}

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSelectedTodo().subscribe(data=>{
        this.todo=data;

      })
    )
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

  openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
      width: '250px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

 

}
