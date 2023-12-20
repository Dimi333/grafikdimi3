import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
      <h2>O mne</h2>
      <p>Som grafik digitálnych médii a webový vývojár, a tvorbe sa venujem už 17 rokov. Najnovšie som k tomu pridal aj
          tvorbu webových a mobilných aplikácii. Verím že výsledný produkt je úspešný ak je pri jeho tvorbe súhra
          všetkých jeho častí z ktorých je zložený.</p>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
