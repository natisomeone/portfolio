import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav
      class="w-full px-10 py-7 border-b border-primary/10 flex items-center justify-between"
    >
      <div class="flex items-center">
        <img
          src="../../../assets/profile/p6.jpg"
          alt=""
          class="w-10 h-10 object-cover rounded-full mr-2"
        />
        <div>
          <p
            class="font-bold text-primary/80 leading-tight uppercase nav_header"
          >
            Nathan.
          </p>
          <p class=" text-primary/70 leading-3 text-sm">Frontend Developer</p>
        </div>
      </div>
      <a href="#">
        <p>natisomeone#gmail.com</p>
      </a>
    </nav>
  `,
  styles: ``,
})
export class NavbarComponent {}
