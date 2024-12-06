import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav class="w-full pl-5 pr-10 py-7 flex items-center justify-between">
      <p class="text-xs leading-tight">Open for any <br> collaborations or offers</p>
      <p class="text-center leading-tight text-xs">
        Hello my name is <br>Nathan.
      </p>
      <!-- <p class=" text-primary/70 leading-3 text-sm">Frontend Developer</p> -->

      <a href="#">
        <p class="text-xs text-end leading-tight">Web Designer <br> Developer</p>
      </a>
    </nav>
  `,
  styles: ``,
})
export class NavbarComponent {}
