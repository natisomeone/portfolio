import { Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { InfoSectionComponent } from './sections/info-section/info-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';

import { FooterComponent } from "../../components/footer/footer.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { BenefitsSectionComponent } from "./sections/benefits-section/benefits-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    InfoSectionComponent,
    ProjectsSectionComponent,
    FooterComponent,
    NavbarComponent,
    BenefitsSectionComponent
],
  template: `
    <div class="w-full h-full flex flex-col">
      <app-navbar />
      <!-- HERO SECTION -->
      <app-hero-section />
      <!-- INFO SECTION -->
      <app-info-section />
      <!-- PROJECTS SECTION -->
      <app-projects-section />
      <!-- BENEFITS SECTION -->
       <app-benefits-section />
      <!-- Footer -->
       <app-footer />
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}
