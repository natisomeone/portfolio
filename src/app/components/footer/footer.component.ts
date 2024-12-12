import { RouterLink } from '@angular/router';
import { appConfig } from './../../app.config';
import { Component } from '@angular/core';
import { ButtonComponent } from "../ui/button/button.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  template: `
    <footer
      class="w-full h-[100vh] flex flex-col pt-28 justify-between px-10 items-center bg-surface-dark relative p-10"
    >
    <div class="flex flex-col items-center w-full justify-between">
        <h1
          class="text-9xl mb-12 text-white font-medium tracking-tighter"
        >
          Looking for a web <br>
          developer?
        </h1>
        <app-button [label]="'Get In Touch'" [borderColor]="'border-white/10'" [textColor]="'text-white'"/>
        <!-- <div class="pr-6">
          <div class="mt-12 flex flex-col items-end">
            <h4 class="text-[10px] uppercase font-medium text-white/40 mb-4">
              Website Links
            </h4>
            <ul class="flex flex-col items-start">
              @for (web_link of web_links; track $index) {
              <li
                class="mb-2 text-sm font-medium cursor-pointer text-white tracking-tight"
                [routerLink]="web_link.link"
              >
                {{ web_link.label }}
              </li>
              }
            </ul>
          </div>
        </div> -->
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
      label : 'Home',
      link: '/'
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
