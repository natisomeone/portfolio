import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent],
  template: `
    <div class="w-full h-auto relative bg-surface-dark">
      <app-navbar [textColor]="'text-white/70'"/>
      
      <section class="w-full grid grid-cols-1 md:grid-cols-2 pt-32">
        <div class="w-full h-96 border">

        </div>
        <div class="w-full md:pl-32">
        <div class="mb-12">
            <h4 class="text-[10px] mb-4 uppercase font-medium text-white/40">
              Contact details
            </h4>
            <ul>
            @for (detail of details; track $index) {
              <li class="mb-1 font-medium text-white/90 tracking-tight">
                <a [href]="detail.link">{{ detail.label }}</a>
              </li>
              }
            </ul>
          </div>
        <div>
            <h4 class="text-[10px] uppercase font-medium text-white/40 mb-4">
              Socials
            </h4>
            <ul>
              @for (social of socials; track $index) {
              <li class="mb-1 font-medium text-white/90 tracking-tight">
                <a [href]="social.link">{{ social.label }}</a>
              </li>
              }
            </ul>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: ``,
})
export class ContactComponent {

  details = [
    {
      label: 'nati_someone@gmail.com',
      link: ''
    },
    {
      label: '+251-55-31-32-66',
      link: ''
    }
  ]

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
}
