import { Component } from '@angular/core';
import { TechCardComponent } from "../../../../components/tech-card/tech-card.component";

@Component({
  selector: 'app-tech-stack-section',
  standalone: true,
  imports: [TechCardComponent],
  template: `
     <section
        class="min-h-[100vh] py-12 bg-surface-dark border-b border-white/20"
      >
        <h3
          class="tracking-tight mb-8 sm:ml-10 text-xs uppercase text-white/50 font-medium"
        >
          Tech stack
        </h3>
        <hr class="border border-white/10" />
        <app-tech-card [stacks]="tech_stacks" />
      </section>`
})
export class TechStackSectionComponent {

  // Tech Stack Array //
  tech_stacks = [
    {
      img: '../../../../../assets/tech/figma.png',
      name: 'Figma',
      definition: 'Design tool',
      background: 'bg-green-500/40',
    },
    {
      img: '../../../../../assets/tech/angular.png',
      name: 'Angular',
      definition: 'Javascript framework',
      background: 'bg-purple-700/40',
    },
    {
      img: '../../../../../assets/tech/next.png',
      name: 'Next JS',
      definition: 'React framework',
      background: '',
    },
    {
      img: '../../../../../assets/tech/tailwind.png',
      name: 'Tailwind',
      definition: 'CSS Library',
      background: 'bg-blue-500/40',
    },
    {
      img: '../../../../../assets/tech/gsap.jpg',
      name: 'GSAP',
      definition: 'Web Animation Library',
      background: 'bg-green-600/40',
    },
    {
      img: '../../../../../assets/tech/typescript.png',
      name: 'Typescript',
      definition: 'Javascript but better',
      background: 'bg-blue-700/40',
    },
    {
      img: '../../../../../assets/tech/node.png',
      name: 'Node JS',
      definition: `Javascript Runtime env't`,
      background: 'bg-green-400/40',
    },
    {
      img: '../../../../../assets/tech/mongo.png',
      name: 'MongoDB',
      definition: 'Document based database',
      background: 'bg-green-400/40',
    },
    {
      img: '../../../../../assets/tech/firebase.png',
      name: 'Firebase',
      definition: 'SQL Database',
      background: 'bg-yellow-300/40',
    },
    {
      img: '../../../../../assets/tech/git.png',
      name: 'Git',
      definition: 'Version Control',
      background: 'bg-orange-400/20',
    },
    {
      img: '../../../../../assets/tech/react.png',
      name: 'React',
      definition: `Javascript library`,
      background: 'bg-blue-400/40',
    },
    {
      img: '../../../../../assets/tech/scss.png',
      name: 'SCSS',
      definition: 'CSS but better',
      background: 'bg-pink-400/40',
    },
    {
      img: '../../../../../assets/tech/redux.png',
      name: 'Redux',
      definition: 'State Management',
      background: 'bg-purple-500/40',
    },
    {
      img: '../../../../../assets/tech/postman.png',
      name: 'Postman',
      definition: 'API And Networks',
      background: 'bg-orange-600/40',
    },
    {
      img: '../../../../../assets/tech/dev_tools.png',
      name: 'Dev-Tools',
      definition: 'Inspection tool',
      background: '',
    },
  ];
}
