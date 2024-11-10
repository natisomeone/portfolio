import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
  <main class="w-full h-full relative overflow-x-hidden">
    <app-navbar/>
    <router-outlet></router-outlet>
  </main>`,
})
export class AppComponent {
  title = 'portfolio';
}
