import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  template: `
    <section
      class="flex flex-col h-auto items-start justify-end pb-40 border-b border-primary"
    >
      <!-- <h4 class="text-primary/70 ml-1 mb-4 mt-44">
        Hi👋I'm Nate, from Ethiopia.
      </h4> -->
      <h1
        class="text-[5.2em] mt-32 text-primary header leading-[80px] tracking-tighter"
      >
        I'm a frontend web developer
        with expertise in Angular and Next js.
      </h1>
      <div class="w-full flex items-center justify-between">
        <div class="flex items-center mt-12">
          <img src="../../../../../assets/profile/p6.jpg" class="w-12 mr-4 h-12 rounded-full object-cover" alt="">
          <p class=" w-[450px]">
            I build creative, scalable and maintainable web and applications, using
            modern frontend frameworks like Angular and Next.js.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class HeroSectionComponent {}
