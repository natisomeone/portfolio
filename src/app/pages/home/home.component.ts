import { Component } from '@angular/core';
import { HeroSectionComponent } from "./sections/hero-section/hero-section.component";
import { InfoSectionComponent } from "./sections/info-section/info-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, InfoSectionComponent],
  template: `
    <div class="w-full h-full flex flex-col">
      <!-- HERO SECTION -->
       <app-hero-section />
       <!-- INFO SECTION -->
        <app-info-section />
    </div>
  `,
  styles: ``
})
export class HomeComponent {

}
