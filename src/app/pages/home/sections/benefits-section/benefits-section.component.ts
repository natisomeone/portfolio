import { Component } from '@angular/core';
import { MiniHeaderComponent } from '../../../../components/mini-header/mini-header.component';

@Component({
  selector: 'app-benefits-section',
  standalone: true,
  imports: [MiniHeaderComponent],
  template: `
    <section class="py-12 px-20">
      <!-- Before -->
      <app-mini-header [title]="'Your website before our partnership'" />
      <div class="mt-12 w-full grid grid-cols-2 md:grid-cols-4">
        @for (problem of problems; track $index) {
        <div class="w-full h-96 p-5 flex flex-col">
          <div class="w-full">
            <p class="text-primary/50 text-xs font-medium">
              {{ problem.number }}
            </p>
            <hr class="my-4" />
          </div>
          <div class="mt-32">
            <h2 class="text-2xl my-4 tracking-tighter">{{ problem.title }}</h2>
            <p class="leading-7">{{ problem.description }}</p>
          </div>
        </div>
        }
      </div>

      <!-- After -->
      <div class="w-full mt-44">
        <app-mini-header [title]="'Your website after our partnership'" />
        <div class="mt-12 w-full grid grid-cols-2 md:grid-cols-4">
          @for (solution of solutions; track $index) {
          <div class="w-full h-96 p-5 flex flex-col">
            <div class="w-full">
              <p class="text-primary/50 text-xs font-medium">
                {{ solution.number }}
              </p>
              <hr class="my-4" />
            </div>
            <div class="mt-32">
              <h2 class="text-2xl my-4 tracking-tighter">{{ solution.title }}</h2>
              <p class="leading-7">{{ solution.description }}</p>
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class BenefitsSectionComponent {
  problems = [
    {
      number: '01',
      title: 'Inflexible Web Design',
      description: `Outdated designs struggle to adapt to new features or business needs, causing a fragmented online presence.`,
    },
    {
      number: '02',
      title: 'Slow SEO',
      description: `Poor performance impacts search rankings and drives users away.`,
    },
    {
      number: '03',
      title: 'Delayed Time to Market',
      description: `Traditional development delays launches, putting teams under constant pressure.`,
    },
    {
      number: '04',
      title: 'Weak Brand Identity',
      description: ` A lack of brand essence prevents the website from resonating with the audience.`,
    },
  ];

  solutions = [
    {
      number: '01',
      title: 'Flexible Web Design',
      description: `Adaptive designs allow for seamless feature integration and business adaptability, ensuring a unified presence.`,
    },
    {
      number: '02',
      title: 'Outstanding SEO',
      description: ` Modern approaches streamline development, enabling timely launches with less pressure.`,
    },
    {
      number: '03',
      title: 'Accelerated Time-to-Market',
      description: ` Modern approaches streamline development, enabling timely launches with less pressure.`,
    },
    {
      number: '04',
      title: 'Strong Brand Identity',
      description: `A website that reflects the brand’s uniqueness connects with audiences and builds trust.`,
    },
  ];
}
