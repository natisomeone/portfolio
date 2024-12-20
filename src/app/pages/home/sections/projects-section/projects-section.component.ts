import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/ui/header/header.component';
import { ButtonComponent } from "../../../../components/ui/button/button.component";
import { RouterLink } from '@angular/router';
import { MiniHeaderComponent } from "../../../../components/mini-header/mini-header.component";

// import gsap

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [ButtonComponent, RouterLink, MiniHeaderComponent],
  template: `
    <section class="flex flex-col items-center pb-36">
      <div class="flex w-full px-20 flex-col mb-12">
        <app-mini-header [title]="'Recent Work'"/>
        <ul class="w-full border-t mt-10">
          @for (project of projects; track $index) {
            <li
              class="w-full border-b flex items-center py-14 justify-between px-10 hover:px-20 transition-all ease-in-out cursor-pointer duration-500"
            >
              <h2 class="text-6xl font-medium capitalize tracking-tighter">
                {{project.name}}
              </h2>
              <p>{{project.work_type}}</p>
            </li>
          }
        </ul>
      </div>
      <app-button [label]="'More Work'" routerLink="/work"/>
    </section>
  `,
  styles: ``,
})
export class ProjectsSectionComponent {
  ngOnInit() {
    this.pinAnimation();
  }

  pinAnimation() {}

  projects = [
    {
      name: 'Auto-School',
      work_type: 'Design & Development'
    },
    {
      name: 'Chat-Rev',
      work_type: 'Design & Development'
    },
    {
      name: 'A-Plus',
      work_type: 'Design & Development'
    },
    {
      name: 'FJA Law',
      work_type: 'Design & Development'
    },
    {
      name: 'Dev-Chats',
      work_type: 'Design & Development'
    }
  ]
}
