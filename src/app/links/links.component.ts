import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  standalone: true,
  template: `
    <main>
      <h2>Odkazy</h2>
      <p>Responzívna e-mailová html predloha
        http://tedgoas.github.io/Cerberus/</p>
      <p>
        Svetlejšie/tmavšie farby v css premenných
        https://kevingimbel.de/blog/2021/06/darken-and-lighten-colors-with-css/</p>
      <p>
        Využitie interpolácie na webe (napr. pri animáciach)
        https://www.trysmudford.com/blog/linear-interpolation-functions/</p>
      <p>
        Regex pre validáciu dátumov:
        https://www.myintervals.com/blog/2009/05/20/iso-8601-date-validation-that-doesnt-suck/
      </p>
    </main>
  `,
  styles: [
  ]
})
export class LinksComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }

}
