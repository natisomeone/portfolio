import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <h2 class="text-5xl font-medium tracking-tight leading-[60px] text-wrap header">{{title}}</h2>
  `,
  styles: ``
})
export class HeaderComponent {
 @Input() title: string = ''

}
