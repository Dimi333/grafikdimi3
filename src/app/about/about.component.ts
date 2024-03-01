import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <main>
      <h2>O mne</h2>
      <p>Som grafik digitálnych médii a webový programátor, a tvorbe sa venujem už od roku 2005. Najnovšie som k tomu
        pridal aj
        tvorbu webových a mobilných aplikácii. Verím že výsledný produkt je úspešný ak je pri jeho tvorbe súhra
        všetkých jeho častí z ktorých je zložený.</p>
    </main>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  public constructor() {
  }

  public ngOnInit(): void {
  }

}
