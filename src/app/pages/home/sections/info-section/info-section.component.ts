import { Component } from '@angular/core';

@Component({
  selector: 'app-info-section',
  standalone: true,
  imports: [],
  template: `
    <section
      class="sm:py-32 sm:px-5 md:p-32 flex relative items-center justify-between"
    >
      <p
        class="max-w-[280px] text-start leading-5 text-xs uppercase"
      >
        I'm a web designer and <br /> developer
        with expertise in <br /> Angular and
        NExt JS.
      </p>
      <p
        class="max-w-[280px] text-end leading-5 text-xs uppercase"
      >
        passionate about creating <br />
        unforgettable and beautiful<br /> digital
        experiences.
      </p>
    </section>
  `,
  styles: ``,
})
export class InfoSectionComponent {}
