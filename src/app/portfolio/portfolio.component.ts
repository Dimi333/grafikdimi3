import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  template: `
     <h2>Vybraté práce</h2>
      <h3>Futbal HUB</h3>
      <p>Webová aplikácia na zapisovanie futbalových výsledkov Futbal HUB. Postavená na Angular s PHP a mysql databázou na backende.</p>

      <h3>Tartaria</h3>
      <p>2D plošinovka v JavaScripte. Tartaria. Vytvorená za pomoci technológie Phaser.js v2.</p>

      <h3>NG Mailer</h3>
      <p>Webový editor pre tvorbu responzívnych html e-mailov. Pre spoločnosť ELET. Postavená na Angular a integrovaná do firemného ekosystému.</p>

      <h3>Karty osudu</h3>
      <p>Webová hra s tarotovými kartami Karty osudu. Jednoduché HTML, CSS (hlavne animácie) a trocha Javascriptu. Plus ľúbivý grafický design.</p>

      <h3>PAGAN</h3>
      <p>Webová fantasy hra. V spolupráci s Ján Repáň. Postavená na technológii angular, PHP a sqlite na backende. Hra nieje dokončená s dôvodu privysokých nárokov na čas. (Keďže sa jedná o hobby projekt). Možno v budúcnosti sa k tomu vrátim, ak niekto nájde čarovný stroj, ktorý preklopí AngularJS appku do Angular.</p>

      <h3>Edenred Benefity</h3>
      <p>Mobilná aplikácia pre Edenred Edenred Benefity.</p>
  `,
  styles: [
  ]
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
