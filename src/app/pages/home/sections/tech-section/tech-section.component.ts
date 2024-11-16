import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/ui/header/header.component';
import { SubHeaderComponent } from '../../../../components/ui/sub-header/sub-header.component';

@Component({
  selector: 'app-tech-section',
  standalone: true,
  imports: [HeaderComponent, SubHeaderComponent],
  template: `
    <section class="flex py-28 bg-surface-50">
      <div class="w-[35%]">
        <app-sub-header [title]="'{ About }'" />
        <app-header [title]="'Tech Stack'" />
        <p>
          This are the technologies i use in daily bases to <br />
          work on client and personal projects.
        </p>
      </div>
      <div class="flex-1 pt-56">
      <app-sub-header [title]="'Main Stack ⌨️'" />
        <div class="w-full grid grid-cols-3 gap-2">
          @for (tech of techs; track $index) {
          <div class="h-16 w-full border border-primary/10 p-2 flex">
            <div class="h-full w-14 mr-4 p-2">
              <img
                [src]="tech.src"
                class="w-full h-full object-contain"
                alt=""
              />
            </div>
            <div>
              <p>{{ tech.name }}</p>
              <p class="text-sm text-primary/70">{{ tech.type }}</p>
            </div>
          </div>
          }
        </div>
        <div class="w-full mt-10">
          <app-sub-header [title]="'Tools ⚙️'" />
          <div class="w-full grid grid-cols-3 gap-2">
          @for (tool of tools; track $index) {
          <div class="h-16 w-full border border-primary/10 p-2 flex">
            <div class="h-full w-14 mr-4 p-2">
              <img
                [src]="tool.src"
                class="w-full h-full object-contain"
                alt=""
              />
            </div>
            <div>
              <p>{{ tool.name }}</p>
              <p class="text-sm text-primary/70">{{ tool.type }}</p>
            </div>
          </div>
          }
        </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class TechSectionComponent {
  techs = [
    {
      src: '../../../../../assets/tech/angular.png',
      name: 'Angular',
      type: 'Javascript framework',
    },
    {
      src: '../../../../../assets/tech/typescript.png',
      name: 'Typescript',
      type: 'Language',
    },
    {
      src: '../../../../../assets/tech/next.png',
      name: 'Next JS',
      type: 'React framework',
    },
    {
      src: '../../../../../assets/tech/gsap.jpg',
      name: 'GSAP',
      type: 'Animation library',
    },
    {
      src: '../../../../../assets/tech/tailwind.png',
      name: 'Tailwind',
      type: 'CSS library',
    },
    {
      src: '../../../../../assets/tech/git.png',
      name: 'Git',
      type: 'Version Control',
    },
  ];

  tools = [
    {
      src: '../../../../../assets/tech/figma.png',
      name: 'Figma',
      type: 'Design tool',
    },
    {
      src: '../../../../../assets/tech/vscode.png',
      name: 'VS Code',
      type: 'Code Editor or IDE',
    },
    {
      src: '../../../../../assets/tech/postman.png',
      name: 'Postman',
      type: 'Network and API status',
    },
    {
      src: '../../../../../assets/tech/github.png',
      name: 'Github',
      type: 'Version control tool',
    },
    {
      src: '../../../../../assets/tech/jira.png',
      name: 'Jira',
      type: 'Productivity tool',
    },
  ]
}
