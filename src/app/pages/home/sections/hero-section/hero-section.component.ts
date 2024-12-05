import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NgClass],
  template: `
    <section
      class="flex flex-col h-auto justify-end items-center pb-10 border-b border-primary"
    >
      <div class="w-auto mt-12">
        <ul class="flex items-center">
          @for (tab of tabs; track $index) {
          <li
            (click)="selectTab(tab.id)"
            [ngClass]="{ active: selectedTab === tab.id }"
            class="py-3 px-6 border rounded-full mx-2 cursor-pointer"
          >
            {{ tab.label }}
          </li>
          }
        </ul>
      </div>
      @switch (selectedTab) { @case (tabs[0].id) {
      <h1
        class="text-[7em] mt-16 text-primary text-center font-medium header leading-[100px] tracking-tighter"
      >
        I design and code <br />
        modern websites.
      </h1>
      } @case (tabs[1].id) {
      <h1
        class="text-[7em] mt-16 text-primary text-center font-medium header leading-[100px] tracking-tighter"
      >
        Designing and <br />
        Developing modern <br />
        websites since <br />
        2019.
      </h1>
      } @case (tabs[2].id) {
      <h1
        class="text-[7em] mt-16 text-primary text-center font-medium header leading-[100px] tracking-tighter"
      >
        Design + Clean Code <br />+ Scalable Architecture <br />+
        Maintainability
        <hr
          class="mt-8 mb-4 border-primary mx-auto w-[900px] text-center border-2"
        />
        = High-Performance Websites
      </h1>
      }}
    </section>
  `,
  styles: ``,
})
export class HeroSectionComponent {
  tabs = [
    {
      id: 1,
      label: 'Visitor',
    },
    {
      id: 2,
      label: 'Recruiter',
    },
    {
      id: 3,
      label: 'Engineer',
    },
  ];

  selectedTab: number = 1;
  selectTab(tabId: number) {
    console.log(tabId);
    this.selectedTab = tabId;
  }
}
