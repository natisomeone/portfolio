import { RouterLink } from '@angular/router';
import { appConfig } from './../../app.config';
import { Component } from '@angular/core';
import { ButtonComponent } from '../ui/button/button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  template: `
    <footer
      class="w-full h-[100vh] flex flex-col pt-28 justify-between px-10 items-center bg-surface-dark relative p-10"
    >
      <div
        class="flex items-center w-[800px] justify-between py-10 px-10 border border-white/10 rounded-2xl"
      >
        <div>
          <h1 class="text-3xl text-white tracking-tight">Convinced already?</h1>
          <p class="text-sm text-white/60 mt-2">
            Drop a line or send me an email. Let's work together <br />
            on your project.
          </p>
        </div>
        <app-button
          [label]="'Get In Touch'"
          [borderColor]="'border-white/10'"
          [textColor]="'text-white'"
        />
      </div>
      <div class="w-full flex items-end justify-between">
        <div>
          <h4 class="text-[10px] uppercase font-medium text-white/40 mb-4">
            Nathan | Designer & Developer
          </h4>
          <ul>
            @for (info of infos; track $index) {

            <li class="mr-8 text-sm font-medium text-white tracking-tight">
              {{ info.content }}
            </li>
            }
          </ul>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col mb-8 items-start">
            <h4 class="text-[10px] uppercase font-medium text-white/40 mb-4">
              Website Links
            </h4>
            <ul class="flex justify-end w-full ">
              @for (web_link of web_links; track $index) {
              <li
                class="mr-8 text-sm font-medium cursor-pointer text-white tracking-tight"
                [routerLink]="web_link.link"
              >
                {{ web_link.label }}
              </li>
              }
            </ul>
          </div>
          <div>
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
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {
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
    {
      label: 'Telegram',
      link: '',
    },
  ];

  buttons = [
    {
      icon: '',
      label: 'info@natedesignsanddevelopes.com',
      link: '',
    },
    {
      icon: '',
      label: '+251-9-55-31-32-66',
      link: '',
    },
  ];

  infos = [
    {
      content: `2024 Edition`,
    },
  ];

  web_links = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'About',
      link: '/about',
    },
    {
      label: 'Work',
      link: '/work',
    },
    {
      label: 'Contact',
      link: '/contact',
    },
  ];
}
