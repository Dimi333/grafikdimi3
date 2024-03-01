import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <main>
      <h2>
        Kontakt
      </h2>
    </main>
  `,
  standalone: true,
  styles: []
})
export class ContactComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }

}
