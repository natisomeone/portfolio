import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [],
  template: `
    <p class="text-[10px] font-medium uppercase text-primary/70 mb-5">{{ title }}</p>
  `,
  styles: ``,
})
export class SubHeaderComponent {
  @Input() title: string = '';
}
