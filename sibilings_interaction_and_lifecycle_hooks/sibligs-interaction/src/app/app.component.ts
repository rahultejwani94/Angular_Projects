import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sibling1Component } from "./sibling-1/sibling-1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sibling1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sibligs-interaction';
}
