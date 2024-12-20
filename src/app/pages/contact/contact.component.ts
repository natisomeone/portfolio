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
      <div class="w-full pl-24">
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
            <!-- CONTACT-DETAILS -->
            <div class="mb-12">
              <h4 class="text-[10px] mb-4 uppercase font-medium text-white/40">
                Contact details
              </h4>
              <ul>
                @for (detail of details; track $index) {
                <li class="mb-2 font-medium text-white/90 tracking-tight">
                  <a [href]="detail.link">{{ detail.label }}</a>
                </li>
                }
              </ul>
            </div>
            <!-- BUSINESS INFORMATION -->
            <div class="mb-12">
              <h4 class="text-[10px] mb-4 uppercase font-medium text-white/40">
                Work conditions
              </h4>
              <ul>
                @for (work_condition of work_conditions; track $index) {
                <li class="mb-2 font-medium text-white/90 tracking-tight">
                  <p>{{ work_condition.description }}</p>
                </li>
                }
              </ul>
            </div>
            <!-- SOCIALS -->
            <div>
              <h4 class="text-[10px] uppercase font-medium text-white/40 mb-4">
                Socials
              </h4>
              <ul>
                @for (social of socials; track $index) {
                <li class="mb-2 font-medium text-white/90 tracking-tight">
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

  work_conditions = [
    {
      icon: '',
      description: 'I am available between 3:00AM - 10:00PM'
    },
    {
      icon: '',
      description: 'I work remotely from anywhere.'
    },
    {
      icon: '',
      description: 'Preferable contact methods - Email / Instagram'
    },
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
