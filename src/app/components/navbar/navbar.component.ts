import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav class="w-full pl-5 pr-10 py-7 flex items-center justify-between">
      <p class="text-xs leading-tight {{textColor}}">Open for any <br> collaborations or offers</p>
      <p class="text-center leading-tight text-xs {{textColor}}">
        Hello my name is <br>Nathan.
      </p>
      <a href="#">
        <p class="text-xs text-end leading-tight {{textColor}}">Web Designer <br> Developer</p>
      </a>
    </nav>
  `,
  styles: ``,
})
export class NavbarComponent {
  @Input() textColor? : 'text-primary/90'  | 'text-white/70' = 'text-primary/90'
}
