import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface StackInterface {
  name: string;
  img: string;
  definition: string;
  background: string;
}

@Component({
  selector: 'app-tech-card',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 px-10 my-12"
    >
      @for (stack of stacks; track $index) {
      <div
        class="w-full relative group rounded-xl p-2 h-44 bg-surface-card flex flex-col items-center justify-center"
      >
        <div
          [ngClass]="stack.background"
          class="h-10 w-10 opacity-0 group-hover:opacity-100 p-1 scale-0 group-hover:scale-100 transition-all duration-300 absolute top-4 left-4 bg-surface-dark overflow-hidden rounded-lg"
        >
          <img [src]="stack.img" class="w-full h-full object-contain" />
        </div>
        <div class=" w-full flex flex-col items-center justify-center">
          <p
            class="text-white/90 mt-5 transition-all group-hover:mt-0 duration-500 text-xl tracking-tight"
          >
            {{ stack.name }}
          </p>
          <p
            class="text-xs text-white/60 transition-all opacity-0 duration-300 group-hover:opacity-100"
          >
            {{ stack.definition }}
          </p>
        </div>
      </div>
      }
    </div>
  `,
  styles: ``,
})
export class TechCardComponent {
  @Input() stacks!: StackInterface[];
}
