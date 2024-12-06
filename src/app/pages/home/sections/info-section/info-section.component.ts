import { Component } from '@angular/core';

@Component({
  selector: 'app-info-section',
  standalone: true,
  imports: [],
  template: `
    <div class="w-full pt-32 flex justify-center">
      <div class="h-44 w-96">
        <img src="" class="w-full h-full object-cover" />
      </div>
      <p class="max-w-[400px] ml-24">
        I build creative, scalable and maintainable web apps using modern
        frameworks like <span class="font-medium text-primary">Angular</span> and <span class="font-medium text-primary">Next JS</span>.
      </p>
    </div>
  `,
  styles: ``,
})
export class InfoSectionComponent {}
