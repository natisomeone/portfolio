import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [FooterComponent, ButtonComponent, NavbarComponent],
  template: `
    <app-navbar />
    <section class="py-24 md:px-20">
      <h2 class="text-7xl font-medium tracking-tighter">
        Work.
      </h2>
      <!-- TODO: Reminder for switch or toggles with button table and grid view -->
      <!-- <hr class="my-8"> -->
      <!-- <div class="w-full mt-32">
      <table class="w-full">
        <thead>
          <tr class="border-b h-10">
            <th class="text-xs uppercase font-medium text-primary/50 tracking-tight pl-10">Client</th>
            <th class="text-xs uppercase font-medium text-primary/50 tracking-tight">Project</th>
            <th class="text-xs uppercase font-medium text-primary/50 tracking-tight">Service</th>
            <th class="text-xs uppercase font-medium text-primary/50 tracking-tight pr-10">Year</th>
          </tr>
        </thead>
        <tbody>
          @for (table of tables; track $index) {
            <tr class="h-28 w-full border-b">
              <td class="text-3xl tracking-tighter pl-10">{{table.name}}</td>
              <td class="font-normal">{{table.project}}</td>
              <td class="font-normal">{{table.service}}</td>
              <td class="font-normal">{{table.time}}</td>
            </tr>
          }
        </tbody>
      </table>
    </div> -->

      <!-- Grid View -->
      <div
        class="w-full mt-32 grid grid-col-1 md:grid-cols-2  gap-14"
      >
        @for (table of tables; track $index) {

        <div class="w-full h-[600px]">
          <div class="w-full h-[450px] bg-surface-dark"></div>
          <div class="w-full flex-1 py-5">
            <h1 class="text-4xl tracking-tighter font-medium text-primary">
              {{ table.name }}
            </h1>
            <hr class="my-5" />
            <div class="flex items-center justify-between">
              <p>{{ table.service }}</p>
              <p>{{ table.time }}</p>
            </div>
          </div>
        </div>
        }
      </div>
      <div class="w-full mt-32 flex items-center justify-center">
        <app-button [label]="'List View'" />
      </div>
    </section>
    <!-- Footer -->
    <app-footer />
  `,
  styles: ``,
})
export class WorkComponent {
  tables = [
    {
      img: '',
      name: 'Chat-Rev',
      project: 'AI Chat Application',
      service: 'Design & Development',
      time: '2024',
    },
    {
      img: '',
      name: 'Merkeb School',
      project: 'School Management System',
      service: 'Design & Development',
      time: '2024',
    },
    {
      img: '',
      name: 'A-Plus',
      project: 'Learning Management System',
      service: 'Development',
      time: '2024',
    },
    {
      img: '',
      name: 'Dev-Chats',
      project: 'Chat app for devs',
      service: 'Development',
      time: '2023',
    },
    {
      img: '',
      name: 'Passion Hall',
      project: 'Tournament Website',
      service: 'Design & Development',
      time: '2023',
    },
    {
      img: '',
      name: 'Inventory App',
      project: 'Collection of non-fiction books',
      service: 'Development',
      time: '2022',
    },
    {
      img: '',
      name: 'E-com Store',
      project: 'Inventory Management',
      service: 'Development',
      time: '2022',
    },
    {
      img: '',
      name: 'FJA-Law',
      project: 'Website redesign project',
      service: 'Design & Development',
      time: '2022',
    },

  ];
}
