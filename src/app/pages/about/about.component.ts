import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ServicesSectionComponent } from './sections/services-section/services-section.component';
import { TechStackSectionComponent } from './sections/tech-stack-section/tech-stack-section.component';
import { ProcessesSectionComponent } from './sections/processes-section/processes-section.component';
import { AboutHeroSectionComponent } from './sections/hero-section/hero-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    ServicesSectionComponent,
    TechStackSectionComponent,
    ProcessesSectionComponent,
    AboutHeroSectionComponent,
  ],
  template: `
    <div class="w-full h-full">
      <app-navbar />
      <!-- About Hero Section -->
      <app-about-hero-section />

      <!-- Services Section -->
      <app-services-section />

      <!-- Tech Stack Section -->
      <app-tech-stack-section />

      <!-- Process Section -->
      <app-processes-section />

      <!-- Hobbies  -->
      <section class="py-20 px-4 md:px-20">
        <h1 class="text-4xl text-center tracking-tighter font-medium text-primary">
          When I'm not at work
        </h1>
        <div class="w-full flex flex-col mt-32">
          @for (hobby of hobbies; track $index) {
          <div class="w-full flex py-5 h-72 rounded-2xl border mb-12">
            <div class="w-1/2 border-r h-full">
              <div class="w-full flex items-center justify-center">
                <img
                  src=""
                  class="rounded-xl w-32 h-32 mt-4 -mr-10 -rotate-12"
                />
                <img src="" class="rounded-xl w-32 h-32 rotate-2 z-10" />
                <img
                  src=""
                  class="rounded-xl w-32 h-32 mt-32 -ml-40 -rotate-3"
                />
              </div>
            </div>
            <div class="w-1/2 h-full pt-5 pl-12 flex flex-col justify-center">
              <h3 class="text-primary text-3xl tracking-tight font-medium">
                {{ hobby.name }}
              </h3>
            </div>
          </div>

          }
        </div>
      </section>

      <app-footer />
    </div>
  `,
  styles: ``,
})
export class AboutComponent {
  hobbies = [
    {
      name: 'Playing Chess',
      phrases: '',
    },
    {
      name: 'Calligraphy',
      phrases: '',
    },
    {
      name: 'Reading Books',
      phrases: '',
    },
    {
      name: 'Art',
      phrases: '',
    },
  ];
}
