import { RouterLink } from '@angular/router';
import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (isMenuVisible) {
    <div
      class="w-full h-[100vh] bg-surface-dark/20 flex items-center justify-end fixed top-0 right-0 z-40"
    >
      <div
        class="w-[480px] h-full py-20 px-24 bg-surface-dark text-white flex flex-col"
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
  `,
  styles: ``,
})
export class MenuComponent {
  @Input() isMenuVisible = false;

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
