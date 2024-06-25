import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './thankyou.component.html',
  styleUrl: './thankyou.component.css',
})
export class ThankyouComponent {
  constructor(private router: Router) {}

  homepage() {
    this.router.navigate(['']);
  }
}
