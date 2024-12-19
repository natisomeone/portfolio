import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MenuBtnComponent } from './components/menu-btn/menu-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, MenuBtnComponent],
  template: ` <main class="w-full h-full relative overflow-x-hidden">
    <app-menu [isMenuVisible]="isMenuVisible"/>
    <app-menu-btn [toggleMenu]="toggleVisibility"/>
    <router-outlet></router-outlet>
  </main>`,
})
export class AppComponent {
  title = 'portfolio';

  isMenuVisible = false

  toggleVisibility($event?: Event): void {
    this.isMenuVisible = !this.isMenuVisible
    $event?.stopPropagation()
  }
}
