import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NgClass],
  template: `
    <section
      class="flex flex-col h-auto justify-end items-center pb-10 border-b"
    >
      <div class="w-auto mt-12">
        <ul class="flex items-center">
          @for (tab of tabs; track $index) {
          <li
            (click)="selectTab(tab.id)"
            [ngClass]="{ active: selectedTab === tab.id }"
            class="py-5 px-8 border hover:text-white transition overflow-hidden ease-in-out duration-300 relative group rounded-full mx-2 cursor-pointer"
          >
            {{ tab.label }}
            <div class="absolute -bottom-28 group-hover:bottom-0 left-0 w-full rounded-t-full transition-all duration-300 -z-10 bg-surface-accent h-24"></div>
          </li>
          }
        </ul>
      </div>
      @switch (selectedTab) { @case (tabs[0].id) {
      <h1
        class="text-[7em] mt-16 capitalize text-primary text-center font-medium header leading-[100px] tracking-tighter"
      >
        I design and &lbrace;code&rbrace; <br />
        modern websites.
      </h1>
      } @case (tabs[1].id) {
      <h1
        class="text-[7em] mt-16 capitalize text-primary text-center font-medium header leading-[100px] tracking-tighter"
      >
        Making Good Stuff <br> Since 2019.
      </h1>
      } @case (tabs[2].id) {
      <h1
        class="text-[7em] mt-16 text-primary text-center font-medium header leading-[100px] tracking-tighter"
      >
        Design + Clean &lbrace;Code&rbrace;<br />+ Scalable Architecture <br />+
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
