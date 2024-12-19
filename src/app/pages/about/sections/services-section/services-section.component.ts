import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [],
  template: `
   <section class="sm:px-5 md:px-10 pt-12 pb-44">
        <h3
          class="tracking-tight mb-12 sm:ml-10 text-xs uppercase text-primary/50 font-medium"
        >
          What I can help you with
        </h3>
        <!-- <hr /> -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-12 px-5"
        >
          @for (service of services; track $index) {

          <div class="w-full h-64 p-5 flex flex-col">
            <p class="text-primary/50 text-xs font-medium">
              {{ service.package_number }}
            </p>
            <hr class="my-4" />
            <h2 class="text-3xl my-4 tracking-tighter">
              {{ service.package_name }}
            </h2>
            <p class="leading-7">{{ service.package_description }}</p>
          </div>
          }
        </div>
      </section>
  `,
  styles: ``
})
export class ServicesSectionComponent {
    // Package Array  //
    services = [
      {
        package_number: '01',
        package_name: 'Design',
        package_description: `With a great sense in design and research.
         I deliver strong and user-friendly web design and experiences.
         `,
      },
      {
        package_number: '02',
        package_name: 'Development',
        package_description: `I build creative, scalable and maintainable web and web applications.
          (Using code to achieve the development goal of any given design.)`,
      },
      {
        package_number: '03',
        package_name: 'The full package',
        package_description: `A complete website from concept to launch. With my experience in web design
           and also in building web applications. You can count on me to deliver the best
            outcome for your business.`,
      },
    ];
}
