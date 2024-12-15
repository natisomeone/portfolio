import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [FooterComponent],
  template: `
   <section class="pt-24 md:px-20">
    <h2 class="text-7xl font-medium tracking-tighter">Creating next level <br> digital products.</h2>
    <!-- <hr class="my-8"> -->
    <div class="w-full mt-32 md:px-10">
      <table class="w-full">
        <thead>
          <tr class="border-b h-10">
            <th class="text-xs uppercase font-medium text-primary/50 tracking-tight">Client</th>
            <th class="text-xs uppercase font-medium text-primary/50 tracking-tight">Project</th>
            <th class="text-xs uppercase font-medium text-primary/50 tracking-tight">Service</th>
            <th class="text-xs uppercase font-medium text-primary/50 tracking-tight">Year</th>
          </tr>
        </thead>
        <tbody>
          @for (table of tables; track $index) {
            <tr class="h-28 w-full border-b">
              <td class="text-3xl tracking-tighter">{{table.name}}</td>
              <td class="font-normal">{{table.project}}</td>
              <td class="font-normal">{{table.service}}</td>
              <td class="font-normal">{{table.time}}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
   </section>
   <!-- Footer -->
    <app-footer />
  `,
  styles: ``
})
export class WorkComponent {

  tables = [
    {
      img: '',
      name: 'Chat-Rev',
      project: 'AI Chat Application',
      service: 'Design & Development',
      time: '2024'
    },
    {
      img: '',
      name: 'Merkeb School',
      project: 'School Management System',
      service: 'Design & Development',
      time: '2024'
    },
    {
      img: '',
      name: 'Dev-Chats',
      project: 'Chat app for devs',
      service: 'Development',
      time: '2023'
    },
    {
      img: '',
      name: 'A-Plus',
      project: 'Learning Management System',
      service: 'Development',
      time: '2023'
    },
    {
      img: '',
      name: 'E-com Store',
      project: 'Inventory Management',
      service: 'Development',
      time: '2022'
    },
    {
      img: '',
      name: 'FJA-Law',
      project: 'Website redesign project',
      service: 'Design & Development',
      time: '2022'
    },
    {
      img: '',
      name: 'E-book Store',
      project: 'Collection of personal development books.',
      service: 'Development',
      time: '2021'
    },
    {
      img: '',
      name: '1st Project Kit',
      project: 'My first collection of simple apps.',
      service: 'Design & Development',
      time: '2019'
    },

  ]
}
