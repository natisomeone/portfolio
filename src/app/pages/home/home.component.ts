import { Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { InfoSectionComponent } from './sections/info-section/info-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';

import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    InfoSectionComponent,
    ProjectsSectionComponent,
    FooterComponent
],
  template: `
    <div class="w-full h-full flex flex-col">
      <!-- HERO SECTION -->
      <app-hero-section />
      <!-- INFO SECTION -->
      <app-info-section />
      <!-- PROJECTS SECTION -->
      <app-projects-section />
      <!-- Footer -->
       <app-footer />
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}
