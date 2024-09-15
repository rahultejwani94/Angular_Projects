import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  itemValue: string ="";
  items: string[] = ["abc", "def", "hjsh"];

  addItem(newItem: string){
    this.items.push(newItem);
  }

  deleteItem(item: string){
    console.log("item: ", item);
    let index= this.items.indexOf(item);
    if(index != -1)
      this.items.splice(index,1);
  }

  ngOnChanges(){
    console.log("ng on changes of parent");
  }
}
