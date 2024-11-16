import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/ui/header/header.component';

// import gsap

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [],
  template: `
    <section class="flex pt-36">
      <h2
        class="text-[26em] uppercase text-center font-medium tracking-tighter header"
      >
        W<span class="uppercase tracking-tighter header italic">o</span>&nbsp;rk
      </h2>
    </section>
  `,
  styles: ``,
})
export class ProjectsSectionComponent {
  ngOnInit() {
    this.pinAnimation();
  }

  pinAnimation() {}
}
