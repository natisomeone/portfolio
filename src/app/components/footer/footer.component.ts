import { RouterLink } from '@angular/router';
import { appConfig } from './../../app.config';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer
      class="w-full h-[100vh] flex flex-col pt-16 justify-between px-10 items-center bg-surface-dark relative p-10"
    >
      <div class="flex w-full justify-between">
        <div>
          <h1
            class="text-8xl pb-10 border-b flex-1 border-white/30 text-white font-medium tracking-tighter"
          >
            Looking for a web <br />
            developer?
          </h1>
          <div class="mt-10">
            @for (button of buttons; track $index) {
            <button
              class="py-4 w-auto z-50 font-medium tracking-tight px-10 border border-white/30 text-white transition overflow-hidden ease-in-out duration-300 relative group rounded-full mr-2 cursor-pointer"
            >
              {{ button.label }}
              <div
                class="absolute bottom-0 left-0 -z-10 w-full transition-all duration-300 h-0 bg-surface-accent group-hover:h-48"
              ></div>
            </button>
            }
          </div>
        </div>
        <div class="pr-6">
          <div class="w-56 h-44 border"></div>
          <div class="mt-12">
            <h4 class="text-[10px] uppercase font-medium text-white/40 mb-4">
              Website Links
            </h4>
            <ul class="flex">
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
        </div>
        <button
          class="rounded-full absolute left-1/2 top-52 w-40 h-40 flex items-center justify-center text-white bg-surface-accent"
        >
          Get In Touch
        </button>
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
  ];

  buttons = [
    {
      label: 'info@natedesignsanddevelopes.com',
      link: '',
    },
    {
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
