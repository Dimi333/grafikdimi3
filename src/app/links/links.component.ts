import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  template: `
      <h2>Odkazy</h2>
      <p>Responzívna e-mailová html predloha
          http://tedgoas.github.io/Cerberus/
          Svetlejšie/tmavšie farby v css premenných
          https://kevingimbel.de/blog/2021/06/darken-and-lighten-colors-with-css/
          Využitie interpolácie na webe (napr. pri animáciach)
          https://www.trysmudford.com/blog/linear-interpolation-functions/</p>
  `,
  styles: [
  ]
})
export class LinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
