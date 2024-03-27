import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <main>
      <h2>
        <img ngSrc="../../assets/images/gd3logo.png" priority alt="Grafik dimi3" height="450" width="540">
      </h2>
    </main>
  `,
  imports: [
    NgOptimizedImage
  ],
  styles: []
})
export class HomeComponent implements OnInit {

  public constructor() {
  }

  public ngOnInit(): void {
  }

}
