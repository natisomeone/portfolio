import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { TechCardComponent } from "../../components/tech-card/tech-card.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent, TechCardComponent],
  template: `
    <div class="w-full h-full">
      <section
        class="pt-24 px-2 flex flex-col md:flex-row items-start justify-between sm:px-5 md:px-10"
      >

      </section>
      <section class="sm:px-5 md:px-10">

      </section>
      <section
        class="min-h-[100vh] py-12 bg-surface-dark border-b border-white/20"
      >
        <h3
          class="tracking-tight mb-8 sm:ml-10 text-xs uppercase text-white/50 font-medium"
        >
          Tech stack
        </h3>
        <hr class="border border-white/10" />
        <app-tech-card [stacks]="tech_stacks"/>
      </section>
      <app-footer />
    </div>
  `,
  styles: ``,
})
export class AboutComponent {
  services = [
    {
      package_name: 'Design',
      package_description: '',
    },
    {
      package_name: 'Development',
      package_description: '',
    },
    {
      package_name: 'Full Package',
      package_description: '',
    },
  ];

  tech_stacks = [
    {
      img: '../../../assets/tech/figma.png',
      name: 'Figma',
      definition: 'Design tool',
      background: 'bg-green-500/20'
    },
    {
      img: '../../../assets/tech/angular.png',
      name: 'Angular',
      definition: 'Javascript framework',
      background: 'bg-purple-700/30'
    },
    {
      img: '../../../assets/tech/next.png',
      name: 'Next JS',
      definition: 'React framework',
      background: 'bg-white/60'
    },
    {
      img: '../../../assets/tech/tailwind.png',
      name: 'Tailwind',
      definition: 'CSS Library',
      background: 'bg-blue-500/30'
    },
    {
      img: '../../../assets/tech/gsap.jpg',
      name: 'GSAP',
      definition: 'Web Animation Library',
      background: 'bg-green-600/30'
    },
    {
      img: '../../../assets/tech/typescript.png',
      name: 'Typescript',
      definition: 'Javascript but better',
      background: 'bg-blue-700/30'
    },
    {
      img: '../../../assets/tech/node.png',
      name: 'Node JS',
      definition: `Javascript Runtime env't`,
      background: 'bg-green-400/20'
    },
    {
      img: '../../../assets/tech/mongo.png',
      name: 'MongoDB',
      definition: 'Document based database',
      background: 'bg-green-400/30'
    },
    {
      img: '../../../assets/tech/firebase.png',
      name: 'Firebase',
      definition: 'SQL Database',
      background: 'bg-yellow-300/30'
    },
    {
      img: '../../../assets/tech/git.png',
      name: 'Git',
      definition: 'Version Control',
      background: 'bg-orange-400/10'
    },
    {
      img: '../../../assets/tech/react.png',
      name: 'React',
      definition: `Javascript library`,
      background: 'bg-blue-400/30'
    },
    {
      img: '../../../assets/tech/scss.png',
      name: 'SCSS',
      definition: 'CSS but better',
      background: 'bg-pink-400/20'
    },
    {
      img: '../../../assets/tech/redux.png',
      name: 'Redux',
      definition: 'State Management',
      background: 'bg-purple-500/20'
    },
    {
      img: '../../../assets/tech/postman.png',
      name: 'Postman',
      definition: 'API And Networks',
      background: 'bg-orange-600/30'
    },
    {
      img: '../../../assets/tech/dev_tools.png',
      name: 'Dev-Tools',
      definition: 'Inspection tool',
      background: ''
    },
  ];
}
