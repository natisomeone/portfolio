import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-header',
  standalone: true,
  imports: [],
  template: `
   <h2 class="text-xs text-primary/50 uppercase ml-5 font-medium">{{title}}</h2>
  `,
  styles: ``
})
export class MiniHeaderComponent {
  @Input() title = ''
}
