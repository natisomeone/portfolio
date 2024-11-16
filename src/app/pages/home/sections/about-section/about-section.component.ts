import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/ui/header/header.component';
import { SubHeaderComponent } from "../../../../components/ui/sub-header/sub-header.component";

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [HeaderComponent, SubHeaderComponent],
  template: `
    <section class="flex bg-surface-50 relative pt-28 h-[800px]">
      <div class="w-[55%]">
        <app-sub-header [title]="'{  Profile  }'"/>
        <app-header
          [title]="
            'I am a web developer with +5 years of experience in the field of web design, product design and web development.'
          "
        />
        <p class="max-w-[500px] mt-44">
          I specialize in designing and building systems, websites and web
          apps using modern frameworks like Angular, React and Next js.
        </p>
      </div>
      <div class="flex-1 flex pr-10 justify-end">
        <img src="" class="w-96 h-[450px] bg-black object-cover" alt="">
      </div>
      <img src="" class="w-44 absolute bottom-16 right-[40%] h-28 bg-black object-cover" alt="">
    </section>
  `,
  styles: ``,
})
export class AboutSectionComponent {}
