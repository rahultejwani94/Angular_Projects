import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from '../models/custom-types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-list.component.html',
  styleUrl: './display-list.component.scss'
})
export class DisplayListComponent {

  actionName: boolean = false;
    @Input()
  toDoList!: ToDo[];

  @Output() taskClickedEvent = new EventEmitter<any>();

  trackByFunction(index: any, task: ToDo){
    return task.taskName;
  }

  taskClicked(event: any,task: ToDo, index: number){
    let isChecked=event.target.checked;
    this.taskClickedEvent.emit({isChecked, index})
  }

}
