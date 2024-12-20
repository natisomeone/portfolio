import { Component } from '@angular/core';
import { ButtonComponent } from '../ui/button/button.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <form class="flex flex-col items-end">
      @for (form of forms; track $index) {
        <div class="w-full flex border-b border-white/10 mb-16">
          <p class="text-white/50 text-xs mt-1 font-medium">{{form.number}}</p>
          <div class="ml-8">
            <label for="name" class="text-white/90 focus:text-white/50 text-xl tracking-tight"
              >{{form.label}}</label
            >
            <input
              type="{{form.type}}"
              placeholder="{{form.placeholder}}"
              class="outline-none w-full border-none placeholder-white/40 text-white/95 bg-transparent h-16 text-xl"
            />
          </div>
        </div>
      }
      <div class="w-full flex border-b border-white/10 mb-16">
          <p class="text-white/50 text-xs mt-1 font-medium">05</p>
          <div class="ml-8 flex-1 flex flex-col">
            <label for="name" class="text-white/90 focus:text-white/50 text-xl tracking-tight"
              >Your Message</label
            >
            <textarea
              type="text"
              placeholder="Hello Nate, I would love to collaborate with you to help me with..."
              class="outline-none w-full border-none placeholder-white/40 text-white/95 bg-transparent mt-4 pr-2 min-h-32 text-xl"
            ></textarea>
          </div>
        </div>
      <app-button [label]="'Send it!'" [textColor]="'text-white'" [borderColor]="'border-white/10'"/>
    </form>
  `,
  styles: ``,
})
export class ContactFormComponent {
  forms = [
    {
      number: '01',
      label: 'What is your Name?',
      placeholder: 'John Doe',
      type: 'text',
    },
    {
      number: '02',
      label: 'What is your Email?',
      placeholder: 'john@doe.com',
      type: 'email',
    },
    {
      number: '03',
      label: 'What is the name of your Organization? (Optional)',
      placeholder: 'John & Doe',
      type: 'text',
    },
    {
      number: '04',
      label: 'What is the service you are looking for?',
      placeholder: 'Web Design, Web Development, Re-design...',
      type: 'text',
    },
  ];
}
