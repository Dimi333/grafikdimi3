import {Component, OnInit} from '@angular/core';
import {RouterLinkActive, RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu',
  template: `
    <menu>
      <a routerLink="/" routerLinkActive="active" href="#">Domov</a>
      <a routerLink="/work" routerLinkActive="active" href="#">PRÁCE</a>
      <a routerLink="/about" routerLinkActive="active" href="#">O MNE</a>
      <a routerLink="/links" routerLinkActive="active" href="#"> ODKAZY</a>
      <a routerLink="/contact" routerLinkActive="active" href="#"> KONTAKT:</a>
      <p>DIMI3(ZAVINÁČ)GRAFIKDIMI3.SK</p>
    </menu>
  `,
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  styles: [`
    menu {
      display: flex;
      height: 100vh;
      position: fixed;
      flex-flow: column;
      justify-content: space-evenly;
    }
  `]
})
export class MenuComponent implements OnInit {

  public constructor() {
  }

  public ngOnInit(): void {
  }

}
