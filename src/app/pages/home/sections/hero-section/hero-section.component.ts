import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  template: `
    <section
      class="flex flex-col h-auto items-start justify-end pb-40 border-b border-primary"
    >
      <h4 class="text-primary/70 ml-1 mb-4 mt-40">
        Hi👋I'm Nate, from Ethiopia.
      </h4>
      <h1
        class="text-8xl text-primary hero_header leading-[90px] tracking-tighter"
      >
        I'm a frontend web developer <br />
        with expertise in
        <span class="px-2 bg-primary/10 hero_header mt-1 rounded-md pt-2"
          >Angular 18.</span
        >
      </h1>
      <p class="mt-4 w-[450px]">
        I build creative, scalable and maintainable web and applications, using
        modern frontend frameworks like Angular and Next.js.
      </p>
    </section>
  `,
  styles: ``,
})
export class HeroSectionComponent {}
