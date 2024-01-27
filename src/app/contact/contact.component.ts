import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <main>
      <p>
        contact works!
      </p>
    </main>
  `,
  standalone: true,
  styles: []
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
