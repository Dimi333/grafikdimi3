import { Component, OnInit } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  template: `
    <main>
      <h2>Vybraté práce</h2>
      <img ngSrc="./../../assets/images/elmira10-1.jpg" alt="FutbalHub" height="360" width="640">
      <h3>Elmira</h3>
      <p>Koncept prehliadačovej hry</p>

      <img ngSrc="./../../assets/images/futbalhub.jpg" alt="FutbalHub" height="460" width="550">
      <h3>Futbal HUB</h3>
      <p>Webová aplikácia na zapisovanie futbalových výsledkov Futbal HUB. Postavená na Angular s PHP a mysql databázou
        na
        backende.</p>

      <img ngSrc="./../../assets/images/tart.jpg" alt="FutbalHub" height="460" width="550">
      <h3>Tartaria</h3>
      <p>2D plošinovka v JavaScripte. Tartaria. Vytvorená za pomoci technológie Phaser.js v2.</p>

      <img ngSrc="./../../assets/images/ngmailer.jpg" alt="FutbalHub" height="460" width="550">
      <h3>NG Mailer</h3>
      <p>Webový editor pre tvorbu responzívnych html e-mailov. Pre spoločnosť ELET. Postavená na Angular a integrovaná
        do
        firemného ekosystému.</p>

      <img ngSrc="./../../assets/images/ko.jpg" alt="FutbalHub" height="460" width="550">
      <h3>Karty osudu</h3>
      <p>Webová hra s tarotovými kartami Karty osudu. Jednoduché HTML, CSS (hlavne animácie) a trocha Javascriptu. Plus
        ľúbivý grafický design.</p>

      <img ngSrc="./../../assets/images/pagan.jpg" alt="FutbalHub" height="460" width="550">
      <h3>PAGAN</h3>
      <p>Webová fantasy hra. V spolupráci s Ján Repáň. Postavená na technológii angular, PHP a sqlite na backende. Hra
        nieje dokončená s dôvodu privysokých nárokov na čas. (Keďže sa jedná o hobby projekt). Možno v budúcnosti sa k
        tomu vrátim, ak niekto nájde čarovný stroj, ktorý preklopí AngularJS appku do Angular.</p>

      <img ngSrc="./../../assets/images/trkartapro.jpg" alt="TR Karta Pro" height="460" width="550">
      <h3>Edenred Benefity</h3>
      <p>Mobilná aplikácia pre Edenred Edenred Benefity.</p>
    </main>
  `,
  imports: [
    NgOptimizedImage
  ],
  styles: []
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
