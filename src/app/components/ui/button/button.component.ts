import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button class="flex items-center justify-center w-40 p-2 rounded-2xl my-4 bg-primary h-12">
      <span class="text-white">{{content}}</span>
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  @Input() content: string = ''
  @Input() width: 'w-28' | 'w-32' | 'w-36' | 'w-40' | 'w-44' | 'w-48' = 'w-28'

}
