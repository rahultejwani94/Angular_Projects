import { Component } from '@angular/core';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-sibling-2',
  standalone: true,
  imports: [],
  templateUrl: './sibling-2.component.html',
  styleUrl: './sibling-2.component.scss',
})
export class Sibling2Component {
  latestValue!: string;

  constructor(private sharedService: SharedServiceService) {
    this.sharedService.behavioursubject.subscribe(
      (value) => (this.latestValue = value)
    );
  }

  ngOnInit() {
    alert('hey its from ngoninit of sibling 2');
  }

  ngAfterViewInit() {
    alert('hey its from ngafterviewinit of sibling 2');
  }
}
