import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <p>
      <a routerLink="/work" routerLinkActive="active" href="#">PRÁCE</a>
      <a routerLink="/about" routerLinkActive="active" href="#">O MNE</a>
      <a routerLink="/links" routerLinkActive="active" href="#"> ODKAZY</a>
      <a routerLink="/contact" routerLinkActive="active" href="#"> KONTAKT:</a>
      DIMI3(ZAVINÁČ)
      GRAFIKDIMI3.SK</p>
    <router-outlet></router-outlet>
  `,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterLinkWithHref,
    NgOptimizedImage,
  ],
  styles: []
})
export class AppComponent {
  title = 'grafikdimi3';
}
