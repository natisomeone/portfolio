import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, ContactFormComponent],
  template: `
    <div class="w-full h-auto relative bg-surface-dark">
      <app-navbar [textColor]="'text-white/70'" />
      <div class="w-full pl-32">
        <h2
          class="text-8xl text-white/95 tracking-tighter font-medium ml-4 mt-20"
        >
          Become a Client.
        </h2>
        <section class="w-full grid grid-cols-1 md:grid-cols-2 pt-16">
          <div class="w-full grid grid-cols-1">
            <!-- Contact Form -->
            <app-contact-form />
          </div>

          <!-- Quick Contacts -->
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
    </div>
  `,
  styles: ``,
})
export class ContactComponent {
  details = [
    {
      label: 'nati_someone@gmail.com',
      link: '',
    },
    {
      label: '+251-55-31-32-66',
      link: '',
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
    {
      label: 'Telegram',
      link: '',
    },
  ];
}
