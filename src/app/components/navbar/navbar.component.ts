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
      <a href="#" class="flex items-center">
        <p class="text-xs text-end leading-tight {{textColor}}">Interactive <br> guide</p>
        <i class="fa-solid fa-arrow-up ml-2 h-8 w-8 text-xs flex items-center justify-center rounded-full bg-surface-50"></i>
      </a>
    </nav>
  `,
  styles: ``,
})
export class NavbarComponent {
  @Input() textColor? : 'text-primary/90'  | 'text-white/70' = 'text-primary/90'
}
