import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {MenuComponent} from "./menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-menu></app-menu>
    <router-outlet></router-outlet>
  `,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterLink,
    NgOptimizedImage,
    MenuComponent,
  ],
  styles: []
})
export class AppComponent {
  public title = 'grafikdimi3';
}
