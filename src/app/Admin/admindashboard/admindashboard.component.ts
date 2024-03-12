import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdmindashboardComponent {
  constructor(private router: Router) {}

  navigateToHomeAndReload() {
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }
}
