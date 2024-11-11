import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/ui/header/header.component';

@Component({
  selector: 'app-tech-section',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <section class="flex  pt-28">
      <div class="w-[35%]">
        <app-header [title]="'Tech Stack'" />
        <p>
          This are the technologies i use in daily bases to work on client and
          personal projects.
        </p>
      </div>
      <div class="flex-1 pl-5 pt-48"></div>
    </section>
  `,
  styles: ``,
})
export class TechSectionComponent {}
