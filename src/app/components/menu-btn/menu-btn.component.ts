import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-btn',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      (click)="toggleMenu()"
      [ngClass]=""
      class="w-16 h-16 rounded-full overflow-hidden bg-surface-dark border-none fixed top-10 z-50 group right-8 flex items-center justify-center"
    >
      <span class=" text-white">M</span>
      <div
        class="absolute -bottom-24 group-hover:bottom-0 left-0 w-full rounded-t-full transition-all duration-300 -z-10 bg-surface-accent h-24"
      ></div>
    </button>
  `,
  styles: ``,
})
export class MenuBtnComponent {
  @Input() toggleMenu(): void{}
}
