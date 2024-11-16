import { Component } from '@angular/core';

@Component({
  selector: 'app-info-section',
  standalone: true,
  imports: [],
  template: `
    <div class="w-full">
      <ul class="w-full">
        <li
          class="w-full flex items-center justify-between border-b border-primary px-8 h-36"
        >
          <p
            class="font-medium uppercase text-8xl header pt-6 tracking-tighter"
          >
            Website
          </p>
          <p class="flex flex-col max-w-[400px] text-primary/90">
            <span class="mb-1"> ● </span>Focused on creating visually stunning
            interfaces and exceptional user experiences. Every click is crafted
            for user-friendly, efficient, and meaningful products.
          </p>
        </li>
        <li
          class="w-full flex items-center justify-between border-b border-primary px-8 h-36"
        >
          <p class="flex flex-col max-w-[400px] text-primary/90">
            <span class="mb-1"> ● </span>Focused on creating visually stunning
            interfaces and exceptional user experiences. Every click is crafted
            for user-friendly, efficient, and meaningful products.
          </p>
          <p
            class="font-medium uppercase text-8xl pt-5 header tracking-tighter"
          >
            Design &
          </p>
        </li>
        <li
          class="w-full flex items-center justify-between border-b border-primary px-8 h-36"
        >
          <p
            class="font-medium uppercase text-8xl pt-6 header tracking-tighter"
          >
            Development
          </p>
          <p class="flex flex-col max-w-[400px] text-primary/90">
            <span class="mb-1"> ● </span>Focused on creating visually stunning
            interfaces and exceptional user experiences. Every click is crafted
            for user-friendly, efficient, and meaningful products.
          </p>
        </li>
      </ul>
    </div>
  `,
  styles: ``,
})
export class InfoSectionComponent {}
