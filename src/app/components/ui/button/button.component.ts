import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button
      class="py-5 px-10 border {{borderColor}} {{textColor}} hover:text-white transition overflow-hidden z-40 ease-in-out duration-300 relative group rounded-full mx-2 cursor-pointer"
    >
      <span class="font-medium tracking-tight">{{ label }}</span>
      <div class="absolute -bottom-32 group-hover:bottom-0 left-0 w-full rounded-t-full transition-all duration-300 -z-10 bg-surface-accent h-28"></div>
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() borderColor : ''| 'border-white/10' = ''
  @Input() textColor : 'text-white'| 'text-primary' = 'text-primary'
}
