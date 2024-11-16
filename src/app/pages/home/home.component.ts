import { Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { InfoSectionComponent } from './sections/info-section/info-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { TechSectionComponent } from "./sections/tech-section/tech-section.component";
import { ProcessesSectionComponent } from "./sections/processes-section/processes-section.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    InfoSectionComponent,
    ProjectsSectionComponent,
    AboutSectionComponent,
    TechSectionComponent,
    ProcessesSectionComponent,
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
      <!-- ABOUT SECTION -->
      <app-about-section />
      <!-- PROCESSES SECTION -->
       <app-processes-section />
      <!-- TECH SECTION -->
      <app-tech-section />
      <!-- Footer -->
       <app-footer />
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}
