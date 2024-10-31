import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Main_Comp';
  constructor (private router: Router){}

  navigateToService(event : Event){
      event.preventDefault();
      this.router.navigate(['/service']);
    }
}



