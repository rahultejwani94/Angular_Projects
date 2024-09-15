import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  behavioursubject = new BehaviorSubject("initial value");

  constructor() { 

  }

  updateValue(value: string){
    this.behavioursubject.next(value);
  }
}
