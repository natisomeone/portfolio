import { Component } from '@angular/core';

@Component({
  selector: 'app-processes-section',
  standalone: true,
  imports: [],
  template: `
    <section class="py-28">
       <h3
          class="tracking-tight mb-12 sm:ml-10 text-xs uppercase text-primary/50 font-medium"
        >
         The process
        </h3>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-12 px-5"
        >
          @for (process of processes; track $index) {

          <div class="w-full h-64 p-5 flex flex-col">
            <p class="text-primary/50 text-xs font-medium">
              {{ process.phase_number }}
            </p>
            <hr class="my-4" />
            <h2 class="text-3xl my-4 tracking-tighter">
              {{ process.phase_name }}
            </h2>
            <p class="leading-7">{{ process.phase_definition }}</p>
          </div>
          }
        </div>
       </section>
  `,
  styles: ``
})
export class ProcessesSectionComponent {

  processes = [
    {
      phase_number: '01',
      phase_name: 'Research',
      phase_definition: ''
    },
    {
      phase_number: '02',
      phase_name: 'Kick_off',
      phase_definition: ''
    },
    {
      phase_number: '03',
      phase_name: 'Strategy',
      phase_definition: ''
    },
    {
      phase_number: '04',
      phase_name: 'Mood Boarding',
      phase_definition: ''
    },
    {
      phase_number: '05',
      phase_name: 'Design',
      phase_definition: ''
    },
    {
      phase_number: '06',
      phase_name: 'Development & Launch',
      phase_definition: ''
    },

  ]

}
