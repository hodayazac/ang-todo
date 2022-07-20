import { Component, OnInit, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ITodo } from 'src/app/models/todo.interface';
import { TosoService } from 'src/app/services/toso.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  

  constructor(public dialog:MatDialog, private todoService:TosoService) { }

  ngOnInit(): void {
  }

  public onNewTodoSubmit():void{

    const value=this.form.form.value
    const newTodo:ITodo={
      id:uuidv4(),
      title:value.title,
      description:value.description,
      isArchived:false,
      isCompleted:false,
      selected:false,
      endDate:value.endDate


    }
    console.log("onSubmit")
    console.log(this.form)
    this.todoService.addNewTodo(newTodo)
    this.dialog.closeAll()

  }

}
