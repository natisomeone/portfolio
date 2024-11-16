import { Component } from '@angular/core';
import { SubHeaderComponent } from '../../../../components/ui/sub-header/sub-header.component';
import { HeaderComponent } from '../../../../components/ui/header/header.component';

@Component({
  selector: 'app-processes-section',
  standalone: true,
  imports: [SubHeaderComponent, HeaderComponent],
  template: `
    <section class="flex py-28">
      <div class="w-[35%]">
        <app-sub-header [title]="'{ About }'" />
        <app-header [title]="'My Process'" />
        <p>
          This are steps I follow in order to have a satisfied <br />
          flow of understanding with my clients.
        </p>
      </div>
      <div class="flex-1 pl-5 pt-72">
        <div class="h-80 flex w-full">
          <div class="h-full w-1/2 border border-primary/10 p-6">
            <p class="text-xl">Discovery</p>
          </div>
          <div class="h-full w-1/2"></div>
        </div>
        <div class="h-80 flex w-full">
          <div class="h-full w-1/2"></div>
          <div class="h-full w-1/2 border border-primary/10 p-6">
            <p class="text-xl">Wire-frame</p>
          </div>
        </div>
        <div class="h-80 flex w-full">
          <div class="h-full w-1/2 border border-primary/10 p-6">
            <p class="text-xl">Design System</p>
          </div>
          <div class="h-full w-1/2"></div>
        </div>
        <div class="h-80 flex w-full">
          <div class="h-full w-1/2"></div>
          <div class="h-full w-1/2 border border-primary/10 p-6">
            <p class="text-xl">Mockup Fidelity</p>
          </div>
        </div>
        <div class="h-80 flex w-full">
          <div class="h-full w-1/2 border border-primary/10 p-6">
            <p class="text-xl">Development</p>
          </div>
          <div class="h-full w-1/2"></div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class ProcessesSectionComponent {}
