import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer
      class="w-full h-[100vh] flex flex-col justify-end bg-primary relative p-10"
    >
      <div class="pt-2 items-start pb-10 flex justify-end w-full">
        <ul class="flex items-center">
          <a href="#">
            <p class="text-white tracking-widest mx-4 text-xs uppercase">
              Github
            </p>
          </a>
          <a href="#">
            <p class="text-white tracking-widest mx-4 text-xs uppercase">
              Instagram
            </p>
          </a>
          <a href="#">
            <p class="text-white tracking-widest mx-4 text-xs uppercase">
              Telegram
            </p>
          </a>
        </ul>
      </div>
      <div class="flex-1 mt-6 flex justify-end">
        <ul class="w-[65%]">
          <li
            class="group border-t border-b text-4xl w-full py-8 px-4 text-white flex items-center justify-between font-medium border-white/10"
          >
            <span
              class="uppercase text-xs text-white/70 hover:text-white transition duration-200"
              >Email</span
            >
            helloNate.dev
          </li>
          <li
            class="group border-t border-b text-4xl w-full py-8 px-4 text-white flex items-center justify-between font-medium border-white/10"
          >
            <span
              class="uppercase text-xs text-white/70 hover:text-white transition duration-200"
              >Phone</span
            >
            0955313266
          </li>
        </ul>
      </div>
      <div class="flex items-end justify-between pb-5 border-b border-white/20">
        <h2 class="text-white text-9xl tracking-tighter font-bold">
          Contact
        </h2>
        <h2 class="text-white text-2xl tracking-tight font-medium">
          &copy; 2024
        </h2>
      </div>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {}
