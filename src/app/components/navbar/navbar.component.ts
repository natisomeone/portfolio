import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="w-full pl-5 pr-10 py-7 flex items-center justify-between z-50">
      <p class="text-xs leading-tight z-40 {{textColor}}">Open for any <br> collaborations or offers</p>
      <p class="text-center leading-tight z-40 text-xs {{textColor}}">
        Hello my name is <br>Nathan.
      </p>
      <div
      (click)="toggleMenu()"
      class="flex items-center w-auto cursor-pointer z-40">
        <p class="text-xs text-end leading-tight {{textColor}}">Interactive <br> guide</p>
        <i class="fa-solid fa-arrow-up ml-2 h-8 w-8 text-xs flex items-center justify-center rounded-full bg-surface-50"></i>
      </div>

      <!-- MENU-COMPONENT PARTS -->
      @if (isMenuVisible) {
    <div
      class="w-full h-[100vh] bg-surface-dark flex pt-5 flex-col items-center justify-end fixed top-0 right-0 z-10"
    >
      <div
        class="w-full h-full py-20 px-24 bg-surface-dark text-white flex flex-col"
      >
        <div>
          <h4 class="text-[10px] uppercase font-medium text-white/50 mb-4">
            Navigation
          </h4>
          <hr class="border border-white/10 my-8" />
          <ul>
            @for (web_link of web_links; track $index) {
            <li
              class="mb-3 text-5xl font-medium cursor-pointer text-white tracking-tight"
              [routerLink]="web_link.link"
            >
              {{ web_link.label }}
            </li>
            }
          </ul>
        </div>
        <div class="mt-12">
          <h4 class="text-[10px] uppercase font-medium text-white/40 mb-4">
            Socials
          </h4>
          <ul class="flex">
            @for (social of socials; track $index) {
            <li class="mr-8 text-sm font-medium text-white tracking-tight">
              <a [href]="social.link">{{ social.label }}</a>
            </li>
            }
          </ul>
        </div>
      </div>
    </div>
    }
    </nav>
  `,
  styles: ``,
})
export class NavbarComponent {
  @Input() isMenuVisible = false;

  toggleMenu(){
    this.isMenuVisible = !this.isMenuVisible
  }
  @Input() textColor? : 'text-primary/90'  | 'text-white/70' = 'text-primary/90'

  web_links = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Work',
      link: '/work',
    },
    {
      label: 'About',
      link: '/about',
    },
    {
      label: 'Contact',
      link: '/contact',
    },
  ];

  socials = [
    {
      label: 'Instagram',
      link: '',
    },
    {
      label: 'LinkedIn',
      link: '',
    },
    {
      label: 'Github',
      link: '',
    },
  ];
}
