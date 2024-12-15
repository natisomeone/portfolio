import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { TechCardComponent } from '../../components/tech-card/tech-card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent, TechCardComponent],
  template: `
    <div class="w-full h-full">
      <!-- About Hero Section -->
      <section class="pt-10 px-2 flex flex-col items-center sm:px-5 md:px-10">
        <h2 class="text-6xl tracking-tighter font-medium text-primary my-5">
          This is Nate.
        </h2>
        <div
          class="w-full flex px-6 sm:px-12 md:px-32 items-center justify-center"
        >
          <img src="" class="rounded-xl w-52 h-64 mt-4 -mr-10 -rotate-3" />
          <img src="" class="rounded-xl w-52 h-64 rotate-2 z-10" />
          <img src="" class="rounded-xl w-52 -mt-4 -ml-10 -rotate-3 h-64" />
        </div>
        <p class="mt-5 text-xs tracking-tight text-center leading-4">
          Just another web developer. From Addis with love.
        </p>
      </section>

      <!-- Services Section -->
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

      <!-- Tech Stack Section -->
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
      </section>

      <!-- Hobbies  -->
      <section class="py-20 px-4 md:px-20">
        <h1 class="text-7xl tracking-tighter font-medium text-primary">
          Out of work, I spend <br />
          my time...
        </h1>
        <div class="w-full flex flex-col mt-32">
          @for (hobby of hobbies; track $index) {
          <div class="w-full flex py-5 h-72 rounded-2xl border mb-12">
            <div class="w-1/2 border-r h-full">
              <div class="w-full flex items-center justify-center">
                <img
                  src=""
                  class="rounded-xl w-32 h-32 mt-4 -mr-10 -rotate-12"
                />
                <img src="" class="rounded-xl w-32 h-32 rotate-2 z-10" />
                <img
                  src=""
                  class="rounded-xl w-32 h-32 mt-32 -ml-40 -rotate-3"
                />
              </div>
            </div>
            <div class="w-1/2 h-full pt-5 pl-12 flex flex-col justify-center">
              <h3 class="text-primary text-3xl tracking-tight font-medium">
                {{hobby.name}}
              </h3>
            </div>
          </div>

          }
        </div>
      </section>
      
      <app-footer />
    </div>
  `,
  styles: ``,
})
export class AboutComponent {
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

  // Tech Stack Array //
  tech_stacks = [
    {
      img: '../../../assets/tech/figma.png',
      name: 'Figma',
      definition: 'Design tool',
      background: 'bg-green-500/40',
    },
    {
      img: '../../../assets/tech/angular.png',
      name: 'Angular',
      definition: 'Javascript framework',
      background: 'bg-purple-700/40',
    },
    {
      img: '../../../assets/tech/next.png',
      name: 'Next JS',
      definition: 'React framework',
      background: '',
    },
    {
      img: '../../../assets/tech/tailwind.png',
      name: 'Tailwind',
      definition: 'CSS Library',
      background: 'bg-blue-500/40',
    },
    {
      img: '../../../assets/tech/gsap.jpg',
      name: 'GSAP',
      definition: 'Web Animation Library',
      background: 'bg-green-600/40',
    },
    {
      img: '../../../assets/tech/typescript.png',
      name: 'Typescript',
      definition: 'Javascript but better',
      background: 'bg-blue-700/40',
    },
    {
      img: '../../../assets/tech/node.png',
      name: 'Node JS',
      definition: `Javascript Runtime env't`,
      background: 'bg-green-400/40',
    },
    {
      img: '../../../assets/tech/mongo.png',
      name: 'MongoDB',
      definition: 'Document based database',
      background: 'bg-green-400/40',
    },
    {
      img: '../../../assets/tech/firebase.png',
      name: 'Firebase',
      definition: 'SQL Database',
      background: 'bg-yellow-300/40',
    },
    {
      img: '../../../assets/tech/git.png',
      name: 'Git',
      definition: 'Version Control',
      background: 'bg-orange-400/20',
    },
    {
      img: '../../../assets/tech/react.png',
      name: 'React',
      definition: `Javascript library`,
      background: 'bg-blue-400/40',
    },
    {
      img: '../../../assets/tech/scss.png',
      name: 'SCSS',
      definition: 'CSS but better',
      background: 'bg-pink-400/40',
    },
    {
      img: '../../../assets/tech/redux.png',
      name: 'Redux',
      definition: 'State Management',
      background: 'bg-purple-500/40',
    },
    {
      img: '../../../assets/tech/postman.png',
      name: 'Postman',
      definition: 'API And Networks',
      background: 'bg-orange-600/40',
    },
    {
      img: '../../../assets/tech/dev_tools.png',
      name: 'Dev-Tools',
      definition: 'Inspection tool',
      background: '',
    },
  ];

  hobbies = [
    {
      name: 'Playing Chess',
      phrases: '',
    },
    {
      name: 'Calligraphy',
      phrases: '',
    },
    {
      name: 'Reading Books',
      phrases: '',
    },
    {
      name: 'Art',
      phrases: '',
    },
  ];
}
