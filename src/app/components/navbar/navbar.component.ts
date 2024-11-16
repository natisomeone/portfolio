import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav class="w-full px-10 py-7 flex items-center justify-between">
      <p class="font-bold text-primary/80 leading-tight uppercase text-sm nav_header">
        Nathan.
      </p>
      <!-- <p class=" text-primary/70 leading-3 text-sm">Frontend Developer</p> -->

      <a href="#">
        <p>natisomeone#gmail.com</p>
      </a>
    </nav>
  `,
  styles: ``,
})
export class NavbarComponent {}
