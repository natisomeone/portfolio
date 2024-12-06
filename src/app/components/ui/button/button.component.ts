import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button
      class="py-5 px-10 border hover:text-white transition overflow-hidden ease-in-out duration-300 relative group rounded-full mx-2 cursor-pointer"
    >
      <span class="font-medium tracking-tight">{{ content }}</span>
      <div class="absolute bottom-0 left-0 w-full rounded-t-full transition-all duration-300 -z-10 h-0 bg-surface-accent group-hover:h-28"></div>
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  @Input() content: string = '';
}
