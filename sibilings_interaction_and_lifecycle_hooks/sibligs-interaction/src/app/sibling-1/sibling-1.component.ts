import { Component } from '@angular/core';
import { SharedServiceService } from '../services/shared-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sibling-1',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sibling-1.component.html',
  styleUrl: './sibling-1.component.scss'
})
export class Sibling1Component {

  constructor(private sharedServiceService: SharedServiceService){
    
  }

  sendData(data: string) {
    this.sharedServiceService.updateValue(data);
  }

  ngOnInit(){
    alert("hey its from ngoninit of sibling 1");
  }

}
