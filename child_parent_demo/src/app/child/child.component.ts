import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Input({required: true, transform: appendItemWord})
  item!: string;
  
  @Output() itemAddEvent: EventEmitter<string> = new EventEmitter();
  @Output() itemDeleteEvent: EventEmitter<string> = new EventEmitter();

  constructor(){
    console.log("constructor of child")
  }
  addItem(value: string){
    this.itemAddEvent.emit(value);
  }

  deleteItem( value: string){
    console.log("enter key pressed.")
    this.itemDeleteEvent.emit(value);
  }

  ngOnChanges(){
    console.log("ngonchanges of child");
  }
  ngOnInit(){
    console.log("ngoninit of child");
  }
  ngDoCheck(){
    console.log("ngDOcheck of child");
  }
  ngAfterContentInit(){
    console.log("ng after content init of child");
  }
  ngAfterContentChecked(){
    console.log("aftr content checked of child");
  }
  ngAfterViewInit(){
    console.log("ng after view init");
  }
}
function appendItemWord(value: any) {
  return 'Item: ' + value;
}

