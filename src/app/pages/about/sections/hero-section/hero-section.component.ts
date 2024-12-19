import { Component } from '@angular/core';

@Component({
  selector: 'app-about-hero-section',
  standalone: true,
  imports: [],
  template: `
    <section class="pt-10 px-2 flex flex-col items-center sm:px-5 md:px-10">
        <h2 class="text-6xl tracking-tighter font-medium text-primary my-5">
          This is Nate.
        </h2>
        <div
          class="w-full flex px-6 sm:px-12 md:px-32 items-center justify-center"
        >
          <img src="" class="rounded-xl w-52 h-64 mt-4 -mr-10 -rotate-3" />
          <img src="" class="rounded-xl w-52 h-64 rotate-2 z-10" />
          <img src="" class="rounded-xl w-52 -mt-4 -ml-10 -rotate-3 h-64" />
        </div>
        <p class="mt-5 text-xs tracking-tight text-center leading-4">
          Just another web developer. From Addis with love.
        </p>
      </section>
  `,
  styles: ``
})
export class AboutHeroSectionComponent {

}
