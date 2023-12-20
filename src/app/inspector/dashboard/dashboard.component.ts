import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inspector-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class InspectorDashboardComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  inspectNewCalls() {
    this.router.navigate(['inspect-new-call'], { relativeTo: this.route });
  }

  openCalls() {
    this.router.navigate(['open-calls'], { relativeTo: this.route });
  }

  holdCalls() {
    this.router.navigate(['hold-calls'], { relativeTo: this.route });
  }

  closeCalls() {
    this.router.navigate(['close-calls'], { relativeTo: this.route });
  }

  cancelledCalls() {
    this.router.navigate(['cancelled-calls'], { relativeTo: this.route });
  }
}
