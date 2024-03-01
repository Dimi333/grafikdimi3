import { Component, OnInit } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  template: `
    <main>
      <h2>Vybraté práce</h2>
      <article>
        <h3>Elmira</h3>
        <figure>
          <img ngSrc="./../../assets/images/elmira10-1.jpg" alt="FutbalHub" height="360" width="640"
               class="articlefigure">
        </figure>
        <p>Koncept prehliadačovej hry</p>
        <br class="clearer" />
      </article>

      <article>
        <h3>Futbal HUB</h3>
        <figure>
          <img ngSrc="./../../assets/images/futbalhub.jpg" alt="FutbalHub" height="460" width="550"
               class="articlefigure">
        </figure>
        <p>Webová aplikácia na zapisovanie futbalových výsledkov Futbal HUB. Postavená na Angular s PHP a mysql
          databázou
          na
          backende.</p>
        <br class="clearer" />
      </article>

      <article>
        <h3>Tartaria</h3>
        <figure>
          <img ngSrc="./../../assets/images/tart.jpg" alt="FutbalHub" height="460" width="550" class="articlefigure">
        </figure>
        <p>2D plošinovka v JavaScripte. Tartaria. Vytvorená za pomoci technológie Phaser.js v2.</p>
        <br class="clearer" />
      </article>

      <article>
        <h3>NG Mailer</h3>
        <figure>
          <img ngSrc="./../../assets/images/ngmailer.jpg" alt="FutbalHub" height="460" width="550"
               class="articlefigure">
        </figure>
        <p>Webový editor pre tvorbu responzívnych html e-mailov. Pre spoločnosť ELET. Postavená na Angular a integrovaná
          do
          firemného ekosystému.</p>
        <br class="clearer" />
      </article>

      <article>
        <h3>Karty osudu</h3>
        <figure>
          <img ngSrc="./../../assets/images/ko.jpg" alt="FutbalHub" height="460" width="550" class="articlefigure">
        </figure>
        <p>Webová hra s tarotovými kartami Karty osudu. Jednoduché HTML, CSS (hlavne animácie) a trocha Javascriptu.
          Plus
          ľúbivý grafický design.</p>
        <br class="clearer" />
      </article>

      <article>
        <h3>PAGAN</h3>
        <figure>
          <img ngSrc="./../../assets/images/pagan.jpg" alt="FutbalHub" height="460" width="550" class="articlefigure">
        </figure>
        <p>Webová fantasy hra. V spolupráci s Ján Repáň. Postavená na technológii angular, PHP a sqlite na backende. Hra
          nieje dokončená s dôvodu privysokých nárokov na čas. (Keďže sa jedná o hobby projekt). Možno v budúcnosti sa k
          tomu vrátim, ak niekto nájde čarovný stroj, ktorý preklopí AngularJS appku do Angular.</p>
        <br class="clearer" />
      </article>

      <article>
        <h3>Edenred Benefity</h3>
        <figure>
          <img ngSrc="./../../assets/images/trkartapro.jpg" alt="TR Karta Pro" height="460" width="550">
        </figure>
        <p>Mobilná aplikácia pre Edenred.</p>
        <br class="clearer" />
      </article>
    </main>
  `,
  imports: [
    NgOptimizedImage
  ],
  styles: [`
    article {
      background: white;
      color: slategrey;
      padding: 15px;
      margin-bottom: 40px;
      border-radius: 15px;

      h3 {
        margin: 0
      }

      .articlefigure {
        float: left;
        margin: 0 15px 0 0
      }

      p {
        clear: right;
      }

    }
  `]
})
export class PortfolioComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }
}
