import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `    
  <app-nav></app-nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'vehicles-store-ui';
}
