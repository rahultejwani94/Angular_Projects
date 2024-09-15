import { Component } from '@angular/core';
import { ToDo } from '../models/custom-types';
import { DisplayListComponent } from "../display-list/display-list.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [DisplayListComponent, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  toDoList: ToDo[]=[];
  textBoxValue: string = "";

  // method to add task to the todo list array
  addTask(event: any){
    let item = event.target.value;
    if(item){
       let task: ToDo = {
      taskName: item,
      isCompleted: false
    }
    this.toDoList.push(task);
    this.textBoxValue="";
    }
  }

  taskClicked(event: any){
    console.log("parent event", event);
    if(event.isChecked){
      this.toDoList[event.index].isCompleted=true;
    }
    else{
      this.toDoList[event.index].isCompleted=false;
    }
  }

  // method to delete task to the todo list array
  deleteTask(item: string){
    let index = -1;
    // loop through todo list array to find the matching task
    for(let i =0; i < this.toDoList.length; i++){
      if(this.toDoList[i].taskName == item){
        index = i;
        break;
      }
    }

    // if match is found remove the task from the todo list.
    if(index != -1){
      this.toDoList.splice(index,1);
    }
  }
}
