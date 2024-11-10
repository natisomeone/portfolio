import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <main class="w-full h-full px-10 relative overflow-x-hidden">
    <router-outlet></router-outlet>
  </main>`,
})
export class AppComponent {
  title = 'portfolio';
}
